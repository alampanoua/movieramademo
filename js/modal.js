
function displayposterhover() {
    var posters = document.querySelectorAll(".poster-wrap");

    posters.forEach((poster) => {
        var hovercover = poster.parentElement.querySelector(".hover-cover");
        poster.addEventListener("mouseover", () => {
            hovercover.classList.add("show");
        });

        poster.addEventListener("mouseleave", () => {
            hovercover.classList.remove("show");
        });

    });

}


function onReady() {
    const openDivs = document.querySelectorAll("[data-open]");
    const closeDivs = document.querySelectorAll("[data-close]");
    const isVisible = "is-visible";

    for (const div of openDivs) {
        i = 1;
        div.addEventListener("click", function () {
            const modalId = this.dataset.open;
            $("body").css("overflow", "hidden");
            $(".modal-dialog").css("visibility", "visible");

            if (i === 1) {
                getTitle(this.id);
                addVideo(this.id);
                addReview(this.id);
                addSimilar(this.id);
                i++;
            }

            document.getElementById(modalId).classList.add(isVisible);

        });

    }

    for (const div of closeDivs) {
        div.addEventListener("click", function () {
            this.parentElement.parentElement.parentElement.classList.remove(isVisible);
        });
    }

    document.addEventListener("click", (e) => {
        if (e.target === document.querySelector(".modal.is-visible")) {
            $("body").css("overflow", "auto");
            document.querySelector(".modal.is-visible").classList.remove(isVisible);
        }
    });

    document.addEventListener("keyup", (e) => {
        if (e.key === "Escape" && document.querySelector(".modal.is-visible")) {
            $("body").css("overflow", "auto");
            document.querySelector(".modal.is-visible").classList.remove(isVisible);
        }
    });

    const dots = document.querySelectorAll(".review-cont article");
    dots.forEach(dot => dot.addEventListener("click", () => {
        dot.classList.toggle("expand");
    }));

}

var interval = setInterval(function () {
    displayposterhover();
    if (document.readyState === "complete") {
        clearInterval(1000);
        onReady();
    }
}, 1000);


function myfonction() {
    // $(".fa-spinner").fadeOut();
    document.getElementById("spin").remove();
    $(".open-modal").innerHTML = "More info";
}



