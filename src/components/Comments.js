import React, { Component } from "react";
import { connect } from "react-redux";
import { detailInfo, deleteComment, editComment } from "../action/action";
import { TogglePopup, Message } from "../action/actionType";
import PropTypes from "prop-types";
import { Card, CardTitle, CardText, Button } from "react-md";
import { Link } from "react-router-dom";
import EditComment from "./EditComment";

class DetailInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "", postId: "" };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    const { detailInfo, TogglePopup, Message } = this.props;
    Message(false);
    TogglePopup(false);
    detailInfo(id);
  }
  notification = () => {
    const { Message } = this.props;
    setTimeout(() => {
      Message(false);
    }, 1500);
  };
  render() {
    const {
      postInfo,
      deleteComment,
      TogglePopup,
      togglePopup,
      editComment,
      message
    } = this.props;
    const { userId } = this.props.match.params;
    const { title, body, postId } = this.state;
    console.log(message);
    return (
      <section id="comments">
        {message && (
          <div className="notification">
            <p>Action complited{message && this.notification()}</p>
          </div>
        )}
        <div className={`${togglePopup}-blur || ${message}-blur`}>
          <Link to={`/posts/user/${userId}`}>
            <Button className="page-back" flat>
              Back
            </Button>
          </Link>

          {postInfo && (
            <div className="comments-wrapper">
              {postInfo.map((elem, index) => (
                <Card key={index} className="comment">
                  <CardTitle title={elem.name} />
                  <CardText>
                    <p>{elem.email}</p>
                    <p>{elem.body}</p>
                  </CardText>
                  <div className="control-buttons">
                    <Button
                      onClick={() => {
                        TogglePopup(true);
                        this.setState({ title: elem.name });
                        this.setState({ body: elem.body });
                        this.setState({ postId: elem.postId });
                      }}
                      flat
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => deleteComment(elem.postId, elem.id)}
                      flat
                    >
                      Delete
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
        {togglePopup && (
          <EditComment
            TogglePopup={TogglePopup}
            title={title}
            body={body}
            postId={postId}
            editComment={editComment}
          />
        )}
      </section>
    );
  }
}

const mapStateToProps = state => {
  const { postInfo, togglePopup, message } = state;
  return { postInfo, togglePopup, message };
};

const mapDispatchToProps = {
  detailInfo,
  deleteComment,
  TogglePopup,
  editComment,
  Message
};

DetailInfo.propType = {
  detailInfo: PropTypes.func,
  postInfo: PropTypes.array,
  deletePost: PropTypes.func,
  TogglePopup: PropTypes.func,
  togglePopup: PropTypes.bool,
  editComment: PropTypes.func,
  Message: PropTypes.func,
  message: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailInfo);
