import "./App.css";
import React from "react";
import MovieList from "./components/MovieList";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";

const globalState = {
  movies: [
    {
      id: 0,
      image: "./images/encanto.jpg",
      Title: "Encanto",
      Date: "2022 (United States)",
      Genre: "Fantasy",
      Synopsis:
        "Encanto follows a multigenerational Colombian family, the Madrigals, led by a matriarch (Botero) whose children and grandchildren—except for Mirabel Madrigal (Beatriz)—receive magical gifts from a miracle that helps them serve the people in their rural community called the Encanto.",
      totalVotes: 0,
      sumVotes: 0,
      averageRating: 0,
    },

    {
      id: 1,
      image: "./images/turning red.jpg",
      Title: "Turning Red",
      Date: "2022 (United States)",
      Genre: "Animated, Comedy",
      Synopsis:
        "A 13-year-old girl named Meilin turns into a giant red panda whenever she gets too excited.",
      totalVotes: 0,
      sumVotes: 0,
      averageRating: 0,
    },
  ],
};

function App() {
  return (
    <div className="App">
      <body id="color">
        <Navbar />
        <span>
          <MovieList globalState={globalState} />
        </span>
      </body>
    </div>
  );
}

export default App;
