#!/usr/bin/env deno run --allow-read=.

const cleanFortunes = Deno.readTextFileSync("freebsd.fortunes");
const fortunes = cleanFortunes.split("%").slice(1);

if (Deno.args.some((a) => a == "-o" || a == "--offensive")) {
  const dirtyFortunes = Deno.readTextFileSync("offensive.fortunes");
  fortunes.push(...dirtyFortunes.split("%").slice(1));
}

console.log(fortunes[Math.floor(Math.random() * fortunes.length)].trim());
