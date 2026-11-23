# Sources

| Source | Use |
| --- | --- |
| [docs.wax.io](https://docs.wax.io/) | Product context only |
| [escrowed merch timeline](https://github.com/pixel-journey/wax-escrowed-merch-custody-timeline) | Skip refusal (different product) |

## Locked by tests

- Wear and repair events clamp to `[0, max]`.
- Backwards clock refused. Zero delta refused.
- Conditions: `new`, `worn`, `spent`.
- Not an oracle. Not mutable NFT data.
