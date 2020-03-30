import React from 'react';
import './App.css';
import Details from './Details/Details';
import Projects from './Projects/Projects';
import ScrollToBottom from './react-scroll-to-bottom';
import { PortfolioConsumer } from './context';

export default App => {
  return (
    <PortfolioConsumer>
      {(value) => {
        return (
          <div onClick={value.closeAll}>
            <ScrollToBottom className="scroll">
              <Details />
              <Projects />
            </ScrollToBottom>
          </div>
        )
      }}
    </PortfolioConsumer>
  )
}
