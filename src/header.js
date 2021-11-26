import { useState } from "react";
function Header() {

    const [searchsvg_fill, set_searchsvg_fill] = useState("#fff");
    const [showsearchform, set_showsearchform] = useState(false);
    const [focussearchform, set_focussearchform] = useState("black");


    const header_style = {
        display: "flex",
        height: "7vh",
        width: "100%",
        backgroundColor: "black",
        justifyContent: "space-detween",
        alignItems: "center",
        position: "fixed",
        top: "0",
        zIndex: "10",
    }
    const h1 = {
        color: "white",
        fontWeight: "900",
        fontStyle: "cursive",
        width: "90%",
        paddingLeft: "2%"
    }
    const searchinput_style = {
        marginRight: "4%",
        marginLeft: "2%",
        width: "85%",
        height: '1.6rem',
        border: 'none',
        outline: 'none',
        color: 'white',
        fontWeight: 'bold',
        borderBottom: '1px solid #fff',
        backgroundColor: focussearchform,
    }

    return (
        <header id="header_wrapper" style={header_style}>

            {showsearchform ? <input onFocus={() => { set_focussearchform('#20201d') }} onBlur={() => { set_focussearchform('black') }}
                style={searchinput_style} type="search" /> : <h1 id="logo" style={h1}>ARTis</h1>}

            <svg onClick={() => { if (showsearchform) { set_showsearchform(false) } else { set_showsearchform(true) } }}
                onMouseOverCapture={() => { set_searchsvg_fill("red") }} onMouseOut={() => { set_searchsvg_fill("#fff") }}

                xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 32 32">
                <path d="M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 
        9 9a9.01 9.01 0 0 1-9-9z" fill={searchsvg_fill} /></svg>

        </header>)
}

export default Header;