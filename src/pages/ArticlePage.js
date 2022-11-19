import React from "react";
import { useParams } from "react-router-dom";
import articles from './article-content'

const ArticlePage = function (){
    const Params = useParams();
    const {articleId} = Params;

    const article = articles.find(article => article.name === articleId);

    return (
        <div>
            <h1>{article.name}</h1>
            {article.content.map((paragraph, index)=>(
                <p key = {index}>{paragraph}</p>
            ))}
        </div>
    )
}

export default ArticlePage;