import React from 'react';
import { ListItem, Logo, Wrapper } from './style';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faUser } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faBell, faLemon, faEnvelope, faRectangleList, faFolderOpen } from '@fortawesome/free-regular-svg-icons';

const List = () => {
  return (
    <Wrapper>
      <li><Logo src='media/logo.png' alt='logo'></Logo></li>
      <ListItem>
        <FontAwesomeIcon icon={faLemon}></FontAwesomeIcon>
        <span>
          Home
        </span> 
      </ListItem>
      <li><FontAwesomeIcon icon={faHashtag}></FontAwesomeIcon> Explore</li>
      <li><FontAwesomeIcon icon={faBell}></FontAwesomeIcon> Notifications</li>
      <li><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> Messages</li>
      <li><FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon> Bookmarks</li>
      <ListItem>
        <FontAwesomeIcon icon={faRectangleList}></FontAwesomeIcon>
        <span>
          Lists
        </span> 
      </ListItem>
      <li><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Profile</li>
      <li><FontAwesomeIcon icon={faFolderOpen}></FontAwesomeIcon> More</li>
      <li><Button type="primary" shape='round'>Tweet</Button></li>
    </Wrapper>
  )
}

export default List
