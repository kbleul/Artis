const darkmode_styles = {
    header_style: {
        height: "8vh",
        width: "100%",
        backgroundColor: "black",
        position: "fixed",
        top: "0",
        zIndex: "10",
    },
     h1: {
        color: "white",
        fontWeight: "900",
        fontStyle: "cursive",
        fontSize: "2rem",
        margin: "0",
        marginLeft: "25%",
        paddingTop: "6%",
    },
    showsearchformbtn_style: {
        backgroundColor: "black",
        border: "none",
        display: "block",
        marginLeft: "80%",
        height : "8vh",
    },
    searchinput_style: {
        marginRight: "4%",
        marginLeft: "2%",
        marginTop: "1rem",
        width: "95%",
        height: '1.6rem',
        border: 'none',
        outline: 'none',
        color: "white",
        fontWeight: 'bold',
        fontSize: "1rem",
        borderBottom: '1px solid white',
        backgroundColor: "inherit",
    },
    searchactionbtn_style: {
        backgroundColor: "black",
        border: "none",
    },
    maincontainer_style: {
        background: "linear-gradient(black,grey,black)",
        overflowY: "scroll",
        height : "93vh",
        marginTop: "7vh"
    },
    viewimg_containerstyle: {
        // backgroundColor: "#403939",  //removed
        background: "linear-gradient(black,grey)",//added
        marginBottom: ".5rem", //changed
    },
    searchfill : "white",
    halfpagecontainer_style: {
        backgroundColor: "rgb(55, 55, 55)",
    },
    arttitlecontainer_style: {
        margin: "0",
        borderBottom: "1px solid gray",
    },
    arttitlepara_style: {
        margin: "0",
        fontFamily: "cursive",
        marginLeft: "2%",
        fontWeight: "900",
        textAlign: "center",
        fontSize: "1.3rem",
        color: "aliceblue",
    },
    pricelikebtn_container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "7vh",
        margin: "0 auto",
        borderBottom: "1px solid  rgb(121, 119, 119)",
    },
    pricepara_style: {
        paddingLeft: "5%",
        fontSize: "1rem",//changed
        fontWeight: "900",
        color: "yellow",
        width: "60%",
    },
    likecountpar_style: {
        fontSize: ".8rem",//changed
        fontWeight: "900",
        margin: "0",
        alignSelf: "center",
        color: "aliceblue",
    },
    accountpar_style: {
        marginLeft: "5.5%",
        fontSize: ".9rem",
        textDecoration: "underline",
        color: "aliceblue",
        //margintop removed
    },
    buybtn_style: {
        padding: "0rem 1.6rem",
        backgroundColor: "rgb(253, 218, 197)",
        color: "black",
        fontWeight: "700",
        textTransform: "uppercase",
        border: "none",
        height: "2.1rem",
        marginTop: ".5rem",//changed
        marginRight: "15%",//changed
        opacity: "1",
    },
     commentcancle_containerstyle: {
        color:"white",
        borderBottom: "1px solid rgb(121, 119, 119)",
    },
    commenttextarea_style: {
        width: "90%",
        marginLeft: "5%",
        border: "none",
        borderBottom: "1px solid white",
        height: "3.3rem",
        paddingTop: "5%",
        outline: "none",
        backgroundColor: "inherit",
        color: "white",
    },
    commentcancle_parastyle: {
        paddingLeft: "5%",
        textTransform: "Capitalize",
        color: "white",
    },
    commentcanclebtn_style: {
        backgroundColor: "inherit",
        fontSize: ".8rem",
        border: "none",
        textTransform: "uppercase",
        paddingTop: ".35rem",
        color: "gray",
    },
    commentsubmitbtn_style: {
        backgroundColor: "inherit",
        fontSize: ".8rem",
        border: "none",
        color: "yellow",
        textTransform: "capitalize",
        paddingTop: ".35rem",
    },
    commenttext_style: {
        fontSize: ".8rem",
        paddingLeft: "5%",
        paddingRight: "3%",
        marginTop: ".3rem",
        paddingBottom: ".5rem",
        borderBottom: "1px solid #4f4f4f",
        color:"white",
    },

}

export default darkmode_styles;