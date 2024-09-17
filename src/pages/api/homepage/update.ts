// pages/api/posts/update.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../app/utils/fbase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { withAuth } from '../../../lib/authMiddleware';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { id, title, content } = req.body;
    const uid = (req as any).uid;
    const docRef = doc(db, 'homepage', id);
    const postDoc = await getDoc(docRef);

    if (!postDoc.exists() || postDoc.data()?.uid !== uid) {
      return res.status(404).json({ message: 'Homepage post not found or access denied' });
    }

    await updateDoc(docRef, { title, content });
    res.status(200).json({ message: 'Homepage updated' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default withAuth(handler);
