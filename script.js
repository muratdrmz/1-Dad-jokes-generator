const btnEl=document.getElementById('btn');
const jokeEl=document.getElementById('joke');

const apiKey = "zSZaLNej+qX+pW2iXgSXOA==957UyBhf1GE8fKp4";

const options={
 method:'GET',
 headers:{
  'X-Api-Key':apiKey,
 },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
 jokeEl.innerHTML='Updating...'
 btnEl.disable=true;
 btnEl.innerHTML='Loading...';
const response= await fetch(apiURL,options)
const data= await response.json();
// console.log(data[0].joke);
// console.log(data);
btnEl.disable=false;
btnEl.innerHTML='Tell me more joke';

jokeEl.innerHTML=data[0].joke;
}



btnEl.addEventListener('click',getJoke);