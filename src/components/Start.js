import React, {Component} from 'react';
import '../scss/start.scss';

class Start extends Component {
  state = {
    slide1: false,
    slide2: false,
    slide3: false,
    slide4: false,
    slide5: false,
  }

  componentDidMount = () => {
    this.timeoutId1 = setTimeout(() => {
      this.setState({
        slide1: true
      })
    }, 500)
    this.timeoutId2 = setTimeout(() => {
      this.setState({
        slide2: true
      })
    }, 1000)
    this.timeoutId3 = setTimeout(() => {
      this.setState({
        slide3: true
      })
    }, 1500)
    this.timeoutId4 = setTimeout(() => {
      this.setState({
        slide4: true,
      })
    }, 2000)
    this.timeoutId5 = setTimeout(() => {
      this.setState({
        slide5: true,
      })
    }, 2500)
  }

  render() {

    const {slide1, slide2, slide3, slide4, slide5} = this.state;

    return (
      <main>
        <section>
          <div className="start_container">
            <span className="text_1" style={{display: `${slide1===true ? "block" : "none"}`}}>Junior</span>
            <span className="text_2" style={{display: `${slide2===true ? "block" : "none"}`}}>Front-end</span>
            <span className="text_3" style={{display: `${slide3===true ? "block" : "none"}`}}>Developer</span>
          </div>
          <div className="separate_line">
            <span className="anim_line" style={{display: `${slide4===true ? "block" : "none"}`}}>
              <i className="fa fa-apple"></i>
            </span>
          </div>
          <div className="author_name" style={{display: `${slide5===true ? "block" : "none"}`}}>
            <p>Filip Szabłowski</p>
          </div>
        </section>
      </main>
    )
  }
}

export default Start;
