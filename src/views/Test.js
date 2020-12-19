import React, { Component } from 'react';
import { w3cwebsocket as WebSocket } from "websocket"

const ws = new WebSocket("ws://localhost:5000", "echo-protocol")

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commandList: [],
      command: '',
      username: "",
      password: ""
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  async componentDidMount() {
    ws.onmessage = msg => {
      this.setState({
        commandList:  [...this.state.commandList, JSON.parse(msg.data)]
      })
    }
  }

  onSend() {
    let data = {method: "command",
      command: this.state.command,
      username: this.state.username,
      password: this.state.password}
    ws.send(JSON.stringify(data))
    this.setState({
      ...this.state,
      command: ''
    })
  }

  onSubmit(event) {
    event.preventDefault()
    this.onSend()
  }

  render() {
    return (
      <>
      {this.state.commandList.map((list, i) => <div key={`history-${i}`}>{list.data}</div>)}
      <form onSubmit={this.onSubmit}>
        <input
        type="text"
        value={this.state.command}
        onChange={(e) => this.setState({command: e.target.value})}
        placeholder="Enter your command"
        />
      </form>
      </>
    );
  }
}

export default Test;
