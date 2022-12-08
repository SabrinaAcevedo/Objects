const ol = document.querySelector("ol");
const movies = [
    {
     name: "13 Going on 30",
     year: "2004",
     director: "Gary Winick",
     image: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/chameleon/title-movie/232306_13_going_on_30_2004_1400x2100_7.jpg?itok=AvyyeO9S",
    },
    {
     name: "The Proposal",
     year: "2009",
     director: "Anne Fletcher",
     image: "https://m.media-amazon.com/images/M/MV5BOGM5YTNiYzktNmEwZC00ZjE5LWIyNzEtOTUwNDE0NmVkYzE3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    },
    {
     name: "How to Lose a Guy in 10 Days",
     year: "2003",
     director: "Donald Petrie",
     image: "https://upload.wikimedia.org/wikipedia/en/0/07/HowToLoseAGuyimp.jpg",
    }
];
const template = movies.map(movie =>`
<li>
    <p>Name: ${movie.name}</p>
    <p>Year: ${movie.year}</p>
    <p>Director: ${movie.director}</p>
    <img src=${movie.image} height="400"> 
</li>
`);

console.log(template.join(''));
ol.innerHTML = template.join('');