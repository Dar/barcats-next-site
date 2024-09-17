import type { NextApiRequest, NextApiResponse } from 'next';
import { db, storage } from '../../../app/utils/fbase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { withAuth } from '../../../lib/authMiddleware';

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
    const { logoImg, footerImg, featureImg, sectionAboutImg } = req.body;
    const uid = (req as any).uid;

    const storageRef = ref(storage, `images/${Date.now()}`);
    const snapshotLogoImg = await uploadBytes(storageRef, Buffer.from(logoImg, 'base64'));
    const snapshotFooterImg = await uploadBytes(storageRef, Buffer.from(footerImg, 'base64'));
    const snapshotHeaderImg = await uploadBytes(storageRef, Buffer.from(featureImg, 'base64'));
    const snapshotSectionAboutImg = await uploadBytes(storageRef, Buffer.from(sectionAboutImg, 'base64'));

    const imageLogoImgUrl = await getDownloadURL(snapshotLogoImg.ref);
    const imageFooterImgUrl = await getDownloadURL(snapshotFooterImg.ref);
    const imageHeaderImgUrl = await getDownloadURL(snapshotHeaderImg.ref);
    const imageSectionAboutImgUrl = await getDownloadURL(snapshotSectionAboutImg.ref);

    const docRef = await addDoc(collection(db, 'homepage'), {
      imageLogoImgUrl,
      imageFooterImgUrl,
      imageHeaderImgUrl,
      imageSectionAboutImgUrl,
      uid,
      createdAt: new Date().toISOString(),
    });
    res.status(201).json({ id: docRef.id });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default withAuth(handler);
