import fs from "node:fs";
import assert from "node:assert/strict";
const html=fs.readFileSync("index.html","utf8");
const required=["https://hania360.com/","https://gps.hania360.com/","https://elinoya.hania360.com/","https://save.hania360.com/"];
for(const url of required) assert.ok(html.includes(url), `missing required URL: ${url}`);
assert.ok(!html.includes("discounts.hania360.com"),"legacy discounts hostname must not return to Hania360");
assert.match(html,/rel="canonical" href="https:\/\/hania360\.com\/"/);
console.log("Hania360 production link contract OK");
