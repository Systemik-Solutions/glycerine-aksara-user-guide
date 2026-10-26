# Texts

A **text** is a manuscript. It holds the images, and it owns the editions made from them. Before you
can transcribe anything you need a text with at least one image on it.

## Creating one

In [Manage](/editor/opening) → **Texts**, use **New text** at the foot of the list.

| Field | |
| --- | --- |
| **Title** | Required. The name of the work — *Aṇatvalakṣaṇa-sutra* |
| **CKM identifier** | The catalogue identifier — `RS22-02` |
| **Reference** | The short form used in citations and attestation labels — `22-2` |
| **Description** | Free text |

Title and CKM identifier are shown together throughout the Editor and the Viewer, as
`RS22-02 Aṇatvalakṣaṇa-sutra`. The **Reference** is what appears in the Viewer's attestation
labels, which wrap it as `-22-2:14` — *reference 22-2, line 14*. Keep it bare: the leading dash and
the colon are added for you.

## Metadata

Below the Description, the Overview tab has a **Metadata** section for anything the fixed fields do
not cover — script, material, findspot, dimensions. Each entry is a **property** with one or more
**values**:

- **Add property** adds an entry; type its name in the *Property* box and its first value below.
- **Add value** adds another value to the same property, for when there is more than one — two
  scripts, say. **×** removes a value; the last one cannot be removed.
- The bin icon removes the whole property.

Values are multi-line, and line breaks are kept. Edits are saved with the rest of the form by
**Save**, and **Cancel** discards them.

A property needs a name and at least one value, and each name can be used only once per text
(capitals are ignored when comparing). **CKM** and **Reference** are reserved, because the fields
above already supply them. While an entry breaks one of these rules its error is shown under it and
Save stays disabled. An entry with neither a name nor a value is simply ignored.

The metadata is published in the text's [manifest](/reference/iiif-api#entry-points), after the CKM
identifier and reference, in the order shown in the Editor, with all of a property's values
together. The Viewer does not display it yet.

## The tabs

- **Overview** — the fields above, and the metadata.
- **[Editions](/editor/editions)** — the readings made from this manuscript.
- **[Images](/editor/images)** — the manuscript images themselves.
- **[Collections](/editor/collections)** — which collections this text belongs to.

## Making a text public

The **Public** switch beside the title controls whether the text is visible outside the Editor.

It is only half of what publication needs: a text and an edition must *both* be public before that
edition can be opened in the Viewer. See [Publishing an Edition](/editor/publishing).

## Deleting a text

The **⋮** menu beside the title offers **Delete text…**. This removes the text together with every
edition and image belonging to it, and cannot be undone. The confirmation names the text so you can
check you have the right one.
