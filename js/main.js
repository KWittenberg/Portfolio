'use strict';


const courses = [
    {
        name: "ChatGPT for .NET developers",
        instructor: "Darek Kacban",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-a80b0d3a-f840-485f-bb32-ab0b2a802f43.jpg?v=1711270419000",
        image: "images/udemy/ChatGPT for .NET developers.jpg"
    },
    {
        name: "Make an E-Commerce Website with Blazor",
        instructor: "Patrick God",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-b3127d9a-f51a-4d9d-9e98-6b5ed750b068.jpg?v=1709824697000",
        image: "images/udemy/Make an E-Commerce Website with Blazor.jpg"
    },
    {
        name: "Unit Testing for C# Developers",
        instructor: "Mosh Hamedani",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-78cc5d5e-a0b0-419f-aab0-686968b3c66e.jpg?v=1708768829000",
        image: "images/udemy/Unit Testing for C Developers.jpg"
    },
    {
        name: "Mastering SQL Server RDS on AWS",
        instructor: "Emar Morrison",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-13df86f2-7ed5-4617-8fa8-cb2a995f71c9.jpg?v=1705658963000",
        image: "images/udemy/Mastering SQL Server RDS on AWS.jpg"
    },
    {
        name: "MySQL Database Development Mastery",
        instructor: "Trevoir Williams",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-c4532d5b-c8db-44aa-bd3c-c7cc81611791.jpg?v=1705530065000",
        image: "images/udemy/MySQL Database Development Mastery.jpg"
    },
    {
        name: "Vue JS 3: The Composition API (Inc Script Setup, TypeScript)",
        instructor: "Lachlan Miller",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-f5d8ca86-2911-4a64-a13e-234dc9732000.jpg?v=1699392142000",
        image: "images/udemy/Vue JS 3 - The Composition API.jpg"
    },
    {
        name: "TypeScript for Professionals - 2023 Edition",
        instructor: "Basarat Ali Syed",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-bea7c56d-e4a3-443d-99cb-8916cf74442d.jpg?v=1698531996000",
        image: "images/udemy/TypeScript for Professionals - 2023 Edition.jpg"
    },
    {
        name: "The Fastest Javascript Course: From ZERO to HERO",
        instructor: "Ivan Lourenco Gomes",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-7a481cac-e1a1-45d1-9e19-986b18e2d8ee.jpg?v=1697751930000",
        image: "images/udemy/The Fastest Javascript Course From ZERO to HERO.jpg"
    },
    {
        name: "LINQ Tutorial: Master the Key C# Library",
        instructor: "Krystyna Slusarczyk",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-c63a29b6-c578-4c9c-9bd9-a2f9391d3f37.jpg?v=1693860801000",
        image: "images/udemy/Master the Key C Library.jpg"
    },
    {
        name: "Advanced Topics in C#",
        instructor: "Dmitri Nesteruk",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-085faa65-8d7f-40a2-a44a-86548902358b.jpg?v=1693226499000",
        image: "images/udemy/Advanced Topics in C.jpg"
    },
    {
        name: "C# Advanced Topics - The Next Logical Step",
        instructor: "Tod Vachev",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-9f658559-4f52-473a-a799-3da967117d8f.jpg?v=1692521361000",
        image: "images/udemy/C Advanced Topics - The Next Logical Step.jpg"
    },
    {
        name: "C# Developers: Double Your Coding Speed with Visual Studio",
        instructor: "Mosh Hamedani",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-af98a529-7aca-4655-86a4-cef0f8832165.jpg?v=1688492322000",
        image: "images/udemy/Double Your Coding Speed with Visual Studio.jpg"
    },
    {
        name: "C# Intermediate: Classes, Interfaces and OOP",
        instructor: "Mosh Hamedani",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-3365e84c-2009-4885-b0a4-5f5c426db1be.jpg?v=1688251015000",
        image: "images/udemy/C Intermediate Classes, Interfaces and OOP.jpg"
    },
    {
        name: "RESTful Web API - The Complete Guide (.NET7 API) Part 1",
        instructor: "Bhrugen Patel",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-9c037745-8e34-4612-b365-83bf2296320a.jpg?v=1677501367000",
        image: "images/udemy/RESTful Web API - The Complete Guide (.NET7 API).jpg"
    },
    {
        name: ".NET 7 Web API & Entity Framework Jumpstart",
        instructor: "Patrick God",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-cbf7c8dc-30f6-4fb1-81c9-f1106377b747.jpg?v=1677136245000",
        image: "images/udemy/NET 7 Web API & Entity Framework Jumpstart.jpg"
    },
    {
        name: "Azure DevOps and Continuous Delivery With Git",
        instructor: "Trevoir Williams",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-7032393a-fd2c-4cb7-922c-fd1235d3f307.jpg?v=1676978191000",
        image: "images/udemy/Azure DevOps and Continuous Delivery With Git.jpg"
    },
    {
        name: "ASP.NET Core - Cross-Platform Development",
        instructor: "Trevoir Williams",
        imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-3f0fe1d1-2969-4ef7-b896-69e49ad38cda.jpg?v=1675820316000",
        image: "images/udemy/ASP.NET Core 7 MVC - Cross-Platform Development.jpg"
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



const certificates = [
    {
        href: "https://www.testdome.com/certificates/6bb8a052b43e4792865ec9b98daf49fe",
        name: "Krešimir Wittenberg",
        testName: "Azure and DevOps",
        logo: "TestDome Certificate",
        stampClass: "gold"
    },
    {
        href: "https://www.testdome.com/certificates/bce69ecd332b4200afad896d6f4e988c",
        name: "Krešimir Wittenberg",
        testName: "ASP.NET (Core) MVC, HTML/CSS, JavaScript, C#, and SQL",
        logo: "TestDome Certificate",
        stampClass: "gold"
    },
    {
        href: "https://www.testdome.com/certificates/4c3f4dc0aff64f5daef482d0b35894d4",
        name: "Krešimir Wittenberg",
        testName: "C# and .NET",
        logo: "TestDome Certificate",
        stampClass: "gold"
    },
    {
        href: "https://www.testdome.com/certificates/760fd22053244dcf8682cb082ebfea4a",
        name: "Krešimir Wittenberg",
        testName: "C#, MS SQL Server, and SQL",
        logo: "TestDome Certificate",
        stampClass: "gold"
    },
    {
        href: "https://www.testdome.com/certificates/08bf6cc5ccb646409dd6d3d48a57c0f8",
        name: "Krešimir Wittenberg",
        testName: "C#",
        logo: "TestDome Certificate",
        stampClass: "gold"
    },
    {
        href: "https://www.testdome.com/certificates/b1ee11ef88944f029b6279df4b73e8ed",
        name: "Krešimir Wittenberg",
        testName: "REST API",
        logo: "TestDome Certificate",
        stampClass: "gold"
    },
    {
        href: "https://www.testdome.com/certificates/74415868c0d54922b4dd786a73e1d7cb",
        name: "Krešimir Wittenberg",
        testName: "HTML/CSS",
        logo: "TestDome Certificate",
        stampClass: "gold"
    },
    {
        href: "https://www.testdome.com/certificates/2d4a16493915489c9a5613293a5c463b",
        name: "Krešimir Wittenberg",
        testName: "JavaScript",
        logo: "TestDome Certificate",
        stampClass: "gold"
    },
    {
        href: "https://www.testdome.com/certificates/09fcf3aad1634a7f9ba02e0bf84fdd5b",
        name: "Krešimir Wittenberg",
        testName: "SQL",
        logo: "TestDome Certificate",
        stampClass: "gold"
    },
    {
        href: "https://www.testdome.com/certificates/2855c20322924623bcde707e7ecfbeeb",
        name: "Krešimir Wittenberg",
        testName: "MongoDB",
        logo: "TestDome Certificate",
        stampClass: "gold"
    },
    {
        href: "https://www.testdome.com/certificates/992d811abfc44a8b8a061a5140603520",
        name: "Krešimir Wittenberg",
        testName: "Git",
        logo: "TestDome Certificate",
        stampClass: "gold"
    },
    {
        href: "https://www.testdome.com/certificates/b6423c12cf954909a9f067057d0d793a",
        name: "Krešimir Wittenberg",
        testName: "Azure",
        logo: "TestDome Certificate",
        stampClass: "gold"
    },
    {
        href: "https://www.testdome.com/certificates/824471e84c4449668dfc07b2f66b131b",
        name: "Krešimir Wittenberg",
        testName: "WordPress",
        logo: "TestDome Certificate",
        stampClass: "gold"
    },
    {
        href: "https://www.testdome.com/certificates/73395701398a4741b807819c46860044",
        name: "Krešimir Wittenberg",
        testName: "C# and .NET",
        logo: "TestDome Certificate",
        stampClass: "silver"
    },
    {
        href: "https://www.testdome.com/certificates/3ffc240f7f654a859375ef1b3b2e6cff",
        name: "Krešimir Wittenberg",
        testName: "HTML/CSS",
        logo: "TestDome Certificate",
        stampClass: "silver"
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

function populateTestDome() {
    var certificateList = document.getElementById("certificateList");

    certificates.forEach(function (certificate) {
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


// START
loaderPage();
contentWayPoint();
goToTop();
fullHeight();
parallax();
pieChart();
skillsWayPoint();
populateCourses();
populateTestDome();
createCarouselAlgebra();
createCarouselUdemy();