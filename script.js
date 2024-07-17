
var names = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1];

function CalStraightFlush(number) {
    var ret = Array();
    for (var i = 0; i <= values.length - 5; i++) {
        var sum = 0;
        var result = '';
        for (var j = i; j < i + 5; j++) {
            sum += values[j];
            result += names[j];
        }
        if (number == sum) {
            ret.push(result);
        }
    }
    return ret;
}

function CalFourOfAKind(number) {
    var ret = Array();
    for (var i = values.length - 1; i >= 0; i--) {
        var j = number - values[i] * 4;
        if (j >= 1 && j <= 13 && j != values[i]) {
            var k = j - 2;
            if (k == -1) k = 12;
            result = names[i] + names[i] + names[i] + names[i] + names[k];
            ret.push(result);
        }
    }
    return ret;
}

function CalFullHouse(number) {
    var ret = Array();
    for (var i = values.length - 1; i >= 0; i--) {
        if ((number - values[i] * 3) % 2 == 1) continue;
        var j = (number - values[i] * 3) / 2;
        if (j >= 1 && j <= 13 && j != values[i]) {
            var k = j - 2;
            if (k == -1) k = 12;
            result = names[i] + names[i] + names[i] + names[k] + names[k];
            ret.push(result);
        }
    }
    return ret;
}

function calculate() {
    // 获取用户输入的数字
    var number = Number(document.getElementById('numberInput').value);
    // 获取结果列表的引用
    var resultList = document.getElementById('resultList');
    resultList.innerHTML = '';
    if (number < 6 || number > 64) {
        var errorItem = document.createElement('li');
        errorItem.textContent = '请输入6到64的数字';
        resultList.appendChild(errorItem);
        return
    }
    // 创建一个新的列表项来显示原始数字
    var originalItem = document.createElement('li');
    originalItem.textContent = '数字: ' + number;
    resultList.appendChild(originalItem);

    var lstStraightFlush = CalStraightFlush(number);
    if (lstStraightFlush.length > 0) {
        var itemStraightFlush = document.createElement('li');
        itemStraightFlush.textContent = '同花顺:' + lstStraightFlush;
        resultList.appendChild(itemStraightFlush);
    }

    var lstFourOfAKind = CalFourOfAKind(number);
    if (lstFourOfAKind.length > 0) {
        var itemFourOfAKind = document.createElement('li');
        itemFourOfAKind.textContent = '四条:' + lstFourOfAKind;
        resultList.appendChild(itemFourOfAKind);
    }

    var lstFullHouse = CalFullHouse(number);
    if (lstFullHouse.length > 0) {
        var itemFullHouse = document.createElement('li');
        itemFullHouse.textContent = '葫芦:' + lstFullHouse;
        resultList.appendChild(itemFullHouse);
    }

}