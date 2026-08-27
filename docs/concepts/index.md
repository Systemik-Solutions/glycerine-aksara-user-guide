# Core Concepts

The Viewer and the Editor are two views onto the same body of data. This section explains the ideas
they share — the model, rather than the buttons. Read it once; both guides assume it.

## The short version

A **text** is one manuscript, with its photographs. An **edition** is one scholar's reading of that
manuscript; a text can carry several, and nothing ranks them.

Within an edition, the reading is recorded in layers. **Akṣaras** are outlined on the image and
spelled as sequences of **graphemes**. **Tokens** — words — point at those akṣaras, and carry a
**lemma** and an **inflection**. **Sequences** group tokens into units of text and carry the
translation and chāyā. Only the akṣara layer touches the image; every layer above it is defined by
pointing at the layer below.

The Editor is where those records are made. The Viewer presents them. The IIIF endpoints publish
them.

## Three things that surprise people

Worth knowing before you go further, because each one accounts for a whole class of confusion:

- **An akṣara is a sequence of graphemes, not a syllable.** There is no `śu` in the catalogue; there
  is `ś` followed by `u`. See [Akṣaras and Transliteration](/concepts/aksaras).
- **Images belong to the text, not the edition.** Every edition of a manuscript shares one set of
  photographs. See [The Data Model](/concepts/data-model#editions-and-images).
- **Lemmas are shared by everyone, not owned by your edition.** Which is why approving one takes it
  away from you. See [The Shared Lexicon](/concepts/lexicon).

## In this section

- [The Data Model](/concepts/data-model) — how the pieces relate, who owns them, and who can see them.
- [Editions](/concepts/editions) — text versus edition, and why a text carries several readings.
- [Akṣaras and Transliteration](/concepts/aksaras) — how the script is modelled, and how it sorts.
- [The Shared Lexicon](/concepts/lexicon) — lemmas and inflections as common property.
- [Annotations](/concepts/annotations) — how each layer anchors to the one below it.
- [IIIF and Deep-Zoom Images](/concepts/iiif) — how images are served and editions published.

Unfamiliar term? Check the [glossary](/reference/glossary).
