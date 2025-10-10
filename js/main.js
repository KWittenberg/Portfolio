'use strict';

const latestProjects = [
    {
        href: "https://bolta.runasp.net/",
        imageUrl: "images/",
        title: "BoltaShop",
        alt: "BoltaShop",
        year: "2023",
        author: "eCommerce",
        description: "BoltaShop - eCommerce app"
    },
    {
        href: "https://spot.runasp.net/",
        imageUrl: "images/",
        title: "Spot",
        alt: "Spot",
        year: "2025",
        author: "digital signage",
        description: "Spot"
    },
    {
        href: "https://meetups.runasp.net/",
        imageUrl: "images/",
        title: "Meetups",
        alt: "Meetups",
        year: "2025",
        author: "events",
        description: "Meetups"
    }
];

const courses = [
    {
        name: "C# Mastering Course For Intermediates",
        instructor: "Kioomars Jonood, Samaneh Mazidi Sharaf Abadi",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-5ac192cd-afa2-4c34-bc2c-9013851d89b9.jpg",
        image: "images/udemy/UC-5ac192cd-afa2-4c34-bc2c-9013851d89b9.jpg"
    },
    {
        name: "C# Mastering Course For Beginners",
        instructor: "Kioomars Jonood, Samaneh Mazidi Sharaf Abadi",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-1c257a44-998a-4a56-ad94-ff5bf72b2276.jpg",
        image: "images/udemy/UC-1c257a44-998a-4a56-ad94-ff5bf72b2276.jpg"
    },
    {
        name: "Ultimate Clean Code Masterclass for 2025",
        instructor: "Krystyna Slusarczyk",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-66cd04da-09c4-49d0-b90c-68f0e01e2f6e.jpg",
        image: "images/udemy/UC-66cd04da-09c4-49d0-b90c-68f0e01e2f6e.jpg"
    },
    {
        name: "Understanding Semantic Kernel",
        instructor: "Trevoir Williams",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-5bf9c3e5-e878-4b0e-9312-d6527434e2a2.jpg",
        image: "images/udemy/UC-5bf9c3e5-e878-4b0e-9312-d6527434e2a2.jpg"
    },
    {
        name: "Generative AI for .NET Developers with Azure AI Service",
        instructor: "Trevoir Williams",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-dfb14106-684d-449b-98e2-92e8241d24d7.jpg",
        image: "images/udemy/UC-dfb14106-684d-449b-98e2-92e8241d24d7.jpg"
    },
    {
        name: "C# Mastering Course For Professionals",
        instructor: "Kioomars Jonood, Samaneh Mazidi Sharaf Abadi",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-8a2838ea-fa7c-4aa7-9848-7bf6739ebc65.jpg",
        image: "images/udemy/UC-8a2838ea-fa7c-4aa7-9848-7bf6739ebc65.jpg"
    },
    {
        name: "Blazor - The Complete Guide [.NET 9] [2024] [E-commerce]",
        instructor: "Bhrugen Patel",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-8e2cfdf1-20b9-4241-81ac-d1f8ca0e805d.jpg",
        image: "images/udemy/UC-8e2cfdf1-20b9-4241-81ac-d1f8ca0e805d.jpg"
    },
    {
        name: "Master ASP.NET Core Identity: Authentication & Authorization",
        instructor: "Frank Liu",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-a708e254-0f0e-4f70-9964-0cb90eb5a672.jpg",
        image: "images/udemy/UC-a708e254-0f0e-4f70-9964-0cb90eb5a672.jpg"
    },
    {
        name: "Clean Architecture for Beginners: A Practical Guide",
        instructor: "Frank Liu",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-51c4de35-b91c-434e-92a0-ce2a856d861a.jpg",
        image: "images/udemy/UC-51c4de35-b91c-434e-92a0-ce2a856d861a.jpg"
    },
    {
        name: "Blazor Deep Dive - From Beginner to Advanced in .NET 8",
        instructor: "Frank Liu",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-668f3cc3-6dc6-42fe-a770-6f7ecb5fc3c9.jpg",
        image: "images/udemy/UC-668f3cc3-6dc6-42fe-a770-6f7ecb5fc3c9.jpg"
    },
    {
        name: ".NET Core MVC - The Complete Guide 2023 [E-commerce] [.NET8]",
        instructor: "Bhrugen Patel",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-e3b0ec6b-c223-4c4e-b7a6-b98a1c2fd27a.jpg",
        image: "images/udemy/UC-e3b0ec6b-c223-4c4e-b7a6-b98a1c2fd27a.jpg"
    },
    {
        name: "Entity Framework Core - A Full Tour",
        instructor: "Trevoir Williams",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-89b5732c-7900-4408-8f9b-a18881b15bf0.jpg",
        image: "images/udemy/Entity Framework Core - A Full Tour.jpg"
    },
    {
        name: "ASP.NET Core - SOLID and Clean Architecture",
        instructor: "Trevoir Williams",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-e7e2aa2e-149d-425c-835b-af8bec12bcb5.jpg",
        image: "images/udemy/ASP.NET Core - SOLID and Clean Architecture.jpg"
    },
    {
        name: "Learn GraphQL with .Net Core For Absolute Beginners",
        instructor: "Asfend Yar Hamid",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-0d7d5924-ecb3-443a-aacd-f80d53688e6a.jpg",
        image: "images/udemy/Learn GraphQL with .Net Core For Absolute Beginners.jpg"
    },
    {
        name: "RESTful Web API - The Complete Guide (.NET7 API) Part 2",
        instructor: "Bhrugen Patel",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-2234b8f7-fb5c-4310-bfc0-27d0fd97418f.jpg",
        image: "images/udemy/RESTful Web API - The Complete Guide (.NET7 API) Part 2.jpg"
    },
    {
        name: "ChatGPT for .NET developers",
        instructor: "Darek Kacban",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-a80b0d3a-f840-485f-bb32-ab0b2a802f43.jpg",
        image: "images/udemy/ChatGPT for .NET developers.jpg"
    },
    {
        name: "Make an E-Commerce Website with Blazor",
        instructor: "Patrick God",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-b3127d9a-f51a-4d9d-9e98-6b5ed750b068.jpg",
        image: "images/udemy/Make an E-Commerce Website with Blazor.jpg"
    },
    {
        name: "Unit Testing for C# Developers",
        instructor: "Mosh Hamedani",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-78cc5d5e-a0b0-419f-aab0-686968b3c66e.jpg",
        image: "images/udemy/Unit Testing for C Developers.jpg"
    },
    {
        name: "Mastering SQL Server RDS on AWS",
        instructor: "Emar Morrison",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-13df86f2-7ed5-4617-8fa8-cb2a995f71c9.jpg",
        image: "images/udemy/Mastering SQL Server RDS on AWS.jpg"
    },
    {
        name: "MySQL Database Development Mastery",
        instructor: "Trevoir Williams",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-c4532d5b-c8db-44aa-bd3c-c7cc81611791.jpg",
        image: "images/udemy/MySQL Database Development Mastery.jpg"
    },
    {
        name: "Vue JS 3: The Composition API (Inc Script Setup, TypeScript)",
        instructor: "Lachlan Miller",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-f5d8ca86-2911-4a64-a13e-234dc9732000.jpg",
        image: "images/udemy/Vue JS 3 - The Composition API.jpg"
    },
    {
        name: "TypeScript for Professionals - 2023 Edition",
        instructor: "Basarat Ali Syed",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-bea7c56d-e4a3-443d-99cb-8916cf74442d.jpg",
        image: "images/udemy/TypeScript for Professionals - 2023 Edition.jpg"
    },
    {
        name: "The Fastest Javascript Course: From ZERO to HERO",
        instructor: "Ivan Lourenco Gomes",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-7a481cac-e1a1-45d1-9e19-986b18e2d8ee.jpg",
        image: "images/udemy/The Fastest Javascript Course From ZERO to HERO.jpg"
    },
    {
        name: "LINQ Tutorial: Master the Key C# Library",
        instructor: "Krystyna Slusarczyk",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-c63a29b6-c578-4c9c-9bd9-a2f9391d3f37.jpg",
        image: "images/udemy/Master the Key C Library.jpg"
    },
    {
        name: "Advanced Topics in C#",
        instructor: "Dmitri Nesteruk",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-085faa65-8d7f-40a2-a44a-86548902358b.jpg",
        image: "images/udemy/Advanced Topics in C.jpg"
    },
    {
        name: "C# Advanced Topics - The Next Logical Step",
        instructor: "Tod Vachev",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-9f658559-4f52-473a-a799-3da967117d8f.jpg",
        image: "images/udemy/C Advanced Topics - The Next Logical Step.jpg"
    },
    {
        name: "C# Developers: Double Your Coding Speed with Visual Studio",
        instructor: "Mosh Hamedani",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-af98a529-7aca-4655-86a4-cef0f8832165.jpg",
        image: "images/udemy/Double Your Coding Speed with Visual Studio.jpg"
    },
    {
        name: "C# Intermediate: Classes, Interfaces and OOP",
        instructor: "Mosh Hamedani",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-3365e84c-2009-4885-b0a4-5f5c426db1be.jpg",
        image: "images/udemy/C Intermediate Classes, Interfaces and OOP.jpg"
    },
    {
        name: "RESTful Web API - The Complete Guide (.NET7 API) Part 1",
        instructor: "Bhrugen Patel",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-9c037745-8e34-4612-b365-83bf2296320a.jpg",
        image: "images/udemy/RESTful Web API - The Complete Guide (.NET7 API).jpg"
    },
    {
        name: ".NET 7 Web API & Entity Framework Jumpstart",
        instructor: "Patrick God",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-cbf7c8dc-30f6-4fb1-81c9-f1106377b747.jpg",
        image: "images/udemy/NET 7 Web API & Entity Framework Jumpstart.jpg"
    },
    {
        name: "Azure DevOps and Continuous Delivery With Git",
        instructor: "Trevoir Williams",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-7032393a-fd2c-4cb7-922c-fd1235d3f307.jpg",
        image: "images/udemy/Azure DevOps and Continuous Delivery With Git.jpg"
    },
    {
        name: "ASP.NET Core - Cross-Platform Development",
        instructor: "Trevoir Williams",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-3f0fe1d1-2969-4ef7-b896-69e49ad38cda.jpg",
        image: "images/udemy/ASP.NET Core 7 MVC - Cross-Platform Development.jpg"
    }
];

