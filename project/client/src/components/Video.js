import React from 'react';
import "./Video.css";

class Video extends React.Component {
  render() {
    return (
      <div className = "card ma-1">
        <a href={`https://www.youtube.com/watch?v=${this.props.id}`}>
          <img className = "card-img-top" src={this.props.thumbnail} alt={this.props.title} title={this.props.title} />
          <div className="card-body video__text">
            <h7 className="card-title">{this.props.title}</h7>
          </div>
        </a>
      </div>

    );
  }
};

export default Video; 