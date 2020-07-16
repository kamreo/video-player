const container = document.getElementsByClassName('container');
const video = document.getElementById('video');
const play = document.getElementById('start');
const pause = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
const fullscreen = document.getElementById('fullscreen');

function toggleVideoStatus() {
    if (video.paused) {
        video.play();
        if (window.innerHeight == screen.height) {
            video.pause();
        }
    } else {
        video.pause();
        if (window.innerHeight == screen.height) {
            video.play();
        }
    }
}

function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play-circle fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause-circle fa-2x"></i>';
    }
}

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;


    //updating timestamp
    //minutes
    let minutes = Math.floor(video.currentTime / 60);
    if (minutes < 10) {
        minutes = '0' + String(minutes);
    }
    //seconds
    let seconds = Math.floor(video.currentTime % 60);
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }

    timestamp.innerHTML = `${minutes}:${seconds}`;
}

function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

function playFullscreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
}

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

pause.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);

fullscreen.addEventListener('click', playFullscreen);