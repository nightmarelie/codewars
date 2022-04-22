const num = (n) => (op) => op ? op(n) : n;

const zero = num(0);
const one = num(1);
const two = num(2);
const three = num(3);
const four = num(4);
const five = num(5);
const six = num(6);
const seven = num(7);
const eight = num(8);
const nine = num(9);

const plus = (r) => (l) => l + r;
const minus = (r) => (l) => l - r;
const times = (r) => (l) => l * r;
const dividedBy = (r) => (l) => Math.floor(l / r);
