new Vue({
    el: "#root",
    data: {
        openingHours: {
            time: "9:00 - 18:00",
            days: "Mon - Sat",
        }, 

        headerContacts: {
            tel: "+1 (305) 1234-5678", // ?? va bene o array con icona e dato?
            email: "hello@example.com",
            facebook: "facebook",
            twitter: "twitter",
            linkedin: "linkedin",    
        },

        headerContentNav: ["home", "about", "services", "process", "testimonials"],

    },
})