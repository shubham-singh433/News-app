import React, { Component } from "react";
export default class Newscont extends Component {
  render() {
    let { title, description, urlToImage, url } = this.props;
    return (
      <div className="text-center">
        <div className="card-text-center" style={{ width: "18rem" }}>
          <img src={urlToImage} className="card-img-top" alt=".." />
          <div className="card-body-text-center">
            <h5 className="card-title-text-center">{title}</h5>
            <p className="card-text-text-center">{description}</p>
            <a href={url} className="btn btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