const certificatesDometrain = [
    {
        name: "From Zero to Hero: REST APIs in .NET",
        instructor: "Nick Chapsas",
        imageUrl: "https://courses.dometrain.com/certificates/fxlsfnxmdb",
        image: "images/dometrain/fxlsfnxmdb.jpg"
    },
    {
        name: "Getting Started: C#",
        instructor: "Nick Cosentino",
        imageUrl: "https://courses.dometrain.com/certificates/sy9rbh15zy",
        image: "images/dometrain/sy9rbh15zy.jpg"
    }
];

const certificatesTimCorey = [
    {
        name: "Hands On Refactoring",
        instructor: "TimCorey",
        imageUrl: "https://kwittenberg.github.io/Portfolio/images/TimCorey/cert_gcdmddcl.png",
        image: "images/TimCorey/cert_gcdmddcl.png"
    }
];

const algebra = [
    { href: "images/algebra/01.jpg", title: "Uvod u moderni razvoj Web aplikacija", alt: "Uvod u moderni razvoj Web aplikacija" },
    { href: "images/algebra/02.jpg", title: "C# i .NET Framework_osnovno koristenje", alt: "C# i .NET Framework_osnovno koristenje" },
    { href: "images/algebra/03.jpg", title: "Osnove baza podataka", alt: "Osnove baza podataka" },
    { href: "images/algebra/04.jpg", title: "C# i .NET Framework_napredno koristenje", alt: "C# i .NET Framework_napredno koristenje" },
    { href: "images/algebra/05.jpg", title: "LINQ", alt: "LINQ" },
    { href: "images/algebra/06.jpg", title: "ASP.NET Core MVC i Visual Studio", alt: "ASP.NET Core MVC i Visual Studio" },
    { href: "images/algebra/07.jpg", title: "Unit Testing", alt: "Unit Testing" },
    { href: "images/algebra/08.jpg", title: "ASP.NET Core MVC u praksi_Entity Framework", alt: "ASP.NET Core MVC u praksi_Entity Framework" },
    { href: "images/algebra/09.jpg", title: "ASP.NET Core MVC u praksi_Izrada web trgovine", alt: "ASP.NET Core MVC u praksi_Izrada web trgovine" },
    { href: "images/algebra/10.jpg", title: "Web API", alt: "Web API" }
];

