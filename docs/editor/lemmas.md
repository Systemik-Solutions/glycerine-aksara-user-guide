# Lemmas

A **lemma** is a dictionary word: the headword a token is an inflected form of. Lemmas are what the
Viewer's [glossary](/viewer/glossary-view) is built from, and what links every attestation of a word
across an edition.

![A canonical lemma opened from a token: its fields are read-only](/images/editor/lemma-detail.jpg)

## Choosing one

In the token inspector, the **Lemma** field searches the lemmas available to you — the canonical
ones, plus your own. **Details** opens the selected lemma; **+ New lemma** creates one.

## The fields

| | |
| --- | --- |
| **Lemma** | The headword, in Gāndhārī |
| **Cognates** | Equivalents in other languages — a language (*Skt.*) and the form |
| **Part of speech** | *noun*, *v.*, *adj.*, *pron.*, *number*, *ind.*, *ptc.*, and others |
| **Subpart of speech** | Where the part of speech has one — *common*/*proper* for nouns, *Finite*/*Derivative* for verbs |
| **Gender** | Nouns only |
| **Verbal class** | Verbs only |
| **Translation** | The gloss |
| **Homograph order** | Distinguishes identical headwords — the `1`, `2` of *kar-*¹, *kar-*² |
| **Link** | A URL to an external dictionary entry, which the Viewer shows as a link |

Gender and verbal class appear only for the parts of speech that have them, and the subpart
dropdown appears only where the chosen part of speech has subdivisions.

::: warning Changing the part of speech clears what it hides
Switching a lemma from *v.* to *noun* discards the verbal class, because that field no longer
applies. Opening an existing lemma never does this — only your own change to the field.
:::

## Private, canonical, and the road between

This is the part of the Editor worth understanding before you create your fiftieth lemma.

**A lemma you create is private to you.** You can use it, edit it, and delete it; nobody else can see
it or link a token to it. The form says so: *Only you can use this lemma.*

**Submitting it for review** offers it for promotion. While the request is pending the lemma is
**locked** — the fields grey out, and a strip at the top of the form says when you submitted it. You
can **Withdraw request** to get editing back.

**If it is approved** the lemma becomes **canonical**: available to every user, maintained by the
administrators, and no longer yours. You cannot edit or delete it any more. The submit dialog spells
this out before you commit.

**If it is rejected** the strip shows who reviewed it, when, and their note. Rejection is not always
a criticism — a request is commonly turned down because an equivalent canonical lemma already
exists.

A lemma is worth submitting when it is a real word of the language that other editions will meet
again. Something ad hoc for one damaged passage is better left private.

## Why your lemma's fields are greyed out

Because it is not yours. Opening a canonical lemma — or any lemma you did not create — shows it
read-only, with no Save button. That is the normal state for most lemmas you will use.

## Deprecated lemmas

A canonical lemma can be **deprecated** by an administrator. Existing tokens keep their link, and
the lemma still displays, but it cannot be chosen for new tokens. A warning strip on the form says
so.

## Deleting a lemma

Only possible for your own, and only when no review is pending. Tokens using it lose the link — they
are not deleted, they simply become unlemmatised, and the confirmation warns you.

## Related lemmas

Where a lemma shares its headword with others — homographs — the form lists them, and each can be
opened. Deprecated relatives are listed too, tagged as such, so you can see why a form you expected
is not selectable.
