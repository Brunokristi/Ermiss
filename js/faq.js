$(document).ready(function () {

    $('.faq_question').click(function () {

        if ($(this).parent().is('.open')) {
            $(this).closest('.faq').find('.faq_answer_container').slideUp();
            $(this).closest('.faq').removeClass('open');
            $(this).find('.fas').removeClass('fa-arrow-up').addClass('fa-arrow-down');

        } else {
            $('.faq_answer_container').slideUp();
            $('.faq').removeClass('open');
            $(this).closest('.faq').find('.faq_answer_container').slideDown();
            $(this).closest('.faq').addClass('open');
            $('.fas').removeClass('fa-arrow-up').addClass('fa-arrow-down');
            $(this).find('.fas').removeClass('fa-arrow-down').addClass('fa-arrow-up');

        }

    });
});