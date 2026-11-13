var e=`Machine Learning Trading Bot: How Models Are Built, Tested, and Monitored | Finelo`,t=``,n=`
<header class="fb-header"><nav aria-label="Blog navigation"><a href="/discover" aria-label="Finelo logo"><img src="__FIN_BASE__assets/finelo-logo.svg" alt=""></a><div class="fb-desktop-links"><details><summary>Product <span aria-hidden="true">▾</span></summary><ul><li><a href="/discover/app">Explore Finelo</a></li><li><a href="/discover/download">Download App</a></li><li><a href="/discover/ai">Learn with AI</a></li><li><a href="/discover/ai-bot">AI Trading Bots</a></li><li><a href="/discover/pricing">Pricing</a></li></ul></details><details><summary>Challenges <span aria-hidden="true">▾</span></summary><ul><li><a href="/discover/trading-challenge">28-Day Trading Challenge</a></li><li><a href="/discover/investing-challenge">28-Day Investing Challenge</a></li><li><a href="/discover/ai-trader-challenge">28-Day AI Trader Challenge</a></li><li><a href="/discover/ai-investing-challenge">28-Day AI Investing Challenge</a></li><li><a href="/discover/challenges">Compare All Challenges →</a></li></ul></details><a href="/discover/blog">Blog</a><details><summary>Trust <span aria-hidden="true">▾</span></summary><ul><li><a href="/discover/reviews">Reviews</a></li><li><a href="/discover/about">About Us</a></li><li><a href="/discover/community">Community</a></li><li><a href="/discover/media">Media Coverage</a></li></ul></details><a href="/discover/support">Support Center</a></div><div class="fb-actions"><button class="fb-theme" type="button" aria-label="Switch to light theme">☀</button><details><summary aria-label="Language: English">EN</summary><ul><li><a href="/discover/blog" aria-current="true">English</a></li></ul></details><a class="fb-nav-login" href="/discover/login">Log in</a><a class="fb-cta" href="/challenge">Get started</a><button type="button" class="fb-mobile-toggle" aria-label="Open navigation menu" aria-haspopup="dialog">☰</button></div></nav></header><dialog class="fb-mobile-drawer" aria-label="Blog navigation"><div class="fb-drawer-head"><a href="/discover" aria-label="Finelo home"><img src="__FIN_BASE__assets/finelo-logo.svg" alt=""></a><form method="dialog"><button aria-label="Close navigation menu">×</button></form></div><nav aria-label="Mobile blog navigation"><section><h2>Product</h2><a href="/discover/app">Explore Finelo</a><a href="/discover/download">Download App</a><a href="/discover/ai">Learn with AI</a><a href="/discover/ai-bot">AI Trading Bots</a><a href="/discover/pricing">Pricing</a></section><section><h2>Challenges</h2><p>Classic Track</p><a href="/discover/trading-challenge">28-Day Trading Challenge</a><a href="/discover/investing-challenge">28-Day Investing Challenge</a><p>AI Track</p><a href="/discover/ai-trader-challenge">28-Day AI Trader Challenge</a><a href="/discover/ai-investing-challenge">28-Day AI Investing Challenge</a><a href="/discover/challenges">Compare All Challenges →</a></section><a href="/discover/blog">Blog</a><section><h2>Trust</h2><a href="/discover/reviews">Reviews</a><a href="/discover/about">About Us</a><a href="/discover/community">Community</a><a href="/discover/media">Media Coverage</a></section><a href="/discover/support">Support Center</a><details><summary>Language: English</summary><a href="/discover/blog" lang="en">English</a></details><a href="/discover/login">Log in</a><a class="fb-cta" href="/challenge">Get started</a></nav></dialog>
<main class="fb-wrap fb-article"><article><div class="fb-article-grid"><div><nav class="fb-crumb" aria-label="Breadcrumb"><ol><li><a href="/discover">Home</a></li><li><span class="fb-crumb-separator" aria-hidden="true">/</span><a href="/discover/blog">Blog</a></li><li><span class="fb-crumb-separator" aria-hidden="true">/</span><a href="/discover/blog-trading">Trading</a></li><li><span class="fb-crumb-separator" aria-hidden="true">/</span><span aria-current="page">Machine Learning Trading Bot: How Models Are Built, Tested, and Monitored</span></li></ol></nav>
<header class="fb-cover fb-article-cover"><div><img src="__FIN_BASE__assets/finelo-logo.svg" alt=""><svg viewbox="0 0 80 80" fill="none" aria-hidden="true"><path d="M6 56 L26 36 L40 46 L66 16 M52 16 H68 V32" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><small>Trading guide</small><h1>Machine Learning Trading Bot: How Models Are Built, Tested, and Monitored</h1><span>trading</span> <span>7 min read</span></div></header>
<p class="fb-article-intro">A machine learning trading bot turns model outputs into rule-based actions. Learn how data leakage, overfitting, drift, execution, monitoring, and model governance affect real-world use.</p><p class="fb-meta"><time datetime="2026-11-06">November 6, 2026</time> · 7 min read</p><div class="fb-article-callout"><strong>Practice trading with Finelo</strong><p>Practice in a simulator, learn with bite-sized lessons, and build confidence before risking real money.</p><a href="/discover/app">Explore Finelo →</a></div><section><h2 id="machine-learning-trading-bot-quick-answer">Machine Learning Trading Bot: Quick Answer</h2><p>A machine learning trading bot uses historical or live data to estimate a market-related output—such as a probability, ranking, volatility measure, or execution choice—and converts that output into a rule-based action. The model does not “know” the future. Its usefulness depends on data quality, target design, testing discipline, costs, and whether the relationship learned from the past remains valid.</p><div class="fb-article-callout fb-challenges-callout"><strong>Explore Finelo's 28-day challenges</strong><p>Turn learning into a daily habit with guided challenge paths.</p><a href="/discover/challenges">View challenges</a></div><p>The phrase can describe very different systems. One bot may rank stocks weekly; another may forecast short-term volatility; another may optimize order execution. A responsible evaluation asks what the model predicts, how the prediction becomes a position, and what prevents a weak or stale signal from trading unchecked.</p></section>
<section><h2 id="how-it-works">How It Works</h2><p>A basic development pipeline has six stages.</p><ol><li>Define the target. Examples include next-period return direction, probability of a volatility increase, or expected transaction cost.</li><li>Collect features. These might include prices, volume, spreads, fundamental data, or carefully licensed alternative data.</li><li>Split the data. Training data fits the model, validation data guides choices, and a later test period evaluates the final process.</li><li>Train the model. The algorithm estimates relationships between features and the target.</li><li>Convert output into rules. A probability is not an order. The system still needs thresholds, sizing, exposure limits, and exit logic.</li><li>Monitor after deployment. Data drift, model drift, missing inputs, execution differences, and changing costs must be detected.</li></ol><p>This differs from a fixed trading bot, where a human writes every condition. Machine learning estimates some relationship from data, but fixed rules still surround the model. Position limits, order checks, and shutdown rules should not depend on a probabilistic model alone.</p><p>The <a href="https://www.sec.gov/file/staff-report-algorithmic-trading-us-capital-markets">SEC staff report on algorithmic trading</a> offers wider context for automated markets and the need for operational controls. It does not certify any retail bot or model.</p></section>
<section><h2 id="a-practical-decision-framework">A Practical Decision Framework</h2><p>Evaluate a machine learning bot at three levels: prediction, strategy, and operation.</p><p>Prediction quality: Is the target economically meaningful? Was the model compared with a simple baseline? Were features available at the exact time the prediction would have been made? A model can show high statistical accuracy while providing little tradable value.</p><p>Strategy quality: How does a score become exposure? A useful test includes turnover, spread, commissions, market impact, borrow cost, financing, and taxes. It also examines drawdown, concentration, tail outcomes, and sensitivity to thresholds—not only average return.</p><p>Operational quality: How does the system respond to stale data, missing symbols, an API error, a delayed model, or an order rejection? Logs should connect every order to a model version, input timestamp, rule, and risk decision.</p><p>Ask the developer or vendor for a model card covering data, target, testing periods, limitations, retraining, and monitoring. “Proprietary AI” is not a substitute for these answers.</p></section>
<section><h2 id="worked-example-and-checklist">Worked Example and Checklist</h2><p>Imagine a model that ranks 500 stocks each Friday by the estimated probability of outperforming the index over the next week. The strategy buys the top 10 and rebalances weekly.</p><p>An initial result looks strong, but the review must ask:</p><ul><li>Were Friday closing prices used to create features and also treated as executable prices?</li><li>Did the dataset include companies that later disappeared?</li><li>Were earnings releases and corporate actions timestamped correctly?</li><li>Were hundreds of feature combinations tried before choosing the final model?</li><li>What happens after spread, market impact, and turnover costs?</li><li>Does the result persist in a period never used to choose features or thresholds?</li></ul><p>A disciplined workflow could train on an earlier period, tune on a later validation period, freeze the full pipeline, and evaluate once on a final test period. Walk-forward testing may provide several sequential train-and-test windows, but repeated adjustment to the “unseen” results eventually makes them part of model development.</p><p>Before live use, add a shadow phase in which the model produces decisions without sending orders. Compare expected and observed data, scores, positions, and costs. Then use paper trading to test the full order path. The educational guide to <a href="/discover">walk-forward analysis</a> provides additional context on sequential testing.</p></section>
<section><h2 id="risks-tradeoffs-and-limitations">Risks, Tradeoffs, and Limitations</h2><p>Look-ahead leakage occurs when training uses information unavailable at decision time. It can be subtle: revised economic data, end-of-day values, future index membership, or incorrectly aligned timestamps may leak the future.</p><p>Overfitting occurs when a model learns noise or when researchers select the best of many experiments. More features and more complex algorithms increase flexibility, but not necessarily out-of-sample value.</p><p>Regime change can make a historical relationship weaker or reverse it. Market participants adapt, policy changes, transaction costs shift, and rare stress conditions may be absent from training data.</p><p>Model explainability is limited. A complex model can be difficult to diagnose when behavior changes. Users still need understandable exposure, risk, and shutdown controls, even if the prediction mechanism is not fully interpretable.</p><p>Fraud and AI washing remain concerns. The <a href="https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/AITradingBots.html">CFTC warns</a> that promoters may use AI language to advertise unrealistic or guaranteed results. Verify the organization, methodology, underlying asset risk, and complete cost structure.</p></section>
<section><h2 id="a-model-governance-checklist">A Model Governance Checklist</h2><p>Give each model a version, owner, stated purpose, approved inputs, training period, and retirement rule. Preserve the code, feature definitions, data snapshot, parameters, and evaluation results needed to reproduce it. Without version control, a live result cannot be traced to the model that produced it.</p><p>Monitor data before monitoring returns. Check missing values, timestamps, symbol mappings, corporate actions, feature ranges, and distribution changes. A model can continue producing plausible scores after an upstream feed has changed. Alerts should identify stale or abnormal data and block orders when required inputs fail validation.</p><p>Track model and execution behavior separately. Prediction error, ranking stability, calibration, and feature drift describe the model; fills, rejects, slippage, exposure, and reconciliation describe the trading system. Combining them into one profit number makes it harder to diagnose whether a problem came from the forecast or the order path.</p><p>Define change control in advance. Retraining should follow a documented trigger and be evaluated on untouched data before replacement. Keep a rollback version and a safe default that stops new orders if the model service fails. Human review is especially important after unusual markets, data changes, or unexplained behavior. Governance will not make a strategy profitable, but it can prevent an opaque model from changing silently while capital remains exposed.</p></section>
<section><h2 id="sources-and-verification">Sources and Verification</h2><p>This article uses official sources for market and investor-protection context:</p><ul><li>The <a href="https://www.sec.gov/file/staff-report-algorithmic-trading-us-capital-markets">SEC Staff Report on Algorithmic Trading in U.S. Capital Markets</a> discusses algorithmic activity and market controls.</li><li>The <a href="https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/AITradingBots.html">CFTC customer advisory on AI trading bots</a> addresses exaggerated AI claims, fraud cases, fees, spreads, and market risk.</li><li><a href="https://syndication.finra.org/content/artificial-intelligence-ai-and-investment-fraud">FINRA's AI and investment fraud notice</a> explains that AI-generated information can be inaccurate, incomplete, misleading, or fabricated and should not be the sole basis for a decision.</li></ul><p>Model-specific claims require more than these general sources. A provider should supply current documentation for the actual data, model, testing method, broker relationship, fees, and controls.</p></section>
<section><h2 id="conclusion-and-next-steps">Next step</h2><p>A machine learning trading bot is a complete decision system, not merely a predictive model. Data timing, strategy rules, costs, controls, and monitoring can matter as much as statistical accuracy.</p><p>For a practical next step, write a model card and trace one hypothetical order from raw data to prediction, position size, risk check, execution, and log. Any step that cannot be reconstructed is a weakness to resolve before considering live use.</p><hr><p>Choose one model output and list the data, target, validation period, costs, and market conditions behind it. If any part is difficult to explain, treat it as a learning gap rather than evidence that the model is reliable. <a href="/challenge">Explore Finelo’s learning path</a> and return to the model with better questions about overfitting, changing conditions, and risk.</p><p>Finelo provides financial education, not personalized financial, investment, legal, or tax advice. Machine learning can create complex and rapid losses when models, data, or execution fail. Historical accuracy is not a guarantee of future results.</p></section>
<section class="fb-article-faq"><h2>Frequently asked questions</h2><div class="fb-faq-list"><div><h3>Does a machine learning bot need to predict price?</h3><p>No. It may rank assets, estimate volatility, classify market conditions, detect anomalies, or optimize execution. The output should be matched to a clear economic and operational use.</p></div><div><h3>Which model is best for trading?</h3><p>There is no universal best model. A simple baseline with clean data and stable behavior may be more useful than a complex system. Compare models using unseen data, realistic costs, sensitivity tests, and operational requirements.</p></div><div><h3>How often should a model be retrained?</h3><p>Retraining frequency depends on data, horizon, and evidence of drift. Automatic frequent retraining can amplify noise. Define monitoring thresholds and a governed review process rather than retraining merely because recent performance declined.</p></div><div><h3>Can paper trading validate the model?</h3><p>It can test the pipeline, signals, and order workflow, but it cannot reproduce every live fill or market-impact effect. It is one stage of validation, not proof of future profitability.</p></div></div></section><section class="fb-article-author"><h2>About the author</h2><strong>Finelo Team</strong><p>The Finelo Team creates practical investing and trading education designed to help beginners learn faster with structured challenges, simulator practice, and bite-sized lessons.</p></section></div><aside><nav aria-label="In this article"><strong>In this article</strong><ol><li><a href="#machine-learning-trading-bot-quick-answer">Machine Learning Trading Bot: Quick Answer</a></li><li><a href="#how-it-works">How It Works</a></li><li><a href="#a-practical-decision-framework">A Practical Decision Framework</a></li><li><a href="#worked-example-and-checklist">Worked Example and Checklist</a></li><li><a href="#risks-tradeoffs-and-limitations">Risks, Tradeoffs, and Limitations</a></li><li><a href="#a-model-governance-checklist">A Model Governance Checklist</a></li><li><a href="#sources-and-verification">Sources and Verification</a></li><li><a href="#conclusion-and-next-steps">Next step</a></li></ol></nav><div class="fb-article-callout"><strong>Want to learn more?</strong><p>Practice in a simulator, learn with bite-sized lessons, and build confidence before risking real money.</p><a href="/discover/app">Explore Finelo →</a></div></aside></div>
<section><h2>Keep reading — Related articles</h2><div class="fb-grid"><a class="fb-card" href="/discover/blog-trading-bot-strategies"><div class="fb-cover trading" aria-hidden="true"><div><img src="__FIN_BASE__assets/finelo-logo.svg" alt=""><svg width="56" height="56" viewbox="0 0 80 80" fill="none"><path d="M6 56 L26 36 L40 46 L66 16 M52 16 H68 V32" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><small>Trading guide</small><strong>Trading Bot Strategies</strong><span>AI bots</span> <span>8 min read</span></div></div><div class="fb-copy"><small>Trading</small><h2>Trading Bot Strategies: 7 Common Approaches and Their Tradeoffs</h2><p>Compare seven common trading-bot strategies, from trend following and mean reversion to grids and arbitrage. Learn what each assumes, where it can fail, and how to test it.</p><div class="fb-meta">Finelo Team · <time>November 6, 2026</time></div></div></a><a class="fb-card " href="https://finelo.com/blog/grid-bot-trading"><div class="fb-cover trading" aria-hidden="true"><div><img src="__FIN_BASE__assets/finelo-logo.svg" alt=""><svg width="56" height="56" viewbox="0 0 80 80" fill="none"><path d="M6 56 L26 36 L40 46 L66 16 M52 16 H68 V32" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><small>Trading guide</small><strong>Grid Bot Trading</strong><span>AI bots</span> <span>8 min read</span></div></div><div class="fb-copy"><small>Trading</small><h2>Grid Bot Trading: How It Works, Risks, and a Practical Example</h2><p>Grid bot trading places repeated orders across a price range. This guide explains spacing, inventory, fees, range breaks, trend risk, and a practical stress-test for beginners.</p><div class="fb-meta">Finelo Team · <time>November 6, 2026</time></div></div></a><a class="fb-card " href="https://finelo.com/blog/best-ai-trading-app-for-beginners"><div class="fb-cover trading" aria-hidden="true"><div><img src="__FIN_BASE__assets/finelo-logo.svg" alt=""><svg width="56" height="56" viewbox="0 0 80 80" fill="none"><path d="M6 56 L26 36 L40 46 L66 16 M52 16 H68 V32" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div><small>Trading guide</small><strong>AI Trading Apps for Beginners</strong><span>AI trading</span> <span>8 min read</span></div></div><div class="fb-copy"><small>Trading</small><h2>Best AI Trading Apps for Beginners: Finelo and 4 Alternatives</h2><p>Compare Finelo with four AI trading alternatives for beginners. Finelo is our best overall starting option for guided learning and demo practice, while the alternatives serve different automation and strategy-building needs.</p><div class="fb-meta">Finelo Team · <time>November 6, 2026</time></div></div></a></div></section></article></main><section class="fb-blog-cta" aria-labelledby="fb-closing-title"><div class="fb-closing-banner">
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