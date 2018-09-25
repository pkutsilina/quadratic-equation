module.exports = function solveEquation(equation) {
    let regexp = /([-+]?\d+)\s*\*\s*x\^2\s*([-+]\s*\d+)\s*\*\s*x\s*([-+]\s*\d+)/g;
    let match = regexp.exec(equation);

    let aStr = match[1];
    let bStr = match[2];
    let cStr = match[3];

    let a = Number(aStr.replace(/ /g, ''));
    let b = Number(bStr.replace(/ /g, ''));
    let c = Number(cStr.replace(/ /g, ''));

    let D = Math.pow(b, 2) - 4 * a * c;
    let res1 = (-b - Math.sqrt(D)) / (2 * a);
    let res2 = (-b + Math.sqrt(D)) / (2 * a);
    if (res1 < res2) {
        return [Math.round(res1), Math.round(res2)];
    } else {
        return [Math.round(res2), Math.round(res1)];
    }
}
