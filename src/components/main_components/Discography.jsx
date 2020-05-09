import React from 'react';
import grid from '../img/男の子1.jpg';


class Discography extends React.Component {
  render(){

    const list = {
      backgroundImage: `url(${grid})`,
    };


    return(
      <div className="discography">
        <div className="corner-title"><p>DISCOGRAPHY</p></div>
          <div className="grid">
            <ul>
              <li><a href=""><img style={list} /><p>男の子A</p></a></li>
              <li><a href=""><img style={list} /><p>男の子B</p></a></li>
              <li><a href=""><img style={list} /><p>男の子C</p></a></li>
              <li><a href=""><img style={list} /><p>男の子D</p></a></li>
              <li><a href=""><img style={list} /><p>男の子E</p></a></li>
              <li><a href=""><img style={list} /><p>男の子F</p></a></li>
            </ul>
          </div>

    </div>

    );
  }
}

export default Discography;
