$(document).ready(function(){

    $('#first-button').on('click', function () {
        $('#first-button .bg-text').animate({
            'width': '185px'
        }, 5000, okButton)
    });
    function okButton() {
        $('#first-button .bg-text').css('width', '0');
        $('#first-button .text').animate({
            'top': '-45px'
            }, 1000)
            .animate({
                'top': '-45px'
            }, 2000)
            .animate({
                'top': '0'
            }, 1000);

    }


    $('#second-button').on('click', function () {
        $({deg: 0}).animate({deg: 45}, {
            step: function (now, fy) {
                $("#second-button").css({
                    transform: "rotateX(" + now + "deg)"
                });
            }
        });

        setTimeout(bgTextRotate, 1000);

        function bgTextRotate(){
            $('.bg-text-rotate').animate({
                'width': '185px'
            }, 1000, OkButtonAfter)
        }

        function OkButtonAfter() {
            $('#second-button .text_arrow').css('display', 'block');
            $({deg: 45}).animate({deg: 0}, {
                step: function (now, fy) {
                    $("#second-button").css({
                        transform: "rotateX(" + now + "deg)"
                    });
                }}
            );
            setTimeout(OkButtonNone, 1000);
        }

        function OkButtonNone(){
            $('#second-button .text_arrow').css('display', 'none')}
        });


});