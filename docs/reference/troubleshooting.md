# Troubleshooting

Symptoms and their usual causes. Most of what looks like a fault is one of the model's rules showing
through — where that is so, the explanation is linked rather than repeated.

## Readers cannot see my edition

By far the most common report, and almost always the same cause.

**Both flags must be set.** An edition is reachable only if the edition *is* public **and** its text
*is* public. A public edition of a private text stays invisible, and the applications fail closed
rather than guessing. Check both, on the text and on the edition. See
[Publishing an Edition](/editor/publishing#why-two).

The rule applies identically to the [IIIF endpoints](/concepts/iiif#visibility-applies-to-the-api-too),
so an unshareable edition is also an unfetchable one.

**Check you are not testing while signed in.** You can always see your own material, published or
not, so the Editor and Viewer will both look correct to you while a reader gets nothing. Open the
link in a private window to see what they see.

**Check the link carries an edition id.** A Viewer URL without `&edition=` falls back to the
manifest's first edition, which is rarely the one you meant. See
[Sharing and Citing](/viewer/sharing-and-citing).

## Images will not load

**A plain image is slow, not broken.** An image referenced by URL rather than served by the image
server has no tiling: the browser downloads the entire file before showing anything, and the
thumbnail is the full image scaled down. A large one can take a long time on first view and then
behave normally. See [Deep zoom and tiling](/concepts/iiif#deep-zoom-and-tiling).

**An externally hosted image depends on someone else's server.** If a plain image fails while
uploaded ones work, the host is unreachable or is refusing the request.

**An image deleted from the text is gone from every edition of it.** Images belong to the text, so a
deletion affects other people's editions of the same manuscript as well as your own — and akṣaras
outlined on it lose their canvas. See
[The Data Model](/concepts/data-model#editions-and-images).

## Uploads fail or stall

**Over 50 MB is refused.** That is a per-file limit; compress or downsample before uploading.

**Only JPEG, PNG, TIFF, GIF, and BMP are accepted.** Anything else is rejected before the transfer
starts.

**A stalled transfer can be resumed.** Uploads are resumable — retrying the same file continues from
where it stopped rather than starting over, so a dropped connection is not a reason to begin again.

**"It uploaded but the image never appeared."** Uploading happens in two steps: the bytes go to
storage, then the image is registered against the text and handed to the image server. A failure in
the second step leaves you with a completed progress bar and no image. Upload it again; the orphaned
bytes are harmless.

## Changes are not saving

**You can only change your own material.** Ownership is enforced in the database, not the interface,
so an edition or text belonging to someone else will not accept edits. There is no co-editing and no
way to transfer ownership. See [Editorial responsibility](/concepts/editions#editorial-responsibility).

**A lemma under review is locked.** While a submission is pending it cannot be edited by anyone,
including you. Withdraw it if you need to change it.

**An approved lemma is no longer yours.** Approval removes the lemma's owner — that is the mechanism
by which it becomes canonical — so the fields grey out permanently. This is expected, not a fault.
See [The Shared Lexicon](/concepts/lexicon#private-then-canonical).

**Your session may have expired.** If several unrelated actions start failing at once, reload the
page and check you are still signed in.

## An akṣara I recorded is not in the table

The akṣara table lists only akṣaras that have **both** a grapheme sequence and an outline. One
missing either is skipped silently — so an akṣara saved without graphemes, or whose outline did not
record, will count toward the edition's total while being absent from the table and invisible on the
image.

If a count and a table disagree, that gap is the reason. Such an akṣara cannot be selected from the
image either; the practical fix is to re-record it.

## I cannot find a grapheme in the picker

**Search for one grapheme, not a syllable.** The catalogue holds individual graphemes only, so `sa`,
`ka`, and `śu` all return nothing. Search `s`, then add `a` as a second grapheme. See
[Akṣaras and Graphemes](/editor/aksaras#an-aksara-is-a-sequence-of-graphemes).

**The vowel carrier is deliberately hidden.** `ʔ` is inserted for you and cannot be chosen. If a
transliteration shows a diaeresis you did not type — `aï` — that is the carrier being rendered, and
it is correct. See [The vowel carrier](/concepts/aksaras#the-vowel-carrier).

## The glossary is in the wrong order

It is in Indic alphabetical order, computed from grapheme sort codes, not in Latin alphabetical order
of the transliteration. Variant forms file immediately after their base, and anusvāra before a stop
files as the class nasal. See
[Sorting follows the script](/concepts/aksaras#sorting-follows-the-script-not-the-latin).

## The Editor opened the wrong text or edition

It reopens whatever you had last, remembered in your browser. Switching in the Manage dialog updates
it. A different browser, a different machine, or cleared site data starts you with nothing selected.
See [Opening a Text and Edition](/editor/opening#being-returned-to-where-you-were).

## Signing-in problems

The Editor requires an account; the Viewer never does. If a Viewer link asks you to sign in, it is
an Editor link.

A forgotten password is reset by email from the sign-in screen. Accounts are not self-approving for
administrative rights — the review queue and the wrench menu appear only for administrators, and
their absence is not a fault. See [Signing In](/editor/accounts).

## Reporting a bug

Include, in this order:

1. **What you expected and what happened instead** — the two separately.
2. **The URL**, which identifies the text and edition, and whether you were signed in.
3. **The ids** of the akṣara, token, lemma, or sequence involved, if the problem concerns one.
4. **Whether it repeats** on a reload, in a private window, and in another browser.
5. **A screenshot**, if anything was visibly wrong on screen.

The last point matters more than it looks: a fault that survives a private window is a fault in the
data or the application, while one that does not is local to your browser session, and the two are
investigated quite differently.
