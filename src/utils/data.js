import finance from "../assets/logos/finance.svg";
import celebration from "../assets/logos/celebration.svg";
import estate from "../assets/logos/estate.svg";
import plant from "../assets/logos/plant.svg";
import blood from "../assets/logos/blood.svg";
import park from "../assets/logos/park.svg";
import internet from "../assets/logos/internet.svg";
import financeWhite from "../assets/logos/financeWhite.svg";
import celebrationWhite from "../assets/logos/celebrationWhite.svg";
import estateWhite from "../assets/logos/estateWhite.svg";
import plantWhite from "../assets/logos/plantWhite.svg";
import bloodWhite from "../assets/logos/bloodWhite.svg";
import parkWhite from "../assets/logos/parkWhite.svg";
import internetWhite from "../assets/logos/internetWhite.svg";
import portugal from "../assets/images/portugal.jpg";
import conventions from "../assets/images/conventions.jpg";
import lagos from "../assets/images/lagos.jpg";

// financial
import capital from "../assets/images/capital.png";
import asset from "../assets/images/asset.png";
import securities from "../assets/images/securities.png";
import registras from "../assets/images/registras.png";
import trustees from "../assets/images/trustees.png";
import factoring from "../assets/images/factoring.png";
import keynes from "../assets/images/keynes.png";

// real estate
import property from "../assets/images/property.png";
import brokerage from "../assets/images/brokerage.png";
import project from "../assets/images/project.png";
import development from "../assets/images/development.png";

// agro allied
import kaxal from "../assets/images/kaxal.png";
import webzen from "../assets/images/webzen.png";
import hawaree from "../assets/images/hawaree.png";

// renewable
import gas from "../assets/images/gas.png";
import solar from "../assets/images/solar.png";

// technology
import paysharp from "../assets/images/paysharp.png";
import fintech from "../assets/images/fintech.png";
import realEstateNew from "../assets/images/realEstate.png";
import airtime from "../assets/logos/airtime.svg";
import cash from "../assets/logos/cash.svg";
import deposit from "../assets/logos/deposit.svg";
import prepaid from "../assets/logos/prepaid.svg";
import money from "../assets/logos/money.svg";
import subscription from "../assets/logos/subscription.svg";
// import technologyServices from "../assets/images/technologyServices.png";
// import smart from "../assets/images/smart.png";
// import technologyDistribution from "../assets/images/technologyDistribution.png";
// import mediaEntertainment from "../assets/images/mediaEntertainment.png";

// healthcare
import afrilife from "../assets/images/afrilife.png";
import sage from "../assets/images/sage.png";
import lifeLine from "../assets/images/lifeLine.png";

// hospitality
import blueAmber from "../assets/images/blueAmber.png";
import luxor from "../assets/images/luxor.png";
import residences from "../assets/images/residences.png";
import amberCrest from "../assets/images/amberCrest.png";
import eterniti from "../assets/images/eterniti.png";
import steppingStone from "../assets/images/steppingStone.png";

export const portfolio = [
  {
    img: finance,
    whiteImg: financeWhite,
    text: "Financial services",
    color: "#38B6FF",
  },
  {
    img: celebration,
    whiteImg: celebrationWhite,
    text: "hospitality & entertainment",
    color: "#FAB400",
  },
  {
    img: estate,
    whiteImg: estateWhite,
    text: "real estate & infrastructure",
    color: "#4E2E8F",
  },
  {
    img: plant,
    whiteImg: plantWhite,
    text: "Agro-allied & FMCG",
    color: "#9ACB34",
  },
  {
    img: blood,
    whiteImg: bloodWhite,
    text: "healthcare",
    color: "#FF0000",
  },
  {
    img: park,
    whiteImg: parkWhite,
    text: "renewable energy",
    color: "#105215",
  },
  {
    img: internet,
    whiteImg: internetWhite,
    text: "technology and payment system",
    color: "#FA6900",
  },
];

