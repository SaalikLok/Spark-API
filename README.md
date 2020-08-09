# Spark API 🎇
The dead-simple GraphQL API of inspirational quotes.

[Try It Here](https://spark-api-graphql.herokuapp.com/)

## Usage
Use this API like you would any other GraphQL API.
Apollo has a [great article](https://www.apollographql.com/blog/4-simple-ways-to-call-a-graphql-api-a6807bcdb355/) on this.

Visit the [Playground](https://spark-api-graphql.herokuapp.com/)

### Example Queries
`
query{
  quotes{
    body
    author
    category{
      name
    }
  }
}
`

## Why?
There aren't enough APIs in the world with inspirational quotes out there for developers to use in their applications. While I started learning and playing with GraphQL, I decided this would be a fun one to build.

The Spark API is intended to spark end users with delight and inspiration.

### Project Status
I started this project as a learning exercise - which is why it's so nascent. For this reason, I'm using the free version of the Heroku app. If people are interested and usage of the API grows, I'll consider adding more!

Feel feel to create a PR if you'd like to contribute!