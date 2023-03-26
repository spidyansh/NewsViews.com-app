import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";

export default function Topheadlines() {
  const [articles, setarticles] = useState([]);
  const updateNews = async () => {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=f97d4d6864824d38a5b85be62b98e1dd&pageSize=9";
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(parsedData.articles);
  };

  useEffect(() => {
    updateNews();
  }, []);

  return (
    <>
      <div className="container my-3">
        <h2>NewsViews - Top Headlines &gt;</h2>
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title.slice(1, 50)}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  date={element.publishedAt}
                  source={element.source.name}
                ></Newsitem>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
