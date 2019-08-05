$("button").on("click", function() {
    //api key, tasty chanel ID, URL
    var key = "AIzaSyABeRywiHw1NWbm9A0nb8ZG6IfG2p9HFmI";
    //needs to be set to user input through id in the results section 
    var q = "#results-one, #results-two, #results-three";
    //tasty channel ID 
    var channelId = "UCJFp8uSYCjXOMnkUyb3CQ3Q";
    //endpoint, pass response through "q"
    var queryURL = `https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&q=${q}`;
    
    //AJAX call

    $.ajax({
      url: queryURL,
      method: "GET"

      //response from youtube api
    }).then(function(response) {
      $.getJSON(queryURL, channelId, function(response) {
        var id = response.items[0].id.videoId;
        mainVid(id);
      });
      //populating video to html 
    });
    function mainVid(id) {
      $("#video").html(` <iframe width="560" height="315"
       src="https://www.youtube.com/embed/${id}" 
       frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> `);
    }
   });
   