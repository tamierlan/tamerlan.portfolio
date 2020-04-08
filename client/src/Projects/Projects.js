import React, { useState } from 'react';
import phoneworks from '../images/phoneworks.png'
import truckshop from '../images/truckshop.png'
import phoneshop from '../images/phoneshop.png'

export default Projects => {
  const [state] = useState([
    {
      pic: phoneworks,
      title: "Cellphone Store",
      subtitle: "( fullstack react website )",
      link: "https://phone-works.herokuapp.com/",
      text: "If you’re a student or a professional looking to get ahead, you need a website. It’s your chance to establish an online home base, impress recruiters, and provide something that will set you apart from the stacks of static resumes that everyone else is submitting for job applications."
    },
    {
      pic: truckshop,
      title: "Cellphone Store",
      subtitle: "( fullstack react website )",
      link: "https://truckshopping.netlify.com/",
      text: "If you’re a student or a professional looking to get ahead, you need a website. It’s your chance to establish an online home base, impress recruiters, and provide something that will set you apart from the stacks of static resumes that everyone else is submitting for job applications."
    },
    {
      pic: phoneshop,
      title: "Cellphone Store",
      subtitle: "( fullstack react website )",
      link: "https://mini-phone-store.netlify.com/",
      text: "If you’re a student or a professional looking to get ahead, you need a website. It’s your chance to establish an online home base, impress recruiters, and provide something that will set you apart from the stacks of static resumes that everyone else is submitting for job applications."
    }

  ])

  return(
    <div className="projects">
      <div className='hoveronweb'>
        {state.map(item => (
          <div className="project">
            <a className="computer" href={item.link}>
              <img src={item.pic} alt="pic" />
              <h3 className="title">{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <p>{item.text}</p>
              <button>
                Check Out
              </button>
            </a>
            <a className="phone">
              <img src={item.pic} alt="pic" />
              <h3 className="title">{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <p>{item.text}</p>
              <a href={item.link}>
                <button>
                  Check Out
                </button>
              </a>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
