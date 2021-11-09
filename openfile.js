function toHexString(byteArray) {
  return byteArray.reduce((output, elem) => 
    (output + ('0' + elem.toString(16)).slice(-2)),'');
};

function detectPattern(text){
  //create pattern DLT0x01
  var str = toHexString(text);
  //var hexStr = (parseInt(str,32)).toString(32);
  if (text == hexStr){

  }
};

function epoch2BrokenTime(){

};

function previewFile() {
  const input = document.querySelector('input');
  const reader = new FileReader();
  const fileByteArray = [];
  const array4Bytes = [];

  input.addEventListener('change', (e) => {
    reader.readAsArrayBuffer(e.target.files[0]);
    reader.onload = (evt) => {
      
      if (evt.target.readyState === FileReader.DONE) {
        const arrayBuffer = evt.target.result;
        
        array4Bytes = new Uint32Array(arrayBuffer);
        for (const a of array4Bytes) {

          /*if(detectPattern(a)){
            epoch2BrokenTime()
          }  */      
          fileByteArray.push(a);
          fileByteArray.push(" ");
          
        }
        console.log((fileByteArray));
      }
    }
  })
};