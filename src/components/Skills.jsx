import React from 'react'

const Skills = () => {
  return (
    <div name="skills" className=' w-full h-screen bg-[#0a192f]  text-gray-300 '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div >
                <p className='text-4xl font-bold inline border-b-4 border-emerald-600 animate-slideIn'>Skills</p>
                <p className='py-6 animate-slideInFromRight'>These are the Technologies i have worked with.</p>
            </div>
            <div className='grid  w-full grid-cols-2 sm:grid-cols-4 gap-10 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110  duration-500'>
                <img className='w-20 mx-auto' src="/images/html.png"></img>
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src="/images/css.png"></img>
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-16 mx-auto' src="/images/js.png"></img>
                <p className='my-4'>JavaScript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-16 mx-auto' src="/images/react.svg"></img>
                <p className='my-4'>React.js</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-16 mx-auto' src="/images/ts.png"></img>
                <p className='my-4'>TypeScript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src="/images/mongodb.png"></img>
                <p className='my-4'>MongoDB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-16 mx-auto' src="/images/sql.png"></img>
                <p className='my-4'>SQL</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src="/images/tailwind.png"></img>
                <p className='my-4'>Taiwind CSS</p>
            </div>
           
            </div>
        </div>
      
    </div>
  )
}

export default Skills
