$(document).ready(function(){
    // creepy stuff that just works
    window.scrollTo(0,0)
    $(".cover").on("click",function(){
        $(this).addClass("animate__animated animate__fadeOutUp")
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

})