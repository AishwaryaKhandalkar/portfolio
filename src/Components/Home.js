import React from 'react'

function Home() {
  return (
    <section id='home' className='home'>
        <p>
          <span className='text-teal-300'>Hi, my name is</span><br/>
          <b className='text-3xl lg:text-6xl sm:leading-loose name text-white'>Aishwarya Khandalkar.</b>
        </p>
        <p className='text-sm lg:text-xl'>I build things for the web.</p>
        <p className='text-sm lg:text-xl summary'>I'm a software engineer specializing in building exceptional digital experiences. </p>
        <p className='text-sm text-teal-300 lg:text-lg'>Currently, I'm looking for new opportunities.</p>
    </section>
  )
}

export default Home