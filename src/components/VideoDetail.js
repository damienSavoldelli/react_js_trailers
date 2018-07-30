import React from 'react';
import PropTypes from 'prop-types';

import { IMG_THUMB_BASE_URL } from '../config/api';

const VideoDetail = (props) => {
  const { title, description, picture } = props;
  return (
    <div>
      <h1>{title}</h1>
      <div className="row">
        <div className="col-xs-4 text-center">
          { picture
            && <img className="img-rounded img-fluid center-block" src={`${IMG_THUMB_BASE_URL}${picture}`} alt={title} />
          }
        </div>
        <div className="col-xs-8">
          <p>{description}</p>
        </div>
      </div>

    </div>
  );
};


VideoDetail.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default VideoDetail;
