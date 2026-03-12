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
      </div>
    </div>
  );
};