const certificatesHackerRank = [
    {
        name: "C# (Basic)",
        url: "https://www.hackerrank.com/certificates/73bbb1bb1b3a",
        image: "images/HackerRank/73bbb1bb1b3a.png"
    }
];

const certificatesTestDome = [
    {
        href: "https://www.testdome.com/certificates/16833f2928fc46d8895b22d89d83d8d3",
        name: "Krešimir Wittenberg",
        testName: "C# AND .NET",
        logo: "TestDome Certificate",
        stampClass: "gold",
        image: "images/testdome/16833f2928fc46d8895b22d89d83d8d3.png"
    },
    {
        href: "https://www.testdome.com/certificates/6bb8a052b43e4792865ec9b98daf49fe",
        name: "Krešimir Wittenberg",
        testName: "Azure and DevOps",
        logo: "TestDome Certificate",
        stampClass: "gold",
        image: "images/testdome/6bb8a052b43e4792865ec9b98daf49fe.png"
    },
    {
        href: "https://www.testdome.com/certificates/bce69ecd332b4200afad896d6f4e988c",
        name: "Krešimir Wittenberg",
        testName: "ASP.NET (Core) MVC, HTML/CSS, JavaScript, C#, and SQL",
        logo: "TestDome Certificate",
        stampClass: "gold",
        image: "images/testdome/bce69ecd332b4200afad896d6f4e988c.png"
    },
    {
        href: "https://www.testdome.com/certificates/4c3f4dc0aff64f5daef482d0b35894d4",
        name: "Krešimir Wittenberg",
        testName: "C# and .NET",
        logo: "TestDome Certificate",
        stampClass: "gold",
        image: "images/testdome/4c3f4dc0aff64f5daef482d0b35894d4.png"
    },
    {
        href: "https://www.testdome.com/certificates/760fd22053244dcf8682cb082ebfea4a",
        name: "Krešimir Wittenberg",
        testName: "C#, MS SQL Server, and SQL",
        logo: "TestDome Certificate",
        stampClass: "gold",
        image: "images/testdome/760fd22053244dcf8682cb082ebfea4a.png"
    },
    {
        href: "https://www.testdome.com/certificates/08bf6cc5ccb646409dd6d3d48a57c0f8",
        name: "Krešimir Wittenberg",
        testName: "C#",
        logo: "TestDome Certificate",
        stampClass: "gold",
        image: "images/testdome/08bf6cc5ccb646409dd6d3d48a57c0f8.png"
    },
    {
        href: "https://www.testdome.com/certificates/b1ee11ef88944f029b6279df4b73e8ed",
        name: "Krešimir Wittenberg",
        testName: "REST API",
        logo: "TestDome Certificate",
        stampClass: "gold",
        image: "images/testdome/b1ee11ef88944f029b6279df4b73e8ed.png"
    },
    {
        href: "https://www.testdome.com/certificates/74415868c0d54922b4dd786a73e1d7cb",
        name: "Krešimir Wittenberg",
        testName: "HTML/CSS",
        logo: "TestDome Certificate",
        stampClass: "gold",
        image: "images/testdome/74415868c0d54922b4dd786a73e1d7cb.png"
    },
    {
        href: "https://www.testdome.com/certificates/2d4a16493915489c9a5613293a5c463b",
        name: "Krešimir Wittenberg",
        testName: "JavaScript",
        logo: "TestDome Certificate",
        stampClass: "gold",
        image: "images/testdome/2d4a16493915489c9a5613293a5c463b.png"
    },
    {
        href: "https://www.testdome.com/certificates/09fcf3aad1634a7f9ba02e0bf84fdd5b",
        name: "Krešimir Wittenberg",
        testName: "SQL",
        logo: "TestDome Certificate",
        stampClass: "gold",
        image: "images/testdome/09fcf3aad1634a7f9ba02e0bf84fdd5b.png"
    },
    {
        href: "https://www.testdome.com/certificates/2855c20322924623bcde707e7ecfbeeb",
        name: "Krešimir Wittenberg",
        testName: "MongoDB",
        logo: "TestDome Certificate",
        stampClass: "gold",
        image: "images/testdome/2855c20322924623bcde707e7ecfbeeb.png"
    },
    {
        href: "https://www.testdome.com/certificates/992d811abfc44a8b8a061a5140603520",
        name: "Krešimir Wittenberg",
        testName: "Git",
        logo: "TestDome Certificate",
        stampClass: "gold",
        image: "images/testdome/992d811abfc44a8b8a061a5140603520.png"
    },
    {
        href: "https://www.testdome.com/certificates/b6423c12cf954909a9f067057d0d793a",
        name: "Krešimir Wittenberg",
        testName: "Azure",
        logo: "TestDome Certificate",
        stampClass: "gold",
        image: "images/testdome/b6423c12cf954909a9f067057d0d793a.png"
    },
    {
        href: "https://www.testdome.com/certificates/824471e84c4449668dfc07b2f66b131b",
        name: "Krešimir Wittenberg",
        testName: "WordPress",
        logo: "TestDome Certificate",
        stampClass: "gold",
        image: "images/testdome/824471e84c4449668dfc07b2f66b131b.png"
    },
    {
        href: "https://www.testdome.com/certificates/73395701398a4741b807819c46860044",
        name: "Krešimir Wittenberg",
        testName: "C# and .NET",
        logo: "TestDome Certificate",
        stampClass: "silver",
        image: "images/testdome/73395701398a4741b807819c46860044.png"
    },
    {
        href: "https://www.testdome.com/certificates/3ffc240f7f654a859375ef1b3b2e6cff",
        name: "Krešimir Wittenberg",
        testName: "HTML/CSS",
        logo: "TestDome Certificate",
        stampClass: "silver",
        image: "images/testdome/3ffc240f7f654a859375ef1b3b2e6cff.png"
    }
];

