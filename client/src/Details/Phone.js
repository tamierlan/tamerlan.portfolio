import React from 'react'
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
