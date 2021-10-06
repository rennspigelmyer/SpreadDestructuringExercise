// 1a 
const mcuShows = ["Loki", "What if...?"];

// 1b
const starWarsShows = ["The Mandalorian", "The Bad Batch"];

// 1c Using Spread
const disneyPlusShows = [
    mcuShows,
    starWarsShows,
    "Monsters At Work"
];

// 1d
console.log(disneyPlusShows);


// 2a 
/* const netflixMovies = {};
netflixMovies = ["Action"]= "Extraction"
netflixMovies = ["Crime"]= "Irishman" */

// Create a const variable called amazonPrimeMovies and set the value to an object with the following key value pairs (key: "action" value: "The Tomorrow War") & (key: "drama" value: "One Night In Miami")
const netflixMovies = {
    action: "Extraction",
    crime: "The Irishman"
}

// 2b 
// Create a const variable called amazonPrimeMovies and set the value to an object with the following key value pairs (key: "action" value: "The Tomorrow War") & (key: "drama" value: "One Night In Miami")
const amazonPrimeMovies = {
    action: "The Tomorrow War",
    drama: "One Night In Miami"
}

// 2c - Not Completed yet.

const streamingMovies = [
    netflixMovies,
    amazonPrimeMovies,
    //musical: "Hamilton",

]
