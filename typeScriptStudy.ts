interface A {
    x: number
}
interface B {
    y: string
}

function f(x: A | B) {
    if('x' in x) {
        x; // A
    } else {
        x; // B
    }
}