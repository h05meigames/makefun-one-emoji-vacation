# One Emoji, One Dream Vacation

[![make.fun · u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35?utm_source=github&utm_medium=readme&utm_campaign=u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![rank](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/h05meigames/makefun-one-emoji-vacation/rank.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![reward](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/h05meigames/makefun-one-emoji-vacation/reward.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35?utm_source=github&utm_medium=readme&utm_campaign=u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)

One original emoji — the one most likely to make a stranger want to book the
trip — written for the
[u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
bounty on [make.fun](https://make.fun/r/0ene8b3q).

## The emoji

> 🌅

## How it works

`main.ts` (Node 22+, standard library only) writes the emoji to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`) — UTF-8, no
trailing newline, exactly 1 character, well within the 1–8 character limit.
It guards the length (1–8 characters counted in Unicode code points, not
UTF-16 units), rejects whitespace-only input, requires a single emoji shape,
writes the file, then reads it back and fails loudly if the read-back
differs — and checks the file's byte length matches too, so an encoding
drift can never silently ship. It prints the same emoji to stdout.
