(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 300) {
    //         $('.back-to-top').fadeIn('slow');
    //     } else {
    //         $('.back-to-top').fadeOut('slow');
    //     }
    // });
    // $('.back-to-top').click(function () {
    //     $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    //     return false;
    // });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

    
})(jQuery);



// my js
// (function(){
//     emailjs.init('template_s5knp4u'); // Replace 'YOUR_USER_ID' with your actual EmailJS user ID
// })();

// function sendEmail(event) {
//     event.preventDefault(); // Prevent the default form submission
    
//     // Collect form data
//     var formData = {
//         your_name: document.getElementById('gname').value,
//         email: document.getElementById('gmail').value,
//         course_name: document.getElementById('cname').value,
//         mobile_number: document.getElementById('number').value,
//         message: document.getElementById('message').value
//     };
    
//     // Send email
//     emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
//     .then(function(response) {
//         console.log('SUCCESS!', response.status, response.text);
//         alert('Your appointment request has been sent successfully.');
//     }, function(error) {
//         console.log('FAILED...', error);
//         alert('There was an error sending your appointment request. Please try again.');
//     });
// }
