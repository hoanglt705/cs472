$(document).ready(function () {
    var state = true;
    $("#start").click(function () {
        var done = false;

        console.log("Click 'S' to begin");
        $(".boundary").removeClass('youlose');
        $("#status").text("Click the 'S' to begin");

        $(".boundary").mouseenter(function () {
            if(!done){
                lose();
                done = true;
            }
         });
        $("#maze").mouseleave(function () {
            if(!done){
                lose();
                done = true;
            }
        });

        $("#end").mouseenter(function () {
            if(!done) {
                $("#status").text("YOU WIN");
                done = true;
            }
        });
    })
    function lose() {
        $(".boundary").addClass('youlose');
        $("#status").text("YOU LOSE!!");
    }
})