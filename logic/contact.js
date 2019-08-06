var firebaseConfig = {
  apiKey: "AIzaSyAABvzX_lsC3TyMocWFSwUpHyxdyMjCdv0",
  authDomain: "couch-to-cook-feedback.firebaseapp.com",
  databaseURL: "https://couch-to-cook-feedback.firebaseio.com",
  projectId: "couch-to-cook-feedback",
  storageBucket: "",
  messagingSenderId: "354357128992",
  appId: "1:354357128992:web:a08906b00623fd1a"
};

//
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

//
//click submit to send the feedback info to Firebase
$("#submitBtn").on("click", function() {
  event.preventDefault();
  let name = $("#name")
    .val()
    .trim();
  let email = $("#email")
    .val()
    .trim();
  let feedback = $("#feedback")
    .val()
    .trim();

  //
  //object for the Firebase
  var feedbackObject = {
    name: name,
    email: email,
    feedback: feedback
  };

  //push to the Firebase database
  database.ref().push(feedbackObject);

  //to clear values
  clearValues();
});

//function to remove data
function clearValues() {
  $("#name").val("");
  $("#email").val("");
  $("#feedback").val("");
}
