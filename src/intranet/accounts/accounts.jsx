import React, { Component } from "react";
import styled from "styled-components";
import Box from "../../common/box";
import Button from "../../common/button";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { updateAccounts } from "../../services/actions";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  & > div {
    width: 48%;
  }
`;

const Form = styled.form``;

const Fsection = styled.section`
  padding: 20px;
  input,
  textarea,
  select {
    padding: 5px 10px;
    width: 100%;
    background-color: ${p => p.theme.bgColor};
    border: none;
    outline: none;
    color: ${p => p.theme.cWhite};
  }
  &#image {
    text-align: center;
    & > div {
      position: relative;
    }
    & > div div {
      visibility: hidden;
      height: 40px;
      width: 40px;
      border-radius: 20px;
      background-color: ${p => p.theme.cOrange};
      color: white;
      text-align: center;
      line-height: 40px;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      margin: auto;
      cursor: pointer;
      &:hover {
        visibility: visible;
      }
    }
    img {
      &:hover + div {
        visibility: visible;
      }
      cursor: pointer;
      display: block;
      width: 250px;
      height: 250px;
      background-color: ${p => p.theme.bgColor};
      margin: 25px auto;
      object-fit: cover;
      overflow: hidden;
    }
  }
`;

class accounts extends Component {
  state = {
    selection: "null",
    accounts: {}
  };
  componentDidMount() {
    console.log(this.props);
    const accounts = { ...this.props.accounts };
    console.log(accounts);
    this.setState({ accounts });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.accounts !== this.props.accounts) {
      const accounts = { ...this.props.accounts };
      this.setState({ accounts });
    }
  }
  updateAccounts = e => {
    e.preventDefault();
    this.props.updateAccounts(this.state.accounts);
    alert("The account has been updated");
  };
  deleteImage = () => {
    const { selection } = this.state;
    if (selection === "null") return null;
    const accounts = { ...this.state.accounts };
    accounts[selection].profilePic = null;
    this.setState({ accounts });
  };
  changeValue = e => {
    const { selection, accounts } = this.state;
    if (selection === "null") return null;
    const { value, name, files } = e.target;
    const account = files
      ? {
          ...accounts[selection],
          [name]: URL.createObjectURL(files[0])
        }
      : { ...accounts[selection], [name]: value };
    accounts[selection] = account;
    this.setState({ accounts });
    console.log(accounts);
  };
  changeSelection = e => {
    const selection = e.target.value;
    this.setState({ selection });
    console.log(this.state.accounts);
  };
  upload = e => {
    e.preventDefault();
    console.log(this.state.selection);
    if (this.state.selection === "null") return null;
    this.refs.fileUploader.click();
  };
  render() {
    const { accounts, selection } = this.state;
    const account = accounts[selection] || {};
    return (
      <div>
        <h2>Accounts</h2>
        <Box title="List of accounts">
          <Fsection>
            <p>Choose the account</p>
            <select
              name="category"
              onChange={this.changeSelection}
              value={selection}
            >
              <option disabled value="null">
                {" "}
                -- SELECT AN OPTION --
              </option>
              {Object.keys(accounts).map((i, k) => (
                <option value={i} key={k}>
                  {i}
                </option>
              ))}
            </select>
          </Fsection>
        </Box>
        <Container>
          <Box title="Change Avatar">
            <Fsection id="image">
              <div onClick={this.deleteImage}>
                <img
                  src={
                    account.profilePic ||
                    "https://www.tibs.org.tw/images/default.jpg"
                  }
                  alt=""
                />
                <div>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </div>
              </div>
              <Button text="Change Image" action={this.upload} />
              <input
                type="file"
                name="profilePic"
                ref="fileUploader"
                style={{ display: "none" }}
                onChange={this.changeValue}
              />
            </Fsection>
          </Box>
          <Box title="Accoun Settings">
            <Form>
              <Fsection>
                <p>Name</p>
                <input
                  type="text"
                  name="name"
                  defaultValue={account.name}
                  onChange={this.changeValue}
                />
              </Fsection>
              <Fsection>
                <p>Email</p>
                <input
                  type="email"
                  name="email"
                  defaultValue={account.email}
                  onChange={this.changeValue}
                />
              </Fsection>
              <Fsection>
                <p>Password</p>
                <input
                  type="password"
                  name="password"
                  defaultValue={account.password}
                  onChange={this.changeValue}
                />
              </Fsection>
              <Fsection>
                <p>Phone</p>
                <input
                  type="text"
                  name="name"
                  defaultValue={account.phone}
                  onChange={this.changeValue}
                />
              </Fsection>
              <Fsection>
                <Button text="Update account" action={this.updateAccounts} />
              </Fsection>
            </Form>
          </Box>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    accounts: state.accountsPage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateAccounts: data => dispatch(updateAccounts(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(accounts);
