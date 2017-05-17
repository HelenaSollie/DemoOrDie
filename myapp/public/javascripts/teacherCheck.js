document.getElementById('btn-check').addEventListener('click', function(e){
    var code = document.getElementById('check-input');
    code = code.value;
    if (code == "soren"){
        window.location.href = "/adminProfile";
    }else{
        window.location.href = "/adminView";
    }
    e.preventDefault();
});
