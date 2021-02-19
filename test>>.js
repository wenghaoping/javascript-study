let flgs = {
    A: 1,
    B: 1 << 1,
    C: 1 << 2
}

let user = 0;
user |= flgs.A;
user |= flgs.C;

console.log(user);