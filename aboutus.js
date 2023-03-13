const emojiBtn = document.querySelector("#emoji");
const picker = new EmojiButton();

window.addEventListener("DOMContentLoaded", () => {
  picker.on("emoji", (emoji) => {
    document.querySelector("input").value += emoji;
  });

  emojiBtn.addEventListener("click", () => {
    picker.togglePicker(emojiBtn);
  });
});