export const foundations = [
  {
    text: "PAC Capital Commits to a 3-year Sponsorship Agreement with CANEX presents Africa @Portugal Fashion Week.",
    image: portugal,
  },
  {
    text: "Pac Capital Limited Sponsors Afreximbank 2021 Intra-African Trade Fair (Iatf) Event In Durban, South Africa.",
    image: conventions,
  },
  {
    text: "PAC Foundation Joined other Stakeholders to celebrate Lagos Tree Planting Day.",
    image: lagos,
  },
  {
    text: "PAC Capital Commits to a 3-year Sponsorship Agreement with CANEX presents Africa @Portugal Fashion Week.",
    image: conventions,
  },
  {
    text: "Pac Capital Limited Sponsors Afreximbank 2021 Intra-African Trade Fair (Iatf) Event In Durban, South Africa.",
    image: portugal,
  },
  {
    text: "Pac Capital Limited Sponsors Afreximbank 2021 Intra-African Trade Fair (Iatf) Event In Durban, South Africa.",
    image: conventions,
  },
  {
    text: "PAC Foundation Joined other Stakeholders to celebrate Lagos Tree Planting Day.",
    image: lagos,
  },
  {
    text: "PAC Capital Commits to a 3-year Sponsorship Agreement with CANEX presents Africa @Portugal Fashion Week.",
    image: conventions,
  },
  {
    text: "Pac Capital Limited Sponsors Afreximbank 2021 Intra-African Trade Fair (Iatf) Event In Durban, South Africa.",
    image: portugal,
  },
  // {
  //   text: "PAC Foundation Joined other Stakeholders to celebrate Lagos Tree Planting Day.",
  //   image: conventions,
  // },
];
export const footer = [
  {
    heading: "about",
    items: [
      { link: "/about", text: "about us" },
      { link: "/about", text: "leadership" },
    ],
  },
  {
    heading: "resources",
    items: [
      { link: "https://pacresearch.org", text: "research", external: true },
      { link: "/resources/stay-updated", text: "news" },
      // { link: "/resources/newsletter", text: "newsletter" },
      { link: "/resources/newsletter", text: "get brochure", brochure: true },
      { link: "/joinus/vendor", text: "vendor reg portal" },
    ],
  },
  {
    heading: "our portfolio",
    items: [
      { link: "/portfolio/financial-services", text: "financial services" },
      {
        link: "/portfolio/hospitality",
        text: "hospitality & entertainment",
      },
      {
        link: "/portfolio/real-estate",
        text: "real estate & infrastructure",
      },
      { link: "/portfolio/agro-allied", text: "Agro-allied & FMCG" },
      { link: "portfolio/healthcare", text: "healthcare" },
      {
        link: "/portfolio/technology",
        text: "technology & payment systems",
      },
      { link: "/portfolio/renewable", text: "renewable energy" },
    ],
  },
];

