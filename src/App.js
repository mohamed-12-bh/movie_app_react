import React, { Component } from "react";
import "./App.css";
import NavBar from "./Component/NavBar";
import MovieList from "./Component/MovieList";
import ModalCard from "./Component/ModalCard";
class App extends Component {
  state = {
    movies: [
      {
        id: 1,
        title: "Spider Man",
        img:
          "https://fr.web.img3.acsta.net/medias/nmedia/18/35/62/65/18754165.jpg",
        raiting: 4,
      },
      {
        id: 2,
        title: "Ninja Turtles",
        img:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR9YzPsDCmduE8bLXjpZHYvWk04x3e4f13bKFs2DM01Cz0p1W7m",
        raiting: 5,
      },
      {
        id: 3,
        title: "Simba",
        img:
          "https://fr.web.img4.acsta.net/r_1280_720/newsv7/19/05/31/12/05/04810420.jpg",
        raiting: 5,
      },
      {
        id: 4,
        title: "Vikings",
        img:
          "https://media.senscritique.com/media/000018027320/source_big/Viking_Destiny.jpg",
        raiting: 3,
      },
    ],
    minRaiting: 1,
    titleFilter: "",
  };

  addNewMovie = (title, img, raiting) => {
    return this.setState({
      movies: [
        ...this.state.movies,
        {
          title: title,
          img: img,
          raiting: Number(raiting),
        },
      ],
      title: " ",
      img: " ",
      raiting: 0,
    });
  };

  fliterMovie = () => {
    return this.state.movies.filter(
      (el) =>
        el.raiting >= this.state.minRaiting &&
        el.title.toLowerCase().includes(this.state.titleFilter.toLowerCase())
    );
  };

  changeValueFilter = (newvalue) => {
    this.setState({ titleFilter: newvalue });
  };

  render() {
    return (
      <div>
        <NavBar
          count={this.state.minRaiting}
          onChangeRatingNew={(indice) => {
            this.setState({
              minRaiting: indice,
            });
            console.log(indice);
          }}
          changeValueFilter={this.changeValueFilter}
        />
        <MovieList movies={this.fliterMovie()} />
        <div className="d-flex justify-content-center m-3 p-3">
          <ModalCard
            addNewMovie={(title, img, raiting) =>
              this.addNewMovie(title, img, raiting)
            }
          />
        </div>
      </div>
    );
  }
}
export default App;
