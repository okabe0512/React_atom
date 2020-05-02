import React from 'react';
import bg from './img/wallhaven-4oz950.jpg';

export default class Top extends React.Component {
  render() {

    const style = {
      width: '100%',height: '50rem',backgroundImage: `url(${bg})`,
    };

    return (
      <div className ="main_top">
        <h1 class="logo">
          <img style={ style } />
          <span class="logo-name">画像の上に文字</span>
          <span class="logo-title">画像の上に文字2</span>
        </h1>

        <div className="main-area-container">
          <div className="wrap">

            <div className="left_content">
              <div className="news">
                <h2>NEWS</h2>
              </div>

              <p>
                1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム
                1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム
                1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム
                1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム
                1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム1カラム
              </p>
            </div>

            <div className="right_content">
              <div className="movie">
                <h2>MOVIE</h2>
              </div>

              <iframe width="560" height="315" src="https://www.youtube.com/embed/gH476CxJxfg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

          </div>
        </div>


      </div>
    );
  }
}
