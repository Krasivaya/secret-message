//           STEP 1: TO NORMALIZE THE CHARACTERS    

const normalize = () => {
    let value = document.getElementById('area').value;
    return value.toLowerCase().replace(/[^\w\d]/g,'');
  }

const size = () => {
    return Math.ceil(Math.sqrt(normalize().length));
  }
//          STEP 2: TO BROKE THE TEXT INTO ROWS AND COLUMN

const rowed = () => {
    let value = document.getElementById('area').value;
      return normalize().match( new RegExp(`.{1,${size()}}`,'g') );
  }
  //          STEP 3: TO CHANGE THE COLUMNS INTO ROWS

const last = () => {
    let result = [];
    const input = rowed();  
    
    for (let row = 0; row < size(); row += 1) {
      let segment =  '';
      for (let col = 0; col < input.length; col += 1) {
        segment += input[col].slice(row, row + 1);
      }
      result.push(segment);
    }

    return result.join('');
  }
  //          FINAL STEP: TO GIVE THE OUTPUT


const showOutput = () => {
document.getElementById('norm').innerHTML = normalize();
document.getElementById('chunks').innerHTML = rowed();
document.getElementById('done').innerHTML = last();

}