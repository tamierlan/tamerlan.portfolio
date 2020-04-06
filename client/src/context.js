import React, { Component } from 'react';
import axios from 'axios';

const PortfolioContext = React.createContext();

class PortfolioProvider extends Component {
  constructor() {
    super()

    this.state = {
      skill: 'close',
      github: 'close',
      phone: 'close',
      formemail: 'close',
      emailname: '',
      email: '',
      emailmessage: '',
      check: false,
      inputname: '',
      inputemail: '',
      inputmessage: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

//////////// toggle icons  //////////////
  skillToggle = () => {this.setState({ github: 'close', phone: 'close', formemail: 'close', skill: 'open' })}
  githubToggle = () => {this.setState({ skill: 'close', formemail: 'close', phone: 'close', github: 'open' })}
  phoneToggle = () => {this.setState({ skill: 'close', github: 'close', formemail: 'close', phone: 'open' })}
  formemailToggle = () => {this.setState({ skill: 'close', github: 'close', phone: 'close', formemail: 'open', emailname: '', email: '', emailmessage: ''})}

  lockemail = () => {this.setState({ check: true })}
  unlockemail = () => {this.setState({ check: false })}


//////////////// closeAll //////////////////////
  closeAll = () => {
    if (this.state.check === true) {
      this.setState({ check: true })
    } else {
      this.setState({ skill: 'close', github: 'close', phone: 'close', formemail: 'close', inputname: '', inputemail: '', inputmessage: '' })
    }
  }


/////// email handle click ////////
  emailname = (e) => {this.setState({ emailname: e.target.value, inputname: '' })}
  email = (e) => {this.setState({ email: e.target.value, inputemail: '' })}
  emailmessage = (e) => {this.setState({ emailmessage: e.target.value, inputmessage: '' })}


//////////// email submit /////////
  async handleSubmit(e) {
    e.preventDefault()
    if (this.state.emailname === '') {
      this.setState({ inputname: 'redname' })
    } else if (this.state.email === '') {
      this.setState({ inputemail: 'redemail' })
    } else if (this.state.emailmessage === '') {
      this.setState({ inputmessage: 'redmessage' })
    } else if (!this.state.email.includes('@')) {
      this.setState({ inputemail: 'redmessage' })
    } else {
      const { emailname, email, emailmessage } = this.state;
      await axios.post('/api/form', { emailname, email, emailmessage })
      this.setState({ emailname: '', email: '', emailmessage: '' })
    }
  }


  render() {
    return(
      <PortfolioContext.Provider value={{
        state: this.state,
        closeAll: this.closeAll,
        skillToggle: this.skillToggle,
        githubToggle: this.githubToggle,
        phoneToggle: this.phoneToggle,
        formemailToggle: this.formemailToggle,
        handleClick: this.handleClick,
        handleSubmit: this.handleSubmit,
        emailname: this.emailname,
        email: this.email,
        emailmessage: this.emailmessage,
        lockemail: this.lockemail,
        unlockemail: this.unlockemail
      }}>
        {this.props.children}
      </PortfolioContext.Provider>
    )
  }
}

const PortfolioConsumer = PortfolioContext.Consumer;
 export { PortfolioProvider, PortfolioConsumer };
