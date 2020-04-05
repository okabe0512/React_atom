import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Top = () => {return (<div>z</div>);}
const News = () => {return (<div>a</div>);}
const Schedule = () => {return (<div>b</div>);}
const Biography = () => {return (<div>c</div>);}
const Discography = () => {return (<div>d</div>);}
const Fanclub = () => {return (<div>e</div>);}

class Header extends React.Component {
  render() {
    return (
      <div className="header">

      <BrowserRouter>
        <div>
          <Route path="/" exact component={Top} />
          <Route path="/news" component={News} />
          <Route path="/schedule"  component={Schedule} />
          <Route path="/biography"  component={Biography} />
          <Route path="/discography"  component={Discography} />
          <Route path="/fanclub"  component={Fanclub} />

            <div className="header-item">

              <div className="title">
                <a hreh="">ここにタイトル名</a>
              </div>

              <div className="subtitle">
                <a hreh="">ここはサブタイトル名</a>
              </div>

              <div className="menu">
                <ul>
                  <li><Link to = "/">TOP</Link></li>
                  <li><Link to = "/news">NEWS</Link></li>
                  <li><Link to = "/schedule">SCHEDULE</Link></li>
                  <li><Link to = "/biography">BIOGRAPHY</Link></li>
                  <li><Link to = "/discography">DISCOGRAPHY</Link></li>
                  <li><Link to = "/fanclub">FANCLUB</Link></li>
                </ul>
              </div>

            </div>
        </div>
      </BrowserRouter>

      </div>

    );
  }
}

export default Header;
