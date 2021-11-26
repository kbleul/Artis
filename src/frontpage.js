
import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import img1 from "./ART/1.jpg";
import img2 from "./ART/2.jpg";
import img3 from "./ART/3.jpg";
import img4 from "./ART/4.jpg";
import img5 from "./ART/5.jpg";
import img6 from "./ART/6.jpg";


import { BrowserRouter as Brouter, Routes, Route, Link } from "react-router-dom";

export default function Frontpage() {

    return (<Brouter>
        <Routes>
            <Route path="/" element={<ImageList />} />
            <Route path=":slug" element={<ViewImg />} />
        </Routes>
    </Brouter>)

}

function ImageList() {

    const [imgone_boxstatus, set_imgone_boxstatus] = useState({ display: "none" });
    const [imgtwo_boxstatus, set_imgtwo_boxstatus] = useState({ display: "none" });
    const [imgthree_boxstatus, set_imgthree_boxstatus] = useState({ display: "none" });
    const [imgfour_boxstatus, set_imgfour_boxstatus] = useState({ display: "none" });
    const [imgfive_boxstatus, set_imgfive_boxstatus] = useState({ display: "none" });
    const [imgsix_boxstatus, set_imgsix_boxstatus] = useState({ display: "none" });

    arts.img1.boxstatus = [imgone_boxstatus, set_imgone_boxstatus];
    arts.img2.boxstatus = [imgtwo_boxstatus, set_imgtwo_boxstatus];
    arts.img3.boxstatus = [imgthree_boxstatus, set_imgthree_boxstatus];
    arts.img4.boxstatus = [imgfour_boxstatus, set_imgfour_boxstatus];
    arts.img5.boxstatus = [imgfive_boxstatus, set_imgfive_boxstatus];
    arts.img6.boxstatus = [imgsix_boxstatus, set_imgsix_boxstatus];


    return (
        <section id="main_container" style={maincontainer_style} >

            <ul>
                {Object.entries(arts).map(([slug, { title, artist, price, img, boxstatus }]) =>
                    <li key={slug}>

                        <Link to={`/${slug}`}>
                            <figure className="img_textover" style={img_textover}>

                                <img style={frontimg_style} src={img} alt="" />
                                <figcaption style={figcaption_style_visible} className="figcaption"
                                    onMouseOver={() => {
                                        boxstatus[1]({
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-end",
                                            background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                                            height: "30vh"
                                        })
                                    }}
                                    onMouseOut={() => { boxstatus[1]({ display: "none" }) }}
                                >

                                    <section style={boxstatus[0]}>
                                        <p style={figcaption_para}>{`${title} by ${artist}`}</p>
                                    </section>
                                </figcaption>
                            </figure>
                        </Link>
                    </li>

                )}
            </ul>
        </section>
    )
}

function ViewImg() {
    const { slug } = useParams();

    const [showcomments, setshowcomments] = useState(false);

    const art = arts[slug];
    return (<section>
        <img style={viewimg_imgstyle} src={art.img} alt="" />
        <section style={halfpagecontainer_style}>
            <div style={arttitlecontainer_style}><p style={arttitlepara_style}>{art.title} - {art.artist}</p></div>

            {showcomments ? <CommentsSection artobject={art} commentFunction={setshowcomments} /> : <SuggestionImgs artobject={art} commentFunction={setshowcomments} />}
        </section></section>
    );
}

