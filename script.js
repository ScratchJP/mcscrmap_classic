const u = window.location.search
const p = new URLSearchParams(u);
let mx = -2560, mz = -2048, x = 0, z = 0, s = 100, ms = 100, l = 1, ml = 1, ls = 100, bs = .1;
let n, y, ymt;
let wx = window.innerWidth, wy = window.innerHeight, sx = 0, sy = 0, cx = 0, cy = 0, scr = 0;
let drag = false;
const g = 12, b = 32, mj = document.getElementById('mh'), ix = 6656, iy = 5120;
if (p.has('x')) {
    if (isNaN(parseFloat(p.get('x')))) {
        x = 0;
    } else {
        x = -parseFloat(p.get('x'));
    }
}
if (p.has('z')) {
    if (isNaN(-parseFloat(p.get('z')))) {
        z = 0;
    } else {
        z = parseFloat(p.get('z'));
    }
}
if (p.has('s')) {
    if (isNaN(parseFloat(p.get('s')))) {
        s = 100;
    } else {
        s = parseFloat(p.get('s')) * 100, ms = s, ls = s, l = Math.round(10000 / s) / 100, ml = l;
    }
}


document.addEventListener("mousemove", (event) => {
    document.onmousedown = () => { drag = true; }
    document.onmouseup = () => { drag = false; }
    if ( drag ) {
        sx += event.movementX / g;
        sy -= event.movementY / g;
    }
    cx = -event.clientX + wx / 2, cy = event.clientY - wy / 2;
})

document.addEventListener("touchmove", (event) => {
    document.ontouchstart = () => { drag = true; }
    document.ontouchend = () => { drag = false; }
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
    sx += (cx * ymt / 42) * (1 - s / ls) / 8 * -n;
    sy += (cy * ymt / 42) * (1 - s / ls) / 8 * -n;
    ls = s;
});


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
const pas = document.createElement("span");
document.body.appendChild(pas);
// 陸果町utf
const ufr = document.createElement("span");
document.body.appendChild(ufr);
// 阿斑市坊屋
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
// すいこん島中心駅
const skcs = document.createElement("span");
document.body.appendChild(skcs);
// すいこん島サトウキビファーム
const sksc = document.createElement("span");
document.body.appendChild(sksc);
// すいこん島2トラップ+ツリーファーム
const skt = document.createElement("span");
document.body.appendChild(skt);
// ぽてとの段々畑
const ptf = document.createElement("span");
document.body.appendChild(ptf);
// 旧家駅
const kks = document.createElement("span");
document.body.appendChild(kks);
// なんでも掲示板
const ndk = document.createElement("span");
document.body.appendChild(ndk);
// scjpセンター西(駅？)
const scw = document.createElement("span");
document.body.appendChild(scw);
// 阿斑市役所前(駅？)
const asb = document.createElement("span");
document.body.appendChild(asb);
// 阿斑市闘技場
const afp = document.createElement("span");
document.body.appendChild(afp);
// 阿斑市坊屋橋
const byb = document.createElement("span");
document.body.appendChild(byb);
// 阿斑銀行本店001
const ab001 = document.createElement("span");
document.body.appendChild(ab001);

/// 地域
// scjp村
const pScjp = document.createElement("span");
document.body.appendChild(pScjp);
// 阿斑市
const pAsp = document.createElement("span");
document.body.appendChild(pAsp);
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
// すいめろ
const psm = document.createElement("span");
document.body.appendChild(psm);

