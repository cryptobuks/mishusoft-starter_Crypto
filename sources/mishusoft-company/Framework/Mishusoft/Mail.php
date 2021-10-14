<?php

namespace Mishusoft;

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
//use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

class Mail
{
    /*declare version*/
    public const VERSION = "1.0.2";


    public static function send($info, $view = false)
    {
        // Instantiation and passing `true` enables exceptions
        $mail = new PHPMailer(true);

        /*check data variable and instantiation application*/
        $data = json_decode($info);
        if (!empty($data) && is_object($data)) {
            try {
                //Server settings
                //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
                $mail->isSMTP();                                            // Send using SMTP
                $mail->Host       = $data->config->server;                  // Set the SMTP server to send through
                $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
                $mail->Username   = $data->config->email;                   // SMTP username
                $mail->Password   = $data->config->password;                // SMTP password
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
                $mail->Port       = $data->config->port;                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

                //Recipients
                $mail->setFrom($data->sender->email, $data->sender->name);
                $mail->addAddress($data->receiver->email, $data->receiver->name);     // Add a recipient
                $mail->addAddress('mrabir.ahamed@gmail.com');               // Name is optional
                $mail->addReplyTo($data->reply->email, $data->reply->name);
                $mail->addCC('mishusoftsystemsinc@gmail.com');
                $mail->addBCC('mrabir.ahamed@gmail.com');

                // Attachments
                //$mail->addAttachment('mail.php');         // Add attachments
                //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

                // Content
                $mail->isHTML(true);                                  // Set email format to HTML
                $mail->Subject = $data->mail->subject;
                $mail->Body    = $data->mail->body;
                $mail->AltBody = $data->mail->altbody;

                $mail->send();
                if ($view) {
                    $view->assign('success', 'Message has been sent. Please check your mail inbox.');
                } else {
                    echo json_encode(['type' => 'success', 'message' => 'Message has been sent. Please check your mail inbox.']);
                }
                //echo json_encode(['type' => 'success', 'message' => 'Message has been sent. Please check your mail inbox.']);
                exit;
            } catch (Exception $e) {
                if ($view) {
                    $view->assign('error', 'Message could not be sent. Please try again.');
                } else {
                    echo json_encode(['type' => 'error', 'message' => 'Message could not be sent. Please try again.']);
                }
                //echo json_encode(['type' => 'error', 'message' => "Message could not be sent. Please try again."]);
                exit;
            }
        }
    }
}
