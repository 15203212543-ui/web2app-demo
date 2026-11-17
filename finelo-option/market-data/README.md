# Options day-end snapshot — CC BY-SA 4.0

Data: **post-no-preference/options**, hosted by DoltHub.
Source: https://www.dolthub.com/repositories/post-no-preference/options
Publisher license: https://www.dolthub.com/repositories/post-no-preference/options/doc/master/LICENSE.md
License: **Creative Commons Attribution-ShareAlike 4.0 International** — https://creativecommons.org/licenses/by-sa/4.0/
Full legal text: [options-eod-LICENSE.txt](options-eod-LICENSE.txt).

[options-eod.json](options-eod.json) is a selected, reformatted subset of this community database, distributed under the same CC BY-SA 4.0 license. Finelo selected a historical date after a later trading session completed, six underlying symbols (including explicit empty results), sorted contracts, limited each symbol to 400 records and converted numeric formatting. No price was synthesized. These changes and the dataset remain CC BY-SA 4.0; this notice grants no different license to unrelated App code/content. Retain publisher credit, source and license links, change notices and the license disclaimer when reusing the snapshot. No endorsement by the publisher is implied.

The file records the immutable Dolt source revision, source date and separate retrieval timestamp. It is partial day-end/historical data, not a real-time OPRA service, a complete chain, or an execution quote. Source precision, omissions, data errors and publication delays remain possible. Quote/trade timestamps, contract multiplier, volume, open interest and last sale are not supplied by this extract; missing bid/ask values remain null.

This is a release snapshot. Reloading it does not refresh the supplier. An operator runs `npm run refresh:options-eod`, reviews the data diff/license/source date, runs checks and publishes a new version. No scheduled updates, production SLA or paid API is enabled.

The refresh tool holds records back until a later regular trading session has completed (17:00 America/New_York, reviewed NYSE 2026–2027 holidays). This is deliberately more conservative than the next-session-open historical threshold. The JSON records this cutoff; an unsupported calendar year stops refresh. Check extraordinary closures manually before publishing.
