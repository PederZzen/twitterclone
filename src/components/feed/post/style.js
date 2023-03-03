import styled from "styled-components";

export const PostWrapper = styled.div `
    display: flex;
    position: relative;
    gap: 1rem;
    margin: 1.5rem 0;
    padding: 0 2rem;
    ::after {
        content: '';
        position: absolute;
        height: 1px;
        width: 100%;
        background-color: rgb(219, 219, 219);
        bottom: -0.5rem;
        left: 0;
    }
`;

export const PostProfileImg = styled.img `
    height: 3rem;
    width: 3rem;
    object-fit: cover;
    border-radius: 50%;
`;
