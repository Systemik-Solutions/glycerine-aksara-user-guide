# IIIF and Deep-Zoom Images

IIIF is doing two separate jobs here, and it helps to keep them apart:

1. **Serving the manuscript photographs** so they can be zoomed smoothly.
2. **Publishing the editions themselves** as standards-compliant Linked Open Data.

The first is infrastructure you never think about. The second is the reason your work is reusable
outside Glycerine Aksara at all.

## Deep zoom and tiling

A manuscript photograph is large — several thousand pixels on a side is normal, and it is the fine
detail that carries the evidence. Sending the whole file to a browser to display at 800 pixels wide
wastes almost all of it, and re-sending it on every zoom is worse.

A IIIF image server instead cuts the image into tiles at several resolutions and hands over only the
tiles covering what you are looking at, at the resolution you are looking at it. Zooming into a
damaged akṣara fetches a handful of small tiles rather than a 40-megabyte JPEG. That is the whole
mechanism, and it is why the image pane stays responsive at high magnification.

Images uploaded through the Editor are handed to the image server and become tiled sources
automatically.

::: info Not every image is tiled
An image may also be a **plain** one — a single ordinary file, referenced by URL, often one hosted
elsewhere. Plain images work, and both applications display them, but there is no tiling and no
derivative service: the browser downloads the whole file and scales it. Large plain images are slow
at first load, and thumbnails are the full image scaled down.
:::

## What maps to what

The vocabulary is worth learning once, because it is what the URLs and the API are built from:

| Glycerine Aksara | IIIF |
| --- | --- |
| Collection | Collection |
| Text | Manifest |
| Image | Canvas |
| Edition | AnnotationCollection |
| Akṣara | Annotation, `describing`, targeting the canvas with an SVG selector |
| Line, token, sequence, lemma, inflection | Annotation, `linking`, targeting other annotations |

A **manifest** is the unit a viewer opens: one text, with its images as canvases in order, its CKM
designation and reference as metadata, and each edition's annotations hanging off the canvases as an
annotation collection.

This is why the Viewer takes a manifest URL rather than a text identifier. Its address bar reads:

```
https://<viewer-host>/?iiif-content=<manifest>&edition=<id>
```

`iiif-content` is the standard IIIF parameter for "open this manifest", and the manifest it names is
generated live from the database. See
[Opening an Edition](/viewer/opening-an-edition#the-two-url-parameters).

## The edition is published, not just the images

This is the part worth knowing about.

Every layer of an edition — akṣaras with their polygons, lines, tokens with their offsets, lemmas,
inflections, sequences — is served as W3C Web Annotations over HTTP, in the layered form described
under [Annotations](/concepts/annotations#the-w3c-web-annotation-model). Not an export you request,
not a file you download: live endpoints, generated from the current state of the data.

So a published edition can be read by any IIIF-aware client, harvested into an aggregator, or
processed by a script that has never heard of this application. The apparatus survives the trip
intact, because the annotations preserve the layering rather than flattening everything into
image-region-plus-text.

The URLs are listed under [The IIIF Endpoints](/reference/iiif-api).

## Visibility applies to the API too

The endpoints enforce exactly the same rules as the applications. An anonymous request sees public
texts and public editions and nothing else; a request carrying your credentials additionally sees
your own unpublished work.

There is no separate API key, no unlisted-URL loophole, and no way for a private edition to leak
through the manifest of a public text. Publishing an edition is what makes it fetchable, and
unpublishing it makes it stop. See
[Ownership and visibility](/concepts/data-model#ownership-and-visibility).

## Using images outside Glycerine Aksara

Two distinct permissions are involved, and only one of them is ours to talk about.

**The annotations** — the readings, restorations, lemmatisation, translation — are the editor's
scholarship. Cite the edition and its editor. See
[Sharing and Citing](/viewer/sharing-and-citing#citing-an-edition).

**The photographs** are governed by the rights statement of the institution that holds and digitised
the manuscript. Those terms travel with the manifest and are unaffected by anything an editor does
here; publishing an edition does not license its images. Check the manifest's rights statement
before reproducing an image, and address permission requests to the holding institution.

## Related

- [Annotations](/concepts/annotations) — the layered model being serialised.
- [The IIIF Endpoints](/reference/iiif-api) — the URL table.
- [Images](/editor/images) — uploading and managing them.
