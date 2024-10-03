document.addEventListener("DOMContentLoaded", function () {
  const fontText = document.getElementById("fontText");

  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  fontText.addEventListener("wheel", function (event) {
    const delta = Math.sign(-event.deltaY);

    const x = event.clientX;
    const y = event.clientY;

    const caretPosition = document.caretPositionFromPoint(x, y);

    if (caretPosition) {
      const node = caretPosition.offsetNode;
      const offset = caretPosition.offset;

      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.nodeValue;

        const char = text[offset];
        const index = alphabet.indexOf(char);

        if (index !== -1) {
          let newIndex;
          if (delta > 0) {
            newIndex = (index + 1) % alphabet.length;
          } else {
            newIndex = (index - 1 + alphabet.length) % alphabet.length;
          }

          const newChar = alphabet[newIndex];
          const newText =
            text.slice(0, offset) + newChar + text.slice(offset + 1);

          node.nodeValue = newText;
        }
      }
    }

    event.preventDefault();
  });
});
