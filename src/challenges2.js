// Desafio 10
// usei como referencia https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function compara(a, b) {
  if (a.tech > b.tech) {
    return 1;
  }
  if (a.tech < b.tech) {
    return -1;
  }
  return 0;
}
function techList(list, nome) {
  let lista = [];
  if (list.length === 0) {
    lista = 'Vazio!';
  } else {
    for (let index = 0; index < list.length; index += 1) {
      lista.push({
        tech: list[index],
        name: nome,
      });
    }
    lista = lista.sort(compara);
  }
  return lista;
}

// Desafio 11
function validaRepeatNumber(value1) {
  let controlRepeatNumber = true;
  let ordena = value1.sort();
  let tmp = value1[0];
  let cont;
  for (let index = 0; index <= ordena.length; index += 1) {
    if (cont >= 3) {
      controlRepeatNumber = false;
      break;
    } else if (tmp !== value1[index + 1]) {
      tmp = value1[index + 1];
      cont = 1;
    } else if (value1[index] === tmp) {
      cont += 1;
      tmp = value1[index + 1];
    }
  }
  return controlRepeatNumber;
}
function validaRegularNumber(value) {
  let controlNumberRegular = true;
  if (value.length !== 11) {
    controlNumberRegular = false;
  }
  return controlNumberRegular;
}
function validaStrangerNumber(value) {
  let controlStrangerNumber = true;
  for (let index = 0; index < value.length; index += 1) {
    if (value[index] > 9 || value[index] < 0) {
      controlStrangerNumber = false;
    }
  }
  return controlStrangerNumber;
}
function validaTwo(value) {
  let control = true;
  if (validaStrangerNumber(value) === false || validaRepeatNumber(value) === false) {
    control = false;
  }
  return control;
}
function concatenate(value) {
  let DDD = value.slice(0, 2);
  let startNumber = value.slice(2, 7);
  let endNumber = value.slice(7, 11);
  let ifem = '-';
  let parenteses1 = '(';
  let parenteses2 = ')';
  let space = ' ';
  let join1 = parenteses1 + DDD.join('') + parenteses2 + space + startNumber.join('');
  let joins = join1 + ifem + endNumber.join('');
  return joins;
}
function generatePhoneNumber(valor) {
  let resultado = concatenate(valor);
  if (validaRegularNumber(valor) === false) {
    resultado = 'Array com tamanho incorreto.';
  } else if (validaTwo(valor) === false) {
    resultado = 'não é possível gerar um número de telefone com esses valores';
  }
  return resultado;
}
// Desafio 12
function triangleCheck(line1, line2, line3) {
  let lineAbsolut2 = Math.abs(line2);
  let lineAbsolut3 = Math.abs(line3);
  let control = false;
  if (line1 < line2 + line3 && line1 > lineAbsolut2 - lineAbsolut3) {
    control = true;
  }
  return control;
}

// Desafio 13
function hydrate(frase) {
  let numbers = frase.split(' ');
  let soma = 0;
  let suggestion = ' copo de água';
  for (let number in numbers) {
    // referencia - https://pt.stackoverflow.com/questions/11275/verificar-se-string-possui-apenas-n%C3%BAmeros
    if (/^\d+$/.test(numbers[number]) === true) {
      soma += Number(numbers[number]);
    }
  }
  if (soma > 1) {
    suggestion = ' copos de água';
  }
  return soma + suggestion;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
