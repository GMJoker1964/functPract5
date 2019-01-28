function swap() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var temp = num1;
    num1 = num2;
    num2 = temp;
    document.getElementById("result1").value = num1;
    document.getElementById("result2").value = num2;
}