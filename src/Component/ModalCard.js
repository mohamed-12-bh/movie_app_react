import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
export default class M extends Component {
  state = {
    show: false,
    title: "",
    img: "",
    raiting: '',
  };

  handleModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  // ratingHandler = (event) => {
  //   event.target.value = event.target.value.replace(/[^1-5]/g, "");
  //   this.setState({
  //     raiting: event.target.value,
  //   });
  // };
  addHandler = (name, imag, rating) => {
    console.log(this.state);
    this.props.addNewMovie(name, imag, rating);
    this.setState({
      title: " ",
      img: " ",
      raiting: '',
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleModal}>Add new movie</Button>
        <Modal show={this.state.show}>
          <Modal.Header>
            <p
              style={{
                fontSize: "x-large",
                color: "gray",
                fontWeight: "bold",
              }}
            >
              Movies Card
            </p>
            <p
              onClick={this.handleModal}
              style={{
                fontSize: "x-large",
                color: "gray",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              X
            </p>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label forhtml="titleModal">Enter name movie</label>
              <input
                className="form-control"
                type="text"
                id="titleModal"
                name="title"
                onChange={this.handleChange}
                value={this.state.title}
              />
            </div>
            <div>
              <label forhtml="imageModal">Enter image movie</label>
              <input
                className="form-control"
                type="text"
                id="imageModal"
                name="img"
                onChange={this.handleChange}
                value={this.state.img}
              />
            </div>
            <div>
              <label forhtml="ratingModal">Enter raiting movie</label>
              <input
                className="form-control"
                type="text"
                id="ratingModal"
                name="raiting"
                onChange={this.handleChange}
                value={this.state.raiting}
              />
            </div>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-around">
            <Button onClick={this.handleModal}>Close</Button>
            <Button
              onClick={() =>
                this.addHandler(
                  this.state.title,
                  this.state.img,
                  this.state.raiting
                )
              }
            >
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
