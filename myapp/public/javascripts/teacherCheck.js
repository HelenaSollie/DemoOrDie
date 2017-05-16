document.getElementById('btn-check').addEventListener('click', function(e){
    var code = document.getElementById('check-input');
    code = code.value
    if (code == "soren"){
        alert("mooi");
    }else{
        alert("fout");
    }
    e.preventDefault();
});
