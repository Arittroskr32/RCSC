let currentsong = new Audio();
let songs;
let currfolder;
function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}
async function getsongs(folder){
    currfolder=folder;
    let a = await fetch(`/${folder}/`)
    let response = await a.text()
    let div = document.createElement("div")
    div.innerHTML = response;
    let as= div.getElementsByTagName("a")
    songs=[]
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split(`/${folder}/`)[1])
        }
    }
    let songul=document.querySelector(".song-list").getElementsByTagName("ul")[0]
    songul.innerHTML=""
    for (const song of songs) {
        songul.innerHTML = songul.innerHTML +
        `<li>
        <img class="invert" src="music.svg" alt="">
        <div class="info">
            <div>${song.replaceAll("%20"," ")}</div>
            <div>Arittro</div>
        </div>
        <div class="playnow">
            <span>Play Now</span>
            <img class="invert" src="playlist.svg" alt="">
        </div>
    </li>`;
    }
    Array.from(document.querySelector(".song-list").getElementsByTagName("li")).forEach(e=>{
        e.addEventListener("click",element=>{
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    })
    return songs
}
const playMusic =(track, pause=false)=>{
    currentsong.src = `/${currfolder}/`+ track;
    if(!pause){
        currentsong.play()
        play.src ="paused.svg";
    }
    document.querySelector(".songinfo").innerHTML= decodeURI(track)
    document.querySelector(".songtime").innerHTML= "00:00/00:00"
}
async function displayAlbums() {
    let a = await fetch(`/songs/`)
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a")
    let cardcontainer = document.querySelector(".card-container")
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index]; 
        if (e.href.includes("/songs") && !e.href.includes(".htaccess")) {
            let folder = e.href.split("/").slice(-2)[0]
            // Get the metadata of the folder
            let a = await fetch(`/songs/${folder}/info.json`)
            let response = await a.json(); 
            cardcontainer.innerHTML = cardcontainer.innerHTML + ` <div data-folder="${folder}" class="card">
            <div class="play">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" fill="none">
            <circle cx="12" cy="12" r="11" fill="#00ff37" />
            <path d="M15.5 12L9.5 8.5V15.5L15.5 12Z" fill="#000" />
            </svg>
            </div>

            <img src="/songs/${folder}/cover.jpeg" alt="">
            <h2>${response.title}</h2>
            <p>${response.description}</p>
        </div>`
        }
    }
    function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}


async function getsongs(folder){
    currfolder=folder;
    let a = await fetch(`/${folder}/`)
    let response = await a.text()
    
    let div = document.createElement("div")
    div.innerHTML = response;
    let as= div.getElementsByTagName("a")
    
    songs=[]

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split(`/${folder}/`)[1])
        }
    }

    let songul=document.querySelector(".song-list").getElementsByTagName("ul")[0]
    songul.innerHTML=""
    for (const song of songs) {
        songul.innerHTML = songul.innerHTML +
        `<li>
        <img class="invert" src="music.svg" alt="">
        <div class="info">
            <div>${song.replaceAll("%20"," ")}</div>
            <div>Arittro</div>
        </div>
        <div class="playnow">
            <span>Play Now</span>
            <img class="invert" src="playlist.svg" alt="">
        </div>
    </li>`;
    }

    Array.from(document.querySelector(".song-list").getElementsByTagName("li")).forEach(e=>{
        e.addEventListener("click",element=>{
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    })

    return songs
}
const playMusic =(track, pause=false)=>{
    currentsong.src = `/${currfolder}/`+ track;
    if(!pause){
        currentsong.play()
        play.src ="paused.svg";
    }
    document.querySelector(".songinfo").innerHTML= decodeURI(track)
    document.querySelector(".songtime").innerHTML= "00:00/00:00"
}
async function displayAlbums() {
    let a = await fetch(`/songs/`)
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a")
    let cardcontainer = document.querySelector(".card-container")
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index]; 
        if (e.href.includes("/songs") && !e.href.includes(".htaccess")) {
            let folder = e.href.split("/").slice(-2)[0]
            // Get the metadata of the folder
            let a = await fetch(`/songs/${folder}/info.json`)
            let response = await a.json(); 
            cardcontainer.innerHTML = cardcontainer.innerHTML + ` <div data-folder="${folder}" class="card">
            <div class="play">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" fill="none">
            <circle cx="12" cy="12" r="11" fill="#00ff37" />
            <path d="M15.5 12L9.5 8.5V15.5L15.5 12Z" fill="#000" />
            </svg>
            </div>

            <img src="/songs/${folder}/cover.jpeg" alt="">
            <h2>${response.title}</h2>
            <p>${response.description}</p>
        </div>`
        }
    }

    // Load the playlist whenever card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e => { 
        e.addEventListener("click", async item => {
            console.log("Fetching Songs")
            songs = await getsongs(`songs/${item.currentTarget.dataset.folder}`)  
            playMusic(songs[0])

        })
    })
}
    // Load the playlist whenever card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e => { 
        e.addEventListener("click", async item => {
            console.log("Fetching Songs")
            songs = await getsongs(`songs/${item.currentTarget.dataset.folder}`)  
            playMusic(songs[0])
        })
    })
    function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}


