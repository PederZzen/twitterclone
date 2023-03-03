import React from 'react';
import Post from './post';
import { Posts } from './post/posts';

const Feed = () => {
  return (
    <>
        {Posts.map((post) => {
            return <Post content={post.content} posted={post.posted} comments={post.comments} retweets={post.retweets} likes={post.likes}/>
        })}
    </>
  )
}

export default Feed
