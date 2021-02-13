import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { StarFill, EyeSlashFill, EyeFill } from "react-bootstrap-icons";
import "./Movie.css";
import axios from "axios";

const KEY = "1e448e0dfcdbb565f5d329820065b4d2";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      genres: [],
      watched: false,
    };

    this.setWatched = this.setWatched.bind(this);
  }

  componentDidMount() {
    this.getMovieInfo();
    this.getWatched();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.movie.id !== prevProps.movie.id) {
      this.getMovieInfo();
    }

    if (this.state.info !== prevState.info) {
      this.getWatched();
    }
  }

  getWatched = () => {
    if (localStorage.getItem(this.props.movie.id) === "true") {
      this.setState({
        watched: true,
      });
    } else {
      this.setState({
        watched: false,
      });
    }
  };

  setWatched = () => {
    if (this.state.watched) {
      this.setState({
        watched: false,
      });
      localStorage.setItem(this.props.movie.id, "false");
    } else {
      this.setState({
        watched: true,
      });
      localStorage.setItem(this.props.movie.id, "true");
    }
  };

  getMovieInfo = async () => {
    const url = "https://api.themoviedb.org/3/movie/" + this.props.movie.id;
    const response = await axios.get(url, {
      params: {
        api_key: KEY,
      },
    });

    this.setState({
      info: response.data,
      genres: response.data.genres,
    });
  };

  render() {
    return (
      <div className="col-md-4 col-sm-6 col-xs-12 xs-mb50">
        <div className="movie">
          <Card style={{ width: "22rem" }}>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`}
            />
            <Card.Body>
              <Card.Title>
                <h2>{this.props.movie.title}</h2>
              </Card.Title>
              <div className="movie-info">
                <div className="rating">
                  <StarFill className="star-icon" />
                  {this.props.movie.vote_average} /10
                  <span className="movie-genres">
                    {this.state.genres.slice(0, 4).map(function (genre, index) {
                      return (
                        <span key={genre.id}>
                          {(index ? ", " : "") + genre.name}
                        </span>
                      );
                    })}
                  </span>
                </div>
              </div>
              <div className="movie-overview">
                <Card.Text>{this.props.movie.overview.slice(0, 150)}</Card.Text>
              </div>
              <div>
                <Button
                  variant="read-more"
                  href={`https://www.imdb.com/title/${this.state.info.imdb_id}`}
                >
                  Read More
                </Button>
                <span
                  id={this.props.movie.id}
                  className="movie-watched__button"
                  onClick={this.setWatched}
                >
                  {this.state.watched ? <EyeFill /> : <EyeSlashFill />}
                </span>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Movie;
