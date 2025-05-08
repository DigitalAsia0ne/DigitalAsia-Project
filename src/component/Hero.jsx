import React from 'react'

function Hero() {
  return (
    <div className='bg-black text-white m-auto pt-10'>
        <div className='text-center'>
          <h1 className='text-[#E9C08D] text-5xl'>Saas Delivery <br/> Management Software</h1>
        <div>
        <p className='mt-8 text-sm '>It’s time to start your kids learning with fun. Share your gratitude and <br /> experience by sending</p>
        </div>
         <div className='pt-8'>
         <button className='bg-[#FF9C1F] hover:bg-[#FF9C1F] px-4 py-1 rounded text-white'>Get Started</button>
         </div>
        </div>
        <div className='w-full h-72 flex justify-center items-center text-center'>
            <img src="https://media.istockphoto.com/id/1223652224/photo/img-8434.jpg?s=1024x1024&w=is&k=20&c=PE15D-AWG4JsbUBn5B0mXn7Q8y9NlpYJYyS1_LtbkgM= " alt="Hero "
            className='h-80px w-80' />
        </div>
    </div>
  )
}

export default Hero
