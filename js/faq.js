document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(".faq__item");

    faqItems.forEach(item => {

        const button = item.querySelector(".faq__question");

        button.addEventListener("click", () => {

            const isActive = item.classList.contains("active");

            faqItems.forEach(faqItem => {
                faqItem.classList.remove("active");
            });

            if (!isActive) {
                item.classList.add("active");
            }

        });

    });

});