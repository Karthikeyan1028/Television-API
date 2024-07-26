document.querySelector("button").addEventListener("click",foo);
async function foo(){
    try {
        var res = document.getElementById("Text").value;
        var data = await fetch(`https://api.tvmaze.com/search/shows?q=${res}`);
        var data1 = await data.json();
        console.log(data1);
        var col= document.getElementById("cardDetails");
        col.innerHTML=`<div class="card" style="width: 20rem;">
  <img src="${data1[0].show.image.original}" class="card-img-top" >
  <div class="card-body">
    <h2 class="card-text">${data1[0].show.name}</h2>
    <div class="card-text">Genre:${data1[0].show.genres}</div>
    <div class="card-text">Language:${data1[0].show.language}</div>
    <div class="card-text">Premiered:${data1[0].show.premiered}</div>
    <div class="card-text">Rating:${data1[0].show.rating.average}</div>
    <div class="card-text">Runtime:${data1[0].show.runtime}</div>    
  </div>
</div>`
        
    } catch (error) {
        console.log(error);
    }
}