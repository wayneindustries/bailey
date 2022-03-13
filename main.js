$(document).ready(function () {
    init();
    console.log("Nice try. You won't find anything here.");
});

var click = 0;

function init() {
    var time = new Date();
    hour = time.getHours();
    minute = time.getMinutes();
    second = time.getSeconds();
    var str = `[${hour}:${minute}:${second}]`;
    $('.time').html(str);
    $(window).on('click keypress tap touchstart', function () {
        click++;
        if (click == 1) {
            $('.t1').addClass('active');
            speak('Hello Bailey');
            setTimeout(function () {
                $('.p2').show();
                $('.t2').addClass('ready');
            }, 5000);
        }
        if (click > 1 && $('.t2').hasClass('ready')) {
            $('.t2').addClass('active');
            speak('drink your milk');
            setTimeout(function () {
                window.location = "https://youtu.be/XqZsoesa55w?t=27";
            }, 5000);
        }
    });
}

function speak(str) {
    var msg = new SpeechSynthesisUtterance(str);
    msg.rate = 1;
    msg.pitch = 3;
    msg.voice = msg.getVoices()[4];
    window.speechSynthesis.speak(msg);
}