
var searchString = [];

$("#search-button").on("click", function() {
    //api key, tasty chanel ID, URL
    var key = "AIzaSyABeRywiHw1NWbm9A0nb8ZG6IfG2p9HFmI";
    //needs to be set to user input through id in the results section 
    var q = searchString.join();
    console.log(q);
    //tasty channel ID 
    var channelId = "UCJFp8uSYCjXOMnkUyb3CQ3Q";
    //endpoint, pass response through "q"
    var queryURL = `https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&q=${q}`;
    console.log(queryURL);
    //AJAX call

    $.ajax({
      url: queryURL,
      method: "GET"

      //response from youtube api
    }).then(function(response) {
        console.log("lol");
      $.getJSON(queryURL, function(response) {
        var id = response.items[0].id.videoId;
        mainVid(id);
      });
      //populating video to html 
    });
    function mainVid(id) {
        console.log("id" + id)
      $(".results>td").html(` <iframe width="560" height="315"
       src="https://www.youtube.com/embed/${id}" 
       frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> `);
    }
   });



$(".food").on("click", function(){
    $(".c1").append($(this).clone());
    var searchTerm = $(this).data("search")
    searchString.push(searchTerm);
    console.log(searchTerm);
})


$("#clear-button").on("click", function() {
    $(".c1").empty();
    searchString = [];
    console.log("click");
    $(".results>td").empty();
})