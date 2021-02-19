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

        vehicles: [
            {
                type: "light",
                img: "../img/truck-1.png",
                load: 1200,
            },

            {
                type: "medium",
                img: "../",
                load: 6000,
            },

            {
                type: "heavy",
                img: "../",
                load: 24000,
            },
        ],

        certifications: [
            {
                type: "",
                path: "../img/certificate.png",
            },
            
            {
                type: "",
                path: "../img/certificate.png",
            },
        ],

        services: [
            {
                name: "Technology",
                icon: "fas fa-truck-loading",
                description: "We are continually focused on developing technology solutions adapted to our client's needs.",
            },

            {
                name: "reefer cargo",
                icon: "../img/",
                description: "Regular and frequent monitoring from the receipt of the loaded container to final destination.",
            }, 

            {
                name: "dry cargo",
                icon: "../img/",
                description: "We work with most types of dry cargo, from valuable cargo to the most dangerous requiring care.",
            }, 
        ]

    },
})