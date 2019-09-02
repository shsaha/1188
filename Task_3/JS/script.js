function activatePlacesSearch() {
  let input = document.getElementById("search_term");
  let autocomplete = new google.maps.places.Autocomplete(input);
}
let recentSearches = []; // creates an empty javascript array

//this function is called using the search buttons "onclick"
function searchFunction(data) {
  recentSearches.push($("#search_term").val()); // This line puts the value from the text box in an array

  $("#search_term").val(""); //  clear the text box after search
  $("#searchHistory").text(""); //clear the seach history window then repopulate with the new array

  // the function below loops through the array and adds each item in the array
  // to the span element within the Search history area
  $.each(recentSearches, function(index, value) {
    $("#searchHistory").append(
      "<li class='historyItem'  onclick='addtotextbox(" +
        index +
        ")'>" +
        value +
        "</li>"
    );
  });
}

function addtotextbox(id) {
  $("#search_term").val(recentSearches[id]);
}
