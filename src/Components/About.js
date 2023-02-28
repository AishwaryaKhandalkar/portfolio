import React from 'react'
import Potrait from '../aishwaryak.jpg'

function About() {
  return (
    <section className='about' id='about'>
      <div className='inner-container grid lg:grid-cols-2 gap-16 xs:grid-cols-1'>
        <div>
          <p className='mb-4'>
            Hello! My name is Aishwarya and I enjoy creating things that live on the internet. </p>
          <p className='mb-4'>Passionate, result-driven and versatile frontend engineer with 3+ years of experience designing, developing and managing complex websites, web applications. Specializes in coding complex user interface across multiple viewports and responsive designing.</p>
          <p className='mb-4'>
            Spirited about going the extra mile to ensure the customer is unquestionably satisfied with the product or service provided. With emphasis on scalable and well-documented code, I look forward to working collaboratively as well as spearheading independent projects.
          </p>
          <p className='mb-4'>Here are a few technologies I've worked on:</p>
          <ul className='skills grid grid-cols-2 ml-2'>
            <li>ReactJs</li>
            <li>Redux</li>
            <li>Javascript (ES6)</li>
            <li>jQuery</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>SCSS</li>
            <li>HTML5</li>
          </ul>
        </div>
        <div>
          <div>
            <img className='potrait' src={Potrait} alt='Aishwarya'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About