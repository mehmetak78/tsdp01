import Chain from "./Chain";

const chain = new Chain();
const payload = 1;
const out = chain.start(payload);
console.log(`Finished result = ${out}`);