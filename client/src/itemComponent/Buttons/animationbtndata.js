const animationbtn = [
    {
      css: `
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
      cls: "slide_from_left  slide",
    
    },
    {
      css: `    .slide {
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
      }`,
      cls: "slide_from_right  slide",
    
    },
    {
      css: `    .slide {
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
      }`,
      cls: "slide_from_top  slide",
    
    },
    {
      css: `    .slide {
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
      }`, 
      cls: "slide_from_bottom slide",
    },

  ]; 


  export default animationbtn