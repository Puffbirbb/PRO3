// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
  addDoc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const exp_app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

exp_app.set("view engine", "pug");
exp_app.set("views", path.join(__dirname, "views"));
exp_app.use(express.json());
exp_app.use(express.urlencoded({ extended: true }));

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUxo8Vgfo-DuN6fnEzC69aI-HURWBgqh8",
  authDomain: "session-17-chat-database.firebaseapp.com",
  projectId: "session-17-chat-database",
  storageBucket: "session-17-chat-database.appspot.com",
  messagingSenderId: "657542727356",
  appId: "1:657542727356:web:a706853af85073af8ff2b9",
  measurementId: "G-PXVZ0Y1CMP",
};

// Initialize Firebase
const fb_app = initializeApp(firebaseConfig);
const db = getFirestore(fb_app);

let beskeder = [
  {
    afsender: "Ole",
    tekst: "Min første besked",
    chatrum: "rum1",
    nummer: "1",
  },
  {
    afsender: "Ib",
    tekst: "Hallo, er der nogen?",
    chatrum: "rum2",
    nummer: "2",
  },
];

let chatRum = [{ navn: "rum1" }, { navn: "rum2" }];

// for (let i = 0; i < chatRum.length; i++) {
//   addDoc(collection(db, "rooms"), chatRum[i]);
// }

// for (let i = 0; i < beskeder.length; i++) {
//   addDoc(collection(db, "messages"), beskeder[i]);
// }

async function addMessage(message) {
  await addDoc(collection(db, "messages"), message);
}

async function getMessages(room) {
  let messageCol = collection(db, "messages");
  let q = query(messageCol, where("chatrum", "==", room));
  let messages = await getDocs(q);

  let messageList = messages.docs.map((doc) => {
    let data = doc.data();
    data.docID = doc.id;
    return data;
  });
  return messageList;
}

async function getRooms() {
  let roomCol = collection(db, "rooms");
  let rooms = await getDocs(roomCol);

  let roomList = rooms.docs.map((doc) => {
    let data = doc.data();
    data.docID = doc.id;
    return data;
  });
  return roomList;
}

exp_app.get("/", async (req, res) => {
  let messages = await getMessages("rum1");
  let rooms = await getRooms();

  res.render("index", { rooms: rooms, messages: messages });
});

exp_app.post("/messageRoom", async (req, res) => {
  let messages = await getMessages(req.body.room);
  res.send(messages);
});

exp_app.post("/message", async (req, res) => {
  let messages = await getMessages(req.body.room);
  await addMessage(req.body);
  res.send(messages);
});

exp_app.listen(4206, () => {
  console.log("Server started");
});
