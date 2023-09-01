const animationbtn2 = [
    {
        css: ` .btn-hover-animate {
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
        cls: "btn-hover-animate",
        code:`
        <i>H</i><i>o</i><i>v</i><i>e</i><i>r</i>\n<i>t</i><i>h</i><i>e</i>\n<i>B</i><i>u</i><i>t</i><i>t</i><i>o</i><i>n</i>\n`
      },
  
]


export default animationbtn2