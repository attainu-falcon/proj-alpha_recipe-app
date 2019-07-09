//var rating = document.getElementById("rating3").innerHTML;

//var rating = document.querySelector('[id^="rating"]').innerText;
var rating = [];
var newID = $('li[id^="rating"]');
console.log(newID);
var idfetch = $('li[id^="rating"]')
  .map(function() {
    return $(this).text();
  })
  .get();
//console.log(idfetch.length);

for (var i = 0; i < idfetch.length; i++) {
  document.getElementById("output" + i).innerHTML = getStars(
    parseInt(idfetch[i])
  );
  //console.log("output",i);
}

//console.log(rating);
function getStars(rating) {
  rating = Math.round(rating * 2) / 2;
  // console.log(rating);
  let output = [];

  //To fill rating

  for (var i = rating; i >= 1; i--) {
    output.push(
      '<i class= "fa fa-star" aria-hidden="true" style="color:gold !important;"></i>&nbsp;'
    );
    //console.log("For Append",i);
  }

  for (let i = 5 - rating; i >= 1; i--) {
    output.push('<i class= "fa fa-star" aria-hidden="true" ></i>&nbsp;');
    //console.log("For empty stars",i);
  }

  return output.join("");
}

//$('li[id*="rating"]').text()

/*var n=document.querySelector("#rating8").innerText;
for (let i=n;i>=1; i--){
      document.querySelector("#output8").innerHTML +='*';
      // output.push('<i class= "fa fa-star" aria-hidden="true" style="color:gold:"></i>&nbsp;');
      console.log("For empty stars",i);
    }*/
