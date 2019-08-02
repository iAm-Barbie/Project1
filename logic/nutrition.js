$("button").on("click", function() {
  var queryURL =
    "https://api.nal.usda.gov/ndb/V2/reports?ndbno=01009&type=b&format=json&api_key=dxYdoXKO6VV76LlruaXcuN0V4grH1rzCoUx8KNR1";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(queryURL);
    console.log(response);
    console.log(response.foods[0].food.desc.name);
    console.log(response.foods[0].food.nutrients[1].unit);
    console.log(response.foods[0].food.nutrients[1].value);
    console.log(response.foods[0].food.nutrients[2].name);
    console.log(response.foods[0].food.nutrients[2].value);
    console.log(response.foods[0].food.nutrients[3].name);
    console.log(response.foods[0].food.nutrients[3].value);
    console.log(response.foods[0].food.nutrients[4].name);
    console.log(response.foods[0].food.nutrients[4].value);
  });
});

//NOTE: ndbno is the food id
