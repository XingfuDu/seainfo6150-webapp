import React from "react";

const articleTextToggleButton = (props) => {
    return <button onClick={props.clicked}>{props.buttonText}</button>
};

export default articleTextToggleButton;