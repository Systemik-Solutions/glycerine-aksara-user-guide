# Navigating the Image

The image pane is a deep-zoom viewer over the manuscript photography. It opens fitted to the width
of the pane and aligned to the top of the image.

## Moving around

| To do this | Do this                                      |
| ---------- | -------------------------------------------- |
| Zoom       | Scroll wheel, or pinch on a trackpad          |
| Pan        | Drag the image                                |
| Select     | Click an outlined akṣara                      |
| Deselect   | Click anywhere on the image outside an akṣara |

A single click never zooms — it is reserved for selecting, so that clicking an akṣara to read it
does not also move the image under you.

## Outlines and labels

Open **Image settings** (the gear on the image pane toolbar) for two switches:

**Outlines** draws a box or polygon around every akṣara the edition records on this canvas. This is
how you see the editor's segmentation: where one akṣara was judged to end and the next to begin,
and — where the surface is lost — how many akṣaras the restoration assumes. Reconstructed akṣaras
with nothing left on the surface show as empty boxes in a row, so a long lacuna is visible as
exactly the number of signs the editor claims for it.

**Syllable transliterations** prints each akṣara's reading over the image.

Both are off by default and reset when you reload the page.

::: tip
With Syllable transliterations on but Outlines off, labels appear only for the akṣara you are
hovering or have selected. That keeps the image clean while still telling you what you are pointing
at.
:::

## Hovering and selecting

Hovering an akṣara highlights it in blue, and simultaneously highlights the matching syllable in the
transliteration. Clicking selects, in amber, and opens the Details pane.

What gets highlighted depends on the scope set in the header: in **Syllable** scope, one akṣara; in
**Token** scope, every akṣara of the whole word. See
[Reading the Transliteration](/viewer/transliteration#syllable-scope-and-token-scope).

Selection also works in the other direction. Clicking a syllable in the text pans the image to
centre the corresponding akṣara — and if that akṣara is on a different fragment, the Viewer switches
canvases to get there.

## Moving between fragments

When an edition has more than one canvas, a strip of thumbnails runs along the edge of the image
pane — down the side in top-bottom layout, along the bottom in left-right. Click a thumbnail to
switch. If there are more thumbnails than fit, arrows appear at each end of the strip, and the strip
scrolls itself to keep the active canvas visible.

**Your position on each canvas is remembered.** Zoom into a detail on fragment 3, switch to fragment
4, come back — you return to the same zoom and the same spot, for as long as the page stays loaded.

## Filling the window

The **Maximise** button at the bottom of either toolbar gives that pane the whole window; the same
button, now **Restore**, gives the other pane back. Useful for close paleographic work on the image,
or for reading a long translation.

The layout and reverse controls in the header are disabled while a pane is maximised — restore
first.

## Related

- [Inspecting an Akṣara](/viewer/inspecting-aksaras) — enlarging a single sign.
- [Paleography View](/viewer/paleography-view) — comparing one sign across the whole manuscript.
