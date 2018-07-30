import React from 'react';
import PropTypes from 'prop-types';
import { IMG_THUMB_BASE_URL } from '../config/api';

const VideoItemList = (props) => {
  const { movie, index, callback } = props;

  function handleOnClick() {
    callback(movie);
  }

  return (
    <li className={`list-group-item movie ${index}`} onClick={handleOnClick}>
      <div className="media">
        <div className="media-left">
          <img className="media-object img-rounded" src={`${IMG_THUMB_BASE_URL}${movie.poster_path}`} alt={movie.title} />
        </div>

        <div className="media-body">
          <h5 className="title-list-item">{movie.title}</h5>
        </div>
      </div>

    </li>
  );
};

VideoItemList.propTypes = {
  movie: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default VideoItemList;
