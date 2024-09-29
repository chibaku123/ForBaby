const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// ------ topic --------


// ------- music ---------------
const cdImg = $(".control-left-img img");
const cdTitle = $(".control-left-title h1");
const cdDes = $(".control-left-title small");
const audio = $(".audio audio");
const listMusic = $(".individual-ctn2-right");
const playListRight = $(".list-song-body");
const controlCd = $(".control-left-img ");
const playListSongRight = $(".playlist-song");

//--------- icon ---------------
const iconFavorite = $(".icon-favorite");
const iconPlay = $(".play");
const iconPauseMusic = $(".pause-music");
const iconPlayMusic = $(".play-music");
const iconLeft = $(".icon-control-left");
const iconRight = $(".icon-control-right");
const iconRepeat = $(".repeat");
const iconShuffle = $(".icon-shuffle");
// ---------------------------
// mobile
const iconPlay_mb = $(".play_mb");
const iconPauseMusic_mb = $(".pause-music-mb");
const iconPlayMusic_mb = $(".play-music-mb");
const iconLeft_mb = $(".icon-control-left-mb");
const iconRight_mb = $(".icon-control-right-mb");
const iconRepeat_mb = $(".repeat-mb");
const iconShuffle_mb = $(".icon-shuffle-mb");
const ZingControl_mb = $(".zing-controls-mb");
//-------------------------------

const iconSelectionAll = $(".addPlayList .checkbox-wrapper");
const btn_addPlayList = $(".addPlayList .btn");
// ------------------------------
const individualSongList = $(".individual-ctn2-song-list");

const zingMenu = $(".zing-navbar-menu");
const individual = $(".individual");
const discover = $(".discover");
const zingchart = $(".zingchartCtn");
const RadioCtn = $(".RadioCtn");
const navbarItem = $$(".zing-navbar-item");

const playListCDF1 = $(".zing-playlist-img-rotate");
const playListCDF0 = $(".zing-playlist-img");
const zingPlayList = $(".zing-playList");
const infoSearch = $(".info-search");
const ZingSearch = $(".zing-search");

var arrPlayList = [];
var search = 2;
var allPlayList = false;
var isTheme = false;
var isShuffle = false;
var isRepeat = false;

