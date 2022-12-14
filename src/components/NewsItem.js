import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgSrc, newsUrl } = this.props;
    return (
      <div className="card mb-3">
        <img
          src={
            imgSrc
              ? imgSrc
              : "https://i.ytimg.com/vi/yY0ciWj8oco/maxresdefault.jpg"
          }
          className="card-img-top"
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title} ...</h5>
          <p className="card-text">{description} ...</p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-primary btn-sm"
            rel="noreferrer"
          >
            Read more
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