export const financialData = [
  {
    img: capital,
    heading: "PAC Capital",
    text: [
      "PAC Capital Limited is the Investment Banking and Advisory arm of the Group’s Financial Services Division and is a leading Capital Markets & Financial Advisory Services firm in Nigeria. The company has extensive experience in the dynamics of working with Multi-Lateral Funding & Credit Institutions across Africa and beyond.",
      "We have worked across various sectors including public sector to provide comprehensive Capital Raising, Mergers and Acquisition Advisory, Debt Restructuring, Project Finance, Corporate Restructuring & Business Combination and Structured Trade Finance. ",
    ],
    link: "https://paccapitalltd.com",
  },
  {
    img: asset,
    heading: "PAC Asset Management",
    text: [
      "PAC Asset Management Limited is an integrated Asset Management Company that offers traditional and non-traditional investment products and services to institutional investors and High net-worth individuals under discretionary and non discretionary mandates.",

      "Some products and services offered by PAC Asset include a portfolio of Mutual Funds, Private funds including endowments and other specialized funds, fixed income brokerage.",
    ],
    link: "http://pacassetmanagement.com",
  },
  {
    img: securities,
    heading: "PAC Securities",
    text: [
      "PAC Securities Limited is a dealing member of the Nigerian Stock Exchange (NSE) and one of the successful brokerage firms in Nigeria, having participated in many high profile transactions in the industry.",

      "The company offers brokerage/financial services to a broad spectrum of clients including institutional investors, Multi-Nationals, Public Sectors, High net-worth individuals and retail investors. Our services are planned for organizations and entities that wish to invest in Africa",
    ],
    link: "https://pacsecurities.com",
  },
  {
    img: registras,
    heading: "PAC Registrars",
    text: [
      "PAC Registrars Limited was registered with the Securities & Exchange Commission (SEC) in June 2006 as a Capital Market Operator to provide Share Registration Services. It commenced Business in February 2007.",

      "The services provided by PAC Registrars include Registrar to Offer services, Security Data Consultancy Services, Industrial/Debenture Issue Registrars, Industrial/Debenture Stock Data Management, Corporate Equity Issue Registrars Data Management, Government Bond Issue Registrars/Data Management.",
    ],
    link: "https://www.pacregistrars.com",
  },
  {
    img: trustees,
    heading: "PAC Trustees",
    text: [
      "PAC Trustees Limited provides specialized trustee services to a broad spectrum of clients including Multinationals, Charity Organisations, Religious Organisations, Company Cooperatives & Staff Schemes, (Private & Public) Insurance Companies, Money Deposit Institutions, Tertiary Institutions, Families & Estate Planning and public sectors.",

      "Some of our services include Corporate Trusts, Public Trusts, Specialized Private Trusts, Family Trusts and Warehousing Trustee Services. The expectations and needs of our client is priority in our delivery at PAC Trustees, seeing that our overall objective is to exceed client’s expectations.",
    ],
    link: "https://www.pactrustees.com",
  },

  {
    img: factoring,
    heading: "Factoring & Supply Chain Finance",
    text: [
      "Factoring & Supply Chain Finance Limited (“FSF”) engages in Trade receivables financing and is a member of FCI – an umbrella organisation for independent factoring companies around the world. With unrestricted access to Multilateral funding institutions, we have the ability to ensure that Small Medium Enterprises are able to benefit from financing.",

      "At FSF, we are focused to assist businesses unlock opportunities through: Invoice Discounting, Full Service Factoring, Supply Chain Finance, Debt Factoring, Vendor Finance, Consumer Lending.",
    ],
    link: "https://fscsng.com",
  },
  {
    img: keynes,
    heading: "Keynes Private Equity",
    text: [
      "Keynes Private Equity is focused on deployment of Capital into growth sectors of emerging economies of the Sub-Saharan African region. KPE through its funds and vehicles has invested in Nigeria, Liberia, and Cote d’Ivoire.",
      "We are dedicated to creating above par value for our partners from alternative assets funds and Investments management.",
    ],
    link: "https://keynesprivateequity.com",
  },
];

export const realEstate = [
  {
    img: property,
    heading: "Property & Facility Management",
    text: [
      "We provide daily oversight of residential, commercial, or industrial real estate and see to the day-to-day repairs and ongoing maintenance, security, and upkeep of properties including apartment and condominium complexes, private home communities, shopping centers, and industrial parks, etc.",
    ],
    link: "http://bricsinfrastructure.com/ ",
  },
  {
    img: brokerage,
    heading: "Brokerage",
    text: [
      "We offer real estate brokerage services by acting as a medium for buyers and sellers to get in touch with each other and enable them to complete transactions. Our brokerage services include property listings for sale or purchase, listings for renting, home sales and purchase, home renting, site visits, etc.",
    ],
    link: "http://bricsinfrastructure.com/ ",
  },
  {
    img: project,
    heading: "Project Management",
    text: [
      "Our team of experts are here to serve you, whether it is overseeing construction schemes from inception to completion, handling complex commercial transactions, and much more. We ensure an on-time and on-budget outcome for our clients.",
    ],
    link: "http://bricsinfrastructure.com/ ",
  },
  {
    img: development,
    heading: "Property Development",
    text: [
      "Our real estate arm provides experience and expertise in developing luxury and state-of-the-art property for sale and for rent. We understand how to handle the different stages of your project accordingly.",
    ],
    link: "http://bricsinfrastructure.com/ ",
  },
];