const boltaShop = [
    { href: "images/BoltaShop/01-home-product.jpg", title: "BoltaShop - Home Page and Product page - Client side", alt: "BoltaShop - Home Page and Product page - Client side" },
    { href: "images/BoltaShop/02-home-product.jpg", title: "BoltaShop - Home Page and Shop page - Client side", alt: "BoltaShop - Home Page and Shop page - Client side" },
    { href: "images/BoltaShop/02-product.jpg", title: "BoltaShop - Product page - Client side", alt: "BoltaShop - Product page - Client side" },
    { href: "images/BoltaShop/02-blog.png", title: "BoltaShop - Blog Page - Client and Admin side", alt: "BoltaShop - Blog Page - Client and Admin side" },
    { href: "images/BoltaShop/03-hero.jpg", title: "BoltaShop - Hero Page - Client and Admin side", alt: "BoltaShop - Hero Page - Client and Admin side" },
    { href: "images/BoltaShop/04-product.jpg", title: "BoltaShop - Product Page - Admin side", alt: "BoltaShop - Product Page - Admin side" },
    { href: "images/BoltaShop/registration.jpg", title: "BoltaShop - Registration", alt: "BoltaShop - Registration" },
    { href: "images/BoltaShop/login.jpg", title: "BoltaShop - Login", alt: "BoltaShop - Login" }
];

const boltaShopAdmin = [
    { href: "images/BoltaShop/admin-dashboard.jpg", title: "Dashboard", alt: "Dashboard" },
    { href: "images/BoltaShop/admin-filemanager.jpg", title: "File Manager", alt: "File Manager" },
    { href: "images/BoltaShop/admin-product.jpg", title: "Product", alt: "Product" },
    { href: "images/BoltaShop/admin-quickemail.jpg", title: "Quick Email", alt: "Quick Email" },
    { href: "images/BoltaShop/admin-blog.jpg", title: "Blog", alt: "Blog" },
    { href: "images/BoltaShop/admin-blog02.jpg", title: "Blog Add-Edit", alt: "Blog Add-Edit" },
    { href: "images/BoltaShop/admin-todo.jpg", title: "ToDo", alt: "ToDo" },
    { href: "images/BoltaShop/admin-category01.jpg", title: "Category", alt: "Category" },
    { href: "images/BoltaShop/admin-category02.jpg", title: "Category - Add & Edit", alt: "Category - Add & Edit" },
    { href: "images/BoltaShop/admin-category03.jpg", title: "Category - Delete", alt: "Category - Delete" }
];

