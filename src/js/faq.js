// const plusMinus = $('.plus-minus-toggle');

// $(function() {
//   plusMinus.on('click', function() {
//   	$(this).toggleClass('collapsed');
//   });
// });

$('.faq-open').click( function () {
  const faq = $(this).parents('.faq');
  const faqAnswer = faq.find('.faq-answer');
  const plusMinus = faq.find('.plus-minus-toggle');
  console.log(plusMinus);
  
  faqAnswer.slideToggle(200);
  
  if (faq.hasClass('expanded')) {
    faq.removeClass('expanded');
    plusMinus.toggleClass('collapsed');
  }
  else {
    faq.addClass('expanded');
 		 plusMinus.toggleClass('collapsed');
  }
});