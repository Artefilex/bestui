const animationbtn = [
    {
      css: `
      .start-btns {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 1rem;
        width: var(--size-xl);
        justify-content: space-between;
        padding: var(--display-9);
        background: transparent;
        border: var(--border-white);
        border-radius: 3rem;
        cursor: pointer;
      }
      .start-btns .icon {
        font-size: 2em;
        transition: filter 0.3s ease-in-out;
      }
      .start-btns span {
        color: var(--dark-bg);
        filter: invert(1);
        width: var(--size-xl);
        text-align: start;
        transition: opacity 0.3s ease-in-out;
      }
      .start-btns:active {
        animation: shakeAndHide 1s ease-in-out;
      }
      @keyframes shakeAndHide {
        0% {
          transform: translateY(0);
        }
        20% {
          transform: translateY(-0.15rem);
        }
        100% {
          transform: translateY(100);
        }
      }
      .start-btns:hover .icon {
        animation: slideRight 1s ease-in-out;
        position: relative;
        color: var(--light-color)
      }
      @keyframes slideRight {
        0% {
          left: 0;
        }
        100% {
          left: var(--size-xl);
        }
      }
      .start-btns:hover span {
        animation: fadeOut 1.5s ease-in-out;
      }
      @keyframes fadeOut {
        0% {
          opacity: 1;
          display: block;
        }
        50% {
          opacity: 0;
          display: none;
        }
        100%{
            opacity: 1;
            display: block;
        }
      }
      
      `,
      cls: "start-btns ",
      code:  "<div classname='icon'> Z </div>  <span>Get Start</span> "
    },

  ]; 


  export default animationbtn