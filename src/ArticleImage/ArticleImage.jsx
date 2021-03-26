import React from 'react';
import styles from './ArticleImage.module.css';

const ArticleImage = (props) => {
    return (<img className={styles.Image} src={props.url} alt={props.title}></img>);
}

export default ArticleImage;