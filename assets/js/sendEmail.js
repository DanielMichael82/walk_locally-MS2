function sendMail(contactForm) {
    emailjs.send("service_rtxyl3q","template_k3t0db9", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "user_message": contactForm.usermessage.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
}