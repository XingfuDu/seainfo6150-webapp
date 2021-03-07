import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem";

const ArticleList = (props) => {
    const lists = (
        <ul>
            {props.content.map(prop=>{
                return <li key={prop.slug}><ArticleListItem content={prop}/></li>;
            })}
        </ul>
    );
    return lists;
}; 

export default ArticleList;
