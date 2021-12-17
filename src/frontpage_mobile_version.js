
import React from "react";
import { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter as Brouter, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router";
import styles from "./css/mobile_version_styles";
import darkmode_styles from "./css/mobile_darkmode_styles";
import img1 from "./ART/1.jpg";
import img2 from "./ART/2.jpg";
import img3 from "./ART/3.jpg";
import img4 from "./ART/4.jpg";
import img5 from "./ART/5.jpg";
import img6 from "./ART/6.jpg";

const lightdarkmode_context = createContext();

export default function Mobilefrontpage() {

    return (<Brouter>
        <Routes>
            <Route path="/" element={<ImageList />} />
            <Route path=":slug" element={<ViewImg />} />
        </Routes>
    </Brouter>)

}

function Header() {

    const togglestylestate = useContext(lightdarkmode_context);

    const [searchsvg_fill, set_searchsvg_fill] = useState("#fff");
    const [showsearchform, set_showsearchform] = useState(false);
    const [searchinput, set_searchinput] = useState("");
    const [searchfilter, set_searchfilter] = useState([]);
    const [showmenu, set_showmenu] = useState(false);

    function Searchinput() {
        return (<><form style={styles.searchform_style} onSubmit={handleSearch}>
            <input autoFocus={true} key="search" style={togglestylestate[0].searchinput_style} type="text" list="suggestions" value={searchinput} onChange={onSearchInput} />
        </form>
        </>);
    }

    const onSearchInput = e => {
        set_searchfilter([]);
        set_searchinput(e.target.value);

        if (e.target.value === "") { set_searchfilter([]); set_searchfilter(""); }

        else {
            arts_metadata.filter(val => {

                if (val.toLowerCase().includes(e.target.value.toLowerCase())) { set_searchfilter(filter => [...filter, val]) }

            })
        }
    }

    function SearchSuggestion() {
        return (
            <section style={styles.search_suggestioncontainer_style}>
                {

                    searchfilter.map((account) =>
                        <><li style={styles.searchsuggestionlist_style} onClick={() => { set_searchinput(account); set_searchfilter([]) }} key={account}>{account}</li>
                        </>)
                }
            </section>);
    }



    const handleSearch = (e) => {
        e.preventDefault();
        set_showmenu(false);
        if (showsearchform) { set_showsearchform(false); set_searchfilter([]); }
        else { set_showsearchform(true); }
        set_searchinput("");
    }

    const searchAction = () => { set_showsearchform(false) }

    return (<>
        <header id="header_wrapper" style={togglestylestate[0].header_style}>

            {showsearchform ? <><Searchinput />  <Link to={`/${searchinput}`} >
                <button onClick={searchAction} style={togglestylestate[0].searchactionbtn_style}>
                    <svg onMouseOver={() => { set_searchsvg_fill("red") }} onMouseOut={() => { set_searchsvg_fill("#fff") }}

                        xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 32 32">
                        <path d="M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 
        9 9a9.01 9.01 0 0 1-9-9z" fill={togglestylestate[0].searchfill} /></svg>
                </button>
            </Link></>
                : <><Link to="/">
                    <h1 id="logo" style={togglestylestate[0].h1} onClick={() => { set_showmenu(false) }}>ARTis</h1>
                    </Link>

                <div style={styles.searchmenubtn_container}>
                    <button style={togglestylestate[0].showsearchformbtn_style} type="submit" onClick={handleSearch}>
                        <svg onMouseOver={() => { set_searchsvg_fill("red") }} onMouseOut={() => { set_searchsvg_fill("#fff") }}

                            xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 32 32">
                            <path d="M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 
        9 9a9.01 9.01 0 0 1-9-9z" fill={togglestylestate[0].searchfill} /></svg>
                    </button>
                    <button style={togglestylestate[0].showmenubtn_style}
                        onClick={() => {
                            if (showmenu === true) { console.log("aa"); set_showmenu(false); }
                            else { console.log(showmenu === "false"); set_showmenu(true); }
                        }}>
                        <svg

                            xmlns="http://www.w3.org/2000/svg" width="2em" height="1.8em" viewBox="0 0 32 32">
                            <path d="M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 
9 9a9.01 9.01 0 0 1-9-9z" fill={togglestylestate[0].searchfill} /></svg>
                    </button>
                        </div>
                </>}
        </header>
        {searchfilter && <SearchSuggestion />}
        {showmenu && <MenuSection setshowmenu={set_showmenu} />}
    </>

    );
}



function MenuSection(prop) {
    const togglestylestate = useContext(lightdarkmode_context);

    return (<section style={styles.menusectionstyle}>
        <ul>
            <li><button onClick={() => { togglestylestate[1](darkmode_styles); styles.currentmode = "dark"; prop.setshowmenu(false) }}>Dark</button></li>
            <li><button onClick={() => { togglestylestate[1](styles);; styles.currentmode = "light"; prop.setshowmenu(false) }}>Light</button></li>

            <li><button >Sign In</button></li>
        </ul>
    </section>)
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

    const [togglestyle, set_togglestyle] = useState(styles);

    useEffect(() => {
        if (styles.currentmode === "dark") { set_togglestyle(darkmode_styles) }
    }, []);


    return (<>
        <lightdarkmode_context.Provider value={[togglestyle, set_togglestyle]}>
            <Header togglestylestate={[togglestyle, set_togglestyle]} />
        </lightdarkmode_context.Provider>

        <section style={togglestyle.maincontainer_style} >

            <ul className="imglist_container">
                {Object.entries(arts).map(([slug, { title, artist, price, img, boxstatus }]) =>
                    <li key={slug}>

                        <Link to={`/${slug}`}>
                            <figure style={styles.img_textover}>

                                <img style={styles.frontimg_style} src={img} alt="" />
                                <figcaption style={styles.figcaption_style_visible}
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
                                        <p style={styles.figcaption_para}>{`${title} by ${artist}`}</p>
                                    </section>
                                </figcaption>
                            </figure>
                        </Link>
                    </li>

                )}
            </ul>
        </section>
    </>
    );
}

function ViewImg() {

    const [togglestyle, set_togglestyle] = useState(styles);


    const { slug } = useParams();
    const [showcomments, setshowcomments] = useState(false);


    let art = arts[slug];

    if (art === undefined) { art = arts[connect_metatdata.get(slug)] }

    useEffect(() => {
        if (styles.currentmode === "dark") { set_togglestyle(darkmode_styles) }
    }, []);

    return (<>
        <lightdarkmode_context.Provider value={[togglestyle, set_togglestyle]}>
            <Header togglestylestate={[togglestyle, set_togglestyle]} />
        </lightdarkmode_context.Provider>

        <section style={togglestyle.viewimg_container}>
            <img style={styles.viewimg_imgstyle} src={art.img} alt="" />

            <section style={styles.halfpagecontainer_style}>
                <div style={togglestyle.arttitlecontainer_style}>
                    <p style={togglestyle.arttitlepara_style}>{art.title} - {art.artist}</p>
                </div>

                {showcomments ?
                    <lightdarkmode_context.Provider value={[togglestyle, set_togglestyle]}>
                        <CommentsSection artobject={art} commentFunction={setshowcomments} togglestylestate={[togglestyle, set_togglestyle]} />
                    </lightdarkmode_context.Provider>

                    :
                    <lightdarkmode_context.Provider value={[togglestyle, set_togglestyle]}>
                        <SuggestionImgs artobject={art} commentFunction={setshowcomments} style={togglestyle} togglestylestate={[togglestyle, set_togglestyle]}/>
                    </lightdarkmode_context.Provider>
                }

            </section>
        </section></>
    );
}

function CommentsSection(prop) {

    const togglestylestate = useContext(lightdarkmode_context);

    //track comment textarea
    const [comment, setcomment] = useState("");
    const [commentfocus, set_commentfocus] = useState(false);
    //track list of comments
    const [comments, setcomments] = useState(prop.artobject.comments);

    let accountkey = Object.keys(comments);

    const handleSubmit = (event) => {
        event.preventDefault();
        prop.artobject.comments.unknown = comment;
        setcomments({ unknown: comment, ...comments });
        setcomment("");
        ++prop.artobject.commentsSize;
    }

    return (<section>
        <div style={togglestylestate[0].commentcancle_containerstyle}>
            <p style={togglestylestate[0].commentcancle_parastyle}>Comments</p>
            <button style={styles.canclecomment_style} onClick={() => { prop.commentFunction(false) }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="2.3em" height="2.3em" viewBox="0 0 16 16"><g fill="gray">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8L4.646 5.354a.5.5 0 0 1 0-.708z" /></g></svg>
            </button></div>
        <div style={togglestylestate[0].commentform_container_style}>
            <form onSubmit={handleSubmit}>
                <textarea onFocus={() => set_commentfocus(true)} style={togglestylestate[0].commenttextarea_style} value={comment} placeholder="Add comment..." onChange={(e) => setcomment(e.target.value)}></textarea>

                {commentfocus && <CancleComment focusFunc={set_commentfocus} emptyCommentForm_func={setcomment} />}

            </form>
        </div>

        <section>
            <ul>
                {
                    accountkey.map((account) =>
                        <><li style={togglestylestate[0].commentaccount_style} key={account}>{account}</li>
                            <li style={togglestylestate[0].commenttext_style} key={`comment${account}`}>{prop.artobject.comments[account]}</li></>)
                }
            </ul>
        </section>
    </section>);
}


function CancleComment(prop) {
    const togglestylestate = useContext(lightdarkmode_context);

    return (<div style={styles.commnetbtns_container_style}>
        <button onClick={() => { prop.focusFunc(false); prop.emptyCommentForm_func("") }} style={togglestylestate[0].commentcanclebtn_style}>Cancle</button>
        <input type="submit" style={togglestylestate[0].commentsubmitbtn_style} value="COMMENT" />
    </div>)
}

function SuggestionImgs(prop) {
    const togglestylestate = useContext(lightdarkmode_context);


    const [art, setart] = useState(prop.artobject);
    const [imglike_status, set_imglike_status] = useState(art.likestatus[0]);
    const [likecounter_status, set_likecounter_status] = useState(art.likestatus[3])
    const [stroke, setstroke] = useState(art.likestatus[4]);

    useEffect(() => {
        if (imglike_status === "red") { setstroke("red"); }
        if (art !== prop.artobject) {
            setart(prop.artobject);
            set_imglike_status(prop.artobject.likestatus[0]);
            set_likecounter_status(prop.artobject.likestatus[3]);
            setstroke(prop.artobject.likestatus[4]);
        }
    }, [imglike_status, art, prop.artobject]);

    const likeDislike = () => {
        if (imglike_status === "white") {
            set_imglike_status("red");
            setstroke("red");
            set_likecounter_status(++prop.artobject.likestatus[3]);
            prop.artobject.likestatus[0] = "red";
            prop.artobject.likestatus[4] = "red";
        }
        else {
            set_imglike_status("white");
            setstroke("black");
            set_likecounter_status(--prop.artobject.likestatus[3]);
            prop.artobject.likestatus[0] = "white";
            prop.artobject.likestatus[4] = "black";
        }

    }

    return (<>
        <div style={togglestylestate[0].pricelikebtn_container}>
            <p style={togglestylestate[0].pricepara_style}>Price : {prop.artobject.price}</p>

            <div style={styles.likebtn_container}>
                <button style={styles.likebutton_style} onClick={() => { likeDislike(); }}
                    onMouseOver={(e) => { e.target.style.opacity = ".5"; }} onMouseOut={(e) => { e.target.style.opacity = "1"; }}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="1.5em" height="1.5em" viewBox="0 0 48 48">
                        <path d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8z" fill={prop.artobject.likestatus[0]} stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <p style={togglestylestate[0].likecountpar_style}>{likecounter_status}</p>
            </div>
        </div>
        <div style={styles.accountbuy_container_style}>
            <p style={togglestylestate[0].accountpar_style}>{prop.artobject.account}</p>
            <button style={togglestylestate[0].buybtn_style} onMouseOver={(e) => { e.target.style.opacity = ".8"; }} onMouseOut={(e) => { e.target.style.opacity = "1"; }}>Buy</button>
        </div>
        <div style={togglestylestate[0].commentbtns_container}>
            <button style={togglestylestate[0].commentsbtn_style} onClick={() => { prop.commentFunction(true); }}>comments  {prop.artobject.commentsSize}</button>
            <button style={styles.commentdropdownbtn_style} onClick={() => { prop.commentFunction(true); }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
                    <g fill={togglestylestate[0].searchfill}><path d="M2 5.56L2.413 5h11.194l.393.54L8.373 11h-.827L2 5.56z" /></g></svg></button>
        </div>
        <section id="main_container" style={prop.style.suggestioncontainer_style} >

            <ul>
                {Object.entries(arts).map(([slug, { title, artist, price, img, boxstatus }]) =>
                    <Link to={`/${slug}`}>

                        <li key={`${title}-${price}`}>
                            <img style={styles.frontimg_style} src={img} alt="" />
                        </li>
                    </Link>

                )}
            </ul>
        </section></>);
}





const arts = {
    img1: {
        account: "Lora Mikeal", title: "The Duel", artist: "Loreal Milka", price: "750$ ", img: img1, boxstatus: [], likestatus: ["white", "", "", 556, "black"],
        comments: { chris: "Nice !!" }, commentsSize: 1
    },
    img2: {
        account: "Kibrom Leul", title: "Familer Life", artist: "Eva Neewman", price: "260$ ", img: img2, boxstatus: [], likestatus: ["white", "", "", 29, "black"],
        comments: { kevin: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quaerat ut maiores quas voluptatibus neque distinctio veritatis ipsam quae nulla totam aperiam quos, optio, nemo dolorum reprehenderit sunt, modi maxime!", malcom: "very good price for a very good work ?", Leul: "Good price", malcomb: "Nice tecnique?" }, commentsSize: 4
    },
    img3: {
        account: "Mikel Gold", title: "City Life Algarve,Portugal 1977", artist: "Nikoal Mulion", price: "1100$ ", img: img3, boxstatus: [], likestatus: ["white", "", "", 1910, "black"], comments: { Natan: "wow !", NUNN_Iummm: "perfect" }, commentsSize: 2
    },
    img4: {
        account: "Naten09", title: "Fox Connect In", artist: "Bumia Lemia", price: "1050$ ", img: img4, boxstatus: [], likestatus: ["white", "", "", 89, "black"],
        comments: { murr2: "Love this work. The price is too high tho..", ma55omb: "why is this soo expensive ?" }, commentsSize: 2
    },
    img5: {
        account: "Anchelote--", title: "The Particle Dao", artist: "Mitsu Aminkio", price: "266$ ", img: img5, boxstatus: [], likestatus: ["white", "", "", 244, "black"],
        comments: {}, commentsSize: 0
    },
    img6: {
        account: "Pochetinio Polu", title: "Waves of Hope", artist: "Humer Zimmermam", price: "499$ ", img: img6, boxstatus: [], likestatus: ["white", "", "", 3601, "black"],
        comments: { Liumen: "Love this work. The price is too high tho..", Adem632: "why is this soo expensive ?", Blin22en: "Love this work. The price is too high tho..", NUrhussen: "Beutifull ?", Beth_white: "    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus est accusamus et iste asperiores repudiandae vitae impedit vero rem atque.", Mark_Goldberg: " Lorem ipsum, dolor sit amet consectetur adipisicing elit.", opsen: "Love this work. The price is too high tho..", Havertz: "Minus est accusamus et iste asperiores repudiandae vitae impedit vero rem atque. ?", Merhawit26: "Love this work. The price is too high tho..", Viky: "Minus est accusamus et iste asperiores repudiandae vitae impedit vero rem atque. ?", umbergen: "Love this work. The price is too high tho..", Adem2: "why is this soo expensive ?" }, commentsSize: 12
    },
}

const arts_metadata = ["The Duel", "Familer Life", "City Life Algarve,Portugal 1977", "Fox Connect In",
    "The Particle Dao", "Waves of Hope"];

const connect_metatdata = new Map();
connect_metatdata.set("The Duel", "img1");
connect_metatdata.set("Familer Life", "img2");
connect_metatdata.set("City Life Algarve,Portugal 1977", "img3");
connect_metatdata.set("Fox Connect In", "img4");
connect_metatdata.set("The Particle Dao", "img5");
connect_metatdata.set("Waves of Hope", "img6");


