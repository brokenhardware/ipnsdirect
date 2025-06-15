import { verifiedFetch } from 'https://esm.sh/@helia/verified-fetch?bundle-deps'

let ipnsAddr = "k51qzi5uqu5dhp48cti0590jyvwgxssrii0zdf19pyfsxwoqomqvfg6bg8qj3s";
const param = window.location.hash.substring(1);
if (param.length > 0) {ipnsAddr = param;}

const output = document.getElementById('output')

const resp = await verifiedFetch('ipns://' + ipnsAddr)
const blob = await resp.blob()
const imgEl = document.createElement('img')
imgEl.width = 600;
imgEl.setAttribute('src', URL.createObjectURL(blob))
output.appendChild(imgEl)
