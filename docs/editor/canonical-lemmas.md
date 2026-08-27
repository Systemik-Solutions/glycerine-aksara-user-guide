# Canonical Lemmas and Review

**Canonical lemmas** are the shared vocabulary: available to every user, maintained by
administrators, and not editable by the contributors who use them. Every other lemma is private to
the person who made it.

This page describes the administrator's side. For submitting a lemma, see [Lemmas](/editor/lemmas).

::: info Administrators only
The **wrench** in the header appears only for administrator accounts. It carries a red dot while
requests are waiting.
:::

## Lemma administration

The wrench → **Manage lemmas** opens a dialog with two scopes.

### Canonical lemmas

The full canonical list. Search by **Lemma** or by **Sanskrit** — the second is what you want when
checking whether a word already exists under a different Gāndhārī form. The dropdown filters the
list, and **New lemma** creates a canonical lemma directly, without anyone having to submit one.

Rows are annotated with what matched — `Skt. evam · adv.` — so a Sanskrit search shows you which
Gāndhārī form you are looking at before you open it.

Selecting a lemma opens it for editing, with the same fields contributors see. Its **Related
lemmas** list — the lemmas sharing a Sanskrit cognate with it — keeps deprecated relatives and tags
them, so the whole family is visible before you change anything.

**Deprecate** retires a lemma without deleting it: existing tokens keep their link and it still
displays, but it can no longer be chosen for new ones. **Restore** reverses this. Deprecating is the
right move for a lemma that turned out to be a misanalysis — deleting it would strip the link from
every token that used it.

### Review queue

Pending submissions, filterable by status. Each row shows the lemma and who submitted it; selecting
one shows the lemma's full fields, the submitter's note, and a box for your own note back.

**Approve** makes the lemma canonical. The confirmation names the submitter and warns that they will
lose the ability to edit or delete it — worth reading, because it is not reversible from their side.

**Reject** returns it with your note. Give a reason: rejection is often "there is already a canonical
lemma for this", which the submitter can act on, and the note is the only place they will see it.

Either way the submitter is [notified](/editor/notifications).

## What reviewers are checking

- Is it a real dictionary word rather than a one-off reading?
- Does a canonical lemma for it already exist, perhaps under another spelling? Search the Sanskrit.
- Are the part of speech, subpart, gender, and verbal class right? They determine which
  [inflection fields](/editor/inflections) every future token gets.
- Is the translation usable as a glossary gloss?
- Does it need a **homograph order** to keep it apart from an existing headword?
