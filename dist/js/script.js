//navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header') //manggil element
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed')
    }else{
        header.classList.remove('navbar-fixed')
    }
}

//hamburger
const hamburger = document.querySelector('#hamburger'); //manggil id
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

(function () {
    var form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var nama = form.elements['name'].value.trim();
        var email = form.elements['email'].value.trim();
        var pesan = form.elements['message'].value.trim();
        var subject = 'Pesan dari website portofolio - ' + nama;
        var body = 'Nama: ' + nama + '\nEmail: ' + email + '\n\n' + pesan;
        window.location.href = 'mailto:egijaelani1010@gmail.com'
            + '?subject=' + encodeURIComponent(subject)
            + '&body=' + encodeURIComponent(body);
    });
})();

