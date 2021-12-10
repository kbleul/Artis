const styles = {
    header_style: {
        display: "flex",
        height: "7vh",
        width: "100%",
        backgroundColor: "black",
        justifyContent: "space-detween",
        alignItems: "center",
        position: "fixed",
        top: "0",
        zIndex: "10",
    },

    h1: {
        color: "white",
        fontWeight: "900",
        fontStyle: "cursive",
        width: "90%",
        paddingLeft: "2%"
    },
    searchform_style: { width: "90%", },
    searchinput_style: {
        marginRight: "4%",
        marginLeft: "2%",
        width: "95%",
        height: '1.6rem',
        border: 'none',
        outline: 'none',
        color: 'white',
        fontWeight: 'bold',
        borderBottom: '1px solid #fff',
        backgroundColor: "black",
    },
    showsearchformbtn_style: {
        backgroundColor: "black",
        border: "none",
        display: "block",
    },
    searchactionbtn_style: {
        backgroundColor: "black",
        border: "none",
    },
    /*-----------------------------------------*/

    search_suggestioncontainer_style: {
        backgroundColor: "gray",
        position: "fixed",
        top: "7vh",
        zIndex: 10,
        width: "80%",
        cursor: "pointer",
        left: "5vw",
        paddingLeft: "1rem",
        fontSize: ".8rem",
    },
    searchsuggestionlist_style: {
        listStyle: "none",
        paddingTop: ".4rem",
        paddingBottom: ".2rem",
        borderBottom: "1px solid #797474",
    },
    /*-----------------------------------------*/

    halfpagecontainer_style: {
        height: "48vh",
    },

    viewimg_containerstyle: {
        // backgroundColor: "#403939",  //removed
        background: "linear-gradient(black,grey)",//added
        marginBottom: ".5rem", //changed
    },

    viewimg_imgstyle: {
        width: "80%",  //changed
        height: "65vh",
        marginTop: "9vh", //changed
        marginBottom: ".8rem", //adddded
        marginLeft: "10%", //changed
    },
    maincontainer_style: {
        backgroundColor: "rgb(61, 56, 56)",
        overflowY: "scroll",
        marginTop: "7vh"
    },
    img_textover: {
        width: "98%",
        padding: "0",
        margin: "0 auto",
        position: "relative"
    },
    frontimg_style: {
        width: "100%",
        height: "30vh"
    },
    figcaption_style_visible: {
        position: "absolute",
        top: "0",
        height: "100%",
        color: "white",
        fontWeight: "700",
        fontFamily: "Arial",
        fontSize: ".8rem",
        width: "100%",
    },
    figcaption_para: {
        width: "85%",
        marginTop: "49%",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        paddingLeft: "2%",
    },
    arttitlecontainer_style: {
        margin: "0",
        borderBottom: "1px solid",
    },
    arttitlepara_style: {
        margin: "0",
        fontFamily: "cursive",
        marginLeft: "2%",
        fontWeight: "900",
        textAlign: "center",
        fontSize: "1.3rem",

    },
    //added
    bottombox_maincontainer: {
      display : "flex",
      justifyContent: "space-between",

    },
    pricelikebtn_container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "7vh",
        margin: "0 auto",
        borderBottom: "1px solid #e1dbdb",

    },
    pricepara_style: {
        paddingLeft: "5%",
        fontSize: "1rem",//changed
        fontWeight: "900",
        color: "purple",
        width: "60%",

    },
    likebtn_container: {
        display: "flex",
        flexDirection: "column",
        width: "20%",
        margin: "0 auto",
    },
    likebutton_style: {
        backgroundColor: "rgba(0,0,0,0)",
        marginRight: "10%",
        border: "none",
        paddingLeft: "10%",
    },
    canclecomment_style: {
        backgroundColor: "rgba(0,0,0,0)",
        border: "none",
        paddingTop: ".3rem",
        marginRight: "4%",
    },
    likecountpar_style: {
        fontSize: ".8rem",//changed
        fontWeight: "900",
        margin: "0",
        alignSelf: "center",
    },
    buybtn_style: {
        padding: "0rem 1.6rem",
        backgroundColor: "#ff6000",
        color: "black",
        fontWeight: "700",
        textTransform: "uppercase",
        border: "none",
        height: "2.1rem",
        marginTop: ".5rem",//changed
        marginRight: "15%",//changed
        opacity: "1",

    },
    accountbuy_container_style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",//adedd
    },
    accountpar_style: {
        marginLeft: "5.5%",
        fontSize: ".9rem",
        textDecoration: "underline",
        //margintop removed
    },
    CommentsSection : {
        height : "35vh",
        overflowY: "scroll",
    },
    commentbtns_container: {
        borderBottom: "1px solid grey",
        borderTop: "1px solid",
        marginTop: "1%",
        padding: "2% 3%",
        display: "flex",
    },
    commentcancle_containerstyle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #e1dbdb",

    },
    commentsbtn_style: {
        backgroundColor: "rgba(0,0,0,0)",
        border: "none",
        textTransform: "Capitalize",
        fontSize: "1rem",
        width: "50%",
        paddingLeft: "2.5%",
        textAlign: "left",
    },
    commentdropdownbtn_style: {
        backgroundColor: "rgba(0,0,0,0)",
        border: "none",
        width: "50%",
        paddingLeft: "37%",
    },
    commentcancle_parastyle: {
        paddingLeft: "5%",
        textTransform: "Capitalize",
    },
    commentform_container_style: {
        borderBottom: "1px solid #d7d1d1",
        paddingBottom: "1.7rem",
    },
    commnetbtns_container_style: {
        float: "right",
        marginRight: "5%",
    },
    commenttextarea_style: {
        width: "90%",
        marginLeft: "5%",
        border: "none",
        borderBottom: "1px solid",
        height: "3.3rem",
        paddingTop: "5%",
        outline: "none",
    },
    commentcanclebtn_style: {
        backgroundColor: "inherit",
        fontSize: ".8rem",
        border: "none",
        textTransform: "uppercase",
        paddingTop: ".35rem",
    },
    commentsubmitbtn_style: {
        backgroundColor: "inherit",
        fontSize: ".8rem",
        border: "none",
        color: "green",
        textTransform: "capitalize",
        paddingTop: ".35rem",
    },
    img_suggestioncontainer_style: {
        height : "40vh",
        overflowY: "scroll",
    },
    commentaccount_style: {
        fontSize: ".7rem",
        color: "gray",
        paddingLeft: "2%",
        paddingTop: "1%",
    },
    commenttext_style: {
        fontSize: ".8rem",
        paddingLeft: "5%",
        paddingRight: "3%",
        marginTop: ".3rem",
        paddingBottom: ".5rem",
        borderBottom: "1px solid #d7d1d1",
    },


}

export default styles