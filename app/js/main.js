$(function () {
  $(".star").rateYo({
    starWidth: "20px",
    /* ширина звезды */
    normalFill: "#FFFFFF",
    /* цвет не закрашенной звезды */
    ratedFill: "#FFCA42",
    /* цвет закрашенной звезды */
    readOnly: true,
    /* нельзя изменить рейтинг */
     spacing: "5px",
    starSvg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 19.5C15.2467 19.5 19.5 15.2467 19.5 10C19.5 4.75329 15.2467 0.5 10 0.5C4.75329 0.5 0.5 4.75329 0.5 10C0.5 15.2467 4.75329 19.5 10 19.5Z" stroke="#FFCA42"/></svg>'
  });

    $(".star-min").rateYo({
    starWidth: "13px",
    /* ширина звезды */
    normalFill: "#1B3764",
    /* цвет не закрашенной звезды */
    ratedFill: "#FFCA42",
    /* цвет закрашенной звезды */
    readOnly: true,
    /* нельзя изменить рейтинг */
     spacing: "3px",
    starSvg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 19.5C15.2467 19.5 19.5 15.2467 19.5 10C19.5 4.75329 15.2467 0.5 10 0.5C4.75329 0.5 0.5 4.75329 0.5 10C0.5 15.2467 4.75329 19.5 10 19.5Z" stroke="#FFCA42"/></svg>'
  });

});