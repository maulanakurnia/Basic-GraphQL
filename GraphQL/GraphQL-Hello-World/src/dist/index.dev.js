"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  type Query {\n    hello(name: String): String\n    user: User\n  }\n  type User {\n    id: ID!\n    username: String\n    firstLetterOfUsername: String\n  }\n  type Error {\n    field: String!\n    message: String!\n  }\n  type RegisterResponse {\n    errors: [Error!]!\n    user: User\n  }\n  input UserInfo {\n    username: String!\n    password: String!\n    age: Int\n  }\n  type Mutation {\n    register(userInfo: UserInfo!): RegisterResponse!\n    login(userInfo: UserInfo!): String!\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _require = require("apollo-server"),
    ApolloServer = _require.ApolloServer,
    gql = _require.gql; // type checking
// query vs. mutation
// objects
// arrays
// arguments
// crud


var typeDefs = gql(_templateObject());
var resolvers = {
  User: {
    firstLetterOfUsername: function firstLetterOfUsername(parent) {
      return parent.username ? parent.username[0] : null;
    } // username: parent => { return parent.username;
    // }

  },
  Query: {
    hello: function hello(parent, _ref) {
      var name = _ref.name;
      return "hey ".concat(name);
    },
    user: function user() {
      return {
        id: 1,
        username: "tom"
      };
    }
  },
  Mutation: {
    login: function login(parent, _ref2, context) {
      var username;
      return regeneratorRuntime.async(function login$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              username = _ref2.userInfo.username;
              return _context.abrupt("return", username);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    register: function register() {
      return {
        errors: [{
          field: "username",
          message: "bad"
        }, {
          field: "username2",
          message: "bad2"
        }],
        user: {
          id: 1
        }
      };
    }
  }
};
var server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  context: function context(_ref3) {
    var req = _ref3.req,
        res = _ref3.res;
    return {
      req: req,
      res: res
    };
  }
});
server.listen().then(function (_ref4) {
  var url = _ref4.url;
  return console.log("server started at ".concat(url));
});