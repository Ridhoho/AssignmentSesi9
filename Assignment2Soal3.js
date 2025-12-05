function modifySentence(sentence) {
  let words = sentence.split(" ");

  let modifiedWords = words.map(word => {
    let capitalize = word.toUpperCase()
    if(capitalize.length > 4){
        return `${capitalize}!`
    } else {
        return capitalize
    }
  });


  return modifiedWords;
}

console.log(modifySentence("javascript is awesome"));
// Expected Output: ["JAVASCRIPT!", "IS", "AWESOME!"]