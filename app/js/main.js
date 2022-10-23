$(function () {



  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });



  $(".star").rateYo({
    starWidth: "20px",
    normalFill: "#FFFFFF",
    ratedFill: "#FFCA42",
    readOnly: true,
    spacing: "5px",
    starSvg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 19.5C15.2467 19.5 19.5 15.2467 19.5 10C19.5 4.75329 15.2467 0.5 10 0.5C4.75329 0.5 0.5 4.75329 0.5 10C0.5 15.2467 4.75329 19.5 10 19.5Z" stroke="#FFCA42"/></svg>'
  });

  $(".star-min").rateYo({
    starWidth: "13px",
    normalFill: "#1B3764",
    ratedFill: "#FFCA42",
    readOnly: true,
    spacing: "3px",
    starSvg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 19.5C15.2467 19.5 19.5 15.2467 19.5 10C19.5 4.75329 15.2467 0.5 10 0.5C4.75329 0.5 0.5 4.75329 0.5 10C0.5 15.2467 4.75329 19.5 10 19.5Z" stroke="#FFCA42"/></svg>'
  });

});