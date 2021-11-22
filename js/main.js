$(document).ready(function(){

    //inputmask
    $("input[type='tel']") .inputmask({"mask": "+7(999)999-99-99"});


    //проверка телефона
    $("form[name='order']") .on("submit", function() {
        var phone = $("input[type='tel']").val();
        var regex = /\+7\(\d{3}\)\d{3}\-\d{2}\-\d{2}/;
        if (phone.search(regex) == -1) {
            alert("Укажите правильный номер телефона!");
            return false;
        }
        return true;
    });
    
    $('.burger').click(function() {
    $(".overlay").addClass("overlay_active");
    $(".mobile-menu").addClass("mobile-menu_active");
    });
    
    $('.burger-second').click(function() {
    $(".overlay").addClass("overlay_active");
    $(".mobile-menu").addClass("mobile-menu_active");
    });


     $('.overlay').click(function() {
     $(".overlay").removeClass("overlay_active");
     $(".mobile-menu").removeClass("mobile-menu_active");
     $(".order").removeClass("order_active");
    });

 $('.mobile-menu__ref').click(function() {
 $(".overlay").removeClass("overlay_active");
 $(".mobile-menu").removeClass("mobile-menu_active");
    });
    
    $(".menu__ref").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html, body').animate({ scrollTop: destination }, 1000);
    return false;
    });
   
    $('.slider').slick({
      infinite: true,
      dots: true,
      arrows: false,
      autoplay: false,
      centerMode: true,
      centerPadding: '0px',
      focusOnSelect: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      
      responsive: [
        {
            breakpoint: 1080,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 560,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
 
});