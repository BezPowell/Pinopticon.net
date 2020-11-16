+++
title = "Carbon and pagespeed in newspaper websites - Better Web Alliance Edition"
date = 2020-11-13
updated = 2020-11-15
description = "Follow-up analysis of the page load performance and carbon generated from viewing various UK newspaper websites using the Better Web Alliance metrics."
[taxonomies]
categories = ["Web"]

# Custom data
[extra]
excerpt = "A little over six months ago, right at the start of the coronavirus lockdown here in the UK, I performed an analysis of the page load performance and carbon generated from viewing various UK newspaper websites. Having just launched the Better Web Alliance, I decided to revisit the analysis, including the new Accessibility and Privacy metrics."
+++
<div class="text-block">

## Preface
A little over six months ago, right at the start of the coronavirus lockdown here in the UK, I performed an analysis of the page load performance and carbon generated from viewing various UK newspaper websites. In the intervening time I have been giving a lot of thought to the actions that web developers (and website owners) can take to help make the world wide web a better place; and just under a month ago launched the [Better Web Alliance](https://www.better-web-alliance.net/) to try and bring attention to this topic.

As page load performance and carbon emissions are some of the central metrics that the Alliance tries to cover, I thought it would be interesting to revisit the analysis. Seeing how the websites' performance has changed, and testing for accessibility and tracking scripts, which were not part of the original analysis.

If you have not already read the [original post](/blog/carbon-and-pagespeed/), I recommend you read that first as it explains some further background detail such as the reasoning behind which websites were selected etc.

## Methodology
The same selection of websites as the original study were chosen, and once again tested using a series of automated tools. This time, the metrics tested were expanded to cover all of those measured by the Better Web Alliance: Pageload Speed, Carbon Emissions, Accessibility and respecting user Privacy.

In a further refinement of the original analysis, the Homepage and a single article were also tested for each site, compared to just the homepage in the original study. This choice was made as the homepage is often not representative of the content found throughout the rest of the site.

Since the original post, [Google Pagespeed Insights have updated their metrics](https://web.dev/lighthouse-whats-new-6.0/), which should result in a regression in test scores for an identical page. As a result of this, I am expecting a slight shift downards for all sites that have not carried out work to improve performance in the time since the original post.

All the pages were tested using the following tools:
- [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) – analyses how fast the page loads compared to other websites. Taking into account the size of the page, how fast the server(s) take to respond and how long the page takes to render etc. It then makes suggestions on how to improve this, such as optimising images and minifying javascript. Scores a website between 0 and 100, with 0 – 49 being considered slow, 50 - 89 average, and 90 – 100 fast.
- [Website carbon calculator](https://www.websitecarbon.com/) – determines the approximate amount of CO<sub>2</sub> emitted for each pageview. Taking into account the page size, the energy type the server is running on (i.e. renewable or fossil fuel), and the amount of processing power required to display the page etc.
- [WAVE](https://wave.webaim.org/) - checks for compliance with Web Content Accessibility Guidelines (WCAG). Reports number of Errors, Alerts (potential problems) and Contrast Errors (colour contrast between text and background). All of which could contribute to a negative experience for visitors with disabilities.
- [Blacklight](https://themarkup.org/blacklight) - checks for the presence of user tracking technologies on page. Returns an in-depth text summary that the results are extracted from.

As more tests were needed this time around it did take substantially longer to complete, but all of the tests were still completed within a few hours on the morning of 2020-11-13 for fairness. While the figures are likely not 100% accurate, the test was made as objective as possible by all the checks being fully automated. The only input required from myself was loading each tool and feeding it the url to each webpage.

## The Results
The results are detailed in the table below. I have included BBC News and this website for comparison purposes only. The total page size column is as reported via pingdom tools. Cells with a green background represent the best score out of the newspaper websites, and those with a red background the worst.

Fields marked NaN are where the tool was unable to get a result; from experience this is generally where the test has timed out before it can return a result and an indication of extremely low performance.

{{ table(path="content/blog/2020-11-13-carbon-and-pagespeed-better-web-edition/results.json") }}

The results, particularly the shift since the last measurement, are very interesting. As anticipated, almost all of the sites have regressed on PageSpeed Insights scores; though some very much more so than the others, with the Daily Mirror losing a whole 45 points on desktop, compared to the 1 point for this site; in the intervening 6 months or so since the original study I have made some slight performance improvements to the site but, as the scores were already very good, there was little low-hanging fruit left, so at a rough guess I would expect a shift of maybe at most 7 or 8 points for a page which has not changed at all.

PageSpeed Insights is now measuring many more factors than it originally did, however, which could contribute to a bigger shift on different pages, so this is all pure speculation. It would be interesting to observe the same pages again in six months if PageSpeed Insights keeps the same metrics and scoring system.

Total page weight and carbon (where data is available) seem to be a pretty even split between improvement and regression. The 2 notable outliers here being The Times, which has lost a whole 2.5mb of weight from the it's homepage, and The Sun which has gained an enormous 10.1mb of page weight.

In terms of the new metrics being measured the situation is rather more frightening. Aside from the Daily Telegraph's homepage, every single newspaper page measured reported accessibility errors in WAVE; with The Sun returning an alarming 497 errors. This was matched with Alerts and Contrast Errors (The Sun here also returning hundreds of errors on it's homepage). The only notable exception being the Financial Times, which seems to be using an accessible colour scheme throughout it's site.

Privacy scores accross the Newspaper websites also concerning, as sharing visitor data with third parties is universally practised amongst the sites; with all but a handful allowing google analytics to track visitors across the web. The Sun and The Times both load tracking scripts designed to try and bypass tracking cookie blockers and The Independent, Daily Star, and The Times are likely all tracking their visitors' mouse clicks and keyboard input.

## Conclusion
Despite the increase in how much the web is being used as a source of information trigerred by the coronavirus pandemic, the trend in performance amongst the websites measured seems to be downwards. Again, with the exception of the Financial Times, not a single Newspaper webpage tested had a total size of less than 1MB and very few of them emitted less than 1.5 grams of carbon per page view.

The new Accessibility and Privacy metrics measured are, in some respects, even more concerning. Testing for usability amongst disabled visitors does not seem to be a priority for any of the newspapers, with the worst offender (The Sun) having a homepage that would likely be totally unusable to someone relying on a screen reader.

Invasive tracking scripts and the sharing of visitor data with 3<sup>rd</sup> parties also seems to be business as usual. Something that makes the cookie popups entitled "We Respect Your Privacy" (or something else along similar lines) ring rather hollow. Hypocrisy, it would seem, is alive and well amongst the digital press.

When considering the large number of tracking technologies used across the websites, the poor performance scores are perhaps less suprising, as these tend to have a large impact on performance. Total page weight is still very high, though, so this could only partially explain poor PageSpeed Insights scores.

As with the previous analysis, it seems that your choice of online news outlet is about far more than preference for content, but should also take into account the nature of the delivery system as well.

</div>