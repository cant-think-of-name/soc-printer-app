const { NodeSSH } = require("node-ssh");
const ssh = new NodeSSH();

module.exports = async (ws, req) => {
  ws.on("message", async msg => {
    // eslint-disable-next-line default-case
    const data = JSON.parse(msg)
    switch (data.method) {
      case "login":
        const sshConfig = {
          host: "sunfire-r.comp.nus.edu.sg",
          username: `${data.username}`,
          password: `${data.password}`
        }
        const result = await ssh.connect(sshConfig);
        if (result.isConnected()) {
          const response = JSON.stringify({
            jsonrpc: "2.0",
            isConnected: true
          })
          ws.send(response)
        }
        break;
      case "command":
        sshConfig = {
          host: "sunfire-r.comp.nus.edu.sg",
          username: `${data.username}`,
          password: `${data.password}`
        }
        await ssh.connect(sshConfig);
        const shellStream = await ssh.requestShell();
        shellStream.write(`${data.command.trim()}\n`);
        console.log("sent");

        // listener
        shellStream.on("data", data => {
          const d = JSON.stringify({
            jsonrpc: "2.0",
            data: data.toString()
          });
          ws.send(d);
          console.log("replied");
        });

        shellStream.stderr.on("data", data => {
          const d = JSON.stringify({
            jsonrpc: "1.0",
            data: data.toString()
          });
          ws.send(d);
        });

        break;
    }
  });
};
