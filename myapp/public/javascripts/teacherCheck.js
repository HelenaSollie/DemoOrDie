document.getElementById('btn-check').addEventListener('click', function(e){
    var code = document.getElementById('check-input');
    code = code.value;
    if (code == "soren"){
        location.href = "/adminProfile";
    }else{
        location.href = "/adminView";
    }
    e.preventDefault();
});
