"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { CircularProgress } from "@mui/material";
import { db, storage } from "../../utils/fbase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface HomeFormProps {
  homepageId?: string;
  existingHomeSetup?: {
    logoImg: string;
    footerImg: string;
    headerImg: string;
    sectionAboutImg: string;
    createdAt?: Date;
  };
}

const HomeForm: React.FC<HomeFormProps> = ({
  homepageId,
  existingHomeSetup,
}) => {
  const [logoImg, setLogoImg] = useState<File | null>(null);
  const [footerImg, setFooterImg] = useState<File | null>(null);
  const [headerImg, setHeaderImg] = useState<File | null>(null);
  const [sectionAboutImg, setSectionAboutImg] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const uploadImage = async (image: File): Promise<string> => {
    const storageRef = ref(storage, `images/${image.name}-${Date.now()}`);
    const metadata = {
      cacheControl: 'public,max-age=31536000',
    };
    const snapshot = await uploadBytes(storageRef, image, metadata);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const logoImgUrl = logoImg ? await uploadImage(logoImg) : existingHomeSetup?.logoImg || "";
      const footerImgUrl = footerImg ? await uploadImage(footerImg) : existingHomeSetup?.footerImg || "";
      const headerImgUrl = headerImg ? await uploadImage(headerImg) : existingHomeSetup?.headerImg || "";
      const sectionAboutImgUrl = sectionAboutImg ? await uploadImage(sectionAboutImg) : existingHomeSetup?.sectionAboutImg || "";

      const homeImagePost = {
        logoImg: logoImgUrl,
        footerImg: footerImgUrl,
        headerImg: headerImgUrl,
        sectionAboutImg: sectionAboutImgUrl,
        createdAt: existingHomeSetup?.createdAt || new Date(),
      };

      if (homepageId) {
        const postRef = doc(db, "homepage", homepageId);
        await updateDoc(postRef, homeImagePost);
      } else {
        await addDoc(collection(db, "homepage"), homeImagePost);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error uploading images:", error);
      setLoading(false);
    }
  };

  return (
    <main className="p-8 w-full flex lg:flex-row flex-col items-center gap-5 flex-wrap justify-center">
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="logoImg">
            Header Logo
          </label>
          <input
            id="logoImg"
            type="file"
            onChange={(e) => setLogoImg(e.target.files ? e.target.files[0] : null)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="footerImg">
            Footer Logo
          </label>
          <input
            id="footerImg"
            type="file"
            onChange={(e) => setFooterImg(e.target.files ? e.target.files[0] : null)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="headerImg">
            Header Image
          </label>
          <input
            id="headerImg"
            type="file"
            onChange={(e) => setHeaderImg(e.target.files ? e.target.files[0] : null)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sectionAboutImg">
            Section About Image
          </label>
          <input
            id="sectionAboutImg"
            type="file"
            onChange={(e) => setSectionAboutImg(e.target.files ? e.target.files[0] : null)}
          />
        </div>
        <div className="flex items-center mb-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {homepageId ? "Update" : "Create"} Home Pages
          </button>
          {loading ? <div className="ml-10"><CircularProgress size={32}/></div> : null}
        </div>
      </form>
    </main>
  );
};

export default HomeForm;
