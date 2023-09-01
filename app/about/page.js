import Avatar from "../../components/Avatar";
import PersonalSnippet from "../../components/PersonalSnippet";
import DownloadButton from "../../components/UI/DownloadButton";
import Roles from "../../components/Roles";

const About = () => (
  <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-10">
    <div className="flex flex-col lg:flex-row lg:w-1/2">
      <div className="grid flex-grow h-fit card rounded-box place-items-center">
        <div className="mb-4">
          <Avatar />
        </div>
        <div className="mb-4">
          <DownloadButton url={"/files/cv.pdf"} />
        </div>
      </div>
      <div className="divider lg:divider-horizontal" />
      <div className="flex items-center justify-center">
        <div className="grid flex-grow h-fit card rounded-box text-justify">
          <PersonalSnippet />
        </div>
      </div>
    </div>
    <div className="min-h-screen flex justify-center pt-10 pb-10">
      <Roles />
    </div>
  </div>
);

export default About;
