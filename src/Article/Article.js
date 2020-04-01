import React from 'react';
import './Article.css';
import Header from '../Header/Header';

function Article(props) {
    return (
        <div>
            <Header titulo="Article" autor={props.autor} />

            <div className="Contenido">{props.texto}</div>

            <div className="Footer">{props.fecha}</div>
        </div>
    );
}
export default Article;