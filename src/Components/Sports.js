import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sports(props) {
  const [sports, setsports] = useState([]);
  const updateNews = async () => {
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=f97d4d6864824d38a5b85be62b98e1dd&pageSize=${props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setsports(parsedData.articles);
  };

  useEffect(() => {
    updateNews();
  }, []);

  return (
    <>
      <div className="container" style={{backgroundColor:`${props.bgcolor}`}}>
        <div className="tagline"><h2 style={{color:`${props.textcolor}`}}>{props.heading} &gt;  </h2> 
        <a href="" className="btn btn-primary">
            Read More
          </a></div>
        
        <div className="row" >
          {sports.map((element) => {
            return (
              <div className="col" key={element.url}>
                <Newsitem
                  title={element.title.slice(0,70)}
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