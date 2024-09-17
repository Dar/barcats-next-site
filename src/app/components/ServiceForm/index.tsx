"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { CircularProgress } from "@mui/material";
import { db, storage } from "../../utils/fbase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

interface ServiceFormProps {
  serviceId?: string;
  existingPost?: {
    title: string;
    leadText: string;
    content: string;
    imageUrl?: string;
    thumbnailUrl?: string;
    createdAt?: Date;
  };
}

const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

const ServiceForm: React.FC<ServiceFormProps> = ({
  serviceId,
  existingPost,
}) => {
  const [title, setTitle] = useState<string>(existingPost?.title || "");
  const [leadText, setLeadText] = useState<string>(
    existingPost?.leadText || ""
  );
  const [content, setContent] = useState<string>(existingPost?.content || "");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const createThumbnail = async (file: File): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;

        img.onload = () => {
          const canvas = document.createElement("canvas");
          const maxWidth = 250;
          const maxHeight = 250;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            canvas.toBlob(
              (blob) => {
                if (blob) {
                  resolve(blob);
                } else {
                  reject(new Error("Thumbnail creation failed"));
                }
              },
              "image/jpeg",
              0.8
            );
          } else {
            reject(new Error("Canvas context is not available"));
          }
        };

        img.onerror = () => {
          reject(new Error("Failed to load image for thumbnail creation"));
        };
      };

      reader.onerror = () => {
        reject(new Error("Failed to read image file"));
      };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    setLoading(true);
    e.preventDefault();
    let imageUrl = existingPost?.imageUrl || "";
    let thumbnailUrl = existingPost?.thumbnailUrl || "";

    try {
      if (image) {
        // Upload the original image with cache control
        const storageRef = ref(storage, `images/${Date.now()}-${image.name}`);
        const imageMetadata = {
          cacheControl: 'public,max-age=31536000', // Cache for 1 year
        };
        await uploadBytes(storageRef, image, imageMetadata);
        imageUrl = await getDownloadURL(storageRef);

        // Create and upload the thumbnail image with cache control
        const thumbnailBlob = await createThumbnail(image);
        const thumbnailRef = ref(storage, `thumbnails/${Date.now()}-${image.name}`);
        const thumbnailMetadata = {
          cacheControl: 'public,max-age=31536000', // Cache for 1 year
        };
        await uploadBytes(thumbnailRef, thumbnailBlob, thumbnailMetadata);
        thumbnailUrl = await getDownloadURL(thumbnailRef);
      }

      const post = {
        title,
        slug: generateSlug(title),
        leadText,
        content,
        imageUrl,
        thumbnailUrl, // Include the thumbnail URL in the post object
        createdAt: existingPost?.createdAt || new Date(),
      };

      if (serviceId) {
        const postRef = doc(db, "services", serviceId);
        await updateDoc(postRef, post);
      } else {
        await addDoc(collection(db, "services"), post);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error saving document:", error);
      setLoading(false);
    }
  };

  return (
    <main className="p-8 w-full flex lg:flex-row flex-col items-center gap-5 flex-wrap justify-center">
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            id="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="leadText"
          >
            Lead Text
          </label>
          <input
            id="leadText"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={leadText}
            onChange={(e) => setLeadText(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <CKEditor
            editor={ClassicEditor}
            data={content}
            onReady={(editor) => {
              editor.editing.view.change((writer) => {
                const rootElement = editor.editing.view.document.getRoot();
                if (rootElement) {
                  writer.setStyle("min-height", "180px", rootElement);
                }
              });
            }}
            onChange={(event, editor) => setContent(editor.getData())}
          />
        </div>
        <div className="mb-4">
          <input
            type="file"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setImage(e.target.files ? e.target.files[0] : null)
            }
          />
        </div>
        <div className="flex items-center mb-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {serviceId ? "Update" : "Create"} Service
          </button>
          {loading ? (
            <div className="ml-10">
              <CircularProgress size={32} />
            </div>
          ) : null}
        </div>
      </form>
    </main>
  );
};

export default ServiceForm;
