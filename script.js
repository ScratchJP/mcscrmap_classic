let mx = -1536, mz = -1536, x = 0, z = 0, s = 100, ms = 100, l = 1, ml = 1, ls = 100;
let wx, wy, n, y, ymt;
let sx = 0, sy = 0, cx = 0, cy = 0, scr = 0;
let drag = false;
const g = 12, b = 32, mj = document.getElementById('mh'), ix = 5632, iy = 4608;
document.addEventListener("mousemove", (event) => {
    document.onmousedown = () => { drag = true; mj.style.cursor = "grabbing"; }
    document.onmouseup = () => { drag = false; mj.style.cursor = "grab"; }
    if ( drag ) {
        sx += event.movementX / g;
        sy -= event.movementY / g;
    }
    cx = -event.clientX + wx / 2, cy = event.clientY - wy / 2;
})

addEventListener("wheel", (event) => {
    scr = event.deltaY;
    n = scr / Math.abs(scr);
    y = n * 10 / (((s <= 100 && n > 0) || s < 100) + 1) * (((s >= 500 && n < 0) || s > 500) * 4 + 1) * (((s >= 2500 && n < 0) || s > 2500) + 1);
    s -= y;
    if (s < 5) {
        s = 5;
        y = 0;
    } else if (s > 5000) {
        s = 5000;
        y = 0;
    }
    ymt = y;
    if (Math.abs(y) >= 50) {
        if (n > 0) {
            ymt = 10;
        } else {
            ymt = -10;
        }
    }
    l = Math.round(10000 / s) / 100;
    sx += (cx * ymt / 42) * (1 - s / ls) / 8;
    sy += (cy * ymt / 42) * (1 - s / ls) / 8;
    ls = s;
});

// scjp村
const pScjp = document.createElement("span");
document.body.appendChild(pScjp);
// 中野区
const pNkn = document.createElement("span");
document.body.appendChild(pNkn);
// 乱歩村
const pRa = document.createElement("span");
document.body.appendChild(pRa);
// 陸果町
const pRk = document.createElement("span");
document.body.appendChild(pRk);
// 望洋
const pBy = document.createElement("span");
document.body.appendChild(pBy);
// ysタウン
const pys = document.createElement("span");
document.body.appendChild(pys);
// すいこん
const psk = document.createElement("span");
document.body.appendChild(psk);
// ごんらんど
const paI = document.createElement("span");
document.body.appendChild(paI);
// uxrcf
const pUX = document.createElement("span");
document.body.appendChild(pUX);
// 凛
const pLi = document.createElement("span");
document.body.appendChild(pLi);
// name: ScJP村, x: 10, z: -2

setInterval(() => {
    // rg(変数, 地域名, x, z)
    rg(pScjp, "ScJP村", 10, -2);
    rg(pNkn, "中野区", -510, -190);
    rg(pRa, "乱歩村", -290, -410);
    rg(pRk, "陸果町", -448, -448);
    rg(pBy, "望洋市", -195, -800);
    rg(pys, "ysタウン", 285, 950);
    rg(psk, "すいこん島", 3190, 80);
    rg(paI, "あぁるごんアイランド", 3600, 344);
    rg(pUX, "UXRCF市", 872, 269);
    rg(pLi, "凛市", -6, 1420);
    ms += (s - ms) / 32;
    ml += (l - ml) / 32;
    wx = window.innerWidth, wy = window.innerHeight;
    mj.style.backgroundPosition = `${(x + mx) * ms / 100 + wx / 2}px ${(-z + mz) * ms / 100 + wy / 2}`;
    mj.style.backgroundSize = `${ix * ms / 100}px ${iy * ms / 100}px`
    document.getElementById('pos').textContent = `X: ${-(Math.round((x + cx * ml)))} Z: ${Math.round((z + cy * ml))}`;
    document.getElementById('z').textContent = `x${Math.round(ms) / 100}`
    sx -= sx / b, sy -= sy / b;
    x += sx * ml / ((ml > 2) + 1); z += sy * ml / ((ml > 2) + 1);
})

function rg(tg, name, xi, zi) {
    tg.innerHTML = `<span class="t" style="transform:translate(${(x + xi) * ms / 100 + wx / 2}px,${(-z + zi) * ms / 100 + wy / 2}px);position:absolute;">${name}</span>`;
}