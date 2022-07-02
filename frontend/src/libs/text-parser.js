export function parseText(text) {
    const lines = text
        .split("\n")
        .filter((x) => x)
        .map((line) => line.split(" ").filter((x) => x));
    let found = lines.find((tokens) => tokens.length > 5);
    if (found) {
        throw `A line has too much tokens '${found}'`;
    }
    const symbols = lines.map((tok) => ({
        name: tok[0],
        type: tok[1],
        address: tok[2] == null ? tok[2] : Number.parseInt(tok[2], 16),
        size: tok[3] == null ? tok[3] : Number.parseInt(tok[3], 16),
        location: tok[4],
    }));
    found = symbols.find((symbol) => symbol.type == null || symbol.type.length > 1);
    if (found) {
        throw `A invalid symbol type as been found '${JSON.stringify(
            found
        )}'`;
    }
    return symbols;
}