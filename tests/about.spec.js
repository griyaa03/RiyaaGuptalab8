import { describe, it, expect } from "vitest";
import {add} from '../src/about.js';

describe ('Abouts this test suite', () => {
    it('should pass', () => {
        expect(true).toBe(true);
    });

    it('should calculate properly', () => {
        const actual = add(1,2);
        expect(actual).toBe(3);
    });
})