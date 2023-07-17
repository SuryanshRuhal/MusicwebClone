console.log("WELCOME TO MELANCHOLY");
let songIndex=0;
let audioElement= new Audio('hindisongs/1.mp3');
let masterplay= document.getElementById("masterPlay");
let progressbar= document.getElementById("progressbar");
let songplay= document.getElementById("songplay");
let songitem = Array.from(document.getElementsByClassName("songitem"));

let songs=[
    {songName:"Ajeeb Dastan Hai Yeh", timestamp:"4:48", filePath:"hindisongs/1.mp3"},
    {songName:"Kyon", timestamp:"4:26",filePath:"hindisongs/2.mp3"},
    {songName:"Phir Le Aya Dil", timestamp:"4:45",filePath:"hindisongs/3.mp3"},
    {songName:"Tera Mujhse Hai Pehle Ka", timestamp:"4:13 ",filePath:"hindisongs/4.mp3"},
    {songName:"Chalte Chalte Yun Hi Koi", timestamp:"5:54",filePath:"hindisongs/5.mp3"},
    {songName:"Tu Jaane Na", timestamp:"5:37",filePath:"hindisongs/6.mp3"},
    {songName:"Tera Yaar Hu Main", timestamp:"0:34",filePath:"hindisongs/7.mp3"},
    {songName:"Tum Tak", timestamp:"5:05",filePath:"hindisongs/8.mp3"},
    {songName:"Mitwa", timestamp:"6:00",filePath:"hindisongs/9.mp3"},
    {songName:"Yeh Sham Mastani", timestamp:"4:41",filePath:"hindisongs/10.mp3"},
    {songName:"Sooraj Ki Bahoon Main", timestamp:"3:24",filePath:"hindisongs/11.mp3"},
    {songName:"Illahi", timestamp:"3:49",filePath:"hindisongs/12.mp3"},
    {songName:"Kya Mohabbat Hai", timestamp:"5:02",filePath:"hindisongs/13.mp3"},
    {songName:"Bahon Mein Chale Aao", timestamp:"3:53",filePath:"hindisongs/14.mp3"},
    {songName:"Hai Apna Dil To Aawara", timestamp:"4:25",filePath:"hindisongs/15.mp3"},
    {songName:"Hoshwalon Ko Khabar Kya", timestamp:"5:07",filePath:"hindisongs/16.mp3"},
    {songName:"Jane Kahan Mera Jigar Gaya Ji", timestamp:"3:38",filePath:"hindisongs/17.mp3"},
    {songName:"Kaun Disha mein", timestamp:"6:44",filePath:"hindisongs/18.mp3"},
    {songName:"Kun Faya Kun", timestamp:"7:52",filePath:"hindisongs/19.mp3"},
    {songName:"Main Pal Do Pal Ka Shayar Hun", timestamp:"3:22",filePath:"hindisongs/20.mp3"},
    {songName:"Ram Chandra Kripalu", timestamp:"3:53",filePath:"hindisongs/21.mp3"},
    {songName:"Tum Itna Jo Muskura Rahe", timestamp:"5:17",filePath:"hindisongs/22.mp3"},
    {songName:"Yeh Dil Tum Bin Lagta", timestamp:"5:51",filePath:"hindisongs/23.mp3"},
    {songName:"Zeehale Muskin", timestamp:"7:26",filePath:"hindisongs/24.mp3"},
    {songName:"Zindagi Kaisi Hai Paheli", timestamp:"3:30",filePath:"hindisongs/25.mp3"},
    
] 

songitem.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByClassName("songname")[0].innerText= songs[i].songName;
    element.getElementsByClassName("timestamp")[0].innerText= songs[i].timestamp;
})
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-regular');
        masterplay.classList.remove('fa-circle-play'); 
        masterplay.classList.add('fa-regular'); 
        masterplay.classList.add('fa-circle-pause'); 
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
    }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value= progress;
    
})
progressbar.addEventListener('change',()=> {
        audioElement.currentTime = progressbar.value * audioElement.duration / 100;
})

