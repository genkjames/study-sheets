$(document).ready(function() {
  init();

  function init() {
    signInButtons();
    cancelForm();
    answerToggle();
  }

  function setUpAction(submitValue, formAction) {
    const $submit = $('#submit');
    const $signInForm = $('#signin_form');
    $submit.val(submitValue);
    $signInForm.attr("action", formAction);
  }

  function signInButtons() {
    const $signInButtons = $('.logins button');
    $signInButtons.on('click', function() {
      if($(this).data('signval') === 'sign_up') {
        setUpAction('Sign Up', '/tutorial');
      } else {
        setUpAction('Sign In', '/workspace');
      }
      $('.signup_in_container').css('display', 'block');
    });
  }

  function cancelForm() {
    const $cancel = $('#cancel');
      $cancel.on('click', (e) => {
      e.preventDefault();
      $('.signup_in_container').css('display', 'none');
    });
  }

  function answerToggle() {
    const $answer = $('.answer');
    const $ans = $('.a-container');
    const $ques = $('.q-container');
    $answer.on('click', function() {
      $ans.toggleClass('hide');
      $ques.toggleClass('hide');
    })
  }
});
