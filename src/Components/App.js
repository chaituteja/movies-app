import React from "react";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MovieList from "./MovieList/MovieList";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./App.css";

const KEY = "1e448e0dfcdbb565f5d329820065b4d2";

class App extends React.Component {
  state = {
    movies: [],
    pageCount: null,
    page: 1,
    query: "batman",
  };

  componentDidMount() {
    this.searchMovies();
  }
  searchMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          api_key: KEY,
          page: this.state.page,
          query: this.state.query,
        },
      }
    );
    this.setState({
      movies: response.data.results,
      pageCount: response.data.total_pages,
    });
  };

  handlePageChange = (e) => {
    const nextPage = e.selected + 1;
    this.setState(
      {
        page: nextPage,
      },
      () => {
        this.searchMovies();
      }
    );
  };

  handleSearchChange = (newQuery) => {
    this.setState(
      {
        query: newQuery,
      },
      () => {
        if (newQuery) {
          this.searchMovies();
        }
      }
    );
  };

  render() {
    return (
      <div>
        <Header value={this.state.query} onChange={this.handleSearchChange} />
        <Banner />
        <div className="container">
          <MovieList movies={this.state.movies} page={this.state.page} />
          <div className="col-md-12">
            <nav className="pagination">
              <ReactPaginate
                pageCount={this.state.pageCount}
                pageRange={2}
                marginPagesDisplayed={2}
                onPageChange={this.handlePageChange}
                containerClassName={"pagination-container"}
                previousLinkClassName={"pagination-page"}
                breakClassName={"pagination-page"}
                nextLinkClassName={"pagination-page"}
                pageClassName={"pagination-page"}
                disabledClassName={"pagination-disabled"}
                activeClassName={"pagination-active"}
              />
            </nav>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
