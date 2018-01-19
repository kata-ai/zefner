#!/usr/bin/env node

import Zefner from "./zefner/Zefner";
import HttpRequest from "./data/HttpRequest";
import AxiosSword from "./weapon/AxiosSword";
import AxiosLogCommander from "./commander/AxiosLogCommander";

import * as Commander from 'commander';

Commander
    .option('-a, --attack <endpoint>', 'Which endpoint should Zefner attacks, required.')
    .option('-n, --times <time>', 'How many time should Zefner attacks, default to one.', 1)
    .parse(process.argv);

if (Commander.opts().attack) {
    const endpoint = Commander.opts().attack;

    new Zefner<HttpRequest>()
        .use(new AxiosSword())
        .reportTo(new AxiosLogCommander())
        .hit({
            method: 'GET',
            endpoint
        })
        .times(parseInt(Commander.opts().times))
        .charge();
} else {
    Commander.help();
}