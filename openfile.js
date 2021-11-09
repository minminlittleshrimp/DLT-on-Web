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
  hex4Bytes = [];

  input.addEventListener('change', (e) => {
    reader.readAsArrayBuffer(e.target.files[0]);
    reader.onload = (evt) => {
      
      if (evt.target.readyState === FileReader.DONE) {
        const arrayBuffer = evt.target.result;
        
        array = new Uint8Array(arrayBuffer);
        hex1Byte = toHexString(array);
        var countByte = 0;
        for (const a of hex1Byte) {
          if (countByte < 4){
            hex4Bytes.push(a);
            countByte = countByte+1;
          }
          else{
            fileByteArray.push(hex4Bytes);
            hex4Bytes = [];
            countByte = 0;
          }
          
          /*if(detectPattern(a)){
            epoch2BrokenTime()
          }  */      
          
          
        }
        console.log(fileByteArray);
      }
    }
  })
};