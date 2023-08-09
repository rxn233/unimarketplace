const express = require("express");
const app = express();
const reactHost = "http://localhost:3000";
const { Server } = require("socket.io");

function socketSetup(serverConfig) {
  const io = new Server(serverConfig, {
    cors: {
      origin: reactHost,
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("join_room", (data) => {
      socket.join(data);
      console.log(`Room is: ${data}`);
    });

    socket.on("send_message", (data) => {
      socket.to(data.room).emit("receive_message", data);
      console.log(data);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected", socket.id);
    });
  });
}

module.exports = {
  socketSetup,
};
