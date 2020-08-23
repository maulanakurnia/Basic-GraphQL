"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    type Query {\n        hello: String!\n     }  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _require = require('apollo-server'),
    ApolloServer = _require.ApolloServer,
    gql = _require.gql; // tanda ! menandakan bahwa tidak boleh null 


var typeDefs = gql(_templateObject());
var resolvers = {
  Query: {
    hello: function hello() {
      return "Hello World!";
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