// music toggle

$(document).ready(() => {
  $(".toggle").click(function () {
    $(this).toggleClass("active");
  });

  $(".slide-body").click(function () {
    $(".slide-body .slide").toggleClass("active");
  });

  $(".on").click(function () {
    $("#audio-player")[0].play();
  });

  $(".off").click(function () {
    $("#audio-player")[0].pause();
  });
});

// hidden and show password

function togglePassword() {
  const btn = document.getElementById("btn");
  var password = document.getElementById("password");

  if (password.type === "password") {
    password.type = "text";
    btn.classList.remove("fa-eye-slash");
    btn.classList.add("fa-eye");
  } else {
    password.type = "password";
    btn.classList.remove("fa-eye");
    btn.classList.add("fa-eye-slash");
  }
}
