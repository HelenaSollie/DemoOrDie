document.getElementById('btn-check').addEventListener('click', function(e){
    var code = document.getElementById('check-input');
    code = code.value;
    if (code == "soren"){
        window.location.href = "http://localhost:3000//adminProfile";
    }else{
        window.location.href = "http://localhost:3000//adminView";
    }
    e.preventDefault();
});
