import styled from "styled-components";
import { Button } from 'antd';

export const HeaderWrapper = styled.div `
    width: 100%;
    margin: 4rem 0 5rem 0;
    position: relative;
`;

export const ProfileBanner = styled.img `
    height: 15rem;
    width: 100%;
    object-fit: cover;
`;

export const ProfileImg = styled.img `
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    position: absolute;
    object-fit: cover;
    left: 2rem;
    bottom: -4rem; // Fallback if calc does not work
    bottom: calc(0% - 4rem);
    border: 2px solid white;
`;

export const StyledButton = styled(Button) `
    position: absolute;
    right: 1rem;
    bottom: -2.5rem;
    font-weight: bold;
`;