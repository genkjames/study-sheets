$(document).ready(function() {
  init();

  function init() {
    answerToggle();
    nxtBtn();
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
    $nxt.on('click', function() {
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
});
