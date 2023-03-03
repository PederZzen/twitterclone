import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

import { Wrapper } from './style';

const Actions = (props) => {
  return (
      <Wrapper>
        <span><FontAwesomeIcon icon={faComment} /> {props.comments}</span>
        <span><FontAwesomeIcon icon={faRetweet} /> {props.retweets}</span>
        <span><FontAwesomeIcon icon={faHeart} /> {props.likes}</span>
    </Wrapper>
  )
}

export default Actions
