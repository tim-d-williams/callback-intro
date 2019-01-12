// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(element) {
    if (element === "Waldo") {
      found(arr.indexOf(element));   // execute callback
    }
  })
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index  + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);