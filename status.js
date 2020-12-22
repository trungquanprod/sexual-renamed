var text = ".: Welcome To Website VanLuong.Coo.Vn - Giai Điệu Của Cuộc Sống :." 
var speed = 30 
var x = 0
function GoString() {
var a = text.substring(0,x)
var b = text.substring(x,x+1).toUpperCase()
var c = text.substring(x+1,text.length)
window.status=a+b+c
if (x == text.length) {x=0}
else {x++}
setTimeout("GoString()",speed)
}
GoString();
// End -->
