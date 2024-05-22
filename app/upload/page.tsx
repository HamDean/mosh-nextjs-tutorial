"use client";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={200}
          height={200}
          alt="A math worksheet"
        />
      )}
      <CldUploadWidget
        uploadPreset="z8jnxalw"
        onUpload={(result) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => {
          return (
            <button className="btn btn-primary" onClick={() => open()}>
              Upload
            </button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};
export default UploadPage;
