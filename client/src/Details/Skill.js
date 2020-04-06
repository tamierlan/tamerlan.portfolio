import React from 'react';
// import { TiHtml5 } from 'react-icons/ti';
// import { FaCss3Alt } from 'react-icons/fa';
// import { IoLogoJavascript } from 'react-icons/io';
// import { FaReact } from 'react-icons/fa';
// import { FaNodeJs } from 'react-icons/fa';
import { PortfolioConsumer } from '../context';

export default Phone => {
  return (
    <PortfolioConsumer>
      {(value) => {
        return (
          <form onMouseOver={value.lockemail} onMouseOut={value.unlockemail}>
            <button><a href="tel:+17187824455">Call<br/>757 275 5420</a></button>
          </form>
        )
      }}
    </PortfolioConsumer>
  )
}