async function getsongs(folder){
    currfolder=folder;
    let a = await fetch(`/${folder}/`)
    let response = await a.text()
    
    let div = document.createElement("div")
    div.innerHTML = response;
    let as= div.getElementsByTagName("a")
    
    songs=[]

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split(`/${folder}/`)[1])
        }
    }

    let songul=document.querySelector(".song-list").getElementsByTagName("ul")[0]
    songul.innerHTML=""
    for (const song of songs) {
        songul.innerHTML = songul.innerHTML +
        `<li>
        <img class="invert" src="music.svg" alt="">
        <div class="info">
            <div>${song.replaceAll("%20"," ")}</div>
            <div>Arittro</div>
        </div>
        <div class="playnow">
            <span>Play Now</span>
            <img class="invert" src="playlist.svg" alt="">
        </div>
    </li>`;
    }

    Array.from(document.querySelector(".song-list").getElementsByTagName("li")).forEach(e=>{
        e.addEventListener("click",element=>{
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    })

    return songs
}
const playMusic =(track, pause=false)=>{
    currentsong.src = `/${currfolder}/`+ track;
    if(!pause){
        currentsong.play()
        play.src ="paused.svg";
    }
    document.querySelector(".songinfo").innerHTML= decodeURI(track)
    document.querySelector(".songtime").innerHTML= "00:00/00:00"
}
async function displayAlbums() {
    let a = await fetch(`/songs/`)
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a")
    let cardcontainer = document.querySelector(".card-container")
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index]; 
        if (e.href.includes("/songs") && !e.href.includes(".htaccess")) {
            let folder = e.href.split("/").slice(-2)[0]
            // Get the metadata of the folder
            let a = await fetch(`/songs/${folder}/info.json`)
            let response = await a.json(); 
            cardcontainer.innerHTML = cardcontainer.innerHTML + ` <div data-folder="${folder}" class="card">
            <div class="play">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" fill="none">
            <circle cx="12" cy="12" r="11" fill="#00ff37" />
            <path d="M15.5 12L9.5 8.5V15.5L15.5 12Z" fill="#000" />
            </svg>
            </div>

            <img src="/songs/${folder}/cover.jpeg" alt="">
            <h2>${response.title}</h2>
            <p>${response.description}</p>
        </div>`
        }
    }

    // Load the playlist whenever card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e => { 
        e.addEventListener("click", async item => {
            console.log("Fetching Songs")
            songs = await getsongs(`songs/${item.currentTarget.dataset.folder}`)  
            playMusic(songs[0])

        })
    })
}
}
document.getElementById('treasureForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const roll = parseInt(document.getElementById('roll').value.trim(), 10);
    const dept = document.getElementById('dept').value.trim();
    if (isNaN(roll)) {
        alert('Please enter a valid numeric roll number.');
        return;
    }
    const calculatedValue = (roll * 3) - 1505050;
    const resultText = `
        Welcome, ${username}! Here is a bonus gift for you. I give you another flag part. <span id='color_flag' style='color: red;'>flag[7]= ${calculatedValue}</span> . Now move to your next journey. 
    `;
    document.getElementById('resultText').innerHTML = resultText;
    document.getElementById('result').style.display = 'block';
    document.getElementById('answerSection').style.display = 'block';
});
function validateAnswer(input) {
    const keyParts = [
        String.fromCharCode(97) + String.fromCharCode(98) + String.fromCharCode(117),
        (function () {
            const part = ["s", "a", "y", "e", "d"];
            return part.join('');
        })(),
        (() => atob("Y29kZQ==") + "potro")(),
        (() => (30 + 1).toString())(),
        (() => "07")(),
        (() => (2000 + 24).toString())()
    ];
    const transformedKey = keyParts
        .map((part, index) => {
            if (index % 2 === 0) {
                return part.split('').reverse().join('');
            }
            return part.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
        })
        .join('_');
    const reverseShift = str =>
        str.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
    const reverseTransformedKey = transformedKey
        .split('_')
        .map((part, index) => {
            if (index % 2 === 0) {
                return part.split('').reverse().join('');
            }
            return reverseShift(part);
        })
        .join('_');
    const originalKey = keyParts.join('_');
    return input === originalKey;
}
let videoPlayed = false;  

