$("button").on("click", function() {
  var ndbno = $("#txt_name").val(); //this pulls info from the input

  //this is the endpoint
  var queryURL = `https://api.nal.usda.gov/ndb/V2/reports?ndbno=${ndbno}&type=b&format=json&api_key=dxYdoXKO6VV76LlruaXcuN0V4grH1rzCoUx8KNR1`;

  //AJAX call to get the JSON we need
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(queryURL);
    console.log(response);
    var foodName = response.foods[0].food.desc.name; //NOTE: might want to replace
    var calories = response.foods[0].food.nutrients[1].unit; //NOTE: might want to replace
    var calVal = response.foods[0].food.nutrients[1].value;
    var nutrients = response.foods[0].food.nutrients[2].name; //NOTE: might want to replace
    var nutVal = response.foods[0].food.nutrients[2].value;
    var fat = response.foods[0].food.nutrients[3].name; //NOTE: might want to replace
    var fatVal = response.foods[0].food.nutrients[3].value;
    var carbs = response.foods[0].food.nutrients[4].name; //NOTE: might want to replace
    var carbsVal = response.foods[0].food.nutrients[4].value;
    $(".food").text(foodName);
    $(".calories").text(calories + " " + calVal);
    $(".protein").text(nutrients + " " + nutVal);
    $(".fat").text(fat + " " + fatVal);
    $(".carbs").text(carbs + " " + carbsVal);
  });
});

//TODO: Which foods need to be mapped a little differently

//TODO: Being that there are 3 foods being chosen, we will need to pull those data-attribute (food ids) into an array, loop through those and put the ajax call into the loop.  There will be 3 separate calls to the API but only one function to control the calls.

//NOTE: Will need to change the value of the ndbno binding to .attr data-attribute of the id/class once we have those in place

//NOTE: We might just want to pull our own names instead of USDA food names.  Base them either off the class/ID or a data-attribute
