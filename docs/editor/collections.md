# Collections

A **collection** is a named group of texts — a scroll, a find, a project. Collections are mainly a
convenience for organising your own material; they do not affect editions or anything the Viewer
shows. A public collection is also published as a IIIF Collection — see
[The collection manifest](#the-collection-manifest).

## Managing them

In [Manage](/editor/opening), switch the header from **Texts** to **Collections**. The list on the
left holds your collections; **New collection** is at its foot.

A collection has a **Name** (required) and a **Description**, plus a **Public** switch and a **⋮**
menu offering **Collection manifest** and **Delete collection…**.

## Putting texts in

There are two directions, and they do the same thing:

- From the **collection**: its detail view lists the texts it contains, and a text can be opened
  from there — the dialog switches to the Texts scope with that text selected.
- From the **text**: the **Collections** tab on any text sets which collections it belongs to.

A text can be in several collections at once.

## Ordering the texts

The texts in a collection are kept in an order of your choosing. A newly added text goes to the end;
to move one, drag it by the grip (⠿) at the left of its row. The new order is saved as soon as you
drop it — there is no Save button.

This is the order the collection's IIIF Collection lists its texts in. A text's own **Collections**
tab is unaffected: it always lists collections alphabetically.

## The collection manifest

**Collection manifest** in the **⋮** menu opens the collection's
[IIIF Collection](/reference/iiif-api#entry-points) in a new browser tab — the JSON-LD document
listing its texts, in the order set above. It is available only while the collection is **Public**;
a private collection is not served to anonymous readers, so the item is greyed out.

## Filtering by collection

The main reason to bother. The **Collection** dropdown above the texts list narrows it to one
collection, which is what makes a long list of manuscripts workable.

## Deleting a collection

Deleting a collection removes the grouping only. The texts in it are untouched.
