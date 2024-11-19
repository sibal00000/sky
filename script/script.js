//첫번째 공지사항내용을(.open-modal) 클릭했을떄 , 모달창이 짠 등장


$(".open-modal").dblclick(function(){
    
    $(".modal").show();
})

//닫기 버튼을 클릭했을때, 모달창이 사라지게 만드세요
$(".close-modal").dblclick(function(){
   // $(".modal").css("display", "none")
    $(".modal").hide();

})

//갤러리 버튼을 클릭했을떄, 갤러리 영역이 짠 등장 , 공지사항 영역은 사라짐
$(".btn-gal").click(function(){
    $(".notice").hide();
    $(".gal").show();

    $(".btn-gal").css("background-color", "brown")
    $(".btn-notice").css("background-color", "#cccccc")



})




//공지사항 버튼을 클릭했을때, 공지사항 영역이 짠 등장 , 갤러리 영역은 사라짐
$(".btn-notice").click(function(){
    $(".notice").show();
    $(".gal").hide();
    $(".btn-gal").css("background-color", "#cccccc")
    $(".btn-notice").css("background-color", "brown")




})

