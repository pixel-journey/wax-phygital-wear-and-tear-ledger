import { ATOMIC_ORIGIN, HISTORY_ORIGIN, historyActions } from "./api";
import { applyWear } from "./wear";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const worn = applyWear(100n, [
  { at: 1, delta: -30n },
  { at: 2, delta: -80n },
]);
if (!worn.ok) throw new Error(worn.reason);
const spent = worn;

export const USE_CASES: UseCase[] = [
  {
    title: "setassetdata history is not a wear log",
    detail: "Hyperion can list atomicassets::setassetdata. applyWear does not decode those rows. The request is not sent.",
    request: historyActions(HISTORY_ORIGIN, "alice", "atomicassets:setassetdata", 20),
    transaction: null,
  },
  {
    title: "An asset read is not durability",
    detail: `After -30 and -80 against a max of 100, remaining is ${spent.remaining.toString()} and the condition is ${spent.condition}. No oracle action is built.`,
    request: { method: "GET", url: `${ATOMIC_ORIGIN}/atomicassets/v1/assets/1`, executed: false },
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (spent.condition !== "spent" || spent.remaining !== 0n) throw new Error("wear");
}
