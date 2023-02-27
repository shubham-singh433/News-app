import React, { Component } from "react";
export default class Newscont extends Component {
  render() {
    let { title, description, urlToImage, url, author, publishedAt, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-info"
            style={{ zIndex: "1", left: "90%" }}
          >
            {source}
          </span>
          <img src={urlToImage} className="card-img-top" alt=".." />
          <div className="card-body-text-center">
            <h5 className="card-title-text-center">{title}</h5>
            <p className="card-text-text-center">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                <b>
                  {author} , {new Date(publishedAt).toGMTString()}
                </b>
              </small>
            </p>
            <a href={url} className="btn btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
