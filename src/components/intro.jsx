import { TypeAnimation } from 'react-type-animation';
import resume from './images/Daniel_Park_s_Resume (1).pdf'

let currentDate = new Date().toJSON().slice(0, 10);
export default function Intro() {
  return (
    <>
      <div className="flex flex-col  items-center ">
        <div className="h-[70%] w-[60%] flex justify bg-[rgb(228,227,229)] mt-10 border-8 rounded-t shadow-t-[3px] ">
          <div className="flex flex-row justify-items-start">
            <div className="w-3 h-3 bg-[#f96256] self-center rounded-xl ml-2"></div>
            <div className="w-3 h-3 bg-[#fdbc3d] self-center rounded-xl ml-2"></div>
            <div className="w-3 h-3 bg-[#33c948] self-center rounded-xl ml-2"></div>
          </div>
          <br></br>
          </div>
          <div className="flex-col w-[60%] rounded-b font-mono shadow-md shadow-r-[3px] border-2 max-sm:text-xs">
            <span className="ml-[3%] mt-2 block font-mono max-sm:text-xs">Login Date: {currentDate} </span>
            <span className="ml-[3%] block ">Daniel_Park@{getUA()} ~ % Daniel.Bio</span>
            <div>
              <span className="ml-[3%]">Hi, I'm Daniel Park, a second-year Computer Science student at Wilfrid Laurier 
                <p className="ml-[3%]">University in Waterloo Ontario</p></span>
            </div>
            <br></br>
            <span className="ml-[3%] ">% Daniel.Contacts</span>
            <div className="flex flex-wrap max-md:flex-col ml-[3%]">
              [
                <a href="mailto:parkdan26@gmail.com" className="hover:text-blue-400 mr-4">
                  parkdan26@gmail.com,
                </a>
                <a href="https://www.linkedin.com/in/parkdan26" target="_blank" className="hover:text-blue-400 mr-4">
                  LinkedIn,
                </a>
                <a href="https://github.com/parkdan26" target="_blank" className="hover:text-blue-400 mr-4">
                  GitHub,
                </a>
                <a href="https://www.instagram.com/danyul_park/?hl=en" target="_blank" className="hover:text-blue-400">
                  Instagram
                </a>
              ]
          </div>

            <br></br>
            <span className="ml-[3%] ">% Daniel.Resume</span>
            <div>
                <a href = {resume} className="ml-[3%] hover:text-blue-400">  "Daniel_Resume.pdf"</a>
            </div>
            <br></br>
            <span className="ml-[3%] ">% Daniel.Education</span>
            <div>
              <span className="ml-[3%] ">B.S.c Computer Science & Mathematics -
                Wilfrid Laurier University; Expected Grad 2027</span>
            </div>
            <br></br>
            <span className="ml-[3%] ">% Daniel.Location</span>
            <div>
              <span className="ml-[3%] ">Toronto Ontario</span>
            </div>
            <br></br>
            <span className="ml-[3%] ">% Daniel.Languages</span>
            <div>
              <span className="ml-[3%] ">["Python", "JavaScript", "Java", "HTML/CSS"]</span>
            </div>
            <br></br>
            <span className="ml-[3%] ">% Daniel.Frameworks</span>
            <div>
              <span className="ml-[3%]">["React.js", "Tailwind.css", "Express.js", "Flask", "Vite", "node.js"]</span>
            </div>
            <br></br>
            </div>
        </div>
    </>
  );
};

const getUA = () => {
  let device = "Unknown";
  const ua = {
      "Generic Linux": /Linux/i,
      "Android": /Android/i,
      "BlackBerry": /BlackBerry/i,
      "Bluebird": /EF500/i,
      "Chrome OS": /CrOS/i,
      "Datalogic": /DL-AXIS/i,
      "Honeywell": /CT50/i,
      "iPad": /iPad/i,
      "iPhone": /iPhone/i,
      "iPod": /iPod/i,
      "macOS": /Macintosh/i,
      "Windows": /IEMobile|Windows/i,
      "Zebra": /TC70|TC55/i,
  }
  Object.keys(ua).map(v => navigator.userAgent.match(ua[v]) && (device = v));
  return device;
}