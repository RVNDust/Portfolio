$(function() {
  projectClick();
  skillLoading();
});




function projectClick(){
  $('.box').on('click', function() {
    if(!$(this).hasClass('is-open-project') || !$(this).siblings().hasClass('is-open-project')) {
      $(this).addClass('is-open-project').siblings().removeClass('is-open-project');
      $(this).siblings().addClass('isnot-open-project');
      $('.box-empty').addClass('not-displayable');
      $('.close-project').addClass('displayable');
    }
  });
}

function projectClose(){
  $('.is-open-project').removeClass('is-open-project');
  $('.isnot-open-project').removeClass('isnot-open-project');
  $('.box-empty').removeClass('not-displayable');
  $('.close-project').removeClass('displayable');
}

function navigationClick(sectionId){
  //In case of an open project
  projectClose();

  $('.global-section').removeClass('is-active-page');
  $('#'+sectionId).addClass('is-active-page');
  if($('.mobile-nav').hasClass('is-open')) {
    toggleNavigation();
  }

  //Start skills filling
  $(document).ready(function() {
    if(sectionId == 'skills') {
      $('.gauge-fill').each(function(i){
        $(this).addClass('filled');
      });
    }
  });
}

function toggleNavigation() {
  if($('.mobile-nav').hasClass('is-open')) {
    $('.mobile-nav').removeClass('is-open');
    $('.mobile-nav-toggle').removeClass('is-open');
  }
  else {
    $('.mobile-nav').addClass('is-open');
    $('.mobile-nav-toggle').addClass('is-open');
  }
}

function skillLoading() {
  var colorRedArray = randomColor({
    count: 20,
    hue: 'red',
    luminosity: 'dark'
  });
  var colorBlueArray = randomColor({
    count: 20,
    hue: 'blue',
    luminosity: 'dark'
  });

  $('.gauge-fill').each(function(i){
    var ranWidth = Math.floor(Math.random() * 100);
    $(this).width($(this).text() + "%");
    $(this).css('background', colorRedArray[i] );
    $(this).text('');
  });
}


/*** Vertical Timeline Script ***/
$(window).on('scroll', function(){
	$('.cd-timeline_block').each(function(){
		if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		}
	});
});
