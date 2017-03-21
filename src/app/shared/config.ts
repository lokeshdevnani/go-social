export class Config {
    static genreList = ['Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime',
        'Documentary', 'Drama', 'Family', 'Fantasy', 'Film-Noir', 'History', 'Horror',
        'Music', 'Musical', 'Mystery', 'Romance', 'Sci-Fi', 'Sport', 'Thriller', 'War', 'Western' ];
    static url = 'https://cryptic-lowlands-56194.herokuapp.com/api';
    static apiURL = Config.url + '/api';
    static oAuthURL = Config.url + '/oauth/authenticate/facebook';
}
