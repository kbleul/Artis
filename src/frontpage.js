
import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import img1 from "./ART/1.jpg";
import img2 from "./ART/2.jpg";
import img3 from "./ART/3.jpg";
import img4 from "./ART/4.jpg";
import img5 from "./ART/5.jpg";
import img6 from "./ART/6.jpg";


import {BrowserRouter as Brouter,Routes,Route,Link } from "react-router-dom";

export default function Frontpage() {
  
    return (<Brouter>
      <Routes>
        <Route path="/" element={<ImageList />} />
        <Route path=":slug" element={<ViewImg />} />
      </Routes>
    </Brouter>)

}

function ImageList(){

    const [imgone_boxstatus, set_imgone_boxstatus] = useState({ display: "none" });
    const [imgtwo_boxstatus, set_imgtwo_boxstatus] = useState({ display: "none" });
    const [imgthree_boxstatus, set_imgthree_boxstatus] = useState({ display: "none" });
    const [imgfour_boxstatus, set_imgfour_boxstatus] = useState({ display: "none" });
    const [imgfive_boxstatus, set_imgfive_boxstatus] = useState({ display: "none" });
    const [imgsix_boxstatus, set_imgsix_boxstatus] = useState({ display: "none" });


 /*   const [imgone_likebtn_status, set_imgone_likebtn_status] = useState("white");
    const [imgtwo_likebtn_status, set_imgtwo_likebtn_status] = useState("white");
    const [imgthree_likebtn_status, set_imgthree_likebtn_status] = useState("white");
    const [imgfour_likebtn_status, set_imgfour_likebtn_status] = useState("white");
    const [imgfive_likebtn_status, set_imgfive_likebtn_status] = useState("white");
    const [imgsix_likebtn_status, set_imgsix_likebtn_status] = useState("white");  */

  

            arts.img1.boxstatus = [imgone_boxstatus , set_imgone_boxstatus ];
            arts.img2.boxstatus =  [imgtwo_boxstatus , set_imgtwo_boxstatus ];
            arts.img3.boxstatus =  [imgthree_boxstatus , set_imgthree_boxstatus ] ;
            arts.img4.boxstatus =  [imgfour_boxstatus , set_imgfour_boxstatus ];
            arts.img5.boxstatus =  [imgfive_boxstatus , set_imgfive_boxstatus ];
            arts.img6.boxstatus =  [imgsix_boxstatus , set_imgsix_boxstatus ];



    return (
        <section id="main_container" style={maincontainer_style} >

           <ul>
            {Object.entries(arts).map(([slug , {title,artist,price,img,boxstatus}])=> 
            <li key={slug}>

                <Link to={`/${slug}`}>
        <figure className="img_textover" style={img_textover}>

                  <img style={frontimg_style} src={img} alt="" />
                  <figcaption  style={figcaption_style_visible} className="figcaption"
                  onMouseOver={() => {
                      boxstatus[1]({
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-end",
                          background: "-moz-linear-gradient(rgba(0,0,0,0) 55%, black)",
                          height: "30vh"
                      })
                  }}
                  onMouseOut={()=> { boxstatus[1]({display:"none"})}}
              >

              <section style={boxstatus[0]}>
                <p style={figcaption_para}>{`${title} by ${artist}`}</p>
            </section>
              </figcaption>
                  </figure>
                </Link>
            </li>
           
            ) }
           </ul>
        </section>
    )
}

function ViewImg() {
    const {slug} = useParams();

    const art = arts[slug];
    return (<>           
        <img style={viewimg_imgstyle} src={art.img} alt="" />
    </>);
}

const viewimg_imgstyle = {
    width: "100%",
    height: "38vh",
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

const arts = {
    img1 : {title : "The Duel", artist : "Loreal Milka" , price : "750$ ", img : img1 , boxstatus : [] , likestatus : []},
    img2 : {title : "Familer Life", artist : "Eva Neewman" , price : "260$ " , img : img2 , boxstatus : [] , likestatus : []},
    img3 : {title : "City Life Algarve,Portugal 1977", artist : "Nikoal Mulion" , price : "1100$ " ,img : img3 , boxstatus : [] , likestatus : []},
    img4 : {title : "Fox Connect In", artist : "Bumia Lemia" , price : "1050$ " ,img : img4 , boxstatus :[] , likestatus : []},
    img5 : {title : "The Particle Dao", artist : "Mitsu Aminkio" , price : "266$ ", img : img5 , boxstatus :[] , likestatus : []},
    img6 : {title : "Waves of Hope", artist : "Humer Zimmermam" , price : "499$ ",img : img6 , boxstatus :[] , likestatus : []},

}

