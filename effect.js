$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1').stop();
			$('#b11').animate({top:40, left: vw-150},500);
		});

	$('#turn_on').click(function(){
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').addClass('peach-after');
		$('#envelope').fadeOut('slow');
		$('.bannar').addClass('bannar-come');
		$('#b1').addClass('balloons-rotate-behaviour-one');
		$('').addClass('balloons-rotate-behaviour-two');
		loopOne();
		$(this).fadeOut('slow').delay(6000).promise().done();
	});
	function loopOne() {
		var randleft = 300*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},6000,function(){
			loopOne();
		});
	}
});

$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $('#reset');
    
    envelope.click(function() {
        open
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });
    
    function open() {
        envelope.addClass('open')
            .removeClass('close');
    }
    function close() {
        envelope.addClass('close')
            .removeClass('open');

    }
})