var state = document.getElementById('#btnAdminPw');
if(state) {
    addEventListener('click', function () {
        var code = document.getElementById('#check-input');
        code = code.value;

        if (code == "soren") {

            res.redirect('/adminConsole');
        }
    });
}
