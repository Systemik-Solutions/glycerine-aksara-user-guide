# Inflections

The **inflection** records how a lemma is realised in this token: case, number, tense, and so on.
It is what the Viewer prints under each word — `viharaḍi` / `vi + hṛ, pres. sg. 3rd`.

## The fields follow the part of speech

You do not choose which fields to fill in. The token inspector shows only those meaningful for the
lemma's part of speech and subpart, and hides the rest.

| Part of speech | Fields shown |
| --- | --- |
| **noun** | Nominal Gender · Case · Grammatical Number |
| **adj.**, **number** | Case · Nominal Gender · Grammatical Number |
| **pron.** — *pers.*, *refl.* | Case · Grammatical Number |
| **pron.** — other subparts | Case · Nominal Gender · Grammatical Number |
| **v.** — *Finite* | Grammatical Number · Verbal Person · Verbal Voice · Verbal Tense · Verbal Mood |
| **v.** — *Derivative* | Verbal Secondary Conjugation |
| **ind.**, **ptc.**, **adv.**, **adp.**, and other flat terms | none |

Indeclinables have no inflection section at all — the heading disappears with the fields.

::: tip A verb with no inflection fields is missing its subpart
A lemma whose part of speech is *v.* but which has no subpart chosen shows no inflection fields,
because *Finite* and *Derivative* take completely different ones. Set the subpart on the
[lemma](/editor/lemmas) and the fields appear.
:::

## Values

Each field is a dropdown from a fixed vocabulary, and each can be cleared back to **—**. A partial
analysis is perfectly acceptable — record what the form actually tells you and leave the rest empty.

**Verbal voice** offers active (`P.`) and middle (`Ā.`).

## Changing the lemma changes the fields

Repointing a token at a lemma with a different part of speech re-computes which fields apply.
Values belonging to fields that no longer apply are **not saved** — a case marking does not survive
a switch from noun to verb. Check the inflection after changing a lemma.

## Cognates

Cognates are properties of the **lemma**, not the token: a language and a form, most often the
Sanskrit equivalent. A lemma may carry several. Because they sit on the lemma, every attestation
inherits them, which is what lets the Viewer show the Sanskrit alongside any occurrence of the word.
