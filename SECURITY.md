# Security — wear and tear

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Over-repair | clamps at max |
| Over-wear | clamps at 0 |
| Backwards time | refused |
| Network | not called |

## Attack angles

1. Writing remaining into NFT mutable data as if the lab signed it.  
2. Claiming a device or oracle updated the counter.  
3. Allowing negative remaining after a large wear event.

## Honesty limits

Event list only. No chain.
