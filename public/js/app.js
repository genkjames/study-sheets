$(document).ready(function() {
  console.log('hi');
  init();

  function init() {
    answerToggle();
    nxtBtn();
    togglenavBar();
    showHiddenNav();
  }

  function toggleHide(arr) {
    for(let i = 0; i < arr.length; i++) {
      arr[i].toggleClass('hide');
    }
  }

  function answerToggle() {
    const $answer = $('.answer');
    const $ans = $('.a-container');
    const $ques = $('.q-container');
    $answer.on('click', function() {
      toggleHide([$ans, $ques]);
    })
  }

  function nxtBtn() {
    const $nxt = $('#nxt');
    $nxt.on('click', function(e) {
      e.preventDefault();
      if ($('#type').val() === '1') {
        $('.mc-container').toggleClass('hide');
      } else if ($('#type').val() === '2'){
        $('.answer-value').toggleClass('hide');
      } else {
        $('.trfl').toggleClass('hide');
      }
      $nxt.off('click');
      toggleHide([$('.part1'), $('.sbt'), $nxt]);
    });
  }

  function togglenavBar() {
    const $hamburger = $('.hamburger');
    const $nav = $('header nav');
    $hamburger.on('click', function(e) {
      if ($nav.css('display') === 'none') {
        $nav.css('display', 'block');
      } else {
        $nav.css('display', 'none');
      }
      showHiddenNav();
    })
  }

  function showHiddenNav() {
    const $nav = $('header nav');
    $(window).on('resize', function() {
      if($(this).width() >= 1166) {
        $nav.css('display', 'block');
      }
      else {
        $nav.css('display', 'none');
      }
    })
  }
});
