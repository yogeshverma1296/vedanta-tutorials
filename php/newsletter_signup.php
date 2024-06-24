<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the email from the form
    $newsletterEmail = $_POST['newsletter_email'];
    
    // Validate the email address
    if (!filter_var($newsletterEmail, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Your email address where you want to receive the sign-ups
    $to = "your-email@example.com";
    
    // Email subject
    $subject = "New Newsletter Signup";

    // Email body
    $message = "A new user has signed up for the newsletter: " . $newsletterEmail;

    // Email headers
    $headers = "From: no-reply@example.com\r\n";
    $headers .= "Reply-To: no-reply@example.com\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for signing up for our newsletter!";
    } else {
        echo "There was a problem with your signup. Please try again.";
    }
} else {
    echo "Invalid request method.";
}
?>
