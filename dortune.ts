#!/usr/bin/env deno run --allow-read=.

async function readFortunes(name: string): Promise<string[]> {
  const resp = await fetch(new URL(`./${name}`, import.meta.url));
  return (await resp.text()).split("%").slice(1);
}

const fortunes = await readFortunes("freebsd.fortunes");

if (Deno.args.some((a) => a === "-o" || a === "--offensive")) {
  fortunes.push(...await readFortunes("offensive.fortunes"));
}

console.log(fortunes[Math.floor(Math.random() * fortunes.length)].trim());
