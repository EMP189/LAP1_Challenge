//Setup the form buttons/search bar and their event listeners
const searchBar = document.querySelector('.searchBox');
const searchButton = document.querySelector('#searchBtn');
const luckyButton = document.querySelector('#luckyBtn');

searchBar.addEventListener('search',searchAnimals);
searchButton.addEventListener('click',searchAnimals);
luckyButton.addEventListener('click',searchFacts);

// fetch and display the results
function searchAnimals(e) {
    e.preventDefault();
    fetch('http://localhost:3000/')
    .then( r => r.text())
    .then(result => { document.getElementById('stuff').innerText = result})
    .catch(console.warn)
}

//fetch and display random facts about an animal
function searchFacts(e) {
    e.preventDefault();
    fetch('http://localhost:3000/random')
    .then( r => r.text())
    .then(result => { document.getElementById('stuff').innerText = result})
    .catch(console.warn)
}