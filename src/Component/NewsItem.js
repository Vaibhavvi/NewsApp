import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageurl, newsurl, author, date, source } = this.props;
        return (
            <>
                <div className="card my-3">
                    
                <span className="badge badge-danger text-dark">{!author? 'Vaibhav Dubey':source}</span>
                    <img src={!imageurl ? "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/65f6a7b4cf33cf1669dc473eaa060e35.jpg" : imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-muted'> By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={!newsurl?' "https://www.huffpost.com/entry/us-election-2024-musk-philadelphia-town-hall_n_6711cd79e4b0b6831a1290b3':newsurl} target='-_blank' className="btn btn-outline-primary">Read more</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
