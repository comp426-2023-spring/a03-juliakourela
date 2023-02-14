#!/usr/bin/env node

import minimist from 'minimist';

let args = minimist(process.argv.slice(2));

if (args.h || args.help) {
    console.log(`Usage: node-rps [SHOT]`)
    console.log(`Play Rock Paper Scissors (RPS)`)
    console.log(``)
    console.log(`  -h, --help      display this help message and exit`)
    console.log(`  -r, --rules     display the rules and exit`)
    console.log(``)
    console.log(`Examples:`)
    console.log(`  node-rps        Return JSON with single player RPS result.`)
    console.log(`                  e.g. {"player":"rock"}`)
    console.log(`  node-rps rock   Return JSON with results for RPS played against a simulated opponent.`)
    console.log(`                  e.g {"player":"rock","opponent":"scissors","result":"win"}`)
    process.exit(0)
}

if (args.r || args.rules) {
    console.log(`Rules for Rock Paper Scissors:`)
    console.log(``)
    console.log(`  - Scissors CUTS Paper`)
    console.log(`  - Paper COVERS Rock`)
    console.log(`  - Rock CRUSHES Scissors`)
}