const axios = require('axios');

// Request jokes from the API
axios.get('https://ozarktechwebdev.com/api/jokes.json')
    .then((response) => {

        // Store the returned jokes
        const jokes = response.data.jokes;

        // Generate a random index
        const randomIndex = Math.floor(Math.random() * jokes.length);

        // Select one random joke
        const randomJoke = jokes[randomIndex];

        // Display the joke
        console.log("Here's a developer joke for today:");
        console.log();
        console.log("Q: " + randomJoke.question);
        console.log();
        console.log("A: " + randomJoke.answer);

    })
    .catch((error) => {

        // Display an error message if the request fails
        console.log("Could not fetch a joke. Try again later.");

    });