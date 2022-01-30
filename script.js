console.log('Welcome to Spotify');

//Initializing the variables

let Songindex = 0;
let audioElement = new Audio("Songs/Arlow & Shiah Maisel - 21 [NCS Release].mp3");
let masterPlay = document.getElementById('masterPlay');
let slider = document.getElementById('slider');
let SongItem = Array.from(document.getElementsByClassName('song'));
let SongItemPlay = Array.from(document.getElementsByClassName("play"));

let songs = [
    {SongName: 'Arlow & Shiah Maisel - 21', SongCover: "Images/songimage.jpg", SongPath: "Songs/Arlow & Shiah Maisel - 21 [NCS Release].mp3"},
    {SongName: 'BraveLion - Bum Ba Ye', SongCover: "Images/songimage.jpg", SongPath: "Songs/BraveLion - Bum Ba Ye (Free Music for Vlogs).mp3"},
    {SongName: 'Ikson - Throwback', SongCover: "Images/songimage.jpg", SongPath: "Songs/Ikson - Throwback (Free Music for Vlogs).mp3"},
    {SongName: 'Jay Someday - Farewell', SongCover: "Images/songimage.jpg", SongPath: "Songs/Jay Someday - Farewell.wav"},
    {SongName: 'LiQWYD - Glow', SongCover: "Images/songimage.jpg", SongPath: "Songs/LiQWYD - Glow (Free Music for Vlogs).mp3"},
    {SongName: 'Markvard - Perfect Day', SongCover: "Images/songimage.jpg", SongPath: "Songs/Markvard - Perfect Day (Free Music for Vlogs).mp3"},
    {SongName: 'Niwel - Stories', SongCover: "Images/songimage.jpg", SongPath: "Songs/Niwel - Stories (Free Music for Vlogs).mp3"}
]
// Getting songs info in midsec

SongItem.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByClassName('SongCover')[0].src = songs[i].SongCover;
    element.getElementsByClassName('songName')[0].innerText = songs[i].SongName;
    // element.getElementsByClassName('time')[0].innerText = audioElement.duration;
});

// play/Pause from masterPlay

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.src = "Images/circle-pause-regular.svg"
        makeallPlay();
        document.getElementById(Songindex).src="Images/circle-pause-regular.svg";
        document.getElementsByClassName('DisplayedSong')[0].innerText = songs[Songindex].SongName;
}
else{
    audioElement.pause();
    masterPlay.src = "Images/play-solid.svg"
    makeallPlay();
        document.getElementById(Songindex).src="Images/play-solid.svg";
        document.getElementsByClassName('DisplayedSong')[0].innerText = songs[Songindex].SongName;
}
})

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //updating slider

    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    slider.value = progress;
})

slider.addEventListener('change', ()=>{
    audioElement.currentTime = (slider.value  *audioElement.duration)/100;
})

function makeallPlay(){
    SongItemPlay.forEach((element) =>{
        element.src = "Images/play-solid.svg";
    })
}

SongItemPlay.forEach((element)=> {
    element.addEventListener('click', (e)=>{
        makeallPlay();
        Songindex = parseInt(e.target.id);
        e.target.src = "Images/circle-pause-regular.svg"
        audioElement.src = songs[Songindex].SongPath;
        audioElement.play();
        audioElement.currentTime = 0;
        masterPlay.src = "Images/circle-pause-regular.svg"
        document.getElementsByClassName('DisplayedSong')[0].innerText = songs[Songindex].SongName;
    })
})

document.getElementById('backward').addEventListener('click', ()=>{
    if(Songindex<=0){
        Songindex = 0;
    }
    else{
        Songindex = Songindex-1;
    }

        audioElement.src = songs[Songindex].SongPath;
        audioElement.play();
        audioElement.currentTime = 0;
        masterPlay.src = "Images/circle-pause-regular.svg";
        makeallPlay();
        document.getElementById(Songindex).src="Images/circle-pause-regular.svg";
        document.getElementsByClassName('DisplayedSong')[0].innerText = songs[Songindex].SongName;
});

document.getElementById('forward').addEventListener('click', ()=>{
    if(Songindex>=6){
        Songindex = 0;
    }
    else{
        Songindex = Songindex+1;
    }
        audioElement.src = songs[Songindex].SongPath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.src = "Images/circle-pause-regular.svg";
        makeallPlay();
        document.getElementById(Songindex).src="Images/circle-pause-regular.svg";
        document.getElementsByClassName('DisplayedSong')[0].innerText = songs[Songindex].SongName;
});

