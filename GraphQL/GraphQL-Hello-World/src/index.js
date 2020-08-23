const { ApolloServer, gql } = require('apollo-server');

// tanda ! menandakan bahwa tidak boleh null 
// tanda ! didalam array mendakan bahwa array tidak boleh null
const typeDefs = gql`
    type Query {
        hello: String
        user: User
    }  

    type User {
        id: ID!
        username: String!
    }
    
    type Error {
        field: String!
        message: String!
    }

    type RegisterResponse {
        errors: [Error!]!
        user: User
    }

    input UserInfo {
        username: String!, 
        password: String!, 
        age: Int
    }

    type Mutation {
        register(userInfo: UserInfo!): RegisterResponse!
        login(userInfo: UserInfo!): Boolean!
    }
`;

const resolvers = {
    Query: {
        hello: () => null,
        user: () => ({
            id: 1,
            username: "mufrad"
        })
    },
    Mutation: {
        login: () => true,
        register: () =>({
            errors: [
            {
                field: 'username',
                message: 'bad'
            },
            {
                field: 'username2',
                message: 'bad2'
                
            }
            ],
            user: {
                id: 1,
                username: "mufrad"
            }
        })
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`server started at ${url}`));