# Text-Critical Marks

Text-critical marks record the difference between what is on the manuscript and what the edition
prints. They are what the Viewer's three
[display modes](/viewer/transliteration#display-modes) are computed from: diplomatic shows what the
scribe wrote, reconstructed shows what the editor thinks it said, and hybrid shows the difference.

## Marks belong to a grapheme

A mark is applied to the **selected grapheme**, not to the akṣara. Select the chip in the grapheme
sequence, then choose a mark from the pills below. The pane says as much: *Marks are properties of
the individual grapheme.*

This is deliberate. Half an akṣara can be legible and half restored, and only a per-grapheme mark can
say so.

## The six marks

| Pill | Meaning | What it records |
| --- | --- | --- |
| `[ ]` | **Uncertain reading** | An unclear or partially preserved grapheme whose reading is uncertain |
| `(* )` | **Editorial restoration of lost text** | A lost grapheme, conjecturally restored by the editor from context, parallel, or other means |
| `⟨* ⟩` | **Editorial addition of omitted text** | A grapheme the scribe omitted, restored by the editor |
| `⟪ ⟫` | **Scribal insertion** | Text the scribe omitted and then added as an interlinear insertion |
| `{ }` | **Editorial deletion of redundant text** | A superfluous grapheme written in error, which the editor ignores |
| `{{ }}` | **Scribal deletion** | A grapheme the scribe deleted |

Hovering a pill shows its full definition.

The distinctions worth keeping straight are the ones about *who* did what. `⟨* ⟩` and `⟪ ⟫` both
cover something the scribe left out — but in `⟨* ⟩` the editor supplies it, and in `⟪ ⟫` the scribe
themself came back and added it. Likewise `{ }` is the editor setting aside a redundant grapheme,
while `{{ }}` is the scribe having struck it out.

Choosing a mark again clears it.

## Marks you cannot set

The vocabulary in the database is larger than the six pills. If an akṣara carries a mark from
outside the exposed set, the pane shows it as read-only text — **Current mark: …** — rather than
silently dropping it. You can leave it alone or replace it with one of the six.

## Clarity is not a mark

[Clarity](/editor/aksaras) and obscuration are akṣara properties, not text-critical marks. Clarity
says how well the sign survives; `[ ]` says the *reading* is uncertain. A sign can be faint but
unambiguous, or crisp and still unclear.
