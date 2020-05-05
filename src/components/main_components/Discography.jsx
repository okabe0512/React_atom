import React from 'react';
import grid from '../img/男の子1.jpg';


export default class Discography extends React.Component {
  render(){

    const list = {
      backgroundSize: `contain` ,
      backgroundImage: `url(${grid})`,
    };


    return(
      <div className="grid">
        <ul>
          <li><img style={list} /></li>
          <li><img style={list} /></li>
          <li><img style={list} /></li>
          <li><img style={list} /></li>
          <li><img style={list} /></li>
          <li><img style={list} /></li>
          <li><img style={list} /></li>
          <li><img style={list} /></li>
          <li><img style={list} /></li>
          <li><img style={list} /></li>

        </ul>
      </div>
    );
  }
}