var currentIndex = 0;
const app = {
  currentIndex_PlayList: 0,
  songSelection: 0,
  playSong: false,
  isCheckBox: false,
  isVolume: false,
  volumeNumber: 0,
  percent: 0,
  changerMusic: false,
  boolPlaylist: false,
  playListUS: false,
  zingSearch: false,
  isMenu: 0,

  // ======================================
  indexDiscover: 0,
  // ---------------------------
  config: JSON.parse(localStorage.getItem("keys")) || {},

  setConfig: function (key, value) {
    this.config[key] = value;
    localStorage.setItem("keys", JSON.stringify(this.config));
  },

  randerSlide: [
    { img: "./img/slider/0.jpg" },
    { img: "./img/slider/1.jpg" },
    { img: "./img/slider/2.jpg" },
    { img: "./img/slider/3.jpg" },
    { img: "./img/slider/4.jpg" },
    
  ],
  

  

  songs: [
    {
      title : "Bình Yên ",
      singer : "Vũ ft Binz",
      pathSong : "./music/list-song/binh yen.mp3",
      img: "./img/slider/4.jpg",
      duration:"03:23"



  }
    ,
    {
      title : "No Love No Life",
      singer: "Hiếu Thứ Hai",
      pathSong: "./music/list-song/No Love No Life.mp3",
      img: "./img/slider/0.jpg",
      duration:"02:51"
    },

    {
      title : "Trước Khi Em Tồn Tại",
      singer: "Tuấn Anh Cover",
      pathSong: "./music/list-song/Truoc Khi Em Ton Tai.mp3",
      img: "https://i.ytimg.com/vi/s7wlSXxPZ1E/sddefault.jpg",
      duration: "03:56"

    },
    {
      title: "Cẩm Tú Cầu",
      singer: " KIỀU CHI COVER",
      pathSong:
        "./music/list-song/y2mate.com - CẨM TÚ CẦU  KIỀU CHI COVER.mp3",
      duration: "04:28",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAv727Yqj9UOPa2lgPhj_95FceQBj1ndjDdQ&s",
    }
    ,
    {
      title: "CÓ CHƠI CÓ CHỊU",
      singer: "KARIK x ONLY C",
      pathSong:
        "./music/list-song/KARIK x ONLY C - CÓ CHƠI CÓ CHỊU (OFFICIAL MUSIC VIDEO).mp3",
      duration: "04:46",
      img: "https://vtv1.mediacdn.vn/thumb_w/640/2022/9/21/poster-karik-only-c-16637279213761078057270.jpeg",
    },
    {
      img: "./img/discover/ctn2/1.webp",
      title: "Waiting For You",
      singer: "MONO",
      pathSong: "./music/vip/WaitingForYou.mp3",
      duration: "04:25",
    },
    {
      title: "Cơn Mưa Băng Giá",
      singer: "Noo Phước Thịnh",
      pathSong: "./music/list-song/cmbg.mp3",
      duration: "04:41",
      img: "https://tse1.mm.bing.net/th?id=OIP.hSgGC0yJ6GeY8IE1GDTW6gHaFi&pid=Api&P=0",
    },
    {
      title: "Em Là Con Thuyền Cô Đơn",
      singer: "Thái Học",
      pathSong: "./music/list-song/elctcd.mp3",
      duration: "05:06",
      img: "https://i.ytimg.com/vi/orFNbppc6_0/maxresdefault.jpg",
    },

    {
      img: "./img/songs/0.webp",
      title: "Anh Đã Lạc Vào",
      singer: "Green, Đại Mèo Remix",
      pathSong: "./music/list-song/0.mp3",
      duration: "04:27",
    },
    {
      img: "./img/songs/1.webp",
      title: "Chạy Về Khóc Với Anh",
      singer: "Erik, Duzme Remix",
      pathSong: "./music/list-song/1.mp3",
      duration: "04:05",
    },
    {
      img: "./img/songs/2.jpeg",
      title: "Sẵn Sàng Yêu Em Đi Thôi",
      singer: "Woni, Minh Tú, Đại Mèo Remix",
      pathSong: "./music/list-song/2.mp3",
      duration: "03:51",
    },
    {
      title: "Ngôi Sao Cô Đơn",
      singer: "Jack - J97",
      pathSong: "./music/list-song/nscd.mp3",
      duration: "04:44",
      img: "https://img.theinfluencer.vn/thumb_w/850/uploads/2022/07/oqoFCoJCODsBjBzOkfd6IEpJUkrYnLZjKLM7eBpV.png",
    },
    {
      title: "Đom Dóm",
      singer: "Jack - J97",
      pathSong: "./music/list-song/dd.mp3",
      duration: "06:21",
      img: "https://i.ytimg.com/vi/4CCGI83vOVo/maxresdefault.jpg",
    },
    {
      img: "./img/songs/3.webp",
      title: "Gieo Quẻ",
      singer: "Hoàng Thuỳ Linh, ĐEN, Orinn Remix",
      pathSong: "./music/list-song/3.mp3",
      duration: "04:27",
    },
    {
      img: "./img/songs/4.webp",
      title: "Vui Lắm Nha",
      singer: "Hương Ly, Jombie, RIN Music Remix",
      pathSong: "./music/list-song/4.m4a",
      duration: "05:16",
    },
    {
      img: "./img/songs/5.webp",
      title: "Lưu Số Em Đi",
      singer: "Huỳnh Văn, V.P. Tiên, Đại Mèo Remix",
      pathSong: "./music/list-song/5.m4a",
      duration: "04:10",
    },
    {
      img: "./img/songs/6.webp",
      title: "Như Một Người Dưng",
      singer: "Nguyễn Thạc Bảo Ngọc, Remix",
      pathSong: "./music/list-song/6.mp3",
      duration: "05:05",
    },
    {
      title: "Lặng Yên",
      singer: "Bùi Anh Tuấn ft. Ái Phương",
      pathSong: "./music/list-song/langyen.mp3",
      duration: "04:41",
      img: "https://icdn.dantri.com.vn/2021/05/29/2-mua-lua-chin-1622224483750.jpg",
    },
    {
      title: "Về Bên Anh",
      singer: "Jack - J97",
      pathSong: "./music/list-song/vba.mp3",
      duration: "04:21",
      img: "https://i.ytimg.com/vi/EjrIz5UX4Io/maxresdefault.jpg",
    },
    {
      img: "./img/songs/7.webp",
      title: "Ôm Nhiều Mộng Mơ",
      singer: "Phát Huy T4, Đại Mèo Remix",
      pathSong: "./music/list-song/7.m4a",
      duration: "03:16",
    },
    {
      img: "./img/songs/8.jpg",
      title: "Tình Yêu Ngủ Quên",
      singer: "Hoàng Tôn, LyHan, Orinn Remix",
      pathSong: "./music/list-song/8.mp3",
      duration: "04:27",
    },
    {
      img: "./img/songs/9.webp",
      title: "Không Bằng",
      singer: "Na, RIN Music Remix",
      pathSong: "./music/list-song/9.m4a",
      duration: "03:23",
    },
    {
      img: "./img/songs/10.webp",
      title: "Ai Chung Tình Được Mãi",
      singer: "Đinh Tùng Huy, ACV Remix",
      pathSong: "./music/list-song/10.m4a",
      duration: "03:55",
    },
    {
      img: "./img/songs/11.webp",
      title: "Cô Đơn Dành Cho Ai",
      singer: "NAL, LEE KEN, Orinn Remix",
      pathSong: "./music/list-song/11.m4a",
      duration: "04:45",
    },
    {
      img: "./img/songs/12.webp",
      title: "Ánh mắt ta chạm nhau",
      singer: "Ngô Lan Hương, Đại Mèo remix",
      pathSong: "./music/list-song/12.m4a",
      duration: "06:01",
    },
    {
      img: "./img/songs/13.webp",
      title: "2 Phút Hơn",
      singer: "Phao, KAIZ Remix",
      pathSong: "./music/list-song/13.m4a",
      duration: "05:02",
    },
    {
      img: "./img/songs/14.webp",
      title: "Là Ai Từ Bỏ Là Ai Vô Tình",
      singer: "Hương Ly, Jombie (G5R), RIN Music Remix",
      pathSong: "./music/list-song/14.m4a",
      duration: "03:25",
    },
    {
      img: "./img/songs/2.jpeg",
      title: "Yêu Đừng Sợ Đau",
      singer: "Ngô Lan Hương, Cukak Remix",
      pathSong: "./music/list-song/15.m4a",
      duration: "03:51",
      type: "vip",
    },

    

    // -------- play list   ------------
    
  ],

 
  

  loadColorSearch: function (object) {
    object.forEach((item) => {
      const index = item.getAttribute("data-index");
      if (index == currentIndex) {
        item.classList.add("music-color");
        item.classList.add("action-play-music");
      } else {
        item.classList.remove("music-color");
        item.classList.remove("action-play-music");
        item.classList.remove("action-pause-music");
      }
    });
  },
  //----------------- cá nhân --------------------

  loadSong: function () {
    const html = this.songs.map(function (item, index) {
      if (index < 23) {
        return ` <li class="song-item  individual-ctn2-song-item" data-index=${index}> 
    
                            <div class="checkbox-wrapper color-main "data-index=${index}>
                                 <ion-icon class="checkBox-icon-music"name="musical-notes-outline"></ion-icon>
                                <div class="checkbox">
                                    <input type="checkbox">
                                </div>
                            </div>
                            <div class="individual-ctn2-song-item-img">
                                <img src="${
                                  item.img
                                }" alt="" class="individual-ctn2-song-img">
                                <div class="individual-ctn2-song-item-icon"data-index=${index}>
                                    <ion-icon name="play"></ion-icon>
                                </div>
                                <div class="icon-play-song ">
                                    <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                                </div>
                            </div>
                            <div class="individual-ctn2-song-title">
                                    <span class="color-title">${
                                      item.title
                                    }</span>
                                    <small class="color-small">${item.singer
                                      .split(",")
                                      .map(
                                        (i) =>
                                          `<a class="singer color-small"href="">${i}</a>`
                                      )}</small>
                            </div>
                            <div class="zingchart-body-main  color-small c-0">
                                    <span class="title">${item.title}</span>
                                    <span class="singer">(singer)</span>
                            </div>
                            <div class="individual-ctn2-song-right color-main">
                                <div class="individual-ctn2-song-right-icon">
                                    <div class="icon-video c-0 m-0">
                                        <ion-icon name="videocam"></ion-icon>
                                    </div>
                                    <div class="icon-favorite color-small "data-index=${index}>
                                        <div class="no-favorite icon action-hover">
                                            <ion-icon name="heart-outline"></ion-icon>
                                        </div>
                                        <div class="yes-favorite icon action-hover">
                                        <ion-icon name="heart"></ion-icon>
                                        </div>
                                    </div>
                                </div>
                                <div class="time">
                                    <div class="song-time">
                                        ${item.duration}
                                    </div>
                                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                                </div>
                            </div>
                        </li>            `;
      }
    });
    individualSongList.innerHTML = html.join(" ");
  },

  loadPlayListSongs: function () {
    const _this = this;
    if (_this.playListUS) {
      const html = this.songs.map((item, index) => {
        if (index > 34) {
          return `
                <li class="song-item zingchart-body-item zing-playList-item" data-index=${index}> 
                               <div class="checkbox-wrapper color-main "data-index=${index}>
                                     <ion-icon class="checkBox-icon-music"name="musical-notes-outline"></ion-icon>
                                    <div class="checkbox">
                                        <input type="checkbox">
                                    </div>
                                </div>
                    <div class="zingchart-body-ctn">
                        <div class="zingchart-body-left zing-playList-body-left">
                            <div class="individual-ctn2-song-item-img zing-playList-body-left-img">
                                <img src="${
                                  item.img
                                }" alt="" class="individual-ctn2-song-img">
                                <div class="individual-ctn2-song-item-icon"data-index=${index}>
                                    <ion-icon name="play"></ion-icon>
                                </div>
                                <div class="icon-play-song icon-play-song-top ">
                                    <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                                </div>
                            </div>
                            <div class="individual-ctn2-song-title zingchart ">
                                    <span class="color-title">${
                                      item.title
                                    }</span>
                                    <small class="color-small">${item.singer
                                      .split(",")
                                      .map(
                                        (i) =>
                                          `<a class="singer color-small"href="">${i}</a>`
                                      )}</small>
                            </div>
                        </div>
                        <div class="zingchart-body-main  color-small c-0">
                                            <span class="title">${
                                              item.title
                                            }</span>
                                            <span class="singer">(singer)</span>
                            </div>
                        <div class="zingchart-body-right">
                            <div class="zingchart-body-right-icon">
                                <div class="zingchart-icon icon-mic color-title">
                                    <i class="fa-sharp fa-solid fa-microphone"></i>
                                </div>
                                <div class="icon-favorite color-small "data-index=${index}>
                                    <div class="no-favorite zingchart-icon icon-tym action-hover">
                                        <ion-icon name="heart-outline"></ion-icon>
                                    </div>
                                    <div class="yes-favorite zingchart-icon icon-tym action-hover">
                                        <ion-icon name="heart"></ion-icon>
                                    </div>
                                </div>
                                <div class="zingchart-icon color-title c-0">
                                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                                </div>
                            </div>
        
                            <span class="zingchart-song-time color-small">${
                              item.duration
                            }</span>
                        </div>
                    </div>
                </li> 
                `;
        }
      });
      $(".zing-playlist-img-rotate img").src = "./img/playListSongs/1.jfif";
      $(".zing-playList-right-body").innerHTML = html.join("");
    } else {
      const html = this.songs.map((item, index) => {
        if (index > 38)
          return `
                  <li class="song-item zingchart-body-item zing-playList-item" data-index=${index}> 
                                 <div class="checkbox-wrapper color-main "data-index=${index}>
                                       <ion-icon class="checkBox-icon-music"name="musical-notes-outline"></ion-icon>
                                      <div class="checkbox">
                                          <input type="checkbox">
                                      </div>
                                  </div>
                      <div class="zingchart-body-ctn">
                          <div class="zingchart-body-left zing-playList-body-left">
                              <div class="individual-ctn2-song-item-img zing-playList-body-left-img">
                                  <img src="${
                                    item.img
                                  }" alt="" class="individual-ctn2-song-img">
                                  <div class="individual-ctn2-song-item-icon"data-index=${index}>
                                      <ion-icon name="play"></ion-icon>
                                  </div>
                                  <div class="icon-play-song icon-play-song-top ">
                                      <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                                  </div>
                              </div>
                              <div class="individual-ctn2-song-title zingchart ">
                                      <span class="color-title">${
                                        item.title
                                      }</span>
                                      <small class="color-small">${item.singer
                                        .split(",")
                                        .map(
                                          (i) =>
                                            `<a class="singer color-small"href="">${i}</a>`
                                        )}</small>
                              </div>
                          </div>
                          <div class="zingchart-body-main  color-small c-0">
                                            <span class="title">${
                                              item.title
                                            }</span>
                                            <span class="singer">(singer)</span>
                            </div>
                          <div class="zingchart-body-right">
                              <div class="zingchart-body-right-icon">
                                  <div class="zingchart-icon icon-mic color-title">
                                      <i class="fa-sharp fa-solid fa-microphone"></i>
                                  </div>
                                  <div class="icon-favorite color-small "data-index=${index}>
                                        <div class="no-favorite zingchart-icon icon-tym action-hover">
                                            <ion-icon name="heart-outline"></ion-icon>
                                        </div>
                                        <div class="yes-favorite zingchart-icon icon-tym action-hover">
                                            <ion-icon name="heart"></ion-icon>
                                        </div>
                                    </div>

                                  <div class="zingchart-icon color-title c-0">
                                      <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                                  </div>
                              </div>
          
                              <span class="zingchart-song-time color-small">${
                                item.duration
                              }</span>
                          </div>
                      </div>
                  </li> 
                  `;
      });
      $(".zing-playlist-img-rotate img").src = "./img/discover/ctn3/1.webp";
      $(".zing-playList-right-body").innerHTML = html.join("");
    }
    _this.loadInterested();
  },
  loadInterested: function () {
    const interested = this.songs.map((item, index) => {
      if (index < 10 && index != currentIndex) {
        return `
              <li class="song-item zingchart-body-item zing-playList-item" data-index=${index}> 
                             <div class="checkbox-wrapper color-main "data-index=${index}>
                                   <ion-icon class="checkBox-icon-music"name="musical-notes-outline"></ion-icon>
                                  <div class="checkbox">
                                      <input type="checkbox">
                                  </div>
                              </div>
                  <div class="zingchart-body-ctn">
                      <div class="zingchart-body-left zing-playList-body-left">
                          <div class="individual-ctn2-song-item-img zing-playList-body-left-img">
                              <img src="${
                                item.img
                              }" alt="" class="individual-ctn2-song-img">
                              <div class="individual-ctn2-song-item-icon"data-index=${index}>
                                  <ion-icon name="play"></ion-icon>
                              </div>
                              <div class="icon-play-song icon-play-song-top ">
                                  <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                              </div>
                          </div>
                          <div class="individual-ctn2-song-title zingchart ">
                                  <span class="color-title">${item.title}</span>
                                  <small class="color-small">${item.singer
                                    .split(",")
                                    .map(
                                      (i) =>
                                        `<a class="singer color-small"href="">${i}</a>`
                                    )}</small>
                          </div>
                      </div>
                      <div class="zingchart-body-main  color-small c-0">
                           <span class="title">${item.title}</span>
                           <span class="singer">(singer)</span>
                      </div>
                      <div class="zingchart-body-right">
                          <div class="zingchart-body-right-icon">
                              <div class="zingchart-icon icon-mic color-title">
                                  <i class="fa-sharp fa-solid fa-microphone"></i>
                              </div>
                              <div class="icon-favorite color-small "data-index=${index}>
                                    <div class="no-favorite zingchart-icon icon-tym action-hover">
                                        <ion-icon name="heart-outline"></ion-icon>
                                    </div>
                                    <div class="yes-favorite zingchart-icon icon-tym action-hover">
                                        <ion-icon name="heart"></ion-icon>
                                    </div>
                                </div>
                          
                              <div class="zingchart-icon color-title c-0">
                                  <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                              </div>
                          </div>
      
                          <span class="zingchart-song-time color-small">${
                            item.duration
                          }</span>
                      </div>
                  </div>
              </li> 
              `;
      }
    });
    $(".interested .body").innerHTML = interested.join("");
  },
  handleMusic: function () {
    const _this = this;
    const listSongs = $$(".individual-ctn2-song-item");
    const animationImg = cdImg.animate(
      { transform: "rotate(360deg)" },
      {
        duration: 10000, //thời gian chạy
        iterations: Infinity, //chạy không giới hạn
      }
    );
    animationImg.pause();
    const animationImg_mb = $(".control-left-img-mb").animate(
      { transform: "rotate(360deg)" },
      {
        duration: 10000, //thời gian chạy
        iterations: Infinity, //chạy không giới hạn
      }
    );
    animationImg_mb.pause();
    //-------- load Music khi click ---------
    listSongs.forEach((item, index) => {
      item.ondblclick = function () {
        animationImg.play();
        currentIndex = index;
        _this.loadCurrentSong();
        audio.play();
        _this.deleteColorMusic = false;
        _this.boolPlaylist = false;
        _this.changerMusic = true;
        $(".zing-navar").style.height = 30 + "vh";

        $$(".the-song-include.free").forEach((item) => {
          item.classList.remove("music-color-selection");
          item
            .querySelector(".the-song-include-img.free ")
            .classList.remove("action-play-music");
        });
      };
      item.onclick = function () {
        _this.songSelection = index;
        _this.colorMusicSelection();
      };
    });

    listSongs.forEach((item, index) => {
      if (!index == currentIndex) {
        item
          .querySelector(".individual-ctn2-song-item-img")
          .classList.remove("action-play-music");
        item
          .querySelector(".individual-ctn2-song-item-img")
          .classList.remove("action-pause-music");
      }
      _this.deleteColorMusic = false;
    });

    individualSongList.onclick = function (e) {
      let numberTarget = 0;
      const target = e.target.closest(".individual-ctn2-song-item-img");
      if (target) {
        if (e.target.closest(".icon-play-song")) {
          _this.changerMusic = true;
          audio.pause();
        }
        if (e.target.closest(".individual-ctn2-song-item-icon")) {
          let index = Number(
            e.target
              .closest(".individual-ctn2-song-item-icon")
              .getAttribute("data-index")
          );
          currentIndex = index;
          _this.loadCurrentSong();
          _this.changerMusic = true;
          audio.play();
          _this.deleteColorMusic = false;
        }
      } else if (e.target.closest(".individual-ctn2-song-right")) {
        if (e.target.closest(".icon-favorite")) {
          let isBool = true;
          e.target
            .closest(".icon-favorite")
            .classList.toggle("action-favorite");
          let index = Number(
            e.target.closest(".icon-favorite").getAttribute("data-index")
          );
        }
      }
      const checkbox_wrapper = e.target.closest(".checkbox-wrapper");
      const checkbox = e.target.closest(".checkbox");
      if (checkbox_wrapper || checkbox) {
        if (_this.isCheckBox) {
          checkbox.classList.remove("action-checkbox");
          checkBoxSelection = checkbox_wrapper.getAttribute("data-index");
          $$(".individual-ctn2-song-item")[checkBoxSelection].classList.remove(
            "music-color-selection-Checkbox"
          );
          checkbox_wrapper.classList.remove("checkBox-color-action");
          _this.isCheckBox = !_this.isCheckBox;
          allPlayList = false;
        } else {
          checkbox.classList.add("action-checkbox");
          checkBoxSelection = checkbox_wrapper.getAttribute("data-index");
          arrPlayList.push(checkBoxSelection);
          $$(".individual-ctn2-song-item")[checkBoxSelection].classList.add(
            "music-color-selection-Checkbox"
          );
          checkbox_wrapper.classList.add("checkBox-color-action");
          _this.isCheckBox = !_this.isCheckBox;
          allPlayList = false;
        }
        let LengthSelection = $$(
          ".individual-ctn2-song-item.music-color-selection-Checkbox"
        ).length;

        if (LengthSelection == 0) {
          $(".individual-ctn1-header-left").classList.remove(
            "action-add-playlist"
          );
        } else {
          $(".individual-ctn1-header-left").classList.add(
            "action-add-playlist"
          );
        }
        if ($$(".action-checkbox").length <= _this.songs.length) {
          $(".addPlayList .checkbox-wrapper .checkbox").classList.remove(
            "action-checkbox"
          );
        }
        arrPlayList.sort((a, b) => a - b);
      }
    };

    // ----------  click icon control ------------
    iconPauseMusic.onclick = function () {
      audio.pause();
    };

    iconPlayMusic.onclick = function () {
      audio.play();
    };

    iconLeft.onclick = function () {
      if (isShuffle) {
        _this.random();
      } else {
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = _this.songs.length - 1;
        }
      }
      _this.songSelection = currentIndex;
      _this.colorMusicSelection();
      _this.loadCurrentSong();
      audio.play();
    };
    iconRight.onclick = function () {
      if (isShuffle) {
        _this.random();
      } else {
        currentIndex++;
        if (currentIndex > _this.songs.length - 1) {
          currentIndex = 0;
        }
      }
      _this.songSelection = currentIndex;
      _this.colorMusicSelection();
      _this.loadCurrentSong();
      audio.play();
      _this.deleteColorMusic = false;
    };
    iconRepeat.onclick = function () {
      isRepeat = !isRepeat;
      this.classList.toggle("action-controls", isRepeat);
      iconRepeat_mb.classList.toggle("action-controls", isRepeat);

      _this.setConfig("isRepeat", isRepeat);
      if (isRepeat) {
        if (isTheme == false) {
          iconRepeat.style.color = "var(--color-pink)";
        } else {
          iconRepeat.style.color = "#6c5ce7";
        }
      } else {
        if (isTheme == false) {
          iconRepeat.style.color = "white";
        } else {
          iconRepeat.style.color = "black";
        }
      }
    };

    iconShuffle.onclick = function () {
      isShuffle = !isShuffle;
      this.classList.toggle("action-controls", isShuffle);
      _this.setConfig("isShuffle", isShuffle);
      if (isShuffle) {
        if (isTheme == false) {
          iconShuffle.style.color = "var(--color-pink)";
        } else {
          iconShuffle.style.color = "#6c5ce7";
        }
      } else {
        if (isTheme == false) {
          iconShuffle.style.color = "white";
        } else {
          iconShuffle.style.color = "black";
        }
      }
    };
    // --------------------- mobile -----------------
    iconPauseMusic_mb.onclick = function () {
      audio.pause();
    };

    iconPlayMusic_mb.onclick = function () {
      audio.play();
    };

    iconLeft_mb.onclick = function () {
      if (isShuffle) {
        _this.random();
      } else {
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = _this.songs.length - 1;
        }
      }
      _this.songSelection = currentIndex;
      _this.colorMusicSelection();
      _this.loadCurrentSong();
      audio.play();
    };
    iconRight_mb.onclick = function () {
      if (isShuffle) {
        _this.random();
      } else {
        currentIndex++;
        if (currentIndex > _this.songs.length - 1) {
          currentIndex = 0;
        }
      }
      _this.songSelection = currentIndex;
      _this.colorMusicSelection();
      _this.loadCurrentSong();
      audio.play();
      _this.deleteColorMusic = false;
    };
    iconRepeat_mb.onclick = function () {
      isRepeat = !isRepeat;
      this.classList.toggle("action-controls", isRepeat);
      if (isRepeat) {
        if (isTheme == false) {
          iconRepeat.style.color = "var(--color-pink)";
        } else {
          iconRepeat.style.color = "#6c5ce7";
        }
      } else {
        if (isTheme == false) {
          iconRepeat.style.color = "white";
        } else {
          iconRepeat.style.color = "black";
        }
      }
    };

    iconShuffle_mb.onclick = function () {
      isShuffle = !isShuffle;
      this.classList.toggle("action-controls", isShuffle);
      if (isShuffle) {
        if (isTheme == false) {
          iconShuffle.style.color = "var(--color-pink)";
        } else {
          iconShuffle.style.color = "#6c5ce7";
        }
      } else {
        if (isTheme == false) {
          iconShuffle.style.color = "white";
        } else {
          iconShuffle.style.color = "black";
        }
      }
    };

    //--------------------------------------------------

    audio.onpause = function () {
      animationImg.pause();
      animationImg_mb.pause();
      $$(".zing-result-list-item").forEach((item) => {
        const index = item.getAttribute("data-index");
        if (index == currentIndex) {
          item.classList.add("action-pause-music");
          item.classList.remove("action-play-music");
        }
      });
      $$(".recently-song-item").forEach((item) => {
        const index = item.getAttribute("data-index");
        if (index == currentIndex) {
          item.classList.add("action-pause-music");
          item.classList.remove("action-play-music");
        }
      });
      if (_this.boolPlaylist) {
        $(".zing-playlist-btn").classList.remove("action-playlist-btn");
      }
      controlCd.style.marginLeft = 0;
      iconPlay.classList.remove("action-play-icon");
      iconPlay_mb.classList.remove("action-play-icon");
      $$(".individual-ctn2-song-item").forEach((item, index) => {
        if (index != currentIndex) {
          item.classList.remove("action-play-music");
          item.classList.remove("action-pause-music");
        }
      });
      $$(".song-item-right").forEach((item) => {
        const index = item.getAttribute("data-index");
        if (index == currentIndex) {
          item
            .querySelector(".individual-ctn2-song-item-img")
            .classList.remove("action-play-music");
          item
            .querySelector(".individual-ctn2-song-item-img")
            .classList.add("action-pause-music");
        }
      });
      $$(".zing-playList-item").forEach((item) => {
        const index = item.getAttribute("data-index");
        if (index == currentIndex) {
          item
            .querySelector(".individual-ctn2-song-item-img")
            .classList.remove("action-play-music");
          item
            .querySelector(".individual-ctn2-song-item-img")
            .classList.add("action-pause-music");
        }
      });
      $$(".zingchart-body-list .zingchart-body-item").forEach((item, index) => {
        if (index == currentIndex) {
          $$(".zingchart-body-left-song-item-img")[index].classList.remove(
            "action-play-music"
          );
          $$(".zingchart-body-left-song-item-img")[index].classList.add(
            "action-pause-music"
          );
        }
      });
      $$(".the-song-include.free").forEach((item) => {
        let index = item.getAttribute("data-index");
        if (index == currentIndex) {
          item
            .querySelector(".the-song-include-img")
            .classList.remove("action-play-music");
          item
            .querySelector(".the-song-include-img")
            .classList.add("action-pause-music");
        }
      });

      if (_this.changerMusic) {
        listSongs[currentIndex]
          .querySelector(".individual-ctn2-song-item-img")
          .classList.add("action-pause-music");
        listSongs[currentIndex]
          .querySelector(".individual-ctn2-song-item-img")
          .classList.remove("action-play-music");
      }
      _this.playSong = false;
      playListCDF1.classList.remove("action-rotate-play");
      playListCDF1.classList.add("action-rotate-pause");
      playListCDF0.classList.remove("action-rotate");
      playListCDF0.classList.remove("action-play-music");
    };
    audio.onplay = function () {
      animationImg.play();
      animationImg_mb.play();

      if (_this.boolPlaylist) {
        $(".zing-playlist-btn").classList.add("action-playlist-btn");
      } else {
        $(".zing-playlist-btn").classList.remove("action-playlist-btn");
      }
      $(".zing-body").style.paddingBottom = "90px";
      $(".zing-playList").style.marginBottom = "50px";
      $(".zing-controls").classList.remove("hide");
      $(".expanded").style.bottom = "90px";
      $(".zing-navar").style.height = 30 + "vh";
      controlCd.style.marginLeft = 10 + "px";
      iconPlay.classList.add("action-play-icon");
      iconPlay_mb.classList.add("action-play-icon");
      _this.colorMusic_PlayList();
      _this.colorMusic();
      $$(".song-item-right").forEach((item) => {
        const index = item.getAttribute("data-index");
        if (index == currentIndex) {
          item
            .querySelector(".individual-ctn2-song-item-img")
            .classList.add("action-play-music");
          item
            .querySelector(".individual-ctn2-song-item-img")
            .classList.remove("action-pause-music");
        }
      });
      _this.loadPlayListTop_bottom();
      _this.loadColorPlaylistSong();
      _this.loadColorMusicDiscover();
      _this.scrollToActiveSong($(".music-color"));
      //  ---- Top 100 ----------
      $$(".zingchart-body-list .zingchart-body-item").forEach((item, index) => {
        if (index == currentIndex) {
          item.classList.add("music-color");
          $$(".zingchart-body-left-song-item-img")[index].classList.add(
            "action-play-music"
          );
          $$(".zingchart-body-left-song-item-img")[index].classList.remove(
            "action-pause-music"
          );
        }
      });
      if (allPlayList) {
        _this.loadSongRight();
        allPlayList == false;
      } else {
        _this.loadPlayListTop_bottom();
      }
      $$(".the-song-include.free").forEach((item) => {
        let index = item.getAttribute("data-index");
        if (index == currentIndex) {
          item
            .querySelector(".the-song-include-img")
            .classList.add("action-play-music");
          item
            .querySelector(".the-song-include-img")
            .classList.remove("action-pause-music");
        }
      });
      if (_this.changerMusic) {
        listSongs[currentIndex]
          .querySelector(".individual-ctn2-song-item-img")
          .classList.add("action-play-music");
        listSongs[currentIndex]
          .querySelector(".individual-ctn2-song-item-img")
          .classList.remove("action-pause-music");
      }
      _this.loadColorZingchart();
      _this.loadColorSearch($$(".zing-result-list-item"));
      _this.loadColorSearch($$(".recently-song-item"));
      _this.playSong = true;
    };
    //  tua nhạcRadioCtn-ctn1-body
    $(".progress").onclick = function (e) {
      const progress = this.clientWidth;
      const currentTimeClick = e.offsetX;
      const newTime = (currentTimeClick / progress) * 100;
      $(".progressCurrent").style.width = newTime + "%";
      audio.play();
      // có phần trăm rồi thì tính ra thời gian
      audio.currentTime = (newTime * audio.duration) / 100;
    };
    //mobile
    $(".progress-mb").onclick = function (e) {
      const progress = this.clientWidth;
      const currentTimeClick = e.offsetX;
      const newTime = (currentTimeClick / progress) * 100;
      $(".progressCurrent-mb").style.width = newTime + "%";
      audio.play();
      // có phần trăm rồi thì tính ra thời gian
      audio.currentTime = (newTime * audio.duration) / 100;
    };
    // auto chạy nhạc
    audio.ontimeupdate = function () {
      $(".progressCurrent").style.width =
        (audio.currentTime * 100) / audio.duration + "%";
      $(".progressCurrent-mb").style.width =
        (audio.currentTime * 100) / audio.duration + "%";
      let minute = Math.floor(audio.currentTime / 60);
      if (minute < 10) {
        $(".minute-mb").innerText = "0" + minute;
        $(".minute").innerText = "0" + minute;
      } else {
        $(".minute-mb").innerText = minute;
        $(".minute").innerText = minute;
      }
      let second = Math.floor(audio.currentTime - minute * 60);
      if (second < 10) {
        $(".second-mb").innerText = "0" + second;
        $(".second").innerText = "0" + second;
      } else {
        $(".second-mb").innerText = second;
        $(".second").innerText = second;
      }
    };
    // khi kết thúc 1 bài hát
    audio.onended = function () {
      if (isRepeat == true) {
        audio.play();
      } else {
        if (_this.changerMusic == false) {
          currentIndex = 1;
        }
        iconRight.click();
      }
    };
    // ---------- phát tất cả -------------
    $(".individual-btn-all").onclick = () => {
      _this.changerMusic = true;
      audio.play();
    };
    //  ------ chỉnh âm thanh ------------

    const volumeControl = $(".volume-control");
    const volumePlay = $(".volume-play");
    const volumePause = $(".volume-pause");

    volumePlay.onclick = function () {
      $(".volume").classList.add("action-volume");
      audio.volume = 0;
      $(".volume-control-play").style.width = 0 + "%";
    };
    volumePause.onclick = function () {
      $(".volume").classList.remove("action-volume");
      $(".volume-control-play").style.width = _this.percent;
      audio.volume = _this.volumeNumber;
    };
    volumeControl.onclick = function (e) {
      _this.percent = (e.offsetX * 100) / this.clientWidth + "%";
      $(".volume-control-play").style.width = _this.percent;
      _this.volumeNumber = (e.offsetX * 100) / this.clientWidth / 100;
      audio.volume = _this.volumeNumber;
    };

    $(".control-left-title-mb .icon").onclick = function () {
      ZingControl_mb.classList.remove("zing-controls-mb-open");
      $(".zing-controls").classList.remove("hide");
    };
    $(".zing-controls").onclick = function (e) {
      if (
        !(
          e.target.closest(".repeat") || e.target.closest(".icon-control-right")
        )
      ) {
        ZingControl_mb.classList.add("zing-controls-mb-open");
      }
    };

    //  --------------- Chọn tất cả để thêm vào play list --------------

    iconSelectionAll.onclick = function () {
      if (allPlayList) {
        this.querySelector(".checkbox").classList.remove("action-checkbox");
        $$(".individual-ctn2-song-item").forEach((item) => {
          item.classList.remove("music-color-selection-Checkbox");
          item
            .querySelector(".checkbox-wrapper")
            .classList.remove("checkBox-color-action");
          item
            .querySelector(".checkbox-wrapper .checkbox")
            .classList.remove("action-checkbox");
        });
        allPlayList = !allPlayList;
      } else {
        this.querySelector(".checkbox").classList.add("action-checkbox");
        $$(".individual-ctn2-song-item").forEach((item) => {
          item.classList.add("music-color-selection-Checkbox");
          item
            .querySelector(".checkbox-wrapper")
            .classList.add("checkBox-color-action");
          item
            .querySelector(".checkbox-wrapper .checkbox")
            .classList.add("action-checkbox");
        });
        allPlayList = !allPlayList;
      }
    };
    btn_addPlayList.onclick = function () {
      _this.changerMusic = true;
      _this.actionPlayList();
      playListSongRight.classList.remove("playlist-song-exit");
      playListSongRight.classList.add("playlist-song-open");
      $$(".individual-ctn2-song-item.music-color-selection-Checkbox").forEach(
        (item) => {
          item
            .querySelector(".checkbox-wrapper")
            .classList.remove("checkBox-color-action");
          item
            .querySelector(".checkbox-wrapper .checkbox")
            .classList.remove("action-checkbox");
          item.classList.remove("music-color-selection-Checkbox");
          item.classList.remove("music-color-selection");
          if (allPlayList) {
            _this.loadSongRight();
          } else {
            _this.loadPlayListTop_bottom();
          }
        }
      );
      alert("Đã Thêm Vào Danh Sách !");
      playListRight.onclick = function (e) {
        const target = e.target.closest(".song-item-right");
        if (target) {
          if (e.target.closest(".icon-play-song")) {
            target
              .querySelector(".individual-ctn2-song-item-img")
              .classList.remove("action-play-music");
            target
              .querySelector(".individual-ctn2-song-item-img")
              .classList.add("action-pause-music");
            _this.changerMusic = true;
            audio.pause();
          }
          if (e.target.closest(".individual-ctn2-song-item-icon")) {
            target
              .querySelector(".individual-ctn2-song-item-img")
              .classList.add("action-play-music");
            target
              .querySelector(".individual-ctn2-song-item-img")
              .classList.remove("action-pause-music");
            currentIndex = Number(target.getAttribute("data-index"));
            _this.loadCurrentSong();
            _this.changerMusic = true;
            audio.play();
          }
        }
      };
    };
    //    ------- xóa danh sách --------

    $(".option-delete-playlist").onclick = () => {
      $(".delete-playlist").classList.toggle("hide");
    };

    $(".delete-playlist").onclick = function () {
      $(".list-empty").classList.remove("hide");
      $(".playlist-content").classList.add("hide");
      $(".playlist-content-end").classList.add("hide");
      $$(".song-item-right").forEach((item) => {
        item.remove();
      });
      arrPlayList = [];
      $(".playlist-content span").innerText = "";
      alert("Đã xóa thành công");
    };
  },
  actionPlayList: function () {
    $(".playlist-content span").innerText = "Tiếp Theo";
    $(".list-empty").classList.add("hide");
    $(".playlist-content").classList.remove("hide");
    $(".individual-ctn1-header-left").classList.remove("action-add-playlist");
    $(".addPlayList .checkbox-wrapper .checkbox").classList.remove(
      "action-checkbox"
    );
  },
  handelPlayListSong: function () {
    const _this = this;
    $(".zing-playList-right").ondblclick = function (e) {
      const target = e.target.closest(".zing-playList-item");
      _this.boolPlaylist = true;
      if (target) {
        currentIndex = target.getAttribute("data-index");
        _this.loadCurrentSong();
        _this.loadColorPlaylistSong();
        playListCDF1.classList.add("action-rotate-play");
        playListCDF0.classList.add("action-rotate");
        playListCDF0.classList.add("action-play-music");
        $(".zing-playlist-btn").classList.add("action-playlist-btn");
        $(".zing-playlist-img-rotate img").src = target.querySelector(
          ".zing-playList-body-left-img img"
        ).src;
        audio.play();
        _this.boolPlaylist = true;
      }
      if (e.target.closest(".icon-favorite")) {
        let isBool = true;
        e.target.closest(".icon-favorite").classList.toggle("action-favorite");
        let index = Number(
          e.target.closest(".icon-favorite").getAttribute("data-index")
        );
      }
    };
    $(".zing-playlist-icon-play").onclick = () => audio.pause();
    $(".zing-playlist-icon-pause").onclick = () => audio.play();

    $(".individual-ctn3").onclick = function (e) {
      const target = e.target.closest(".individual-ctn3-item");
      if (e.target.closest(".individual-ctn3-modal") || target) {
        _this.playListUS = true;
        _this.loadPlayListSongs();
        zingPlayList.classList.remove("hide");
        $(".zing-result").classList.add("hide");
        individual.classList.add("hide");
        $(".zing-playlist-img-rotate img").src = target.querySelector(
          ".individual-ctn3-item-img img"
        ).src;
      }
    };
    $(".discover-ctn3-body").onclick = function (e) {
      const target = e.target.closest(".discover-ctn3-item");
      if (target) {
        _this.playListUS = false;
        _this.loadPlayListSongs();
        zingPlayList.classList.remove("hide");
        $(".zing-result").classList.add("hide");
        discover.classList.add("hide");
        $(".zing-playlist-img-rotate img").src = target.querySelector(
          ".discover-ctn3-img img"
        ).src;
      }
    };
    $(".discover-ctn4-body").onclick = function (e) {
      const target = e.target.closest(".discover-ctn3-item");
      if (target) {
        _this.playListUS = false;
        _this.loadPlayListSongs();
        zingPlayList.classList.remove("hide");
        $(".zing-result").classList.add("hide");
        discover.classList.add("hide");
        $(".zing-playlist-img-rotate img").src = target.querySelector(
          ".discover-ctn3-img img"
        ).src;
      }
    };
    // ----- xử lý btn -------------

    $(".zing-playlist-btn").onclick = function () {
      _this.boolPlaylist = !_this.boolPlaylist;
      this.classList.toggle("action-playlist-btn", _this.boolPlaylist);
      if (_this.boolPlaylist) {
        audio.play();
      } else {
        audio.pause();
      }
    };
  },
  colorMusic_PlayList: function () {
    $$(".song-item-right").forEach((item) => {
      let index = item.getAttribute("data-index");
      if (index == currentIndex) {
        item.classList.add("music-color-playlist");
        item.classList.add("action-hover");
        item
          .querySelector(".individual-ctn2-song-item-img")
          .classList.add("action-play-music");
      } else {
        item.classList.remove("music-color-playlist");
        item.classList.remove("action-hover");
        item
          .querySelector(".individual-ctn2-song-item-img")
          .classList.remove("action-pause-music");
        item
          .querySelector(".individual-ctn2-song-item-img")
          .classList.remove("action-play-music");
      }
    });
  },
  loadSongRight: function () {
    const _this = this;
    $(".playlist-content").classList.remove("hide");
    $(".playlist-content-end").classList.add("hide");
    $(".playlist-content span").style.color = "white";
    _this.songs.forEach((item, index) => {
      if (index <= currentIndex) {
        const html = _this.songs.map(function (item, index) {
          return index <= currentIndex && index <= 22
            ? `<li class="song-item song-item-right ${
                audio.play() && index == currentIndex
                  ? "music-color-playlist"
                  : ""
              }" data-index=${index}> 
                            <div class="individual-ctn2-song-item-img ${
                              audio.play() && index == currentIndex
                                ? "action-play-music"
                                : ""
                            }">
                                <img src="${
                                  item.img
                                }" alt="" class="individual-ctn2-song-img">
                                 <div class="individual-ctn2-song-item-icon color-main">
                                    <ion-icon name="play"></ion-icon>
                                </div>
                                <div class="icon-play-song ">
                                <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                                </div>
                            </div>
                            <div class="individual-ctn2-song-title color-main">
                                    <span class="color-title">${
                                      item.title
                                    }</span>
                                    <small class="color-small">${
                                      item.singer
                                    }</small>
                            </div>
                        </li>  `
            : "";
        });
        $(".list-song-body-top").innerHTML = html.join(" ");
      } else {
        const html = _this.songs.map(function (item, index) {
          return index > currentIndex && index <= 22
            ? `<li class="song-item song-item-right" data-index=${index}> 
                            <div class="individual-ctn2-song-item-img">
                                <img src="${
                                  item.img
                                }" alt="" class="individual-ctn2-song-img">
                                 <div class="individual-ctn2-song-item-icon color-main">
                                    <ion-icon name="play"></ion-icon>
                                </div>
                                <div class="icon-play-song ${
                                  audio.play() && index == currentIndex
                                    ? "action-play-music"
                                    : ""
                                }"">
                                <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                                </div>
                            </div>
                            <div class="individual-ctn2-song-title color-main">
                                    <span class="color-main">${
                                      item.title
                                    }</span>
                                    <small class="color-small">${
                                      item.singer
                                    }</small>
                            </div>
                        </li>  `
            : "";
        });
        $(".list-song-body-bottom").innerHTML = html.join(" ");
      }
    });
    if (currentIndex === 22) {
      $(".playlist-content").classList.add("hide");
      $(".playlist-content-end").classList.remove("hide");
      $(".list-song-body-bottom").innerHTML = "";
    }
  },
  loadPlayListTop_bottom: function () {
    const _this = this;
    $(".playlist-content").classList.add("hide");
    arrPlayList.sort((a, b) => a - b);
    var arrPlay = new Set(arrPlayList);
    var arr_PlayList = [...arrPlay];
    var number_playList = 0;
    arr_PlayList.forEach((item, index) => {
      number_playList = index;
      console.log(currentIndex);
      if (item <= currentIndex) {
        const html = arr_PlayList.map(function (item) {
          return item < currentIndex
            ? `<li class="song-item song-item-right ${
                audio.play() && item == currentIndex
                  ? "music-color-playlist"
                  : ""
              }" data-index=${item}> 
                            <div class="individual-ctn2-song-item-img ${
                              audio.play() && item == currentIndex
                                ? "action-play-music"
                                : ""
                            }">
                                <img src="${
                                  _this.songs[item].img
                                }" alt="" class="individual-ctn2-song-img">
                                <div class="individual-ctn2-song-item-icon color-main">
                                    <ion-icon name="play"></ion-icon>
                                </div>
                                <div class="icon-play-song ">
                                    <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                                </div>
                            </div>
                            <div class="individual-ctn2-song-title color-main">
                                    <span class="color-main">${
                                      _this.songs[item].title
                                    }</span>
                                    <small class="color-small">${
                                      _this.songs[item].singer
                                    }</small>
                            </div>
                        </li>  `
            : "";
        });
        $(".list-song-body-top").innerHTML = html.join(" ");
      }
      if (item >= currentIndex) {
        const html = arr_PlayList.map(function (item) {
          return item > currentIndex
            ? `<li class="song-item song-item-right" data-index=${item}> 
                                <div class="individual-ctn2-song-item-img">
                                    <img src="${_this.songs[item].img}" alt="" class="individual-ctn2-song-img">
                                    <div class="individual-ctn2-song-item-icon color-main">
                                        <ion-icon name="play"></ion-icon>
                                    </div>
                                    <div class="icon-play-song ">
                                    <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif" alt="">
                                    </div>
                                </div>
                                <div class="individual-ctn2-song-title color-main">
                                        <span class="color-main">${_this.songs[item].title}</span>
                                        <small class="color-small">${_this.songs[item].singer}</small>
                                </div>
                            </li>  `
            : " ";
        });
        $(".list-song-body-bottom").innerHTML = html.join(" ");
      }
    });
    if (number_playList > 0 && _this.playSong == true) {
      $(".playlist-content").classList.remove("hide");
    }
  },
  scrollToActiveSong: function (element) {
    setTimeout(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 300);
  },
  random: function () {
    let rand = Math.floor(Math.random() * this.songs.length - 1);
    currentIndex = rand;
  },
  loadCurrentSong: function () {
    cdImg.src = this.songs[currentIndex].img;
    cdTitle.innerText = this.songs[currentIndex].title;
    cdDes.innerText = this.songs[currentIndex].singer;
    audio.src = this.songs[currentIndex].pathSong;
    $(".time-end").innerText = this.songs[currentIndex].duration;
    //mobile
    $(".control-left-title-mb .content h1").innerText =
      this.songs[currentIndex].title;
    $(".control-left-title-mb .content small").innerText =
      this.songs[currentIndex].singer;
    $(".control-left-img-mb img").src = this.songs[currentIndex].img;
    $(".time-end-mb").innerText = this.songs[currentIndex].duration;
  },
  colorMusic: function () {
    $$(".individual-ctn2-song-item").forEach((item, index) => {
      if (index == currentIndex) {
        item.classList.add("music-color");
        item
          .querySelector(".individual-ctn2-song-item-img")
          .classList.add("action-play-music");
      } else {
        item.classList.remove("music-color");
        item
          .querySelector(".individual-ctn2-song-item-img")
          .classList.remove("action-pause-music");
        item
          .querySelector(".individual-ctn2-song-item-img")
          .classList.remove("action-play-music");
      }
    });
  },

  colorMusicSelection: function () {
    $$(".song-item.individual-ctn2-song-item").forEach((item) => {
      const index = item.getAttribute("data-index");
      if (index == this.songSelection) {
        item.classList.add("music-color-selection");
      } else {
        item.classList.remove("music-color-selection");
      }
    });
  },

  //   ================= cá nhân =================
  handelEvent: function () {
    //    ------------ lựa chọn ----------
    $$(".zing-body-selector .list .item").forEach((item, index) => {
      item.onclick = () => {
        if (index < 4) {
          if (isTheme == true) {
            $(".item.zing-body-selector-bgr").classList.remove(
              "zing-body-selector-bgr"
            );
            item.classList.add("zing-body-selector-bgr");
            $(".zing-body-selector-bgr").style.background =
              "var(--color-white);";
          } else {
            $(".item.zing-body-selector-bgr").classList.remove(
              "zing-body-selector-bgr"
            );
            $(".zing-body-selector-bgr").style.background =
              "rgba(0, 0, 0, 0.3)";
            item.classList.add("zing-body-selector-bgr");
          }

          if (index == 0) {
            individual_ctn2.classList.remove("hide");
            individual_ctn3.classList.remove("hide");
            individual_ctn4.classList.remove("hide");
            individual_ctn5.classList.remove("hide");
            individual_ctn1.classList.remove("hide");
            $(".individual-ctn2 .l-4").classList.remove("hide");
            $(".individual-ctn2 .l-8").classList.remove("l-12");
            $$(".checkbox-wrapper").forEach((item, index) => {
              item.style.display = "none";
            });
            $$(".individual-ctn2-song-item").forEach((item) => {
              item.classList.remove("action-hover");
            });
            $$(".individual-ctn2-song-item").forEach((item) => {
              item.classList.remove("music-color-selection-Checkbox");
            });
            $(".individual-ctn1-header-left").classList.remove(
              "action-add-playlist"
            );
            $(".individual-ctn2-right").style.height = "300px";
            $(".individual-ctn1-header-left").classList.remove(
              "action-add-playlist-mb"
            );
            $(".individual-btn").classList.remove("hide");
            $(".individual-btn-all").classList.remove("hide");
          }
          if (index == 1) {
            individual_ctn3.classList.add("hide");
            individual_ctn4.classList.add("hide");
            individual_ctn5.classList.add("hide");
            individual_ctn2.classList.remove("hide");
            individual_ctn1.classList.remove("hide");
            $(".individual-ctn2 .l-4").classList.add("hide");
            $(".individual-ctn2 .l-8").classList.add("l-12");
            $$(".checkbox-wrapper").forEach((item, index) => {
              item.style.display = "flex";
            });
            $$(".individual-ctn2-song-item").forEach((item) => {
              item.classList.add("action-hover");
            });
            $(".individual-ctn2-right").style.height = "100%";
            $(".individual-ctn1-header-left").classList.add(
              "action-add-playlist-mb"
            );
            $(".individual-ctn2-song-list").classList.add(
              "action-add-playlist-mb"
            );
            $(".individual-btn").classList.add("hide");
            $(".individual-btn-all").classList.add("hide");
          }
        }
        if (index == 2) {
          individual_ctn3.classList.remove("hide");
          individual_ctn2.classList.add("hide");
          individual_ctn4.classList.remove("hide");
          individual_ctn5.classList.add("hide");
          individual_ctn1.classList.add("hide");
        }
        if (index == 3) {
          individual_ctn4.classList.add("hide");
          individual_ctn2.classList.add("hide");
          individual_ctn3.classList.add("hide");
          individual_ctn5.classList.remove("hide");
          individual_ctn1.classList.add("hide");
        }
        $(".zing-body").style.paddingBottom = "100px";
      };
    });
    $(".zing-header-settings").onclick = function () {
      $(".setting-list").classList.toggle("hide");
    };
    //  ---------- xử lý playlist -----------

    // ------------ hiện danh sách playlist---------------
    $(".list-song").onclick = () => {
      if (this.isPlayList == false) {
        playListSongRight.classList.remove("playlist-song-open");
        playListSongRight.classList.add("playlist-song-exit");
        this.isPlayList = true;
      } else if (this.isPlayList == true) {
        playListSongRight.classList.add("playlist-song-open");
        playListSongRight.classList.remove("playlist-song-exit");
        this.isPlayList = false;
      }
    };
    // close playlist mobile
    $(".playlist-song .icon-close").onclick = function () {
      playListSongRight.classList.remove("playlist-song-open");
      playListSongRight.classList.add("playlist-song-exit");
    };
    // open playlist mobile
    $(".playList").onclick = function () {
      playListSongRight.classList.add("playlist-song-open");
      playListSongRight.classList.remove("playlist-song-exit");
    };
    //  -------------- thả <3 ------------
    iconFavorite.onclick = function () {
      this.isFavorite = !this.isFavorite;
      this.classList.toggle("action-favorite", this.isFavorite);
    };

    //------------- chuyển đổi hình ảnh -------------
  },

  randerSinger: function () {
    const individualctn5 = $(".individual-ctn5-body");
    const html = this.listSinger.map((item) => {
      return ` <div class="l-2-4 m-2-4 c-6">
         <div class="individual-ctn5-item">
             <div class="individual-ctn5-hover">
                 <div class="individual-ctn5-img">
                     <img src="${item.img}" alt="">
                     <div class="individual-ctn2-song-item-icon modal-icon-play">
                         <ion-icon name="play"></ion-icon>
                     </div>
                 </div>
             </div>
             <div class="individual-ctn5-info color-main">
                 <h1 >${item.Singer}</h1>
                 <span class="color-small">${item.Folower}</span>
                 <button class="btn color-small">
                     <ion-icon name="shuffle-outline"></ion-icon>
                     GÓC NHẠC
                 </button>
             </div>
         </div>
     </div>`;
    });
    individualctn5.innerHTML = html.join("");
  },
  randerslide: function () {
    const html = this.randerSlide.map((item, index) => {
      return `<img src="${item.img}" alt="" class="individual-ctn2-img
                        ${
                          index == 0
                            ? "individual-ctn2-img-first"
                            : index == 1
                            ? "individual-ctn2-img-second"
                            : index == 2
                            ? "individual-ctn2-img-third"
                            : index == 3
                            ? "individual-ctn2-img-four"
                            : "individual-ctn2-img-four"
                        }">`;
    });
    $(".individual-ctn2-left").innerHTML = html.join(" ");
  },

  autoChangeImg: function () {
    let indexImgs = 1;
    const individualListImg = $$(".individual-ctn2-img");
    changeImg = function () {
      individualListImg.forEach((item, index) => {
        // individual-ctn2-img-second","individual-ctn2-img-first
        if (index == indexImgs) {
          item.classList.replace(
            "individual-ctn2-img-four",
            "individual-ctn2-img-first"
          );
          item.classList.replace(
            "individual-ctn2-img-second",
            "individual-ctn2-img-first"
          );
          item.classList.replace(
            "individual-ctn2-img-third",
            "individual-ctn2-img-second"
          );
        } else if (index == indexImgs + 1) {
          item.classList.replace(
            "individual-ctn2-img-four",
            "individual-ctn2-img-second"
          );
          item.classList.replace(
            "individual-ctn2-img-third",
            "individual-ctn2-img-second"
          );
          item.classList.replace(
            "individual-ctn2-img-four",
            "individual-ctn2-img-first"
          );
        } else if (index == indexImgs + 2) {
          item.classList.replace(
            "individual-ctn2-img-four",
            "individual-ctn2-img-third"
          );
          item.classList.replace(
            "individual-ctn2-img-four",
            "individual-ctn2-img-first"
          );
        } else {
          item.classList.replace(
            "individual-ctn2-img-third",
            "individual-ctn2-img-second"
          );
          item.classList.replace(
            "individual-ctn2-img-second",
            "individual-ctn2-img-first"
          );
          item.classList.replace(
            "individual-ctn2-img-first",
            "individual-ctn2-img-four"
          );
        }
        if (index == individualListImg.length - 1) {
          individualListImg[0].classList.replace(
            "individual-ctn2-img-four",
            "individual-ctn2-img-third"
          );
          individualListImg[0].classList.replace(
            "individual-ctn2-img-third",
            "individual-ctn2-img-second"
          );
          individualListImg[1].classList.replace(
            "individual-ctn2-img-four",
            "individual-ctn2-img-third"
          );
        }
      });
      indexImgs++;
      if (indexImgs > individualListImg.length - 1) {
        indexImgs = 0;
      }
    };
    setInterval("changeImg()", 2000);
  },

  handelMenu: function () {
    //    ========== handel menu =============
    const _this = this;
    zingMenu.onclick = function (e) {
      $(".zing-result").classList.add("hide");
      $(".zing-search input").value = "";
      const target = e.target.closest(".zing-navbar-item ");
      const index = target.getAttribute("data-index");
      $$(".zing-navbar-item.action-song").forEach((item) => {
        item.classList.remove("action-song");
      });
      _this.isMenu = index;
      _this.eventMenu();
    };
    $(".footer-mb").onclick = function (e) {
      $(".zing-result").classList.add("hide");
      $(".zing-search input").value = "";
      const target = e.target.closest(".zing-navbar-item-mb ");
      const index = target.getAttribute("data-index");
      $$(".zing-navbar-item-mb.action-song").forEach((item) => {
        item.classList.remove("action-song");
      });
      _this.isMenu = index;
      _this.eventMenu();
    };
  },

  eventMenu: function () {
    if (this.isMenu == 0) {
      individual.classList.remove("hide");
      discover.classList.add("hide");
      navbarItem[this.isMenu].classList.add("action-song");
      zingchart.classList.add("hide");
      zingPlayList.classList.add("hide");
      RadioCtn.classList.add("hide");
      $(".info-search").classList.remove("show-Results");
      $$(".zing-navbar-item-mb")[this.isMenu].classList.add("action-song");
    } else if (this.isMenu == 1) {
      individual.classList.add("hide");
      discover.classList.remove("hide");
      navbarItem[this.isMenu].classList.add("action-song");
      zingchart.classList.add("hide");
      zingPlayList.classList.add("hide");
      RadioCtn.classList.add("hide");
      $(".info-search").classList.remove("show-Results");
      $$(".zing-navbar-item-mb")[this.isMenu].classList.add("action-song");
    } else if (this.isMenu == 2) {
      individual.classList.add("hide");
      discover.classList.add("hide");
      navbarItem[this.isMenu].classList.add("action-song");
      zingchart.classList.remove("hide");
      zingPlayList.classList.add("hide");
      RadioCtn.classList.add("hide");
      $(".info-search").classList.remove("show-Results");
      $$(".zing-navbar-item-mb")[this.isMenu].classList.add("action-song");
    } else if (this.isMenu == 3) {
      individual.classList.add("hide");
      discover.classList.add("hide");
      navbarItem[this.isMenu].classList.add("action-song");
      zingchart.classList.add("hide");
      zingPlayList.classList.add("hide");
      RadioCtn.classList.remove("hide");
      $(".info-search").classList.remove("show-Results");
      $$(".zing-navbar-item-mb")[this.isMenu].classList.add("action-song");
    } else {
      alert("Cái này chưa có :v");
    }
  },
  startPrivate: function () {
    this.randerSinger();
    this.randerslide();
    this.autoChangeImg();
    this.handelEvent();
    this.handelPlayListSong();
  },
  // ================ Khám phá ====================
 
  //    ===================
  loadConfig: function () {
    isShuffle = this.config.isShuffle;
    isRepeat = this.config.isRepeat;
    iconShuffle.classList.toggle("action-controls", isShuffle);
    iconRepeat.classList.toggle("action-controls", isRepeat);
    iconShuffle_mb.classList.toggle("action-controls", isShuffle);
    iconRepeat_mb.classList.toggle("action-controls", isRepeat);
  },

  start: function () {
    this.loadConfig();
    this.loadSong();
    this.loadCurrentSong();
    this.loadPlayListSongs();
    this.handleMusic();
    this.handleTheme();
    // --------- cá nhân -----------
    this.startPrivate();
    //---------- khám phá ----------
    this.startDiscoverCtn();
    //---------- zingChart ---------
    this.startZingchart();
    // --------- radio -------------
    this.startRadio();
    this.handleSeacrh();
  },
};
app.start();
