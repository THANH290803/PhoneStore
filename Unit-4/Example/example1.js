function calculate(el) {
    var number_1 = document.getElementById("number_1");
    var number_2 = document.getElementById("number_2");
    var val_1 = number_1.value;
    var val_2 = number_2.value;
    var result;
    var check = true;

    if(val_1 == "") {
    alert("Bạn phải nhập số thứ nhất!");
    check = false;
    }
    if(val_2 == "") {
    alert("Bạn phải nhập số thứ hai!");
    check = false;
    }

    if(check) {
        switch (el.innerHTML) {
        case '+':
        result = parseFloat(val_1) + parseFloat(val_2);
        break;
        case '-':
        result = parseFloat(val_1) - parseFloat(val_2);
        break;
        case '*':
        result - parseFloat(val_1) * parseFloat(val_2);
        break;
        case '/':
        result = parseFloat(val_1) / parseFloat(val_2);
        break;
        }
        document.getElementById("result").value = result;
    } 
}
