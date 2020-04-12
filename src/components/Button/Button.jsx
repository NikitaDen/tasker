import React from "react";

const Button = (props) => {
    return (
        <img src={props.src}
             className={props.className}
             onClick={props.onClickFunc}
             onKeyPress={props.onKeyPressFunc ? props.onKeyPressFunc : null}
             alt={props.alt}/>
    )
};

export default Button;