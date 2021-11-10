function toHexString(byteArray) {
  return byteArray.reduce((output, elem) => 
    (output + ('0' + elem.toString(16)).slice(-2)),'');
};

function chunkString(str, length) {
  return str.match(new RegExp('.{1,' + length + '}', 'g'));
};

function detectPattern(chunkHex1Byte){
  //find pattern DLT0x01 = 444c 5401
  var index = 0;
  chunkHex1Byte.forEach(element,index => {
    if (element == 4){
      index++;
      if (element == 4){
        index++; 
        if (element == 4){
          index++;
          if (element == c){
            index++;
            if (element == 5){
                index++;
                if (element == 4){
                  index++;
                  if (element == 0){
                    index++;
                    if (element == 1){
                      return 1;
                    }
                  }    
                }
              }
            }
          }
        }
      }     
    }    
  });  
};

function epoch2BrokenTime(){

};

function objToString(obj) {
  var str = 'Object: ';
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      str += p + '::' + obj[p] + ',\n';
    }
  }
  return str;
}


function handleFileSelect() 
{
  const input = document.querySelector('input');
  const reader = new FileReader();
  const fileByteArray = [];
  hex1Byte = [];

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
          hexFile = toHexString(fileByteArray);
          hex1Byte = chunkString(hexFile, 1);
          document.getElementById('list').innerHTML = '<ul>' + hex1Byte + '</ul>';
          indexArray = 0;
          hex1Byte.forEach(element, indexArray =>{
            
          });
        } 
      }
    }
  )
  //logThis(hex4Bytes);   
  //document.getElementById('list').innerHTML = '<ul>' + fileByteArray.join('') + '</ul>';
};
(function () {
  var old = console.log;
  var logger = document.getElementById('log');
  console.log = function (message) {
      if (typeof message == 'object') {
          logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
      } else {
          logger.innerHTML += message + '<br />';
      }
  }
})();
document.getElementById('files').addEventListener('change', handleFileSelect, false);