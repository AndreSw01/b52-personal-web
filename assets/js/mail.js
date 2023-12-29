function sendEmail() {
    // Gantilah 'your@email.com' dengan alamat email Anda yang sebenarnya
    var emailAddress = 'andresetiawannn02@gmail.com';

    // Subjek dan isi email (dapat disesuaikan)
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var phone = document.getElementById('phone').value;

    // Membuat tautan mailto
    var mailtoLink = 'mailto:' + encodeURIComponent(emailAddress) +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + 'Halo, nama saya ' + encodeURIComponent(name) +
        '. Nomor telepon saya adalah ' + encodeURIComponent(phone) +
        '. Pesan: ' + encodeURIComponent(message);

    // Membuka klien email bawaan
    window.open(mailtoLink, 'Email', 'width=200,height=300');

}