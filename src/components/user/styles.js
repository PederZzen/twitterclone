import styled from "styled-components";

export const UserWrapper = styled.div `
    position: relative;
    padding: 2rem;
`;

export const ProfileImg = styled.img `
    width: 10rem;
    height: 10rem; 
    border: 2px solid white;
    border-radius: 50%;
    top: -5rem;
    object-fit: cover;
    z-index: 2;
    position: absolute;
    left: 2rem;
    top: -9.5rem;
`;

export const ProfileBanner = styled.img `
    width: 800px;
    height: 20rem;
    object-fit: cover;
    z-index: 1;
    margin-bottom: 3rem;
`;

export const ProfileUl = styled.ul `
    display: flex;
    gap: 2rem;
    padding: .5rem 0;
`;

export const EditProfile = styled.button `
    border: 2px solid #1C96E9;
    border-radius: 2rem;
    padding: .5rem 1rem;
    background-color: transparent;
    font-weight: bold;
    cursor: pointer;
    position: absolute;
    right: 1rem;
    top: -2rem;
`;