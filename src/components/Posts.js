import React, { Component } from "react";
import { connect } from "react-redux";
import { featcPosts, createPost } from "../action/action";
import { TogglePopup } from "../action/actionType";
import PropTypes from "prop-types";
import { Card, CardTitle, CardText, Button } from "react-md";
import FormPost from "./CreatePost";
import { Link } from "react-router-dom";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    const { featcPosts, TogglePopup } = this.props;
    featcPosts({ id });
    TogglePopup(false);
  }
  render() {
    const { posts, togglePopup, TogglePopup, createPost } = this.props;
    return (
      <section id="posts">
        {posts && (
          <div className={`${togglePopup}-blur`}>
            <header>
              <h1>User id: {posts[0].userId}</h1>
              <Button
                onClick={() => TogglePopup(true)}
                className="create-button"
                flat
              >
                Create new post
              </Button>
              <Link to="/">
                <Button className="page-back" flat>
                  Back
                </Button>
              </Link>
            </header>
            <div className="posts-wrapper">
              {posts.map((elem, index) => (
                <Card key={index} className="post">
                  <CardTitle title={elem.title} />
                  <CardText>
                    <p>{elem.body}</p>
                  </CardText>
                  <div className="control-buttons">
                    <Link to={`/post/comments/${elem.id}/${elem.userId}`}>
                      <Button flat>Comments</Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
        {togglePopup && (
          <FormPost
            TogglePopup={TogglePopup}
            createPost={createPost}
            userId={posts[0].userId}
          />
        )}
      </section>
    );
  }
}

const mapStateToProps = state => {
  const { posts, togglePopup } = state;
  return { posts, togglePopup };
};

const mapDispatchToProps = {
  featcPosts,
  TogglePopup,
  createPost
};
Posts.propTypes = {
  posts: PropTypes.object,
  featcPosts: PropTypes.func,
  togglePopup: PropTypes.bool,
  TogglePopup: PropTypes.func,
  createPost: PropTypes.func
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
