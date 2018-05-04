import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import videoDetail from './components/video_detail';

const API_KEY = "AIzaSyBqWamyrKiq-l6B1khSPHtmxvffSl4G_2E";

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = { videos:[] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
        <videoDetail video={ this.state.videos[0] } />
        <VideoList videos={ this.state.videos } />
      </div>
    );
  }
  
};

ReactDom.render(<App/>, document.querySelector('.container'));