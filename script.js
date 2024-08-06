let mx = -1536, mz = -2048, x = 0, z = 0, s = 100, ms = 100, l = 1, ml = 1, ls = 100;
let wx, wy, n, y, ymt;
let sx = 0, sy = 0, cx = 0, cy = 0, scr = 0;
let drag = false;
const g = 12, b = 32, mj = document.getElementById('mh'), ix = 5632, iy = 5120;
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
    y = n * 10 / (((s <= 100 && n > 0) || s < 100) + 1) * (((s >= 250 && n < 0) || s > 250) * 4 + 1) * (((s >= 2500 && n < 0) || s > 2500) + 1);
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

/// 地域
// scjp村
const pScjp = document.createElement("span");
document.body.appendChild(pScjp);
// 中野区
const pNkn = document.createElement("span");
document.body.appendChild(pNkn);
// 乱歩市
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

/// 施設
// ScJP一周年記念館
const p1a = document.createElement("span");
document.body.appendChild(p1a);
// ScJP村市役所
const pss = document.createElement("span");
document.body.appendChild(pss);
// ScJP村黒ビル
const pbb = document.createElement("span");
document.body.appendChild(pbb);
// ScJP村じきお像(銅)
const cuj = document.createElement("span");
document.body.appendChild(cuj);
// ScJP村99とゆくの村人貿易所
const y9v = document.createElement("span");
document.body.appendChild(y9v);
// 中野区役所
const pnk = document.createElement("span");
document.body.appendChild(pnk);
// 陸果町utf
const ufr = document.createElement("span");
document.body.appendChild(ufr);
// 中野区坊屋
const aby = document.createElement("span");
document.body.appendChild(aby);
// 阿斑銀行・信託銀行陸果支店
const rab = document.createElement("span");
document.body.appendChild(rab);
// コンブニック号
const ksh = document.createElement("span");
document.body.appendChild(ksh);
// 陸果駅
const rks = document.createElement("span");
document.body.appendChild(rks);
// 武庫川橋
const mkg = document.createElement("span");
document.body.appendChild(mkg);
// 武庫川駅
const mks = document.createElement("span");
document.body.appendChild(mks);
// scjpゴーレムトラップ
const itr = document.createElement("span");
document.body.appendChild(itr);
// ironJikky
const ironJikky = document.createElement("span");
document.body.appendChild(ironJikky);
// 王の橋
const jkb = document.createElement("span");
document.body.appendChild(jkb);
// 新開地駅
const nks = document.createElement("span");
document.body.appendChild(nks);

setInterval(() => {
    // rg(変数, 地域・施設名, x, z, 施設？)
    rg(pScjp, "ScJP村", 10, -2, 0);
    rg(pNkn, "中野区", -510, -190, 0);
    rg(pRa, "乱歩市", -290, -410, 0);
    rg(pRk, "陸果町", -448, -448, 0);
    rg(pBy, "望洋市", -195, -800, 0);
    rg(pys, "ysタウン", 285, 950, 0);
    rg(psk, "すいこん島", 3190, 80, 0);
    rg(paI, "あぁるごんアイランド", 3600, 344, 0);
    rg(pUX, "UXRCF市", 872, 269, 0);
    rg(pLi, "凛市", -6, 1420, 0);
    rg(p1a, "ScJP一周年記念館", 153, 356, 1);
    rg(pss, "市役所", 76, 101, 1);
    rg(pbb, "黒ビル", 125, 107, 1);
    rg(cuj, "じきお像", 55, 112, 1);
    rg(y9v, "村人貿易所", 35, 135, 1);
    rg(pnk, "区役所", -628, -226, 1);
    rg(ufr, "ﾕﾆﾊﾞｰｻﾙﾂﾘｰﾌｧｰﾑ跡", -530, -450, 1);
    rg(aby, "坊屋", -565, -290, 1);
    rg(rab, "阿斑銀行・阿斑信託銀行<br>陸果支店", -444, -530, 1);
    rg(ksh, "コンブニック号", -427, -620, 1);
    rg(rks, "陸果駅", -370, -410, 1)
    rg(mkg, "武庫川橋", -320, -412, 1)
    rg(mks, "武庫川駅", -295, -397, 1)
    rg(itr, "ゴーレムトラップ", -23, 7, 1)
    rg(ironJikky, "Iron Jikky", -29, 14, 1)
    rg(jkb, "王の橋", 79, 310, 1)
    rg(nks, "新開地駅", -10, 3-124, 1)
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

function rg(tg, name, xi, zi, isF) {
    let sf = "";
    if (isF) {
        sf = " sm";
        tg.style.opacity = ms / 100 - .4;
    }
    tg.innerHTML = `<span class="t${sf}" style="transform:translate(${(x + xi) * ms / 100 + wx / 2}px,${(-z + zi) * ms / 100 + wy / 2}px);position:absolute;">${name}</span>`;
}