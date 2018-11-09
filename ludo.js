var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}



//Prints dice roll to the page

function printNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function () {
  var result = dice.roll();
  printNumber(result);
};



let general = document.querySelectorAll(".general")
// let general = Array.from(general1)

console.log(general);



Array.from(general)
console.log(typeof(general))


//})
let arr = [];
let lent
for (let i = 0; i < general.length; i++) {
  general[i].addEventListener('click', func)
  function func() {
    general[i].className = "green";
    // console.log(  general[i]);
    arr.push(general[i]);
    // let secondLent = lent-
    console.log(general[i])
    lent = arr.length
    general[lent].style.backgroundColor = 'pink'
    // console.log(general[lent-2])
    // console.log(typeof (arr))
    
    console.log(`the length of my array is ${lent}`)
  }
}
console.log(arr)







// var div = document.getElementsByClassName( 'general' );
// div.onclick = function() {
//   this.style.backgroundColor = 'purple';
//   var h2s = this.getElementsByTagName( 'div' );
//   h2s[0].style.backgroundColor = 'blue';
// };
// div.onmouseout = function() {
//   this.style.backgroundColor = 'orange';
//   var h2s = this.getElementsByTagName( 'div' );
//   h2s[0].style.backgroundColor = 'div';
// };



