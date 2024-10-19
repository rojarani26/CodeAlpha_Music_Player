const songs = [
    {
        title: "Soch Na Sake",
        artist: "Arijit Singh & Tulsi Kumar",
        src: "./music/soch_na_sake.mp3",
        img: "music.png"
    },
    {
        title: "Bole Chudiyan",
        artist: "Alka Yagnik, Udit Narayan",
        src: "./music/bole_chudiyan.mp3",
        img: "music.png"
    },
    {
        title: "Dil Diyan Gallan",
        artist: "Atif Aslam",
        src: "./music/dil_diyan_gallan.mp3",
        img: "music.png"
    },
    {
        title: "London Thumakda",
        artist: "Amit Trivedi, Neha Kakkar",
        src: "./music/london_thumakda.mp3",
        img: "music.png"
    },
    {
        title: "Jai Ho",
        artist: "A.R. Rahman & Sukhwinder Singh",
        src: "./music/jai_ho.mp3",
        img: "music.png"
    }
];

let currentSongIndex = 0;
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("play-pause");
const songTitle = document.getElementById("song-title");
const artistName = document.getElementById("artist-name");
const progress = document.getElementById("progress");

function loadSong(song) {
    songTitle.innerText = song.title;
    artistName.innerText = song.artist;
    audio.src = song.src;
}

function playSong() {
    audio.play();
    playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

function pauseSong() {
    audio.pause();
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
}

function playPause() {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

playPauseBtn.addEventListener("click", playPause);
document.getElementById("forward").addEventListener("click", nextSong);
document.getElementById("backward").addEventListener("click", previousSong);

audio.addEventListener("timeupdate", () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.value = progressPercent;
});

loadSong(songs[currentSongIndex]);
