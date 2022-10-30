import React from 'react';
import  img  from "..//img.json";

const Clima = ({time}) => {

  console.log(img.img10)
  let linkFund = "";
  if ( time <= 10){
    linkFund = img.img1;
  }
  if (10<time && time<=15) {
    linkFund = img.img2;
  }
  if (15<time && time<=20) {
    linkFund = img.img3;
  }
  if (20<time && time<=25) {
    linkFund = img.img4;
  }

  if (25<time && time<=30) {
    linkFund = img.img5;
  }
  if (30<time && time<=35) {
    linkFund = img.img6;
  }
  if (35<time && time<=40) {
    linkFund = img.img7;
  }




  if (time>40) {
    linkFund = img.img8;
  }

console.log(  linkFund)

document.body.style = `background-image: url(${linkFund})`;

  return (
  
    <div>
      
    </div>
  );
};

export default Clima;