"use client";

import { useRouter } from "next/navigation";
import { DownArrow } from "./Icons";

const DownloadCVButton = () => {
  const router = useRouter();

  const handleDownload = () => {
    router.push("/files/cv.pdf");
  };

  return (
    <button
      className="btn btn-outline flex items-center"
      onClick={handleDownload}
    >
      <DownArrow />
      <span className="capitalize">Download CV</span>
    </button>
  );
};

export default DownloadCVButton;
