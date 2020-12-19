import React from 'react';
import { w3cwebsocket as WebSocket } from "websocket"

const ws = new WebSocket("ws://localhost:5000", "echo-protocol")
const StateContext = React.createContext(ws)

export default StateContext