export const agroAllied = [
  {
    img: kaxal,
    heading: "Kaxal Africa Limited",
    text: [
      "PAC Holdings is actively participating in Africa’s agro-allied and FMCG sector through its special project vehicle known as Kaxal Africa Limited – a member of the PanAfrican Capital group with active operating entities within the industry. Kaxal Africa is technologically driven to serve the African market by providing innovative and diversified services and fostering a culture of personal and professional integrity characterized by trust, respect, and a spirit of partnership among employees, clients, and investors. The goal of the brand is achieved through its two subsidiaries namely Webzen Agro Allied Services and Hawaree Africa.",
    ],
    textColor: "#046604",
    // textColor: "#000000",
    link: "https://kaxalafrica.com",
  },
  {
    img: webzen,
    heading: "Webzen Agro Allied Services Limited",
    text: [
      "This is the agro-allied business arm of Kaxal Africa which is focused on providing investment and business support services to organizations in the agribusiness space. We focus on the entire agricultural value chain with particular focus on the downstream (tail end) of the value chain such as processing, distribution, and retailing. Other areas of focus include investment, production, processing, trading, and exporting. Our goal is to be a leading player in the agribusiness industry space and investment destination for individuals and organizations that want to be involved in the agro-allied sector while ensuring food security and sustainable returns on investment for stakeholders or investors.",
    ],
    textColor: "#9ACB34",
    link: "https://webzenagroallied.com ",
  },
  {
    img: hawaree,
    heading: "Hawaree Africa",
    text: [
      "Hawaree Africa is our e-commerce and consumer goods distribution arm. We work with several international and domestic companies across a variety of consumer categories including Food & Snacks, Drinks, Beauty & Personal Care, Sport & Fitness, Agro products, Stationaries and Office Supplies, Games, Electronics & IT, Baby Products & Toys, Services, etc. With the aim to be the most efficient e-commerce platform and distribution company across Africa, our goal is to make brands available and visible at key points of purchase via these channels at competitive prices with top notch prompt deliveries.",
    ],
    textColor: "#F1592A",
    link: "https://hawaree.com",
  },
];

export const renewable = [
  {
    img: gas,
    heading: "Gas Services",
    text: [
      "Our team provides corporate, retail, and bulk services and also provide the final link in the supply chain to all kinds of customers ranging from residential, business, and industrial gas customers. Also, our network of qualified personnel within the country is saddled with the professional responsibility of distributing LPG to our clients.",

      "· Retail Gas Services",
      " · Bulk LPG Supply",
      "· Corporate LPG Services",
      " · Gas Trading",
      " · LPG Cylinder certification",
      "· Gas Distribution",
    ],
    link: "https://tergoenergy.com",
    headingColor: "#474747",
  },
  {
    img: solar,
    heading: "Solar Services",
    text: [
      "Our Solar technologies convert sunlight into electrical energy either through photovoltaic (PV) panels or through mirrors that concentrate solar radiation. To better improve the reach of power supply to our clients, we provide efficient, low-cost, clean energy to homes and businesses by installing mini grids.",

      "· Solar Power Generation",
      "· Solar Battery Sales",
      "· Corporate LPG Services",
      "· Full Solar Installation",
      "· Solar Equipment Servicing",
      "· Solar Street Lighting",
      "· Solar Mini Grid Installation",
    ],
    link: "https://tergoenergy.com",
    headingColor: "#474747",
  },
];

