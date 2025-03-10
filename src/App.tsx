import {useLenis} from "../src/components/ux/ScLenis"
import Pages2 from "./components/pages/Pages2";
import {Routes, Route, Link} from "react-router-dom"
import { ColourfulText } from "./components/ux/TextColorful";
import Skiils from "./components/pages/Skiils";
import Contact from "./components/pages/Contact";
import ChatPopup from "./components/pages/Chat";
const App = () => {
  useLenis();
  return (
    
    <div className="flex bg-slate-950 flex-col w-full h-[900vh] overflow-x-hidden">

<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>
<aside id="default-sidebar" className=" fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-slate-800">
    <div className="flex flex-col items-center w-full p-2 flex justify-evenly gap-3">
      <Link to="/">
      <div className="rounded-full hover:border-black-3 hover:border transition-all bg-black h-32 w-32">
        <img className="rounded-full" src="data:image/jpeg;base64,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"/>
        </div>
      </Link>
      <h1 className="text-1xl md:text-1xl lg:text-1xl font-bold text-center text-white relative z-2 font-[Poppins]">
Hi, i'am <ColourfulText text="Rayhan Dita" />
      </h1>
    </div>
      <ul className="space-y-2 font-medium">
         <li>
            <Link to="/pages1" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span className="ms-3">Dashboard</span>
            </Link>
         </li>
         <li>
            <Link to="/pages2" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">My Skiils</span>
               <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
            </Link>
         </li>
         <li>
            <Link to="/contact" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
               <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </Link>
         </li>
         <li>
            <a href="/ChatAll" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Contact Me</span>
            </a>
         </li>
      </ul>
   </div>
</aside>

<div className="p-4 sm:ml-64">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      <Routes>
    <Route path="pages1" element={<Pages2/>}/>
    <Route path="pages2" element={<Skiils/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="contact" element={<Contact/>}/>
      </Routes>
      <ChatPopup/>
   </div>
</div>
    </div>
  )
}

export default App