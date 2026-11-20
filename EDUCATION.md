# Education — a durability counter

> **Rung:** `npm test` passes. Events are arguments. No oracle and no NFT is read.  
> **The test is the rule.** A state machine that also refuses a skip is [wax-escrowed-merch-custody-timeline](https://github.com/pixel-journey/wax-escrowed-merch-custody-timeline).

## Predict, then run

Remaining starts at `max`. It clamps at `0` and at `max`. Equal timestamps are allowed. A later `at` that is smaller is refused. A zero delta is refused.

| Call | Locked result |
| --- | --- |
| max `100`, then `−30`, `−80`, `+10` | remaining `10`, condition `worn`. The `−80` hit zero before the repair. |
| max `10`, no events | remaining `10`, `new` |
| max `10`, delta `+5` | remaining `10`, `new`. A repair cannot pass the max. |
| max `10`, delta `−10` | remaining `0`, `spent` |
| `at: 2` then `at: 1` | not ok |

`worn` is everything that is neither `new` nor `spent`.

The HTTP examples include an Atomic Packs `unboxassets` row. That request is unsent, and it is not this counter.
