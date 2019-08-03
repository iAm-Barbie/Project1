$("button").on("click", function() {
  var ndbno = 15083
  var queryURL = `https://api.nal.usda.gov/ndb/V2/reports?ndbno=${ndbno}&type=b&format=json&api_key=dxYdoXKO6VV76LlruaXcuN0V4grH1rzCoUx8KNR1`;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(queryURL);
    console.log(response);
    var foodName = response.foods[0].food.desc.name;
    var calories = response.foods[0].food.nutrients[1].unit;
    var calVal = response.foods[0].food.nutrients[1].value;
    var nutrients = response.foods[0].food.nutrients[2].name;
    var nutVal = response.foods[0].food.nutrients[2].value;
    var fat = response.foods[0].food.nutrients[3].name;
    var fatVal = response.foods[0].food.nutrients[3].value;
    var carbs = response.foods[0].food.nutrients[4].name;
    var carbsVal = response.foods[0].food.nutrients[4].value;
    $(".food").text(foodName);
    $(".calories").text(calories + " "+ calVal);
  
    $(".protein").text(nutrients + " "+ nutVal);
 
    $(".fat").text(fat + " " + fatVal);
  
    $(".carbs").text(carbs + " "+ carbsVal);
    
 






  });
});

//NOTE: ndbno is the food id

//TODO: Need one ndbno on the following:
//Chicken 45217808, lettuce 45276886, pasta 45349342, steak 45290225, tomatoes 11529
//Potatoes, pork, carrots, rice, tofu, onions
//bread, salmon, broccoli, tortillas

//ATTN: Need a function to determine which ndbno to assign to the variable when clicking will that be an if statement?  var ndbno = ###

//ATTN: Will need a div to put all of our info, need a mockup of what the nutrition data should look like, maybe we don't want to pull the name from the USDA, instead we might want to pull the measurement?

//TODO:
