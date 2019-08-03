$(document).ready(function() {
  //api key, tasty chanel ID, URL
  var key = "AIzaSyABeRywiHw1NWbm9A0nb8ZG6IfG2p9HFmI";
  var playlistId = "UCJFp8uSYCjXOMnkUyb3CQ3Q";
  var queryURL = "https://www.googleapis.com/youtube/v3/search";
  var userChoice = document.getElementById("results1, results2, results3");
  var recipeSearch = userChoice.value;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var options = {
      part: "snippet",
      q: recipeSearch,
      key: key,
      maxResults: 3,
      playlistId: playlistId
    };

    function loadVids() {
      $.getJSON(URL, options, function(data) {
        var id = data.items[0].snippet.resourceId.videoId;
        mainVid(id);
        resultsLoop(data);
      });
    }
    loadVids();

    function mainVid(id) {
      $("#video").html(`
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                  `);
    }

    function resultsLoop(data) {
      $.each(data.items, function(i, item) {
        var thumb = item.snippet.thumbnails.medium.url;
        var title = item.snippet.title;
        var desc = item.snippet.description.substring(0, 100);
        var vid = item.snippet.resourceId.videoId;
        $("main").append(`
                              <article class="item" data-key="${vid}">
<img src="${thumb}" alt="" class="thumb">
                                  <div class="details">
                                      <h4>${title}</h4>
                                      <p>${desc}</p>
                                  </div>
                              </article>
                          `);
      });
    }

    $("main").on("click", "article", function() {
      var id = $(this).attr("data-key");
      mainVid(id);
    });
  });
});
