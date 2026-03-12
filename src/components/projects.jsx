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
              <p className="text-3xl m-2"><a href="https://github.com/parkdan26/CafePassport">Cafe Passport</a></p>
              <p className="text-sm mt-5 m-2"> A digital cafe-passport to log cafe locations in toronto.</p>
            </div>

            <div className="border-2 border-black rounded-3xl flex flex-col  text-center justify-center m-2 px-15 py-10 bg-white">
              <p className="text-3xl m-2"><a href="https://github.com/parkdan26/TeeTime">Teetime</a></p>
              <p className="text-sm mt-5 m-2">Full Stack website that allows user to find and get notified of the cheapest golf teetimes around you</p>
            </div>
                        <div className="border-2 border-black rounded-3xl flex flex-col  text-center justify-center m-2 px-15 py-10 bg-white">
              <p className="text-3xl m-2"><a href="https://github.com/parkdan26/FAST">FAST</a></p>
              <p className="text-sm mt-5 m-2">A mobile app with a custom AI model to predict the likelihood of someone having a stroke .</p>
            </div>

            <div className="border-2 border-black rounded-3xl flex flex-col text-center justify-center m-2 px-15 py-10 bg-white">
              <p className="text-3xl"><a href="https://github.com/parkdan26/Google-Classroom-Scraper">Google Classroom Scraper</a></p>
              <p className="text-sm mt-5 m-2">Created a Google Classroom script to help teachers quickly filter late and resubmitted assignments.</p>
            </div>
  
            <div className="border-2 border-black rounded-3xl flex flex-col text-center justify-center m-2 px-15 py-10 bg-white">
              <p className="text-3xl">Country Progress Indicator Analysis</p>
              <p className="text-sm mt-5 m-2">Developed a data analysis script in Python to categorize and analyze country progress indicators using UNICEF’s
              datasets.</p>
            </div>

            <div className="border-2 border-black rounded-3xl flex flex-col text-center justify-center m-2 px-15 py-10 bg-white">
              <p className="text-3xl"><a href="https://github.com/parkdan26/Email_Read_Receipts">Email Read Receipts</a></p>
              <p className="text-sm mt-5 m-2">An email read receipt feature notifies the sender when the recipient opens their email.</p>
            </div>            
          </div>
        </div>
      </>
    );
  }
  