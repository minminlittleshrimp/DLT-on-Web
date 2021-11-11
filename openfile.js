//convert from binary to hex
function toHexString(byteArray) {
  return byteArray.reduce((output, elem) => 
    (output + ('0' + elem.toString(16)).slice(-2)),'');
};

//slice string to Byte element
/*function chunkString(str, length) {
  return str.match(new RegExp('.{1,' + length + '}', 'g'));
};*/

//detect pattern DLT0x01
lineIndex = [];
function detectPattern(strInput){
  //define pattern DLT0x01 = 444c 5401 as regular expression
  var patternDLT;
  patternDLT = new RegExp('444c5401','g');
  while (patternDLT.test(strInput)){
    lineIndex.push(patternDLT.lastIndex);
  }
};

function epoch2BrokenTime(){

};




function handleFileSelect() 
{
  const input = document.querySelector('input');
  const reader = new FileReader();
  const fileByteArray = [];
  hex1Byte = '';
  

  input.addEventListener
  ('change', (e) => 
    {
      reader.readAsArrayBuffer(e.target.files[0]);
      reader.onloadend = (evt) => 
      {
        if (evt.target.readyState === FileReader.DONE) 
        {
          const arrayBuffer = evt.target.result;
        
          array = new Uint8Array(arrayBuffer);
        
          for (const a of array)
          {
            fileByteArray.push(a);
          };
          hex1Byte = toHexString(fileByteArray);
          //hexFile = toHexString(fileByteArray);
          //hex1Byte = chunkString(hexFile, 1).join('');
          detectPattern(hex1Byte);
          document.getElementById('list').innerHTML = '<ul>' + lineIndex + '</ul>';
          for (const i of lineIndex){
            
          }
        } 
      }
    }
  )
};


document.getElementById('files').addEventListener('click', handleFileSelect, false);