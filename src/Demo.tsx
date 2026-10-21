"use client";

import { applyWear } from "./wear";

const events = [
  { at: 1, delta: -30n },
  { at: 2, delta: -80n },
  { at: 3, delta: 10n },
];

export function Demo() {
  const result = applyWear(100n, events);
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>Wear is a counter, not an oracle</h1>
      <p className="lede">Max 100. The events are in this file. Nothing is read from mutable NFT data.</p>
      <table>
        <caption>Events</caption>
        <thead>
          <tr>
            <th>At</th>
            <th>Delta</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.at}>
              <td>{event.at}</td>
              <td>{event.delta.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {result.ok ? (
        <p>
          Remaining {result.remaining.toString()}. Condition {result.condition}.
        </p>
      ) : (
        <p>{result.reason}</p>
      )}
    </main>
  );
}
