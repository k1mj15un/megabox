$(document).ready(function(){
    (function handleTrailer(){
        //셀렉터 캐시
        var $selector = {
            body: $("body"),
            overlay: $("#blackout"),
            modal: $("#trailerModal"),
            showButton: $("#showTrailer"),
            hideButton: $("#hideTrailer"),
        };
        
        //플레이어
        var player = {
            obj: null, //플레이어 오브젝트
            query : {
                theme: "dark",
                color: "white",
                controls: 1,
                autoplay: 1,
                enablejsapi: 1,
                modestbranding: 0, //youtube 로고 감춤
                rel: 0, //관련 동영상 표시
                showinfo: 0, //제목, 업로더 감춤
                iv_load_policy: 3 //특수효과 감춤
            },
            visible: false
        };

        //보이기, 숨기기 버튼 활성화
        $selector.showButton.on("click", showPlayer);
        $selector.hideButton.on("click", hidePlayer);

        // youtube aip를 이용해 iframe 생성
        function setPlayer( id ){
            player.obj = new YT.Player('trailer', {
                height: 480,
                width: 282,
                videoId: id,
                playerVars: player.query
            });
        };


        //iframe 보이기
        function showPlayer(){};
        //iframe 숨기기
        function hidePlayer(){};

    });
});