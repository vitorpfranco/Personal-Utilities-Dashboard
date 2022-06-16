
function FindNumber(palavra) {
  const array = Array.from(palavra)
  for (let i in array) {
    if (array[i] == 'a' || array[i] == 'e' || array[i] == 'i' || array[i] == 'o' || array[i] == 'u') {
      const letra = array[i]
      array.splice(i, 0, letra)
      array.splice(i, 0, letra)
    }
  }
  let novaPalavra = array.join("")
  return console.log(novaPalavra)
}

FindNumber("batata")