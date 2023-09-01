const all = [
  { header: {
    itemType: "Styling for Classic Type Buttons",
    headerCode: `<button className={"btn"} > Click Me </button>`
   },
   codeArea: [
    {
       css:  `.btn{
        padding: 0.5rem 1rem;
        cursor: pointer;
        border: 1px solid rgb(126, 126, 126);
        width: 6rem;
        font-weight: 900;
        background: rgb(3, 63, 9);
        color: rgb(255, 255, 255);
        border-radius: 3px;
      }
      .btn:hover{
        background: rgb(255, 255, 255);
        color: rgb(3, 63, 9);
        border-radius: 20px;
        transition: 0.6s ease-in-out;
      }`,
       btncode: `Hover Me`,
       cls:"green-button",
    }, 
    {
      css:  `.btn{
        padding: 0.5rem 1rem;
        cursor: pointer;
        border: 1px solid rgb(126, 126, 126);
        width: 6rem;
        font-weight: 900;
        background: rgb(3, 63, 9);
        color: rgb(255, 255, 255);
        border-radius: 3px;
     }
     .btn:active{
      position: relative;
      top: 4px;
      transition: 0.6s ease-in-out;
     } `,
      btncode: `Click Me`,
      cls:"green-button-active",
   },
   {
    css:  `.btn{
      padding: 0.9rem 1rem;
      cursor: pointer;
      border: 1px solid rgb(126, 126, 126);
      width: 10rem;
      font-weight: 900;
      background: rgb(3, 41, 63);
      color: rgb(255, 255, 255);
      // border-radius: 3px;
   }
   .btn:hover{
    transform: scale(1.1);
    border-radius: 30px;
    transition:0.3s ease-in-out;
   } `,
    btncode: `Scale Hover`,
    cls:"green-button-scale",
 },
 {
  css:  `.btn{
    padding: 0.9rem 1rem;
    cursor: pointer;
    border: 1px solid rgb(126, 126, 126);
    width: 10rem;
    font-weight: 900;
    background: rgb(3, 41, 63);
    color: rgb(255, 255, 255);
    border-radius: 3px;
 }
 .btn:active{
  transform: scale(0.9);
  border-radius: 30px;
  transition:0.6s ease-in-out;
 } `,
  btncode: `Scale Active`,
  cls:"green-button-scale-active",
},
  ]

  },
  { header: {
    itemType: "Slide Animation Button",
    headerCode: ` <button class="slide_from_x slide ">SLIDE FROM LEFT</button>`
   },
   codeArea: [
    {
       css:  `
       .slide {
         font-size: 1em;
         background: #3498db;
         color: #fff;
         border: 0.25rem solid #3498db;
         padding: 0.85em 0.75em;
         margin: 1rem;
         position: relative;
         z-index: 1;
         overflow: hidden;
       }
       .slide:hover {
         color: #3498db;
       }
       .slide::after {
         content: "";
         background: #ecf0f1;
         position: absolute;
         z-index: -1;
         padding: 0.85em 0.75em;
         display: block;
       }
       button[class^="slide"]::after {
         transition: all 0.35s;
       }
       button[class^="slide"]:hover::after {
         left: 0;
         right: 0;
         top: 0;
         bottom: 0;
         transition: all 0.35s;
       }
       button.slide_from_left::after {
         top: 0;
         bottom: 0;
         left: -100%;
         right: 100%;
       }
       `,
       btncode: `Get start `,
       cls:"slide_from_left  slide",
    },
    {
      css:  `
      .slide {
        font-size: 1em;
        background: #3498db;
        color: #fff;
        border: 0.25rem solid #3498db;
        padding: 0.85em 0.75em;
        margin: 1rem;
        position: relative;
        z-index: 1;
        overflow: hidden;
      }
      .slide:hover {
        color: #3498db;
      }
      .slide::after {
        content: "";
        background: #ecf0f1;
        position: absolute;
        z-index: -1;
        padding: 0.85em 0.75em;
        display: block;
      }
      button[class^="slide"]::after {
        transition: all 0.35s;
      }
      button[class^="slide"]:hover::after {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transition: all 0.35s;
      } 
      button.slide_from_right::after {
        top: 0;
        bottom: 0;
        left: 100%;
        right: -100%;
      }
      `,
      btncode: `Get start `,
      cls:"slide_from_right  slide",
   },
   {
    css:  `
    .slide {
      font-size: 1em;
      background: #3498db;
      color: #fff;
      border: 0.25rem solid #3498db;
      padding: 0.85em 0.75em;
      margin: 1rem;
      position: relative;
      z-index: 1;
      overflow: hidden;
    }
    .slide:hover {
      color: #3498db;
    }
    .slide::after {
      content: "";
      background: #ecf0f1;
      position: absolute;
      z-index: -1;
      padding: 0.85em 0.75em;
      display: block;
    }
    button[class^="slide"]::after {
      transition: all 0.35s;
    }
    button[class^="slide"]:hover::after {
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      transition: all 0.35s;
    } 
    button.slide_from_top::after {
      left: 0;
      right: 0;
      top: -100%;
      bottom: 100%;
    }
    `,
    btncode: `Get start `,
    cls:"slide_from_top  slide",
 }, 
 {
  css:  `
  .slide {
    font-size: 1em;
    background: #3498db;
    color: #fff;
    border: 0.25rem solid #3498db;
    padding: 0.85em 0.75em;
    margin: 1rem;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
  .slide:hover {
    color: #3498db;
  }
  .slide::after {
    content: "";
    background: #ecf0f1;
    position: absolute;
    z-index: -1;
    padding: 0.85em 0.75em;
    display: block;
  }
  button[class^="slide"]::after {
    transition: all 0.35s;
  }
  button[class^="slide"]:hover::after {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: all 0.35s;
  } 
  button.slide_from_bottom::after {
    left: 0;
    right: 0;
    top: 100%;
    bottom: -100%;
  }
  `,
  btncode: `Get start `,
  cls:"slide_from_bottom slide",
}, 
  ]

  },
  {
   header: {
    itemType: "Animation Hover Button",
    headerCode: `<button class='btn'>
    <i>H</i><i>o</i><i>v</i><i>e</i><i>r</i>
    <i>t</i><i>h</i><i>e</i>
    <i>B</i><i>u</i><i>t</i><i>t</i><i>o</i><i>n</i>
   </button>`
   },
   codeArea: [
     {
        css:  ` .btn-hover-animate {
            font-size: 1.2rem;
            text-transform: uppercase;
            text-decoration: none;
            overflow: hidden;
            display: inline-block;
            padding: 0rem 0.5rem;
            color: #0a0a0a;
            background: none;
            border: 1px solid #262424;
            cursor: pointer;
            transform: translate3d(0, 0, 0);
          }
          .btn-hover-animate:after {
            content: "";
            display: block;
            position: absolute;
            top: 0rem;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            height: 150%;
            background: #0c0c0c;
            pointer-events: none;
            transform: translate3d(0, 45px, 0);
            transition: all 0.3s 0s cubic-bezier(0.455, 0.03, 0.515, 0.955);
          }
          .btn-hover-animate i {
            font-style: normal;
            display: inline-block;
            height: 100%;
            padding-left: 1px;
            padding-right: 1px;
            transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
          }
          .btn-hover-animate i:hover {
            transform: translate3d(0, -6px, 0);
          }
          .btn-hover-animate:hover {
            color: #ffffff;
          }
          .btn-hover-animate:hover:after {
            transform: translate3d(0, 0, 0);
          }`,
        btncode: `
        <i>H</i><i>o</i><i>v</i><i>e</i><i>r</i>\n<i>t</i><i>h</i><i>e</i>\n<i>B</i><i>u</i><i>t</i><i>t</i><i>o</i><i>n</i>\n`,
        cls:"btn-hover-animate",
     }, 
   ]
  },
  {
    header: {
        itemType: "Animation Hover Button ",
        headerCode: ` <button className = "setting-btn" >
             <i className="bi bi-gear-wide"  id="setting" ></i>
    </button>`
    },
    codeArea: [
      {
         css:`.setting-btn {
          background: #38925e;
          width: 170px;
          height: 50px;
          border-radius: 10px;
          cursor: pointer;
          overflow: hidden;
          /*To Make Div In Center*/
          margin: auto;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }
        
        .setting-btn:before {
          content: "Setting";
          color: #FFF;
          font-family: arial;
          font-size: 20px;
          line-height: 50px;
          position: absolute;
          margin: auto;
          /* margin-left: 50%; */
          transition: all 1s ease-in-out;
          transform: translate(-50%, 0%);
        }
        
        .setting-btn:hover:before {
          position: absolute;
          transform: translateX(100px);
          transition: all 1s ease-in-out;
        }
        
        #setting {
          color: #FFF;
          font-size: 25px;
          margin:0.75rem;
          line-height: 50px;
          display: flex;
          justify-content: center;
          align-content: center;
          transform: translateX(-120px);
          transition: all 1s ease-in-out;
        }
        
        .setting-btn:hover #setting {
          transform: translateX(0px);
          animation: setting 2s ease-in-out infinite;
          animation-delay: .9s;
          transition: all 1s ease-in-out;
        }
        
        @keyframes setting {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(359deg);
          }
        }`,
         btncode: `<i class="bi bi-gear-wide"  id="setting" ></i>`,
         cls:"setting-btn",
      }
    ]
   },
   { header: {
    itemType: "",
    headerCode: ``
   },
   codeArea: [
    {
       css:  ` `,
       btncode: ``,
       cls:"",
    }, 
  ]

  },

];

export default all;
