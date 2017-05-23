
$(document).ready(function(){

function dettectMobileBowser() {
        // c использованием парсера bowser.min.js - легко можно управлять данными userAgent https://github.com/lancedikson/bowser
    if((bowser.mobile == true) || (bowser.tablet == true)){
        $('body').addClass('mobile');
        $('.tel_wrapp a').attr( 'href', 'tel:+380670000000') ;
    }
    else {
        $('body').addClass('desktop')
        $('.tel_wrapp a').on('click', function () {
            alert('Здесь будет окно для ввода телефона');
        })
    }
    console.log(navigator.userAgent);
}
// dettectMobileBowser();

    function dettectMobile() {
        var a= navigator.userAgent;
        // c определением вхождения слова Mobile
        if(a.indexOf('Mobile') != -1){
            $('body').addClass('mobile1');
            $('.tel_wrapp a').attr( 'href', 'tel:+380670000000') ;
        }
        else {
            $('body').addClass('desktop1')
            $('.tel_wrapp a').on('click', function () {
                alert('Здесь будет окно для ввода телефона');
            })
        }
        console.log(navigator.userAgent);
    }
    dettectMobile();

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
            }, 2000, OkButtonAfter)
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
            $('#second-button .text_arrow').css('display', 'none')};
            $('.bg-text-rotate').css('width', '0');
        });


    $('#third-button').on('click', function () {
        $({deg: 0}).animate({deg: 90}, {
            step: function (now, fy) {
                $("#third-button").css({
                    transform: "rotateX(" + now + "deg)",
                });
            }
        });

        setTimeout(bgTextRotateThird, 1000);

        function bgTextRotateThird(){
            $('#third-button .bg-text-rotate').animate({
                'width': '185px'
            }, 2000, OkButtonAfterThird)
        }

        function OkButtonAfterThird() {
            $('#third-button .text_arrow').css('display', 'block');
            $({deg: 90}).animate({deg: 0}, {
                step: function (now, fy) {
                    $("#third-button").css({
                        transform: "rotateX(" + now + "deg)"
                    });
                }}
            );
            setTimeout(OkButtonNoneThird, 1000);
        }

        function OkButtonNoneThird(){
            $('#third-button .text_arrow').css('display', 'none')};
        $('#third-button .bg-text-rotate').css('width', '0');
    });
});