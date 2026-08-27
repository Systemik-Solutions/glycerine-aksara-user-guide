# The Shared Lexicon

Almost everything in Glycerine Aksara belongs to one edition and one editor. Lemmas and inflections
do not. They sit in tables shared by every user of the installation, and that single design decision
explains most of what is otherwise puzzling about how the Editor treats them.

## Why they are shared

Because a lemma is only worth having if it gathers attestations across editions.

If each edition kept its own private word list, the glossary would be a per-edition index and
nothing more. Sharing the lemma means the same headword accumulates attestations from every edition
that uses it — so the question "where else is this word attested, and how is it inflected there" has
an answer, and the answer improves as the corpus grows. The same holds for inflections: a
morphological analysis is a claim other editors should be able to reuse and point at.

The cost is that a shared record cannot be freely rewritten by whoever happens to be editing it.
Hence everything below.

## Private, then canonical

A lemma has an owner, and *approval means losing it*:

| State | Owner | Who can use it | Who can change it |
| --- | --- | --- | --- |
| **Private** | You | You | You |
| **Pending review** | You | You | Nobody — it is locked while under review |
| **Canonical** | Nobody | Everyone | Administrators |
| **Deprecated** | Nobody | Existing tokens keep it; it cannot be chosen afresh | Administrators |

::: info Why your approved lemma is no longer yours
Becoming canonical is not a flag set on your lemma — it is the removal of its owner. That is the
literal mechanism, and it is why the fields grey out the moment a submission is approved. The record
has stopped being your draft and become shared infrastructure.
:::

The exchange is deliberate: you give up unilateral control and get, in return, a headword that other
editors' work will attach to. A private lemma keeps you editing freely at the price of being a
private note. See [Lemmas](/editor/lemmas#private-canonical-and-the-road-between).

Deprecation exists because canonical lemmas cannot simply be deleted — tokens in other people's
editions may depend on them. Retiring one keeps every existing link intact while removing it from
circulation for new work.

## What a lemma actually holds

The headword, a translation, a homograph number distinguishing identical spellings, an optional link
to an external dictionary, and a list of **cognates** — each a (language, form) pair rather than a
free-text note, so that the Sanskrit or Pali comparandum is a queryable value.

::: warning A cognate is not the same thing as a canonical lemma
"Canonical" describes a lemma's *review status*. The Sanskrit or Pali form beside a Gāndhārī
headword is a **cognate**, and a private lemma can have cognates just as a canonical one can. The
two are unrelated.
:::

## What an inflection actually holds

Nothing of its own. An inflection is a bundle of values drawn from controlled vocabularies — part of
speech, and then whichever of case, number, gender, person, tense, voice, and the rest that part of
speech admits.

There is no free-text field, by design: an inflection is meant to be compared and counted across the
corpus, which requires that everyone recording an accusative singular records the same value. It is
also why the form reshapes itself when you change the part of speech — the visible fields are
computed from your choice rather than fixed. See
[Inflections](/editor/inflections#the-fields-follow-the-part-of-speech).

## Attestation is per edition, the word is not

A lemma is global; the attestations you see are scoped to what you are reading. The Viewer's
[glossary](/viewer/glossary-view) lists the lemmas attested *in the open edition*, with that
edition's occurrences — not every occurrence in the corpus.

And an attestation is only ever visible if the edition containing it is. A private edition's tokens
contribute nothing to anyone else's view of a shared lemma, so publishing an edition is also what
contributes its evidence.

## Inherited from READ

The lexicon was seeded from READ, and the sorting algorithm that orders it is a port of READ's own.
Editors coming from that environment should find the headwords, the homograph numbering, and the
glossary ordering familiar; where they differ, the imported rows are the older authority.

## Related

- [Lemmas](/editor/lemmas) — choosing, creating, and submitting them.
- [Canonical Lemmas and Review](/editor/canonical-lemmas) — the review side.
- [Akṣaras and Transliteration](/concepts/aksaras#sorting-follows-the-script-not-the-latin) — how
  the ordering is computed.
