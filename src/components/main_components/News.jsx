import React from 'react';
import kari from '../img/news仮.png';

const karikari = {
  width: '100%',height: '50rem',backgroundImage: `url(${kari})`,
};

export default class News extends React.Component {
  render() {
    return(
      <div className="aaa">
        <img style={karikari} />
      </div>
    );
  }
}
