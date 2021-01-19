import React, { useState } from 'react';
import phoneworks from '../images/phoneworks.png'
import truckshop from '../images/truckshop.png'
import phoneshop from '../images/phoneshop.png'
import jobtracker from '../images/jobtracker.png'

export default Projects => {
  const [state] = useState([
    {
      pic: phoneworks,
      title: "Cellphone Store",
      subtitle: "( fullstack react website )",
      link: "https://phone-works.herokuapp.com/",
      text: "Cellphone store website built with frontend with react js, backend with node js. I used to work as technician for this Cellphone store last 5 years where they fix computers and phones."
    },
    // {
    //   pic: truckshop,
    //   title: "truck dealer",
    //   subtitle: "( reast js, bootstrap css )",
    //   link: "https://truckshopping.netlify.com/",
    //   text: "truck shop website I built this website for develop my skill with react js, context api, bootstrap css"
    // },
    // {
    //   pic: phoneshop,
    //   title: "phone shoping",
    //   subtitle: "( react js, bootstrap css )",
    //   link: "https://mini-phone-store.netlify.com/",
    //   text: "phone shoping website I built this website for develop my skill with react js, context api, bootstrap css"
    // },
    // {
    //   pic: jobtracker,
    //   title: "job tracker",
    //   subtitle: "( react.js, material-ui, firebase, netlify   )",
    //   link: "https://students-job-tracking.netlify.app/",
    //   text: "job tracking application, user can post new opening jobs with details and descriptions also user can custom search for jobs and apply for those positions"
    // }

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
