# Annotations

An edition is not a document with coordinates attached. It is a stack of annotations, each layer
anchored to the layer below it, with only the bottom layer touching the image at all.

## One layer touches the image

Akṣaras carry polygons in image-pixel coordinates. Nothing else does.

```
   Sequence ──► Token ──► Akṣara ──► the image
                Line ────►
   Lemma ─────► Token
   Inflection ►
```

Read the arrows as "is defined by pointing at". A token names akṣaras; a sequence names tokens; a
lemma is attested by the tokens that reference it. Only the akṣara names a region of a photograph.

## Why it is built that way

Because it makes the expensive thing — deciding where a sign is on a damaged manuscript — a
one-time cost, and everything above it cheap to change.

Re-outline an akṣara and every token, line, and sequence containing it follows automatically; none
of them stored a copy of its position. Re-divide the words and the outlines are untouched. Restructure
the sequences and neither the words nor the outlines move. Each editorial decision can be revised
without disturbing the decisions underneath it, which is exactly the property you want when the
readings are provisional.

It is also what makes the Viewer's click-through work. Clicking a word in the transliteration can
highlight a region of the image because the chain from token to akṣara to polygon is a live
reference, resolved on demand.

## What "anchored to the layer below" costs

The same property that makes revision cheap makes deletion consequential. Removing an akṣara does
not leave a hole in the tokens above it — it removes it from them, because they never held anything
but a reference. An akṣara is a dependency of everything built on it, and the Editor will tell you
so before it lets you delete one.

## The W3C Web Annotation model

Internally the layers are database rows. Published through the
[IIIF endpoints](/concepts/iiif), each becomes a W3C Web Annotation, and the layering survives the
translation intact:

| Layer | Motivation | Target |
| --- | --- | --- |
| **Akṣara** | `describing` | The canvas, with an SVG selector giving the polygon |
| **Line** | `linking` | The akṣara annotations it contains |
| **Token** | `linking` | The akṣara annotations it spans |
| **Sequence** | `linking` | Its tokens and its child sequences |
| **Lemma** | `linking` | Every token that attests it |
| **Inflection** | `linking` | Every token carrying it |

One `describing` annotation about the manuscript; five `linking` annotations about the reading. An
annotation whose target is another annotation is ordinary Web Annotation practice, and it is what
lets the whole editorial apparatus be published without flattening it into a single layer of
image-region-plus-text.

The bodies carry the detail — the grapheme sequence and its marks for an akṣara, the grammatical
roles for an inflection — as textual bodies rather than as bespoke fields, so a generic annotation
client can render them without knowing anything about Gāndhārī.

## Related

- [The Data Model](/concepts/data-model) — the same structure as records.
- [IIIF and Deep-Zoom Images](/concepts/iiif) — how the annotations are served.
- [The IIIF Endpoints](/reference/iiif-api) — the URLs.
