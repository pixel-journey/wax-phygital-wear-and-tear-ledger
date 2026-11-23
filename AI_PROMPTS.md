# AI handoff — durability counter

## Non-negotiables

1. Remaining starts at `max` and clamps at `0` and at `max`.
2. Max 100, then −30, −80, +10 → remaining **10**, condition **`worn`**. The −80 hits zero before the repair.
3. Max 10, no events → remaining 10, **`new`**. Max 10, delta +5 → still 10, `new` (repair cannot pass max).
4. Max 10, delta −10 → remaining 0, **`spent`**.
5. Equal timestamps are allowed. A later `at` that is smaller is refused. Zero delta is refused.
6. `worn` is everything that is neither `new` nor `spent`.
7. Not an oracle and not mutable NFT data. No device vibration.

## Prompt seeds

- "100, then -30, -80, +10 — remaining and condition."
- "at:2 then at:1 — refused?"
- "Refuse calling this an NFT mutable field."

## Do not

- Read an NFT or oracle in unit tests.
- Allow remaining above max after repair.
