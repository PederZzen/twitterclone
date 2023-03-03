import React from 'react';
import { HeaderWrapper, ProfileImg, ProfileBanner, StyledButton } from './styles';
import { User } from '../userDetails';

const Header = () => {

    const justForLols = () => {
        alert('Did you know that if you poke an Ostrich in the face, it will most likely bite off your finger')
    }

    return (
        <HeaderWrapper>
            <ProfileBanner src={User.profileBanner} alt='Profile banner'></ProfileBanner>
            <ProfileImg onClick={justForLols} src={User.profileImg} alt="Profile image"></ProfileImg>
            <StyledButton shape='round'>Edit profile</StyledButton>
        </HeaderWrapper>
    )

}

export default Header;