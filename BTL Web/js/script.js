new WOW().init();
$(document).ready(function () {
  $(".my-slide").slick({
    centerMode: true,
    arrows: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 400) {
      $("#top-link").css("display", "flex");
    } else {
      $("#top-link").css("display", "none");
    }

    if (position >= 160) {
      $("#header").addClass("sticky");
    }
    if (position <= 50) {
      $("#header").removeClass("sticky");
    }
  });

  // event modal img
  let index = 0;
  const list = [
    {
      img: "./images/geo-1.jpg",
    },
    {
      img: "./images/geo-2.jpg",
    },
    {
      img: "./images/geo-3.jpg",
    },
    {
      img: "./images/geo-4.jpg",
    },
    {
      img: "./images/geo-5.jpg",
    },
    {
      img: "./images/geo-6.jpg",
    },
  ];

  const modal = $("#popup-image");
  const img = $("#geo-image");
  const next = $("#next");
  const prev = $("#prev");
  const modalImg = $("#cur-image");
  const captionText = $("#caption");

  img.on("click", function () {
    index = 0;
    modal.css("display", "block");
    modalImg.attr("src", list[index].img);
    captionText.html(`${index + 1} of ${list.length}`);
  });

  const span = $(".close");
  span.on("click", function () {
    modal.css("display", "none");
  });

  next.on("click", function () {
    index += 1;
    if (index >= list.length) index = 0;
    modalImg.attr("src", list[index].img);
    captionText.html(`${index + 1} of ${list.length}`);
  });

  prev.on("click", function () {
    index -= 1;
    if (index <= 0) index = list.length;
    modalImg.attr("src", list[index].img);
    captionText.html(`${index + 1} of ${list.length}`);
  });
});

$(document).ready(function(){
  $(window).scroll(function(){
      if($(this).scrollTop()){
          $('header').addClass('sticky')
          $(".gap").css("transition", "0.3s ease")
          $(".kk").css("width", "271px")
      }else{
          $('header').removeClass('sticky')
          $(".gap").css("transition", "0.3s ease")
          $(".kk").css("width", "219px")
      }
  })
})

$(document).ready(function(){
  $("#searchIcon").hover(function(){
      $("#searchPopup").show();
  }, function(){
      $("#searchPopup").hide();
  });
                                
      $("#searchPopup").hover(function(){
      $(this).show();
  }, function(){
      $(this).hide();
   });
});