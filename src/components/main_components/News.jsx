import React from 'react';

class News extends React.Component {

  constructor(props){
    super(props);
    this.state = {name:'ギラ'}
  }

  handleclick(skil){
    //stateのnameプロパティの値を変更する処理
    this.setState({name:skil});
  }

  render() {


    return(
      <div className="News">
        <div className="corner-title"><p>NEWS</p></div>


        <h1>呪文、{this.state.name}{this.state.name}!!!</h1>


        <h2 onClick = {() => {this.handleclick("ベギラゴン")}}>ベギラゴン</h2>
        <button onClick = {() => {this.handleclick("ヒャダルコ")}}>ヒャダルコ</button>

      <p>Newsotameshi</p>
      </div>
    );
  }
}

export default News;
