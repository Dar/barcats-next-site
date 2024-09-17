import { db } from '@/app/utils/fbase';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { HomeProps } from 'types';

export const fetchHomeData = async () => {
  try {
    const homepageCollection = collection(db, "homepage");
    const homepageSnapshot = await getDocs(homepageCollection);
    const homeImages = homepageSnapshot.docs.map(
      (doc) => doc.data() as HomeProps
    );
    return homeImages;
  } catch (error) {
    console.error("Error fetching Home Images:", error);
  } finally {
    return null
  }
};