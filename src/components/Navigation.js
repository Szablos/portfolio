import React, {Component} from 'react';
import {HashRouter, NavLink, Switch, Route} from 'react-router-dom';
import Start from './Start';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import '../scss/navigation.scss';

const BtnHamburger = props => {
  let iconHamburger = <i className="fa fa-bars"></i>;
  console.log(window.innerWidth);

  if(props.hamburger === true) {
    return null;
  } else {
    return <button className="hamburger" onClick={props.click}>{iconHamburger}</button>;
  }
}

const NavListMobile = props => {
  const activeStyle = {
    borderBottom: "2px dashed #a5a5a5"
  }

  return (
    <ul className="nav_lists" style={{animation: `${props.appear===false ? "ghost 1s forwards" : "appear 1s ease-in"}`}} >
      <li><NavLink to="/" activeStyle={activeStyle}>Strona główna</NavLink></li>
      <li><NavLink to="/about" activeStyle={activeStyle}>O mnie</NavLink></li>
      <li><NavLink to="/projects" activeStyle={activeStyle}>Projekty</NavLink></li>
      <li><NavLink to="/contact" activeStyle={activeStyle}>Kontakt</NavLink></li>
      <li><button className="close" onClick={props.click}><i className="fa fa-times"/></button></li>
    </ul>
  )
}

class Navigation extends Component {
  state = {
    hamburger: false,
    appear: false
  }

  handleHambClick = () => {
    console.log(window);
    if(this.state.hamburger === false) {
      this.setState({
        hamburger: true,
        appear: true
      })
    } else {
      this.timeoutId = setTimeout(() => {
        this.setState({
          hamburger: false
        })
      }, 1000)
      this.setState({
        appear: false
      })
    }
  }

  render() {

    const {hamburger, appear} = this.state;

    return (
      <HashRouter>
        <>
          <nav className="navigation">
            {hamburger===true ? <NavListMobile click={this.handleHambClick} hamburger={hamburger} appear={appear}/> : null}
            <BtnHamburger click={this.handleHambClick} hamburger={hamburger} />
          </nav>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </>
      </HashRouter>
    )
  }
}

export default Navigation;