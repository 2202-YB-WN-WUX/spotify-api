// declare our settings
const endpointURL = "https://api.spotify.com/v1/browse/new-releases";

const token = "BQDoSHECy1ZuvXb_0OP1ZiijXWpXpepb8ujbaNGXe4CtTLL0MQiUZ51oV8r7qTe0ZxHxwvwoUxX2rAJqwmPF0wsB_po3mbvyf7FXDKJ4TWWhOELQbI0sl2nKj5wICaYAPxkErd_nAFMXcPau-ELbO9WlfPC8Am8lNo0Q1mnQhIFO";

let showMusic = (music) => {
    console.log("this is running!");
    let renderArtists = (artists) => {
        let allArtists = [];
        artists.forEach((item) => {
            // console.log(item.name);
            allArtists.push(item.name);
        })
        return allArtists;
    }
    music.forEach((item) => {
        // this function will run for each item
        // console.log(item);
        result.innerHTML += `
        <div>
        <img src="${item.images[0].url}" alt="${item.name} 
        cover">
        <h2>${item.name}</h2>
        <h3>${renderArtists(item.artists)}</h3>
        </div >
    `;


    })
}

// Activity: Show the album/single names in a grid
// Show the album cover.

// Show whether the track is an album or a single.
// Use a different color to render the label

$.ajax({
    url: endpointURL,
    type: 'GET',
    // headers are a way to send identifying infomation 
    // about yourself to the server
    headers: {
        'Authorization': 'Bearer ' + token
    },
    success: function (data) {
        // console.log(data.albums.items);
        showMusic(data.albums.items);
    },
    error: function (error) {
        console.log(error);
    }
});