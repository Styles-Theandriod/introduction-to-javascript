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
        img:'http://picsum.photos/200/300',
        name:'micheal jackson',
        artist:'micheal jackson',
        music:''
    },
    {
        img:'http://picsum.photos/200/300',
        name:'micheal jackson',
        artist:'micheal jackson',
        music:''
    },
    {
        img:'http://picsum.photos/200/300',
        name:'micheal jackson',
        name:'micheal jackson',
        music:''
    },
    {
        img:'http://picsum.photos/200/300',
        name:'micheal jackson',
        artist:'micheal jackson',
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
    let color1 = populate('#039')
    let color2 = populate('#039')

    let gradient = 'linear-gradient(to right,' + color1 + ',' + color2 + ')'
    // let gradient = `linear-gradient(to right, ${color1}, ${color2})`
    // document.body.style = `background: ${gradient}`
    document.body.style.background = gradient
}

function reset() {
    current_time.textContent = '00:00'
    total_duration.textContent = '00:00'
    seek_slider.value = 0
}

function randomTrack(){
    isRandom ? pauseRandom() : playRandom()
}

function playRandom(){
    isRandom = true
    randomIcon.classList.add('randomActive')
}

function pauseRandom(){
    isRandom = false
    randomIcon.classList.remove('randomActive')
}


function repeatTrack(){
    let current_track = track_index
    loadTrack(current_track)
    playTrack()
}

function playpauseTrack(){
    if(is_playing){
        pauseTrack()
    }else{
        playTrack()
    }
}

function playTrack(){
    curr_track.play()
    is_playing = true
    track_art.classList.add('rotate')
    wave.classList.add('loader')
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>'
}

function nextTrack(){
    if(track_index < music_list.length - 1){
        track_index += 1
    }else{
        track_index = 0
    }
    loadTrack(track_index)
    playTrack()
}

function seek_To(){
    let seekTo = curr_track.duration * (seek_slider.value / 100)
    curr_track.currentTime = seekTo
}

function setVolume(){
    curr_track.volume = volume_slider.value / 100
}

function setUpdate(){
    
}


// tenary if 

// textContent
// innerHTML
// innerText
// ?then : else 

// a = 10
// b = 20

// a > b ? console.log('a is greater than b') : console.log('b is greater than a')





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