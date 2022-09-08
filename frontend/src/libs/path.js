export default class Path {
    constructor(string) {
        this._parts = string.split("/");
        if (this._parts[0] === "") {
            this._parts[0] = "/";
        }
        this._parts = this._parts.filter((x) => x !== "");
    }

    get parts() {
        return this._parts;
    }

    resolve() {
        const newParts = [];
        for (const part of this._parts) {
            if (part === ".") {
                continue;
            }
            if (part === "..") {
                newParts.pop();
                continue;
            }
            newParts.push(part)
        }
        this._parts = newParts
        return this;
    }
}