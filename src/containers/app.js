import React, { Component } from 'react';
import axios from 'axios';

import { API_END_POINT, POPULAR_MOVIES_URL, API_KEY } from '../config/api';

import VideoList from './VideoList';
import VideoDetail from '../components/VideoDetail';
import SearchBar from '../components/SearchBar';
import Video from '../components/Video';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      currentMovie: {},
    };

    // use in constructor Lifecycle before render (componentWillMount() is deprecated)
    this.getPopulareMovies();
  }

  getPopulareMovies() {
    axios.get(
      `${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`,
    ).then(
      (response) => {
        this.setState({
          movies: response.data.results.slice(1, 6),
          currentMovie: response.data.results[0],
        }, function () {
          this.getCurrentMovieVideo();
        });
      },
    );
  }

  getCurrentMovieVideo() {
    axios.get(
      `${API_END_POINT}movie/${this.state.currentMovie.id}?append_to_response=videos&include_adult=false&${API_KEY}`,
    ).then(
      (response) => {
        const youtubeKey = (typeof response.data.videos.results[0].key !== "undefined")
          ? response.data.videos.results[0].key
          : '';

        const newCurrentMovie = this.state.currentMovie;
        newCurrentMovie.video_id = youtubeKey;


        this.setState({ currentMovie: newCurrentMovie });
      },
    );
  }

  getSearchMovie(searchText) {    
    if (searchText && searchText.length > 3 ) {
      axios.get(
        `${API_END_POINT}search/movie?language=fr&page=1&include_adult=false&${API_KEY}&query=${searchText}`,
      ).then(
        (response) => {
          if (response.data && response.data.results[0]) {
            if(response.data.results[0].id !== this.state.currentMovie.id) {
              this.setState({ currentMovie: response.data.results[0]}, () => {
                this.getCurrentMovieVideo();
                this.setRecommendation();
              });
            }
          }
        },
      );
    }
  }

  setRecommendation() {
    axios.get(
      `${API_END_POINT}movie/${this.state.currentMovie.id}/recommendations?&${API_KEY}&language=fr&page=1`,
    ).then(
      (response) => {
        this.setState({movies: response.data.results.slice(0, 5)});
      },
    );
  }

  // Arrow fx for binding
  handleItemListCallback = (movie) => {
    this.setState({currentMovie : movie}, function(){
      this.getCurrentMovieVideo();
      this.setRecommendation();
    })
  }

  // Arrow fx for binding
  handleSearch = (searchText) => {
    this.getSearchMovie(searchText);
  }

  render() {
    const { currentMovie, movies } = this.state;
    return (
      <div>
        <div className="search-bar">
          <SearchBar callback={this.handleSearch} />
        </div>

        <div className="row">
          <div className="col-md-8">
            {currentMovie.video_id && 
              <Video videoId={currentMovie.video_id} />
            }
            <VideoDetail title={currentMovie.title} description={currentMovie.overview} picture={currentMovie.poster_path} />
          </div>
          <div className="col-md-4">
            {movies.length && 
              <VideoList movieList={movies} callback={this.handleItemListCallback} />
            }
          </div>
        </div>

      </div>
    );
  }
}
