module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "indent": ["off", 2], //禁止检查缩进问题
        "space-before-function-paren": 0, // 解决函数名后+1空格的报错
        "no-irregular-whitespace": "off", //这禁止掉 空格报错检查
        'semi': 0, //不检查分号
        "comma-dangle": 0, //尾部多余的,不检查,
        //"eslint.antuFixOnSave":"true" 尾部不允许空格, 在settings.json 中设置
        "no-useless-escape": 0, // 禁止检查转义符
        "no-unexpected-multiline": 0, //对象和[属性访问的]之间出现意外的换行符 [a,b,c] 报错 禁止检查报错
        "no-sequences": 0, //禁用逗号运算符  不检查
        "object-property-newline": [
            "error", {
                "allowMultiplePropertiesPerLine": true
            }
        ]
    },
    parserOptions: {
        parser: 'babel-eslint',
        "ecmaVersion": 7, // 解决Parsing error: The keyword 'import' is reserved报错
        "sourceType": "module"
    }
}