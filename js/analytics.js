function trackWhatsApp(buttonName) {

    gtag('event', 'whatsapp_click', {

        button_name: buttonName,

        page_location: window.location.href

    });

}