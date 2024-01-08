function sendEmail() {
  
    var emailAddress = 'andresetiawannn02@gmail.com';

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var phone = document.getElementById('phone').value;


    var mailtoLink = 'mailto:' + encodeURIComponent(emailAddress) +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + 'Halo, nama saya ' + encodeURIComponent(name) +
        '. Nomor telepon saya adalah ' + encodeURIComponent(phone) +
        '. Pesan: ' + encodeURIComponent(message);

  
    window.open(mailtoLink, 'Email', 'width=200,height=300');

}