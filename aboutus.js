const popup = document.querySelector(".chat-popup");
const chatBtn = document.querySelector(".chat-btn");
const submitBtn = document.querySelector(".submit");
const chatArea = document.querySelector(".chat-area");
const inputElm = document.querySelector("input");
const emojiBtn = document.querySelector("#emoji-btn");

// // Emoji
window.addEventListener("DOMContentLoaded", () => {});

emojiBtn.addEventListener("click", () => {
  picker.togglePicker(emojiBtn);
});

// Chat btn toggel

chatBtn.addEventListener("click", () => {
  console.log("yes");
  popup.classList.toggle("block");
});

// send msg
submitBtn.addEventListener("click", () => {
  let userInput = inputElm.value;

  let temp = `<div class="out-msg">
    <span class="my-msg">${userInput}</span>
    <img src="me.jpg" class="avatar">
    </div>`;

  chatArea.insertAdjacentHTML("beforeend", temp);
  inputElm.value = "";
});
