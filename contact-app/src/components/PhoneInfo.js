import React, { Component, Fragment } from "react";

class PhoneInfo extends Component {
  state = {
    editing: false
  };

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  handleToggleEdit = () => {
    this.setState({
      editing: !this.state.editing
    });
  };

  render() {
    const { name, phone, id } = this.props.info;
    const { editing } = this.state;

    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px"
    };
    return (
      <div style={style}>
        {editing ? (
          <Fragment>
            <div>
              <input />
            </div>
            <div>
              <input />
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div>
              <b>{name}</b>
            </div>
            <div>{phone}</div>
          </Fragment>
        )}
        <div>Key : {id}</div>
        <button onClick={this.handleRemove}>삭제</button>
        <button onClick={this.handleToggleEdit}>수정</button>
      </div>
    );
  }
}

export default PhoneInfo;
