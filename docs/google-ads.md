# Google Ads tracking

The public website loads Google tag `AW-18430311742` once through the root layout.
All 25 lead-saving form components emit `generate_lead` only after Supabase confirms
the insert succeeded. Viewing or refreshing `/thank-you` does not emit a lead.
Phone, email, and WhatsApp links emit separate click events; WhatsApp buttons in
the mobile navigation, contact page, and calculator are also covered.
Clicks indicate contact intent, not completed calls or sent messages.

## Activate Google Ads conversions

The account tag alone does not configure event-based conversion actions. Obtain
each action's event snippet in Google Ads, then copy the label after
`AW-18430311742/` into the corresponding deployment environment variable:

- `NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL`: successful form submission (primary lead).
- `NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL`: phone click.
- `NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL`: WhatsApp click.
- `NEXT_PUBLIC_GOOGLE_ADS_EMAIL_LABEL`: email click.

Rebuild/redeploy after setting labels. Blank labels intentionally send no
`conversion` event. Do not configure an additional thank-you URL conversion for
the same lead, which would double count. Consider contact clicks secondary
actions so bidding focuses on saved leads. No lead field values (names, phone
numbers, emails, messages, or report contents) are passed to these tracking calls.

## Verification

Run `node --test scripts/test-google-ads.cjs`, `npm run typecheck`, and
`npm run build`. After deployment, connect Google Tag Assistant, submit a valid
test lead, and confirm one conversion with the expected `send_to` label. Confirm
invalid/failed submissions and thank-you refreshes produce no conversion. Check
each contact channel separately. Final Ads receipt and attribution must be
verified in the connected Google Ads account.

Reference: https://developers.google.com/tag-platform/devguides/conversions
