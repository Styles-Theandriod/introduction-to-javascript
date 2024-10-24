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
    curr_track.load();

    track_art.style.backgroundImage = `url(${music_list[track_index].img})`
    track_name.textContent = music_list[track_index].name
    track_artist.textContent = music_list[track_index].artist
    now_playing.textContent = 'Playing music' + (track_index + 1) + 'of' + music_list.length

    updateTimer = setInterval(setUpdate, 1000)

    curr_track.addEventListener('ended', nextTrack)
    random_bg_color()
}

function random_bg_color(){
    let hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    
    let a;

    function populate(a){
        for(let i =0; i <= 6; i++){
            let x = Math.round(Math.random() * 14)
            let y = hex[x]
            a += y
            a = a + y
        }
        return a
    }

}




// console.log(Math.round(10.6));

// setInterval
// setTimeout
// clearInterval
// clearTimeout

// iife function 
// anonymous function 
// arrow function 

// (((function)){
//     console.log('hello world');
    
// }())




setInterval(() => {
    console.log('Good morning sir');
}, 2000);

// IIFE (Immediately Invoked Function Expression)
(function(){
    console.log('hello world');
    
})()


const myFunction = ()=>{
    console.log('hello world');
}

myFunction()