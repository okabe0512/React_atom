import React from 'react';
import data from './data.json';

const newsdata = data.map( ( data) =>{
                  return(
                    <div className="article">
                          <div className="news-main">
                                <div className="news-date">
                                  { data.id }
                                </div>

                                <div className="news-name">
                                  { data.name }
                                </div>

                                <div className="news-content">
                                  { data.content }
                                </div>
                          </div>
                    </div>//article
                  )
                }
              )

class News extends React.Component {
    render() {
        return (
            <div className="aaaa">
              {newsdata}
            </div>

        )
    }
}

export default News;
