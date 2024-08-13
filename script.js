
// Initialise the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar= document.getElementById('myProgressBar')
let gif= document.getElementById('gif')
let masterSongName= document.getElementById('masterSongName')
let masterCoverInfo= document.getElementById('coverInfo')
let songItems=Array.from(document.getElementsByClassName('songItem'))
let coverInfos=Array.from(document.getElementsByClassName('coverDetail'))
let timeDisplay=Array.from(document.getElementsByClassName('timeDisplay'))




let songs = [
    { songName: "See you again-feat.Charlie Puth", filePath: "songs/1.mp3", coverPath: "covers/see_you_again cover.jpg",songDuration:"03:49"},
    { songName: "We own it- 2 Chainz & Wiz Khalifa", filePath: "songs/2.mp3", coverPath: "covers/fast1 cover.jpeg" ,songDuration:"03:46"},
    { songName: "Six days-feat.Mos Def", filePath: "songs/3.mp3", coverPath: "covers/td 1.jpeg" ,songDuration:"03:49"},
    { songName: "Tokyo Drift-feat.Teriyaki Boyz", filePath: "songs/4.mp3", coverPath: "covers/td 2.jpeg" ,songDuration:"04:17"},
    { songName: "Danza Kuduro-feat.Don Omar", filePath: "songs/5.mp3", coverPath: "covers/td 3.jpeg" ,songDuration:"03:17"},
    { songName: "Let me love you-feat.Justin Bieber", filePath: "songs/6.mp3", coverPath: "covers/let me love you cover.jpeg" ,songDuration:"03:26"},
    { songName: "Mood-feat.Iann Dior", filePath: "songs/7.mp3", coverPath: "covers/mood 24 cover.png" ,songDuration:"02:24"},
    { songName: "Shape of you-feat.Ed Sheeran", filePath: "songs/8.mp3", coverPath: "covers/shape of you cover.jpeg" ,songDuration:"03:55"}
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src= songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerHTML= songs[i].songName
    element.getElementsByClassName("songDuration")[0].innerHTML= songs[i].songDuration
    // audioElement.loop=true;
    // audioElement.load();
    

})

coverInfos.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src= songs[i].coverPath

})



// handle Play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused ||audioElement.currentTime<=0 ){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0

    }
})


// listen to Events
audioElement.addEventListener('timeupdate',()=>{
    // updateseekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
    


    if(audioElement.ended){
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity=0;
        
    }

});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
    
 


})



const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        // element.classList.remove('fa-circle-pause');
        // element.classList.add('fa-circle-play');
       
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' ,(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        // e.target.classList.remove('fa-circle-play');
        // e.target.classList.add('fa-circle-pause');        
        audioElement.src =`songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        masterCoverInfo.src = songs[songIndex].coverPath;
        audioElement.currentTime=0;
        audioElement.play();
        
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
        audioElement.src =`songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        masterCoverInfo.src = songs[songIndex].coverPath;
        gif.style.opacity=1;
        audioElement.currentTime=0;
        audioElement.play();
        
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')


})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
        audioElement.src =`songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        masterCoverInfo.src = songs[songIndex].coverPath;
        gif.style.opacity=1;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')


})
