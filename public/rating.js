// var rating = document.getElementById("rating").innerHTML;
// document.getElementById("stars").innerHTML = getStars(parseInt(rating));

// function getStars(rating){
//   rating = Math.round(rating*2)/2 ;
//   console.log(rating);
//   let output = [];

//   //To fill rating

//   for (var i=rating; i>=1; i--){
//     output.push('<i class= "fa fa-star" aria-hidden="true" style="color:gold:"></i>&nbsp;');
//     console.log("For Append",i);}

//   for (let i=(5-rating);i>=1; i--){
//     output.push('<i class= "fa fa-star" aria-hidden="true" style="color:gold:"></i>&nbsp;');
//     console.log("For empty stars",i);
//   }

//   return output.join('');
// }

// $('li[id*="rating"]').text()

var n=document.querySelector("#rating8").innerText;
for (let i=n;i>=1; i--){
      document.querySelector("#output8").innerHTML += '*';
      // output.push('<i class= "fa fa-star" aria-hidden="true" style="color:gold:"></i>&nbsp;');
      console.log("For empty stars",i);
    }
