var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.setAttribute("class","row");
row.classList.add("row","mt-3");
container.append(row);
var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>foo(data1));
function foo(data1){
for(var i=0;i<data1.length;i++){
   row.innerHTML+=`<div class="col-md-4">
   <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
<h5 class="card-title">${data1[i].name}</h5> 
 <img src="${data1[i].flag}" class="card-img-top" alt="...">
  <div class="card-body">
  <div class="text-center p-3">
<h5 class="Capital">Capital:${data1[i].capital}</h5>
<h5 class="Capital">Region:${data1[i].region}</h5>
<h5 class="Capital">Latitude:${data1[i].latlng[0]}</h5>
<h5 class="Capital">Longitude:${data1[i].latlng[1]}</h5>
<h5 class="Capital">Country code:${data1[i].alpha3Code}</h5>
<button class= "btn btn-primary" onclick="weather(${data1[i].latlng[0]},${data1[i].latlng[1]})">Click For Weather</button>
</div>
</div>
</div>  
   </div>`;
   document.body.append(container); 
}
}
function weather(lat,lon){ 
   fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=6a6d31827039df06d42c23d3027f3389`)
     .then((data)=>data.json()).then((data)=>{
   alert(`Temperature is ${data.main.temp}`);
     });
     }

