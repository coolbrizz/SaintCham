<?php
$popup_message = ""; // Variable pour stocker le message de popup

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Validation de l'email
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Informations de l'e-mail
        $to = "antony.auvray@hotmail.com";  // Remplacez par votre adresse e-mail
        $subject = "Nouvelle inscription à la newsletter";
        $message = "Un utilisateur s'est inscrit à la newsletter avec l'adresse e-mail : " . $email;
        $headers = "From: no-reply@example.com" . "\r\n" .
            "Reply-To: " . $email . "\r\n" .
            "X-Mailer: PHP/" . phpversion();

        // Envoi de l'e-mail
        if (mail($to, $subject, $message, $headers)) {
            $popup_message = "Merci pour votre inscription !"; // Message de succès
        } else {
            $popup_message = "Une erreur est survenue lors de l'envoi du mail."; // Message d'erreur
        }
    } else {
        $popup_message = "Veuillez entrer une adresse e-mail valide.";
    }
}
