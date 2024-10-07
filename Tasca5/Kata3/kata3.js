// kata.js
export function removeFirstAndLast(str) {
    if (str.length <= 2) {
        return str;
    }
    return str.slice(1, -1);
}
