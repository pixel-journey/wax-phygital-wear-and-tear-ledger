# wax-phygital-wear-and-tear-ledger — Phygital Wear & Tear Ledger

> **Status:** 🔒 Private (In Development) | Target Public Release: August 2026  
> **Category:** Phygital (RWA) Redemptions & Supply-Chain Legibility  
> **Parent Catalog:** [pixel-journey/wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

**One-sentence goal:** An analytical dashboard that tracks real-world asset degradation, wear patterns, and condition logs for phygital items by parsing oracle-pushed or brand-signed mutable metadata updates on AtomicAssets, giving collectors and insurers transparent history of physical item health over time.

---

## 1. Overview & Goal

This blueprint creates a beautiful ledger and analytics view for the physical condition of redeemed phygital assets. It answers: How has this limited-edition hoodie held up after 6 months of wear? Has it been repaired? What is its current condition score?

- **Why it matters:** Physical goods degrade. Transparent wear history builds secondary market trust, enables insurance products, and creates emotional connection ("this item has a story").
- **Public infra only:** AtomicAssets mutable data updated by brand/oracle keys with condition reports, photos (IPFS), repair logs. Hyperion for historical updates. No custom contracts.
- **Target users:** Serious collectors, insurers for high-value phygitals, brands offering aftercare, secondary market traders.
- **Success metrics:** "Full condition history in <3s", "Enable verifiable condition scores for insurance/underwriting", "Increase secondary sale prices for well-documented items".

---

## 2. Concepts & Inspiration

- **Core concepts:** Mutable data on NFTs can store evolving state (condition, photos, repair timestamps). Brand or trusted oracles push updates. Immutable history via Hyperion action stream gives audit trail.
- **Pain points:** No public record of physical condition after redemption. Secondary buyers can't assess 'mint condition' vs 'worn'. Missed opportunity for premium pricing on pristine items.
- **Inspirations:** Carfax vehicle history reports + sneaker condition grading apps (e.g. StockX) + blockchain provenance explorers. Web3: on-chain + real-world hybrid history.
- **Cross-references:** Pairs with `wax-phygital-redemption-milestone-stepper` and `wax-escrowed-merch-custody-timeline` for full lifecycle view. Complements `wax-rwa-certificate-authenticity-verifier`.

---

## 3. Design Specifications

### 3.1 Visual & Interaction Design
- Dashboard with timeline of condition updates + current 'Health Score' gauge (0-100).
- Cards for each wear event: date, description, photos, repair notes, updated score.
- Charts: Wear trend line over time, comparison to 'average' for similar items.
- Clean, premium feel — think high-end watch or sneaker collecting apps.

### 3.2 Key Views / Components
- `WearAndTearDashboard.tsx` — Main view with score, timeline, charts.
- `ConditionEventCard.tsx` — Individual update with photo gallery (IPFS) and notes.
- `HealthScoreGauge.tsx` — Visual dial + breakdown (fabric, color, structural).
- `OracleUpdatePanel.tsx` (brand) — Form to push new condition report via WharfKit.

### 3.3 Accessibility
- High contrast gauges, semantic timeline, keyboard accessible cards, screen reader friendly descriptions.

### 3.4 Performance
- Fast via cached queries; image lazy loading for condition photos.

---

## 4. Technical Architecture

### 4.1 Stack
- Next.js 15 + TS + Tailwind + shadcn + Recharts for trends
- React Query + WharfKit for updates
- Atomic + Hyperion for data

### 4.2 Data Flow
Mutable updates from authorized keys → parsed into events → rendered in timeline + score calculation (client-side rules or simple formula).

### 4.3 Folder Structure
Similar to siblings: components for dashboard/timeline/gauge, hooks for data, lib/wax for parsers.

### 4.4 Security
Client-side viewing; updates require signed WharfKit tx from authorized keys. Clear provenance of updates.

---

## 5. Implementation Examples
**Health score calculation (example)**
```ts
function calculateHealthScore(events: ConditionEvent[]) {
  // Simple weighted: base 100 - penalties for wear events + bonuses for repairs
  return Math.max(0, Math.min(100, base - events.length * 5 + repairs * 3));
}
```

**Timeline component using framer-motion for smooth entry.**

---

## 6. Demo & Testing
Mock data with sample hoodie wear history over 12 months. Live mode with test updates. Brand demo for pushing new condition reports.

---

## 7. Roadmap
Phases mirror siblings: data layer → UI components (timeline + gauge + charts) → polish & a11y → docs.

Future: Integration with insurance blueprints, predictive wear modeling, public API for secondary marketplaces to display condition scores.

---

## 8. Visual References
> Premium condition ledger like high-end watch service history pages or sneaker restoration logs. Beautiful photos of wear, clean typography, subtle animations on score changes. Reference: Carfax + StockX item pages + blockchain state visualizers.

---

## 9. Related Blueprints
- `wax-phygital-redemption-milestone-stepper`
- `wax-escrowed-merch-custody-timeline`
- `wax-rwa-certificate-authenticity-verifier`

---

## 10. License & Credits
MIT. For the WAX phygital ecosystem. Thanks to public infrastructure providers.

**Pixel Journey — Beautiful interfaces for public blockchain data.**
