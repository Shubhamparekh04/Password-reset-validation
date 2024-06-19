$(document).ready(function () {
    // $("#resetPwdBtn").on("click", function () {
    //     if ($("#floatingPassword").val() == $("#floatingCnfPassword").val()) {

    //         if ($("#floatingPassword").val() != "" || $("#floatingCnfPassword").val() != "") {
    //             alert(`Kindly fill the data`);
    //             location.reload();
    //         } else {
    //             alert(`Password reset success fully`);
    //             location.reload();
    //         }
    //     } else {
    //         alert(` Both password should match`);
    //         location.reload();
    //     }
    // });
});



$("#resetPwdBtn").on("click", function () {
    if ($("#floatingPassword").val() == "" && $("#floatingCnfPassword").val() == "") {
        alert(`Kindly fill the data`);
        location.reload();
    } else {
        if ($("#floatingPassword").val() == $("#floatingCnfPassword").val()) {
            alert(`Password reset success fully`);
            location.reload();
        } else {
            alert(` Both password should match`);
            location.reload();
        }
    }
});





