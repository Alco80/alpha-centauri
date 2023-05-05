//alert("files connected");

$(document).ready(function () {
    $(".jumbotron a").click(function (event) {
        event.preventDefault();
        const info = $(this).attr("href");
        $("#sub-content").load(info);

    });
});


$(document).ready(function () {
    $(".mid-content a").click(function (event) {
        event.preventDefault();
        const info = $(this).attr("href");
        $("#avatar-sub-content").load(info);

    });
});



document.getElementById("alpha-main").innerHTML = "Alpha Centauri is a triple star system in the southern constellation of Centaurus. It consists of 3 stars: Alpha Centauri A, Alpha Centauri B and Proxima Centauri. Proxima Centauri is also the closest star to the Sun at 4.2465 light-years.Alpha Centauri A and B are Sun-like stars Class G and K. Together they form the binary star system Alpha Centauri AB. To the naked eye, the two main components appear to be a single star. It is the brightest star in the constellation and the third-brightest in the night sky, outshone only by Sirius and Canopus.";

// Most of this content was taken fron Wikipedia