const makeallplay =()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{ 
        element.classList.remove('fa-regular');
        element.classList.remove('fa-circle-pause'); 
        element.classList.add('fa-regular'); 
        element.classList.add('fa-circle-play'); 
    })
}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeallplay();
        songIndex= parseInt(e.target.id);
    e.target.classList.remove('fa-regular');
    e.target.classList.remove('fa-circle-play'); 
    e.target.classList.add('fa-regular'); 
    e.target.classList.add('fa-circle-pause'); 
    audioElement.src=`hindisongs/${songIndex+1}.mp3`;
    songplay.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-regular');
        masterplay.classList.remove('fa-circle-play'); 
        masterplay.classList.add('fa-regular'); 
        masterplay.classList.add('fa-circle-pause'); 
    })
})


 document.getElementById("previous").addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=24;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`hindisongs/${songIndex+1}.mp3`;
    songplay.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-regular');
        masterplay.classList.remove('fa-circle-play'); 
        masterplay.classList.add('fa-regular'); 
        masterplay.classList.add('fa-circle-pause');
        makeallplay();
        document.getElementById(songIndex).classList.remove('fa-regular');
        document.getElementById(songIndex).classList.remove('fa-circle-play');
        document.getElementById(songIndex).classList.add('fa-regular');
        document.getElementById(songIndex).classList.add('fa-circle-pause');
 })
 document.getElementById("next").addEventListener('click',()=>{
    if(songIndex>=24){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`hindisongs/${songIndex+1}.mp3`;
    songplay.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-regular');
        masterplay.classList.remove('fa-circle-play'); 
        masterplay.classList.add('fa-regular'); 
        masterplay.classList.add('fa-circle-pause');
        makeallplay();
        document.getElementById(songIndex).classList.remove('fa-regular');
        document.getElementById(songIndex).classList.remove('fa-circle-play');
        document.getElementById(songIndex).classList.add('fa-regular');
        document.getElementById(songIndex).classList.add('fa-circle-pause');
 })
 let anu=0;
 document.getElementById("shuffle").addEventListener('click',()=>{
    if(anu===0){
        anu=1;
        document.getElementById("shuffle").style.opacity="0.6";
        document.getElementById("shuffle").style.border="2px solid white";
    }
    else {
        anu=0;
        document.getElementById("shuffle").removeAttribute('style');
    }
    console.log("anu:"+anu);
    songIndex= Math.ceil(Math.random()*24);
    console.log(songIndex);
    audioElement.src=`hindisongs/${songIndex+1}.mp3`;
    songplay.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-solid');
        masterplay.classList.remove('fa-circle-play'); 
        masterplay.classList.add('fa-regular'); 
        masterplay.classList.add('fa-circle-pause');
        makeallplay();
        document.getElementById(songIndex).classList.remove('fa-regular');
        document.getElementById(songIndex).classList.remove('fa-circle-play');
        document.getElementById(songIndex).classList.add('fa-regular');
        document.getElementById(songIndex).classList.add('fa-circle-pause');
   
 });
 audioElement.addEventListener('timeupdate',()=>{
if(anu===0&&rep===0){
    if(audioElement.currentTime==audioElement.duration){
        if(songIndex>=24){
            songIndex=0;
        }
        else{
            songIndex +=1;
        }
        audioElement.src=`hindisongs/${songIndex+1}.mp3`;
        songplay.innerText= songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-regular');
            masterplay.classList.remove('fa-circle-play'); 
            masterplay.classList.add('fa-regular'); 
            masterplay.classList.add('fa-circle-pause');
            makeallplay();
            document.getElementById(songIndex).classList.remove('fa-regular');
            document.getElementById(songIndex).classList.remove('fa-circle-play');
            document.getElementById(songIndex).classList.add('fa-regular');
            document.getElementById(songIndex).classList.add('fa-circle-pause');
    }
}else if(anu===1){
    if (audioElement.currentTime==audioElement.duration)
    {
        songIndex= Math.ceil(Math.random()*24);
    console.log(songIndex);
    audioElement.src=`hindisongs/${songIndex+1}.mp3`;
    songplay.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-solid');
        masterplay.classList.remove('fa-circle-play'); 
        masterplay.classList.add('fa-regular'); 
        masterplay.classList.add('fa-circle-pause');
        makeallplay();
        document.getElementById(songIndex).classList.remove('fa-regular');
        document.getElementById(songIndex).classList.remove('fa-circle-play');
        document.getElementById(songIndex).classList.add('fa-regular');
        document.getElementById(songIndex).classList.add('fa-circle-pause');
    } 
}
 });
 let rep=0;
 document.getElementById("repeat").addEventListener('click',()=>{
    if(rep===0){
        rep=1;
        document.getElementById("repeat").style.opacity="0.6";
        document.getElementById("repeat").style.border="2px solid white";
    }
    else {
        rep=0;
        document.getElementById("repeat").removeAttribute('style');
    }
    console.log(rep);
    audioElement.src=`hindisongs/${songIndex+1}.mp3`;
    songplay.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-solid');
        masterplay.classList.remove('fa-circle-play'); 
        masterplay.classList.add('fa-regular'); 
        masterplay.classList.add('fa-circle-pause');
        makeallplay();
        document.getElementById(songIndex).classList.remove('fa-regular');
        document.getElementById(songIndex).classList.remove('fa-circle-play');
        document.getElementById(songIndex).classList.add('fa-regular');
        document.getElementById(songIndex).classList.add('fa-circle-pause');
 });
 audioElement.addEventListener('timeupdate',()=>{
    if(rep===0){
        if(audioElement.currentTime==audioElement.duration){
            if(songIndex>=24){
                songIndex=0;
            }
            else{
                songIndex +=1;
            }
            audioElement.src=`hindisongs/${songIndex+1}.mp3`;
            songplay.innerText= songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            masterplay.classList.remove('fa-regular');
                masterplay.classList.remove('fa-circle-play'); 
                masterplay.classList.add('fa-regular'); 
                masterplay.classList.add('fa-circle-pause');
                makeallplay();
                document.getElementById(songIndex).classList.remove('fa-regular');
                document.getElementById(songIndex).classList.remove('fa-circle-play');
                document.getElementById(songIndex).classList.add('fa-regular');
                document.getElementById(songIndex).classList.add('fa-circle-pause');
        }
    } else if(rep===1){
        if (audioElement.currentTime===audioElement.duration)
        { 
            console.log(songIndex);
        audioElement.src=`hindisongs/${songIndex+1}.mp3`;
        songplay.innerText= songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-solid');
            masterplay.classList.remove('fa-circle-play'); 
            masterplay.classList.add('fa-regular'); 
            masterplay.classList.add('fa-circle-pause');
            makeallplay();
            document.getElementById(songIndex).classList.remove('fa-regular');
            document.getElementById(songIndex).classList.remove('fa-circle-play');
            document.getElementById(songIndex).classList.add('fa-regular');
            document.getElementById(songIndex).classList.add('fa-circle-pause');
        } 
    }
     });
