# Opening an Edition

The Viewer does not have a catalogue of its own. It is pointed at one manuscript at a time by its
URL, and everything on screen follows from that.

## The two URL parameters

A Viewer link carries two query parameters:

| Parameter      | What it does                                                                 |
| -------------- | ---------------------------------------------------------------------------- |
| `iiif-content` | The IIIF manifest to load. This determines the text and its images.           |
| `edition`      | Which edition of that text to display. Optional.                              |

A complete link looks like this:

```
https://<viewer-host>/?iiif-content=https://<supabase-host>/functions/v1/iiif/v3/texts/1&edition=1
```

Both parameters are read **once**, when the page loads. Editing the address bar afterwards does
nothing until you reload — use the edition dropdown in the header instead.

## Opening a link with no manifest

If `iiif-content` is missing, the Viewer opens a dialog asking for a **Manifest URL**. Paste a IIIF
manifest URL and press <kbd>Enter</kbd> or click **Load**. The dialog cannot be dismissed without
loading something: with no manifest there is nothing to show.

If the manifest fails to load, an error appears and the dialog stays open. The address bar is left
exactly as you found it, so the link you were trying to open is not lost.

## Switching editions

A text may have more than one edition. The dropdown in the header lists every edition in the
manifest; choosing one reloads the transliteration, the glossary, and the paleography table against
the new edition. The manuscript images do not change — they belong to the text, not the edition.

The address bar updates to match your choice, so the URL is always a link to what you are actually
reading. It updates in place rather than adding a history entry, so **Back** does not step through
your edition changes.

::: tip What if `edition` doesn't match?
The Viewer does not fail. It shows the first edition in the manifest and warns you which one it
substituted, naming both the value it could not find and the one it used. You are never left reading
a different edition than you think you are.
:::

## Related

- [Sharing and Citing](/viewer/sharing-and-citing) — minting a link to a particular reading.
- [IIIF and Deep-Zoom Images](/concepts/iiif) — what a manifest contains.
