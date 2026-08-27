# Sharing and Citing

## Linking to what you are reading

The address bar is always a working link to the edition on screen. As you switch editions from the
header dropdown, the URL updates to match — so copying it never gives someone the edition you started
from instead of the one you ended on.

A Viewer link carries exactly two parameters:

```
https://<viewer-host>/?iiif-content=<manifest>&edition=<id>
```

`edition` is always written out, even when it is the manifest's first edition. That is deliberate: a
citation that relies on the default would silently point somewhere else if the manifest ever gained
an edition.

## What a link does not carry

The URL records the **edition**, and nothing else about your session. It does not carry:

- the fragment you are on, or your zoom and position
- the current selection
- the display mode, layout, outlines, or labels

So a link opens the edition, not your view of it. To direct a colleague to a particular reading, cite
the line — and send them a [report](/viewer/edition-report) link, whose line headings do have their
own anchors:

```
https://<viewer-host>/report?iiif-content=<manifest>&edition=<id>#line-14
```

## Citing an edition

The information a citation needs is in the report masthead: the text, the edition title, the
**editor**, and the **reference** — the short form (for example `22-2`) that appears in every
attestation label throughout the Viewer.

Cite the edition and its editor, not the Viewer. The Viewer is the display; the edition is the
scholarship.

## Reusing images

The manuscript images are served over IIIF and are governed by the rights statement of the
institution that holds and digitised the manuscript, not by the Viewer or the edition. Those terms
travel with the manifest — check them before reproducing an image, and address permission requests to
the holding institution.

The edition itself — the readings, restorations, lemmatisation, and translation — is the editor's
work and is cited as such.

## Related

- [Opening an Edition](/viewer/opening-an-edition) — how a link resolves.
- [The Edition Report](/viewer/edition-report) — the citable document form.
