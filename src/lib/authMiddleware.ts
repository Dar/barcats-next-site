// lib/authMiddleware.ts
import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import { getAuth } from 'firebase-admin/auth';

export const withAuth = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      const decodedToken = await getAuth().verifyIdToken(token);
      (req as any).uid = decodedToken.uid;
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  };
};
