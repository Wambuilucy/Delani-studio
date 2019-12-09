$(document).ready(function(){

  $(".design").click(function() {
    $(".design p").toggle();
    $(".design img").toggle();
  });

  $(".development").click(function() {
    $(".development p").toggle();
    $(".development img").toggle();
  });

  $(".proj").click(function() {
    $(".proj p").toggle();
    $(".proj img").toggle();
  });

    $(".text-0").hide();
    $(".text-1").hide();
    $(".text-2").hide();
    $(".text-3").hide();
    $(".text-4").hide();
    $(".text-5").hide();
    $(".text-6").hide();
    $(".text-7").hide();
  
    $("#image-0").animate({ opacity: 1 });
    $("#image-0").hover(
      () => {
        $(this)
          .stop()
          .animate({ opacity: 0.4 }, 200);
        $(".text-0").fadeIn();
      },
      function() {
        $(this)
          .stop()
          .animate({ opacity: 1 }, 500);
        $(".text-0").fadeOut();
      }
    );
  
    $("#image-1").animate({ opacity: 1 });
    $("#image-1").hover(
      () => {
        $(this)
          .stop()
          .animate({ opacity: 0.4 }, 200);
        $(".text-1").fadeIn();
      },
      function() {
        $(this)
          .stop()
          .animate({ opacity: 1 }, 500);
        $(".text-1").fadeOut();
      }
    );
  
    $("#image-2").animate({ opacity: 1 });
    $("#image-2").hover(
      () => {
        $(this)
          .stop()
          .animate({ opacity: 0.4 }, 200);
        $(".text-2").fadeIn();
      },
      function() {
        $(this)
          .stop()
          .animate({ opacity: 1 }, 500);
        $(".text-2").fadeOut();
      }
    );
  
    $("#image-3").animate({ opacity: 1 });
    $("#image-3").hover(
      () => {
        $(this)
          .stop()
          .animate({ opacity: 0.4 }, 200);
        $(".text-3").fadeIn();
      },
      function() {
        $(this)
          .stop()
          .animate({ opacity: 1 }, 500);
        $(".text-3").fadeOut();
      }
    );
  
    $("#image-4").animate({ opacity: 1 });
    $("#image-4").hover(
      () => {
        $(this)
          .stop()
          .animate({ opacity: 0.4 }, 200);
        $(".text-4").fadeIn();
      },
      function() {
        $(this)
          .stop()
          .animate({ opacity: 1 }, 500);
        $(".text-4").fadeOut();
      }
    );
  
    $("#image-5").animate({ opacity: 1 });
    $("#image-5").hover(
      () => {
        $(this)
          .stop()
          .animate({ opacity: 0.4 }, 200);
        $(".text-5").fadeIn();
      },
      function() {
        $(this)
          .stop()
          .animate({ opacity: 1 }, 500);
        $(".text-5").fadeOut();
      }
    );
  
    $("#image-6").animate({ opacity: 1 });
    $("#image-6").hover(
      () => {
        $(this)
          .stop()
          .animate({ opacity: 0.4 }, 200);
        $(".text-6").fadeIn();
      },
      function() {
        $(this)
          .stop()
          .animate({ opacity: 1 }, 500);
        $(".text-6").fadeOut();
      }
    );
  
    $("#image-7").animate({ opacity: 1 });
    $("#image-7").hover(
      () => {
        $(this)
          .stop()
          .animate({ opacity: 0.4 }, 200);
        $(".text-7").fadeIn();
      },
      function() {
        $(this)
          .stop()
          .animate({ opacity: 1 }, 500);
        $(".text-7").fadeOut();
      }
    );
  
    $("#mc-embedded-subscribe-form").submit(() => {
      var name = document.forms["mc-embedded-subscribe-form"]["FNAME"].value;
      alert(
        `${name} we have received your message. Thank you for reaching out to us.`
      );
    });
  });
  