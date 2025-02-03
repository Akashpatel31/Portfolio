$(document).foundation();
function getSplash() {

    $(".hide_all").hide();

    var getSplash = $.ajax({
        url: "services/splash.php",
        type: "POST",
        dataType: "json"
    });


    getSplash.done(function (data) {
        console.log("you are done");
        console.log("you are done");
        var content = "";
        $.each(data, function (i, item) {
            var movie_id = item.movie_id;
            var movie_name = item.movie_name;
            var image_id = item.cover_id;
            var image_name = item.cover_name;

            var movie_image = "./uploads/" + image_id +
                "/" + image_name;


            content += `<div class="cell small-12 medium-6 large-3 min-height-380 relContent more-top movie" data-id="` + movie_id + `">
               
                    <img src="`+movie_image+`" alt="` + image_name + `"><br/>
                        <h4 class="movieName">` + movie_name + `</h4>
                </div>
            </div>`;

        });

        $(".splash_content").html(content);

        //window.scrollTo(0, 0);
        $(window).scrollTop(0);
        $(".splash_container").fadeIn();

        /*
        $(".hide_all").fadeOut(400,
            function () {
                //
                $(".splash_container").fadeIn();
            }
        );
        */



    });

    getSplash.fail(function (jqXHR, textStatus) {
        alert("Something went Wrong! (getSplash)" +
            textStatus);
    });



}

function getSearch(search_text) {
    
    var getSearch = $.ajax({
        url: "services/search.php",
        type: "POST",
        data: {
            search_text: search_text
        },
        dataType: "json"
    });


    getSearch.done(function (data) {
        
        var content = "";

        $.each(data, function (i, item) {

            var type = item.type;

            if (type == "1") {
                var id = item.movie_id;
                var name = item.movie_name;
                var image_id = item.cover_id;
                var image_name = item.cover_name;
                var className = "movie";
            } else {
                var id = item.people_id;
                var name = item.name;
                var image_id = item.cover_id;
                var image_name = item.cover_name;
                var className = "people";
            }

            var image = "./uploads/" + image_id +
                "/" + image_name;


            content += `<div data-id="` + id + `" class="search_container ` + className + ` clearFloat">
                <div class="left">
                    <img src="` + image + `" alt="` + name + `">
                </div>
                <div class="right">` + name + `</div>
            </div>`;

        });

        $(".search_results").html(content).show();


    });

    getSearch.fail(function (jqXHR, textStatus) {
        alert("Something went Wrong! (getSearch)" +
            textStatus);
    });



}


function getMovie(movie_id) {
    $(".hide_all").fadeOut();

    var getMovie = $.ajax({
        url: "services/movie.php",
        type: "POST",
        data: {
            movie_id: movie_id
        },
        dataType: "json"
    });


    getMovie.done(function (data) {
        $(".movie_name").html(data.movie_name);
        $(".length").html(data.run_length);
        $(".release_date").html(data.movie_date_me);
        $(".description").html(data.description);
        $(".category").html(data.category);
        $(".genre").html(data.genre);
        $(".country").html(data.country);
        $(".lang").html(data.language);
        $(".colour").html(data.colour);
        $(".movie_rating").html(data.movie_rating);


        var main_movie_image = "./uploads/" + data.cover_image_id +
            "/" + data.cover_image_name;

        $(".main_movie_image").attr("src", main_movie_image).attr("alt", data.movie_name);

        var content = "";
        $.each(data.related_movies, function (i, item) {
            var movie_id = item.movie_id;
            var movie_name = item.movie_name;
            var image_id = item.id;
            var image_name = item.name;

            var movie_image = "./uploads/" + image_id +
                "/" + image_name;


            content += `<div class="large-2 cell gray-4 more-top movie" data-id="` + movie_id + `">
                <div class="cell small-12 medium-6 large-2 min-height-180 imgRedmovie" >
                    <img src="` + movie_image + `" alt="` + movie_name + `" >
                    
                        <h5>` + movie_name + `</h5>
                </div>
            </div>`;

        });

        $(".related_movies").html(content);

        content = "";
        $.each(data.cast, function (i, item) {
            var people_id = item.people_id;
            var people_name = item.name;
            var image_id = item.image_id;
            var image_name = item.image_name;
            var character = item.character_name;

            var people_image = "./uploads/" + image_id +
                "/" + image_name;


            content += `<div class="cell small-6 medium-4 large-2 min-height-180 imgcast more-top people" data-id="` + people_id + `">
                    <img src="` + people_image + `" alt="` + people_name + `" class="gray-1 height-2 peopleImg">
                        <h5>` + people_name + `</h5>
                        <p>` + character + `</p>
            </div>`;

        });

        $(".cast").html(content);
        
        content = "";
        $.each(data.movie_images, function (i, item) {
            var id = item.id;
            var name = item.name;
          
            var related_image = "./uploads/" + id +
                "/" + name;


            content += `<div class="cell small-6 medium-4 large-2 min-height-180 imgcast more-top" data-id="` + id + `">
                    <img src="` + related_image + `" alt="` + name + `" class="gray-1 height-2 movieImagesrel">
               
            </div>`;

        });

        $(".related_movie_image").html(content);


        //window.scrollTo(0, 0);
        $(window).scrollTop(0);
        $(".movie_container").fadeIn();

    });

    getMovie.fail(function (jqXHR, textStatus) {
        alert("Something went Wrong! (getMovie)" +
            textStatus);
    });



}

