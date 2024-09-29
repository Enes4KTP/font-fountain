const fonts = [
  "Allerta Stencil",
  "Baskervville SC",
  "Berkshire Swash",
  "Black Ops One",
  "Bungee Tint",
  "Calligraffitti",
  "Caveat",
  "Caveat Brush",
  "Chewy",
  "Creepster",
  "Dancing Script",
  "Edu AU VIC WA NT Guides",
  "Fira Code",
  "Fredoka",
  "Fugaz One",
  "Ga Maamli",
  "Gochi Hand",
  "Grenze Gotisch",
  "Handjet",
  "Indie Flower",
  "Itim",
  "Jacquarda Bastarda 9",
  "Jersey 25",
  "Julee",
  "Just Another Hand",
  "Knewave",
  "Leckerli One",
  "Libre Baskerville",
  "Lobster",
  "Luckiest Guy",
  "Marck Script",
  "Matemasie",
  "Merienda",
  "Monoton",
  "Mr Dafoe",
  "Nanum Brush Script",
  "Nanum Pen",
  "Norican",
  "Oooh Baby",
  "Pacifico",
  "Permanent Marker",
  "Pirata One",
  "Rammetto One",
  "Racing Sans One",
  "Reenie Beanie",
  "Rowdies",
  "Rubik Bubbles",
  "Rubik Mono One",
  "Sacramento",
  "Sansita",
  "Satisfy",
  "Seaweed Script",
  "Shadows Into",
  "Shrikhand",
  "Silkscreen",
  "Six Caps",
  "Spicy Rice",
  "Tiny5",
  "Updock"
];
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
