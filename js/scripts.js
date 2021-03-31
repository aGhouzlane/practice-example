function numberOfOccurrencesInText(word, text) {
  const wordArray = text.split(" ");
  let wordCount = [0, 0, 0, 0];
  let wordString = [];
  if (text.trim().length === 0) {
    return 0;
  }
  if (word === "") {
    return 0;
  }
  wordArray.forEach(function (element) {
    if (element.includes(word[0].toLowerCase())) {
      wordCount[0]++;
      wordString[0] = word;
    }
    if (element.includes(word[1].toLowerCase())) {
      wordCount[1]++;
      wordString[1] = word;
    }
    if (element.includes(word[2].toLowerCase())) {
      wordCount[2]++;
      wordString[2] = word;
    }
    if (element.includes(word[3].toLowerCase())) {
      wordCount[3]++;
      wordString[0] = word;
    }
  });

  console.log(wordString);

  for (var i = 0; i < 4; i++) {
    console.log("" + wordString[i] + ":" + wordCount[i] + "times");
  }

}

function find3Largest(test) {

}



var array = ["hello", "hi", "yes", "whatever"];
var text = "hello hi hi hi yes yes yes yes yes yes hello hello whatever in something hello something";
numberOfOccurrencesInText(array, text);