import React from 'react';
import { w3cwebsocket as WebSocket } from "websocket";

class WebSocketClient {
  constructor() {
    this.ws = new WebSocket("ws://localhost:5000", "echo-protocol");
  }

  async connect(username, password) {
    const webSocket = this.ws;
    const loginMessage = JSON.stringify({
      method: "login",
      username,
      password,
    });
    webSocket.send(loginMessage);
    return new Promise((resolve, reject) => {
      webSocket.onmessage = (msg) => {
        const { data } = msg;
        const { isConnected } = JSON.parse(data);
        if (isConnected) {
          resolve();
        } else {
          reject();
        }
      };
    });
  }
}
const StateContext = React.createContext(new WebSocketClient());

export default StateContext;
