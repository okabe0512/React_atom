import React from 'react';
import Top from './main_components/Top.jsx';
import News from './main_components/News.jsx';
import Discography from './main_components/Discography.jsx';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const top = () => {return (<div>{<Top />}</div>);}
const news = () => {return (<div>{<News />}</div>);}
const schedule = () => {return (<div>b</div>);}
const biography = () => {return (<div>c</div>);}
const discography = () => {return (<div>{<Discography />}</div>);}
const fanclub = () => {return (<div>e</div>);}


class Main extends React.Component {

  render() {
    return (
      <div className="main">

        <BrowserRouter>

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

            <div>
              <Route exact path="/" component={top} />
              <Route path="/news" component={news} />
              <Route path="/schedule"  component={schedule} />
              <Route path="/biography"  component={biography} />
              <Route path="/discography"  component={discography} />
              <Route path="/fanclub"  component={fanclub} />
            </div>

            <div className="menu_sub">
              <ul>
                <li><Link to = "/">TOP</Link></li>
                <li><Link to = "/news">NEWS</Link></li>
                <li><Link to = "/schedule">SCHEDULE</Link></li>
                <li><Link to = "/biography">BIOGRAPHY</Link></li>
                <li><Link to = "/discography">DISCOGRAPHY</Link></li>
                <li><Link to = "/fanclub">FANCLUB</Link></li>
              </ul>
            </div>

        </BrowserRouter>
      </div>
    );
  }
}

export default Main;　//App.jsにエクスポート
