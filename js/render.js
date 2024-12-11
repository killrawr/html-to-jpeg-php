var i = 0;

$(document).ready(function() {

    $('.' + content_class_name).each(function() {

        var contentItem = $(this);
        var contentEle = contentItem.get(0);
        var formItem = $('#' + form_id);

        var canvasOnRender = function(canvas) {
            var rendered_html = canvas.toDataURL("image/png");
            rendered_html = String(rendered_html).trim();

            // Set hidden field's value to image data (base-64 string)
            formItem.append('<input type="hidden" rel="' + i + '" name="' + hidden_image_names + '[]" value="' + rendered_html + '"/>');
            formItem.append('<img src="' + rendered_html + '" />');
            // Increment i
            i++;
        };

        var canvasOptions = {};
        html2canvas(contentEle, canvasOptions).then(canvasOnRender);

    });

    var timer = setInterval(function() {
        var contentClassLen = $('.' + content_class_name).length;
        if (i == contentClassLen) {
            $('.se-pre-con').hide();
            $('.' + content_class_name).hide();
            clearInterval(timer);
        }
    }, 1000);

});