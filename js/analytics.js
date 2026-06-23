function trackWhatsApp(buttonName) {

    gtag('event', 'whatsapp_click', {

        button_name: buttonName,

        page_location: window.location.href

    });

}

function trackCheckout(buttonName) {

    gtag('event', 'checkout_click', {

        button_name: buttonName,

        page_location: window.location.href

    });

}

function trackMembersArea(buttonName) {

    gtag('event', 'members_area_click', {

        button_name: buttonName,

        page_location: window.location.href

    });

}