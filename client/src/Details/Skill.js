import React from 'react';
import { TiHtml5 } from 'react-icons/ti';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
// import { PortfolioConsumer } from '../context';

export default Skill => {
  return (
          <div className='skill'>    
            <button><a href="tel:+17187824455">Call<br/>757 275 5420</a></button>
            <div className='icon-text'>
              <TiHtml5 className='icon' />
              <h2>html</h2>
            </div>
            <div className='icon-text'>
              <FaCss3Alt className='icon' />
              <h2>css / bootstrap</h2>
            </div>
            <div className='icon-text'>
              <IoLogoJavascript className='icon' />
              <h2>javascript</h2>
            </div>
            <div className='icon-text'>
              <FaReact className='icon' />
              <h2>react / context api</h2>
            </div>
            <div className='icon-text'>
              <FaNodeJs className='icon' />
              <h2>node js</h2>
            </div>
          </div>

  )
}
