import React, { useState } from "react";
import ReviewForm from "./ReviewForm";

export default class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviews: new Array() };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(formState) {
    const newReviews = this.state.reviews.slice();
    newReviews.push(formState);
    this.setState({
      reviews: newReviews,
    });
  }

  render() {
    return (
      <div className="container">
        {this.state.reviews.map(function (review, index) {
          return <div key={index}> {review.userReview}</div>;
        })}
        <ReviewForm
          onFormSubmit={(formState) => this.onFormSubmit(formState)}
        />
      </div>
    );
  }
}
