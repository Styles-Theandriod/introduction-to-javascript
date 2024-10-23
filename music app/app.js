let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let current_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let is_playing = false;
let isRandom = true;
let updateTimer;

const music_list = [
    {
        img:'',
        name:'',
        artist:'',
        music:''
    },
    {
        img:'',
        name:'',
        artist:'',
        music:''
    },
    {
        img:'',
        name:'',
        artist:'',
        music:''
    },
    {
        img:'',
        name:'',
        artist:'',
        music:''
    }
];



// function loadTrack(name, age){
//     console.log(`${name} is ${age} years old`);
// }

// loadTrack('emmanuel', 30);

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);

    reset()

    curr_track.src = music_list[track_index].music
    
}


// setInterval
// setTimeout
// clearInterval
// clearTimeout



setInterval(() => {
    console.log('Good morning sir');
}, 2000);