const boltaBooks = [
    {
        href: "https://bolta.runasp.net/product/2b4f45d7-3ce7-4a81-4757-08dce2f7290b",
        imageUrl: "images/Bolta/2013Tekic.jpg",
        title: "Tekić",
        alt: "Tekić",
        year: "2013",
        author: "Tomislav Wittenberg",
        description: "U središnjem dijelu Požeštine, kojeg još Rimljani prozvaše 'Zlatnom dolinom – Valis aurea', sjeverno zapadno od sela Jakšića, smjestilo se selo Tekić."
    },
    {
        href: "https://bolta.runasp.net/product/a44a7912-3249-44bd-4756-08dce2f7290b",
        imageUrl: "images/Bolta/2012Smotra.jpg",
        title: "Smotra",
        alt: "Smotra",
        year: "2012",
        author: "Tomislav Wittenberg",
        description: "Velika mi je čast i zadovoljstvo što mi je povjereno uređivanje ovog broja koji je posvećen uglavnom Požetini. Odmah po protjerivanju Turaka osim vojničkih posada doseljavaju i Nijemci i Austrijanci."
    },
    {
        href: "https://bolta.runasp.net/product/bc1c2b09-527c-4931-4755-08dce2f7290b",
        imageUrl: "images/Bolta/2011Brestovac.jpg",
        title: "Brestovac",
        alt: "Brestovac",
        year: "2011",
        author: "Tomislav Wittenberg",
        description: "Za prostor omeđen bilom planina Požeške Gore - Psunja i Papuka zapadno od Požege, najlogičniji mi je naziv Zapadna Vrata Požeštine. Na cestovnom ulazu i izlazu tog prostora dominira mjesto Brestovac pa otud i naslov ‘BRESTOVAC - ZAPADNA VRATA POŽEŠTINE’."
    },
    {
        href: "https://bolta.runasp.net/product/764a77ad-5fe6-456d-4754-08dce2f7290b",
        imageUrl: "images/Bolta/2009AlmanahGimnazije.jpg",
        title: "Almanah Gimnazije",
        alt: "Almanah Gimnazije",
        year: "2009",
        author: "Tomislav Wittenberg",
        description: "Sam grad Požega imao je te 1948. godine 8.544 stanovnika pa je i priliv od preko jedne tisuće gimnazijalaca imao itekako odraza na sveukupan život u gradu. Promet uglavnom željeznicom ili konjskim zapregama."
    },
    {
        href: "https://bolta.runasp.net/product/df5fb394-1420-40d0-4753-08dce2f7290b",
        imageUrl: "images/Bolta/2009100GodinaDVDBuk.jpg",
        title: "100 Godina DVD Buk",
        alt: "100 Godina DVD Buk",
        year: "2009",
        author: "Tomislav Wittenberg",
        description: "Prvo osnovano vatrogasno društvo u Požeštini koje nije imalo sjedište u općinskom središtu je DVD Buk, osnovano daleke 1909. godine za naselja: Buk, Svilna, Resnik, Mihaljevci i Tulnik."
    },
    {
        href: "https://bolta.runasp.net/product/221e2072-0b6e-4de3-4752-08dce2f7290b",
        imageUrl: "images/Bolta/2008Vetovo.jpg",
        title: "Vetovo",
        alt: "Vetovo",
        year: "2008",
        author: "Tomislav Wittenberg",
        description: "Stiješnjena između tri centra: Kutjeva, Kaptola i Jakšića, župa ili bolje rečeno područje župe Vetovo, već stoljećima odolijeva kao svojevrstan ‘kuglager’ u nastalom trenju, kako od silnica ovih centara, tako od pritiska sučeljavanja Papuka i Krndije te južne ravne plohe - plodne ravnice."
    },
    {
        href: "https://bolta.runasp.net/product/9bccbd4d-da53-4794-4751-08dce2f7290b",
        imageUrl: "images/Bolta/2007OsamGeneracijaThallera.jpg",
        title: "Osam Generacija Thallera",
        alt: "Osam Generacija Thallera",
        year: "2007",
        author: "Tomislav Wittenberg",
        description: "Monografija OSAM GENERACIJA THALLERA ne samo izuzetna po formi i sadržaju, nego i jedinstvena po obradi."
    },
    {
        href: "https://bolta.runasp.net/product/09875291-e78d-40ab-4750-08dce2f7290b",
        imageUrl: "images/Bolta/2004PutopisneImpresije.jpg",
        title: "Putopisne Impresije",
        alt: "Putopisne Impresije",
        year: "2004",
        author: "Branko Živković",
        description: "Putopisne impresije Branka Živković su plod zajedničkog putovanja s Matkom Peić u Španjolsku i Pariz."
    },
    {
        href: "https://bolta.runasp.net/product/4db9bcc9-8ab0-4c74-474f-08dce2f7290b",
        imageUrl: "images/Bolta/2004Pjesme.jpg",
        title: "Pjesme",
        alt: "Pjesme",
        year: "2004",
        author: "Vladimir Hip",
        description: "Mladi pjesnik Vladimir Hip realna je osoba koja razmišlja i osjeća bilo i ritam svijeta u kojem živi."
    },
    {
        href: "https://bolta.runasp.net/product/e5cbd3e0-745f-4cec-474e-08dce2f7290b",
        imageUrl: "images/Bolta/2002SesvetackiKrajUSrcuPoljadije.jpg",
        title: "Sesvetački Kraj U Srcu Poljadije",
        alt: "Sesvetački Kraj U Srcu Poljadije",
        year: "2002",
        author: "Tomislav Wittenberg",
        description: "Veliki je broj pjesnika i putopisaca opisalo ili opjevalo Požešku dolinu sve od Rimljana do današnjih dana."
    },
    {
        href: "https://bolta.runasp.net/product/53ad259d-0b71-482d-474d-08dce2f7290b",
        imageUrl: "images/Bolta/1998Puvarija.jpg",
        title: "Puvarija",
        alt: "Puvarija",
        year: "1998",
        author: "Tomislav Wittenberg",
        description: "Prva cjelovita obrada sjeverno-zapadnog dijela Dilj-gore i naselja na diljskim padinama, od srednjeg vijeka do današnjih dana."
    },
    {
        href: "https://bolta.runasp.net/product/b172a974-4716-41e3-474c-08dce2f7290b",
        imageUrl: "images/Bolta/1997Rudina.jpg",
        title: "Rudina",
        alt: "Rudina",
        year: "1997",
        author: "Tomislav Wittenberg",
        description: "Rudina je bila centar ili bolje rečeno središte centralne Slavonije u kojoj se spaja sve ono najbolje toga vremena."
    },
    {
        href: "https://bolta.runasp.net/product/9c53475a-9e1a-45d8-474b-08dce2f7290b",
        imageUrl: "images/Bolta/1996GrobljaPozeskeDoline.jpg",
        title: "Groblja Požeške Doline",
        alt: "Groblja Požeške Doline",
        year: "1996",
        author: "Tomislav Wittenberg",
        description: "Jedinstvena publikacija o grobljima Požeške doline, odnosno bivšeg kotara i općine Požega."
    }
];




