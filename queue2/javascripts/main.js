$(function() {
  $('#tmenu td').click(function(){
    $('#hello').fadeOut();
    var selectedClassStr = 'selected';
    var content_id = '#content_' + this.id;
    $('#tmenu').find('a').removeClass(selectedClassStr);
    $('#content_wrap').find('.content').removeClass(selectedClassStr);
    $(this).find('a').addClass(selectedClassStr);
    $(content_id).addClass(selectedClassStr);
    $('#content_wrap').find('.content').fadeOut(1000);
    $(content_id).fadeIn(1000);

    var ch = $(content_id).height() + 200;
    var sh = $('#square').height();
    var diff = ch - sh;
    var dist = '+=' + diff;
    console.log(diff);

    $("#square").animate({
      top:dist,
      height: ch
    }, 1000);

    $("#greeting").animate({
      top: dist
    }, 2000);
  });
});
