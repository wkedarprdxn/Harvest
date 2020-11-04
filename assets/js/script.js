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
});