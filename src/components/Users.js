import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { featcUsers } from "../action/action";
import {
  DataTable,
  TableHeader,
  TableBody,
  TableRow,
  TableColumn,
  Button
} from "react-md";
import { Link } from "react-router-dom";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filed: ""
    };
  }
  componentDidMount() {
    const { featcUsers } = this.props;
    featcUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <section>
        <DataTable plain>
          <TableHeader>
            <TableRow>
              <TableColumn>id</TableColumn>
              <TableColumn>name</TableColumn>
              <TableColumn>user name</TableColumn>
              <TableColumn>email</TableColumn>
              <TableColumn></TableColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users &&
              users.map((elem, index) => (
                <TableRow key={index}>
                  <TableColumn>{elem.id}</TableColumn>
                  <TableColumn>{elem.name}</TableColumn>
                  <TableColumn>{elem.username}</TableColumn>
                  <TableColumn>{elem.email}</TableColumn>
                  <TableColumn>
                    <Link to={`/posts/user/${elem.id}`}>
                      <Button className="control-buttons" flat>
                        Posts
                      </Button>
                    </Link>
                  </TableColumn>
                </TableRow>
              ))}
          </TableBody>
        </DataTable>
      </section>
    );
  }
}

const mapStateToProps = state => {
  const { users } = state;
  return { users };
};

const mapDispatchToProps = { featcUsers };

Users.propType = { featcUsers: PropTypes.func, users: PropTypes.array };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
