import instagram from "./images/instagram-svgrepo-com.png";
import mail from "./images/mail-alt-3-svgrepo-com.png";
import github from "./images/github-142-svgrepo-com.png";
import linkedin from "./images/linkedin-svgrepo-com.png";

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center mt-[5%] max-md:mt-5">
      {/* Title */}
      <div className="text-4xl font-mono text-blue-400 max-md:text-5xl text-center">
        <p>Contact me</p>
      </div>
      {/* Contact Section */}
      <div className="flex flex-row text-2xl font-mono  justify-center mt-[2%] gap-4 max-md:flex-col text-center">
        {/* Email */}
        <div className="flex flex-row items-center">
          <a href="mailto: parkdan26@gmail.com" target="_blank">
          <img src={mail} className="w-6 h-6 mr-2" alt="Email Icon" />
          </a>
          <a href="mailto: parkdan26@gmail.com" target="_blank"className="text-xl hover:text-blue-400">parkdan26@gmail.com</a>
        </div>

        {/* GitHub */}
        <div className="flex flex-row items-center">
        <a href="https://www.github.com/parkdan26" target="_blank">
          <img src={github} className="w-6 h-6 mr-2" alt="GitHub Icon" />
          </a>
          <a href="https://www.github.com/parkdan26" target="_blank"className="text-xl hover:text-blue-400">Github</a>
        </div>

        {/* LinkedIn */}
        <div className="flex flex-row items-center">
        <a href="https://www.linkedin.com/in/parkdan26" target="_blank">
          <img src={linkedin} className="w-6 h-6 mr-2" alt="LinkedIn Icon" />
          </a>
          <a href="https://www.linkedin.com/in/parkdan26" target="_blank"className="text-xl hover:text-blue-400">Linkedin</a>
        </div>

        {/* Instagram */}
        <div className="flex flex-row items-center">
        <a href="https://www.instagram.com/danyul_park/?hl=en" target="_blank">
          <img src={instagram} className="w-6 h-6 mr-2" alt="Instagram Icon" />
          </a>
          <a href="https://www.instagram.com/danyul_park/?hl=en" target="_blank"className="text-xl hover:text-blue-400">Instagram</a>
        </div>
      </div>
    </div>
  );
}
