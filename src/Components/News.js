import React from "react";
import Sports from "./Sports";
import Topheadlines from "./Topheadlines";

export default function News() {
  return (
    <>
      {/* <Topheadlines /> */}
      <Sports
        category="General"
        pagesize="9"
        bgcolor="white"
        textcolor="black"
        heading="Top Headlines"
      />
      <Sports
        category="Sports"
        pagesize="3"
        bgcolor="#292a2d"
        textcolor="white"
        heading="Sports"
      />
      <Sports
        category="Business"
        pagesize="3"
        bgcolor="#292a2d"
        textcolor="white"
        heading="Business"
      />
      <Sports
        category="Technology"
        pagesize="3"
        bgcolor="#292a2d"
        textcolor="white"
        heading="Technology"
      />
      <Sports
        category="Entertainment"
        pagesize="3"
        bgcolor="#292a2d"
        textcolor="white"
        heading="Entertainment"
      />
      <Sports
        category="Health"
        pagesize="3"
        bgcolor="#292a2d"
        textcolor="white"
        heading="Health"
      />
      <Sports
        category="General"
        pagesize="12"
        bgcolor="white"
        textcolor="black"
        heading="General"
      />
    </>
  );
}
