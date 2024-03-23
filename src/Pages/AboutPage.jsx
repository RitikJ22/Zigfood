import { SOCIAL_ICONS_SET } from "../Utilities/Constants";
import { BsTwitterX , BsGithub,BsLinkedin } from "react-icons/bs";
const AboutPage = () => {
  return (
    <div className="w-full bg-[#e9ecee] px-4 pt-12">
      <div className="flex flex-col items-center py-8">
        <div className="text-center text-5xl font-bold text-defBlack">
          Hi. I'm Ritik Jaiswal
        </div>
        <div className="mt-5 h-2 w-[20%] bg-defColor"></div>
      </div>
      <div className="mx-auto flex w-full max-w-[1000px] flex-col text-center gap-4 py-8 md:flex-row g:py-8 flex flex-col items-center justify-center border-b-[1px] border-b-[#80808042] pb-5 text-2xl font-semibold text-center">
      I'm a Frontend Engineer and Tech Enthusiast.



       

      </div>
      <div className="flex flex-col items-center justify-center p-8 text-2xl font-semibold text-defBlack md:flex-row">
<span className="mr-2">Connect with me on :</span>
        <div className="flex items-center justify-center gap-4">
          <a href="https://www.linkedin.com/in/ritik-jaiswal-36a735153/" target="_blank">
          <BsLinkedin />
          </a>
          <a href="https://github.com/RitikJ22" target="_blank">
          <BsGithub />
          </a>
          <a href="https://twitter.com/RitikJa62967785" target="_blank" className="">
          <BsTwitterX />
          </a>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
