jQuery(document).ready(function () {
    "use strict";
 
    $(".text").typed({
        strings: ["<strong> I Love you </strong><strong class='primary'> Baby. </strong>", 
            "<strong> mwuahh</strong><strong class='primary'> mwuahhh!!.</strong>"],
        typeSpeed: 50,
        loop: true
    });

    $(".slider").ripples({
        dropRadius: 11,
        perturbance: 0.01,
    });
});
