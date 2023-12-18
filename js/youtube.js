// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // 아래 "player"는 <div id="player"></div>를 뜻함
  new YT.Player("player", {
    // 소스 코드 복사를 눌러서 넣으면 제어가 안되므로 주소 뒤에 있는 부분만 복사해서 씀
    // https://www.youtube.com/watch?v=An6LvWQuj_8 에서 ID 부분인 An6LvWQuj_8만 복사해서 사용
    videoId: "An6LvWQuj_8",
    playerVars: {
      autoplay: true, //자동 재생 유무
      loop: true, //반복 재생 유무
      playlist: "An6LvWQuj_8", // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) {
        event.target.mute(); //음소거
      },
    },
  });
}
