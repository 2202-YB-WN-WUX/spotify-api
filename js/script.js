// declare our settings
// this is the new release endpoint
// const endpointURL = "https://api.spotify.com/v1/browse/new-releases";
// this is the search endpoint
const endpointURL = "https://api.spotify.com/v1/search?q=milesdavis&type=track";
// 

const token = "BQAlGgy2wOu9vs7bZvMpNRlGQAMduYjNdNPGC9378cOWBvoHBB4ZtkH3SD7-LyxohTgiUbh85HlghWflfsz_glt14oO835jFlzE9fyuFW_7Bk6lj5E1EqpRHNOi0HDKpqN8sQoPHr7jUe05bCJH41b1jsThDQtOYmy9ya_hvSUm7";

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