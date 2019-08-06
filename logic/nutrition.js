$(".food").on("click", function() {
  var ndbno = $(this).attr("data-id");

  //this is the endpoint
  var queryURL = `https://api.nal.usda.gov/ndb/V2/reports?ndbno=${ndbno}&type=b&format=json&api_key=dxYdoXKO6VV76LlruaXcuN0V4grH1rzCoUx8KNR1`;

  // //AJAX call to get the JSON we need
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(queryURL);
    console.log(response);
    // var foodName = response.foods[0].food.desc.name; //NOTE: might want to replace
    // var calories = response.foods[0].food.nutrients[1].unit; //NOTE: might want to replace
    // var calVal = response.foods[0].food.nutrients[1].value;
    // var nutrients = response.foods[0].food.nutrients[2].name; //NOTE: might want to replace
    // var nutVal = response.foods[0].food.nutrients[2].value;
    // var fat = response.foods[0].food.nutrients[3].name; //NOTE: might want to replace
    // var fatVal = response.foods[0].food.nutrients[3].value;
    // var carbs = response.foods[0].food.nutrients[4].name; //NOTE: might want to replace
    // var carbsVal = response.foods[0].food.nutrients[4].value;
    // $(".food").text(foodName);
    // $(".calories").text(calories + " " + calVal);
    // $(".protein").text(nutrients + " " + nutVal);
    // $(".fat").text(fat + " " + fatVal);
    // $(".carbs").text(carbs + " " + carbsVal);
  });
});

//TODO: Need an array to contain the data-id attributes.

//TODO: onClick needs to figure out which one was clicked by data-id, push the data-id to the array, loop through the array to change the foodid and make 3 api calls.

//TODO: in the ajax promise populate dynamic divs.  name, calories, protein, carbs, fat and the respective values.

//TODO: empty the contents upon click
//TODO: prevent default
