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

    socket.on("disconnect", () => {
      console.log("User disconnected", socket.id);
    });
  });
}

module.exports = {
  socketSetup,
};
