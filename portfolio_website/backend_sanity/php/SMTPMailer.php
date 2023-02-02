<?php 


$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;

use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->Host = 'smtp.gmail.com';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->Username = 'lenewshamsmtp@gmail.com';
$mail->Password = 'tsrndvyfvzmhpkny';
$mail->setFrom($email, $name);
$mail->addAddress('luke.newsham@outlook.com');
$mail->Subject = 'Portfolio Contact from ' . $name;
$mail->Body = $message . ' 
Sent from ' . $email;

$mail->send();


?>
