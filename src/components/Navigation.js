import React, {Component} from 'react';
import {HashRouter, NavLink, Switch, Route} from 'react-router-dom';
import Start from './Start';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import '../scss/navigation.scss';

const BtnHamburger = props => {
  let iconHamburger = <i className="fa fa-bars"></i>;

  if(props.hamburger === true) {
    return null;
  } else {
    return <button className="hamburger" onClick={props.click}>{iconHamburger}</button>;
  }
}

const NavListMobile = props => {
  const activeStyle = {
    borderBottom: "2px dashed #e0e0e0"
  }

  return (
    <ul className={`${props.classActive==="open" ? "open" : "nav_lists"}`} style={props.classActive==="open" ? {animation: `${props.appear===false ? "ghost 1s forwards" : "appear 1s ease-in"}`} : null}>
      <li><NavLink to="/" activeStyle={activeStyle}>Strona główna</NavLink></li>
      <li><NavLink to="/about" activeStyle={activeStyle}>O mnie</NavLink></li>
      <li><NavLink to="/projects" activeStyle={activeStyle}>Projekty</NavLink></li>
      <li><NavLink to="/contact" activeStyle={activeStyle}>Kontakt</NavLink></li>
      <li className="close"><button className="close" onClick={props.click}><i className="fa fa-times"/></button></li>
    </ul>
  )
}

class Navigation extends Component {
  state = {
    classActive: "",
    hamburger: false,
    appear: false
  }

  handleHambClick = () => {
    console.log(window);
    if(this.state.hamburger === false) {
      this.setState({
        classActive: "open",
        hamburger: true,
        appear: true
      })
    } else {
      this.timeoutId = setTimeout(() => {
        this.setState({
          classActive: "",
          hamburger: false
        })
      }, 1000)
      this.setState({
        appear: false
      })
    }
  }

  render() {

    const {hamburger, appear, classActive} = this.state;

    return (
      <HashRouter>
        <>
          <nav className="navigation">
            <NavListMobile click={this.handleHambClick} classActive={classActive} hamburger={hamburger} appear={appear}/>
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