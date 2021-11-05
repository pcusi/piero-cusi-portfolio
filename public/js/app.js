function myPortfolioProjects() {
    const portfolio = [
        {
            "title": "Nexo Cash",
            "img": "public/asset/img/piero_cusi_nexo_cash.png",
            "technologies": [
                {
                    "first": "HTML",
                    "second": "JS",
                    "third": "Sass",
                    "four": "PHP"
                }
            ],
            "img_first": "public/asset/img/piero_cusi_html.png",
            "img_second": "public/asset/img/piero_cusi_js.png",
            "img_third": "public/asset/img/piero_cusi_sass.png",
            "img_four": "public/asset/img/piero_cusi_php.png",
            "link": "https://nexocash.pe/"
        },
        {
            "title": "Weather Web",
            "img": "public/asset/img/piero_cusi_weather_web.png",
            "technologies": [
                {
                    "first": "Angular",
                    "second": "Sass",
                    "third": "Bootstrap",
                    "four": "Openweather"
                },
            ],
            "img_first": "public/asset/img/piero_cusi_angular.png",
            "img_second": "public/asset/img/piero_cusi_sass.png",
            "img_third": "public/asset/img/piero_cusi_bootstrap.png",
            "img_four": "public/asset/img/piero_cusi_openweather.png",
            "link": "https://weather-app-cc3c9.web.app"
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
            ],
            "img_first": "public/asset/img/piero_cusi_html.png",
            "img_second": "public/asset/img/piero_cusi_sass.png",
            "img_third": "public/asset/img/piero_cusi_js.png",
            "img_four": "public/asset/img/piero_cusi_bootstrap.png",
            "link": "https://pcusi.github.io/inka-expert-travel/"
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
            ],
            "img_first": "public/asset/img/piero_cusi_html.png",
            "img_second": "public/asset/img/piero_cusi_js.png",
            "img_third": "public/asset/img/piero_cusi_css.png",
            "img_four": "public/asset/img/piero_cusi_php.png",
            "link": "https://www.carolinaderossi.com/"
        },
        {
            "title": "Feria la Comunidá",
            "img": "public/asset/img/piero_cusi_feria.png",
            "technologies": [
                {
                    "first": "Angular",
                    "second": "MySQL",
                    "third": "Node",
                    "four": "Bootstrap"
                }
            ],
            "img_first": "public/asset/img/piero_cusi_angular.png",
            "img_second": "public/asset/img/piero_cusi_mysql.png",
            "img_third": "public/asset/img/piero_cusi_node.png",
            "img_four": "public/asset/img/piero_cusi_bootstrap.png",
            "link": "https://market-comunida.web.app/"
        },
        {
            "title": "Flutter Ecommerce Template",
            "img": "public/asset/img/piero_cusi_ecommerce_app.png",
            "technologies": [
                {
                    "first": "Flutter",
                    "second": "Git",
                    "third": "Figma",
                    "four": "Secret"
                }
            ],
            "img_first": "public/asset/img/piero_cusi_flutter.png",
            "img_second": "public/asset/img/piero_cusi_git.png",
            "img_third": "public/asset/img/piero_cusi_figma.png",
            "img_four": "public/asset/img/piero_cusi_secret.png",
            "link": "https://github.com/pcusi/flutter-ecommerce-template"
        },
        {
            "title": "Nike Shoes Template",
            "img": "public/asset/img/piero_cusi_nike.png",
            "technologies": [
                {
                    "first": "Flutter",
                    "second": "Git",
                    "third": "Figma",
                    "four": "Secret"
                }
            ],
            "img_first": "public/asset/img/piero_cusi_flutter.png",
            "img_second": "public/asset/img/piero_cusi_git.png",
            "img_third": "public/asset/img/piero_cusi_figma.png",
            "img_four": "public/asset/img/piero_cusi_secret.png",
            "link": "https://github.com/pcusi/nike-app"
        },
        {
            "title": "3D App Template",
            "img": "public/asset/img/piero_cusi_3d.png",
            "technologies": [
                {
                    "first": "Flutter",
                    "second": "Git",
                    "third": "Figma",
                    "four": "Secret"
                }
            ],
            "img_first": "public/asset/img/piero_cusi_flutter.png",
            "img_second": "public/asset/img/piero_cusi_git.png",
            "img_third": "public/asset/img/piero_cusi_figma.png",
            "img_four": "public/asset/img/piero_cusi_secret.png",
            "link": "https://github.com/pcusi/flutter-diff-apps"
        },
    ];
    const portfolioDiv = document.getElementById("portfolio");

    portfolioDiv.innerHTML = `
        ${portfolio.map((project, index) =>
        `
            <div class="pc__portfolio__items">
                <h1 class="pc__title">${project.title}</h1>
                <a class="btn pc__btn d-block mx-auto" href="${project.link}" target="_blank">Watch project</a>
                <div class="d-flex justify-content-between ${index % 2 == 0 ? 'flex-row' : 'flex-row-reverse'} align-items-center pc__portfolio__flex">
                    <img src="${project.img}" class="d-block img-fluid pc__img__tech" alt="Piero Cusi">
                    <div class="d-flex flex-column align-items-end">
                        ${project.technologies.map((tech) => `
                        <div class="d-flex flex-row align-items-center pc__flex__tech">
                            <p>${tech.first}</p>
                            <div class="square">
                            <img src="${project.img_first}" class="d-block img-fluid square__img">
                        </div>
                        </div>
                        <div class="d-flex flex-row align-items-center pc__flex__tech">
                            <p>${tech.second}</p>
                            <div class="square">
                            <img src="${project.img_second}" class="d-block img-fluid square__img">
                        </div>
                        </div>
                        <div class="d-flex flex-row align-items-center pc__flex__tech">
                            <p>${tech.third}</p>
                            <div class="square">
                            <img src="${project.img_third}" class="d-block img-fluid square__img">
                        </div>
                        </div>
                        <div class="d-flex flex-row align-items-center pc__flex__tech">
                            <p>${tech.four}</p>
                            <div class="square">
                                <img src="${project.img_four}" class="d-block img-fluid square__img">
                            </div>
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
            "title": "UX Design Solutions",
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