    /*MENU SCROLL FUNCIONALIDADES*/
    $(function () {
        $("#scrolldiseno").click(function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: $(".section_design").offset().top - 150
            }, 1000);
        });
    })
    $(function () {
        $("#scrollcontenidos").click(function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: $(".section_content").offset().top - 150
            }, 1000);
        });
    })
    $(function () {
        $("#scrollproductos").click(function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: $(".section_product").offset().top - 150
            }, 1000);
        });
    })
    $(function () {
        $("#scrollreportes").click(function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: $(".section_reports").offset().top - 150
            }, 1000);
        });
    })
    $(function () {
        $("#scrollcomerciales").click(function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: $(".section_commercial").offset().top - 150
            }, 1000);
        });
    })
    $(function () {
        $("#scrollconfiguracion").click(function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: $(".section_configuration").offset().top - 150
            }, 1000);
        });
    })
    $(function () {
        $("#scrollSeo").click(function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: $(".section_seo").offset().top - 150
            }, 1000);
        });
    })
    $(function () {
        $("#scrollcomercio").click(function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: $(".section_comerciointer").offset().top - 150
            }, 1000);
        });
    })
