import { describe, it, expect } from "vitest"
import Path from "./path"

describe("suite", () => {
    it("parts", () => {
        expect(new Path("/foo/bar").parts).toStrictEqual(["/", "foo", "bar"]);
        expect(new Path("//foo/bar").parts).toStrictEqual(["/", "foo", "bar"]);
        expect(new Path("/./foo/bar").parts).toStrictEqual(["/", "foo", "bar"]);
        expect(new Path("./foo/bar").parts).toStrictEqual(["foo", "bar"]);
        expect(new Path("./foo/./bar").parts).toStrictEqual(["foo", "bar"]);
    })
});
