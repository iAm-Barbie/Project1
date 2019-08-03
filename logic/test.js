$("button").on("click", function() {
  //api key, tasty chanel ID, URL
  var key = "AIzaSyABeRywiHw1NWbm9A0nb8ZG6IfG2p9HFmI";
  var q = "dogs";
  //var playlistId = "UCJFp8uSYCjXOMnkUyb3CQ3Q";
  var queryURL = `https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&q=${q}`;
  //var recipeSearch = userChoice.value;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $.getJSON(queryURL, function(response) {
      var id = response.items[0].id.videoId;
      mainVid(id);
    });
  });

  function mainVid(id) {
    $("#video").html(`
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                  `);
  }
});

//     function resultsLoop(data) {
//       $.each(data.items, function(i, item) {
//         var thumb = item.snippet.thumbnails.medium.url;
//         var title = item.snippet.title;
//         var desc = item.snippet.description.substring(0, 100);
//         var vid = item.snippet.resourceId.videoId;
//         $("main").append(`
//                               <article class="item" data-key="${vid}">
//  <img src="${thumb}" alt="" class="thumb">
//                                   <div class="details">
//                                       <h4>${title}</h4>
//                                       <p>${desc}</p>
//                                   </div>
//                               </article>
//                           `);
//       });
//     }
//     $("main").on("click", "article", function() {
//       var id = $(this).attr("data-key");
//       mainVid(id);
//     });
//   });
//  });
