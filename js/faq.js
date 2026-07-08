document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(".faq__item");

    faqItems.forEach(item => {

        const button = item.querySelector(".faq__question");

        button.addEventListener("click", () => {

            const isActive = item.classList.contains("active");

            faqItems.forEach(faqItem => {
                faqItem.classList.remove("active");
                const w = faqItem.querySelector(".faq__answer-wrapper");
                if (w) w.style.height = "0";
            });

            if (!isActive) {
                item.classList.add("active");
                const wrapper = item.querySelector(".faq__answer-wrapper");
                if (wrapper) {
                    const inner = wrapper.querySelector(".faq__answer");
                    wrapper.style.height = (inner ? inner.scrollHeight : 0) + "px";
                }
            }

        });

    });

});