// Day 8 task

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPG(movies) {
        var result = [];
        movies.forEach(movie => {
            if(movie.rating === "PG")
                result.push(movie);
        });
        return result;
    }
}

var movie = new Movie("Casino Royale", "Eon Productions", "PG13");