function myPortfolioProjects() {
    const portfolio = [
        {
            "title": "Weather Web",
            "img": "public/asset/img/piero_cusi_weather_web.png",
            "technologies": [
                {
                    "first": "Angular",
                    "second": "Sass",
                    "third": "Bootstrap",
                    "four": "Openweather"
                }
            ]
        },
        {
            "title": "Inca Expert Travel",
            "img": "public/asset/img/piero_cusi_inca_expert.png",
            "technologies": [
                {
                    "first": "HTML",
                    "second": "Sass",
                    "third": "JS",
                    "four": "Bootstrap"
                }
            ]
        },
        {
            "title": "Carolina de Rossi",
            "img": "public/asset/img/piero_cusi_carolina_rossi.png",
            "technologies": [
                {
                    "first": "HTML",
                    "second": "JS",
                    "third": "CSS",
                    "four": "PHP"
                }
            ]
        }
    ];
    const portfolioDiv = document.getElementById("portfolio");

    portfolioDiv.innerHTML = `
        ${portfolio.map((project, index) =>
        `
            <div class="pc__portfolio__items">
                <h1 class="pc__title">${project.title}</h1>
                <div class="d-flex justify-content-between ${index % 2 == 0 ? 'flex-row' : 'flex-row-reverse'} align-items-center pc__portfolio__flex">
                    <img src="${project.img}" class="d-block img-fluid pc__img__tech" alt="Piero Cusi">
                    <div class="d-flex flex-column align-items-end">
                        ${project.technologies.map((tech) => `
                        <div class="d-flex flex-row align-items-center pc__flex__tech">
                            <p>${tech.first}</p>
                            <div class="square"></div>
                        </div>
                        <div class="d-flex flex-row align-items-center pc__flex__tech">
                            <p>${tech.second}</p>
                            <div class="square"></div>
                        </div>
                        <div class="d-flex flex-row align-items-center pc__flex__tech">
                            <p>${tech.third}</p>
                            <div class="square"></div>
                        </div>
                        <div class="d-flex flex-row align-items-center pc__flex__tech">
                            <p>${tech.four}</p>
                            <div class="square"></div>
                        </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('')}
    `;
}

function myServices() {
    const services = [
        {
            "img": "public/asset/img/piero_cusi_service_mobile.png",
            "title": "Mobile Development",
        },
        {
            "img": "public/asset/img/piero_cusi_service_web.png",
            "title": "Web Development",
        },
        {
            "img": "public/asset/img/piero_cusi_ui_design.png",
            "title": "UI Design Prototype",
        }
    ]

    const servicesRow = document.getElementById('services');

    servicesRow.innerHTML = `
        ${services.map((service) => `
            <div class="card pc__service__card">
                <div class="card-body pc__service__card__body">
                    <img src="${service.img}" class="d-block img-fluid mx-auto pc__service__img" alt="Piero Cusi">
                    <h1 class="pc__service__title">
                        ${service.title}
                    </h1>
                    <button class="btn pc__btn">Read more</button>
                </div>
            </div>
        `).join('')}
    `;
}

function myClients() {
    const clients = [
        {
            "img": "public/asset/img/piero_cusi_sidequest_client.png"
        },
        {
            "img": "public/asset/img/piero_cusi_carolina_client.png"
        },
        {
            "img": "public/asset/img/piero_cusi_inca_client.png"
        }
    ];

    const clientsRow = document.getElementById("clients");

    clientsRow.innerHTML = `
        ${clients.map((client) => `
            <div class="card pc__client__card">
                <div class="card-body pc__client__card__body">
                    <img src="${client.img}" class="d-block img-fluid pc__client__img" alt="Piero Cusi">
                </div>
            </div>
        `).join('')}
    `;
}

function init() {
    myPortfolioProjects();
    myServices();
    myClients();
}

init();