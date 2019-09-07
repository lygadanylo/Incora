import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Card, TextField } from "react-md";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "" };
  }

  handelSavePost = () => {
    const { title, body } = this.state;
    const { createPost, userId } = this.props;
    createPost({ title, body, userId });
    this.setState({ title: "", body: "" });
  };

  render() {
    const { TogglePopup } = this.props;
    const { title, body } = this.state;
    return (
      <section id="popup">
        <Card className="form-wrapper">
          <Button
            className="control-button"
            flat
            onClick={() => TogglePopup(false)}
          >
            close
          </Button>
          <div className="fileds">
            <TextField
              id="title"
              label="Title"
              lineDirection="center"
              className="input-field"
              value={title}
              onChange={value => this.setState({ title: value })}
            />
            <TextField
              id="body"
              label="Post text"
              className="input-field"
              value={body}
              onChange={value => this.setState({ body: value })}
            />
          </div>
          <Button className="action-button" flat onClick={this.handelSavePost}>
            save
          </Button>
        </Card>
      </section>
    );
  }
}

CreatePost.propType = {
  TogglePopup: PropTypes.func,
  createPost: PropTypes.func,
  userId: PropTypes.number
};

export default CreatePost;
