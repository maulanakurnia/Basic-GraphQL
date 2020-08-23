"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    type Query {\n        hello: String\n        user: User\n    }  \n\n    type User {\n        id: ID!\n        username: String!\n    }\n    \n    type Error {\n        field: String!\n        message: String!\n    }\n\n    type RegisterResponse {\n        errors: [Error!]!\n        user: User\n    }\n\n    input UserInfo {\n        username: String!, \n        password: String!, \n        age: Int\n    }\n\n    type Mutation {\n        register(userInfo: UserInfo!): RegisterResponse!\n        login(userInfo: UserInfo!): Boolean!\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _require = require('apollo-server'),
    ApolloServer = _require.ApolloServer,
    gql = _require.gql; // tanda ! menandakan bahwa tidak boleh null 
// tanda ! didalam array mendakan bahwa array tidak boleh null


var typeDefs = gql(_templateObject());
var resolvers = {
  Query: {
    hello: function hello() {
      return null;
    },
    user: function user() {
      return {
        id: 1,
        username: "mufrad"
      };
    }
  },
  Mutation: {
    login: function login() {
      return true;
    },
    register: function register() {
      return {
        errors: [{
          field: 'username',
          message: 'bad'
        }, {
          field: 'username2',
          message: 'bad2'
        }],
        user: {
          id: 1,
          username: "mufrad"
        }
      };
    }
  }
};
var server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers
});
server.listen().then(function (_ref) {
  var url = _ref.url;
  return console.log("server started at ".concat(url));
});