import { TypeAnimation } from 'react-type-animation';
import { Scrollchor } from 'react-scrollchor';

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center max-md:flex-col max-md:justify-center max-md:align-center mt-[5%]">
      <div className="text-8xl align-text-top font-mono text-blue-400 max-md:mt-5 max-md:text-5xl max-sm:max-md:text-5xl max-md:justify-center max-md:text-center">
      <TypeAnimation
        sequence={[
          '% Daniel Park', 20000
        ]}
        wrapper="span"
        speed={10}
        repeat={Infinity}
        style={{display: 'inline-block'}}
      />
      </div>
      <div className="flex font-mono text-blue-400 justify-center gap-x-5 mt-[2%] max-sm:flex-col max-sm:gap-x-0 max-sm:items-center">
        <Scrollchor to="Bio" className="text-3xl group relative w-max max-sm:m-2" >
        <span className="relative z-10 group-hover:text-white">Biography</span>
        <span className="absolute left-0 bottom-0 w-full h-0.5 transition-all  group-hover:h-full group-hover:bg-blue-400 "></span>
        </Scrollchor>
        <Scrollchor to="Projects" className="text-3xl group relative w-max max-sm:m-2">
        <span className="relative z-10 group-hover:text-white">Projects</span>
        <span className="absolute left-0 bottom-0 w-full h-0.5 transition-all  group-hover:h-full group-hover:bg-blue-400"></span>
        </Scrollchor>
        <Scrollchor to="Contact" className="text-3xl group relative w-max max-sm:m-2">
        <span className="relative z-10 group-hover:text-white">Contact</span>
        <span className="absolute left-0 bottom-0 w-full h-0.5 transition-all  group-hover:h-full group-hover:bg-blue-400 "></span>
        </Scrollchor>
      </div>
    </div>
  );
};
