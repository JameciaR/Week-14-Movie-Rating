import React from "react";
import Movie from "./Movie";

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.globalState = this.props.globalState;
  }

  render() {
    let Movies;
    //basically saying is there any comments within our state prop
    if (this.globalState.movies) {
      //we will modifiy this code, this is going to take both the comment and the index of the posistion of that comment in that array
      //it makes the comment key the index and uses the spread method to make sure its the current comment
      Movies = this.globalState.movies.map((movie, index) => (
        <Movie key={index} {...movie} globalState={this.globalState} />
      ));
    }

    return <div>{Movies}</div>;
  }
}
