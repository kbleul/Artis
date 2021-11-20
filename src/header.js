import { useState } from "react";
function Header() {

    const [searchsvg_fill, set_searchsvg_fill] = useState("#fff")
    const header_style = {
        display: "flex",
        height: "7vh",
        width: "100%",
        backgroundColor : "black",
        justifyContent : "space-detween",
        alignItems: "center",
        position: "fixed",
        top: "0",
        zIndex: "10",
    }

    const h1 = {
        color: "white",
        fontWeight : "900",
        fontStyle : "cursive",
        width : "90%",
        paddingLeft : "2%"
    }

    return(
    <header id="header_wrapper" style={header_style}>
        <h1 id="logo" style={h1}>ARTis</h1>
        <svg onMouseOverCapture={() => {set_searchsvg_fill("red") }} onMouseOut={() => {set_searchsvg_fill("#fff")}  }
        xmlns="http://www.w3.org/2000/svg"  width="1.4em" height="1.4em" viewBox="0 0 32 32">
        <path d="M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 
        9 9a9.01 9.01 0 0 1-9-9z" fill={searchsvg_fill} /></svg>
    </header>)
}

export default Header;