; (function () {


    const courses = [
        {
            name: "ChatGPT for .NET developers",
            instructor: "Darek Kacban",
            imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-a80b0d3a-f840-485f-bb32-ab0b2a802f43.jpg?v=1711270419000"
        },
        {
            name: "Make an E-Commerce Website with Blazor",
            instructor: "Patrick God",
            imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-b3127d9a-f51a-4d9d-9e98-6b5ed750b068.jpg?v=1709824697000"
        },
        {
            name: "Unit Testing for C# Developers",
            instructor: "Mosh Hamedani",
            imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-78cc5d5e-a0b0-419f-aab0-686968b3c66e.jpg?v=1708768829000"
        },
        {
            name: "Mastering SQL Server RDS on AWS",
            instructor: "Emar Morrison",
            imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-13df86f2-7ed5-4617-8fa8-cb2a995f71c9.jpg?v=1705658963000"
        },
        {
            name: "MySQL Database Development Mastery",
            instructor: "Trevoir Williams",
            imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-c4532d5b-c8db-44aa-bd3c-c7cc81611791.jpg?v=1705530065000"
        },
        {
            name: "Vue JS 3: The Composition API (Inc Script Setup, TypeScript)",
            instructor: "Lachlan Miller",
            imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-f5d8ca86-2911-4a64-a13e-234dc9732000.jpg?v=1699392142000"
        },
        {
            name: "TypeScript for Professionals - 2023 Edition",
            instructor: "Basarat Ali Syed",
            imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-bea7c56d-e4a3-443d-99cb-8916cf74442d.jpg?v=1698531996000"
        },
        {
            name: "The Fastest Javascript Course: From ZERO to HERO",
            instructor: "Ivan Lourenco Gomes",
            imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-7a481cac-e1a1-45d1-9e19-986b18e2d8ee.jpg?v=1697751930000"
        },
        {
            name: "LINQ Tutorial: Master the Key C# Library",
            instructor: "Krystyna Slusarczyk",
            imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-c63a29b6-c578-4c9c-9bd9-a2f9391d3f37.jpg?v=1693860801000"
        },
        {
            name: "Advanced Topics in C#",
            instructor: "Dmitri Nesteruk",
            imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-085faa65-8d7f-40a2-a44a-86548902358b.jpg?v=1693226499000"
        },
        {
            name: "C# Advanced Topics - The Next Logical Step",
            instructor: "Tod Vachev",
            imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-9f658559-4f52-473a-a799-3da967117d8f.jpg?v=1692521361000"
        },
        {
            name: "C# Developers: Double Your Coding Speed with Visual Studio",
            instructor: "Mosh Hamedani",
            imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-af98a529-7aca-4655-86a4-cef0f8832165.jpg?v=1688492322000"
        },
        {
            name: "C# Intermediate: Classes, Interfaces and OOP",
            instructor: "Mosh Hamedani",
            imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-3365e84c-2009-4885-b0a4-5f5c426db1be.jpg?v=1688251015000"
        },
        {
            name: "RESTful Web API - The Complete Guide (.NET7 API) Part 1",
            instructor: "Bhrugen Patel",
            imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-9c037745-8e34-4612-b365-83bf2296320a.jpg?v=1677501367000"
        },
        {
            name: ".NET 7 Web API & Entity Framework Jumpstart",
            instructor: "Patrick God",
            imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-cbf7c8dc-30f6-4fb1-81c9-f1106377b747.jpg?v=1677136245000"
        },
        {
            name: "Azure DevOps and Continuous Delivery With Git",
            instructor: "Trevoir Williams",
            imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-7032393a-fd2c-4cb7-922c-fd1235d3f307.jpg?v=1676978191000"
        },
        {
            name: "ASP.NET Core - Cross-Platform Development",
            instructor: "Trevoir Williams",
            imageUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-3f0fe1d1-2969-4ef7-b896-69e49ad38cda.jpg?v=1675820316000"
        }

    ];

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








    'use strict';

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


    var fullHeight = function () {

        if (!isMobile.any()) {
            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function () {
                $('.js-fullheight').css('height', $(window).height());
            });
        }
    };

    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    var contentWayPoint = function () {
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

    var goToTop = function () {

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

    var pieChart = function () {
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

    var skillsWayPoint = function () {
        if ($('#fh5co-skills').length > 0) {
            $('#fh5co-skills').waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {
                    setTimeout(pieChart, 400);
                    $(this.element).addClass('animated');
                }
            }, { offset: '90%' });
        }

    };

    // Loading page
    var loaderPage = function () {
        $(".fh5co-loader").fadeOut("slow");
    };





    // START
    $(function () {
        populateCourses(); // Call the function to populate the course data
        contentWayPoint();
        goToTop();
        loaderPage();
        fullHeight();
        parallax();
        // pieChart();
        skillsWayPoint();
    });
}());