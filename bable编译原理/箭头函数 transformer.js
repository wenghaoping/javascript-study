exports.ArrowFunctionExpression = function (node) {
    var body = node.body;
    if (body.type !== "BlockStatement") {
      body = {
        type: "BlockStatement",
        body: [{
          type: "ReturnStatement",
          argument: body
        }]
      };
    }
  
    node.expression = false;
    node.body = body;
    node.type = "FunctionExpression";
  
    if (traverse.hasType(node, "ThisExpression")) {
      return util.template("function-bind-this", {
        FUNCTION: node
      });
    } else {
      return node;
    }
  };