function getPeople(people_id) {
    $(".hide_all").fadeOut();

    var getPeople = $.ajax({
        url: "services/people.php",
        type: "POST",
        data: {
            people_id: people_id
        },
        dataType: "json"
    });


    getPeople.done(function (data) {
        $(".born").html(data.born);
        $(".died").html(data.died);
        $(".people_biography").html(data.people_biography);
        $(".people_name").html(data.people_name);


        var main_movie_image = "./uploads/" + data.cover_image_id +
            "/" + data.cover_image_name;

        $(".main_people_image").attr("src", main_movie_image).attr("alt", data.movie_name);

        var content = "";
        $.each(data.movies, function (i, item) {
            var movie_id = item.movie_id;
            var movie_name = item.movie_name;
            var image_id = item.image_id;
            var image_name = item.image_name;

            var movie_image = "./uploads/" + image_id +
                "/" + image_name;


            content += `<div class="large-2 cell gray-4 more-top movie" data-id="` + movie_id + `">
                <div class="cell small-12 medium-6 large-2 min-height-180 imgRedmovie" >
                    <img src="` + movie_image + `" alt="` + movie_name + `" >
                    
                        <h5>` + movie_name + `</h5>
                </div>
            </div>`;

        });

        $(".related_people_movies").html(content);

        content = "";
        $.each(data.people_images, function (i, item) {
            var id = item.id;
            var name = item.name;
           
            var people_image = "./uploads/" + id +
                "/" + name;


            content += `<div class="cell small-6 medium-4 large-2 min-height-180 imgcast more-top" data-id="` + id + `">
                    <img src="` + people_image + `" alt="` + name + `" class="gray-1 height-2 peopleImg">
            </div>`;

        });

        $(".people_cast").html(content);
        
       
        //window.scrollTo(0, 0);
        $(window).scrollTop(0);
        $(".people_container").fadeIn();


    });

    getPeople.fail(function (jqXHR, textStatus) {
        alert("Something went Wrong! (getMovie)" +
            textStatus);
    });
}






$(document).foundation();

$(document).ready(function () {

    getSplash();
    //getMovie("18");

    $("#searchText").keyup(
        function () {
            var search_text = $(this).val();
            getSearch(search_text);
        }
    );


    $(document).on("click", "body .movie", function () {
        var movie_id = $(this).attr("data-id");
        getMovie(movie_id);
    });

    $(document).on("click", "body .people", function () {
        var people_id = $(this).attr("data-id");
        getPeople(people_id);
    });

    $(document).on("click", "body .splash", function () {
        getSplash();
    });


    $(".trending").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
    });



});
