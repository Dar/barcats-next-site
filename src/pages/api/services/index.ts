// pages/api/posts/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../app/utils/fbase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { withAuth } from '../../../lib/authMiddleware';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const uid = (req as any).uid;
    const q = query(collection(db, 'services'), where('uid', '==', uid));
    const querySnapshot = await getDocs(q);
    const posts = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default withAuth(handler);
