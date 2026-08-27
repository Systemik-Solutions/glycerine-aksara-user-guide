# How Editions Appear in the Viewer

The **Share** button in the header opens the published edition, so you can see what a reader sees.

| | |
| --- | --- |
| **View in Viewer** | Opens the edition in the [Viewer](/viewer/) in a new tab |
| **View edition report** | Opens the [edition report](/viewer/edition-report) |

Both are disabled until the text *and* the edition are public — see
[Publishing an Edition](/editor/publishing). Hovering a disabled item says which is missing.

## What the reader sees, and where it came from

| In the Viewer | Comes from |
| --- | --- |
| The transliteration | Your [akṣaras](/editor/aksaras) and their graphemes, in order |
| Outlines and syllable labels on the image | The polygons you drew |
| Diplomatic / hybrid / reconstructed | The [text-critical marks](/editor/text-critical-marks) on each grapheme |
| Word selection and Token scope | Your [tokens](/editor/tokens) |
| The [glossary](/viewer/glossary-view) | Your tokens' [lemmas](/editor/lemmas) and inflections |
| The [paleography view](/viewer/paleography-view) | Every akṣara instance, cut from its outline |
| Structure display | Your [sequences](/editor/sequences) and their translations |
| Translation and Chaya tabs | The edition's own translation and chāyā fields |
| The report masthead | The text, edition, editor, and reference |

## Things that read differently over there

A few decisions look small in the Editor and loud in the Viewer:

- **Outline accuracy.** The paleography view is built from cut-outs of your polygons. A generous box
  around a sign includes its neighbours' strokes, and a chart of loose boxes is not a sign chart.
- **The text's Reference.** It is what every attestation label in the glossary is keyed to —
  `-22-2:14`. Set it on the [text](/editor/texts).
- **Missing lemmas.** An unlemmatised token is invisible in the glossary. It still appears in the
  transliteration, so the gap is easy to miss until you look at the word list.
- **Sequence labels.** They are the Structure display's headings. Blank ones are fine, but a whole
  edition of unlabelled units gives the reader nothing to navigate by.

## The reader's link

A Viewer link carries the manifest and the edition, and nothing else — not the fragment, zoom,
selection, or display mode. To point a colleague at a particular line, send a report link with a line
anchor. See [Sharing and Citing](/viewer/sharing-and-citing).
