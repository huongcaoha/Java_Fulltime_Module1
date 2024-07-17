let container = document.querySelector(".container");
setInterval(function () {
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  container.innerHTML = ` <h2 class="time">THỜI GIAN BÂY GIỜ LÀ :</h2>
      <div class="hour div-time">
        <h1 class="h1Hour">${hour}</h1>
        <h2>Giờ</h2>
      </div>

      <div class="minute div-time">
        <h1 class="h1Minute">${minute}</h1>
        <h2>Phút</h2>
      </div>

      <div class="second div-time">
        <h1 class="h1Second">${second}</h1>
        <h2>Giây</h2>
      </div>`;
}, 1000);

let song1 =
  "../resource/Một Bước Yêu, Vạn Dặm Đau (Lyrics Video) - Mr. Siro.mp3";
let song2 =
  "../resource/Tự Lau Nước Mắt _ Mr. Siro - Day 1 Fanmeeting Hà Nội.mp3";
let audio = document.querySelector("#audio");

setInterval(function () {
  audio.src = audio.src == song1 ? audio.src == song2 : (audio.src = song1);
}, 300000);

let body = document.querySelector("body");
const bg1 = "linear-gradient(to right, #5b4b91, #6b4988, #9a507d)";
const bg2 = " linear-gradient(to right, #50914b, #88497c, #9a7c50)";
setInterval(function () {
  body.backgroundImage =
    body.backgroundImage == bg1
      ? (body.backgroundImage = bg2)
      : (body.backgroundImage = bg1);
}, 600000);
