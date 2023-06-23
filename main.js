function sendEmail() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  var email = "your_email_address@gmail.com";
  var subject = "Contact Form Submission";
  var body = name + "\n" + phone + "\n" + message;

  var m = new Message();
  m.setSubject(subject);
  m.setBody(body);
  m.setTo(email);

  MailApp.send(m);
}