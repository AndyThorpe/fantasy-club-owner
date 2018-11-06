import React, { Component } from 'react';
import League from './League';
import Summary from './Summary.js';
import Slider from "react-slick";
import Next from "../../assets/img/next.png";
import Prev from "../../assets/img/prev.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from "react-redux";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={Next}
      className={className}
      style={{ ...style, display: "block", width: "35px", height: "35px", right: "15px", bottom: '200px' }}
      onClick={onClick}
      alt="Next"
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={Prev}
      className={className}
      style={{ ...style, display: "block", width: "35px", height: "35px", left: "15px", bottom: '200px' }}
      onClick={onClick}
      alt="Prev"
    />
  );
}

class SelectTeams extends Component { 
  

  render() {

    var settings = {
      dots: true,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      adaptiveHeight: false,
      focusOnSelect: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      appendDots: dots => (
        <div className="flag-links"> {dots}</div>
      ),
      customPaging: function(i) {
        return (
          <a>
            <img width='32px' src={'./assets/flag/img/flag' + i + '.png'} alt="Flag" />
          </a>
        );
      },
    };
  
    var leagues = this.props.data;
    var league = leagues.map((info, index) => {
        return (
            <League 
              league={info} 
              step={index} 
              update={this.props.updateSelection}
              key={index}
              />
        )
    });


      return (
        <div className="signup">
          <div className="flag-links"></div>
          <div className="container">
            <Slider {...settings}>
              {league} 
            </Slider>  
          </div>
           <footer id="footer">
              <Summary 
                update={this.props.updateSelection}
              /> 
           </footer>
        </div>
      );
    }
}


function mapStateToProps(state) {
  return {
    data: state.data,
    selection: state.selection
  };
}

export default connect(mapStateToProps)(SelectTeams);
