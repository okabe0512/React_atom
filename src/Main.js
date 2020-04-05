import React from 'react';
import bg from './img/wallhaven-4oz950.jpg';

const style = {
  width: '100%',
  height: '50rem',
  backgroundImage: `url(${bg})`,
};

class Main extends React.Component {
  render() {
    return (
      <div className ="main">


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
              <p>
                ここに動画埋め込みここに動画埋め込みここに動画埋め込みここに動画埋め込みここに動画埋め込みここに動画埋め込み
                ここに動画埋め込みここに動画埋め込みここに動画埋め込みここに動画埋め込みここに動画埋め込みここに動画埋め込み
                ここに動画埋め込みここに動画埋め込みここに動画埋め込みここに動画埋め込みここに動画埋め込みここに動画埋め込み
                ここに動画埋め込みここに動画埋め込みここに動画埋め込みここに動画埋め込みここに動画埋め込みここに動画埋め込み
                ここに動画埋め込みここに動画埋め込みここに動画埋め込みここに動画埋め込みここに動画埋め込みここに動画埋め込み
                ここに動画
              </p>
            </div>

          </div>
        </div>


      </div>
    );
  }
}

export default Main;