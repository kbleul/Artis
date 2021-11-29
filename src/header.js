import { useState } from "react";
function Header() {

    const [searchsvg_fill, set_searchsvg_fill] = useState("#fff");
    const [showsearchform, set_showsearchform] = useState(false);
    const [focussearchform, set_focussearchform] = useState("black");
    const [searchinput , set_searchinput ] = useState("");


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
    const style = {
        display : 'block',
    }

    function Searchinput() {
        return (<><form onSubmit={handleSearch}>
            <input autoFocus={true} key="search" style={searchinput_style} type="text" list="suggestions" value={searchinput} onChange={(e) => set_searchinput( e.target.value ) }/>
            </form>
            <datalist style={style} id="suggestions">
                <option id="img1" value="The Duel" />
                <option key={"Familer"} value="Familer Life" />
                <option key={"Famile"} value="City Life Algarve,Portugal 1977" />
                <option key={"Famil"}  value="Fox Connect In" />
                <option key={"Fami"} value="The Particle Da" />
                <option key={"Fam"} value="Waves of Hope" />
            </datalist>
        </>);
    }

  const handleSearch = (e) => {
      e.preventDefault();
      console.log(`submmited ${searchinput}`)
    if (showsearchform) {  set_showsearchform(false) } else { set_showsearchform(true) }
    set_searchinput("");
  }
console.log("rerendered")
    return (
        <header id="header_wrapper" style={header_style}>

            {showsearchform ? <Searchinput />
                : <h1 id="logo" style={h1}>ARTis</h1>}
        <button type="submit" onClick={handleSearch}>
            <svg  onMouseOver={() => { set_searchsvg_fill("red") }} onMouseOut={() => { set_searchsvg_fill("#fff") }}

                xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 32 32">
                <path d="M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 
        9 9a9.01 9.01 0 0 1-9-9z" fill={searchsvg_fill} /></svg>
        </button>

        </header>)
}

export default Header;