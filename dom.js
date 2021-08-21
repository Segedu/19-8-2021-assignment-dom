// 1;
// var array = [];
// var input = document.getElementById("firstInput");
// var firstButton = document.getElementById("firstBtn");
// firstButton.addEventListener("click", function () {
//   input.value;
// });

//2;
// var secondInput = document.getElementById("secondInput");
// var thirdInput = document.getElementById("thirdInput");
// var secondButton = document.getElementById("secondBtn");
// var sum = 0;
// secondButton.addEventListener("click", function () {
//   sum = Number(secondInput.value) + Number(thirdInput.value);
//   console.log(sum);
// });
//3;
// var thirdButton = document.getElementById("thirdBtn");
// thirdButton.addEventListener("click", function () {
//   thirdButton.style.backgroundColor = "red";
// });

//4;
// var fourthButton = document.getElementById("fourthBtn");
// var para = document.getElementById("par");
// fourthButton.addEventListener("click", function () {
//   para.innerHTML = Math.floor(Math.random() * 100);
// });

//5;
// var div = document.getElementById("container");
// var prudocts = [
//   {
//     name: "car",
//     img: "https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-4322521__340.jpg",
//   },
//   {
//     name: "bike",
//     img: "https://cdn.pixabay.com/photo/2015/05/28/22/29/bicycle-788733_960_720.jpg",
//   },
//   {
//     name: "laptop",
//     img: "https://cdn.pixabay.com/photo/2013/07/13/11/46/laptop-158648_960_720.png",
//   },
// ];
// for (let i = 0; i < prudocts.length; i++) {
//   div.innerHTML += `<h1>${prudocts[i].name}</h1>`;
//   div.innerHTML += `<img src="${prudocts[i].img}"/>`;
// }
// 6;
// var input = document.getElementById("sixthInput");
// var sixthButton = document.getElementById("sixthBtn");
// var numsArray = [];
// sixthButton.addEventListener("click", function () {
//   if (input.value / 1 == input.value) {
//     numsArray.push(input.value);
//   }
// });
// console.log(numsArray);

// 7;
// var parSeven = document.getElementById("parSeven");
// parSeven.addEventListener("click", function () {
//   parSeven.innerHTML = new Date();
// });

// 8;
// var parEigth = document.getElementById("parEigth");
// parEigth.addEventListener("click", function () {
//   parEigth.innerHTML = new Date().getHours();
// });

// 9;
// var input = document.getElementById("nineInput");
// var nineButton = document.getElementById("nineBtn");
// var ninePar = document.getElementById("ninePar");

// nineButton.addEventListener("click", function () {
//   ninePar.innerHTML = Number(new Date().getFullYear()) - input.value;
// });

// 10;
// var numbersArr = [12, 23, 6, 1, 4, 5, 8, 9, 7];
// var input = document.getElementById("tenInput");
// var tenButton = document.getElementById("tenBtn");
// var tenPar = document.getElementById("tenPar");

// tenButton.addEventListener("click", function () {
//   for (let i = 0; i < numbersArr.length; i++) {
//     if (input.value / 1 == input.value && input.value == numbersArr[i]) {
//       tenPar.innerHTML = input.value;
//     }
//   }
// });

// 11
// var input = document.getElementById("elevenInput");
// var elevenButton = document.getElementById("elevenBtn");
// var elevenPar = document.getElementById("elevenPar");
// var twelvePar = document.getElementById("twelvePar");

// elevenButton.addEventListener("click", function () {
//   elevenPar.innerHTML = input.value.substring(0, input.value.indexOf(" "));
//   twelvePar.innerHTML = input.value.substring(input.value.indexOf(" ") + 1);
// });

//12
// var twelveButton = document.getElementById("twelveBtn");
// var twelveInput = document.getElementById("twelve");
// var thirteenInput = document.getElementById("thirteen");
// twelveButton.addEventListener("click", function () {
//   if (twelveInput.value.length == thirteenInput.value.length) {
//     console.log("equal length");
//   } else {
//     console.log(false);
//   }
// });

//13
// var thirteenButton = document.getElementById("thirteenBtn");
// var nameInput = document.getElementById("name");
// var emailInput = document.getElementById("email");
// var ageInput = document.getElementById("age");
// var array = [];
// thirteenButton.addEventListener("click", function () {
//   array.push(
//     (client = {
//       name: nameInput.value,
//       email: emailInput.value,
//       age: ageInput.value,
//     })
//   );
//   document.write(array);
// });
