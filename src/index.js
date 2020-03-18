const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arr= []; //буквы
  let dec = '';
  for (let i = 0; i < expr.length; i+=10) {
    let arr = expr.slice(i, i + 10);
    if (arr=='**********'){
      dec+=' ';
      continue;
    }
    let na = '';
    for(let a = 10; a>0; a-=2){
      switch( arr.slice(a-2, a) ) {
        case "10" : na += ".";
        break;
        case "11" : na += "-";
        break;
        default: break;
      }
  }
let all = na.split('').reverse().join('');
      dec += MORSE_TABLE[all];
       }
       return dec;
  }

module.exports = {
    decode
}