function CommentsSection(prop) {

    let accountkey = Object.keys(prop.artobject.comments);


    return (<section>
        <div style={commentcancle_containerstyle}>
            <p style={commentcancle_parastyle}>Comments</p>
            <button style={canclecomment_style} onClick={() => { prop.commentFunction(false) }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="2.3em" height="2.3em" viewBox="0 0 16 16"><g fill="gray">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8L4.646 5.354a.5.5 0 0 1 0-.708z" /></g></svg>
            </button></div>
            <div style={commentform_container_style}>
               <form>
                <textarea style={commenttextarea_style} value="" placeholder="Add comment..."></textarea>
                <div style={commnetbtns_container_style}>
                <button style={commentcanclebtn_style}>CANCLE</button>
                <button style={commentsubmitbtn_style}>COMMENT</button>
                </div>
               </form>
            </div>

            <section>
            <ul>
                {
                    accountkey.map( (account) => 
                        <><li style={commentaccount_style} key={account}>{account}</li>
                        <li style={commenttext_style} key={`comment${account}`}>{prop.artobject.comments[account]}</li></>
                    )
                }
            </ul>
            </section>
    </section>);
}

function SuggestionImgs(prop) {

    const [imglike_status, set_imglike_status] = useState(prop.artobject.likestatus[0]);
    const [likecounter_status, set_likecounter_status] = useState(prop.artobject.likestatus[3])
    const [stroke, setstroke] = useState("black");

    useEffect(() => {
        if (imglike_status === "red") { setstroke("red"); }
    }, []);

    const likeDislike = () => {
        if (imglike_status === "white") {
            set_imglike_status("red");
            setstroke("red");
            set_likecounter_status(++prop.artobject.likestatus[3]);
            prop.artobject.likestatus[0] = "red";
        }
        else {
            set_imglike_status("white");
            setstroke("black");
            set_likecounter_status(--prop.artobject.likestatus[3]);
            prop.artobject.likestatus[0] = "white";
        }

    }

    return (<>
        <div style={pricelikebtn_container}>
            <p style={pricepara_style}>Price : {prop.artobject.price}</p>

            <div style={likebtn_container}>
                <button style={likebutton_style} onClick={() => { likeDislike(); }}
                    onMouseOver={(e) => { e.target.style.opacity = ".5"; }} onMouseOut={(e) => { e.target.style.opacity = "1"; }}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="1.5em" height="1.5em" viewBox="0 0 48 48">
                        <path d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8z" fill={imglike_status} stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <p style={likecountpar_style}>{likecounter_status}</p>
            </div>
        </div>
        <div style={accountbuy_container_style}>
            <p style={accountpar_style}>{prop.artobject.account}</p>
            <button style={buybtn_style} onMouseOver={(e) => { e.target.style.opacity = ".8"; }} onMouseOut={(e) => { e.target.style.opacity = "1"; }}>Buy</button>
        </div>
        <div style={commentbtns_container}>
            <button style={commentsbtn_style} onClick={() => { prop.commentFunction(true); }}>comments  {prop.artobject.commentsSize}</button>
            <button style={commentdropdownbtn_style} onClick={() => { prop.commentFunction(true); }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
                    <g fill="currentColor"><path d="M2 5.56L2.413 5h11.194l.393.54L8.373 11h-.827L2 5.56z" /></g></svg></button>
        </div>
        <section id="main_container" style={suggestioncontainer_style} >

            <ul>
                {Object.entries(arts).map(([slug, { title, artist, price, img, boxstatus }]) =>
                    <li key={slug}>
                        <img style={frontimg_style} src={img} alt="" />
                    </li>

                )}
            </ul>
        </section></>);
}



const halfpagecontainer_style = {
    height: "48vh",
    overflowY: "scroll",
}
const viewimg_imgstyle = {
    width: "100%",
    height: "45vh",
    marginTop: "7vh",
}
const maincontainer_style = {
    backgroundColor: "rgb(61, 56, 56)",
    overflowY: "scroll",
    marginTop: "7vh"
}
const img_textover = {
    width: "98%",
    padding: "0",
    margin: "0 auto",
    position: "relative"
}
const frontimg_style = {
    width: "100%",
    height: "30vh"
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
    width: "85%",
    marginTop: "49%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    paddingLeft: "2%",
}
const arttitlecontainer_style = {
    margin: "0",
    borderBottom: "1px solid",
}
const arttitlepara_style = {
    margin: "0",
    fontFamily: "cursive",
    marginLeft: "2%",
    fontWeight: "900",
    textAlign: "center",

}
const pricelikebtn_container = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "7vh",
    margin: "0 auto",
    borderBottom: "1px solid #e1dbdb",

}
const pricepara_style = {
    paddingLeft: "5%",
    fontSize: ".9rem",
    fontWeight: "900",
    color: "purple",
    width: "60%",

}
const likebtn_container = {
    display: "flex",
    flexDirection: "column",
    width: "20%",
    margin: "0 auto",
}
const likebutton_style = {
    backgroundColor: "rgba(0,0,0,0)",
    marginRight: "10%",
    border: "none",
    paddingLeft: "10%",
}
const canclecomment_style = {
    backgroundColor: "rgba(0,0,0,0)",
    border: "none",
    paddingTop: ".3rem",
    marginRight: "4%",
}
const likecountpar_style = {
    fontSize: ".7rem",
    fontWeight: "900",
    margin: "0",
    alignSelf: "center",
}
const buybtn_style = {
    padding: "0rem 1.6rem",
    backgroundColor: "#ff6000",
    color: "black",
    fontWeight: "700",
    textTransform: "uppercase",
    border: "none",
    height: "2.1rem",
    marginTop: ".5rem",
    marginRight: "1.3rem",
    opacity: "1",

}
const accountbuy_container_style = {
    display: "flex",
    justifyContent: "space-between",
}
const accountpar_style = {
    marginLeft: "5.5%",
    marginTop: "4.7%",
    fontSize: ".8rem",
    textDecoration: "underline",
}
const commentbtns_container = {
    borderBottom: "1px solid grey",
    borderTop: "1px solid",
    marginTop: "1%",
    padding: "2% 3%",
    display: "flex",
}
const commentcancle_containerstyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #e1dbdb",

}
const commentsbtn_style = {
    backgroundColor: "rgba(0,0,0,0)",
    border: "none",
    textTransform: "Capitalize",
    fontSize: "1rem",
    width: "50%",
    paddingLeft: "2.5%",
    textAlign: "left",
}
const commentdropdownbtn_style = {
    backgroundColor: "rgba(0,0,0,0)",
    border: "none",
    width: "50%",
    paddingLeft: "37%",
}
const commentcancle_parastyle = {
    paddingLeft: "5%",
    textTransform: "Capitalize",
}
const commentform_container_style = {
    borderBottom : "1px solid #d7d1d1",
    paddingBottom : "1.7rem",
}
const commnetbtns_container_style = {
    float: "right",
    marginRight: "5%",
}
const commenttextarea_style = {
    width : "90%",
    marginLeft: "5%",
    border: "none",
    borderBottom: "1px solid",
    height: "3.3rem",
    paddingTop : "5%",
    outline : "none",
}
const commentcanclebtn_style = {
    backgroundColor : "inherit",
    fontSize : ".8rem",
    border: "none",
    textTransform : "capitalize",
    paddingTop : ".35rem",
}
const commentsubmitbtn_style = {
    backgroundColor : "inherit",
    fontSize : ".8rem",
    border: "none",
    color : "green",
    textTransform : "capitalize",
    paddingTop : ".35rem",
}
const suggestioncontainer_style = {
    backgroundColor: "rgb(61, 56, 56)"
}
const commentaccount_style = {
    fontSize : ".7rem",
    color : "gray",
    paddingLeft : "2%",
    paddingTop : "1%",
}
const commenttext_style = {
    fontSize : ".8rem",
    paddingLeft : "5%",
    paddingRight : "1%",
    marginTop : ".3rem",
    paddingBottom : ".5rem",
    borderBottom : "1px solid #d7d1d1",
}


