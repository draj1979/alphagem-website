# AlphaGem website

Marketing site for **AlphaGem**, source-backed research for NSE-listed companies. It explains the problems retail
investors face, how AlphaGem helps, and the credit-based pricing. **Get Started** sends people to the AlphaGem
platform's login page.

A plain static site: no framework, no build step, no external requests (system fonts, inline SVG).

```
index.html          the home page (hero, problem, solution, how it works, trust, pricing, FAQ)
disclaimer.html     research-information disclaimer
assets/styles.css   all styling (responsive, reduced-motion aware)
assets/app.js       mobile menu, credits-to-reports calculator, sets the login links
assets/config.js    ALPHAGEM_APP_URL: where "Get Started" / "Sign in" go
assets/favicon.svg  logo
```

## Run locally

```bash
python3 -m http.server 8000      # then open http://localhost:8000
```

## Common edits

- **Login destination:** change `ALPHAGEM_APP_URL` in `assets/config.js`. The links in the HTML carry the same default,
  so they still work if JavaScript is disabled; update those too if you change domains (search for
  `data-app-link`).
- **Pricing:** the plan cards are in the `#pricing` section of `index.html`. The calculator assumes a report uses
  10 to 20 credits (`MIN_PER` / `MAX_PER` in `assets/app.js`).
- **Free credits and report cost:** the copy says 100 free credits on registration and 10 to 20 credits per report,
  based on Gemini token usage. If those rules change, search `index.html` for "100" and "10 to 20".

## Deploy

Any static host works: GitHub Pages (Settings, Pages, deploy from `main` / root), Vercel, Netlify, Cloudflare Pages,
or a storage bucket behind a CDN. No build command is needed; the publish directory is the repository root.

## Before launch (needs a decision from the owner)

- **Pack sizes and prices** (Starter, Investor, Pro) are proposed launch pricing. Confirm or change them.
- **Platform support:** the AlphaGem platform must implement the credit ledger, the 100-credit sign-up grant, credit
  purchases and per-report charging. This site only describes them.
- **Legal pages:** only a disclaimer is included. Add Terms of Service, Privacy Policy and a refund/credit-validity
  policy (credits expiry is deliberately not stated on the site), reviewed for your jurisdiction.
- **Registration status:** the site makes no claim about SEBI registration. If you hold or need any registration for
  research services, add the required disclosures.
- **Illustrations:** the report card and examples are labelled as illustrations. Keep any real figures anonymised and
  labelled the same way.
- **License:** no license file is included, so by default all rights are reserved. Add one if you want others to reuse the code.
