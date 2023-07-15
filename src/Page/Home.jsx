import React from "react";

const Home = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          className="mx-auto h-16"
          src="https://wallpaperaccess.com/full/3214373.jpg"
          alt="welcome image"
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>“I am Deepkamal yadav i am basically from Up. and i am completed my B.tech from I.T.S Enginnering College Greater Noida after that i did a job in Garima Casting in Jaipur after 6 month i did Graduate marine Engineering Course From Coimbtore Marine College. after i got a Soponser from Doris MArine Servcies Mumbai but i unforrinatily i am medical unfit because i have a stone in left kidney. So i am come to home and i think about what should i do then i am join masai school. here i am learn lots of things like frontend and backend also and loved more then 500 DSA problems. and i am completed 5 project. come to my family My father is DOctor. my mother is house wife. my hobbies are writeing thought , gardning. Thank you  ”</p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://avatars.githubusercontent.com/u/105913793?v=4"
              alt="pic"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Deepkaml yadav</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Home;
