$(document).ready(function() {
  init();

  function init() {
    signInButtons();
    cancelForm();
    answerToggle();
    nxtBtn();
  }

  function setUpAction(submitValue, formAction) {
    const $submit = $('#submit');
    const $signInForm = $('#signin-form');
    $submit.val(submitValue);
    $signInForm.attr("action", formAction);
  }

  function signInButtons() {
    const $signInButtons = $('.logins button');
    $signInButtons.on('click', function() {
      if($(this).data('signval') === 'sign-up') {
        setUpAction('Sign Up', '/tutorial');
      } else {
        setUpAction('Sign In', '/workspace');
      }
      $('.signup-in-container').css('display', 'block');
    });
  }

  function cancelForm() {
    const $cancel = $('#cancel');
      $cancel.on('click', (e) => {
      e.preventDefault();
      $('.signup-in-container').css('display', 'none');
    });
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
