
         $(window).on("load", function () {
           // Total animation time (last note delay 0.6s + 1.5s animation + 0.2s buffer)
           const totalDelay = 1450;
         
           setTimeout(() => {
             $(".loader-wrapper").fadeOut("slow");
           }, totalDelay);
         });

         $(document).ready(function() {
           function checkFadeIn() {
             $('.fade-in-section').each(function() {
               var elemTop = $(this).offset().top;
               var windowBottom = $(window).scrollTop() + $(window).height() * 0.9;
         
               if (elemTop < windowBottom) {
                 $(this).addClass('is-visible');
               }
             });
           }
         
           // Run on scroll and on load
           $(window).on('scroll', checkFadeIn);
           checkFadeIn();
         });

         