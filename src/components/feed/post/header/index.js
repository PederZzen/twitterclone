import React from 'react';
import { User } from '../../../user/userDetails';
import { Wrapper } from './style';

const Header = (props) => {
  return (
    <Wrapper>
        <p>{User.name}</p>
        <p>{User.username}</p>
        <p>{props.posted}</p>
    </Wrapper>
  )
}

export default Header
