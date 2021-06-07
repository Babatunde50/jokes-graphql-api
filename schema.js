const { gql } = require("apollo-server");

module.exports = gql`
  type Joke {
    id: ID!
    joke: String!
    permalink: String
  }

  type Query {
    getMyJokes: [Joke!]
    getMyJoke(id: ID!): Joke!
  }

  type Mutation {
    addMyJoke(joke: addJokeInput!): Joke
    editMyJoke(joke: editJokeInput!): Joke
  }

  input addJokeInput {
    joke: String!
    permalink: String
  }

  input editJokeInput {
    id: ID!
    joke: String
    permalink: String
  }
`;