function loaderPage() {
    $(".fh5co-loader").fadeOut("slow");
};

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function fullHeight() {

    if (!isMobile.any()) {
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
        });
    }
};

function parallax() {
    $(window).stellar();
};

function contentWayPoint() {
    var i = 0;
    $('.animate-box').waypoint(function (direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

            i++;

            $(this.element).addClass('item-animate');
            setTimeout(function () {

                $('body .animate-box.item-animate').each(function (k) {
                    var el = $(this);
                    setTimeout(function () {
                        var effect = el.data('animate-effect');
                        if (effect === 'fadeIn') {
                            el.addClass('fadeIn animated-fast');
                        } else if (effect === 'fadeInLeft') {
                            el.addClass('fadeInLeft animated-fast');
                        } else if (effect === 'fadeInRight') {
                            el.addClass('fadeInRight animated-fast');
                        } else {
                            el.addClass('fadeInUp animated-fast');
                        }

                        el.removeClass('item-animate');
                    }, k * 100, 'easeInOutExpo');
                });

            }, 50);

        }

    }, { offset: '85%' });
};

function goToTop() {
    $('.js-gotop').on('click', function (event) {

        event.preventDefault();

        $('html, body').animate({
            scrollTop: $('html').offset().top
        }, 500, 'easeInOutExpo');

        return false;
    });

    $(window).scroll(function () {

        var $win = $(window);
        if ($win.scrollTop() > 200) {
            $('.js-top').addClass('active');
        } else {
            $('.js-top').removeClass('active');
        }

    });
};

function pieChart() {
    $('.chart').easyPieChart({
        scaleColor: false,
        lineWidth: 4,
        lineCap: 'butt',
        barColor: '#FF9000',
        trackColor: "#f5f5f5",
        size: 200,
        animate: 1000
    });
};

function skillsWayPoint() {
    if ($('#fh5co-skills').length > 0) {
        $('#fh5co-skills').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated')) {
                setTimeout(pieChart, 400);
                $(this.element).addClass('animated');
            }
        }, { offset: '90%' });
    }
};



/* Populate */
function populateCourses() {
    const courseContainer = document.getElementById("course-container");

    courses.forEach(course => {
        const courseDiv = document.createElement("div");
        const instructorSpan = document.createElement("span");
        const courseLink = document.createElement("a");

        instructorSpan.textContent = course.instructor;
        courseLink.textContent = course.name;
        courseLink.href = course.imageUrl;
        courseLink.target = "_blank";

        courseDiv.appendChild(instructorSpan);
        courseDiv.appendChild(document.createTextNode(": "));
        courseDiv.appendChild(courseLink);
        courseDiv.appendChild(document.createElement("br"));

        courseContainer.appendChild(courseDiv);
    });
}

function populateDometrain() {
    const courseDometrain = document.getElementById("certificateDometrain");

    certificatesDometrain.forEach(course => {
        const courseDiv = document.createElement("div");
        const instructorSpan = document.createElement("span");
        const courseLink = document.createElement("a");

        instructorSpan.textContent = course.instructor;
        courseLink.textContent = course.name;
        courseLink.href = course.imageUrl;
        courseLink.target = "_blank";

        courseDiv.appendChild(instructorSpan);
        courseDiv.appendChild(document.createTextNode(": "));
        courseDiv.appendChild(courseLink);
        courseDiv.appendChild(document.createElement("br"));

        courseDometrain.appendChild(courseDiv);
    });
}

function populateTimCorey() {
    const courseTimCorey = document.getElementById("certificateTimCorey");

    certificatesTimCorey.forEach(course => {
        const courseDiv = document.createElement("div");
        const instructorSpan = document.createElement("span");
        const courseLink = document.createElement("a");

        instructorSpan.textContent = course.instructor;
        courseLink.textContent = course.name;
        courseLink.href = course.imageUrl;
        courseLink.target = "_blank";

        courseDiv.appendChild(instructorSpan);
        courseDiv.appendChild(document.createTextNode(": "));
        courseDiv.appendChild(courseLink);
        courseDiv.appendChild(document.createElement("br"));

        courseTimCorey.appendChild(courseDiv);
    });
}

function populateHackerRank() {
    var certificateList = document.getElementById("certificateHackerRank");

    certificatesHackerRank.forEach(function (certificate) {
        var certificateLink = document.createElement("a");
        certificateLink.setAttribute("href", certificate.url);
        certificateLink.setAttribute("target", "_blank");

        var certificateName = document.createElement("span");
        certificateName.classList.add("hackerrank-certificate-name");
        certificateName.textContent = certificate.name;

        var space = document.createElement("span");
        space.textContent = " | ";
        space.style.color = "black";

        certificateLink.appendChild(certificateName);
        certificateLink.appendChild(space);

        certificateList.appendChild(certificateLink);
    });
}

function populateTestDome() {
    var certificateList = document.getElementById("certificateList");

    certificatesTestDome.forEach(function (certificate) {
        var certificateLink = document.createElement("a");
        certificateLink.setAttribute("href", certificate.href);
        certificateLink.setAttribute("target", "_blank");

        var certificateTestName = document.createElement("span");
        certificateTestName.classList.add("testdome-certificate-test-name");
        certificateTestName.textContent = certificate.testName;

        var space = document.createElement("span");
        space.textContent = " | ";
        space.style.color = "black";

        certificateLink.appendChild(certificateTestName);
        certificateLink.appendChild(space);

        certificateList.appendChild(certificateLink);
    });
}


