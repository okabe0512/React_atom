import React from 'react';
import bg from '../img/wallhaven-43mgyn.jpg';
import data from './data.json';
import News from './News.jsx';

import { BrowserRouter, Route, Link } from 'react-router-dom';

const newsdata = data.map( (data) =>{
                  return  (

                    <td className="news-main-top">
                      <td className="news-date">
                        { data.id }
                      </td>

                      <td className="news-content">
                        { data.name }
                      </td>
                    </td>

                  )
                }
              )

const news = () => {return (<div>{<News />}</div>);}


class Top extends React.Component {
  render() {

    const style = {
      width: '98%',height: '50rem',backgroundImage: `url(${bg})`,
    };

    return (

      <div className ="main_top">
        <BrowserRouter>
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

                  <div className="newsdata">
                    <p>{newsdata}</p>
                    <div><a href = "/news">more...</a></div>

                  </div>
              </div>

              <div className="right_content">
                <div className="movie">
                  <h2>MOVIE</h2>
                </div>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/gH476CxJxfg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>

            </div>
          </div>

          </BrowserRouter>
      </div>
    );
  }
}

export default Top;
