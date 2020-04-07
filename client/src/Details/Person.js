import React from 'react'
import { TiHtml5 } from 'react-icons/ti';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';

export default Person => {
  return (
    <div className='person'>
      <div className='about-me'>
        <h3>Tamerlan<br/>26 years old</h3>
        <h3>
          Hello! I'm self-taughtsoftware<br/>
          engineer who enjoys build<br/>
          things in screen and out
        </h3>
      </div>
      <div className='icon-text'>
        <TiHtml5 className='icon' />
        <h3>html</h3>
        <button />
      </div>
      <div className='icon-text'>
        <FaCss3Alt className='icon' />
        <h3>css / bootstrap</h3>
      </div>
      <div className='icon-text'>
        <IoLogoJavascript className='icon' />
        <h3>javascript</h3>
      </div>
      <div className='icon-text'>
        <FaReact className='icon' />
        <h3>react / context api</h3>
      </div>
      <div className='icon-text'>
        <FaNodeJs className='icon' />
        <h3>node js</h3>
      </div>
    </div>
  )
}
