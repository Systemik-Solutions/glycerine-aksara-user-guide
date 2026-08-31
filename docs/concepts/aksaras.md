# Akṣaras and Transliteration

This page is about how Glycerine Aksara *models* the script, not about the script itself. The
model departs from ordinary editorial practice in a few places, and those places are where mistakes
get made.

## What the system calls an akṣara

In Glycerine Aksara an akṣara is **one outlined region of the image together with an ordered
sequence of graphemes**. That is the whole definition. It carries no notion of a syllable, no
onset/nucleus structure, and no rule about what may or may not go inside it.

::: warning An akṣara is a sequence of graphemes, not a syllable
`śu` is not an entry anywhere. It is the akṣara `ś` + `u` — two graphemes recorded in order. The
catalogue contains only individual graphemes, so searching it for `sa`, `ka` or `śu` returns
nothing. See [Akṣaras and Graphemes](/editor/aksaras#an-aksara-is-a-sequence-of-graphemes).
:::

This matters beyond the picker. Because the unit is the grapheme, everything that describes the
writing attaches at grapheme level too — a text-critical mark applies to the `u` rather than to the
sign as a whole, which is what lets an editor restore a vowel while leaving the consonant as read.

## Where the akṣara boundary actually falls

The outline says where a sign is. It does not say where a word is: word boundaries are recorded
separately, on the [token](/concepts/data-model#aksaras-lines-and-tokens) layer, and they are free
to fall *inside* an akṣara. A sign that closes one word and opens the next is recorded once, and
two tokens each claim part of it.

So the editorial decision "where does this word end" never forces a decision about how to outline
the writing. The two questions stay separate, which is the point.

## The vowel carrier

The one piece of machinery in the model with no counterpart on the page.

A vowel that opens an akṣara, or that follows another vowel, is stored with a preceding **carrier**
grapheme, written `ʔ` and typed as a consonant. It exists so that every vowel in the data has a
consonant before it, which keeps sorting and comparison uniform.

You will not meet it directly. It is hidden from the grapheme picker, inserted automatically on
save, and stripped again on display — `a` + `ʔ` + `i` renders as `aï`. The only reason to know it
exists is that it explains the diaeresis, which otherwise looks like something you did not type.

## Sorting follows the script, not the Latin

Every grapheme carries a numeric sort code, and those codes encode Indic alphabetical order — vowels,
then velars, palatals, retroflexes, dentals, labials, semivowels, sibilants, `h`. Variant forms sort
immediately after the base they modify, so `ḵ` follows `k` and `ḏ` follows `d` rather than landing
wherever Unicode would put them.

Lemmas are sorted by the same codes, computed from the headword. Two consequences worth knowing:

- Editorial markup is stripped before sorting, so a restored word files under its letters, not under
  its brackets.
- Anusvāra before a stop sorts as the corresponding class nasal, so `aṃta` files where `anta` does.

This is why the [glossary](/viewer/glossary-view) and the
[paleography view](/viewer/paleography-view) are ordered the way they are. They are not sorted
alphabetically by the transliteration string, and asking why `ṣ` precedes `s` has the same answer as
it would in any Indic dictionary.

::: info Inherited from READ
The sorting algorithm is a port of the one used by READ, and the shared lexicon was seeded from it.
If lemma ordering here matches what you are used to from READ, that is why.
:::

## Editorial signs are graphemes too

The signs an editor uses for what is *not* legible — the fragment break, the lost akṣara, the
illegible akṣara, the unread vowel — are entries in the grapheme catalogue like any other, each with
a type and a sort position. They are recorded as part of the reading rather than as annotations on
it, which means a lacuna occupies a position in the text and can be outlined on the image exactly as
a legible sign can.

## What is fixed and what is yours

The grapheme catalogue is reference data. It is the same for every user, and editors do not add to
it — an akṣara is spelled from the signs that exist, not from ad-hoc strings. The same is true of the
vocabularies for clarity, obscuration, text-critical marks, and grammar.

What is yours is the reading: which akṣaras exist, where they sit, which graphemes each is made of,
and how they are marked.

## Related

- [Akṣaras and Graphemes](/editor/aksaras) — recording them in the Editor.
- [Text-Critical Marks](/editor/text-critical-marks) — the six marks and their brackets.
- [Reading the Transliteration](/viewer/transliteration#display-modes) — diplomatic, hybrid, and
  reconstructed.
