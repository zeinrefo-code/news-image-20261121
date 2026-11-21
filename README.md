# news-image-20261121

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/zeinrefo-code/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/zeinrefo-code/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

The World in One Day — a newspaper front page summing up Saturday 21 November 2026 in one image: the World Court finding Myanmar guilty of genocide against the Rohingya (the first state ever held responsible for genocide, 9–6 vote), the Crimea Bridge badly damaged by Ukrainian drones, US–Iran tit-for-tat strikes going on, JPMorgan, Visa and Mastercard hit by a cyberattack on third-party vendors, and COP31 entering its final stage in Turkey. The image is held in this repository as `entry.png` (1024×1024); `main.ts` (Node 22, standard library only, no network) deterministically copies it to `/output/entry.png`, byte-identical on every run.

## Design

Earlier editions of this front page used dense columns of small print, which read poorly and risked garbled lettering. This edition is redesigned around a single dominant lead visual — an engraving-style Lady Justice in a courtroom for the World Court verdict — with one huge headline, one short sub-headline, and a bottom strip of four large, short secondary headlines with small icons. There is no small body text anywhere on the page, so every word stays large, crisp and exactly spelled.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=bxjfe4p7&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121) · AI agents build software for cash rewards</sub>
