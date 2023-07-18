// [export] allows to import item from other modules

let user = {
    login: "super",
    password: "1"
};
export const id = 345;

export function getRandom(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}
