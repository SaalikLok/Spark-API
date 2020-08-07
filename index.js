const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
    type Category {
        id: ID!
        name: String!
    }
    
    type Quote {
        id: ID!
        body: String!
        author: String!
        category: [Category]
        dateAdded: String
    }


    type Query {
        quotes: [Quote]
        #quoteByCategory(category : Category) : [Quote]
        randomQuote: Quote
    }
`;

const quotes = [
    {
        id: "001",
        body: "All's well that ends better",
        author: "JRR Tolkein",
        dateAdded: '2020-08-03',
        category: [{name: "Adventure"}, {name: "Fantasy"}]
    },
    {
        id: "002",
        body: "Your face is awesome",
        author: "Saalik Lokhandwala",
        dateAdded: '2020-08-03'
    }
]

const resolvers = {
    Query: {
        quotes: () => {
            return quotes;
        },

        // quoteByCategory: () => {

        // },

        randomQuote: () => {
            return quotes[0];
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
    console.log(`Server started at ${url}`);
});