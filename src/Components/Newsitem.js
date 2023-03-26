import React from "react";

export default function Newsitem(props) {
  let { title, date, description, imageUrl, newsUrl, source } = props;
  return (
    <>
      <div
        className="card"
        style={{
          height: "400px",
          width: "350px",
          padding: "0px",
          margin: "10px 0px 20px 0px",
        }}
      >
        <span
          className="position-absolute top-0 start-900 translate-miiddle badge rounded-pill bg-danger"
          style={{ right: "-10%", zIndex: "1" }}
        >
          {source}
          {/* <span className="visually-hidden"></span> */}
        </span>

        <img
          src={imageUrl}
          className="card-img-top"
          alt="unable to retrieve image from API"
          width={200}
          height={200}
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          {/* <p className="card-text">
            {description}...
          </p> */}
          <p className="card-text">{new Date(date).toLocaleString()}</p>
          <a href={newsUrl} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </>
  );
}
