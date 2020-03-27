import React from 'react';
import { PortfolioConsumer } from '../context';
import githubpic from '../images/githubpic.jpg';

export default Github => {
  return (
    <PortfolioConsumer>
    {(value) => {
      return (
        <div className='githubpic' onMouseOver={value.lockemail} onMouseOut={value.unlockemail}>
          <a href='https://github.com/tamierlan'>
            <img src={githubpic} alt="githubpic" />
          </a>
          <br/>
          <form>
            <button><a href='https://github.com/tamierlan'>Check my Github</a></button>
          </form>
        </div>
      )
    }}
    </PortfolioConsumer>
  )
}
