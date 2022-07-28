// declare our settings
// this is the new release endpoint
// const endpointURL = "https://api.spotify.com/v1/browse/new-releases";

// this is the search endpoint
const endpointURL = "https://api.spotify.com/v1/search?q=milesdavis&type=track";
// 

const token = "BQAP49fEgPcbOc_s7ZSAIt1kgWDPEazoU5phKxCbcCBgxdxbjuHXaU6VxnJ-cdAs8zc0AjKW8HA3wfpVtbJxda95AvjfOjCTdi2cMYh2Yql4DbAMq0ooeEFPZmJtjgdZm_0LiU6cUVxhQqFc6jdbhCgqtv67Gl3x2A8Fz5q_d4WT";

let showMusic = (music) => {
    console.log("this is running!");
    let renderArtists = (artists) => {
        let allArtists = [];
        artists.forEach((item) => {
            // console.log(item.name);
            allArtists.push(item.name);
        })
        return allArtists.join(', ');
    }

    // Activity: show the artists with a space between each name.

    music.forEach((item) => {
        // this function will run for each item
        // console.log(item);
        result.innerHTML += `
        <div>
        <img src="${item.album.images[0].url}" alt="${item.name} cover">
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
        // console.log(data);
        // console.log(data.tracks.items);
        showMusic(data.tracks.items);
    },
    error: function (error) {
        console.log(error);
    }
});

// Activity:
// Show the Miles Davis tracks on the screen, with the album covers.

// Show the length of each track in minutes and seconds.
// You'll need to convert milliseconds to min/sec (use a Google search).

// Step 1: Show the popularity of the track as a number.
// Step 2: If the track is >50 && <= 80 popularity, show a label
// over the image which says "Trending".
// >80 popularity: make the label say "Hot".