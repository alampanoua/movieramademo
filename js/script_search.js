
    /*Search for movies*/
    async function searchForm(title) {
        const url = baseUrl + "search/movie?api_key=" + apikey + "&query=" + title;
        document.querySelector(".headtitle").innerHTML = 'Results for "' + title + '"';

        await fetch(url)
            .then((resp) => resp.json())
            .then(async (myJson) => {
                nowplaying(myJson);
                document.querySelector("#container").innerHTML = "";
            })
            .catch((error) => showSnackbar("from search_form//" + error));

    }

$(document).ready(function () {

    $("#search").focus(function () {
        $(".search-box").addClass("border-searching");
        $(".search-icon").addClass("rotate");
    });
    $("#search").blur(function () {
        $(".search-box").removeClass("border-searching");
        $(".search-icon").removeClass("rotate");
    });

    $("#search").keyup(debounce(function (e) {
        if (e.which === 9) { e.preventDefault(); }  //alt-tab key

        if ($(this).val() != "") {
            searchForm($(this).val());
        }
        $(".go-icon").addClass("go-in");

    }, 850));

    $(".go-icon").click(function () {
        var movie_title = $("#search").val();
        if (movie_title.length !== 0) {
            searchForm(movie_title);
        }
        else {
            var x = document.querySelector("#nodata");
            x.innerHTML = "Can't find any matching results";
            x.style.display = "block";
        }
    });

});
