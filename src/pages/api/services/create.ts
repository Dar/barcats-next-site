import type { NextApiRequest, NextApiResponse } from 'next';
import { db, storage } from '../../../app/utils/fbase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { withAuth } from '../../../lib/authMiddleware';
import sharp from 'sharp'; // You'll need to install sharp using `npm install sharp`

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { title, content, imageBase64 } = req.body;
    const uid = (req as any).uid;

    const originalImageBuffer = Buffer.from(imageBase64, 'base64');
    const originalStorageRef = ref(storage, `images/${Date.now()}`);
    const originalSnapshot = await uploadBytes(originalStorageRef, originalImageBuffer);
    const originalImageUrl = await getDownloadURL(originalSnapshot.ref);

    // Create and upload the thumbnail image
    const thumbnailBuffer = await sharp(originalImageBuffer)
      .resize(250) // Resize to a max width/height of 150px
      .jpeg({ quality: 80 }) // Convert to JPEG and set quality
      .toBuffer();

    const thumbnailStorageRef = ref(storage, `thumbnails/${Date.now()}`);
    const thumbnailSnapshot = await uploadBytes(thumbnailStorageRef, thumbnailBuffer);
    const thumbnailUrl = await getDownloadURL(thumbnailSnapshot.ref);

    const docRef = await addDoc(collection(db, 'homepage'), {
      title,
      content,
      imageUrl: originalImageUrl,
      thumbnailUrl,
      uid,
      createdAt: new Date().toISOString(),
    });

    res.status(201).json({ id: docRef.id });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default withAuth(handler);
