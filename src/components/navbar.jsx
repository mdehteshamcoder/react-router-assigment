import React from "react"
import styled from"styled-components"
import {Link} from "react-router-dom"

const NavbarWrapper = styled.div`
display: flex;
justify-content: space-evenly;
background: red;
color: black;
padding: 15px;

`;

const StyledLink = styled(Link)`
color: black;
font-size:600;
text-decoration: none;



`

const Navbar=()=>{
    return(
        <NavbarWrapper>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="./products">Products</StyledLink>
        </NavbarWrapper>
    )
}
export default Navbar;