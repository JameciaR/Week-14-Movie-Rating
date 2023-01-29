import React from "react";
import StarRating from "./StarRating";

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // title: '',
      reviewInfo: "",
      starRating: null,
    };

    this.submitForm = this.submitForm.bind(this);
    this.handleReviewChange = this.handleReviewChange.bind(this);
    this.handleStarChange = this.handleStarChange.bind(this);
  }

  resetForm() {
    this.setState({
      // title: '',
      reviewInfo: "",
      starRating: null,
    });
  }

  submitForm() {
    this.props.onSubmit(this.state);
    this.resetForm();
  }

  handleInputChange(event) {
    // const target = event.target;
    // const name = target.name;
    // const value = target.value;
    this.setState({
      reviewInfo: event.target.value,
    });
  }

  handleReviewChange(event) {
    this.setState({
      reviewInfo: event.target.value,
    });
  }

  handleStarChange(event) {
    // const target = event.target;
    // const name = target.name;
    // const value = target.value;
    this.setState({
      starRating: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form>
          <h2>Tell us more?</h2>
          {/* <label htmlFor="titleInput"><b>Review Title:</b></label><br />
                    <input name="title" type="text" id="titleInput" value={this.state.title} onChange={this.handleInputChange} /><br /> */}
          <span className="text-muted">
            <StarRating
              value={this.state.starRating}
              onChange={this.handleStarChange}
            />
          </span>
          <label htmlFor="reviewInput">
            <b>Review:</b>
          </label>
          <br />
          <input
            name="reviewInfo"
            type="text"
            id="reviewInput"
            value={this.state.reviewInfo}
            onChange={this.handleReviewChange}
          />
          <br />
          <button className="btn btn-primary" onClick={this.submitForm}>
            Add New Review
          </button>
        </form>
      </div>
    );
  }
}
