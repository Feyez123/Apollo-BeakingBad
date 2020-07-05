const { ApolloServer , gql } = require('apollo-server'); 

const typeDefs = gql`

    type Character {
        char_id: ID!  
        name: String  
        birthday: String 
        occupation: [String]
        img: String 
        status: String 
        appearance: [Int]
        nickname: String 
        portrayed: String 
        better_call_saul_appearance: [Int]

    }
    type Query {
        Character: Character
    }
`; 

const resolvers = {
    Query : {
        Character: () => Character, 
    }, 
}; 

const Server = new ApolloServer({typeDefs, resolvers});


Server.listen().then(({url})=> {
    console.log(`You are now conntec to ${url}`); 
});

