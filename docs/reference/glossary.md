# Glossary

Terms as **Glycerine Aksara uses them**. Several have a narrower or simply different sense here than
in ordinary editorial usage; those are flagged.

## Akṣara

One outlined region of a manuscript image together with an ordered sequence of
[graphemes](#grapheme).

::: warning Not a syllable
The system attaches no syllabic structure to an akṣara and imposes no rule about what may go inside
one. `śu` is `ś` + `u`, two graphemes; it is not an entry in any catalogue. A word boundary may fall
inside an akṣara. See [Akṣaras and Transliteration](/concepts/aksaras).
:::

Called a **segment** in the [IIIF endpoints](/reference/iiif-api) and in URLs.

## Annotation

A record that points at something and says something about it. An edition is a stack of them: the
akṣara annotates a region of the image, and every layer above annotates the layer below. See
[Annotations](/concepts/annotations).

## Attestation

An occurrence of a [lemma](#lemma) in a particular place in a particular edition. The lemma is shared
across the corpus; the attestations shown to you are those in the edition you have open.

## Canonical lemma

A [lemma](#lemma) that has been through review and approved, becoming shared property. Approval
removes its owner, which is why its creator can no longer edit it.

::: warning Not a Sanskrit or Pali headword
"Canonical" is a *review status*, nothing to do with reference languages. The Sanskrit or Pali form
recorded beside a Gāndhārī headword is a [cognate](#cognate), and private lemmas can carry cognates
too. See [The Shared Lexicon](/concepts/lexicon#private-then-canonical).
:::

## Canvas

The IIIF term for one image surface in a [manifest](#manifest) — here, one manuscript photograph.
Akṣara outlines are recorded against a canvas.

## Chāyā

The Sanskrit or Middle Indic rendering of the Gāndhārī. Stored per [sequence](#sequence) alongside
the translation, and readable as continuous prose in the Viewer.

## CKM

The manuscript's catalogue designation, recorded on the [text](#text) and carried into the
[manifest](#manifest) metadata. Distinct from the [reference](#reference), which is the short
citation form.

## Clarity

A controlled vocabulary describing how legible a [grapheme](#grapheme) is. A property of the
writing's survival, recorded separately from any editorial intervention — it is not a
[text-critical mark](#text-critical-mark).

## Cognate

A (language, form) pair recorded on a [lemma](#lemma) — the Sanskrit, Pali, or other comparandum. A
structured value rather than a free-text note, so it can be queried.

## Collection

A flat grouping of [texts](#text), by provenance, project, or repository. Many-to-many: a text can
belong to several collections or none, and nothing else depends on the grouping.

## Deprecated lemma

A canonical lemma withdrawn from circulation. Tokens already linked to it keep the link; it can no
longer be chosen for new work. Deprecation exists because canonical lemmas cannot safely be deleted.

## Diplomatic, hybrid, reconstructed

The three display modes for a transliteration. Diplomatic shows what survives; reconstructed shows
the editor's full restored reading; hybrid falls between, marking restorations in place. The
[report](/viewer/edition-report#three-readings-at-once) shows all three stacked. See
[Display modes](/viewer/transliteration#display-modes).

## Edition

One scholar's reading of one [text](#text): its akṣaras, word division, lemmatisation, structure,
translation, and chāyā. Owned by exactly one account, never co-edited, and never merged with
another. A text may carry any number of editions and none ranks above the rest. See
[Editions](/concepts/editions).

## Grapheme

A written sign from a fixed catalogue — the unit an [akṣara](#aksara) is spelled with. Each carries
a type (consonant, vowel, punctuation) and a sort code fixing its place in Indic alphabetical order.
Editors choose from the catalogue; they do not add to it.

## Homograph order

A number distinguishing lemmas that share a spelling. Part of the sort key, after the
[sort code](#sort-code).

## Inflection

A bundle of grammatical values drawn from controlled vocabularies — part of speech, and whichever of
case, number, gender, person, tense, and voice that part of speech admits. It holds no free text,
and which fields appear is computed from the part of speech. Shared across editions like a
[lemma](#lemma). See [Inflections](/editor/inflections).

## Lemma

The dictionary headword a [token](#token) is filed under, with its translation, homograph number,
[cognates](#cognate), and optional dictionary link. Lemmas are shared by every user of the
installation, not owned by an edition — the reason for the review workflow. See
[The Shared Lexicon](/concepts/lexicon).

## Line

An ordered run of [akṣaras](#aksara) — a physical line of writing. Sits directly on the akṣara
layer, independently of [tokens](#token), so a word may cross a line break without difficulty.

## Manifest

The IIIF document describing one [text](#text): its images as [canvases](#canvas), its metadata, and
its editions' annotations. Generated live from the database, and the thing the Viewer's
`iiif-content` parameter names. See [IIIF and Deep-Zoom Images](/concepts/iiif).

## Obscuration

A controlled vocabulary recording what is covering or damaging a [grapheme](#grapheme) — as against
[clarity](#clarity), which records how legible the result is.

## Plain image

An image referenced by URL as a single ordinary file, with no tiling and no derivative service, as
opposed to one served by the IIIF image server. Displays correctly but downloads in full. See
[IIIF and Deep-Zoom Images](/concepts/iiif#deep-zoom-and-tiling).

## READ

The Research Environment for Ancient Documents, from which this system's shared lexicon was seeded
and whose lemma-sorting algorithm it reproduces. Relevant when lemma ordering or homograph numbering
looks familiar.

## Reference

The short citation form of a [text](#text), such as `22-2` — the prefix appearing in attestation
labels throughout the Viewer. Distinct from the [CKM](#ckm) designation.

## Segment

The name for an [akṣara](#aksara) in the IIIF endpoints and in URLs. Same thing.

## Sequence

An editorial unit — a section, a sentence, a verse — grouping [tokens](#token) and carrying that
unit's translation and [chāyā](#chaya). Sequences nest to any depth. The only layer that is purely
editorial: everything else asserts something about the manuscript. See
[Sequences](/editor/sequences).

## Sort code

A numeric code per [grapheme](#grapheme) fixing its position in Indic alphabetical order, and by
extension the ordering of lemmas and glossaries. Variant forms sort immediately after their base, so
`ḵ` follows `k`. Not the Latin alphabetical order of the transliteration. See
[Sorting follows the script](/concepts/aksaras#sorting-follows-the-script-not-the-latin).

## Text

One manuscript: its title, [CKM](#ckm) designation, [reference](#reference), and photographs.

::: warning Images belong to the text
Every edition of a text shares one set of images. There is no per-edition image set. See
[The Data Model](/concepts/data-model#editions-and-images).
:::

## Text-critical mark

An editorial sign recording an intervention — restoration, deletion, addition, and the rest — with
its conventional brackets. Applied per [grapheme](#grapheme), not per akṣara, so a vowel can be
restored while its consonant stands as read. Six are available. See
[Text-Critical Marks](/editor/text-critical-marks).

## Token

A word: an ordered run of [graphemes](#grapheme) drawn from one or more [akṣaras](#aksara), carrying
a [lemma](#lemma) and an [inflection](#inflection). A token holds no coordinates of its own — its
position is the akṣaras it names — and it records where within the first akṣara it starts, which is
how word boundaries fall inside a sign. See [Tokens and Lines](/editor/tokens).

## Transliteration

The rendering of the recorded [graphemes](#grapheme) in Latin script. Generated from the data rather
than typed: the [vowel carrier](#vowel-carrier) is stripped, marks are bracketed, and the result
depends on the [display mode](#diplomatic-hybrid-reconstructed).

## Vowel carrier

A synthetic grapheme, `ʔ`, stored before any vowel that opens an akṣara or follows another vowel, so
that every vowel has a consonant before it for sorting purposes. Hidden from the picker and stripped
on display — it is why `a` + `i` renders as `aï`. You never enter it. See
[The vowel carrier](/concepts/aksaras#the-vowel-carrier).
