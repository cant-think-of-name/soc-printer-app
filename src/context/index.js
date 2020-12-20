import React from 'react';
import { w3cwebsocket as WebSocket } from "websocket"

class WebSocketClient {
  constructor() {
    this.ws = new WebSocket("ws://localhost:5000", "echo-protocol")
  }

  async connect(username, password) {
    const webSocket = this.ws
    const loginMessage = JSON.stringify({
      method: "login",
      username,
      password,
    })
    webSocket.send(loginMessage)
    return new Promise((resolve, reject) => {
      webSocket.onmessage = (msg) => {
        const {data} = msg
        const {isConnected} = JSON.parse(data)
        if (isConnected) {
          resolve()
        } else {
          reject()
        }
      }
    })
  }

  print(files, printer) {
    const printRequest = JSON.stringify({
      method: "print",
      files,
      printer
    })
    this.ws.send(printRequest)
  }

  async getQuota() {
    const quota = JSON.stringify({
      method: "command",
      command: "pusage",
    })
    this.ws.send(quota)
    return new Promise((resolve) => {
      try {
        let message = ""
        this.ws.onmessage = msg => {
          message += JSON.parse(msg.data).data
        }
        setTimeout(() => {
          try {
            const str = message.split('PS-printer paper usage:')[1]
            const quotaStr = str.split(':')[1]
            const remainingQuota = quotaStr.split(' ')[1]
            resolve(remainingQuota)
          } catch (err) {
            resolve('0')
          }
        }, 2000)
      } catch (err) {
        resolve('0')
      }
    })
  }
}
const StateContext = React.createContext(new WebSocketClient())

export default StateContext
