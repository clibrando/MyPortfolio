import React from "react";
import Images from '../Components/Images';
import FadeIn from '../Components/FadeIn';
import Settings from '../Settings/AnimationSettings';



const Home = () => {
  return (
    <div className="content-body pl-4 lg:pl-0">
       <div className="flex flex-row flex-wrap justify-center lg:mx-16 lg:my-12">
            <div className="introduce-title lg:w-4/6 w-full grow pr-4">
                <div className="dark:text-slate-200 font-extrabold mt-12">
                  <FadeIn duration={Settings.Content.FadeInTitle}>
                    <h1 className="text-6xl "><span className="dark:text-red-300">Hi!</span> I'm Caryl Librando</h1>
                  </FadeIn>
                </div>
                <div className="dark:text-slate-200 font-extrabold lg:mr-0 mr-12 mt-4 text-wrap">
                  <FadeIn duration={Settings.Content.FadeInSubTitle}>
                  <h1 className="text-xl">Versatile with Front-end, UX, Design and project management. With a lot of experience in foreign markets. </h1>
                  </FadeIn>
                </div>
            </div>
          <div className="h-100 mt-12 grow">
            <div className="w-full flex flex-col justify-center items-center">
              <img src="https://i.imgur.com/7JumMPV.png" className="rounded-full w-48 h-48" />
              <div className="flex flex-row contact-me">
                <div className=" md:top-1/2 sm:left-2/3 xs:left-1/2">
                  <h1 className="pb-3 xs:text-2xl md:text-3xl">Get in touch</h1>
                </div>
                <div className="pl-4">
                  <a href="mailto:crlibrando@gmail.com">
                    <button className="transition duration-300 ease-in-out  hover:scale-125">
                      Contact
                    </button>
                  </a>
                </div>
              </div>
            </div>      
          </div>
          <div className="py-12 grow">
              <FadeIn duration={4} ease={"easeInOut"}> 
                <h1 className="text-6xl dark:text-slate-200 font-extrabold py-8">My product designs</h1>
                <div className="container">
                  <Images />
                </div>
              </FadeIn>
            </div>
        </div>
      <div className="h-100">

      </div>
    </div>
  );
};


export default Home;
