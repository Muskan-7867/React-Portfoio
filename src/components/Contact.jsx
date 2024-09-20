import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center  text-gray-300 py-16 items-center p-4">
    <form method='POST' action="https://getform.io/f/bdrywqeb" className=" flex flex-col   w-full max-w-[600px]">
      <div className="pb-8 animate-slideIn">
        <p className="text-4xl font-bold inline border-b-4 border-emerald-600 ">Contact</p>
    
      </div>
      <input className='p-2 bg-[#ccd6f6]   animate-slideInFromRight text-gray-900  rounded-lg mb-4' type='text' placeholder='Name' name='name'></input>
      <input className='p-2 bg-[#ccd6f6] animate-slideIn text-gray-900 rounded-lg mb-4' type='email' placeholder='Email' name='email'></input>
      <textarea className='p-2 bg-[#ccd6f6] animate-slideInFromRight text-gray-900 rounded-lg ' rows="10" type='message' placeholder='Message' name='message'></textarea>
      <button className='text-white border-2 animate-slideIn border-emerald-600 hover:bg-emerald-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
    </form>
    </div>
   
  )
}

export default Contact
