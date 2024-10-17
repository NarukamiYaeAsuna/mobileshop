function openGiohang(){
    var giohang = document.getElementById('giohang');
    giohang.classList.toggle('open');

}
function closeGiohang(){
    var giohang = document.getElementById('giohang');
    
    giohang.classList.remove('open');
   }
function list(){
    var sohang = document.getElementById('sohang')
    sohang.classList.toggle('open')
}
function openSale(){
    var Sale = document.getElementById('Sale');
    Sale.classList.toggle('open');
}
function closeSale(){
    var Sale = document.getElementById('Sale');
    Sale.classList.remove('open')

}
function openVoucher(){
    var Voucher = document.getElementById('Voucher');
    Voucher.classList.toggle('open');
}
function closeVoucher(){
    var Voucher = document.getElementById('Voucher');
    Voucher.classList.remove('open')

}
function openLogin(){
    var Login = document.getElementById('Login');
    Login.classList.toggle('open');
}
function closeLogin(){
    var Login = document.getElementById('Login');
    Login.classList.remove('open')

}
function trangchu() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function create(){
    var dangnhap = document.getElementById('dangnhap')
    dangnhap.classList.toggle('open')
}