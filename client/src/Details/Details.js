import React from 'react'

import Tamerlan from './Tamerlan'
import { IoMdSchool } from 'react-icons/io'
import { FaGithub } from 'react-icons/fa'
import { FaPhoneSquare } from 'react-icons/fa'
import { IoIosMailOpen } from 'react-icons/io'

import Skill from './Skill'
import Github from './Github'
import Phone from './Phone'
import Email from './Email'

import { PortfolioConsumer } from '../context'


export default Details => {

  return (
    <div className='details'>
      <Tamerlan />
        <PortfolioConsumer>
          {(value) => {
            return (
              <>
                <div className='icons'>
                  <IoMdSchool className={value.state.skill} onMouseEnter={value.skillToggle} />
                  <FaGithub className={value.state.github} onMouseEnter={value.githubToggle} />
                  <FaPhoneSquare className={value.state.phone} onMouseEnter={value.phoneToggle} />
                  <IoIosMailOpen className={value.state.formemail} onMouseEnter={value.formemailToggle} />
                </div>
                <div className='toggle'>
                  <div className={value.state.skill}> <Skill /> </div>
                  <div className={value.state.github}> <Github /> </div>
                  <div className={value.state.phone}> <Phone /> </div>
                  <div className={value.state.formemail}> <Email /> </div>
                </div>
              </>
            )
          }}
        </PortfolioConsumer>
    </div>
  )
}
