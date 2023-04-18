$(window).scroll(function () {
    let oTop = $('.section-2').offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
        $('navbar').removeClass('sticky');
    } else {
        $('navbar').removeClass('sticky');
    }
})

let nCount = selector => {
    $(seletor).each(function () {
        $(this).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: "swing",

            step: funtion (value) {
                $(this).text(Math.ceil(value))
            }
        })
    })
}

let position = 0;
$(window).scroll(funtion() {
    let oTop = $('.numbers').offset().top - window.innerHeight
    if(position == 0 && $(window).scrollTop() >= oTop {
        position++;
        nCount(".rect > h1");
    })
})