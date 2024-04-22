var circle = 200; // 圆环路径半径
var rot; // 路径旋转角度
var col; // 粒子颜色范围
var freq = 0.0000010; // 粒子运动频率
var cont = 0; // 计数（未使用）
var r; // 粒子半径
// 初始化画布
function setup() {
    var canvas = createCanvas(800, 800); // 创建画布
    canvas.parent('my-canvas');
}
// 绘制
function draw() {
    // background(242);// 背景颜色
    clear();
    translate(400, 400); // 原点坐标
    rotate(radians(rot)); // 旋转坐标
    ellipseMode(RADIUS); // 绘制椭圆
    for (var i = 0; i < 500; i++) {
        circle = 200 + 100 * sin(millis() * freq * i);
        col_r = map(circle, 150, 250, 0, 255);
        col_g = map(circle, 150, 250, 0, 255);
        col_b = map(circle, 150, 250, 0, 255);
        col_a = map(circle, 150, 250, 255, 0);
        r = map(circle, 50, 150, 10, 1);
        fill(col_r, col_g, col_b, col_a);
        noStroke();
        ellipse(circle * cos(i), circle * sin(i), r, r);
        rot = rot + 0.00005;
    }
}