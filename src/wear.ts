/**
 * Apply wear and repair events to a durability counter.
 * Events are arguments. No oracle and no NFT is read.
 */

export type WearEvent = { at: number; delta: bigint };

export type Condition = "new" | "worn" | "spent";

export type WearResult =
  | { ok: false; reason: string }
  | { ok: true; remaining: bigint; condition: Condition };

export function applyWear(max: bigint, events: readonly WearEvent[]): WearResult {
  if (max <= 0n) return { ok: false, reason: "max durability must be positive" };
  let previous = -1;
  let remaining = max;
  for (const event of events) {
    if (!Number.isInteger(event.at) || event.at < previous) return { ok: false, reason: "events must be in time order" };
    previous = event.at;
    if (event.delta === 0n) return { ok: false, reason: "a zero delta changes nothing" };
    remaining += event.delta;
    if (remaining < 0n) remaining = 0n;
    if (remaining > max) remaining = max;
  }
  const condition: Condition = remaining === max ? "new" : remaining === 0n ? "spent" : "worn";
  return { ok: true, remaining, condition };
}
