import express, { json } from "express";
import { writeFile } from "fs";

const jsonData =
  "C:\\Users\\gwion\\Desktop\\EAAA\\3. Semester\\DMU-22v---Distribueret-programmering-2023-Jan-29_19-48-07-210\\viewer\\files\\Session 14\\Opgaver\\opgave14.3.json";

const app = express();

app.use(json());

app.get("/messages", (req, res) => {
  if (req === "GET") {
    const allMessages = jsonData.chat_rooms.flatMap((room) => room.messages);
    res.json(allMessages);
  }
});

// Return all chat messages in a chat room
app.get("/rooms/:roomId/messages", (req, res) => {
  if (req === "GET") {
    const roomId = Number(req.params.id);
    const room = jsonData.chat_rooms.find((room) => room.id === roomId);
    if (!room) {
      res.status(404).send("Chat room not found");
    } else {
      res.json(room.messages);
    }
  }
});

// Return all chat rooms
app.get("/rooms", (req, res) => {
  if (req === "GET") {
    const allRooms = jsonData.chat_rooms.map((room) => {
      const { messages, ...roomWithoutMessages } = room;
      return roomWithoutMessages;
    });
    res.json(allRooms);
  }
});

app.post("/", (req, res) => {
  if (req === "POST") {
    const { name, users, messages } = req.body;
    const newRoom = {
      id: chat_rooms.length + 1,
      name,
      users,
      messages,
    };
    chat_rooms.push(newRoom);
    writeFile("./chat_data.json", JSON.stringify(jsonData), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error writing to JSON file");
      } else {
        res.json(newRoom);
      }
    });
  }
});

app.delete("/:roomId/messages/:messageId", (req, res) => {
  if (req === "DELETE") {
    const roomId = Number(req.params.id);
    const messageId = Number(req.params.messageId);
    const roomIndex = jsonData.chat_rooms.findIndex(
      (room) => room.id === roomId
    );
    if (roomIndex === -1) {
      res.status(404).send("Chat room not found");
    } else {
      const messages = jsonData.chat_rooms[roomIndex].messages;
      const messageIndex = messages.findIndex(
        (message) => message.id === messageId
      );
      if (messageIndex === -1) {
        res.status(404).send("Chat message not found");
      } else {
        const deletedMessage = messages.splice(messageIndex, 1)[0];
        fs.writeFile("./chat_data.json", JSON.stringify(jsonData), (err) => {
          if (err) {
            console.error(err);
            res.status(500).send("Error writing to JSON file");
          } else {
            res.json(deletedMessage);
          }
        });
      }
    }
  }
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
