import React from 'react'

const About = () => {
  return (
    <>
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        
        <h1 className='mx-auto text-center text-2xl '>Bharti Airtel Limted</h1>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “Bharti Airtel Limited, commonly known as (d/b/a) Airtel, is an Indian multinational telecommunications services company based in New Delhi. It operates in 18 countries across South Asia and Africa, as well as the Channel Islands. Currently, Airtel provides 4G and LTE Advanced services all over India and 5G service in selected cities.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
           
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Sunil_Bharti_Mittal_World_Economic_Forum_2013.jpg/330px-Sunil_Bharti_Mittal_World_Economic_Forum_2013.jpg"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Sunil Bharti Mittal</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">Owner of Bharti Enterprises Limited </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>

 
 
    </>
  )
}

export default About