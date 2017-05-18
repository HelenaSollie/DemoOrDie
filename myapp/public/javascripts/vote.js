primus = Primus.connect("", {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
        , min: 500 // Number: The minimum delay before we try reconnect.
        , retries: 10 // Number: How many times we should try to reconnect.
    }
});


document.querySelector('#demo').addEventListener("click", function (e) {
    primus.write({ message: 'demo-plus' });
    console.log('btn demo clicked');
    e.preventDefault;
});

document.querySelector('#die').addEventListener("click", function (e) {
    primus.write({ message: 'die-plus' });
    console.log('btn die clicked');
    e.preventDefault;
});

var demoinnerpoints = 50;
var dieinnerpoints = 50;

primus.on("data", function (data) {
    console.log("PRIMUS CLIENT DATA RECEIVED!" + data);
    if(data.message != undefined) {
        if(data.message == 'demo-plus') {
            demoinnerpoints = demoinnerpoints + 1;
            document.querySelector("#votingDemo").innerHTML = demoinnerpoints + " " + "%";

            dieinnerpoints = dieinnerpoints - 1;
            document.querySelector("#votingDie").innerHTML = dieinnerpoints + " " + "%";
        } else {

            dieinnerpoints = dieinnerpoints + 1;
            document.querySelector("#votingDie").innerHTML = dieinnerpoints + " " + "%";

            demoinnerpoints = demoinnerpoints - 1;
            document.querySelector("#votingDemo").innerHTML = demoinnerpoints + " " + "%";
        }
    }
});



