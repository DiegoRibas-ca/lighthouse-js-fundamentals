function loop1 (start, end) {
  var cont = start;
  while (cont <= end) {
    if (cont % 3 == 0 && cont % 4 == 0) {
      console.log("LoopyLighthouse");
    } else if (cont % 3 == 0) {
      console.log("Loopy");
    } else if (cont % 4 == 0) {
      console.log("Lighthouse");
    } else {
      console.log(cont);
    }
    cont++;
  }
}

loop1(100, 200);