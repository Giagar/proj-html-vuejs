new Vue({
    el: "#root",
    data: {
        openingHours: {
            time: "9:00 - 18:00",
            days: "Mon - Sat",
        }, 

        contacts: [
            {
                type: "tel",
                icon: "fas fa-phone-alt",
                content: "+1 (305) 1234-5678",
            },

            {
                type: "email",
                icon: "fas fa-envelope",
                content: "hello@example.com",            
            },

            {
                type: "address",
                icon: "fas fa-map-marker-alt",
                content: "Main Avenue, 987",                       
            },

        ],
        
        social: [
            {
                type: "facebook",
                icon: "fab fa-facebook-f",
            },

            {
                type: "twitter",
                icon: "fab fa-twitter",
            },

            {
                type: "twitter",
                icon: "fab fa-linkedin-in",
            },
        ],

        headerContentNav: ["home", "about", "services", "process", "testimonials"],

        vehicles: [
            {
                type: "light",
                img: "../img/truck-1.png",
                load: 1200,
            },

            {
                type: "medium",
                img: "../img/truck-1.png",
                load: 6000,
            },

            {
                type: "heavy",
                img: "../img/truck-1.png",
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
                icon: "fas fa-temperature-low",
                description: "Regular and frequent monitoring from the receipt of the loaded container to final destination.",
            }, 

            {
                name: "dry cargo",
                icon: "fas fa-boxes",
                description: "We work with most types of dry cargo, from valuable cargo to the most dangerous requiring care.",
            }, 
        ],

        procedures: [
            {
                name: "Collection of information",
                description: "Lorem ipsum dolor sit, amet consectetur.",
            },

            {
                name: "Service Invoice Sending",
                description: "Lorem ipsum dolor sit, amet consectetur.",
            },

            {
                name: "Withdrawal of Cargo",
                description: "Lorem ipsum dolor sit, amet consectetur.",
            },

            {
                name: "Transport Customer Order",
                description: "Lorem ipsum dolor sit, amet consectetur.",
            },

            {
                name: "Successful Delivery",
                description: "Lorem ipsum dolor sit, amet consectetur.",
            },
        ], 

        results: [
            {
                number: 128,
                description: "certifications",
            },
            
            {
                number: 230,
                description: "employees",
            },
            
            {
                number: 517,
                description: "customers",
            },
            
            {
                number: 94,
                description: "countries served",
            },

        ],

        feedback: [
            {
                logo: "../img/logo-1.png",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta accusamus odit numquam dolorem delectus animi est.",
                quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            },
            
            {
                logo: "../img/logo-2.png",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta accusamus odit numquam dolorem delectus animi est.",
                quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            },

            {
                logo: "../img/logo-3.png",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta accusamus odit numquam dolorem delectus animi est.",
                quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            },
        ],

        footer: {
            cards: [
                {
                    title: "About",
                    elements: [
                        "The Company", "Institutional", "Social & Events", "Innovation", "Environment", "Technology"
                    ]
                },

                {
                    title: "Transport",
                    elements: [
                        "Industrialized", "Chemicals", "Packaged Liquids", "Construction", "Laminated Wood", "And others"
                    ]
                },

                {
                    title: "Support",
                    elements: [
                        "Responsibility", "Terms of Use", "About Cookies", "Privacy Policy", "Accessibility", "Information"
                    ]
                }
            ]
        },
    },
})