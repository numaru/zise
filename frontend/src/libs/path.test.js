import { describe, it, expect } from "vitest"
import Path from "./path"

describe("suite", () => {
    it("parts", () => {
        expect(new Path("/foo/bar").parts).toStrictEqual(["/", "foo", "bar"]);
        expect(new Path("//foo/bar").parts).toStrictEqual(["/", "foo", "bar"]);
        expect(new Path("/./foo/bar").parts).toStrictEqual(["/", ".", "foo", "bar"]);
        expect(new Path("./foo/bar").parts).toStrictEqual([".", "foo", "bar"]);
        expect(new Path("./foo/./bar").parts).toStrictEqual([".", "foo", ".", "bar"]);
    })
    it("resolve", () => {
        expect(new Path("/foo/bar").resolve().parts).toStrictEqual(["/", "foo", "bar"]);
        expect(new Path("//foo/bar").resolve().parts).toStrictEqual(["/", "foo", "bar"]);
        expect(new Path("/./foo/bar").resolve().parts).toStrictEqual(["/", "foo", "bar"]);
        expect(new Path("./foo/bar").resolve().parts).toStrictEqual(["foo", "bar"]);
        expect(new Path("./foo/./bar").resolve().parts).toStrictEqual(["foo", "bar"]);

        expect(new Path("/foo/bar/..").resolve().parts).toStrictEqual(["/", "foo"]);
        expect(new Path("/foo/bar/../").resolve().parts).toStrictEqual(["/", "foo"]);
        expect(new Path("/foo/bar/..//").resolve().parts).toStrictEqual(["/", "foo"]);
        expect(new Path("/foo/bar/../../foo").resolve().parts).toStrictEqual(["/", "foo"]);
    })
});
