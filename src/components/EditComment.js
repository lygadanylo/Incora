import React, { Component } from "react";
import { Button, Card, TextField } from "react-md";
import PropTypes from "prop-types";

class EditComment extends Component {
  constructor(props) {
    super(props);
    this.state = { newTitle: null, newBody: null };
  }
  render() {
    const { TogglePopup, body, title, postId, editComment } = this.props;
    const { newTitle, newBody } = this.state;
    const defaultTitle = newTitle !== null ? newTitle : title;
    const defaultBody = newBody !== null ? newBody : body;
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
              value={defaultTitle}
              onChange={value => this.setState({ newTitle: value })}
            />
            <TextField
              id="body"
              label="Comment text"
              className="input-field"
              value={defaultBody}
              onChange={value => this.setState({ newBody: value })}
            />
          </div>
          <Button
            className="action-button"
            flat
            onClick={() => editComment({ newBody, newTitle, postId })}
          >
            save
          </Button>
        </Card>
      </section>
    );
  }
}

EditComment.propType = {
  TogglePopup: PropTypes.func,
  body: PropTypes.string,
  title: PropTypes.string,
  postId: PropTypes.number,
  editComment: PropTypes.func
};

export default EditComment;
