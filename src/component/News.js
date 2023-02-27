import React, { Component } from "react";
import Newscont from "./Newscont";
import Spinner from "./Spinner";
import { propTypes } from "react-bootstrap/esm/Image";
export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    categories: "general",
  };
  static prop = {
    country: propTypes.string,
    pageSize: propTypes.number,
    categories: propTypes.string,
  };
  constructor() {
    super();
    this.state = {
      article: [],
      page: 1,
      totalResult: 1,
      loading: false,
    };
  }
  async componentDidMount() {
    let data = await fetch(
      `https://newsapi.org/v2/everything?q=${this.props.categories}&apiKey=bf815386ca8a43689bf8983df7237436&pageSize=${this.props.pageSize}`
    );
    this.setState({ loading: true });
    let ParseData = await data.json();
    this.setState({
      article: ParseData.articles,
      totalResult: ParseData.totalResults,
      loading: false,
    });
    console.log(this.article);
  }
  handleNext = async () => {
    let data = await fetch(
      `https://newsapi.org/v2/everything?q=${
        this.props.categories
      }&apiKey=bf815386ca8a43689bf8983df7237436&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`
    );
    this.setState({ loading: true });
    let ParseData = await data.json();
    console.log(ParseData);
    this.setState({
      page: this.state.page + 1,
      article: ParseData.articles,
      totalResult: ParseData.totalResults,
      loading: false,
    });
  };
  handlePrev = async () => {
    let data = await fetch(
      `https://newsapi.org/v2/everything?q=${
        this.props.categories
      }&apiKey=bf815386ca8a43689bf8983df7237436&page=${
        this.state.page - 1
      }&pageSize=${this.props.pageSize}`
    );
    this.setState({ loading: true });
    let ParseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      article: ParseData.articles,
      totalResult: ParseData.totalResults,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{ padding: "10px" }}>
          NewsMonkey - Get your news fresh as your coffee
        </h2>
        {this.state.loading && <Spinner />}
        <div className="row md-3">
          {!this.state.loading &&
            this.state.article.map((element) => {
              return (
                <div className="col md-3 my-3-text-center" key={element.url}>
                  <Newscont
                    title={element.title ? element.title : ""}
                    description={
                      element.description
                        ? element.description
                        : "click to read more"
                    }
                    urlToImage={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://th.bing.com/th/id/R.efe0d11efdc189fd0b70b375b791a8a1?rik=Wt57NAfAeks1Mg&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1166824%2fimages%2fo-NEWSPAPER-COFFEE-facebook.jpg&ehk=ST0iGrPgArcE3gMOwYAdc60SH5JAp%2bVviQAcEICVwfo%3d&risl=&pid=ImgRaw&r=0"
                    }
                    url={element.url}
                    author={element.author ? element.author : "Unknown"}
                    publishedAt={
                      element.publishedAt ? element.publishedAt : "00:00 hrs"
                    }
                    source={element.source.name}
                  />
                </div>
              );
            })}
          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrev}
              disabled={this.state.page === 1}
            >
              Prev
            </button>
            <button
              type="button"
              className="btn btn-dark"
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResult / 10)
              }
              onClick={this.handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}
