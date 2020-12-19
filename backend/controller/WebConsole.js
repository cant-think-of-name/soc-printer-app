const { NodeSSH } = require("node-ssh");
const ssh = new NodeSSH();

<<<<<<< HEAD
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
=======
/*const sshConfig = {
  host: "<host name here>",
  username: "<username here>",
  password: "<password>"
};*/

/*class WebConsole {
  constructor() {
    this.sshConfig = {
      host: "sunfire-r.comp.nus.edu.sg",
      username: "",
      password: ""
    }
  }

  async login(ws, req) {
    const data = JSON.parse(msg);
    this.sshConfig = {
      host: "sunfire-r.comp.nus.edu.sg",
      username: `${data.username}`,
      password: `${data.password}`
    }
  }

  async message(ws, req) {
    this.sshConfig = {
      host: "sunfire-r.comp.nus.edu.sg",
      username: `${data.username}`,
      password: `${data.password}`
    }
    await ssh.connect(this.sshConfig);
    const shellStream = await ssh.requestShell();
    ws.on("message", msg => {
      const data = JSON.parse(msg);
      switch (data.method) {
        case "command":
          shellStream.write(data.command.trim() + "\n");
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
      console.log("replied");
    });

    shellStream.stderr.on("data", data => {
      const d = JSON.stringify({
        jsonrpc: "1.0",
        data: data.toString()
      });
      ws.send(d);
    });
  }
}

module.exports = WebConsole;*/

module.exports = async (ws, req) => {

  ws.on("message", async msg => {

    switch (data.method) {

      case "command":
        const data = JSON.parse(msg);

>>>>>>> Designed printing status pages.
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
