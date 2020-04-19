import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className ="footer">
        <div className="footer-contents">
          <ul>
            <li><a href="">TOP</a></li>
            <li><a href="">NEWS</a></li>
            <li><a href="">SCHEDULE</a></li>
            <li><a href="">BIOGRAPHY</a></li>
            <li><a href="">DISCOGRAPHY</a></li>
            <li><a href="">FANCLUB</a></li>
          </ul>
        </div>

        <div className ="copyright">
          <p>©Copyright.com</p>
        </div>
      </div>
    );
  }
}

export default Footer;　//App.jsにエクスポート
