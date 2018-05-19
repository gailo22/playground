export class Movie {
    name: string;
    characters: string[];

    static of(name, characters) {
        let movie = new Movie()
        movie.name = name;
        movie.characters = characters;
        return movie;
    }
}
