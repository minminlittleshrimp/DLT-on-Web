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

/*function hex2Ascii(hex) {
  var str = '';
  for (var i = 0; i < hex.length; i += 2)
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}*/


function epoch2BrokenTime(str, index){
  //Extract epoch second - second counted from 1.1.1970
  epochStr = str.substring(index, index+8); 
  const invertHex = [];
  
  for (let i=0; i<epochStr.length/2; i++){
    invertHex.push(epochStr.substr(6-i*2, 2));
  }

  hexStr = invertHex.join('');
  decimalStr = parseInt(hexStr, 16);

  //Epoch to date
  var dateTime = new Date(decimalStr*1000); 
  dateTime = dateTime.toISOString(decimalStr);
  
  //Reformat
  dateTime = dateTime.replace('-', '/').replace('-', '/').replace('T', ' ').replace('000Z', ' ');
  //document.getElementById('list').innerHTML = '<ul>' + dateTime + '</ul>';

};

function epoch2Microsecond(str, index){
  document.getElementById('list').innerHTML = '<ul>' + str + '</ul>';

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
          //console.log();
          //document.getElementById('list').innerHTML = '<ul>' + arrayBuffer + '</ul>';
          //for (const i of lineIndex){
            epoch2BrokenTime(hex1Byte, 8);
            epoch2Microsecond(hex1Byte, 8+8);
          //}
        } 
      }
    }
  )
};


document.getElementById('files').addEventListener('click', handleFileSelect, false);