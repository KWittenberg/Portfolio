var stylesheet = "https://www.testdome.com/content/source/stylesheets/embed.css",

    link = document.createElement("link");
    link.href = stylesheet,
    link.type = "text/css",
    link.rel = "stylesheet",
    link.media = "screen,print",

    document.getElementsByTagName("head")[0].appendChild(link);