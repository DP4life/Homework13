function well() {
    var a = prompt("Введите a", "a =");
    var b = prompt("Введите b", "b =");
    var c = prompt("Введите c", "c =");
    function damn(a, b, c) {
        var dis = (b * b) - (4 * a * c);
        return dis;
    }
   
    alert(damn(a, b, c));
    if (dis > 0 ){
    var x1 = (-b + Math.sqrt(dis)) / 2 * a;
    var x2 = (-b - Math.sqrt(dis)) / 2 * a;
    alert(x1, x2);}
}