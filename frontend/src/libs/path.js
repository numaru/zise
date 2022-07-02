export default class Path {
    constructor(string) {
        this.string = string;
    }

    get parts() {
        const parts = this.string.split("/")
        if (parts[0] === "") {
            parts[0] = "/";
        }
        return parts.filter((x) => x !== "." && x !== "");;
    }
}