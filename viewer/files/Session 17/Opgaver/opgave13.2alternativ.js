const chatSite = "https://beskedserver.azurewebsites.net/api/Beskeder/";
const chatRoom = "https://beskedserver.azurewebsites.net/api/chatRum/";
const chatSearch = "https://beskedserver.azurewebsites.net/api/SoegBeskeder/";

function get(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

function post(url, data) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send(JSON.stringify(data));
  });
}

function deleteMessage(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

function chatRoomMessages(chatRoom) {
  get(chatSearch + chatRoom)
    .then((response) => {
      const chatMessages = JSON.parse(response);
      const chatMessageList = document.getElementById("chatroom-messages");
      chatMessageList.innerHTML = "";
      chatMessages.forEach((chatMessage) => {
        const div = document.createElement("div");
        const p = document.createElement("p");
        const span = document.createElement("span");
        p.textContent = chatMessage.tekst;
        p.id = "message-text";
        span.textContent = chatMessage.id;
        span.id = "message-id";
        div.className = "message incoming";
        div.id = "message-div";
        span.className = "message-id";
        div.appendChild(p);
        div.appendChild(span);
        chatMessageList.appendChild(div);
      });
    })
    .catch((error) => console.log(error));
}

function chatRooms() {
  get(chatRoom)
    .then((response) => {
      const chatRooms = JSON.parse(response);
      const dropdown = document.getElementById("chatroom-dropdown");
      chatRooms.forEach((chatRoom) => {
        const option = document.createElement("option");
        option.value = chatRoom.navn;
        option.textContent = chatRoom.navn;
        dropdown.appendChild(option);
      });
    })
    .catch((error) => console.log(error));
}

chatRooms();

chatRoomMessages("Rum1");

document.getElementById("chatroom-dropdown").onchange = (event) => {
  chatRoomMessages(event.target.value);
};

document.getElementById("message-input-button").onclick = () => {
  const chatMessage = {
    chatRum: document.getElementById("chatroom-dropdown").value,
    tekst: document.getElementById("message-input").value,
  };
  post(chatSite, chatMessage)
    .then(() => {
      chatRoomMessages(chatMessage.chatRum);
      getElementById("message-input").value = "";
    })
    .catch((error) => console.log(error));
};

// onclick for message paragraph that changes the message and the span color to red
document.getElementById("chatroom-messages").onclick = (event) => {
  if (event.target.id === "message-text") {
    event.target.style.color = "red";
    event.target.nextSibling.style.color = "red";
  }
  document.getElementById("chatroom-messages").onclick = (event) => {
    if (event.target.id === "message-text") {
      if (confirm("Do you want to delete this message?")) {
        deleteMessage(chatSite + event.target.nextSibling.textContent)
          .then(() => {
            chatRoomMessages(
              document.getElementById("chatroom-dropdown").value
            );
          })
          .catch((error) => console.log(error));
      } else {
        event.target.style.color = "black";
        event.target.nextSibling.style.color = "#999";
      }
    }
  };
};
