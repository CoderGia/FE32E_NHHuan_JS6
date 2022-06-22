// Bài tập 1: TÌm số nguyên dương nhỏ nhất thỏa 1 điều kiện
// Hàm tìm số nguyên dương n thỏa mãn điều kiện tổng các số từ 1 đến số n nhỏ hơn 1000 
function positiveInteger() {
    var sum = 0;
    var i = 1;
    while (sum < 10000) {
        sum += i;
        i++;
    }
    return (i - 1);
}
console.log(positiveInteger());
document.getElementById('positiveInteger').onclick = function () {
    document.getElementById('ketQua1').innerHTML = positiveInteger();
}

//Bài tập 2: Viết chương trình cho phép nhập vào 2 số và tỉnh tổng .....
// Hàm mũ
function exponential(x, n) {
    var i = 1;
    var exponenTial = 1;
    while (i <= n) {
        exponenTial *= x;
        i++;
    }
    return exponenTial;
}
// Hàm tính tổng
function sumXN(x, n) {
    var i = 1;
    var sum = 0;
    while (i <= n) {
        sum += exponential(x, i);
        i++;
    }
    return sum;
}
document.getElementById('btnSum').onclick = function () {
    // input
    var firstNumber = document.getElementById('soX').value;
    var secondNumber = document.getElementById('soN').value;
    // output
    var ketQua2 = '';
    // progress
    ketQua2 = sumXN(firstNumber, secondNumber);
    document.getElementById('ketQua2').innerHTML = ketQua2;
}

// Bài tập 3: Tính giai thừa
// Hàm tính giai thừa
function factorial(numberN) {
    var facTorial = 1;
    if (numberN == 0) {
        facTorial = 1;
    } else if (numberN > 0) {
        for (var i = 1; i <= numberN; i++) {
            facTorial *= i;
        }
    }
    return facTorial;
}

document.getElementById('btnFactorial').onclick = function () {
    //input
    var numberN = Number(document.getElementById('numberN').value);
    if (numberN < 0) {
        window.alert("n lớn hơn 0")
    } else {
        //output
        var ketQua3 = '';
        ketQua3 = factorial(numberN);
        document.getElementById('ketQua3').innerHTML = ketQua3;
    }
}

// Bài tập 4: Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div.
// Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì
// background màu xanh.

//Hàm tạo div
function createDiv(nDiv) {
    var oddDiv = '<div style="background-color: blue; color: white;">Div lẻ</div>';
    var envenDiv = '<div style="background-color: red; color: white;">Div chẵn</div>';
    var content = '';
    for (var i = 1; i <= nDiv; i++) {
        if (i % 2 !== 0) {
            content += oddDiv;
        } else {
            content += envenDiv;
        }
    }
    return content;
}

document.getElementById('btnDiv').onclick = function () {
    var nDiv = 10;
    var ketQua4 = createDiv(nDiv);
    document.getElementById('ketQua4').innerHTML = ketQua4;
}

// function createDiv(nDiv) {
//     var tag = document.createElement("div");
//     var content = document.createTextNode("div nè");
//     for (var i = 1; i <= nDiv; i++) {
//         tag.appendChild(content);
//         tag += tag;
//     }
//     return tag;
// }

// Bài tập 5: Tìm số chẵn lẻ nhỏ hơn 100
document.getElementById('btnXemKetQua').onclick = function () {
    var oddNumber = '';
    var envenNumber = '';
    var ketQua5 = '';
    for (var i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            envenNumber = envenNumber + ' ' + i;
        } else {
            oddNumber = oddNumber + ' ' + i;
        }
    }
    // output
    ketQua5 = 'Các số chẵn nhỏ hơn 100 là: ' + envenNumber + ' . ' + 'Các số lẻ nhỏ hơn 100 là: ' + oddNumber;
    document.getElementById('ketQua5').innerHTML = ketQua5;

}

// Bài tập 6: Đếm số chia hết cho 3 nhỏ hơn 1000
document.getElementById('btnXemKetQua6').onclick = function () {
    var numberCheck = 0;
    var ketQua6 = '';
    for (var i = 0; i < 1000; i++) {
        if (i % 3 === 0) {
            numberCheck++;
        }
    }
    // output
    ketQua6 = 'Số các số chia hết cho 3 và nhỏ hơn 1000 là: ' + numberCheck;
    document.getElementById('ketQua6').innerHTML = ketQua6;
}

//Bài tập 7: In các số nguyên tố nhỏ hơn số n do người dùng nhập vào
// hàm kiểm tra số nguyên tố
function checkprimes(n) {
    var checkPrimes = true;
    for (var divisor = 2; divisor <= (Math.sqrt(n)); divisor++) {
        if (n % divisor == 0) {
            checkPrimes = false;
        }
    }
    return checkPrimes;
}

document.getElementById('timISo7').onclick = function () {
    // input
    var iSo7 = document.getElementById('iSo7').value;
    // output
    var ketQua7 = '';

    for (var j = 2; j <= iSo7; j++) {
        if (checkprimes(j) == true) {
            ketQua7 = ketQua7 + ' ' + j;
        }
    }
    document.getElementById('ketQua7').innerHTML = ketQua7;

}