function previewFile() {
const input = document.querySelector('input');
const reader = new FileReader();
const fileByteArray = [];

input.addEventListener('change', (e) => {
  reader.readAsArrayBuffer(e.target.files[0]);
  reader.onloadend = (evt) => {
    
    if (evt.target.readyState === FileReader.DONE) {
      const arrayBuffer = evt.target.result;
      //console.log(arrayBuffer);
      array = new Uint8Array(arrayBuffer);

      for (const a of array) {
        fileByteArray.push(a);
      }
      console.log(fileByteArray);
    }
  }
})
}