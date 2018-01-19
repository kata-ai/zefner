#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Zefner_1 = require("./zefner/Zefner");
const AxiosSword_1 = require("./weapon/AxiosSword");
const AxiosLogCommander_1 = require("./commander/AxiosLogCommander");
const Commander = require("commander");
Commander
    .option('-a, --attack <endpoint>', 'Which endpoint should Zefner attacks, required.')
    .option('-n, --times <time>', 'How many time should Zefner attacks, default to one.', 1)
    .parse(process.argv);
if (Commander.opts().attack) {
    const endpoint = Commander.opts().attack;
    new Zefner_1.default()
        .use(new AxiosSword_1.default())
        .reportTo(new AxiosLogCommander_1.default())
        .hit({
        method: 'GET',
        endpoint
    })
        .times(parseInt(Commander.opts().times))
        .charge();
}
else {
    Commander.help();
}
