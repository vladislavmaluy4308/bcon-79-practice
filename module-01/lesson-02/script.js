//1
const a = 7;
const b = 9;
const result1 = a * b;
console.log("🚀 ~ result1:", result1);

//2
const c = 7;
const d = 9;
const out2 = document.querySelector(".out-2");
console.log("🚀 ~ out2:", out2);
out2.textContent = c / d;

//3
const e = 3;
const f = 5;
const out3 = document.querySelector(".out-3");
console.log("🚀 ~ out3:", out3);
out3.textContent = e + f;

//4
const e1 = "3";
const f1 = 5;
const out4 = document.querySelector(".out-4");
console.log("🚀 ~ out4:", out4);
out4.textContent = e1 + f1;

//5
const e2 = 3;
const f2 = 0;
const out5 = document.querySelector(".out-5");
console.log("🚀 ~ out5:", out5);
out5.textContent = e2 / f2;

//6
const e3 = 3;
const f3 = "Hello";
const out6 = document.querySelector(".out-6");
console.log("🚀 ~ out7:", out6);
out6.textContent = e3 + f3;

//7
const e4 = 3;
const f4 = "Hello";
const out7 = document.querySelector(".out-7");
console.log("🚀 ~ out7:", out7);
out7.textContent = e4 * f4;

//8
const input8 = document.querySelector(".i-8");
const out8 = document.querySelector(".out-8");
const btn8 = document.querySelector(".b-8");
console.log("🚀 ~ btn8:", btn8);
btn8.onclick = fn8;

function fn8() {
  //const userInput = input8.value;
  //console.log("🚀 ~ fn8 ~ userInput:", userInput);
  //out8.textContent = input8.value;
  out8.textContent = input8.value;
  input8.value = "";
}

//9
const input9 = document.querySelector(".i-9");
const out9 = document.querySelector(".out-9");
const btn9 = document.querySelector(".b-9");
console.log("🚀 ~ btn9:", btn9);
btn9.onclick = t9;

function t9() {
  //const userInput = input9.value;
  //console.log("🚀 ~ fn9 ~ userInput:", userInput);
  //out9.textContent = input9.value;
  out9.textContent = input9.value;
  input9.value = "";
}

//10
const input10 = document.querySelector(".i-10");
const out10 = document.querySelector(".out-10");
const btn10 = document.querySelector(".b-10");
btn10.onclick = t10;

function t10() {
  out10.textContent = input10.value * 20;
  input10.value = "";
}

//11
const input11 = document.querySelector(".i-11");
const out11 = document.querySelector(".out-11");
const btn11 = document.querySelector(".b-11");
btn11.onclick = t11;

function t11() {
  out11.textContent = input11 + 55;
}

//14
const input14 = document.querySelector(".i-14");
const out14 = document.querySelector(".out-14");
const btn14 = document.querySelector(".b-14");
btn14.onclick = t14;
function t14() {
  input14.value = "GO";
}

//15
const input15 = document.querySelector(".i-15");
const out15 = document.querySelector(".out-15");
const btn15 = document.querySelector(".b-15");
btn15.onclick = t15;
function t15() {
  input15.style.border = "4px solid red";
}

//16

const input16 = document.querySelector(".i-16");
const out16 = document.querySelector(".out-15");
const btn16 = document;
