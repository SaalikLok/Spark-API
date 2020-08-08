const { ApolloServer, gql } = require("apollo-server");
const quotesdb = require('./quotesdb');

const typeDefs = gql`
    type Category {
        id: ID!
        name: String!
    }
    
    type Quote {
        id: ID!
        body: String!
        author: String!
        authorType: String
        category: [Category]
        dateAdded: String
    }


    type Query {
        quotes: [Quote]
        #quoteByCategory(category : Category) : [Quote]
        randomQuote: Quote
    }
`;

const resolvers = {
    Query: {
        quotes: () => {
            return quotesdb.quotesdb;
        },
        randomQuote: () => {
            return quotesdb.quotesdb[Math.floor(Math.random() * quotesdb.quotesdb.length)];
        }
    }
}


const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
    console.log(`Server started at ${url}`);
});