// Desafio 1
function compareTrue(value1, value2) {
  let control = false;
  if (value1 === true && value2 === true) {
    control = true;
  }
  return control;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let spaceRequere = string.split(' ');
  return spaceRequere;
}
console.log(splitSentence('2 aguas, 2 cervejas'));
// Desafio 4
function concatName(strings) {
  let value1 = 0;
  let value2 = 0;
  let value3 = ', ';
  for (let index = strings.length - 1; index >= 0; index -= 1) {
    if (index === strings.length - 1) {
      value1 = strings[index];
    } else if (index === 0) {
      value2 = strings[index];
    }
  }
  let result = value1 + value3 + value2;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let som = 0;
  som += (wins * 3);
  som += (ties * 1);
  return som;
}

// Desafio 6
function bigger(numbers) {
  let number = numbers[0];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > number) {
      number = numbers[index];
    }
  }
  return number;
}

function highestCount(repeat) {
  let cont = 0;
  for (let index = 0; index < repeat.length; index += 1) {
    if (bigger(repeat) === repeat[index]) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let disCat1 = cat1 - mouse;
  let disCat2 = cat2 - mouse;
  let winOrLose = 0;
  if (mouse > cat1) {
    disCat1 = mouse - cat1;
  } else if (mouse > cat2) {
    disCat2 = mouse - cat2;
  }
  if (disCat1 < disCat2) {
    winOrLose = 'cat1';
  } else if (disCat1 > disCat2) {
    winOrLose = 'cat2';
  } else {
    winOrLose = 'os gatos trombam e o rato foge';
  }
  return winOrLose;
}

// Desafio 8
function divide(number) {
  let control = 0;
  if (number % 3 === 0 && number % 5 === 0) {
    control = 'fizzBuzz';
  } else if (number % 3 === 0) {
    control = 'fizz';
  } else if (number % 5 === 0) {
    control = 'buzz';
  } else {
    control = 'bug!';
  }
  return control;
}
function fizzBuzz(numbers) {
  let resultFinish = [];
  for (let index = 0; index < numbers.length; index += 1) {
    resultFinish.push(divide(numbers[index]));
  }
  return resultFinish;
}
// Desafio 9
function ler(objeto) {
  let newLetter;
  let codigo = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let key in codigo) {
    if (key === objeto) {
      newLetter = codigo[key];
      break;
    } else {
      newLetter = objeto;
    }
  }
  return newLetter;
}
function encode(frase) {
  let newFrase = 0;
  for (let index = 0; index < frase.length; index += 1) {
    if (newFrase === 0) {
      newFrase = ler(frase[index]);
    } else {
      newFrase += ler(frase[index]);
    }
  }
  return newFrase;
}
function reler(objeto) {
  let correctLetter;
  let codigo = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let key in codigo) {
    if (key === objeto) {
      correctLetter = codigo[key];
      break;
    } else {
      correctLetter = objeto;
    }
  }
  return correctLetter;
}
function decode(frase) {
  let newWord = 0;
  for (let index = 0; index < frase.length; index += 1) {
    if (newWord === 0) {
      newWord = reler(frase[index]);
    } else {
      newWord += reler(frase[index]);
    }
  }
  console.log(newWord);
  return newWord;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
