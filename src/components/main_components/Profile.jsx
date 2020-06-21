import React from 'react';
import Prof from '../img/Whiteday2020-11.jpg';

class Profile extends React.Component {
  render() {

    const photo = {
      width: '30%',height: '50rem',backgroundImage: `url(${Prof})`,
    };

    return(
      <div className="pro-Contents_Box">
        <div className="corner-title"><p>PROFILE</p></div>

          <div className="pro-Contents_Photo">
            <img style={ photo } />
          </div>

          <div className="pro-Contents_Prof">
            <h5>N a m a e　 T a r o u</h5>
            <h1>名 前 太 郎</h1>
            <div className="pro-Contents_Text">
              <p>
                05月01日生まれ○県出身、
                <br />
                血液型B型。××所属。
              </p>
              <p>
                紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文
                <br />
                紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文
              </p>
              <p>
              </p>
            </div>
          </div>

      </div>
    );
  }
}

export default Profile;
