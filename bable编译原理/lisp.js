const tokenizer = (input) => {
    let current = 0;
    let tokens = [];
    while (current < input.length) {
        let char = input[current]
        if (char === '(') {
            tokens.push({ type: 'paren', value: '(' })
            current++;
            continue;
        }

        if (char === ')') {
            tokens.push({ type: 'paren', value: ')' });
            current++;
            continue;
        }

        // 排除空格
        let WHITESPACE = /\s/;
        if (WHITESPACE.test(char)) {
            current++;
            continue;
        }

        // 解析数字
        let NUMBERS = /[0-9]/;
        if (NUMBERS.test(char)) {
            let value = '';
            while (NUMBERS.test(char)) {
                value += char;
                char = input[++current];
            }
            tokens.push({ type: 'number', value });
            continue;
        }
        // 如果if都不能捕获，则抛出异常
        throw new TypeError(`char cannot be recognized , char is ${char} `);
    }
    return tokens
}