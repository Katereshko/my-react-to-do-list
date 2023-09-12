import { Component } from "react";
import Pic1 from './Pictures/Pic1.svg';
import Pic2 from './Pictures/Pic2.svg';
import Pic3 from './Pictures/Pic3.svg';
import Pic4 from './Pictures/Pic4.svg';
import Pic5 from './Pictures/Pic5.svg';
import Pic6 from './Pictures/Pic6.svg';
import Pic7 from './Pictures/Pic7.svg';
import Pic8 from './Pictures/Pic8.svg';
import Pic9 from './Pictures/Pic9.svg';
import Pic10 from './Pictures/Pic10.svg';
import Pic11 from './Pictures/Pic11.svg';
import Pic12 from './Pictures/Pic12.svg';

export class Pictures extends Component{
  constructor(){
    super();
    this.state = {
    }
  }

  render(){
    return(
      <div className="container_pictures"> 
        <img className="image_small img1" src={Pic1} alt="background_picture" />
        <img className="image_small img2" src={Pic2} alt="background_picture" />
        <img className="image_small img3" src={Pic3} alt="background_picture" />
        <img className="image_small img4" src={Pic4} alt="background_picture" />
        <img className="image_small img5" src={Pic5} alt="background_picture" />
        <img className="image_small img6" src={Pic6} alt="background_picture" />
        <img className="image_small img7" src={Pic7} alt="background_picture" />
        <img className="image_small img8" src={Pic8} alt="background_picture" />
        <img className="image_small img9" src={Pic9} alt="background_picture" />
        <img className="image_small img10" src={Pic10} alt="background_picture" />
        <img className="image_small img11" src={Pic11} alt="background_picture" />
        <img className="image_small img12" src={Pic12} alt="background_picture" />
      </div>
    )
  }
}
