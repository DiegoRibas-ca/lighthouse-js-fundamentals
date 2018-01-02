var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var cont = 0;
while (cont < ingredients.length) {
  console.log(ingredients[cont]);
  cont++;
}
// Write a for loop that prints out the contents of ingredients:
for (var cont = 0; cont < ingredients.length; cont++){
  console.log(ingredients[cont]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var cont = ingredients.length; cont > 0; --cont){
  console.log(ingredients[cont - 1]);
}