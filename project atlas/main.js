$(document).ready(function(){
    // creepy stuff that just works
    $(".atom").hide()
    window.scrollTo(0,0)
    $(".cover").on("click",function(){
        // $(this).addClass("animate__animated animate__fadeOutUp")
        // some more promise thingy that I don't know anything about
        const after = new Promise((r,rj) => {
         $(".veil").slideUp(1000)
        r()
        })
        // ??????
        after.then(() => {
            $("body").attr("style", "overflow-y: visible")
        })
    })
    window.onbeforeunload = () => {
        $("body").attr("style", "overflow:hidden")
    window.scrollTo(0,0)
    // return false
    }


    $(".home-page-button").on()
      $(".home-page-button").on('keydown', function (event) {
        if (event.key == "Escape") {
          takeUserBack();
        }
       });
   

    function displayHomePage() {
      $(".home-page").fadeIn(1000)
      $("body").css({
        overflow: "hidden"
      })

    }
    function takeUserBack() {
      $(".home-page").fadeOut(1000)
      $("body").css({
        overflow: "auto"
      })
    }
})