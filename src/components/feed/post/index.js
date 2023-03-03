import React from 'react'
import { PostWrapper, PostProfileImg } from './style';
import { User } from '../../user/userDetails';
import Header from './header';
import Content from './content';
import Actions from './actions';

const Post = (props) => {
  return (
    <PostWrapper>
        <div>
            <PostProfileImg src={User.profileImg} alt='Profile img'></PostProfileImg>
        </div>
        <div>
            <Header posted={props.posted}/>
            <Content content={props.content}/>
            <Actions comments={props.comments} retweets={props.retweets} likes={props.likes}/>
        </div>
    </PostWrapper>
  )
}

export default Post;