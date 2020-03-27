import React from 'react';
import { PortfolioConsumer } from '../context';

export default Email => {
  return(
    <PortfolioConsumer>
      {(value) => {
        return (
          <form onMouseOver={value.lockemail} onMouseOut={value.unlockemail}>
            <p>
              <input  className={value.state.inputname} placeholder="Name" value={value.state.emailname} onChange={value.emailname} />
            </p>
            <p>
              <input className={value.state.inputemail} placeholder="Email" value={value.state.email} onChange={value.email} />
            </p>
            <p className="full">
              <textarea className={value.state.inputmessage} id="message" placeholder="Text . . ." value={value.state.emailmessage} onChange={value.emailmessage} />
            </p>
            <p>
              <button onClick={value.handleSubmit}>Send Email</button>
            </p>
          </form>
        )
      }}
    </PortfolioConsumer>
  )
}
