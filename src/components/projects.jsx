export default function Project() {
    return (
      <>
        <div className=" font-mono flex flex-col justify-center items-center max-sm:flex-col max-sm:text-center">
          {/* Title Section */}
          <div className="self-center  w-full text-center p-10">
            <p className="text-blue-400 text-6xl mb-4 font-mono">Projects</p>
          </div>
  
          {/* Grid Section */}
          <div className="grid max-w-[80%] grid-rows-2 grid-cols-3 gap-8  p-15 max-md:grid-cols-1">
            <div className="border-2 border-black rounded-3xl flex flex-col  text-center justify-center m-2 px-15 py-10 bg-white">
              <p className="text-3xl m-2">Disaster-GPT</p>
              <p className="text-sm mt-5 m-2">a Natural Disaster Alert System that warns users of imminent disasters within 6 days and provides
              preparation guidance.</p>
            </div>
  
            <div className="border-2  border-black rounded-3xl flex flex-col text-center justify-center m-2 px-15 py-10 bg-white">
              <p className="text-3xl">Resume Formatter</p>
              <p className="text-sm mt-5 m-2">Built a dynamic Resume Formatter allowing users to create, customize, and download professional resumes</p>
            </div>

            <div className="border-2 border-black rounded-3xl flex flex-col text-center justify-center m-2 px-15 py-10 bg-white">
              <p className="text-3xl">Google Classroom Scraper</p>
              <p className="text-sm mt-5 m-2">Created a Google Classroom script to help teachers quickly filter late and resubmitted assignments.</p>
            </div>
  
            <div className="border-2 border-black rounded-3xl flex flex-col text-center justify-center m-2 px-15 py-10 bg-white">
              <p className="text-3xl">Country Progress Indicator Analysis</p>
              <p className="text-sm mt-5 m-2">Developed a data analysis script in Python to categorize and analyze country progress indicators using UNICEF’s
              datasets.</p>
            </div>
            <div className="border-2 border-black rounded-3xl flex flex-col text-center justify-center m-2 px-15 py-10 bg-white">
              <p className="text-3xl">Email Read Receipts</p>
              <p className="text-sm mt-5 m-2">An email read receipt feature notifies the sender when the recipient opens their email.</p>
            </div>
            <div className="border-2 border-black rounded-3xl flex flex-col text-center justify-center m-2 px-15 py-10 bg-white">
              <p className="text-3xl">Loyalty Card System</p>
              <p className="text-sm mt-5 m-2">Full Stack website that lets small business have a loyalty card system by phone number</p>
            </div>
          </div>
        </div>
      </>
    );
  }
  