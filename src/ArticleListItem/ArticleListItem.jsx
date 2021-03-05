import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const ArticleListItem = (props) => {
    return (
        <div>
            <h1>{props.content.title}</h1>
            <time dateTime={props.content.timeStamp}>{props.content.displayDate}</time>
            <HTMLText text={props.content.shortText} />
        </div>
    ); 
};

export default ArticleListItem;
