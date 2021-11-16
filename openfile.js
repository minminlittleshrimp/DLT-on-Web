//convert from binary to hex
function toHexString(byteArray) {
  return byteArray.reduce((output, elem) => 
    (output + ('0' + elem.toString(16)).slice(-2)),'');
};

/*Components of header:
+Pattern: DLT0x01
+Broken time (ISO C)
+
+




*/

function detectPattern(strInput){
  //define pattern DLT0x01 = 444c 5401 as regular expression
  var patternDLT = new RegExp('444c5401','g');
  while (patternDLT.test(strInput)){
    lineIndex.push(patternDLT.lastIndex);
  }
};

function epoch2Second(str, index){
  //Extract epoch second - second counted from 1.1.1970
  var epochStr = str.substring(index, index+8); 
  const invertHex = [];
  
  for (let i=0; i<epochStr.length/2; i++){
    invertHex.push(epochStr.substr(6-i*2, 2));
  }
  return decimalStr = parseInt(invertHex.join(''), 16);
}

function epoch2BrokenTime(str, index){
  var decimalStr = epoch2Second(str, index);

  //Epoch to date
  dateTime = new Date(decimalStr*1000); 
  dateTime = dateTime.toISOString(decimalStr);
  
  //Reformat
  return dateTime = dateTime.replace('-', '/')
                            .replace('-', '/')
                            .replace('T', ' ')
                            .replace('000Z', ' ');
};

function epoch2Microsecond(str, index){
  microSecond = epoch2Second(str, index).toString();
};


var headerStr = [];
var dateTime = "";
var microSecond = "";
lineIndex = [];

//Main function handle click event and output log
function handleFileSelect() 
{
  const input = document.querySelector('input');
  const reader = new FileReader();
  const fileByteArray = [];
  hex1Byte = '';
  
  //Handle input event. Status: 1 file handling
  input.addEventListener
  ('change', (e) => 
    {
      reader.readAsArrayBuffer(e.target.files[0]);
      reader.onloadend = (evt) => 
      {
        if (evt.target.readyState === FileReader.DONE) 
        {
          const arrayBuffer = evt.target.result;

          //Format file in 1-byte-string type
          array = new Uint8Array(arrayBuffer);
        
          for (const a of array)
          {
            fileByteArray.push(a);
          };
          hex1Byte = toHexString(fileByteArray);
          detectPattern(hex1Byte);
          for (let i = 0; i < lineIndex.length; i++){
            epoch2BrokenTime(hex1Byte, lineIndex[i]);
            epoch2Microsecond(hex1Byte, lineIndex[i]+8);
            headerStr[i] = i.toString() + ' ' + dateTime + microSecond +'<br>';
          }

          headerStr=headerStr.join("");
          document.getElementById('list').innerHTML = headerStr;
        } 
      }
    }
  )
};

document.getElementById('files').addEventListener('click', handleFileSelect, false);