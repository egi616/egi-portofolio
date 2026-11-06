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


emailjs.init("rBhAvIyVFyOKq5Wo6");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_skc6ml6",
        "template_xilqx3s",
        this
    )
    .then(() => {
        alert("Pesan berhasil dikirim!");
        form.reset();
    })
    .catch((error) => {
        console.error("Email gagal dikirim:", error);
        alert("Gagal mengirim pesan.");
    });
});

