// Create a clone of the menu, right next to original.
$('.menu').addClass('original').clone().insertAfter('.menu').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);
rollIntervalID = setTimeout(stickIt, 10);

function stickIt()
{

  var orgElementPos = $("#faq").offset();
  orgElementTop = orgElementPos.top;
  if ($(window).scrollTop() >= (orgElementTop))
  {
    // scrolled past the original position; now only show the cloned, sticky element.
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;
    widthOrgElement = '55%';

    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');

    $("#qa").css('top', '40px');
    $("#numbers").css('top', '40px');
  }
  else
  {

    $("#qa").css('top', '0px');
    $("#numbers").css('top', '0px');

    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    //$('.original').css('visibility','visible');
  }
}
