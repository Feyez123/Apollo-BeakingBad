const {RestDataSource} = require('apollo-datasource-rest'); 


class CharacterAPI extends RestDataSource {
    constructor() {
        super(); 
        this.baseURL = 'https://www.breakingbadapi.com/api/';


    }
}

module.exports = CharacterAPI ; 