const arts = {
    img1: {
        account: "Lora Mikeal", title: "The Duel", artist: "Loreal Milka", price: "750$ ", img: img1, boxstatus: [], likestatus: ["white", "", "", 556],
        comments: { chris: "Nice !!" }, commentsSize: 1 },
    img2: {
        account: "Kibrom Leul", title: "Familer Life", artist: "Eva Neewman", price: "260$ ", img: img2, boxstatus: [], likestatus: ["white", "", "", 29],
        comments: { kevin: "", malcom: "very good price for a very good work ?", Leul: "Good price", malcomb: "Nice tecnique?" }, commentsSize: 4 },
    img3: { 
        account: "Mikel Gold", title: "City Life Algarve,Portugal 1977", artist: "Nikoal Mulion", price: "1100$ ", img: img3, boxstatus: [],likestatus: ["white", "", "", 1910], comments: { Natan: "wow !", NUNN_Iummm: "perfect" }, commentsSize: 2 },
    img4: {
        account: "Naten09", title: "Fox Connect In", artist: "Bumia Lemia", price: "1050$ ", img: img4, boxstatus: [], likestatus: ["white", "", "", 89],
        comments: { murr: "Love this work. The price is too high tho..", malcomb: "why is this soo expensive ?" }, commentsSize: 2 },
    img5: { 
        account: "Anchelote--", title: "The Particle Dao", artist: "Mitsu Aminkio", price: "266$ ", img: img5, boxstatus: [], likestatus: ["white", "", "", 244], 
        comments : {} ,  commentsSize: 0 },
    img6: { account: "Pochetinio Polu", title: "Waves of Hope", artist: "Humer Zimmermam", price: "499$ ", img: img6, boxstatus: [], likestatus: ["white", "", "", 3601], 
    comments: { Liumen: "Love this work. The price is too high tho..", Adem632: "why is this soo expensive ?", Blin22en: "Love this work. The price is too high tho..", NUrhussen: "Beutifull ?", Beth_white: "    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus est accusamus et iste asperiores repudiandae vitae impedit vero rem atque.", Mark_Goldberg: " Lorem ipsum, dolor sit amet consectetur adipisicing elit.", opsen: "Love this work. The price is too high tho..", Havertz: "Minus est accusamus et iste asperiores repudiandae vitae impedit vero rem atque. ?", Merhawit26: "Love this work. The price is too high tho..", Viky: "Minus est accusamus et iste asperiores repudiandae vitae impedit vero rem atque. ?", umbergen: "Love this work. The price is too high tho..", Adem2: "why is this soo expensive ?" }, commentsSize: 12 },
}

