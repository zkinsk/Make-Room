import React from "react";
import { Parallax } from "react-parallax";

import imageList from "../utilities/randomBgImages"

const styles = {
  textAlign: "center"
};



function randomImage() {
  let i = imageList;
  let rand = Math.floor(Math.random() * i ) + 1;
  return `/images/background-${rand}.jpg`;
  // return imageList[rand];
}


export default function Plax(props) {
  Plax.defaultProps = {
    height: "130vh",
  };

  // const bgImageStyle = {
  //   objectFit: "cover",
  // };

  const insideStyles = {
    background: "white",
    opacity: 0.95,
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    borderRadius: "0.5rem"
  };

  if (props.width) {
    insideStyles.width = props.width
  }

  return(
    <div style={styles}>
      <Parallax
        bgImage={props.image || randomImage()}
        // bgImageStyle={bgImageStyle}
        strength={500}
      >
        {/* <div style={{ height: `${props.height}` }}className="plax-bg"> */}
        <div style={{ height: `${props.height}` }}className="plax-bg">
          <div className='plax-content' style={insideStyles}>{props.children}</div>
        </div>
      </Parallax>
    </div>
  )
};

