import { useState,  memo  } from "react";

import img1 from "./ART/1.jpg";
import img2 from "./ART/2.jpg";
import img3 from "./ART/3.jpg";
import img4 from "./ART/4.jpg";
import img5 from "./ART/5.jpg";
import img6 from "./ART/6.jpg";

function MainContain() {

    const [imgone_boxstatus, set_imgone_boxstatus] = useState({ display: "none" });
    const [imgtwo_boxstatus, set_imgtwo_boxstatus] = useState({ display: "none" });
    const [imgthree_boxstatus, set_imgthree_boxstatus] = useState({ display: "none" });
    const [imgfour_boxstatus, set_imgfour_boxstatus] = useState({ display: "none" });
    const [imgfive_boxstatus, set_imgfive_boxstatus] = useState({ display: "none" });
    const [imgsix_boxstatus, set_imgsix_boxstatus] = useState({ display: "none" });


    const [imgone_likebtn_status, set_imgone_likebtn_status] = useState("white");
    const [imgtwo_likebtn_status, set_imgtwo_likebtn_status] = useState("white");
    const [imgthree_likebtn_status, set_imgthree_likebtn_status] = useState("white");
    const [imgfour_likebtn_status, set_imgfour_likebtn_status] = useState("white");
    const [imgfive_likebtn_status, set_imgfive_likebtn_status] = useState("white");
    const [imgsix_likebtn_status, set_imgsix_likebtn_status] = useState("white");




    const maincontainer_style = {
        backgroundColor: "rgb(61, 56, 56)",
        overflowY: "scroll",
        paddingTop: ".3vh",
        marginTop: "2.8rem",
    }
    const frontimg_style = {
        width: "100%",
        height: "30vh"
    }

    const img_textover = {
        width: "98%",
        padding: "0",
        margin: "0 auto",
        position: "relative"
    }

    const figcaption_style_visible = {
        position: "absolute",
        top: "0",
        height: "100%",
        color: "white",
        fontWeight: "700",
        fontFamily: "Arial",
        fontSize: ".8rem",
        width: "100%",
    }


    const figcaption_para = {
        width: "75%",
        marginTop: "49%",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    }

    const figcation_button = {
        backgroundColor: "rgba(0,0,0,0)",
        marginRight: "15%",
        border: "none"
    }

    const buttoncontainer_style = {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "45%",
        width: "25%",

    }

    const checkLikeStatus = (likebtn_prop, set_likebtn_prop) => {
        if (likebtn_prop === "white") { return set_likebtn_prop("red") }
        set_likebtn_prop("white");
    }
  console.log("rendered")
    return (
        <section id="main_container" style={maincontainer_style} >
        <figure className="img_textover" style={img_textover}>
        <img style={frontimg_style} src={img1} alt='' />
        <figcaption style={figcaption_style_visible} className="figcaption"
            onMouseOver={() => {
                set_imgone_boxstatus({
                    display: "flex",
                    justifyContent: "space-between",
                    background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                })
            }}
            onMouseOut={() => { set_imgone_boxstatus({ display: "none" }) }}
        >

            <section style={imgone_boxstatus}>
                <p style={figcaption_para}>The Duel -By Loreal Milka</p>
                <div id="button_container" style={buttoncontainer_style}>
                    <button style={figcation_button} onClick={() => { checkLikeStatus(imgone_likebtn_status, set_imgone_likebtn_status) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26"  >
                            <path id="0_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgone_likebtn_status} /></svg></button>

                    <button style={figcation_button} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                            <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill={"white"} /></svg>
                    </button>
                </div>
            </section>

        </figcaption>
        </figure>

            <figure className="img_textover" style={img_textover}>
            <img style={frontimg_style} src={img2} alt='' />
            <figcaption style={figcaption_style_visible} className="figcaption"
                onMouseOver={() => {
                    set_imgtwo_boxstatus({
                        display: "flex",
                        justifyContent: "space-between",
                        background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                    })
                }}
                onMouseOut={() => { set_imgtwo_boxstatus({ display: "none" }) }}
            >
                <section style={imgtwo_boxstatus} >

                    <p style={figcaption_para}>Familer Life - Eva Neewman</p>
                    <div id="button_container" style={buttoncontainer_style}>
                        <button style={figcation_button}
                            onClick={() => { checkLikeStatus(imgtwo_likebtn_status, set_imgtwo_likebtn_status) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
                                <path id="like_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgtwo_likebtn_status} /></svg></button>

                        <button style={figcation_button} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                                <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill="white" /></svg>
                        </button>
                    </div>
                </section>
            </figcaption>
        </figure>

        <figure className="img_textover" style={img_textover}>
            <img style={frontimg_style} src={img3} alt='' />
            <figcaption style={figcaption_style_visible} className="figcaption"
                onMouseOver={() => {
                    set_imgthree_boxstatus({
                        display: "flex",
                        justifyContent: "space-between",
                        background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                    })
                }}
                onMouseOut={() => { set_imgthree_boxstatus({ display: "none" }) }}
            >
                <section style={imgthree_boxstatus} className="cont">

                    <p style={figcaption_para}>City Life Algarve,Portugal 1977 - Nikoal Mulion</p>
                    <div id="button_container" style={buttoncontainer_style}>
                        <button style={figcation_button}
                            onClick={() => { checkLikeStatus(imgthree_likebtn_status, set_imgthree_likebtn_status) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
                                <path id="like_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgthree_likebtn_status} /></svg></button>

                        <button style={figcation_button} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                                <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill="white" /></svg>
                        </button>
                    </div>
                </section>
            </figcaption>
        </figure>

        <figure className="img_textover" style={img_textover}>
            <img style={frontimg_style} src={img4} alt='' />
            <figcaption style={figcaption_style_visible} className="figcaption"
                onMouseOver={() => {
                    set_imgfour_boxstatus({
                        display: "flex",
                        justifyContent: "space-between",
                        background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                    })
                }}
                onMouseOut={() => { set_imgfour_boxstatus({ display: "none" }) }}
            >
                <section style={imgfour_boxstatus} className="cont">

                    <p style={figcaption_para}>Fox Connect In - Bumia Lemia</p>
                    <div id="button_container" style={buttoncontainer_style}>
                        <button style={figcation_button}
                            onClick={() => { checkLikeStatus(imgfour_likebtn_status, set_imgfour_likebtn_status) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
                                <path id="like_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgfour_likebtn_status} /></svg></button>

                        <button style={figcation_button} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                                <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill="white" /></svg>
                        </button>
                    </div>
                </section>
            </figcaption>
        </figure>

        <figure className="img_textover" style={img_textover}>
            <img style={frontimg_style} src={img5} alt='' />
            <figcaption style={figcaption_style_visible} className="figcaption"
                onMouseOver={() => {
                    set_imgfive_boxstatus({
                        display: "flex",
                        justifyContent: "space-between",
                        background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                    })
                }}
                onMouseOut={() => { set_imgfive_boxstatus({ display: "none" }) }}
            >
                <section style={imgfive_boxstatus} className="cont">

                    <p style={figcaption_para}>The Particle Dao - Mitsu Aminkio</p>
                    <div id="button_container" style={buttoncontainer_style}>
                        <button style={figcation_button}
                            onClick={() => { checkLikeStatus(imgfive_likebtn_status, set_imgfive_likebtn_status) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
                                <path id="like_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgfive_likebtn_status} /></svg></button>

                        <button style={figcation_button} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                                <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill="white" /></svg>
                        </button>
                    </div>
                </section>
            </figcaption>
        </figure>

        <figure className="img_textover" style={img_textover}>
        <img style={frontimg_style} src={img6} alt='' />
        <figcaption style={figcaption_style_visible} className="figcaption"
            onMouseOver={() => {
                set_imgsix_boxstatus({
                    display: "flex",
                    justifyContent: "space-between",
                    background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                })
            }}
            onMouseOut={() => { set_imgsix_boxstatus({ display: "none" }) }}
        >
            <section style={imgsix_boxstatus} >

                <p style={figcaption_para}>Waves of Hope - Humer Zimmermam</p>
                <div id="button_container" style={buttoncontainer_style}>
                    <button style={figcation_button}
                        onClick={() => { checkLikeStatus(imgsix_likebtn_status, set_imgsix_likebtn_status) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
                            <path id="like_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgsix_likebtn_status} /></svg></button>

                    <button style={figcation_button} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                            <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill="white" /></svg>
                    </button>
                </div>
            </section>
        </figcaption>
    </figure>


        <figure className="img_textover" style={img_textover}>
            <img style={frontimg_style} src={img1} alt='' />
            <figcaption style={figcaption_style_visible} className="figcaption"
                onMouseOver={() => {
                    set_imgone_boxstatus({
                        display: "flex",
                        justifyContent: "space-between",
                        background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                    })
                }}
                onMouseOut={() => { set_imgone_boxstatus({ display: "none" }) }}
            >

                <section style={imgone_boxstatus}>
                    <p style={figcaption_para}>The Duel -By Loreal Milka</p>
                    <div id="button_container" style={buttoncontainer_style}>
                        <button style={figcation_button} onClick={() => { checkLikeStatus(imgone_likebtn_status, set_imgone_likebtn_status) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26"  >
                                <path id="0_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgone_likebtn_status} /></svg></button>

                        <button style={figcation_button} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                                <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill={"white"} /></svg>
                        </button>
                    </div>
                </section>

            </figcaption>
        </figure>

        <figure className="img_textover" style={img_textover}>
            <img style={frontimg_style} src={img2} alt='' />
            <figcaption style={figcaption_style_visible} className="figcaption"
                onMouseOver={() => {
                    set_imgtwo_boxstatus({
                        display: "flex",
                        justifyContent: "space-between",
                        background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                    })
                }}
                onMouseOut={() => { set_imgtwo_boxstatus({ display: "none" }) }}
            >
                <section style={imgtwo_boxstatus} >

                    <p style={figcaption_para}>Familer Life - Eva Neewman</p>
                    <div id="button_container" style={buttoncontainer_style}>
                        <button style={figcation_button}
                            onClick={() => { checkLikeStatus(imgtwo_likebtn_status, set_imgtwo_likebtn_status) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
                                <path id="like_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgtwo_likebtn_status} /></svg></button>

                        <button style={figcation_button} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                                <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill="white" /></svg>
                        </button>
                    </div>
                </section>
            </figcaption>
        </figure>

        <figure className="img_textover" style={img_textover}>
            <img style={frontimg_style} src={img3} alt='' />
            <figcaption style={figcaption_style_visible} className="figcaption"
                onMouseOver={() => {
                    set_imgthree_boxstatus({
                        display: "flex",
                        justifyContent: "space-between",
                        background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                    })
                }}
                onMouseOut={() => { set_imgthree_boxstatus({ display: "none" }) }}
            >
                <section style={imgthree_boxstatus} className="cont">

                    <p style={figcaption_para}>City Life Algarve,Portugal 1977 - Nikoal Mulion</p>
                    <div id="button_container" style={buttoncontainer_style}>
                        <button style={figcation_button}
                            onClick={() => { checkLikeStatus(imgthree_likebtn_status, set_imgthree_likebtn_status) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
                                <path id="like_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgthree_likebtn_status} /></svg></button>

                        <button style={figcation_button} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                                <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill="white" /></svg>
                        </button>
                    </div>
                </section>
            </figcaption>
        </figure>

        <figure className="img_textover" style={img_textover}>
            <img style={frontimg_style} src={img4} alt='' />
            <figcaption style={figcaption_style_visible} className="figcaption"
                onMouseOver={() => {
                    set_imgfour_boxstatus({
                        display: "flex",
                        justifyContent: "space-between",
                        background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                    })
                }}
                onMouseOut={() => { set_imgfour_boxstatus({ display: "none" }) }}
            >
                <section style={imgfour_boxstatus} className="cont">

                    <p style={figcaption_para}>Fox Connect In - Bumia Lemia</p>
                    <div id="button_container" style={buttoncontainer_style}>
                        <button style={figcation_button}
                            onClick={() => { checkLikeStatus(imgfour_likebtn_status, set_imgfour_likebtn_status) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
                                <path id="like_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgfour_likebtn_status} /></svg></button>

                        <button style={figcation_button} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                                <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill="white" /></svg>
                        </button>
                    </div>
                </section>
            </figcaption>
        </figure>

        <figure className="img_textover" style={img_textover}>
            <img style={frontimg_style} src={img5} alt='' />
            <figcaption style={figcaption_style_visible} className="figcaption"
                onMouseOver={() => {
                    set_imgfive_boxstatus({
                        display: "flex",
                        justifyContent: "space-between",
                        background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                    })
                }}
                onMouseOut={() => { set_imgfive_boxstatus({ display: "none" }) }}
            >
                <section style={imgfive_boxstatus} className="cont">

                    <p style={figcaption_para}>The Particle Dao - Mitsu Aminkio</p>
                    <div id="button_container" style={buttoncontainer_style}>
                        <button style={figcation_button}
                            onClick={() => { checkLikeStatus(imgfive_likebtn_status, set_imgfive_likebtn_status) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
                                <path id="like_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgfive_likebtn_status} /></svg></button>

                        <button style={figcation_button} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                                <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill="white" /></svg>
                        </button>
                    </div>
                </section>
            </figcaption>
        </figure>

        <figure className="img_textover" style={img_textover}>
        <img style={frontimg_style} src={img6} alt='' />
        <figcaption style={figcaption_style_visible} className="figcaption"
            onMouseOver={() => {
                set_imgsix_boxstatus({
                    display: "flex",
                    justifyContent: "space-between",
                    background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                })
            }}
            onMouseOut={() => { set_imgsix_boxstatus({ display: "none" }) }}
        >
            <section style={imgsix_boxstatus} >

                <p style={figcaption_para}>Waves of Hope - Humer Zimmermam</p>
                <div id="button_container" style={buttoncontainer_style}>
                    <button style={figcation_button}
                        onClick={() => { checkLikeStatus(imgsix_likebtn_status, set_imgsix_likebtn_status) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
                            <path id="like_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgsix_likebtn_status} /></svg></button>

                    <button style={figcation_button} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                            <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill="white" /></svg>
                    </button>
                </div>
            </section>
        </figcaption>
    </figure>

        <figure className="img_textover" style={img_textover}>
            <img style={frontimg_style} src={img1} alt='' />
            <figcaption style={figcaption_style_visible} className="figcaption"
                onMouseOver={() => {
                    set_imgone_boxstatus({
                        display: "flex",
                        justifyContent: "space-between",
                        background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                    })
                }}
                onMouseOut={() => { set_imgone_boxstatus({ display: "none" }) }}
            >

                <section style={imgone_boxstatus}>
                    <p style={figcaption_para}>The Duel -By Loreal Milka</p>
                    <div id="button_container" style={buttoncontainer_style}>
                        <button style={figcation_button} onClick={() => { checkLikeStatus(imgone_likebtn_status, set_imgone_likebtn_status) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26"  >
                                <path id="0_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgone_likebtn_status} /></svg></button>

                        <button style={figcation_button} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                                <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill={"white"} /></svg>
                        </button>
                    </div>
                </section>

            </figcaption>
        </figure>

        <figure className="img_textover" style={img_textover}>
            <img style={frontimg_style} src={img2} alt='' />
            <figcaption style={figcaption_style_visible} className="figcaption"
                onMouseOver={() => {
                    set_imgtwo_boxstatus({
                        display: "flex",
                        justifyContent: "space-between",
                        background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                    })
                }}
                onMouseOut={() => { set_imgtwo_boxstatus({ display: "none" }) }}
            >
                <section style={imgtwo_boxstatus} >

                    <p style={figcaption_para}>Familer Life - Eva Neewman</p>
                    <div id="button_container" style={buttoncontainer_style}>
                        <button style={figcation_button}
                            onClick={() => { checkLikeStatus(imgtwo_likebtn_status, set_imgtwo_likebtn_status) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
                                <path id="like_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgtwo_likebtn_status} /></svg></button>

                        <button style={figcation_button} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                                <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill="white" /></svg>
                        </button>
                    </div>
                </section>
            </figcaption>
        </figure>

        <figure className="img_textover" style={img_textover}>
            <img style={frontimg_style} src={img3} alt='' />
            <figcaption style={figcaption_style_visible} className="figcaption"
                onMouseOver={() => {
                    set_imgthree_boxstatus({
                        display: "flex",
                        justifyContent: "space-between",
                        background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                    })
                }}
                onMouseOut={() => { set_imgthree_boxstatus({ display: "none" }) }}
            >
                <section style={imgthree_boxstatus} className="cont">

                    <p style={figcaption_para}>City Life Algarve,Portugal 1977 - Nikoal Mulion</p>
                    <div id="button_container" style={buttoncontainer_style}>
                        <button style={figcation_button}
                            onClick={() => { checkLikeStatus(imgthree_likebtn_status, set_imgthree_likebtn_status) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
                                <path id="like_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgthree_likebtn_status} /></svg></button>

                        <button style={figcation_button} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                                <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill="white" /></svg>
                        </button>
                    </div>
                </section>
            </figcaption>
        </figure>

        <figure className="img_textover" style={img_textover}>
            <img style={frontimg_style} src={img4} alt='' />
            <figcaption style={figcaption_style_visible} className="figcaption"
                onMouseOver={() => {
                    set_imgfour_boxstatus({
                        display: "flex",
                        justifyContent: "space-between",
                        background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                    })
                }}
                onMouseOut={() => { set_imgfour_boxstatus({ display: "none" }) }}
            >
                <section style={imgfour_boxstatus} className="cont">

                    <p style={figcaption_para}>Fox Connect In - Bumia Lemia</p>
                    <div id="button_container" style={buttoncontainer_style}>
                        <button style={figcation_button}
                            onClick={() => { checkLikeStatus(imgfour_likebtn_status, set_imgfour_likebtn_status) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
                                <path id="like_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgfour_likebtn_status} /></svg></button>

                        <button style={figcation_button} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                                <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill="white" /></svg>
                        </button>
                    </div>
                </section>
            </figcaption>
        </figure>

        <figure className="img_textover" style={img_textover}>
            <img style={frontimg_style} src={img5} alt='' />
            <figcaption style={figcaption_style_visible} className="figcaption"
                onMouseOver={() => {
                    set_imgfive_boxstatus({
                        display: "flex",
                        justifyContent: "space-between",
                        background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                    })
                }}
                onMouseOut={() => { set_imgfive_boxstatus({ display: "none" }) }}
            >
                <section style={imgfive_boxstatus} className="cont">

                    <p style={figcaption_para}>The Particle Dao - Mitsu Aminkio</p>
                    <div id="button_container" style={buttoncontainer_style}>
                        <button style={figcation_button}
                            onClick={() => { checkLikeStatus(imgfive_likebtn_status, set_imgfive_likebtn_status) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
                                <path id="like_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgfive_likebtn_status} /></svg></button>

                        <button style={figcation_button} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                                <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill="white" /></svg>
                        </button>
                    </div>
                </section>
            </figcaption>
        </figure>

        <figure className="img_textover" style={img_textover}>
        <img style={frontimg_style} src={img6} alt='' />
        <figcaption style={figcaption_style_visible} className="figcaption"
            onMouseOver={() => {
                set_imgsix_boxstatus({
                    display: "flex",
                    justifyContent: "space-between",
                    background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                })
            }}
            onMouseOut={() => { set_imgsix_boxstatus({ display: "none" }) }}
        >
            <section style={imgsix_boxstatus} >

                <p style={figcaption_para}>Waves of Hope - Humer Zimmermam</p>
                <div id="button_container" style={buttoncontainer_style}>
                    <button style={figcation_button}
                        onClick={() => { checkLikeStatus(imgsix_likebtn_status, set_imgsix_likebtn_status) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
                            <path id="like_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgsix_likebtn_status} /></svg></button>

                    <button style={figcation_button} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                            <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill="white" /></svg>
                    </button>
                </div>
            </section>
        </figcaption>
    </figure>

        <figure className="img_textover" style={img_textover}>
            <img style={frontimg_style} src={img1} alt='' />
            <figcaption style={figcaption_style_visible} className="figcaption"
                onMouseOver={() => {
                    set_imgone_boxstatus({
                        display: "flex",
                        justifyContent: "space-between",
                        background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                    })
                }}
                onMouseOut={() => { set_imgone_boxstatus({ display: "none" }) }}
            >

                <section style={imgone_boxstatus}>
                    <p style={figcaption_para}>The Duel -By Loreal Milka</p>
                    <div id="button_container" style={buttoncontainer_style}>
                        <button style={figcation_button} onClick={() => { checkLikeStatus(imgone_likebtn_status, set_imgone_likebtn_status) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26"  >
                                <path id="0_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgone_likebtn_status} /></svg></button>

                        <button style={figcation_button} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                                <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill={"white"} /></svg>
                        </button>
                    </div>
                </section>

            </figcaption>
        </figure>

        <figure className="img_textover" style={img_textover}>
            <img style={frontimg_style} src={img2} alt='' />
            <figcaption style={figcaption_style_visible} className="figcaption"
                onMouseOver={() => {
                    set_imgtwo_boxstatus({
                        display: "flex",
                        justifyContent: "space-between",
                        background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                    })
                }}
                onMouseOut={() => { set_imgtwo_boxstatus({ display: "none" }) }}
            >
                <section style={imgtwo_boxstatus} >

                    <p style={figcaption_para}>Familer Life - Eva Neewman</p>
                    <div id="button_container" style={buttoncontainer_style}>
                        <button style={figcation_button}
                            onClick={() => { checkLikeStatus(imgtwo_likebtn_status, set_imgtwo_likebtn_status) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
                                <path id="like_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgtwo_likebtn_status} /></svg></button>

                        <button style={figcation_button} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                                <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill="white" /></svg>
                        </button>
                    </div>
                </section>
            </figcaption>
        </figure>

        <figure className="img_textover" style={img_textover}>
            <img style={frontimg_style} src={img3} alt='' />
            <figcaption style={figcaption_style_visible} className="figcaption"
                onMouseOver={() => {
                    set_imgthree_boxstatus({
                        display: "flex",
                        justifyContent: "space-between",
                        background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                    })
                }}
                onMouseOut={() => { set_imgthree_boxstatus({ display: "none" }) }}
            >
                <section style={imgthree_boxstatus} className="cont">

                    <p style={figcaption_para}>City Life Algarve,Portugal 1977 - Nikoal Mulion</p>
                    <div id="button_container" style={buttoncontainer_style}>
                        <button style={figcation_button}
                            onClick={() => { checkLikeStatus(imgthree_likebtn_status, set_imgthree_likebtn_status) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
                                <path id="like_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgthree_likebtn_status} /></svg></button>

                        <button style={figcation_button} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                                <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill="white" /></svg>
                        </button>
                    </div>
                </section>
            </figcaption>
        </figure>

        <figure className="img_textover" style={img_textover}>
            <img style={frontimg_style} src={img4} alt='' />
            <figcaption style={figcaption_style_visible} className="figcaption"
                onMouseOver={() => {
                    set_imgfour_boxstatus({
                        display: "flex",
                        justifyContent: "space-between",
                        background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                    })
                }}
                onMouseOut={() => { set_imgfour_boxstatus({ display: "none" }) }}
            >
                <section style={imgfour_boxstatus} className="cont">

                    <p style={figcaption_para}>Fox Connect In - Bumia Lemia</p>
                    <div id="button_container" style={buttoncontainer_style}>
                        <button style={figcation_button}
                            onClick={() => { checkLikeStatus(imgfour_likebtn_status, set_imgfour_likebtn_status) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
                                <path id="like_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgfour_likebtn_status} /></svg></button>

                        <button style={figcation_button} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                                <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill="white" /></svg>
                        </button>
                    </div>
                </section>
            </figcaption>
        </figure>

        <figure className="img_textover" style={img_textover}>
            <img style={frontimg_style} src={img5} alt='' />
            <figcaption style={figcaption_style_visible} className="figcaption"
                onMouseOver={() => {
                    set_imgfive_boxstatus({
                        display: "flex",
                        justifyContent: "space-between",
                        background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                    })
                }}
                onMouseOut={() => { set_imgfive_boxstatus({ display: "none" }) }}
            >
                <section style={imgfive_boxstatus} className="cont">

                    <p style={figcaption_para}>The Particle Dao - Mitsu Aminkio</p>
                    <div id="button_container" style={buttoncontainer_style}>
                        <button style={figcation_button}
                            onClick={() => { checkLikeStatus(imgfive_likebtn_status, set_imgfive_likebtn_status) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
                                <path id="like_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgfive_likebtn_status} /></svg></button>

                        <button style={figcation_button} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                                <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill="white" /></svg>
                        </button>
                    </div>
                </section>
            </figcaption>
        </figure>

        <figure className="img_textover" style={img_textover}>
        <img style={frontimg_style} src={img6} alt='' />
        <figcaption style={figcaption_style_visible} className="figcaption"
            onMouseOver={() => {
                set_imgsix_boxstatus({
                    display: "flex",
                    justifyContent: "space-between",
                    background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                })
            }}
            onMouseOut={() => { set_imgsix_boxstatus({ display: "none" }) }}
        >
            <section style={imgsix_boxstatus} >

                <p style={figcaption_para}>Waves of Hope - Humer Zimmermam</p>
                <div id="button_container" style={buttoncontainer_style}>
                    <button style={figcation_button}
                        onClick={() => { checkLikeStatus(imgsix_likebtn_status, set_imgsix_likebtn_status) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
                            <path id="like_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgsix_likebtn_status} /></svg></button>

                    <button style={figcation_button} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                            <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill="white" /></svg>
                    </button>
                </div>
            </section>
        </figcaption>
    </figure>

        <figure className="img_textover" style={img_textover}>
            <img style={frontimg_style} src={img1} alt='' />
            <figcaption style={figcaption_style_visible} className="figcaption"
                onMouseOver={() => {
                    set_imgone_boxstatus({
                        display: "flex",
                        justifyContent: "space-between",
                        background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                    })
                }}
                onMouseOut={() => { set_imgone_boxstatus({ display: "none" }) }}
            >

                <section style={imgone_boxstatus}>
                    <p style={figcaption_para}>The Duel -By Loreal Milka</p>
                    <div id="button_container" style={buttoncontainer_style}>
                        <button style={figcation_button} onClick={() => { checkLikeStatus(imgone_likebtn_status, set_imgone_likebtn_status) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26"  >
                                <path id="0_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgone_likebtn_status} /></svg></button>

                        <button style={figcation_button} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                                <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill={"white"} /></svg>
                        </button>
                    </div>
                </section>

            </figcaption>
        </figure>

        <figure className="img_textover" style={img_textover}>
            <img style={frontimg_style} src={img2} alt='' />
            <figcaption style={figcaption_style_visible} className="figcaption"
                onMouseOver={() => {
                    set_imgtwo_boxstatus({
                        display: "flex",
                        justifyContent: "space-between",
                        background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                    })
                }}
                onMouseOut={() => { set_imgtwo_boxstatus({ display: "none" }) }}
            >
                <section style={imgtwo_boxstatus} >

                    <p style={figcaption_para}>Familer Life - Eva Neewman</p>
                    <div id="button_container" style={buttoncontainer_style}>
                        <button style={figcation_button}
                            onClick={() => { checkLikeStatus(imgtwo_likebtn_status, set_imgtwo_likebtn_status) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
                                <path id="like_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgtwo_likebtn_status} /></svg></button>

                        <button style={figcation_button} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                                <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill="white" /></svg>
                        </button>
                    </div>
                </section>
            </figcaption>
        </figure>

        <figure className="img_textover" style={img_textover}>
            <img style={frontimg_style} src={img3} alt='' />
            <figcaption style={figcaption_style_visible} className="figcaption"
                onMouseOver={() => {
                    set_imgthree_boxstatus({
                        display: "flex",
                        justifyContent: "space-between",
                        background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                    })
                }}
                onMouseOut={() => { set_imgthree_boxstatus({ display: "none" }) }}
            >
                <section style={imgthree_boxstatus} className="cont">

                    <p style={figcaption_para}>City Life Algarve,Portugal 1977 - Nikoal Mulion</p>
                    <div id="button_container" style={buttoncontainer_style}>
                        <button style={figcation_button}
                            onClick={() => { checkLikeStatus(imgthree_likebtn_status, set_imgthree_likebtn_status) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
                                <path id="like_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgthree_likebtn_status} /></svg></button>

                        <button style={figcation_button} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                                <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill="white" /></svg>
                        </button>
                    </div>
                </section>
            </figcaption>
        </figure>

        <figure className="img_textover" style={img_textover}>
            <img style={frontimg_style} src={img4} alt='' />
            <figcaption style={figcaption_style_visible} className="figcaption"
                onMouseOver={() => {
                    set_imgfour_boxstatus({
                        display: "flex",
                        justifyContent: "space-between",
                        background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                    })
                }}
                onMouseOut={() => { set_imgfour_boxstatus({ display: "none" }) }}
            >
                <section style={imgfour_boxstatus} className="cont">

                    <p style={figcaption_para}>Fox Connect In - Bumia Lemia</p>
                    <div id="button_container" style={buttoncontainer_style}>
                        <button style={figcation_button}
                            onClick={() => { checkLikeStatus(imgfour_likebtn_status, set_imgfour_likebtn_status) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
                                <path id="like_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgfour_likebtn_status} /></svg></button>

                        <button style={figcation_button} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                                <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill="white" /></svg>
                        </button>
                    </div>
                </section>
            </figcaption>
        </figure>

        <figure className="img_textover" style={img_textover}>
            <img style={frontimg_style} src={img5} alt='' />
            <figcaption style={figcaption_style_visible} className="figcaption"
                onMouseOver={() => {
                    set_imgfive_boxstatus({
                        display: "flex",
                        justifyContent: "space-between",
                        background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                    })
                }}
                onMouseOut={() => { set_imgfive_boxstatus({ display: "none" }) }}
            >
                <section style={imgfive_boxstatus} className="cont">

                    <p style={figcaption_para}>The Particle Dao - Mitsu Aminkio</p>
                    <div id="button_container" style={buttoncontainer_style}>
                        <button style={figcation_button}
                            onClick={() => { checkLikeStatus(imgfive_likebtn_status, set_imgfive_likebtn_status) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
                                <path id="like_btn" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z" fill={imgfive_likebtn_status} /></svg></button>

                        <button style={figcation_button} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 50 50">
                                <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12c0 6.4 3.9 9.4 7.2 10.7l.7.3l-.1.8c-.2 1.6-.5 3-1.1 4.2c3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" fill="white" /></svg>
                        </button>
                    </div>
                </section>
            </figcaption>
        </figure>


           

        </section>
    );
}

export default memo(MainContain);