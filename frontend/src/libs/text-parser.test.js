import { describe, it, expect } from 'vitest'
import { parseText } from './text-parser'

describe("suite", () => {
    it("parseText", () => {
        expect(parseText("lib1_bar T 1170 5	/home/sautoirs/Lab/zise/example/lib1/bar.c:3"))
            .toStrictEqual([{
                "address": 4464,
                "location": "/home/sautoirs/Lab/zise/example/lib1/bar.c:3",
                "name": "lib1_bar",
                "size": 5,
                "type": "T",
            }]);
        expect(parseText("lib1_bar T 1170 	/home/sautoirs/Lab/zise/example/lib1/bar.c:3"))
            .toStrictEqual([{
                "address": 4464,
                "location": "/home/sautoirs/Lab/zise/example/lib1/bar.c:3",
                "name": "lib1_bar",
                "size": undefined,
                "type": "T",
            }]);
        expect(parseText("_IO_stdin_used R 2000 4"))
            .toStrictEqual([{
                "address": 8192,
                "location": undefined,
                "name": "_IO_stdin_used",
                "size": 4,
                "type": "R",
            }]);
        expect(parseText("_ITM_registerTMCloneTable w         "))
            .toStrictEqual([{
                "address": undefined,
                "location": undefined,
                "name": "_ITM_registerTMCloneTable",
                "size": undefined,
                "type": "w",
            }]);
    })
});
