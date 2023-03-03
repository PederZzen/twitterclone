import React from 'react';
import { User } from '../userDetails';
import { InfoWrapper } from './style';
import { InfoInner } from './style';

const Info = () => {
  return (
    <InfoWrapper>
      <h1>{User.name}</h1>
      <h2>{User.username}</h2>
      <InfoInner>
        <p>{User.bio}</p>
        <div className='flex'>
          <p><span className='bold'>{User.followers}</span> followers</p> &nbsp;
          <p><span className='bold'>{User.following}</span> following</p>
        </div>
      </InfoInner>
    </InfoWrapper>
  )
}

export default Info;