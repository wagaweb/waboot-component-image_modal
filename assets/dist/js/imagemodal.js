jQuery(document).ready(function ($) {
    "use strict";
    var elements = "";
    var cboxProps = {
        maxWidth: "90%",
        maxHeight: "90%",
        close: "",
        previous: "",
        next: "",
        current: wabootCbox.current
    };
    if (wabootCbox.elements !== false) {
        switch (wabootCbox.elements) {
            case "custom":
                //Do nothing :)
                break;
            case "galleries":
                elements = ".gallery-item a";
                cboxProps.rel = "gallery";
                $("" + elements + "").colorbox(cboxProps);
                break;
            case "all-images":
                //Add colorbox to all link that target an image
                $("a").each(function () {
                    var my_href = $(this).attr("href");
                    if (/\.(?:jpg|jpeg|gif|png)/i.test(my_href)) {
                        $(this).colorbox(cboxProps);
                    } else {
                        var my_img = $(this).find("img");
                        if (my_img.lenght > 0 && my_img.hasClass("img-colorbox")) { //Add colorbox to all images with class img-colorbox
                            $(this).colorbox(cboxProps);
                        }
                    }
                });
                //Add colorbox to all link that has class img-colorbox
                elements = "a.img-colorbox";
                cboxProps.rel = "cboximg";
                $("" + elements + "").colorbox(cboxProps);
                //Add colorbox to galleries
                elements = ".gallery-item a";
                cboxProps.rel = "gallery";
                $("" + elements + "").colorbox(cboxProps);
                break;
            default:
                //Add colorbox to images
                elements = "a.img-colorbox";
                cboxProps.rel = "cboximg";
                $("" + elements + "").colorbox(cboxProps);
                //Add colorbox to galleries
                elements = ".gallery-item a";
                cboxProps.rel = "gallery";
                $("" + elements + "").colorbox(cboxProps);
                break;
        }
    }
    if (wabootCbox.custom_elements !== false && wabootCbox.custom_elements !== "") {
        elements = wabootCbox.custom_elements;
        cboxProps.rel = "cboximg";
        $("" + elements + "").colorbox(cboxProps);
    }
    if (typeof wabootCbox.icons !== 'undefined') {
        switch (wabootCbox.icons) {
            case "none":
                $('a.cboxElement').colorbox({
                    close: '<svg enable-background="new 152.1 24 336 336" version="1.1" viewBox="152.1 24 336 336" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m155.5 356.5c4.7 4.7 12.3 4.7 17 0l147.5-147.5 147.5 147.5c4.7 4.7 12.3 4.7 17 0s4.7-12.3 0-17l-147.5-147.5 147.5-147.5c4.7-4.7 4.7-12.3 0-17s-12.3-4.7-17 0l-147.5 147.5-147.5-147.5c-5-4.3-12.6-3.7-16.9 1.3-3.8 4.5-3.8 11.1 0 15.6l147.4 147.6-147.5 147.5c-4.6 4.7-4.6 12.3 0 17z"/></svg>',
                    previous: '<svg enable-background="new 0 0 50 94.1" version="1.1" viewBox="0 0 50 94.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M49.1,93.1c1.2-1.3,1.3-3.3,0-4.5c-1.4-1.5-2.9-2.9-4.4-4.4c-3.5-3.5-6.9-7-10.4-10.4c-4.2-4.2-8.4-8.5-12.6-12.7c-3.6-3.6-7.3-7.3-10.9-10.9c-1-1-2.1-2.1-3.1-3.2c0.7-0.7,1.4-1.4,2.1-2.1c3.5-3.5,6.9-7,10.4-10.4c4.2-4.2,8.4-8.5,12.6-12.7c3.6-3.6,7.3-7.3,10.9-10.9c1.8-1.8,3.6-3.5,5.3-5.3c0,0,0,0,0.1-0.1c1.2-1.2,1.3-3.4,0-4.5c-1.3-1.2-3.2-1.3-4.5,0c-1.4,1.5-2.9,2.9-4.4,4.4c-3.5,3.5-6.9,7-10.4,10.4c-4.2,4.2-8.4,8.5-12.6,12.7c-3.6,3.6-7.3,7.3-10.9,10.9c-1.8,1.8-3.6,3.5-5.3,5.3c0,0,0,0-0.1,0.1c-1.2,1.2-1.2,3.3,0,4.5c1.4,1.5,2.9,2.9,4.4,4.4c3.5,3.5,6.9,7,10.4,10.4c4.2,4.2,8.4,8.5,12.6,12.7c3.6,3.6,7.3,7.3,10.9,10.9c1.8,1.8,3.5,3.6,5.3,5.3c0,0,0,0,0.1,0.1C45.8,94.3,47.9,94.4,49.1,93.1z"/></svg>',
                    next: '<svg enable-background="new 0 0 50 94.1" version="1.1" viewBox="0 0 50 94.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m0.938 1c-1.2 1.3-1.3 3.3 0 4.5 1.4 1.5 2.9 2.9 4.4 4.4 3.5 3.5 6.9 7 10.4 10.4 4.2 4.2 8.4 8.5 12.6 12.7l10.9 10.9c1 1 2.1 2.1 3.1 3.2l-2.1 2.1c-3.5 3.5-6.9 7-10.4 10.4-4.2 4.2-8.4 8.5-12.6 12.7l-10.9 10.9c-1.8 1.8-3.6 3.5-5.3 5.3l-0.1 0.1c-1.2 1.2-1.3 3.4 0 4.5 1.3 1.2 3.2 1.3 4.5 0 1.4-1.5 2.9-2.9 4.4-4.4 3.5-3.5 6.9-7 10.4-10.4 4.2-4.2 8.4-8.5 12.6-12.7l10.9-10.9c1.8-1.8 3.6-3.5 5.3-5.3l0.1-0.1c1.2-1.2 1.2-3.3 0-4.5-1.4-1.5-2.9-2.9-4.4-4.4-3.5-3.5-6.9-7-10.4-10.4-4.2-4.2-8.4-8.5-12.6-12.7l-10.9-10.9c-1.8-1.8-3.5-3.6-5.3-5.3l-0.1-0.1c-1.2-1.2-3.3-1.3-4.5 0z"/></svg>',
                });
                break;
            case "fontawesome4":
                $('a.cboxElement').colorbox({
                    onOpen: function () {
                        $('#colorbox').addClass('colorbox-icons-fontawesome4');
                    }
                });
                break;
            case "fontawesome5":
                $('a.cboxElement').colorbox({
                    onOpen: function () {
                        $('#colorbox').addClass('colorbox-icons-fontawesome5');
                    }
                });
                break;
        }
    }
});