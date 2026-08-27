# The Data Model

Everything in Glycerine Aksara hangs off one chain. The Editor writes it, the Viewer reads it, and
the IIIF endpoints publish it. Knowing the chain explains most of what both applications will and
will not let you do.

```
  Collection ──┐
               │  a text can sit in several collections, or none
       Text ◄──┘
        │ │
        │ └── Images          the manuscript photographs. They belong to the
        │                     TEXT, so every edition of it draws on the same set
        │
        └── Edition           one scholar's reading. A text can carry several
             │
             ├── Akṣara ───── outlined on one image, spelled as graphemes
             │      ▲
             ├── Line ───────┘ an ordered run of akṣaras
             │
             ├── Token ─────► points at akṣaras; carries lemma + inflection
             │                    │
             └── Sequence ────────┘ nests, and groups tokens into units of text
```

## Collections and texts

A **text** is one manuscript: its title, its CKM designation, its short reference, and its images. It
is the top of everything an editor actually works on.

A **collection** is a flat grouping of texts — by provenance, project, or repository. The
relationship is many-to-many: a text can belong to several collections at once, or to none, and
nothing depends on it. Collections are for finding things, not for structuring them.

## Editions and images

An **edition** belongs to exactly one text. A text can carry any number of editions, which is the
point: two scholars, or the same scholar at two dates, can read the same manuscript differently, and
both readings stand as separate objects.

The one thing that catches people out:

::: warning Images belong to the text, not the edition
Upload an image and it becomes available to *every* edition of that text — including editions by
other people, and editions made later. Delete one and every edition that placed akṣaras on it is
affected. There is no per-edition image set.
:::

That is deliberate. The photographs are evidence about the manuscript; the readings are the
scholarship. Only the second is edition-specific.

## Akṣaras, lines, and tokens

An **akṣara** is the anchor. It is the only thing in an edition with a position on an image: one or
more polygons in image-pixel coordinates, plus the sequence of graphemes it is written with. Every
other layer is defined by pointing at akṣaras, directly or indirectly.

A **line** is an ordered run of akṣaras — the physical line of writing on the manuscript.

A **token** is a word. It holds no coordinates of its own; it names the akṣaras it spans, in order,
and where within the first one it starts. That last detail is what lets word boundaries fall inside
an akṣara, which in Kharoṣṭhī they routinely do — a single sign can end one word and begin the next.
The token's position on the image is simply the union of the akṣaras it names.

::: tip Two independent groupings over the same akṣaras
Lines and tokens both sit directly on the akṣara layer, and neither is built from the other. A line
is where the writing physically is; a token is where a word is. A token may run across a line break
without difficulty, because nothing requires the two groupings to agree.
:::

## Sequences

A **sequence** groups tokens into a unit of text — a section, a sentence, a verse — and carries the
translation and chāyā for that unit. Sequences nest to any depth, so an edition's structure can be
as shallow or as articulated as the text warrants.

Sequences are the only layer that is purely editorial. Akṣaras, lines, and tokens all assert
something about the manuscript. A sequence asserts something about the text.

## Lemmas and inflections

A token may point at a **lemma** and an **inflection**. Both live outside the edition, in tables
shared by every user of the installation — which is why they get their own page. See
[The Shared Lexicon](/concepts/lexicon).

## Descriptions attach; they are not fields

Almost nothing in the chain above has descriptive columns of its own. Instead, two things attach to
any object:

| | What it holds | Examples |
| --- | --- | --- |
| **Metadata** | Free text, under a label | A sequence's translation and chāyā, an akṣara's notes |
| **Terms** | A value chosen from a controlled vocabulary, under a role | Clarity, obscuration, text-critical mark, part of speech, case, number |

This is why descriptive fields look the same everywhere in the Editor, and why the fields on an
inflection form change depending on the part of speech: the form is not a fixed layout but a list of
roles, and the roles are decided by the value you chose. See
[Inflections](/editor/inflections#the-fields-follow-the-part-of-speech).

It is also why a vocabulary can be extended without changing the applications.

## Ownership and visibility

Collections, texts, and editions each have exactly one owner and a public flag. The rule the
applications enforce:

- **You see your own material always**, whether or not it is public.
- **You see other people's material only if it is public.**
- **You can change only your own.**

This is enforced in the database, not in the interface, so it holds identically for the Editor, the
Viewer, and the [IIIF endpoints](/concepts/iiif) — an anonymous request to the API sees exactly what
an anonymous visitor to the Viewer sees.

The flags also compound. An edition is only reachable by a reader if the edition *and* its text are
both public; a public edition of a private text stays invisible. See
[Publishing an Edition](/editor/publishing#why-two).

## Related

- [Editions](/concepts/editions) — why a text carries more than one reading.
- [Annotations](/concepts/annotations) — how the layers anchor to one another.
- [How an Edition Is Built](/editor/transcription-workflow) — the chain as a working order.
