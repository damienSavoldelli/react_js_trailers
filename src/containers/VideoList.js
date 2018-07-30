import React from 'react';
import VideoItemList from '../components/VideoItemList';

const VideoList = (props) => {
  const { movieList, callback } = props;

  function receiveCallback(movie) {
    callback(movie);
  }

  return (
    <div>
      <ul className="list-group">
        {movieList.map(movie => (
          <VideoItemList key={movie.id} index={movie.id} movie={movie} callback={receiveCallback} />
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
