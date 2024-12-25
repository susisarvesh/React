import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function MineSarvs() {
  const count = 16;
  return (
      <div className='flex items-center justify-between flex-col lg:flex-row mb-5'>
      <div className='flex items-center flex-col'>
        <h1 className='text-[35px] font-mono'>SarveshSusi</h1>
        <h2 className='mb-2 flex items-center justify-between'><span className='text-[30px] text-red-500 font-mono mr-2 '>#{count}</span> <span className='text-[20px]'>React Components</span></h2>
      </div>
      <div className='flex justify-between items-center '>
         <a href="https://github.com/susisarvesh/React" target="_blank" className='bg-slate-100 p-2 rounded-md text-[20px] border border-black font-mono flex items-center justify-between mr-2'>
          <FaGithub className='mr-2' /><button className=''>Github
          </button></a>
        <a href="https://www.linkedin.com/in/sarvesh-susi/" target="_blank" className='bg-slate-100 p-2 rounded-md text-[20px] border border-black font-mono flex items-center justify-between mr-2'>
          <FaLinkedin className='mr-2' /><button className=''>LinkedIn
          </button></a>
      </div>
    </div>
  )
}

export default MineSarvs