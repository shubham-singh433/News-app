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
  static propTypes = {
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
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categories}&apiKey=bf815386ca8a43689bf8983df7237436&pageSize=${this.props.pageSize}`
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
      `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.categories
      }&apiKey=bf815386ca8a43689bf8983df7237436&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`
    );
    this.setState({ loading: true });
    let ParseData = await data.json();
    this.setState({
      page: this.state.page + 1,
      article: ParseData.articles,
      totalResult: ParseData.totalResults,
      loading: false,
    });
  };
  handlePrev = async () => {
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
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
                        : "https://dnyuz.com/wp-content/uploads/2023/02/One-Solution-to-the-Housing-Crisis-Just-Make-People-Rich.jpg"
                    }
                    url={element.url}
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
