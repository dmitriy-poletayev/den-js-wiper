$(document).ready(function() {
    var myArray = [];
    var myArray = $('.block')

    function getRandomInt(min, max) {
        Math.floor( Math.random( ) * (myArray.length - 0 + 1) )
    }
    var elNumber = parseInt(getRandomInt(1, myArray.length));
    alert(elNumber)
})
