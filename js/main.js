$(document).ready(function () {
    $('li.nav-item').hover(function () {
        // over
        if (window.matchMedia("(min-width: 768px)").matches) {
            $('a.nav-link', this).append('<hr class="hover">');
            $('hr.hover').animate({ width: "90%" });
        }
    }, function () {
        // out
        $('hr.hover').remove();
    });

    $('.products__wrap__tabs').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.products__wrap').find('.products__wrap__tab').removeClass('active').eq($(this).index()).addClass('active');
    });
}
);

