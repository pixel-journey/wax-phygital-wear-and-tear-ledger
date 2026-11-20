import { describe, expect, it } from "vitest";
import { applyWear } from "./wear";

describe("wear", () => {
  it("clamps at zero and then accepts a repair", () => {
    const worn = applyWear(100n, [
      { at: 1, delta: -30n },
      { at: 2, delta: -80n },
      { at: 3, delta: 10n },
    ]);
    expect(worn).toEqual({ ok: true, remaining: 10n, condition: "worn" });
  });

  it("rejects events that go backwards", () => {
    expect(applyWear(100n, [{ at: 2, delta: -1n }, { at: 1, delta: -1n }]).ok).toBe(false);
  });

  it("starts new, clamps a repair to max, and spends at zero", () => {
    expect(applyWear(10n, [])).toEqual({ ok: true, remaining: 10n, condition: "new" });
    expect(applyWear(10n, [{ at: 1, delta: 5n }])).toEqual({ ok: true, remaining: 10n, condition: "new" });
    expect(applyWear(10n, [{ at: 1, delta: -10n }])).toEqual({ ok: true, remaining: 0n, condition: "spent" });
  });
});
