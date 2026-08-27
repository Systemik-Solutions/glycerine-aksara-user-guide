# The IIIF Endpoints

Every public text and edition is served as IIIF Presentation 3.0 and W3C Web Annotation, live from
the database. There is no export step and no separate API key: the documents below *are* the
publication.

For what the layers mean, see [Annotations](/concepts/annotations) and
[IIIF and Deep-Zoom Images](/concepts/iiif). This page is the URL table.

## Base

```
https://<supabase-host>/functions/v1/iiif/v3
```

All endpoints are `GET`, return JSON-LD, and are CORS-open. `<supabase-host>` is the backend for the
installation you are using — take it from the `iiif-content` parameter of any Viewer link, which
names a manifest on the same base.

## Entry points

| Endpoint | Returns |
| --- | --- |
| `/collections/{id}` | **Collection** — the texts in a collection |
| `/texts/{id}` | **Manifest** — one text, its canvases, its metadata, its editions |
| `/editions/{id}` | **AnnotationCollection** — one edition |

A manifest is the normal place to start: it names everything else. It is also what the Viewer opens.

## Canvases

| Endpoint | Returns |
| --- | --- |
| `/images/{id}/canvas` | **Canvas** — one manuscript image, with its dimensions and metadata |
| `/images/{id}/canvas/page` | The canvas's **AnnotationPage** |
| `/images/{id}/canvas/annotation` | The **painting annotation** placing the image on the canvas |

For an image served by the image server, the painting annotation carries an `ImageService3` service
at `level2`, which is what makes deep zoom possible. A [plain image](/reference/glossary#plain-image)
has no service — the body is the file itself.

## Annotation pages

One page per layer per edition. Each is an `AnnotationPage` whose `partOf` names the edition's
annotation collection.

| Endpoint | Contains |
| --- | --- |
| `/editions/{id}/segments` | Every akṣara |
| `/editions/{id}/lines` | Every line |
| `/editions/{id}/tokens` | Every token |
| `/editions/{id}/sequences` | Every sequence |
| `/editions/{id}/lemmas` | Every lemma attested, with its attestations |
| `/editions/{id}/inflections` | Every inflection used, with its attestations |

::: tip "Segment" is the akṣara
The API name for an akṣara is *segment*, throughout. See the
[glossary](/reference/glossary#segment).
:::

## Individual annotations

| Endpoint | Motivation | Target |
| --- | --- | --- |
| `/segments/{id}` | `describing` | The canvas, with an SVG selector giving the outline |
| `/lines/{id}` | `linking` | Its segment annotations, in order |
| `/tokens/{id}` | `linking` | Its segment annotations, in order |
| `/sequences/{id}` | `linking` | Its token annotations and child sequences |
| `/lemmas/{id}` | `linking` | Every token annotation attesting it |
| `/inflections/{id}` | `linking` | Every token annotation carrying it |

The layering is the point: only the segment annotation targets an image region. Everything else
targets other annotations, so the editorial apparatus survives publication without being flattened.

Bodies are `TextualBody` in HTML — a segment's graphemes with their marks, an inflection's
grammatical roles, a token's grapheme offset — so a generic annotation client can render them
without knowing anything about Gāndhārī.

## Visibility

Requests are resolved under the same rules as the applications:

- **Anonymous** — public texts and public editions only.
- **With your credentials**, sent as a bearer token in the `Authorization` header — additionally
  everything you own, published or not.

An unpublished edition returns nothing to an anonymous caller, and does not appear in its text's
manifest. There is no unlisted-URL loophole. See
[Ownership and visibility](/concepts/data-model#ownership-and-visibility).

## Notes for reuse

**The documents are generated on request**, so they reflect the edition as it stands now. Editions
have no version history; if you need a fixed citable state, keep the
[report](/viewer/edition-report).

**Image rights are not edition rights.** The annotations are the editor's scholarship; the
photographs are governed by the holding institution's terms, which travel with the manifest.
Publishing an edition licenses neither. See
[Using images outside Glycerine Aksara](/concepts/iiif#using-images-outside-glycerine-aksara).
