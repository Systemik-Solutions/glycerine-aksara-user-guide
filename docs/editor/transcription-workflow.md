# How an Edition Is Built

An edition is built in three passes, in this order. The order is not a house style — each pass
consumes what the one before it produced, so there is no way to do them out of sequence.

```
     the manuscript image
              │
   ① Akṣaras  │  outline each sign, spell it as graphemes
              ▼
     akṣaras with graphemes
              │
   ② Tokens   │  group graphemes into words; assign lemma + inflection; place in lines
              ▼
     tokens on numbered lines
              │
   ③ Sequences│  arrange tokens into the structure of the text; translate each unit
              ▼
     a readable edition
```

The three [modes](/editor/workspace#the-three-modes) in the header correspond exactly to these three
passes.

## ① Akṣaras — what is written

In **Akṣaras** mode you draw an outline around each written sign and record which graphemes it is
made of, together with how clearly it survives and what obscures it.

This pass is about the *writing*, not the language. You are recording that this shape on the papyrus
is `śu`, not deciding what word it belongs to.

→ [Akṣaras and Graphemes](/editor/aksaras), [Text-Critical Marks](/editor/text-critical-marks)

## ② Tokens and lines — what the words are

In **Tokens & Lines** mode you click the akṣaras that make up a word and create a **token** from
them: its lemma, its inflection, and the line it sits on.

Words do not respect akṣara boundaries — sandhi routinely puts the end of one word and the start of
the next in a single sign — so a token is defined as a *run of graphemes*, and you can trim it to
start or end mid-akṣara. One akṣara can be shared between two tokens.

→ [Tokens and Lines](/editor/tokens), [Lemmas](/editor/lemmas), [Inflections](/editor/inflections)

## ③ Sequences — what the text says

In **Sequences** mode you arrange the tokens into the structure of the work — sūtra, section, verse
— and attach a translation and chāyā to each unit.

→ [Sequences](/editor/sequences)

## You do not have to finish one pass before starting the next

Nothing forces the passes to be completed in turn, and in practice they interleave: you outline a
line, lemmatise it, and move on. The dependency is per-akṣara, not per-edition — you cannot make a
token from an akṣara you have not drawn yet, but the rest of the manuscript can wait.

## What the reader gets

Each pass shows up somewhere in the [Viewer](/viewer/):

| You made | The reader sees |
| --- | --- |
| Akṣaras | The transliteration, the image outlines, the [paleography view](/viewer/paleography-view) |
| Tokens | Word selection, the [glossary](/viewer/glossary-view), attestation links |
| Sequences | The Structure display, and the report's sequences section |
