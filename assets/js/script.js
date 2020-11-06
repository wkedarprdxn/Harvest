/* Author: 
 */
$(document).ready(function() {
    $('.menu-icon').click(function() {
        if ($('#navigator').css("left") == "-250px") {
            $('#navigator').animate({ left: '0px' }, 350);
            $('.menu-icon').animate({ left: '250px' }, 350);
            $('.menu-text').animate({ left: '300px' }, 350).empty().text("Close");
        } else {
            $('#navigator').animate({ left: '-250px' }, 350);
            $(this).animate({ left: '0px' }, 350);
            $('.menu-text').animate({ left: '50px' }, 350).empty().text("Menu");

        }
    });
    $('.menu-icon').click(function() {
        $(this).toggleClass("on");
    });
    $(".img").click(function() {
        console.log('clicked');
        $src = $(this).attr("src");
        if (!$("#light-box").length > 0) {
            $("body").append("<div id='light-box'><span class='material-icons'>close</span><img src=''></div>");
            $("#light-box").show();
            $("#light-box img").attr("src", $src);
        } else {
            $("#light-box").show();
            $("#light-box img").attr("src", $src);
        }
    });
    $("body").on("click", "#light-box span", function() {
        $("#light-box").hide();
    });
    // *******************our work start*****************
    $('.filter-btn').click(function() {
        $('.filter-btn').removeClass('active').addClass('inactive');
        $(this).removeClass('inactive').addClass('active');
        var val = $(this).attr('data-filter');
        if (val == "all") {
            $('.filter').show('1000');
        } else {
            $('.filter').not('.' + val).hide(1000);
            $('.filter').filter('.' + val).show(1000);
        }
    });
    // *******************our work end*****************
    // *********************join us start**********************
    $('.category select').change(function() {
        var item = $(this).attr('value');
        if (item == "all") {
            $('.ft-item').show('1000');
        } else {
            $('.ft-item').not('.' + item).hide(1000);
            $('.ft-item').filter('.' + item).show(1000);
        }
    });
    // *********************join us end**********************
});