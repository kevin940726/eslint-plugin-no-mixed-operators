const astUtils = {
  getPrecedence(node) {
    switch (node.type) {
      case 'SequenceExpression':
        return 0;

      case 'AssignmentExpression':
      case 'ArrowFunctionExpression':
      case 'YieldExpression':
        return 1;

      case 'ConditionalExpression':
        return 3;

      case 'LogicalExpression':
        switch (node.operator) {
          case '||':
            return 4;
          case '&&':
            return 5;

          // no default
        }

      /* falls through */

      case 'BinaryExpression':
        switch (node.operator) {
          case '|':
            return 6;
          case '^':
            return 7;
          case '&':
            return 8;
          case '==':
          case '!=':
          case '===':
          case '!==':
            return 9;
          case '<':
          case '<=':
          case '>':
          case '>=':
          case 'in':
          case 'instanceof':
            return 10;
          case '<<':
          case '>>':
          case '>>>':
            return 11;
          case '+':
          case '-':
            return 12;
          case '*':
          case '/':
          case '%':
            return 13;
          case '**':
            return 15;

          // no default
        }

      /* falls through */

      case 'UnaryExpression':
      case 'AwaitExpression':
        return 16;

      case 'UpdateExpression':
        return 17;

      case 'CallExpression':
        return 18;

      case 'NewExpression':
        return 19;

      default:
        return 20;
    }
  },
  isParenthesised(sourceCode, node) {
    const previousToken = sourceCode.getTokenBefore(node),
      nextToken = sourceCode.getTokenAfter(node);

    return (
      Boolean(previousToken && nextToken) &&
      previousToken.value === '(' &&
      previousToken.range[1] <= node.range[0] &&
      nextToken.value === ')' &&
      nextToken.range[0] >= node.range[1]
    );
  },
  isNotClosingParenToken(token) {
    return !(token.value === ')' && token.type === 'Punctuator');
  }
};

module.exports = astUtils;
