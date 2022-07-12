const presets = [
    [
        "@babel/preset-env",
        {
            useBuilltIns: "usage",
            corejs: "3.23.4"
        }
    ]
]

module.exports = { presets }

// Usado para não precisar colocar @babel/preset-env na linha de comando