setInterval(() => {
    // rg(変数, 地域・施設名, x, z, 施設？)
    rg(pScjp, "ScJP村", 10, -2, 0);
    rg(pAsp, "阿斑市", -510, -190, 0);
    rg(pRa, "乱歩市", -290, -410, 0);
    rg(pRk, "陸果町", -448, -448, 0);
    rg(pBy, "望洋市", -195, -800, 0);
    rg(pys, "ysタウン", 285, 950, 0);
    rg(psk, "すいこん島", 3190, 80, 0);
    rg(paI, "あぁるごんアイランド", 3600, 344, 0);
    rg(pUX, "UXRCF市", 872, 269, 0);
    rg(pLi, "凛市", -6, 1420, 0);
    rg(psm, "すいめろ島", 3126, -261, 0);

    rg(p1a, "ScJP一周年記念館", 153, 356, 1);
    rg(pss, "市役所", 76, 101, 1);
    rg(pbb, "黒ビル", 125, 107, 1);
    rg(cuj, "じきお像", 55, 112, 1);
    rg(y9v, "村人貿易所", 35, 135, 1);
    rg(pas, "市役所", -628, -226, 1);
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
    rg(nks, "新開地駅", -10, -124, 1)
    rg(skcs, "すいこん島中心駅", 3197, 71, 1)
    rg(sksc, "サトウキビファーム", 3238, 82, 1)
    rg(skt, "クリーパートラップ<br>ツリーファーム<br>天空トラップタワー", 3290, 74, 1)
    rg(ptf, "ポテトの段々畑", 61, 229, 1)
    rg(kks, "旧家駅", -66, 85, 1)
    rg(ndk, "なんでも掲示板", 88, 81, 1)
    rg(scw, "センター西駅", 34, 76, 1)
    rg(asb, "市役所前駅", -611, -201, 1)
    rg(afp, "闘技場", -606, -157, 1)
    rg(byb, "坊屋橋", -575, -258, 1)
    rg(ab001, "阿斑銀行本店(001)", 100, 65, 1)
    ms -= bs;
    ms += (s - ms) / 32;
    ml += (l - ml) / 32;
    ms += bs;
    wx = window.innerWidth, wy = window.innerHeight;
    mj.style.backgroundPosition = `${(x + mx) * (ms / 100) + wx / 2}px ${(-z + mz) * (ms / 100) + wy / 2}`;
    mj.style.backgroundSize = `${ix * (ms / 100 + 0)}px ${iy * (ms / 100 + 0)}px`
    document.getElementById('pos').textContent = `X: ${-(Math.ceil((x + cx * ml)))} Z: ${Math.floor(((z + cy * ml) * 10) / 10)}`;
    document.getElementById('z').textContent = `x${Math.round(ms) / 100}`
    sx -= sx / b, sy -= sy / b;
    x += sx * ml / ((ml > 2) + 1); z += sy * ml / ((ml > 2) + 1);
    if (drag) {
        mj.style.cursor = "grabbing";
    } else {
        mj.style.cursor = "grab";
    }
    mj.style.width = `${wx}px`;
    mj.style.height = `${wy}px`;
    if (isElectron()) {
        document.title = cht();
    }
}, 1)

function rg(tg, name, xi, zi, isF) {
    let sf = "";
    let mt = 1;
    if (!isF) {
        sf = " tbg";
        mt = 1.5;
    } else {
        tg.style.opacity = ms / 100 - .4;
    }
    let sp = "";
    let mb = -10;
    let pd = 3;
    let pt = 2;
    let dk = 5;
    let fr = "";
    if (ms <= 25 && !isF) {
        fr = `font-size:${ms / 25}rem;`;
        pd = 3 * ms / 25;
        pt = 2 * ms / 25;
    }
    if (ms >= 400) {
        mb = (ms / 100 - 4) * 20 - 10;
        dk = (ms / 100 - 4) * 5 + 5;
        pd = 3 + (ms / 100 - 4)
        if (ms >= 500) {
            mb = 10;
            dk = 10;
            if (ms >= 1650) {
                pd = 15.5
            }
        }
    }
    if (ms >= 400) {
        sp = `opacity:${ms / 100 - 4};margin-bottom:${mb}px`;
    }
    tg.innerHTML = `<div style="transform-origin:bottom;transform:translate(${((x + xi) * ms / 100 + wx / 2) + (.5 * ms / 100)}px,${((-z + zi + .35) * ms / 100 - wy / 2) + ((0 + (mb / 25)) * ms / 100) + (dk * mt)}px);position:absolute;" c;lass="${sf.slice(1,3)}"><div class="tif${sf}" style="transform:translate(-50%,-150%);padding:${pt}px ${pd}px;${fr}"><span>${name}</span><p class="tpos" id="tb" style="${sp}">${xi} ${zi}</p></div></div>`;
}

let e = 0;
const j = new Date().getTime();
const d = .64;
const si = setInterval(() => {
    bs = -(Math.floor(easeOutExpo(e / 100) * 100) / 100 * 50) + 50;
    e = (new Date().getTime() - j) / 10 / d;
    e = Math.round(e * 100) / 100;
    if (e >= 100) {
        clearInterval(si);
        bs = 0;
    }
}, 1)

// https://easings.net/#easeOutBack
function easeOutExpo(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

setInterval(() => {
    p.set('x', -Math.round(x * 100) / 100);
    p.set('z', Math.round(z * 100) / 100);
    p.set('s', Math.round(s) / 100)
    history.pushState(null, cht(), `?${p.toString()}`);
}, 100);

// detect is electron client or not
function isElectron() {
    // Renderer process
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
        return true;
    }
  
    // Main process
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
        return true;
    }
  
    // Detect the user agent when the `nodeIntegration` option is set to true
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
        return true;
    }
  
    return false;
}

function cht() {
    return `Map (x${Math.round(s) / 100}, X: ${-Math.round(x * 100) / 100} Z: ${Math.round(z * 100) / 100})`;
}