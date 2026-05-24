# Legal translation review — EN keys to verify

Keys in `messages/en.json` that contain legal language and should be reviewed
by an English-language legal professional before publication in regulated contexts.

## mentionsLegales (Legal notice)

| Key | Notes |
|-----|-------|
| `s3P3` | References "applicable intellectual property legislation" — FR original cites Art. L.335-2 of French IP code. EN version intentionally generalised; verify if Moroccan law citation should be added. |
| `s3P4` | "civil and criminal liability" — confirm wording is appropriate under Moroccan law. |
| `s4P1`–`s4P5` | Liability disclaimer section — standard but should be reviewed for enforceability under Moroccan jurisdiction. |
| `s5P4` | "prior written authorisation" — confirm this is the correct standard under Moroccan and French law. |
| `s6P1` | GDPR referenced alongside Moroccan legislation — confirm this dual-jurisdiction framing is accurate. "GDPR" (EN equivalent of RGPD) used as per standard practice. |
| `s6P2` | "competent courts of Casablanca, Morocco" — confirm jurisdiction clause is enforceable for EN-speaking international visitors. |

## Note on RGPD → GDPR

All instances of RGPD in FR have been translated to GDPR in EN, which is the
standard international equivalent (General Data Protection Regulation, EU 2016/679).
The site is operated from Morocco; GDPR applicability should be confirmed with counsel.

## Note on CNIL

First (and only) mention of CNIL in EN: translated as "CNIL (French data protection authority)".
This appears in `leadMagnet.rgpdLabel`.

## Contact form select values (NOT translated — backend dependency)

The following select option `value` fields in `contactPage` were intentionally kept
identical to FR to avoid breaking the n8n webhook mapping:

- `typeBesoinOpts[*].value`: migration-cloud, nouveau-centre, optimisation, formation, autre
- `tailleOpts[*].value`: moins-20, 20-100, 100-500, plus-500
- `delaiOpts[*].value`: immediat, court-terme, moyen-terme, structurel

Only the `label` fields (visible to users) were translated.
