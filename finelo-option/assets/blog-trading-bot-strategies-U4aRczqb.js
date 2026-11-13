var e=`Trading Bot Strategies: 7 Common Approaches and Their Tradeoffs | Finelo`,t=``,n=`
<header class="fb-header"><nav aria-label="Blog navigation"><a href="/discover" aria-label="Finelo logo"><img src="__FIN_BASE__assets/finelo-logo.svg" alt=""></a><div class="fb-desktop-links"><details><summary>Product <span aria-hidden="true">▾</span></summary><ul><li><a href="/discover/app">Explore Finelo</a></li><li><a href="/discover/download">Download App</a></li><li><a href="/discover/ai">Learn with AI</a></li><li><a href="/discover/ai-bot">AI Trading Bots</a></li><li><a href="/discover/pricing">Pricing</a></li></ul></details><details><summary>Challenges <span aria-hidden="true">▾</span></summary><ul><li><a href="/discover/trading-challenge">28-Day Trading Challenge</a></li><li><a href="/discover/investing-challenge">28-Day Investing Challenge</a></li><li><a href="/discover/ai-trader-challenge">28-Day AI Trader Challenge</a></li><li><a href="/discover/ai-investing-challenge">28-Day AI Investing Challenge</a></li><li><a href="/discover/challenges">Compare All Challenges →</a></li></ul></details><a href="/discover/blog">Blog</a><details><summary>Trust <span aria-hidden="true">▾</span></summary><ul><li><a href="/discover/reviews">Reviews</a></li><li><a href="/discover/about">About Us</a></li><li><a href="/discover/community">Community</a></li><li><a href="/discover/media">Media Coverage</a></li></ul></details><a href="/discover/support">Support Center</a></div><div class="fb-actions"><button class="fb-theme" type="button" aria-label="Switch to light theme">☀</button><details><summary aria-label="Language: English">EN</summary><ul><li><a href="/discover/blog" aria-current="true">English</a></li></ul></details><a class="fb-nav-login" href="/discover/login">Log in</a><a class="fb-cta" href="/challenge">Get started</a><button type="button" class="fb-mobile-toggle" aria-label="Open navigation menu" aria-haspopup="dialog">☰</button></div></nav></header><dialog class="fb-mobile-drawer" aria-label="Blog navigation"><div class="fb-drawer-head"><a href="/discover" aria-label="Finelo home"><img src="__FIN_BASE__assets/finelo-logo.svg" alt=""></a><form method="dialog"><button aria-label="Close navigation menu">×</button></form></div><nav aria-label="Mobile blog navigation"><section><h2>Product</h2><a href="/discover/app">Explore Finelo</a><a href="/discover/download">Download App</a><a href="/discover/ai">Learn with AI</a><a href="/discover/ai-bot">AI Trading Bots</a><a href="/discover/pricing">Pricing</a></section><section><h2>Challenges</h2><p>Classic Track</p><a href="/discover/trading-challenge">28-Day Trading Challenge</a><a href="/discover/investing-challenge">28-Day Investing Challenge</a><p>AI Track</p><a href="/discover/ai-trader-challenge">28-Day AI Trader Challenge</a><a href="/discover/ai-investing-challenge">28-Day AI Investing Challenge</a><a href="/discover/challenges">Compare All Challenges →</a></section><a href="/discover/blog">Blog</a><section><h2>Trust</h2><a href="/discover/reviews">Reviews</a><a href="/discover/about">About Us</a><a href="/discover/community">Community</a><a href="/discover/media">Media Coverage</a></section><a href="/discover/support">Support Center</a><details><summary>Language: English</summary><a href="/discover/blog" lang="en">English</a></details><a href="/discover/login">Log in</a><a class="fb-cta" href="/challenge">Get started</a></nav></dialog>
<main class="fb-wrap fb-article"><article><div class="fb-article-grid"><div><nav class="fb-crumb" aria-label="Breadcrumb"><ol><li><a href="/discover">Home</a></li><li><span class="fb-crumb-separator" aria-hidden="true">/</span><a href="/discover/blog">Blog</a></li><li><span class="fb-crumb-separator" aria-hidden="true">/</span><a href="/discover/blog-trading">Trading</a></li><li><span class="fb-crumb-separator" aria-hidden="true">/</span><span aria-current="page">Trading Bot Strategies: 7 Common Approaches and Their Tradeoffs</span></li></ol></nav>
<header class="fb-cover fb-article-cover"><div><img src="__FIN_BASE__assets/finelo-logo.svg" alt=""><svg viewbox="0 0 80 80" fill="none" aria-hidden="true"><path d="M6 56 L26 36 L40 46 L66 16 M52 16 H68 V32" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><small>Trading guide</small><h1>Trading Bot Strategies: 7 Common Approaches and Their Tradeoffs</h1><span>AI bots</span> <span>8 min read</span></div></header>
<p class="fb-article-intro">Compare seven common trading-bot strategies, from trend following and mean reversion to grids and arbitrage. Learn what each assumes, where it can fail, and how to test it.</p><p class="fb-meta"><time datetime="2026-11-06">November 6, 2026</time> · 8 min read</p><div class="fb-article-callout"><strong>Practice trading with Finelo</strong><p>Practice in a simulator, learn with bite-sized lessons, and build confidence before risking real money.</p><a href="/discover/app">Explore Finelo →</a></div><section><h2 id="trading-bot-strategies-quick-answer">Trading Bot Strategies: Quick Answer</h2><p>Trading bot strategies are rule sets that turn market data into repeatable actions. Common approaches include trend following, mean reversion, grid trading, momentum, market making, statistical arbitrage, and portfolio rebalancing. No strategy is universally best: each depends on a market condition, and each can fail when that condition changes.</p><div class="fb-article-callout fb-challenges-callout"><strong>Explore Finelo's 28-day challenges</strong><p>Turn learning into a daily habit with guided challenge paths.</p><a href="/discover/challenges">View challenges</a></div><p>The practical purpose of a bot is consistent execution and recordkeeping—not guaranteed profit. The <a href="https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/AITradingBots.html">CFTC warns that AI and automated trading systems cannot predict the future or sudden market changes</a>. A sound evaluation therefore starts with the strategy's economic logic, data, costs, limits, and failure rules.</p></section>
<section><h2 id="how-it-works">How It Works</h2><p>A bot observes data, applies a condition, calculates a permitted action, and sends an alert or order. The strategy defines the condition. Risk controls determine whether the action is allowed. Execution logic determines the order type and timing, while monitoring checks whether the system behaved as intended.</p>
<p>Seven frequently discussed strategy families are:</p>
<ol>
<li><strong>Trend following:</strong> buys or stays long when a trend rule is positive and reduces or reverses exposure when it turns negative.</li>
<li><strong>Mean reversion:</strong> assumes an unusually large move may move back toward a reference value.</li>
<li><strong>Grid trading:</strong> places orders at levels above and below price to trade repeated movement within a range.</li>
<li><strong>Momentum:</strong> ranks assets or signals by recent relative strength and follows the stronger group.</li>
<li><strong>Market making:</strong> posts bids and offers and tries to earn spread while managing inventory.</li>
<li><strong>Statistical arbitrage:</strong> trades a modeled relationship between securities rather than their direction alone.</li>
<li><strong>Rebalancing:</strong> restores a portfolio to chosen target weights at scheduled or threshold-based intervals.</li>
</ol><p>These labels describe logic, not a promised outcome. Two “trend” bots may use different assets, time horizons, costs, exits, and risk limits, producing very different behavior.</p></section>
<section><h2 id="a-practical-decision-framework">A Practical Decision Framework</h2><p>Evaluate each strategy through four questions.</p><p>What market behavior must continue? Trend strategies need moves large enough to overcome false starts. Mean-reversion and grid strategies generally need price to return rather than keep moving away. Market making requires sufficient liquidity and an ability to manage adverse inventory.</p><p>Where does the apparent edge come from? A valid answer might involve risk bearing, slower participant response, rebalancing discipline, or a measurable market structure effect. “The AI found it” is not an explanation.</p><p>Which frictions compete with the edge? Include spread, commissions, market impact, slippage, data and software fees, borrow cost, financing, and taxes. High-turnover strategies are especially sensitive to small errors in cost assumptions.</p><p>What invalidates the strategy? Define position limits, loss limits, volatility conditions, stale-data rules, and manual shutdown procedures. A bot should not keep trading merely because it can.</p><p>The <a href="https://www.sec.gov/file/staff-report-algorithmic-trading-us-capital-markets">SEC algorithmic trading report</a> provides useful context: algorithms are part of modern markets, but their benefits coexist with operational complexity and risks that require controls.</p></section>
<section><h2 id="worked-example-and-checklist">Worked Example and Checklist</h2><p>Consider a hypothetical trend rule that buys an index fund when a shorter moving average is above a longer moving average and moves to cash when the relationship reverses. A realistic test would define the exact calculation time, next available execution price, transaction costs, distributions, and what happens when a signal changes rapidly.</p><p>Now compare it with a mean-reversion rule that buys after a two-day decline and exits after recovery. The strategies may trade the same asset but own different assumptions:</p><div class="fb-article-table" tabindex="0" role="region" aria-label="Trading strategy comparison"><table><thead><tr><th>Strategy</th><th>Needs</th><th>Typical weakness</th><th>Essential test</th></tr></thead><tbody><tr><td>Trend following</td><td>Persistent directional moves</td><td>Repeated small losses in sideways markets</td><td>Sensitivity to signal length and whipsaw costs</td></tr><tr><td>Mean reversion</td><td>Price repeatedly returning to a reference</td><td>Large loss during a regime break</td><td>Stress test sustained trends and gaps</td></tr><tr><td>Grid</td><td>Bounded, liquid trading range</td><td>Inventory accumulation after breakout</td><td>Model sequence of fills and boundary behavior</td></tr><tr><td>Momentum</td><td>Relative strength persisting</td><td>Crowded reversals</td><td>Test formation and holding periods separately</td></tr><tr><td>Market making</td><td>Reliable two-sided liquidity</td><td>Adverse selection and inventory risk</td><td>Use realistic queue position and latency</td></tr><tr><td>Statistical arbitrage</td><td>Stable modeled relationship</td><td>Correlation breakdown</td><td>Use unseen periods and relationship diagnostics</td></tr><tr><td>Rebalancing</td><td>Diversified target allocation</td><td>Trading too often or ignoring taxes</td><td>Compare calendar and threshold rules after costs</td></tr></tbody></table></div><p>For any approach, keep a strategy card with the hypothesis, universe, signal, position sizing, costs, exits, data source, monitoring rules, and version number. That record makes it harder to change the story after seeing the result.</p></section>
<section><h2 id="risks-tradeoffs-and-limitations">Risks, Tradeoffs, and Limitations</h2><p>Overfitting is a major danger. Trying many indicators, thresholds, and assets can produce an attractive historical result by chance. Reserve unseen data, test simpler alternatives, and record every experiment rather than reporting only the winner.</p><p>Regimes change. A strategy built during low volatility may behave differently during a crisis. Correlations can rise, spreads can widen, and orders may fill far from a modeled price. Stress tests should include conditions unlike the development period.</p><p>Execution can dominate the signal. The shorter the horizon, the more latency, spread, order type, partial fills, and queue position matter. A profitable signal in end-of-day data may be untradeable after realistic execution.</p><p>Automation adds operational risk. Software bugs, stale data, duplicate orders, API changes, and lost connectivity can create trades the strategy never intended. Logs, alerts, permission limits, and a kill switch are necessary controls.</p><p>Provider claims may be incomplete. FINRA's <a href="https://syndication.finra.org/content/know-risks-auto-trading-services-offered-unregistered-entities">auto-trading risk notice</a> warns about unsupported results, AI washing, and unregistered entities. Verify registration and partnerships independently rather than relying on a logo or testimonial.</p></section>
<section><h2 id="turning-a-strategy-idea-into-a-testable-hypothesis">Turning a Strategy Idea Into a Testable Hypothesis</h2><p>Write the economic reason for the strategy before selecting indicators. Trend following assumes that some price moves persist; mean reversion assumes a measurable relationship returns toward a reference level; market making assumes compensation for providing liquidity; arbitrage assumes a discrepancy can be executed and hedged after costs. If the reason cannot be stated clearly, more parameters will not fix the foundation.</p><p>Define the eligible market, signal, entry, size, exit, maximum holding period, costs, and failure rule in advance. Each term should be precise enough that two people using the same data would generate the same orders. Keep one later period untouched while developing the rule and record every parameter trial to reduce hidden selection bias.</p><p>Stress the hypothesis where it should fail. Test trend rules in choppy markets, mean-reversion rules during structural breaks, grids outside their ranges, and arbitrage rules with delayed or rejected legs. Include changing spreads, liquidity, financing, and data quality. A useful result explains the limits of the idea rather than hiding the bad regimes.</p><p>Compare the strategy with a simple benchmark and with doing nothing. If complexity does not improve the evidence after costs, it may only add operational risk. Move from historical testing to shadow signals and then simulation, preserving logs at each stage. The goal is not to find a bot that never loses; it is to determine whether a specific, explainable hypothesis remains coherent under realistic conditions.</p></section>
<section><h2 id="sources-and-verification">Sources and Verification</h2><p>This article relies on official educational and regulatory sources:</p>
<ul>
<li>The <a href="https://www.sec.gov/file/staff-report-algorithmic-trading-us-capital-markets">SEC Staff Report on Algorithmic Trading</a> explains how algorithms interact with U.S. market structure and risk controls.</li>
<li>The <a href="https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/AITradingBots.html">CFTC AI trading-bot advisory</a> addresses unrealistic performance claims, fraud, costs, and sudden market changes.</li>
<li><a href="https://syndication.finra.org/content/know-risks-auto-trading-services-offered-unregistered-entities">FINRA's notice about auto-trading services</a> covers registration, data safety, AI washing, and account monitoring.</li>
</ul><p>Use current rulebooks and broker documentation for implementation details. This guide does not determine whether a particular strategy, instrument, or provider is appropriate for an individual reader.</p></section>
<section><h2 id="conclusion-and-next-steps">Next step</h2><p>Trading bot strategies are hypotheses expressed as repeatable rules. The valuable work is not choosing the most impressive label; it is identifying the market behavior required, measuring costs, testing unseen conditions, controlling exposure, and monitoring execution.</p><p>Choose one strategy family, write a one-page specification, and test it without real money. If the hypothesis cannot be stated plainly or the failure conditions cannot be monitored, simplify the strategy before automating it.</p><p>For related educational context, <a href="/discover">Paper Trading for Beginners</a> provides a practical structure for testing the order workflow and keeping a decision log before considering live use.</p><hr><p>Choose one strategy family and explain the market condition it assumes, the evidence it uses, the costs it faces, and the rule that would stop it. If you want a structured way to build the trading knowledge behind that analysis, <a href="/challenge">explore Finelo’s learning path</a> and return to the strategy list with a clearer framework for comparing tradeoffs rather than promises.</p><p>Finelo provides financial education, not personalized financial, investment, legal, or tax advice. Automated trading can produce rapid losses. Test assumptions carefully and verify the provider, venue, costs, and legal requirements.</p></section><section class="fb-article-faq"><h2>Frequently asked questions</h2><div class="fb-faq-list">
<div><h3>Which trading bot strategy is best for beginners?</h3><p>The most useful beginner strategy is usually one simple enough to explain, test, and monitor. A transparent rule in paper trading teaches more than a complex model whose decisions cannot be inspected. Paper Trading for Beginners explains how to structure practice.</p></div>
<div><h3>How many trades are needed to evaluate a bot?</h3><p>There is no universal number. The needed sample depends on trade frequency, variability, market regimes, and the question being tested. A large set of highly similar trades may be less informative than a smaller set spanning different conditions.</p></div>
<div><h3>Can multiple strategies reduce risk?</h3><p>Only if their losses are not driven by the same exposure. Strategies that look different may all depend on rising markets, cheap liquidity, or the same asset. Examine combined positions and stress periods rather than counting strategy names.</p></div>
<div><h3>Should a bot be changed after a losing period?</h3><p>Not automatically. Compare the loss with the predefined range of expected outcomes and check for implementation errors or a broken assumption. Rewriting rules after every loss creates an untestable strategy.</p></div>
</div></section><section class="fb-article-author"><h2>About the author</h2><strong>Finelo Team</strong><p>The Finelo Team creates practical investing and trading education designed to help beginners learn faster with structured challenges, simulator practice, and bite-sized lessons.</p></section></div><aside><nav aria-label="In this article"><strong>In this article</strong><ol><li><a href="#trading-bot-strategies-quick-answer">Trading Bot Strategies: Quick Answer</a></li><li><a href="#how-it-works">How It Works</a></li><li><a href="#a-practical-decision-framework">A Practical Decision Framework</a></li><li><a href="#worked-example-and-checklist">Worked Example and Checklist</a></li><li><a href="#risks-tradeoffs-and-limitations">Risks, Tradeoffs, and Limitations</a></li><li><a href="#turning-a-strategy-idea-into-a-testable-hypothesis">Turning a Strategy Idea Into a Testable Hypothesis</a></li><li><a href="#sources-and-verification">Sources and Verification</a></li><li><a href="#conclusion-and-next-steps">Next step</a></li></ol></nav><div class="fb-article-callout"><strong>Want to learn more?</strong><p>Practice in a simulator, learn with bite-sized lessons, and build confidence before risking real money.</p><a href="/discover/app">Explore Finelo →</a></div></aside></div>
<section><h2>Keep reading — Related articles</h2><div class="fb-grid"><a class="fb-card " href="/discover/blog-machine-learning-trading-bot"><div class="fb-cover trading" aria-hidden="true"><div><img src="__FIN_BASE__assets/finelo-logo.svg" alt=""><svg width="56" height="56" viewbox="0 0 80 80" fill="none"><path d="M6 56 L26 36 L40 46 L66 16 M52 16 H68 V32" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><small>Trading guide</small><strong>Machine Learning Trading Bots</strong><span>trading</span> <span>7 min read</span></div></div><div class="fb-copy"><small>Trading</small><h2>Machine Learning Trading Bot: How Models Are Built, Tested, and Monitored</h2><p>A machine learning trading bot turns model outputs into rule-based actions. Learn how data leakage, overfitting, drift, execution, monitoring, and model governance affect real-world use.</p><div class="fb-meta">Finelo Team · <time>November 6, 2026</time></div></div></a><a class="fb-card " href="https://finelo.com/blog/grid-bot-trading"><div class="fb-cover trading" aria-hidden="true"><div><img src="__FIN_BASE__assets/finelo-logo.svg" alt=""><svg width="56" height="56" viewbox="0 0 80 80" fill="none"><path d="M6 56 L26 36 L40 46 L66 16 M52 16 H68 V32" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><small>Trading guide</small><strong>Grid Bot Trading</strong><span>AI bots</span> <span>8 min read</span></div></div><div class="fb-copy"><small>Trading</small><h2>Grid Bot Trading: How It Works, Risks, and a Practical Example</h2><p>Grid bot trading places repeated orders across a price range. This guide explains spacing, inventory, fees, range breaks, trend risk, and a practical stress-test for beginners.</p><div class="fb-meta">Finelo Team · <time>November 6, 2026</time></div></div></a><a class="fb-card " href="https://finelo.com/blog/best-ai-trading-app-for-beginners"><div class="fb-cover trading" aria-hidden="true"><div><img src="__FIN_BASE__assets/finelo-logo.svg" alt=""><svg width="56" height="56" viewbox="0 0 80 80" fill="none"><path d="M6 56 L26 36 L40 46 L66 16 M52 16 H68 V32" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><small>Trading guide</small><strong>AI Trading Apps for Beginners</strong><span>AI trading</span> <span>8 min read</span></div></div><div class="fb-copy"><small>Trading</small><h2>Best AI Trading Apps for Beginners: Finelo and 4 Alternatives</h2><p>Compare Finelo with four AI trading alternatives for beginners. Finelo is our best overall starting option for guided learning and demo practice, while the alternatives serve different automation and strategy-building needs.</p><div class="fb-meta">Finelo Team · <time>November 6, 2026</time></div></div></a></div></section></article></main><section class="fb-blog-cta" aria-labelledby="fb-closing-title"><div class="fb-closing-banner">
<div class="fb-closing-art" aria-hidden="true"><div class="fb-closing-halo"></div><img class="fb-closing-companion" src="__FIN_BASE__assets/remote/ea12a56b8483d052912b.svg" alt="" loading="lazy"><img class="fb-closing-character" src="__FIN_BASE__assets/remote/0562aa5501d0cee7189d.svg" alt="" loading="lazy"><span class="fb-closing-badge"><img src="__FIN_BASE__assets/remote/3c35a88915477c9a6dec.svg" alt="" loading="lazy"></span></div>
<div class="fb-closing-copy"><h2 id="fb-closing-title">Make your next read a first step.</h2><p>Take what sparked your curiosity and explore it through a guided, 28-day learning challenge.</p><a class="fb-cta" href="/challenge">Find your learning path</a></div>
</div></section>
<footer class="fb-footer"><div class="fb-footer-inner">
    <div class="fb-footer-columns" role="navigation" aria-label="Footer navigation"><a class="fb-footer-brand" href="/discover" aria-label="Finelo home"><img src="__FIN_BASE__assets/finelo-logo.svg" alt=""></a>
      <div><h3>Product</h3><ul><li><a href="/discover">Home</a></li><li><a href="/challenge">Start Finelo</a></li><li><a href="/discover/app">App</a></li><li><a href="/discover/download">Download App</a></li><li><a href="/discover/ai">AI</a></li><li><a href="/discover/ai-bot">AI bots</a></li><li><a href="/discover/pricing">Pricing</a></li><li><a href="/discover/login">Log in</a></li></ul></div>
      <div><h3>Learn &amp; Trust</h3><ul><li><a href="/discover/challenges">28-Day Challenges</a></li><li><a href="/discover/tools">Financial Tools</a></li><li><a href="https://finelo.com/glossary">Glossary</a></li><li><a href="/discover/reviews">Reviews</a></li><li><a href="/discover/about">About Us</a></li><li><a href="/discover/media">Media Coverage</a></li><li><a href="/discover/blog">Blog</a></li><li><a href="/discover/community">Community</a></li></ul></div>
      <div><h3>Trading education</h3><ul><li><a href="https://finelo.com/learn/ai-trading-guides">AI Trading Guides</a></li><li><a href="https://finelo.com/learn/what-is-ai-trading">What is AI trading?</a></li><li><a href="https://finelo.com/learn/how-to-start-trading">How to start trading</a></li><li><a href="https://finelo.com/learn/what-is-automated-trading">Automated trading</a></li><li><a href="https://finelo.com/learn/what-are-ai-trading-signals">AI trading signals</a></li><li><a href="https://finelo.com/learn/can-you-start-investing-with-20-dollars">Investing with $20</a></li><li><a href="/discover/blog-ai-trading-bots-for-beginners">How Do AI Trading Bots Work?</a></li></ul></div>
      <div><h3>Support &amp; Legal</h3><ul><li><a href="/discover/support">Support</a></li><li><a href="https://support.finelo.com/en/support/home?utm_source=website">Support Center</a></li><li><a href="/discover/bank-charge">Why Was I Charged?</a></li><li><a href="/discover/cancel">Cancel Subscription</a></li><li><a href="/discover/refund">Refund Policy</a></li><li><a href="https://legal.finelo.com/privacy">Privacy Policy</a></li><li><a href="https://legal.finelo.com/terms">Terms and Conditions</a></li><li><a href="https://legal.finelo.com/disclaimer">Disclaimer</a></li><li><a href="https://legal.finelo.com/subscription">Subscription Terms</a></li><li><button type="button" class="fb-cookie-open" aria-haspopup="dialog">Cookie Preferences</button></li></ul></div>
    </div>
    <div class="fb-footer-extras">
      <div><h3>Social media</h3><ul>
<li><a href="https://www.instagram.com/finelo.app/">Instagram</a></li><li><a href="https://www.linkedin.com/company/fineloapp">LinkedIn</a></li><li><a href="https://www.reddit.com/r/fineloapp/">Reddit</a></li><li><a href="https://www.youtube.com/@FineloApp">YouTube</a></li>
      </ul></div>
      <div><h3>Community</h3><p>A place where people interested in trading and AI trading can learn, keep up with the news, and ask questions with others. All levels welcome.</p>
      <a href="https://www.facebook.com/groups/learnaitrading">Join the Facebook group →</a></div>
    </div>
    <div class="fb-footer-disclaimer"><h3>Disclaimer</h3><p>Finelo is an educational platform only, we do not provide financial or investment advice. Investing involves financial risks, including the loss of your investment. Historical market returns are not indicative of future results. Profit results are not typical and may vary. Users are solely responsible for their financial choices.</p></div>
  </div></footer>`,r=`@font-face{font-family:Inter;src:url("__FIN_BASE__assets/coursiv-inter-latin.woff2") format("woff2");font-style:normal;font-weight:100 900;font-display:swap}
.fn-document{--bg:#09081b;--surface:#12101f;--line:#1d1d30;--text:#fff;--muted:#b5b2c8;color-scheme:dark}
.fn-document[data-theme="light"]{--bg:#fff;--surface:#f8f7fc;--line:#e5e2ed;--text:#12101f;--muted:#565369;color-scheme:light}
*{box-sizing:border-box}.fn-body{margin:0;background:var(--bg);color:var(--text);font:16px/1.5 Inter,system-ui,sans-serif}
a{color:inherit;text-decoration:none}button,summary{cursor:pointer;color:inherit;font:inherit}
.fb-header nav,.fb-wrap{max-width:1280px;margin:auto;padding-inline:32px}
.fb-header{border-bottom:1px solid var(--line)}.fb-header nav{min-height:96px;display:flex;justify-content:space-between;align-items:center;gap:12px}
.fb-header img,.fb-cover img{display:block;width:83px;height:auto}.fb-header img{width:102px}
[data-theme="light"] .fb-header img{filter:brightness(.12)}
.fb-actions{display:flex;align-items:center;gap:10px}.fb-actions button,.fb-actions summary,.fb-tags a,.fb-pages a{border:1px solid var(--line);border-radius:999px;background:var(--surface);padding:8px 14px}
.fb-actions details{position:relative}.fb-actions summary{list-style:none}.fb-actions summary::-webkit-details-marker{display:none}
.fb-actions ul{position:absolute;z-index:2;right:0;min-width:120px;list-style:none;padding:12px 16px;background:var(--surface);border:1px solid var(--line);border-radius:12px;margin:6px 0}
.fb-cta{background:#5745e8;color:white;font-weight:700;border-radius:999px;padding:10px 16px;white-space:nowrap}
.fb-hero,.fb-topics{border-bottom:1px solid var(--line);padding-block:64px 96px}
.fb-crumb,.fb-meta{color:var(--muted);font-size:14px}.fb-crumb a:hover{text-decoration:underline}
h1{font-size:48px;line-height:1;letter-spacing:-.03em;margin:48px 0 24px}
.fb-intro{color:var(--muted);font-size:20px;max-width:768px;margin:0 0 28px}
.fb-tags,.fb-pages{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.fb-tags{margin-bottom:40px}.fb-tags a,.fb-pages a{font-size:14px}
a[aria-current="page"]{background:#5745e8;color:#fff}
.fb-card{display:flex;flex-direction:column;overflow:hidden;border:1px solid var(--line);border-radius:16px;background:var(--surface)}
.fb-card:hover,.fb-card:focus-visible{border-color:#8272ff}.fb-featured{border-radius:24px;display:grid;grid-template-columns:1fr 1fr}
.fb-cover{color:white;display:flex;flex-direction:column;justify-content:space-between;aspect-ratio:16/10;min-width:0;padding:8% 6%;background:radial-gradient(ellipse at 85% 15%,#ffffff45,transparent 55%),linear-gradient(135deg,#2a1f6b,#5b4ee0 55%,#9796ff)}
.fb-cover.investing{background:linear-gradient(135deg,#1f2f6b,#4e6ee0 55%,#79b8ff)}
.fb-cover>div:first-child{display:flex;justify-content:space-between;align-items:flex-start}.fb-cover strong{display:block;line-height:1.16;font-size:clamp(21px,2.4vw,32px);margin:4px 0 12px}
.fb-cover small{text-transform:uppercase;letter-spacing:.08em;font-weight:700}.fb-cover span{display:inline-block;border:1px solid #ffffff60;background:#ffffff24;border-radius:999px;font-size:12px;padding:3px 10px}
.fb-featured .fb-cover{aspect-ratio:auto;min-height:360px}.fb-copy{padding:22px}.fb-featured .fb-copy{padding:40px;display:flex;flex-direction:column;justify-content:center}
.fb-copy h2{font-size:20px;line-height:1.25;margin:8px 0 12px}.fb-featured h2{font-size:32px}.fb-copy p{color:var(--muted);margin:0 0 18px}
.fb-list,.fb-topics{padding-block:64px}.fb-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}.fb-pages{justify-content:center;margin-top:48px}footer.fb-wrap{padding-block:32px;color:var(--muted)}
@media(max-width:1023px){.fb-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.fb-featured{grid-template-columns:1fr}.fb-featured .fb-cover{aspect-ratio:16/10;min-height:240px}}
@media(max-width:767px){.fb-wrap,.fb-header nav{padding-inline:16px}.fb-header nav{min-height:70px}.fb-header img{width:76px}.fb-actions{gap:6px}.fb-actions button,.fb-actions summary,.fb-cta{font-size:13px;padding:7px 9px}.fb-hero,.fb-list,.fb-topics{padding-block:36px}h1{font-size:36px;margin-top:32px}.fb-intro{font-size:18px}.fb-grid{grid-template-columns:1fr}.fb-featured .fb-copy{padding:24px}.fb-featured h2{font-size:26px}}

.fb-narrow{max-width:896px}
.fb-category-hero{padding-block:80px;border-bottom:1px solid var(--line)}
.fb-category-heading{max-width:768px;margin-bottom:48px}
.fb-category-heading .fb-crumb{font-size:13px;line-height:1.65;margin-bottom:16px}
.fb-category-heading h1{margin:0 0 16px}
.fb-category-heading .fb-intro{font-size:18px;line-height:1.625;margin:0}
.fb-category-hero .fb-tags{margin-bottom:40px}
.fb-category-hero .fb-tags a{line-height:20px}
.fb-count{display:inline-block;margin-bottom:16px;padding:4px 12px;border-radius:999px;background:var(--surface);font-size:12px;line-height:16px}
.fb-category-list{display:grid;gap:16px;padding-block:64px}
.fb-category-list .fb-copy{padding:24px}
.fb-category-list h2{font-weight:600;line-height:1.4;margin:0 0 8px}
.fb-category-list p{font-size:14px;line-height:1.625;margin-bottom:16px}
.fb-category-list .fb-meta{display:flex;flex-wrap:wrap;align-items:center;gap:4px 12px;font-size:12px;line-height:16px}
@media(max-width:767px){.fb-category-hero{padding-block:64px}.fb-category-list{padding-block:48px}.fb-category-list .fb-copy{padding:20px}}

.fb-blog-cta{max-width:1180px;margin:auto;padding:64px 28px 88px}
.fb-closing-banner{display:grid;grid-template-columns:45% 55%;align-items:center;min-height:362px;overflow:hidden;border:1px solid #ffffff26;border-radius:32px;color:#fff;background:radial-gradient(at 15% 25%,#999cfa70,transparent 65%),linear-gradient(125deg,#45489f,#6653e9)}
.fb-closing-art{position:relative;min-width:0;height:360px}
.fb-closing-art img{display:block;object-fit:contain}
.fb-closing-halo{position:absolute;inset:0;margin:auto;width:min(350px,90%);aspect-ratio:1;border-radius:50%;background:radial-gradient(circle,#ffffff18,transparent 70%)}
.fb-closing-companion,.fb-closing-character{position:absolute}
.fb-closing-companion{width:34%;height:34%;top:7%;right:7%;transform:rotate(13deg)}
.fb-closing-character{width:64%;height:78%;left:12%;bottom:8%;transform:rotate(-7deg)}
.fb-closing-badge{position:absolute;left:7%;bottom:12%;display:grid;place-items:center;width:88px;aspect-ratio:1;border:1px solid #ffffff45;border-radius:24px;background:#ffffff20;transform:rotate(-9deg)}
.fb-closing-badge img{width:66%;height:66%}
.fb-closing-copy{padding:48px 48px 48px 24px}
.fb-closing-copy h2{font-size:clamp(30px,3.75vw,54px);line-height:1.15;letter-spacing:-.03em;margin:0 0 20px}
.fb-closing-copy p{font-size:17px;line-height:1.6;margin:0 0 28px;max-width:440px}
.fb-closing-copy .fb-cta{display:inline-flex;align-items:center;justify-content:center;width:min(100%,390px);min-height:56px;padding:15px 24px;border-radius:12px;background:linear-gradient(#fff,#efedff);color:#4940a5;white-space:normal;text-align:center}
@media(max-width:767px){.fb-blog-cta{padding:40px 16px 56px}.fb-closing-banner{grid-template-columns:1fr;border-radius:24px}.fb-closing-art{height:240px}.fb-closing-badge{width:64px}.fb-closing-copy{padding:16px 24px 28px;text-align:center}.fb-closing-copy p{margin-inline:auto}}

.fb-footer{background:#24234c;color:#fff;padding:40px 0}
[data-theme="light"] .fb-footer{background:#f1efff;color:#1b183b}
.fb-footer-inner{max-width:1280px;margin:auto;padding-inline:24px;display:grid;gap:24px}
.fb-footer-columns{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:32px;padding-bottom:32px}
.fb-footer-brand img{width:102px;height:auto}
[data-theme="light"] .fb-footer-brand img{filter:brightness(.15)}
.fb-footer h3{font-size:18px;font-weight:600;margin:0 0 24px}
.fb-footer ul{display:grid;gap:10px;list-style:none;padding:0;margin:0}
.fb-footer a:hover,.fb-footer a:focus-visible{text-decoration:underline}
.fb-footer-extras{display:grid;gap:24px}
.fb-footer-extras h3,.fb-footer-disclaimer h3{font-size:20px;margin-bottom:16px}
.fb-footer-extras ul{display:flex;flex-wrap:wrap;gap:12px 24px}
.fb-footer p{margin:0 0 12px}
.fb-footer-disclaimer p{margin:0}
@media(max-width:1279px){.fb-footer-columns{grid-template-columns:repeat(2,minmax(0,1fr))}.fb-footer-brand{grid-column:1/-1}}
@media(max-width:639px){.fb-footer-inner{padding-inline:16px;text-align:center}.fb-footer-columns{grid-template-columns:1fr;padding-bottom:0}.fb-footer h3{margin-bottom:16px}.fb-footer-extras ul{justify-content:center}}

.fb-cookie-open{padding:0;border:0;background:none;text-align:inherit}
.fb-cookie-open:hover,.fb-cookie-open:focus-visible{text-decoration:underline}
.fb-cookie-dialog{position:relative;max-width:min(840px,calc(100% - 32px));max-height:calc(100% - 32px);width:100%;padding:24px;border:1px solid #ccc;border-radius:8px;background:#fff;color:#262538;color-scheme:light}
.fb-cookie-dialog::backdrop{background:#0009}
.fb-cookie-dialog h2{padding-right:28px;margin-top:0}
.fb-cookie-dialog img{width:102px;filter:brightness(.15)}
.fb-cookie-dialog section,.fb-cookie-dialog fieldset{margin:18px 0;padding:16px 0 0;border:0;border-top:1px solid #ddd;min-width:0}
.fb-cookie-dialog h3,.fb-cookie-dialog legend{font-size:16px;font-weight:700;text-transform:uppercase;margin:0}
.fb-cookie-dialog label{display:inline-flex;align-items:center;gap:5px;margin-right:12px}
.fb-cookie-close{position:absolute;top:12px;right:12px;border:0;background:transparent;font-size:24px}
.fb-cookie-actions{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px}
.fb-cookie-actions button{border:1px solid #4940a5;border-radius:6px;padding:8px 14px;background:#4940a5;color:#fff}
.fb-cookie-dialog a{text-decoration:underline}

.fb-desktop-links,.fb-nav-login{display:none}
@media(min-width:1280px){
 .fb-desktop-links{display:flex;align-items:center;gap:24px}
 .fb-desktop-links details{position:relative}
 .fb-desktop-links summary{list-style:none;white-space:nowrap}
 .fb-desktop-links summary::-webkit-details-marker{display:none}
 .fb-desktop-links ul{position:absolute;z-index:3;top:100%;left:0;min-width:230px;margin:12px 0 0;padding:10px;list-style:none;border:1px solid var(--line);border-radius:16px;background:var(--surface)}
 .fb-desktop-links li a{display:block;padding:8px 12px;border-radius:8px}
 .fb-desktop-links li a:hover,.fb-desktop-links li a:focus-visible{background:#8170ff25}
 .fb-nav-login{display:inline-block;white-space:nowrap}
 .fb-actions .fb-mobile-links{display:none}
}

.fb-mobile-drawer{position:fixed;inset:0 0 0 auto;margin:0;width:min(360px,100%);max-width:100%;height:100dvh;max-height:100%;padding:20px 22px;border:0;border-left:1px solid var(--line);background:var(--bg);color:var(--text);overflow:auto}
.fb-mobile-drawer::backdrop{background:#0009}
.fb-drawer-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:24px}
.fb-drawer-head img{display:block;width:100px}
[data-theme="light"] .fb-drawer-head img{filter:brightness(.15)}
.fb-drawer-head button{border:0;background:none;font-size:26px}
.fb-mobile-drawer nav,.fb-mobile-drawer section{display:grid;gap:10px}
.fb-mobile-drawer section{padding-block:12px;border-bottom:1px solid var(--line)}
.fb-mobile-drawer h2,.fb-mobile-drawer p{margin:0}
.fb-mobile-drawer h2{font-size:16px}
.fb-mobile-drawer p{font-size:13px;color:var(--muted)}
.fb-mobile-drawer .fb-cta{text-align:center}
@media(min-width:1280px){.fb-actions .fb-mobile-toggle{display:none}}

.fb-cover.chart-analysis{background:linear-gradient(135deg,#2e1860,#7655dc 55%,#b49ef0)}

.fb-cover.financial-literacy{background:linear-gradient(135deg,#5b1f6b,#a04ee0 55%,#e08af2)}
.fb-cover.fb-cover-photo{display:block;padding:0}
.fb-cover.fb-cover-photo img{width:100%;height:100%;object-fit:cover}

.fb-article{padding-block:36px 56px}
.fb-article-cover{margin:24px 0 32px;border-radius:24px;aspect-ratio:auto;min-height:330px;padding:32px;gap:30px}
.fb-article-cover h1{font-size:clamp(32px,5vw,58px);max-width:900px;margin:10px 0 20px;line-height:1.08}
.fb-article-grid{display:grid;grid-template-columns:minmax(0,760px) minmax(220px,300px);justify-content:space-between;gap:40px}
.fb-article-grid aside{position:sticky;top:20px;align-self:start}
.fb-article-grid aside nav,.fb-article-callout{padding:20px;border:1px solid var(--line);border-radius:16px;background:var(--surface)}
.fb-article-grid aside ol{padding-left:22px}
.fb-article-grid aside li{margin:8px 0}
.fb-article-grid a:hover{text-decoration:underline}
.fb-article-intro{font-size:20px}
.fb-article-callout{margin-block:20px}
.fb-article-grid h2{scroll-margin-top:24px;margin:32px 0 12px}
.fb-article-table{overflow:auto;border:1px solid var(--line);border-radius:12px}
.fb-article-table table{width:100%;min-width:560px;border-collapse:collapse}
.fb-article-table th,.fb-article-table td{padding:12px;border-bottom:1px solid var(--line);text-align:left}
.fb-article-table th{background:var(--surface)}
@media(max-width:899px){.fb-article-grid{grid-template-columns:minmax(0,1fr)}.fb-article-grid aside{display:none}}
.fb-article-grid section li{margin-block:8px}
.fb-article-grid section a{text-decoration:underline;text-underline-offset:3px}
.fb-faq-list{display:grid;gap:12px}
.fb-faq-list>div{overflow:hidden;border:1px solid var(--line);border-radius:16px;background:var(--surface)}
.fb-faq-list h3{font-size:16px;line-height:24px;font-weight:500;margin:0;padding:16px 20px 0}
.fb-faq-list p{font-size:14px;line-height:1.625;color:var(--muted);margin:0;padding:8px 20px 16px}

.fb-challenges-callout{padding:20px}
.fb-challenges-callout p{color:var(--muted);margin:8px 0 16px}
.fb-article-grid .fb-challenges-callout a{display:inline-block;border-radius:8px;background:#5745e8;color:#fff;padding:8px 16px;font-weight:600;text-decoration:none}
.fb-article-grid .fb-challenges-callout a:hover{text-decoration:underline}
.fb-article-author{margin-top:48px;padding:32px;border:1px solid var(--line);border-radius:16px;background:var(--surface)}
.fb-article-author h2{margin-top:0}
.fb-article-author p{margin:8px 0 0;color:var(--muted)}
@media(max-width:639px){.fb-challenges-callout{padding:16px}.fb-article-author{padding:24px}}

.fb-article{max-width:1152px;padding-block:56px}
.fb-article .fb-crumb{font-size:13px;line-height:1.65;margin-bottom:16px}
.fb-article-grid{grid-template-columns:minmax(0,1fr) 300px;gap:56px}
.fb-article-grid aside{top:96px}
.fb-article-cover{aspect-ratio:16/9;min-height:240px;margin:0 0 32px;padding:5.8% 6% 6.8%;border:1px solid var(--line);gap:12px}
.fb-article-cover h1{font-size:36px;line-height:1.12;margin:6px 0 12px}
@media(max-width:1279px){.fb-article-grid{gap:40px}}
@media(max-width:1023px){.fb-article-grid{grid-template-columns:minmax(0,760px);justify-content:center}.fb-article-grid aside{display:none}.fb-article{padding-top:40px}}
@media(max-width:639px){.fb-article-cover{aspect-ratio:4/3}.fb-article-cover h1{font-size:24px}}

.fn-body:has(.fb-article) .fb-header nav{min-height:95px}
@media(min-width:1280px){.fn-body:has(.fb-article) .fb-header nav{min-height:68px}}
@media(max-width:639px){.fb-article-cover h1{line-height:1.04}}

.fb-article-cover{position:relative;overflow:hidden;padding:8% 6%;background:radial-gradient(55% 55% at 85% 15%,#ffffff47,transparent),linear-gradient(135deg,#2a1f6b,#5b4ee0 55%,#9796ff)}
.fb-article-cover::before,.fb-article-cover::after{content:"";position:absolute;aspect-ratio:1;border-radius:50%;pointer-events:none}
.fb-article-cover::before{width:42%;bottom:-18%;right:-10%;background:#ffffff1a}
.fb-article-cover::after{width:28%;top:-14%;left:-8%;background:#ffffff12}
.fb-article-cover>div{position:relative;z-index:1}
.fb-article-cover img{width:auto;height:24px}
.fb-article-cover svg{width:80px;height:80px}
.fb-article-cover h1{font-weight:800;line-height:1.11;margin:8px 0 12px;text-shadow:0 1px 2px #0003}
.fb-article-cover small{color:#fffc}
.fb-article-cover span{padding:4px 12px;background:#ffffff26;border-color:#ffffff59;font-weight:600;backdrop-filter:blur(4px)}
@media(max-width:1023px){.fb-article-cover svg{width:64px;height:64px}.fb-article-cover h1{font-size:30px}}
@media(max-width:639px){.fb-article-cover svg{width:56px;height:56px}.fb-article-cover img{height:20px}.fb-article-cover h1{font-size:24px;line-height:1.25}}

.fb-article-grid h2[id]{scroll-margin-top:112px}
.fb-article-grid>div>section>p,.fb-article-grid>div>section>ol,.fb-article-grid>div>section>ul{color:var(--muted);line-height:26px}
.fn-document:not([data-theme="light"]) .fb-article-grid>div>section>p,.fn-document:not([data-theme="light"]) .fb-article-grid>div>section>ol,.fn-document:not([data-theme="light"]) .fb-article-grid>div>section>ul{color:#ffffffb3}
.fb-article-grid aside{display:flex;flex-direction:column;max-height:calc(100vh - 112px)}
.fb-article-grid aside nav{display:flex;flex-direction:column;min-height:0}
.fb-article-grid aside ol{min-height:0;overflow:auto;list-style:none;padding:0;margin:12px 0 0}
.fb-article-grid aside li{margin:0 0 4px}
.fb-article-grid aside nav a{display:block;padding:8px 12px;border-radius:8px;color:var(--muted);font-size:14px;line-height:1.375}
.fb-article-grid aside nav a[aria-current]{background:#777ef726;color:#9796ff;font-weight:500}
[data-theme="light"] .fb-article-grid aside nav a[aria-current]{color:#4940a5}
.fb-article-grid aside .fb-article-callout{margin-bottom:0}
@media(max-width:1023px){.fb-article-grid aside{display:none}}

.fb-beginner-cover{display:block;width:100%;height:auto;border-radius:16px}
.fb-faq-list h3 button{display:flex;width:100%;align-items:center;justify-content:space-between;gap:12px;padding:0;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}
.fb-faq-list h3 button::after{content:"+";flex:none}
.fb-faq-list h3 button[aria-expanded="true"]::after{content:"−"}
.fb-faq-list p[hidden]{display:none}

.fb-launch-figure{margin:32px 0}
.fb-launch-figure img{display:block;width:100%;max-width:640px;height:auto;margin-inline:auto;border-radius:12px}
.fb-launch-figure figcaption{margin-top:12px;color:var(--muted);font-size:.95rem;line-height:1.5}
.fb-launch-table{max-width:100%;margin-block:24px;overflow:auto}
.fb-launch-table table{width:100%;border-collapse:collapse;border-radius:12px;overflow:hidden;font-size:16px;line-height:26px;color:var(--muted)}
.fb-launch-table :is(th,td){padding:12px 16px;text-align:left;border:1px solid var(--line)}
.fb-launch-table thead,.fb-launch-table tbody tr:nth-child(even){background:var(--surface)}
.fb-article-related a{display:block;border:1px solid var(--line);border-radius:16px;overflow:hidden;text-decoration:none}
.fb-article-related img{display:block;width:100%;height:auto}
.fb-article-related a>div{padding:16px}
.fb-article-related h3,.fb-article-related p{margin:8px 0}

.fb-photo-cover{position:relative;overflow:hidden;aspect-ratio:16/9;border:1px solid var(--line);border-radius:16px;background:var(--surface);margin-bottom:32px}
.fb-photo-cover h1{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
.fb-photo-cover .fb-beginner-cover{width:100%;height:100%;object-fit:cover;object-position:left;border-radius:0}
@media(max-width:639px){.fb-photo-cover{aspect-ratio:4/3}}

.fb-article .fb-crumb ol{display:flex;flex-wrap:wrap;row-gap:4px;margin:0;padding:0;list-style:none}
.fb-article .fb-crumb li{display:flex;min-width:0;max-width:100%}
.fb-article .fb-crumb-separator{flex:none;margin-inline:10px}
.fb-article .fb-crumb [aria-current="page"]{overflow-wrap:anywhere}

.fb-launch-article .fb-article-intro{margin:0 0 16px;color:var(--muted);font-size:18px;line-height:1.625}
.fn-document:not([data-theme="light"]) .fb-launch-article .fb-article-intro{color:#ffffffb3}
.fb-launch-article .fb-launch-meta{display:flex;align-items:center;flex-wrap:wrap;gap:4px 12px;margin:0 0 32px;line-height:20px}
.fn-document:not([data-theme="light"]) .fb-launch-article .fb-launch-meta{color:#ffffff80}
.fb-launch-cta{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:32px;border:1px solid var(--line);border-radius:16px;background:var(--surface)}
.fb-launch-cta p,.fb-launch-more p{margin:0;font-size:14px;line-height:1.625;color:var(--muted)}
.fb-launch-cta p:first-child{font-size:20px;line-height:28px;font-weight:700;color:inherit}
.fb-launch-cta p+p,.fb-launch-more p{margin-top:8px}
.fb-launch-article .fb-launch-cta a,.fb-launch-more a{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;min-height:44px;padding:0 20px;border-radius:12px;border-bottom:3px solid #5653fe;background:#5745e8;color:#fff;font-size:14px;font-weight:600;text-decoration:none}
.fb-launch-cta-inline{margin-block:40px;border:0;border-radius:24px;background:linear-gradient(135deg,#3d3392,#6c59e2);color:#fff}
.fb-launch-cta-inline p{color:#ffffffe0}
.fb-launch-article .fb-launch-cta-inline a{min-height:48px;background:#fff;color:#1f2147;border:0}
.fb-launch-more,.fb-launch-mobile-toc nav{padding:20px;border:1px solid var(--line);border-radius:16px;background:var(--surface)}
.fb-launch-more{margin-top:16px}
.fb-launch-more a{margin-top:16px;width:100%}
.fb-launch-mobile-toc{display:none;margin-top:32px}
.fb-launch-mobile-toc ol{list-style:none;margin:16px 0 0;padding:0}
.fb-launch-mobile-toc li a{display:block;padding:8px 12px;border-radius:8px;color:var(--muted);font-size:14px;line-height:1.375}
.fb-launch-mobile-toc li+li{margin-top:4px}
.fb-launch-mobile-toc nav>strong{font-size:14px;line-height:20px;color:#9796ff}
.fb-launch-mobile-toc a[aria-current]{background:#777ef726;color:inherit}
.fb-launch-start{margin-top:32px}
@media(max-width:1023px){.fb-launch-mobile-toc{display:block}}
@media(max-width:639px){.fb-launch-cta{flex-direction:column;align-items:stretch;padding:24px}}

.fn-document:not([data-theme="light"]) .fb-launch-cta-top p+p,.fn-document:not([data-theme="light"]) .fb-launch-more p{color:#ffffffb3}

.fb-launch-article section>h2[id]{margin:40px 0 16px;font-size:24px;line-height:32px}
.fb-launch-article section>p{margin:0 0 16px}
.fn-document:not([data-theme="light"]) .fb-launch-article :is(figcaption,.fb-launch-table table){color:#ffffffb3}
.fn-document:not([data-theme="light"]) .fb-launch-table thead{background:#1c1a24}
.fn-document:not([data-theme="light"]) .fb-launch-table tbody tr:nth-child(even){background:#12101f}
`,i=[`finelo-blog.js`,`finelo-blog-article.js`],a={title:e,bodyClass:``,html:n,css:r,scripts:i};export{t as bodyClass,r as css,a as default,n as html,i as scripts,e as title};