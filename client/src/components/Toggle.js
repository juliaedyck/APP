import React from 'react'
import styled from 'styled-components';
import { Hamburger } from "./NavElement";
import { FaBars } from 'react-icons/fa';



const Toggle = ({handleNavToggle}) => {
    return (
        <StyledToggle onClick={handleNavToggle}>
            <Hamburger/>
            <FaBars />
        </StyledToggle>
    )
}

const StyledToggle = styled.button`
    position: fixed;
    top: 5%;
    right: 4%;
    color: white;
    background: #eee;
    padding: .75rem;
    display: flex;
    place-items: center;
    font-size: 2rem;
    cursor: pointer;
`;

export default Toggle