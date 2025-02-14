import { Button } from './ui/button'

function TopicCards() {
  return (

    <>
      <div className="justify-center place-items-center gap-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-8 align-center">
        <div className="relative col-span-1 bg-[linear-gradient(var(--background2))] shadow-lg px-2 pt-6 pb-2 rounded-xl transition duration-500 transform">

          <h3 className="mb-3 font-bold text-indigo-600 text-xl">Who am i?</h3>

          <div className="absolute inset-0 dark:bg-black bg-center"></div>
          <div className="group relative flex shadow-xl m-0 sm:mx-auto sm:max-w-xl">
            <div className="z-10 opacity-80 group-hover:opacity-100 dark:opacity-70 dark:border-gray-700 w-full h-full overflow-hidden transition duration-500 ease-in-out">
              <img src="https://picsum.photos/id/1078/800/400" className="block opacity-100 w-full h-full object-center object-cover scale-100 group-hover:scale-110 transition animate-fade-in duration-500 transform" alt="" />
              <p className="right-0 bottom-0 absolute bg-violet-600 px-3 py-1 rounded-tl-lg font-semibold text-gray-100">2025</p>
            </div>
            <div className="bottom-0 z-20 absolute m-0 ps-4 pb-4 group-hover:scale-110 transition group-hover:-translate-y-1 group-hover:translate-x-3 duration-500 ease-in-out">
              <h1 className="shadow-xl font-bold text-white text-2xl">Randy de Vries</h1>
              <h1 className="shadow-xl font-light text-gray-200 text-sm">javaScript developer</h1>
            </div>
          </div>

          <h1 className="mt-4 font-bold text-gray-100 text-2xl cursor-pointer">Javascript Web Developer</h1>

          <div className="my-4">
            <div className="flex items-center space-x-1">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="mb-1.5 w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <p>First Lesson ws in 2018</p>
            </div>
            <div className="flex items-center space-x-1">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="mb-1.5 w-6 h-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
              <p>ITMG (IT Management group)</p>
            </div>
            <div className="flex items-center space-x-1">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="mb-1.5 w-6 h-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              <p>JS, Typescript, React, MongoDB, NodeJS</p>
            </div>
            <Button size="lg" variant="destructive" className="bg-violet-300 text-blue-950">Get started</Button>
          </div>

        </div>
        <div className="relative col-span-1 bg-[linear-gradient(var(--background2))] shadow-lg px-2 pt-6 pb-2 rounded-xl transition duration-500 transform">

          <h3 className="mb-3 font-bold text-indigo-600 text-xl">Who am i?</h3>

          <div className="absolute inset-0 dark:bg-black bg-center"></div>
          <div className="group relative flex shadow-xl m-0 sm:mx-auto sm:max-w-xl">
            <div className="z-10 opacity-80 group-hover:opacity-100 dark:opacity-70 dark:border-gray-700 w-full h-full overflow-hidden transition duration-500 ease-in-out">
              <img src="https://picsum.photos/id/1078/800/400" className="block opacity-100 w-full h-full object-center object-cover scale-100 group-hover:scale-110 transition animate-fade-in duration-500 transform" alt="" />
              <p className="right-0 bottom-0 absolute bg-violet-600 px-3 py-1 rounded-tl-lg font-semibold text-gray-100">2025</p>
            </div>
            <div className="bottom-0 z-20 absolute m-0 ps-4 pb-4 group-hover:scale-110 transition group-hover:-translate-y-1 group-hover:translate-x-3 duration-500 ease-in-out">
              <h1 className="shadow-xl font-bold text-white text-2xl">Randy de Vries</h1>
              <h1 className="shadow-xl font-light text-gray-200 text-sm">javaScript developer</h1>
            </div>
          </div>

          <h1 className="mt-4 font-bold text-gray-100 text-2xl cursor-pointer">Javascript Web Developer</h1>

          <div className="my-4">
            <div className="flex items-center space-x-1">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="mb-1.5 w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <p>First Lesson ws in 2018</p>
            </div>
            <div className="flex items-center space-x-1">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="mb-1.5 w-6 h-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
              <p>ITMG (IT Management group)</p>
            </div>
            <div className="flex items-center space-x-1">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="mb-1.5 w-6 h-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              <p>JS, Typescript, React, MongoDB, NodeJS</p>
            </div>
            <button className="bg-indigo-600 shadow-lg mt-4 py-2 rounded-xl w-full text-white text-xl">About Me</button>
          </div>

        </div>
        <div className="relative col-span-1 bg-[linear-gradient(var(--background2))] shadow-lg px-2 pt-6 pb-2 rounded-xl transition duration-500 transform">

          <h3 className="mb-3 font-bold text-indigo-600 text-xl">Who am i?</h3>

          <div className="absolute inset-0 dark:bg-black bg-center"></div>
          <div className="group relative flex shadow-xl m-0 sm:mx-auto sm:max-w-xl">
            <div className="z-10 opacity-80 group-hover:opacity-100 dark:opacity-70 dark:border-gray-700 w-full h-full overflow-hidden transition duration-500 ease-in-out">
              <img src="https://picsum.photos/id/1078/800/400" className="block opacity-100 w-full h-full object-center object-cover scale-100 group-hover:scale-110 transition animate-fade-in duration-500 transform" alt="" />
              <p className="right-0 bottom-0 absolute bg-violet-600 px-3 py-1 rounded-tl-lg font-semibold text-gray-100">2025</p>
            </div>
            <div className="bottom-0 z-20 absolute m-0 ps-4 pb-4 group-hover:scale-110 transition group-hover:-translate-y-1 group-hover:translate-x-3 duration-500 ease-in-out">
              <h1 className="shadow-xl font-bold text-white text-2xl">Randy de Vries</h1>
              <h1 className="shadow-xl font-light text-gray-200 text-sm">javaScript developer</h1>
            </div>
          </div>

          <h1 className="mt-4 font-bold text-gray-100 text-2xl cursor-pointer">Javascript Web Developer</h1>

          <div className="my-4">
            <div className="flex items-center space-x-1">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="mb-1.5 w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <p>First Lesson ws in 2018</p>
            </div>
            <div className="flex items-center space-x-1">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="mb-1.5 w-6 h-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
              <p>ITMG (IT Management group)</p>
            </div>
            <div className="flex items-center space-x-1">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="mb-1.5 w-6 h-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              <p>JS, Typescript, React, MongoDB, NodeJS</p>
            </div>
            <button className="bg-indigo-600 shadow-lg mt-4 py-2 rounded-xl w-full text-white text-xl">About Me</button>
          </div>

        </div>
      </div>
    </>

  )
}

export default TopicCards
