# Education — a counter that clamps

> **Rung:** `npm test`.  
> **The test is the rule.** No oracle and no NFT.

```ts
applyWear(100n, [
  { at: 1, delta: -30n },
  { at: 2, delta: -80n },
  { at: 3, delta: 10n },
])
// { ok: true, remaining: 10n, condition: "worn" }
```

Start at max. Add each delta. Below 0 becomes 0. Above max becomes max. After the second event the counter is 0, then the repair of 10 leaves 10, which is `worn`. `new` means remaining equals max. `spent` means 0. A later `at` that is smaller is `{ ok: false }`. A zero delta is refused. The backwards case is tested. The zero-delta string is in `wear.ts` and is not asserted.

`wax-phygital-redemption-milestone-stepper` shows six fixture titles. It does not call `applyWear`. Neither reads mutable data. Neither is native NFT backing.

```bash
npm test
```
