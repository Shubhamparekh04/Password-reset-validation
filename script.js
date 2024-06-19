$(document).ready(function () {
    $("#resetPwdBtn").on("click", function () {
        if ($("#floatingInput").val() == "" || $("#floatingPassword").val() == "" || $("#floatingCnfPassword").val() == "") {
            alert(`Kindly fill the data`);
            location.reload();
        } else {
            if ($("#floatingPassword").val() == $("#floatingCnfPassword").val()) {
                alert(`Password reset successfully`);
                location.reload();
            } else {
                alert(` Both password should match`);
                location.reload();
            }
        }
    });
});






