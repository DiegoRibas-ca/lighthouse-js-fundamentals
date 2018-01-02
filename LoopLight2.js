function loopyLighthouse (range, multiples, words) {
  var cont = range[0];
  while (cont <= range[range.length-1]) {
    if (cont % multiples[0] == 0 && cont % multiples[multiples.length-1] == 0) {
      console.log(words[0]+words[words.length-1]);
    } else if (cont % multiples[0] == 0) {
      console.log(words[0]);
    } else if (cont % multiples[multiples.length-1] == 0) {
      console.log(words[words.length-1]);
    } else {
      console.log(cont);
    }
    cont++;
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);