export const technology = [
  {
    img: fintech,
    heading: "Ziltchone Technologies",
    text: [
      "We Care. We Connect. We Create. We are the next generation of the Solutions. Giving you more for less!",
    ],
    link: "https://ziltchone.com",
  },
  {
    img: paysharp,
    heading: "Do More With Paysharp",
    text: [
      "Enjoy the ease of conducting financial transactions such as Airtime Vending, Cash Deposit and Withdrawals Bill Payment and many more services",
    ],
    link: "https://paysharpng.com ",
  },
  {
    img: paysharp,
    heading: "Paysharp Services",
    text: "A Single Platform With Endless Possibilities",
    items: [
      {
        image: airtime,
        text: "Airtime Vending",
      },
      {
        image: cash,
        text: "Cash Withdrawal",
      },
      {
        image: deposit,
        text: "Cash Deposit",
      },
      {
        image: prepaid,
        text: "Prepaid Meter",
      },
      {
        image: money,
        text: "Money Transfer",
      },
      {
        image: subscription,
        text: "Cable Subscription",
      },
    ],
  },
  {
    img: realEstateNew,
    heading: "Real Estate Management",
    text: [
      "ProptyPlus – One of the leading Real Estate Software platform providing the ultimate property search experience and property management",
    ],
    link: "https://proptyplus.com",
  },
  // {
  //   img: fintech,
  //   heading: "FinTech",
  //   text: [
  //     "Providing technology and innovation for financial service delivery",
  //   ],
  // },
  // {
  //   img: technologyServices,
  //   heading: "Managed Technology Services",
  //   text: [
  //     "We are managed service provider (MSP) deliverIng network, application, infrastructure and security through ongoing and regular support. Our team of experts with over 50 years combined experience are eager to help you solve that Technology challenge.",
  //   ],
  // },
  // {
  //   img: smart,
  //   heading: "Smart Creative",
  //   text: [
  //     "There's no limit to what you can get designed at Ziltch1 Smart Designs. Whether you're looking for a spectacular new logo or some stunning flyers or an amazing animation, our talented designers at Ziltch1 Technologies can make it happen. Click on the button below to see our wide range of design services.",

  //     "  · Creative Design",
  //     " · Web Designs Services",
  //     "   · Print Design Services",
  //     "· Product & Merchandise Design Services",
  //     "· UI/UX Design",
  //     "· Animation",
  //   ],
  // },
  // {
  //   img: technologyDistribution,
  //   heading: "Technology Distribution",
  //   text: [
  //     "Development of User-Friendly Applications, Platforms and Solutions, to meet Customer needs & Expectations.",
  //   ],
  // },
  // {
  //   img: mediaEntertainment,
  //   heading: "Media & Entertainment",
  //   text: [
  //     "Ziltch is a key player in Media infrastructure and creative Content Development to promote Africa and Global Culture .",
  //   ],
  //   link: "https://ziltchone.com ",
  // },
];

export const healthcare = [
  {
    img: afrilife,
    heading: "Afrilife",
    text: [
      "We invest across critical healthcare value chains by leveraging innovations and strategic partnerships in Africa.",

      "Afrilife will invest in early stage but predominantly in mid-stage private entities and later-stage public entities (through PPPs) which are attractively valued and have a convincing business model, including their product pipeline, technology, and management.",
    ],
    link: "https://afrilifehealthcare.com",
  },
  {
    img: sage,
    heading: "Sage Diagnostics Services LTD",
    text: [
      "Sage Diagnostics center is a full-fledged diagnostic center inclusive of a molecular lab center to service the growing demand for diagnostics both for occupational health safety and for medical diagnostics requirements to aid treatment.",

      "· Comprehensive wellness packages: Occupational Health screenings (Annual Health Checks, Fit To Fly tests, Medical Fitness Tests etc)",
      " · Comprehensive laboratory, Basic Imaging, Other complimentary tests",
      " · Specialized PCR Tests",
    ],
    link: "https://sagedsl.com",
  },
  {
    img: lifeLine,
    heading: "LifeLine Pharma",
    text: [
      "LIFELINE Pharma was started in the year 2000 by Mr. Prasad Nakhare and Mr. Kiran Khobare are the founders of the organization, and under their leadership, we have created STERIWELL® and STERINCI®.",

      " We are an ISO 9001: 2015 certified firm, would like to introduce STERIWELL® 20 and 40-liter capacity machines that can treat 3 kg to 5.5 kg of waste per 45 minutes. STERIWELL® system is CE certified from a designated European notified body, meeting the standards and compliance to EN ISO 12100: 2010 for safety of machinery design and IEC (International Electro technical Communication) EN 602041: 2006+ A1: 2009. STERIWELL® is also certified with ISO14001: 2015 confirming to the International Standards for effective Environmental Management System (EMS). STERIWELL® is registered under GeM (Government e-Market Place) portal.",
    ],
    //   link: "https://www.ziltchone.com ",
  },
];

