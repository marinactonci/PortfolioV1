<?php

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $myEmail = 'toncimarinac@gmail.com';
    $subject = 'Portfolio Contact Form';
    $headers = 'From: '.$email;
    $txt = 'You have received an email from '.$name.'.\n\n'.$message;

    mail($myEmail, $subject, $txt, $headers);
}