
const searchMovie=async()=>{
    if(inputPlace.value!="")
    { 
       var searchName=document.getElementById('inputPlace').value
        
    }else{
      alert("Pleas Enter Movie Name")

    }
    
   const url=`https://www.omdbapi.com/?i=tt3896198&apikey=1b28a841&t=${searchName}`
 try{

    const response=await fetch(url)
    const movieDetails=await response.json()
    console.log(movieDetails);
    document.querySelector(".card").innerHTML = `
  <div class="card mb-3" style="max-width: 640px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src=${movieDetails.Poster} class="img-fluid rounded-start" >
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-text text-center">${movieDetails.Title}</h5>
        <p class="card-text text-center">Ratings:<span>${movieDetails.Ratings[0].Value}</span></p>
        <p class="card-title text-center">${movieDetails.Genre}</p>
        <p class="card-text">Released:${movieDetails.Released}</p>
        <p class="card-text">Director:${movieDetails.Director}</p>
        <p class="card-text">Released:${movieDetails.Writer}</p>
        <p class="card-text">Actors:${movieDetails.Actors}</p>
        <p class="card-text">Country:${movieDetails.Country}</p>
        <p class="card-text">Type:${movieDetails.Type}</p>
        </div>
    </div>
  </div>
</div> `
 }catch(err){
    console.log(err);
 }
 }
 const reload=()=>{
  location.reload();
 }