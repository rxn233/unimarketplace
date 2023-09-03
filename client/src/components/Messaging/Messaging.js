import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import styles from "./Messaging.module.css";
import { useNavigate } from "react-router";
const socket = io.connect("http://localhost:3001");

function Messaging() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const userId = localStorage.getItem("user_id");
  const navigate = useNavigate();

  const username = localStorage.getItem("user_id");
  if (username === "") {
    navigate("/login");
  }
  function nav() {
    navigate("/login");
  }
  const room = "123";
  const joinRoom = () => {
    socket.emit("join_room", room);
  };

  function messageHandler(event) {
    setCurrentMessage(event.target.value);
  }

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        username: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div>
      {username === "" ? (
        <h3>You need to login first to send a message</h3>
      ) : (
        <div className={styles["chat-window"]}>
          <h2>Messaging</h2>
          <button onClick={joinRoom}>Join Room</button>
          <div className={styles["chat-header"]}>
            <h2>Message the user</h2>
          </div>
          <div className={styles["chat-body"]}>
            {messageList.map((messageContent) => {
              return (
                <div
                  className={styles.message}
                  id={
                    username === messageContent.username
                      ? styles["you"]
                      : styles["other"]
                  }
                >
                  <div>
                    <div className={styles["message-content"]}>
                      <p>{messageContent.message}</p>
                    </div>
                    <div className={styles["message-meta"]}>
                      <p id={styles.time}>{messageContent.time}</p>
                      <p id={styles.username}>{messageContent.username}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles["chat-footer"]}>
            <input
              type="text"
              placeholder="Message"
              onChange={messageHandler}
            />
            <button onClick={sendMessage}>&#9658;</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Messaging;
