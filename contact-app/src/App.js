import React, { Component } from "react";

import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
  id = 4;

  state = {
    information: [
      {
        id: 0,
        name: "홍길동",
        phone: "010-3903-2929"
      },
      {
        id: 1,
        name: "오이시",
        phone: "010-3903-2929"
      },
      {
        id: 2,
        name: "권택림",
        phone: "010-3903-2929"
      },
      {
        id: 3,
        name: "최성욱",
        phone: "010-3903-2929"
      }
    ],
    keyword: ""
  };

  handleChange = e => {
    this.setState({
      keyword: e.target.value
    });
  };

  handleCreate = data => {
    const { information } = this.state;
    this.setState({
      information: information.concat(
        Object.assign({}, data, {
          id: this.id++
        })
      )
    });
  };

  handleRemove = id => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  };

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(info => {
        if (info.id === id) {
          return {
            id,
            ...data
          };
        }
        return info;
      })
    });
  };

  // Rendering to Page
  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <input
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="검색.."
        />
        <PhoneInfoList
          data={this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