export const hospitality = [
  {
    img: blueAmber,
    heading: "BLUE AMBER - Luxury Hotels",
    subHeading: "Plush, Contemporary, Grand, Inspiring.",
    bgColor: "#00AEEF",
    text: [
      "From the charm and longing of an olden era to the modern amenities of today’s flawless high-tech efficiency, the BLUE AMBER - Luxury Hotels brand was designed to stand as an enduring testament to a golden age of warm-hearted hospitality, luxury, and elegance.",
      "We build the hotels, or we refurbish the existing ones with attention to detail, quality, and an exceptional back-of-house. This passion for perfection is set by our leadership through the work and engagement of our Project Managers, designers, project teams, operations teams, and our partners, in order to achieve a truly prestigious and unique property, to convey the necessary qualities that live up to this unique brand proposition.",
      "Firmly we believe that luxury need not to be extravagant; that the highest standards of luxury can be delivered in a sustainable and responsible way.",
      "Blue Amber – Luxury Hotels are to set among the Amber Collection – Hotels & Resorts, the company brand that will be recognized by its versatility to accommodate, from families vacations to corporate business under the same roof, the hotels tend to be located in the leading business district of the cities and group destinations around the world. These hotels feature stylish, contemporary design, abundant meeting facilities and extraordinary restaurants.",
    ],
    link: "https://amberhospitality.com",
    page: false,
  },
  {
    img: luxor,
    heading: "BLUE AMBER - Luxury Hotels",
    subHeading: "Plush, Contemporary, Grand, Inspiring.",
    bgColor: "#E61F2C",
    text: [
      "From the charm and longing of an olden era to the modern amenities of today’s flawless high-tech efficiency, the BLUE AMBER - Luxury Hotels brand was designed to stand as an enduring testament to a golden age of warm-hearted hospitality, luxury, and elegance.",
      " We build the hotels, or we refurbish the existing ones with attention to detail, quality, and an exceptional back-of-house. This passion for perfection is set by our leadership through the work and engagement of our Project Managers, designers, project teams, operations teams, and our partners, in order to achieve a truly prestigious and unique property, to convey the necessary qualities that live up to this unique brand proposition.",
      "Firmly we believe that luxury need not to be extravagant; that the highest standards of luxury can be delivered in a sustainable and responsible way.",
      "Blue Amber – Luxury Hotels are to set among the Amber Collection – Hotels & Resorts, the company brand that will be recognized by its versatility to accommodate, from families vacations to corporate business under the same roof, the hotels tend to be located in the leading business district of the cities and group destinations around the world. These hotels feature stylish, contemporary design, abundant meeting facilities and extraordinary restaurants.",
    ],
    page: false,
  },
  {
    img: residences,
    heading: "RESIDENCES by AMBER",
    subHeading: "Warm, Cozy, Serene",
    bgColor: "#FECC09",
    text: [
      "Our flagship 3-star brand is the ultimate signature in hospitality for the discerning business or leisure traveler looking for a serene and quiet environment. It offers access to a wide range of attractions and facilities, providing guests with comfort and convenience that ensures productivity by day, renewal by night.",
      " Our facilities have been designed to offer you thoughtfully designed rooms and convenient round-the- clock food and beverage options that will not only exceed your expectation but keep the warm afterglow.",
      " When it comes to meetings and celebrations, we offer hybrid, flexible and innovative solutions so that you can find the ideal venue with state-of-the-art equipment to fulfil your unique event vision and goals.",
      "Enjoy complete international standard services as we give you a wonderful treat with our welcoming protocols - our express check-in using stress free cards alongside a welcoming glass of complimentary juice on arrival.",
      "Above all, just simply experience our first-class personalized service with our well-trained personnel always available to serve you throughout your stay.",
      "At Amber Residence, you are always welcome to a world of warmth",
    ],
    link: "https://amberresidenceng.com",
    page: false,
  },
  {
    img: amberCrest,
    heading: "AMBER CREST",
    subHeading: "Spirited, Personal, Unexpected. Adventurous",
    bgColor: "#CDAB6B",
    text: [
      "The AMBER CREST hotels are Designed with timeless standards woven with modern details, AMBER CREST properties are where business meets pleasure. Catering from the independent traveller to the Corporate Client, the perfect balance is present everywhere.",
      "The concept design of AMBER CREST is present in every project as prime physical space, organizational and operational environments to deliver a decisive, efficient, and complete brand experience, was considered at every interaction point in the guest experience. This brand pulls the elements that differentiate it in the market as well as innovations that will enhance and distinguish guest experience.",
      "Our F&B outlets are designed to provide unrivalled guest experience but as well focused on the flowless of the service areas, the bar’s, lounge's have a lifestyle concept where the Interiors and ambience are thoughtfully planned for informal and relaxed moments.",
      "MICE facilities are projected with the ultimate state-of-the-art audio-visual systems and complete meeting and banqueting equipment, providing, and guaranteeing each meetings & events in the AMBER CREST Hotel are as pleasant as they are productive, meeting the highest expectations of our clients.",
    ],
    // link: "https//amberhospitality.com",
    page: false,
  },
  {
    img: eterniti,
    heading: "ETERNITI HOTEL",
    subHeading: "Home-like, Comfortable, Stylish",
    bgColor: "#ED1C24",
    text: [
      "A Brand developed so that our guests now can feel the home touch while they are abroad, ETERNITI Apartments is a new design concept having the essential set of amenities that will be available to today's travelers – mention free WI-FI, complimentary full breakfast, a social area with a contemporaneous decor for evening relaxation, plus the handiness of a fully-equipped kitchen among the other well-known services that are so well established by AMBER COLLECTION – HOTELS & RESORTS",
      " The ETERNITI guests will enjoy the freshness of food and beverage options at the daily complimentary breakfast, a small convenience corner will offer the guest a variety of snacks, upmarket frozen appetizers and grocery items that can be used to prepare lite meals in the apartment. A welcome set of complimentary groceries will be available at their arrival.",
      "Guests can stay fit and have fun at our fitness center and recreational areas. Or just give us your list for grocery shopping service. Laundry services and dry-cleaning services are also available, also our 24/Concierge services",
    ],
    page: false,
  },
  {
    img: steppingStone,
    heading: "STEPPINGSTONE",
    subHeading: "Spirited, Personal, Unexpected. Adventurous",
    bgColor: "#CDAB6B",
    text: [
      "Amber Hospitality Services Limited has developed a special brand together with Amber Collection – Hotels & Resorts a management platform of International Campus Residences, focussing on student housing in top cities across target countries.",
      "The residences are designed to help students enhance their university experience by promoting a residential environment that supports their educational, and personal development.",
      "The built-up communities encourage the students to continue their learning path outside the classroom, the necessary infrastructures have been thought and planned on the student needs such as privacy, convenience, WI-FI, dedicated laundry room, open space to study, like as well a diversity of social, and intellectual spaces to promote the cultural development.",
      "This Brand, will promote the basic services of a normal hospitality operations, by making available 24 hours, 7 days a week Concierge services to help the students in their personal requirements, also cleaning services will be in place for public areas and rooms (this one, only ones a week), also the privacy and security it is something that we take very seriously in all our Residences, the wellbeing of everybody, we consider this is one of our prime services, within the range of available services that we provide.",
    ],
    page: false,
  },
];
