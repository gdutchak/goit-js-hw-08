import Player from "@vimeo/player";
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(function (currentTime) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime.seconds))
    console.log(currentTime)
}, 1000));

const timeRef = localStorage.getItem("videoplayer-current-time")

if (timeRef !== 0 && timeRef > 0) {
    player.setCurrentTime(timeRef)
}

