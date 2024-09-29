const fonts = ["Arial", "Verdana", "Courier New"];
const fontGrid = document.getElementById("fontGrid");
const fontPreviewText = document.getElementById("fontPreviewText");
const fontText = document.getElementById("fontText");
const fontSizeSlider = document.getElementById("fontSizeSlider");

let selectedFont = "Arial";
let fontSize = 16;

fontText.style.fontSize = fontSize + "px";
fontText.style.fontFamily = selectedFont;

fonts.forEach((font) => {
  const fontDiv = document.createElement("div");
  fontDiv.classList.add("fontItem");

  const fontExample = document.createElement("div");
  fontExample.innerText = "Hello World";
  fontExample.classList.add("fontExample");
  fontExample.style.fontFamily = font;

  const fontName = document.createElement("div");
  fontName.classList.add("fontName");
  fontName.innerText = font;

  fontDiv.addEventListener("click", () => {
    selectedFont = font;
    fontText.style.fontFamily = selectedFont;
  });

  fontDiv.appendChild(fontExample);
  fontDiv.appendChild(fontName);
  fontGrid.appendChild(fontDiv);
});

fontPreviewText.addEventListener("input", () => {
  fontText.innerText = fontPreviewText.value;
});

fontSizeSlider.addEventListener("input", (e) => {
  fontSize = e.target.value;
  fontText.style.fontSize = fontSize + "px";
});
