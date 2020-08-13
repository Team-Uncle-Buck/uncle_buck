import React from "react";
import {Col, Row, Container} from 'react-bootstrap';
import "./Learn.css";
import LearnText from "../components/LearnText";
import axios from 'axios';
import Video from '../components/Video';

class Learn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      videos: '',
    }
  }

  stateRefresh = () => {
    this.setState({
      videos: '',
    });
    this.getVideos()
      .then(res => this.setState({videos: res}))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    axios.get('/videos')
      .then(response => {
        this.setState({
          videos: response.data.items,
          isLoading: false
        })
      })
      .then(response => {
        console.log(this.state.videos);
      })
    .catch((error) => {
        console.log(error);
    });
  }

  render() {
    return (
      <section className="container">
        {this.state.isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <Container>
            <Row>
              <Col>
                <AboutText />
              </Col>
              <Col xs lg="3">
                <Container>
                  <Row>
                    {this.state.videos.map(video => (
                      <Video
                        key={video.id.videoId}
                        id={video.id.videoId}
                        title={video.snippet.title}
                        thumbnail={video.snippet.thumbnails.medium.url}
                      />
                    ))}
                  </Row>
                </Container>   
              </Col>
            </Row>
          </Container>
          //   <div class="col-6">
          //     <AboutText />
          //   </div>
          //   <div className="col-6 videos">
          //   {this.state.videos.map(video => (
          //     <Video
          //       key={video.id.videoId}
          //       id={video.id.videoId}
          //       title={video.snippet.title}
          //       thumbnail={video.snippet.thumbnails.default.url}
          //     />
          //   ))}
          //   </div>
          // </div>
          
        )}
      </section>
    );
  }
}

export default About;