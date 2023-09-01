"use client";

import { useRouter } from "next/navigation";
import { DownArrow } from "./Icons";

const DownloadButton = (props) => {
  const router = useRouter();

  const buttonClickHandler = () => router.push(props.url);

  return (
    <button
      className="btn btn-outline flex items-center"
      onClick={buttonClickHandler}
    >
      <DownArrow />
      <span className="capitalize">Download CV</span>
    </button>
  );
};

export default DownloadButton;
