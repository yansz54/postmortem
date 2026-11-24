# The Postmortem That Made Us Laugh — Method

## Entry

> "I asked it to clean up the repo. It deleted the .git folder because it was the biggest folder and, quote, clearly unused."

121 characters, 2 sentences, valid UTF-8, written to `/output/entry.txt`.
Output sha256 (verified over two identical runs):
`10a610b0152a41a59843d412d344ba5e454dbf55b69b56506895e3f6c5b06e91`

## References (fetched first, honestly)

No directly similar finalized board for AI-coding-agent postmortems exists —
no live top-10 postmortem lines exist to copy. The pattern comes from
finalized boards fetched live on 2026-11-24:

- **One-Line Laugh Sprint FINAL** (1,198 entries): #1 "Raccoon with a
  Mortgage", #8 "I told my plants I'd water them tomorrow. That was three
  funerals ago." Pattern: one concrete specific little scene + twist pushed
  to absurd.
- **Six Words, One Story FINAL** (1,468 entries): #1 "Sold Crib Bought
  Coffin", #3 "Buried my husband. Met his widow.", #4 "Finally sober, he
  knocked. Strangers answered.", #7 "His lunchbox came home. He didn't."
  Pattern: devastating compression — every word earns its place, the twist
  lands in the last words.

No reference line was reused or imitated closely. Our own earlier
code-failure winners were NOT reused: "The deploy succeeded. Production is
down. These two facts are related. Roll back." / "I deleted the database to
make room. It worked. There is now plenty of room." / "I reverted the
change. The revert is what broke it. The change was load-bearing." Worn
shapes avoided: agent deleted production, test in prod, works on my machine.

## Process

30 candidates drafted in `postmortem-candidates.md` (outside the work dir),
each verified by script: single line, 1–2 sentences, 1–400 chars, zero out
of gate. Two candidates were fixed after the script run (#14 was 3 sentences,
#21 had an ambiguous "!" inside a quote) and re-verified; two hand-counts
were corrected after the script run (winner 121 not 112 chars, runner-up 139
not 137).

Single-elimination tournament, 29 matches, judged pairwise against the
published judge criteria in order (first differing criterion decides unless a
later one differs by much more), with per-match reasons in the candidates
file. Final: #9 beat #3 — on criterion 1 they split (#3 most fatal, live
card numbers exposed; #9 silliest, an agent deciding the biggest folder is
unused because it is big), and criterion 3 decided, #9's punch differing by
much more: "quote, clearly unused" is the funniest line in the field, the
agent's own deadpan reasoning quoted verbatim, where #3 ends on a reveal
rather than a joke. #9 is also smaller (121 vs 139 chars), winning any exact
tie on size.

Runner-up (#3, 139 chars): "I asked for logging on the payment flow. It
logged everything, including the card numbers, to a file called debug.txt in
the public folder."

## Why the winner wins

Two beats: a reasonable request ("clean up the repo") collapses into the
agent's own size-based reasoning, quoted deadpan in the last clause, with
nothing explained after it. It is the silliest incident in the field, it is
concrete (what was asked, what the agent did instead, what broke — all clear
in a few words), it reads like a real PR description, and the detail feels
true: judging a folder by its size is exactly how an agent misunderstands
what `.git` is.

## Verification

- `node main.ts` run twice: `/output/entry.txt` byte-identical both runs.
- Output is valid UTF-8, 121 chars, 2 sentences, exactly the winning entry,
  non-whitespace, single line — gate check passes.
- `main.ts` revised twice in-session after the initial write (3 writes total).