document.getElementById('checkAnswer').addEventListener('click', function () {
    const userAnswer = document.getElementById('userAnswer').value.trim();
    const feedback = document.getElementById('feedback');
    if (validateAnswer(userAnswer)) {
        if (!videoPlayed) {
            feedback.innerHTML = ''; 
            const videoContainer = document.getElementById('videoContainer');
            const videoMessage = document.getElementById('videoMessage');
            videoMessage.style.display = 'block'; // Make sure the message is visible
            videoContainer.style.display = 'block';
            const videoElement = document.getElementById('treasureVideo');
            videoElement.play();
            videoPlayed = true;
        }
    } else {
        feedback.textContent = 'Incorrect answer. Try again!';
    }
});
async function main(){
    await getsongs(`songs/ncs`)
    playMusic(songs[0],true) 
    await displayAlbums()
    play.addEventListener("click",()=>{
        if(currentsong.paused){
            currentsong.play()
            play.src ="paused.svg";
        }
        else{
            currentsong.pause()
            play.src ="playlist.svg";
        }
    })
    function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}


async function getsongs(folder){
    currfolder=folder;
    let a = await fetch(`/${folder}/`)
    let response = await a.text()
    
    let div = document.createElement("div")
    div.innerHTML = response;
    let as= div.getElementsByTagName("a")
    
    songs=[]

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split(`/${folder}/`)[1])
        }
    }

    let songul=document.querySelector(".song-list").getElementsByTagName("ul")[0]
    songul.innerHTML=""
    for (const song of songs) {
        songul.innerHTML = songul.innerHTML +
        `<li>
        <img class="invert" src="music.svg" alt="">
        <div class="info">
            <div>${song.replaceAll("%20"," ")}</div>
            <div>Arittro</div>
        </div>
        <div class="playnow">
            <span>Play Now</span>
            <img class="invert" src="playlist.svg" alt="">
        </div>
    </li>`;
    }

    Array.from(document.querySelector(".song-list").getElementsByTagName("li")).forEach(e=>{
        e.addEventListener("click",element=>{
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    })

    return songs
}
const playMusic =(track, pause=false)=>{
    currentsong.src = `/${currfolder}/`+ track;
    if(!pause){
        currentsong.play()
        play.src ="paused.svg";
    }
    document.querySelector(".songinfo").innerHTML= decodeURI(track)
    document.querySelector(".songtime").innerHTML= "00:00/00:00"
}
async function displayAlbums() {
    let a = await fetch(`/songs/`)
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a")
    let cardcontainer = document.querySelector(".card-container")
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index]; 
        if (e.href.includes("/songs") && !e.href.includes(".htaccess")) {
            let folder = e.href.split("/").slice(-2)[0]
            // Get the metadata of the folder
            let a = await fetch(`/songs/${folder}/info.json`)
            let response = await a.json(); 
            cardcontainer.innerHTML = cardcontainer.innerHTML + ` <div data-folder="${folder}" class="card">
            <div class="play">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" fill="none">
            <circle cx="12" cy="12" r="11" fill="#00ff37" />
            <path d="M15.5 12L9.5 8.5V15.5L15.5 12Z" fill="#000" />
            </svg>
            </div>

            <img src="/songs/${folder}/cover.jpeg" alt="">
            <h2>${response.title}</h2>
            <p>${response.description}</p>
        </div>`
        }
    }

    // Load the playlist whenever card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e => { 
        e.addEventListener("click", async item => {
            console.log("Fetching Songs")
            songs = await getsongs(`songs/${item.currentTarget.dataset.folder}`)  
            playMusic(songs[0])

        })
    })
}
    currentsong.addEventListener("timeupdate",()=>{
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentsong.currentTime)}/${secondsToMinutesSeconds(currentsong.duration)}`

        document.querySelector(".circle").style.left= (currentsong.currentTime / currentsong.duration)*100 +"%";
    })
    document.querySelector(".seekbar").addEventListener("click",e=>{
        let percent= (e.offsetX / e.target.getBoundingClientRect().width) *100;
        document.querySelector(".circle").style.left = percent + "%";
        currentsong.currentTime = (currentsong.duration * percent)/100;
    })
    document.querySelector(".hamburger").addEventListener("click", ()=>{
        document.querySelector(".left").style.left=0
    })
    document.querySelector(".close").addEventListener("click",()=>{
        document.querySelector(".left").style.left="-120%"
    })
    previous.addEventListener("click",()=>{
        currentsong.pause()
        let index= songs.indexOf(currentsong.src.split("/").slice(-1)[0])
        if(index-1 >= 0){
            playMusic(songs[index-1])
        }
    })
    next.addEventListener("click",()=>{
        currentsong.pause()
        let index= songs.indexOf(currentsong.src.split("/").slice(-1)[0])
        if(index+1 < songs.length){
            playMusic(songs[index+1])
        }
    })
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change",(e)=>{
        currentsong.volume = parseInt(e.target.value)/100
        if (currentSong.volume >0){
            document.querySelector(".volume>img").src = document.querySelector(".volume>img").src.replace("mute.svg", "volume.svg")
        }
    })
    document.querySelector(".volume>img").addEventListener("click", e=>{ 
        if(e.target.src.includes("volume.svg")){
            e.target.src = e.target.src.replace("volume.svg", "mute.svg")
            currentsong.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
        }
        else{
            e.target.src = e.target.src.replace("mute.svg", "volume.svg")
            currentsong.volume = .10;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
        }
    })
    function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}


async function getsongs(folder){
    currfolder=folder;
    let a = await fetch(`/${folder}/`)
    let response = await a.text()
    
    let div = document.createElement("div")
    div.innerHTML = response;
    let as= div.getElementsByTagName("a")
    
    songs=[]

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split(`/${folder}/`)[1])
        }
    }

    let songul=document.querySelector(".song-list").getElementsByTagName("ul")[0]
    songul.innerHTML=""
    for (const song of songs) {
        songul.innerHTML = songul.innerHTML +
        `<li>
        <img class="invert" src="music.svg" alt="">
        <div class="info">
            <div>${song.replaceAll("%20"," ")}</div>
            <div>Arittro</div>
        </div>
        <div class="playnow">
            <span>Play Now</span>
            <img class="invert" src="playlist.svg" alt="">
        </div>
    </li>`;
    }

    Array.from(document.querySelector(".song-list").getElementsByTagName("li")).forEach(e=>{
        e.addEventListener("click",element=>{
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    })

    return songs
}
const playMusic =(track, pause=false)=>{
    currentsong.src = `/${currfolder}/`+ track;
    if(!pause){
        currentsong.play()
        play.src ="paused.svg";
    }
    document.querySelector(".songinfo").innerHTML= decodeURI(track)
    document.querySelector(".songtime").innerHTML= "00:00/00:00"
}
async function displayAlbums() {
    let a = await fetch(`/songs/`)
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a")
    let cardcontainer = document.querySelector(".card-container")
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index]; 
        if (e.href.includes("/songs") && !e.href.includes(".htaccess")) {
            let folder = e.href.split("/").slice(-2)[0]
            // Get the metadata of the folder
            let a = await fetch(`/songs/${folder}/info.json`)
            let response = await a.json(); 
            cardcontainer.innerHTML = cardcontainer.innerHTML + ` <div data-folder="${folder}" class="card">
            <div class="play">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" fill="none">
            <circle cx="12" cy="12" r="11" fill="#00ff37" />
            <path d="M15.5 12L9.5 8.5V15.5L15.5 12Z" fill="#000" />
            </svg>
            </div>

            <img src="/songs/${folder}/cover.jpeg" alt="">
            <h2>${response.title}</h2>
            <p>${response.description}</p>
        </div>`
        }
    }

    // Load the playlist whenever card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e => { 
        e.addEventListener("click", async item => {
            console.log("Fetching Songs")
            songs = await getsongs(`songs/${item.currentTarget.dataset.folder}`)  
            playMusic(songs[0])

        })
    })
}
}