/* Carousel */
function createCarouselProjects() {
    const carouselContainer = document.createElement("div");
    carouselContainer.classList.add("owl-carousel", "owl-theme");

    latestProjects.forEach(function (image) {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-md-12");

        const fh5coDiv = document.createElement("div");
        fh5coDiv.classList.add("fh5co-blog", "animate-box");

        const link = document.createElement("a");
        link.setAttribute("href", image.href);
        link.setAttribute("target", "_blank");
        link.classList.add("blog-bg");
        link.style.backgroundImage = `url(${image.imageUrl})`;

        const blogTextDiv = document.createElement("div");
        blogTextDiv.classList.add("blog-text");

        //const span = document.createElement("span");
        //span.classList.add("posted_on");
        //span.textContent = image.year;

        const h3 = document.createElement("h3");
        const h3Link = document.createElement("a");
        h3Link.setAttribute("href", image.href);
        h3Link.setAttribute("target", "_blank");
        h3Link.textContent = image.title;
        h3.appendChild(h3Link);

        const p = document.createElement("p");
        p.textContent = image.description;
        p.style.fontSize = "70%";

        const ul = document.createElement("ul");
        ul.classList.add("stuff");
        ul.style.fontSize = "70%";

        const li1 = document.createElement("li");
        li1.style.color = "darkgray";
        li1.textContent = image.year;

        const li2 = document.createElement("li");
        li2.textContent = image.author;

        ul.appendChild(li1);
        ul.appendChild(li2);

        //blogTextDiv.appendChild(span);
        blogTextDiv.appendChild(h3);
        blogTextDiv.appendChild(p);
        blogTextDiv.appendChild(ul);

        fh5coDiv.appendChild(link);
        fh5coDiv.appendChild(blogTextDiv);

        colDiv.appendChild(fh5coDiv);
        carouselContainer.appendChild(colDiv);
    });

    document.getElementById("carouselProjects").appendChild(carouselContainer);
}

function createCarouselAlgebra() {
    var carouselContainer = document.createElement("div");
    carouselContainer.classList.add("owl-carousel", "owl-theme");

    algebra.forEach(function (image) {
        var link = document.createElement("a");
        link.setAttribute("href", image.href);
        link.setAttribute("data-lightbox", "algebra");
        link.setAttribute("data-title", image.title);

        var img = document.createElement("img");
        img.setAttribute("src", image.href);
        img.setAttribute("alt", image.alt);

        link.appendChild(img);
        carouselContainer.appendChild(link);
    });

    document.getElementById("carouselAlgebra").appendChild(carouselContainer);
}

function createCarouselUdemy() {
    var carouselContainer = document.createElement("div");
    carouselContainer.classList.add("owl-carousel", "owl-theme");

    courses.forEach(function (course) {
        var link = document.createElement("a");
        link.setAttribute("href", course.image);
        link.setAttribute("data-lightbox", "udemy");
        link.setAttribute("data-title", course.name);

        var img = document.createElement("img");
        img.setAttribute("src", course.image);
        img.setAttribute("alt", course.name);

        link.appendChild(img);
        carouselContainer.appendChild(link);
    });

    document.getElementById("carouselUdemy").appendChild(carouselContainer);
}

function createCarouselDometrain() {
    var carouselContainer = document.createElement("div");
    carouselContainer.classList.add("owl-carousel", "owl-theme");

    certificatesDometrain.forEach(function (course) {
        var link = document.createElement("a");
        link.setAttribute("href", course.image);
        link.setAttribute("data-lightbox", "dometrain");
        link.setAttribute("data-title", course.name);

        var img = document.createElement("img");
        img.setAttribute("src", course.image);
        img.setAttribute("alt", course.name);

        link.appendChild(img);
        carouselContainer.appendChild(link);
    });

    document.getElementById("carouselDometrain").appendChild(carouselContainer);
}

function createCarouselTimCorey() {
    var carouselContainer = document.createElement("div");
    carouselContainer.classList.add("owl-carousel", "owl-theme");

    certificatesTimCorey.forEach(function (course) {
        var link = document.createElement("a");
        link.setAttribute("href", course.image);
        link.setAttribute("data-lightbox", "timcorey");
        link.setAttribute("data-title", course.name);

        var img = document.createElement("img");
        img.setAttribute("src", course.image);
        img.setAttribute("alt", course.name);

        link.appendChild(img);
        carouselContainer.appendChild(link);
    });

    document.getElementById("carouselTimCorey").appendChild(carouselContainer);
}

function createCarouselHackerRank() {
    var carouselContainer = document.createElement("div");
    carouselContainer.classList.add("owl-carousel", "owl-theme");

    certificatesHackerRank.forEach(function (course) {
        var link = document.createElement("a");
        link.setAttribute("href", course.image);
        link.setAttribute("data-lightbox", "hackerrank");
        link.setAttribute("data-title", course.name);

        var img = document.createElement("img");
        img.setAttribute("src", course.image);
        img.setAttribute("alt", course.name);

        link.appendChild(img);
        carouselContainer.appendChild(link);
    });

    document.getElementById("carouselHackerRank").appendChild(carouselContainer);
}

function createCarouselTestDomeBadge() {
    var carouselContainer = document.createElement("div");
    carouselContainer.classList.add("owl-carousel", "owl-theme");
    carouselContainer.setAttribute("align", "center");

    certificatesTestDome.forEach(function (certificatesTestDome) {
        var link = document.createElement("a");
        link.setAttribute("href", certificatesTestDome.href);
        link.target = "_blank";
        link.classList.add("testdome-certificate-stamp", certificatesTestDome.stampClass);

        var nameSpan = document.createElement("span");
        nameSpan.classList.add("testdome-certificate-name");
        nameSpan.textContent = certificatesTestDome.name;

        var testNameSpan = document.createElement("span");
        testNameSpan.classList.add("testdome-certificate-test-name");
        testNameSpan.textContent = certificatesTestDome.testName;

        var logoSpan = document.createElement("span");
        logoSpan.classList.add("testdome-certificate-card-logo");
        logoSpan.textContent = "TestDome Certificate";

        link.appendChild(nameSpan);
        link.appendChild(testNameSpan);
        link.appendChild(logoSpan);

        carouselContainer.appendChild(link);
    });

    document.getElementById("carouselTestDomeBadge").appendChild(carouselContainer);
}

