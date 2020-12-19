const { NodeSSH } = require("node-ssh");
const ssh = new NodeSSH();

const sshConfig = {
  host: "<host name here>",
  username: "<username here>",
  password: "<password>"
};

module.exports = async (ws, req) => {
  await ssh.connect(sshConfig);
  const shellStream = await ssh.requestShell();
  ws.on("message", msg => {
    const data = JSON.parse(msg);
    switch (data.method) {
      case "command":
        // TODO: Implement event handler
        console.log(data)
        // shellStream.write(`${data.command.trim()}\n`);
        break;
    }
  });
  // listener
  shellStream.on("data", data => {
    const d = JSON.stringify({
      jsonrpc: "2.0",
      data: data.toString()
    });
    ws.send(d);
  });
  shellStream.stderr.on("data", data => {
    const d = JSON.stringify({
      jsonrpc: "1.0",
      data: data.toString()
    });
    ws.send(d);
  });
};
