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
      const chatMessageList = document.getElementById("beskeder-liste");
      chatMessageList.innerHTML = "";
      chatMessages.forEach((chatMessage) => {
        const li = document.createElement("li");
        li.textContent = chatMessage.id + " " + chatMessage.tekst;
        chatMessageList.appendChild(li);
      });
    })
    .catch((error) => console.log(error));
}

function chatRooms() {
  get(chatRoom)
    .then((response) => {
      const chatRooms = JSON.parse(response);
      const dropdown = document.getElementById("rum-dropdown");
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

document.getElementById("rum-dropdown").onchange = (event) => {
  chatRoomMessages(event.target.value);
};

document.getElementById("send-besked-knap").onclick = () => {
  const chatMessage = {
    chatRum: document.getElementById("rum-dropdown").value,
    tekst: document.getElementById("besked-input").value,
  };
  post(chatSite, chatMessage)
    .then(() => {
      chatRoomMessages(chatMessage.chatRum);
    })
    .catch((error) => console.log(error));
};

document.getElementById("beskeder-liste").onclick = (event) => {
  const selectedMessage = event.target;
  selectedMessage.style.backgroundColor = "red";
  document.getElementById("delete-knap").onclick = () => {
    const id = selectedMessage.textContent.split(" ")[0];
    deleteMessage(chatSite + id)
      .then(() => {
        chatRoomMessages(document.getElementById("rum-dropdown").value);
      })
      .catch((error) => console.log(error));
  };
};