function createCarouselTestDome() {
    var carouselContainer = document.createElement("div");
    carouselContainer.classList.add("owl-carousel", "owl-theme");

    certificatesTestDome.forEach(function (certificatesTestDome) {
        var link = document.createElement("a");
        link.setAttribute("href", certificatesTestDome.image);
        link.setAttribute("data-lightbox", "testdome");
        link.setAttribute("data-title", certificatesTestDome.testName);

        var img = document.createElement("img");
        img.setAttribute("src", certificatesTestDome.image);
        img.setAttribute("alt", certificatesTestDome.testName);

        link.appendChild(img);
        carouselContainer.appendChild(link);
    });

    document.getElementById("carouselTestDome").appendChild(carouselContainer);
}

function createCarouselBoltaShop() {
    var carouselContainer = document.createElement("div");
    carouselContainer.classList.add("owl-carousel", "owl-theme");

    boltaShop.forEach(function (image) {
        var link = document.createElement("a");
        link.setAttribute("href", image.href);
        link.setAttribute("data-lightbox", "boltaShop");
        link.setAttribute("data-title", image.title);

        var img = document.createElement("img");
        img.setAttribute("src", image.href);
        img.setAttribute("alt", image.title);

        link.appendChild(img);
        carouselContainer.appendChild(link);
    });

    document.getElementById("carouselBoltaShop").appendChild(carouselContainer);
}

function createCarouselBoltaShopAdmin() {
    const carouselContainer = document.createElement("div");
    carouselContainer.classList.add("owl-carousel", "owl-theme");

    boltaShopAdmin.forEach(function (image) {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-md-12", "text-center", "col-padding", "animate-box");

        const innerDiv = document.createElement("div");
        innerDiv.classList.add("text-center", "col-padding", "animate-box");

        const link = document.createElement("a");
        link.setAttribute("href", image.href);
        link.classList.add("work");
        link.setAttribute("data-lightbox", "boltaShopAdmin");
        link.setAttribute("data-title", image.title);

        const img = document.createElement("img");
        img.setAttribute("src", image.href);
        img.setAttribute("alt", image.alt);

        const descDiv = document.createElement("div");
        descDiv.classList.add("desc");

        const h3 = document.createElement("h3");
        h3.textContent = image.title;
        h3.style.position = "absolute";
        h3.style.bottom = "20px";
        h3.style.left = "15px";

        descDiv.appendChild(h3);
        link.appendChild(img);
        innerDiv.appendChild(link);
        innerDiv.appendChild(descDiv);
        colDiv.appendChild(innerDiv);
        carouselContainer.appendChild(colDiv);
    });

    document.getElementById("carouselBoltaShopAdmin").appendChild(carouselContainer);
}

function createCarouselBolta() {
    const carouselContainer = document.createElement("div");
    carouselContainer.classList.add("owl-carousel", "owl-theme");

    boltaBooks.forEach(function (image) {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-md-12");

        const fh5coDiv = document.createElement("div");
        fh5coDiv.classList.add("fh5co-blog", "animate-box");

        const link = document.createElement("a");
        link.setAttribute("href", image.href);
        link.setAttribute("target", "_blank");
        link.classList.add("blog-bg");
        link.style.backgroundImage = `url(${image.imageUrl})`;

        const blogTextDiv = document.createElement("div");
        blogTextDiv.classList.add("blog-text");

        //const span = document.createElement("span");
        //span.classList.add("posted_on");
        //span.textContent = image.year;

        const h3 = document.createElement("h3");
        const h3Link = document.createElement("a");
        h3Link.setAttribute("href", image.href);
        h3Link.setAttribute("target", "_blank");
        h3Link.textContent = image.title;
        h3.appendChild(h3Link);

        const p = document.createElement("p");
        p.textContent = image.description;
        p.style.fontSize = "70%";

        const ul = document.createElement("ul");
        ul.classList.add("stuff");
        ul.style.fontSize = "70%";

        const li1 = document.createElement("li");
        li1.style.color = "darkgray";
        li1.textContent = image.year;

        const li2 = document.createElement("li");
        li2.textContent = image.author;

        ul.appendChild(li1);
        ul.appendChild(li2);

        //blogTextDiv.appendChild(span);
        blogTextDiv.appendChild(h3);
        blogTextDiv.appendChild(p);
        blogTextDiv.appendChild(ul);

        fh5coDiv.appendChild(link);
        fh5coDiv.appendChild(blogTextDiv);

        colDiv.appendChild(fh5coDiv);
        carouselContainer.appendChild(colDiv);
    });

    document.getElementById("carouselBoltaBooks").appendChild(carouselContainer);
}


// START
loaderPage();
contentWayPoint();
goToTop();
fullHeight();
parallax();
pieChart();
skillsWayPoint();
populateCourses();
populateDometrain();
populateTimCorey();
populateHackerRank();
populateTestDome();
/*createCarouselProjects();*/
createCarouselAlgebra();
createCarouselUdemy();
createCarouselDometrain();
createCarouselTimCorey();
createCarouselHackerRank();
createCarouselTestDomeBadge();
createCarouselTestDome();
createCarouselBoltaShop();
createCarouselBoltaShopAdmin();
createCarouselBolta();