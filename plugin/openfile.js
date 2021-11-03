function binaryAgent(str) {
  return str.split(" ").map(x => String.fromCharCode(parseInt(x, 2))).join("");
}

function previewFile() {
  const content = document.querySelector('.content');
  const [file] = document.querySelector('input[type=file]').files;
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    content.innerText = reader.result;
  }, false);

  if (file) {
    reader.readAsBinaryString(file);
  }
}
