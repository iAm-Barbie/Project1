var foodArray = [];

//this will pull the data-attributes of each food chosen
$("#search-button").on("click", function() {
  //TODO: loop however many times there are members of the array
  var ndbno = $(this).attr("data-id");
  var foodType = $(this).attr("id");

  //this is the endpoint
  var queryURL = `https://api.nal.usda.gov/ndb/V2/reports?ndbno=${ndbno}&type=b&format=json&api_key=dxYdoXKO6VV76LlruaXcuN0V4grH1rzCoUx8KNR1`;

  // //AJAX call to get the JSON we need
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    //assigns the values from the JSON
    var calVal = response.foods[0].food.nutrients[1].value;
    var nutVal = response.foods[0].food.nutrients[2].value;
    var fatVal = response.foods[0].food.nutrients[3].value;
    var carbsVal = response.foods[0].food.nutrients[4].value;

    //appends the values to the usdaInfo table
    $("#usdaInfo").append(
      `<tr class="usdaFood"><td rowspan="2">${foodType}</td><tr>`
    );
    $("#usdaInfo").append(
      `<tr class="usdaValues"><td class="unit">Calories</td><td class="value">${calVal}</td><tr>`
    );
    $("#usdaInfo").append(
      `<tr class="usdaValues"><td class="unit">Protein</td><td class="value">${nutVal}g per serving</td><tr>`
    );
    $("#usdaInfo").append(
      `<tr class="usdaValues"><td class="unit">Carbohydrates</td><td class="value">${carbsVal}g per serving</td><tr>`
    );
    $("#usdaInfo").append(
      `<tr class="usdaValues"><td class="unit">Fats</td><td class="value">${fatVal}g per serving</td><tr>`
    );
  });
});

//
//this is to clear any results that are pulling from USDA
$("#clear-button").on("click", function() {
  $("#usdaInfo").empty();
});

//TODO: need to push the data attributes to the array
//TODO: need to loop 3 times and call the API 3 times
