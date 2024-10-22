import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropType, { } from 'prop-types'
import { toBeRequired } from '@testing-library/jest-dom/dist/matchers'

export class News extends Component {

  static defaultProps = {
    country: 'us',
    pageSize: 5,
    category: 'science'
  }
  static propType = {
    country: PropType.string,
    pageSize: PropType.number,
    category: PropType.string,
  }

  capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: toBeRequired,
      page: 2
    }
   document.title = `${this.capitalizeFirstLetter(this.props.category)}-NewNews`;
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=98a45ac6e0814cc7878e21c37dfb5e48&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=98a45ac6e0814cc7878e21c37dfb5e48&page=5&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
  }
  NexClick = async () => {
    this.setState({ page: this.state.page + 1 })
    this.updateNews();
  }

  PreClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  }

  render() {
    return (
      <div className='container md-3'>
        <h1 className='text-center' style={{ margin: '35px 0px' }}>NewNews-Top Headline from {this.capitalizeFirstLetter(this.props.category)} </h1>
        <div className="row">
            {Array.isArray(this.state.articles)&&this.state.articles?.map((element) => {
              return <div className="col-md-4" key={element.urlToImage}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.author} />
              </div>
            })}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.PreClick}>Previous &larr;</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.NexClick}>Next &rarr;</button>
        </div>
        <div className="className d-flex bg-Dark justify-content-center my-3">
          <h4>Developed By Vaibhav Dubey</h4>
        </div>
      </div>
    )
  }
}

export default News
