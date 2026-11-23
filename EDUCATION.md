# Education — a durability counter

> **Rung:** `npm test` passes. Events are arguments. No oracle and no NFT is read.  
> **The test is the rule.** Escrow state machine: [wax-escrowed-merch-custody-timeline](https://github.com/pixel-journey/wax-escrowed-merch-custody-timeline).

## Learning outcomes

| Level | After this file |
| --- | --- |
| Beginner | Apply wear/repair and read remaining + condition |
| Intermediate | Clamp at 0/max; refuse inverted timestamps |
| Masterclass | Separate the counter from a physical oracle |

---

## Beginner — one scene

Remaining starts at `max`. Clamps at `0` and `max`. Equal timestamps allowed; later `at` smaller refused; zero delta refused.

| Call | Locked result |
| --- | --- |
| max `100`, then `−30`, `−80`, `+10` | remaining `10`, condition `worn` |
| max `10`, no events | remaining `10`, `new` |
| max `10`, delta `+5` | remaining `10`, `new` (cannot exceed max) |
| max `10`, delta `−10` | remaining `0`, `spent` |
| `at: 2` then `at: 1` | not ok |

`worn` is everything that is neither `new` nor `spent`.

```bash
npm test
```

---

## Intermediate

| Rule | Detail |
| --- | --- |
| Order | non-decreasing `at` |
| Delta | non-zero integer |
| Clamp | remaining in `[0, max]` |

### Attack → test

| Attack | Lab behavior |
| --- | --- |
| Repair past max | clamps |
| Wear past zero | clamps to 0 |
| Time travel | refused |
| Call it an oracle | arguments only |

### Exercises

1. −30 then −80 then +10 from 100 — remaining? (**10**.)  
2. Repair alone from max — condition? (**new**.)  
3. Is an NFT read? (**No**.)

---

## Masterclass

Phygital products need real-world attestation this lab does not provide. The counter only answers: given these signed deltas, what remaining value does the pure rule produce?

---

## What this course will not teach

- Sensor / oracle integration
- AtomicAssets mutable data writes
- That `spent` is a burn transaction
