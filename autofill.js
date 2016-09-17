"use strict"

const postcss = require("postcss")
const { name } = require("./package")

const pseudo = /:(autofill)/
const plugin = root => root.walkRules(pseudo, rule =>
{
    let params = `${name}-${id++}`

    let to = postcss.rule({ selector: "to" })
    let at = postcss.atRule({ name: "keyframes", params })
        .append(to)
        .moveBefore(rule)

    rule.walkDecls(decl => decl.moveTo(to))
    rule.append(`animation: ${params} both`)

    rule.selector =
    rule.selector.replace(pseudo, ":-webkit-$1")
})

let id = 0

module.exports = postcss.plugin(name, () => plugin)
