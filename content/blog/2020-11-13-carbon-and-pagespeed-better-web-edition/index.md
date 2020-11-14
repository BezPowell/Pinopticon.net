+++
title = "Carbon and pagespeed in newspaper websites - Better Web Alliance Edition"
date = 2020-11-13
description = "Follow-up analysis of the page load performance and carbon generated from viewing various UK newspaper websites using the Better Web Alliance metrics."

[taxonomies]
categories = ["Web"]

# Custom data
[extra]
excerpt = "With many in the west currently self-isolating due to the ongoing COVID-19 pandemic, internet use is growing rapidly. In light of this strain on the internet, I decided it would be an interesting experiment to analyse the page load performance and carbon generated from viewing a common and seemingly simple form of site – newspaper websites."
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

<div class="table-wrapper">
    <table>
        <caption>Better Web Alliance performance metrics for 15 UK newspaper websites.</caption>
        <thead>
            <tr>
                <th scope="col">Website</th>
                <th scope="col" colspan="2">Pagespeed Insights</th>
                <th scope="col">Website Carbon<br />Calculator</th>
                <th scope="col" colspan="3">WAVE</th>
                <th scope="col" colspan="3">Blacklight</th>
                <th scope="col">Size</th>
            </tr>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Mobile</th>
                <th scope="col">Desktop</th>
                <th scope="col">Grams (g)</th>
                <th scope="col">Errors</th>
                <th scope="col">Alerts</th>
                <th scope="col">Contrast Errors</th>
                <th scope="col">Trackers</th>
                <th scope="col">3rd Party Cookies</th>
                <th scope="col">Other</th>
                <th scope="col">Weight<br />(MB)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"><a href="https://www.metro.news/">Metro: Homepage</a></th>
                <td>28</td>
                <td>73</td>
                <td>1.88</td>
                <td>38</td>
                <td>30</td>
                <td>22</td>
                <td class="good">4</td>
                <td>1</td>
                <td>When you visit this site, it tells Facebook.</td>
                <td>3.5</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.metro.news/45m-lotto-death-crash-youngest-euromillions-winner-accused-of-killing-gran/2218856/
">Metro: Article</a></th>
                <td>51</td>
                <td>84</td>
                <td>0.64</td>
                <td>20</td>
                <td class="good">3</td>
                <td>11</td>
                <td class="good">4</td>
                <td>1</td>
                <td>When you visit this site, it tells Facebook.</td>
                <td>1.2</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.thesun.co.uk/">The Sun: Homepage</a></th>
                <td>15</td>
                <td>52</td>
                <td>2.3</td>
                <td class="bad">497</td>
                <td>480</td>
                <td class="bad">356</td>
                <td>24</td>
                <td>4</td>
                <td>This website loads trackers on your computer that<br />are designed to evade third-party cookie blockers.<br />When you visit this site, it tells Facebook.<br />This site allows Google Analytics to follow<br />you across the internet.</td>
                <td class="bad">15.2</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.thesun.co.uk/news/uknews/13185362/peter-sutcliffe-yorkshire-ripper-dead-covid/
">The Sun: Article</a></th>
                <td>14</td>
                <td>24</td>
                <td>NaN</td>
                <td>22</td>
                <td>26</td>
                <td>31</td>
                <td>24</td>
                <td>4</td>
                <td>This website loads trackers on your computer that<br />are designed to evade third-party cookie blockers.<br />When you visit this site, it tells Facebook.<br />This site allows Google Analytics to follow<br />you across the internet.</td>
                <td>NaN</td>
            </tr>
            <tr>
                <th scope="row"><a href="http://dailymail.co.uk/">Daily Mail: Homepage</a></th>
                <td>12</td>
                <td>39</td>
                <td>NaN</td>
                <td>56</td>
                <td class="bad">640</td>
                <td>44</td>
                <td class="good">4</td>
                <td class="good">0</td>
                <td>This site allows Google Analytics to follow<br />you across the internet.</td>
                <td>2.7</td>
            </tr>
            <tr>
                <th scope="row"><a href="http://dailymail.co.uk/">Daily Mail: Article</a></th>
                <td>17</td>
                <td>63</td>
                <td>NaN</td>
                <td>13</td>
                <td>87</td>
                <td>53</td>
                <td class="good">4</td>
                <td class="good">0</td>
                <td>This site allows Google Analytics to follow<br />you across the internet.</td>
                <td>1.9</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.standard.co.uk/">Evening Standard: Homepage</a></th>
                <td>21</td>
                <td>43</td>
                <td>2.58</td>
                <td>71</td>
                <td>24</td>
                <td>9</td>
                <td>NaN</td>
                <td>NaN</td>
                <td>NaN</td>
                <td>3.2</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.standard.co.uk/news/crime/peter-sutcliffe-yorkshire-ripper-dead-b69308.html
">Evening Standard: Article</a></th>
                <td>20</td>
                <td>40</td>
                <td>NaN</td>
                <td>11</td>
                <td>12</td>
                <td>17</td>
                <td>NaN</td>
                <td>NaN</td>
                <td>NaN</td>
                <td>2.7</td>
            </tr>
            <tr>
                <th scope="row"><a href="http://mirror.co.uk/">Daily Mirror: Homepage</a></th>
                <td>11</td>
                <td>25</td>
                <td>NaN</td>
                <td>185</td>
                <td>176</td>
                <td>81</td>
                <td>15</td>
                <td>22</td>
                <td>This website could be monitoring your keystrokes<br />and mouse clicks.<br />This site allows Google Analytics to follow<br />you across the internet.</td>
                <td>3.3</td>
            </tr>
            <tr>
                <th scope="row"><a href="http://mirror.co.uk/">Daily Mirror: Article</a></th>
                <td>12</td>
                <td>46</td>
                <td>NaN</td>
                <td>34</td>
                <td>56</td>
                <td>20</td>
                <td>15</td>
                <td>22</td>
                <td>This website could be monitoring your keystrokes<br />and mouse clicks.<br />This site allows Google Analytics to follow<br />you across the internet.</td>
                <td>5.8</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.thetimes.co.uk/">The Times: Homepage</a></th>
                <td>12</td>
                <td>39</td>
                <td>2.41</td>
                <td>36</td>
                <td>599</td>
                <td>7</td>
                <td>20</td>
                <td>4</td>
                <td>This website loads trackers on your computer that<br />are designed to evade third-party cookie blockers.<br />This website could be monitoring your keystrokes<br />and mouse clicks.<br />When you visit this site, it tells Facebook.<br />This site allows Google Analytics to follow<br />you across the internet.</td>
                <td>3.3</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.thetimes.co.uk/">The Times: Article</a></th>
                <td>16</td>
                <td>33</td>
                <td>1.87</td>
                <td>2</td>
                <td>82</td>
                <td>2</td>
                <td>20</td>
                <td>4</td>
                <td>This website loads trackers on your computer that<br />are designed to evade third-party cookie blockers.<br />This website could be monitoring your keystrokes<br />and mouse clicks.<br />When you visit this site, it tells Facebook.<br />This site allows Google Analytics to follow<br />you across the internet.</td>
                <td>NaN</td>
             </tr>
            <tr>
                <th scope="row"><a href="http://www.express.co.uk/">Daily Express: Homepage</a></th>
                <td class="bad">9</td>
                <td>35</td>
                <td>1.92</td>
                <td>5</td>
                <td>172</td>
                <td>14</td>
                <td class="bad">43</td>
                <td class="bad">94</td>
                <td>This site allows Google Analytics to follow<br />you across the internet.</td>
                <td>3.9</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.express.co.uk/news/uk/1359632/peter-sutcliffe-dead-yorkshire-ripper-dies-latest
">Daily Express: Article</a></th>
                <td>12</td>
                <td>18</td>
                <td>NaN</td>
                <td>15</td>
                <td>216</td>
                <td>47</td>
                <td class="bad">43</td>
                <td class="bad">94</td>
                <td>This site allows Google Analytics to follow<br />you across the internet.</td>
                <td>NaN</td>
            </tr>
            <tr>
                <th scope="row"><a href="http://www.dailystar.co.uk/">Daily Star: Homepage</a></th>
                <td>12</td>
                <td>37</td>
                <td>1.45</td>
                <td>193</td>
                <td>183</td>
                <td>89</td>
                <td>15</td>
                <td>25</td>
                <td>This website could be monitoring your keystrokes<br />and mouse clicks.<br />This site allows Google Analytics to follow<br />you across the internet.</td>
                <td>2.5</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.dailystar.co.uk/news/latest-news/yorkshire-ripper-peter-sutcliffe-dead-23003362
">Daily Star: Article</a></th>
                <td>13</td>
                <td>37</td>
                <td>NaN</td>
                <td>33</td>
                <td>49</td>
                <td>17</td>
                <td>15</td>
                <td>25</td>
                <td>This website could be monitoring your keystrokes<br />and mouse clicks.<br />This site allows Google Analytics to follow<br />you across the internet.</td>
                <td>4.7</td>
            </tr>
            <tr>
                <th scope="row"><a href="http://inews.co.uk/">i: Homepage</a></th>
                <td>35</td>
                <td>80</td>
                <td>2.29</td>
                <td>2</td>
                <td>309</td>
                <td>68</td>
                <td>12</td>
                <td>2</td>
                <td>This site allows Google Analytics to follow<br />you across the internet.</td>
                <td>1.7</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://inews.co.uk/news/politics/dominic-cummings-reportedly-leave-downing-street-758660
">i: Article</a></th>
                <td>53</td>
                <td class="good">96</td>
                <td>1.88</td>
                <td>7</td>
                <td>150</td>
                <td>28</td>
                <td>12</td>
                <td>2</td>
                <td>This site allows Google Analytics to follow<br />you across the internet.</td>
                <td>1.2</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.ft.com/">Financial Times: Homepage</a></th>
                <td>34</td>
                <td class="bad">17</td>
                <td>0.89</td>
                <td>4</td>
                <td>81</td>
                <td class="good">0</td>
                <td class="good">4</td>
                <td>1</td>
                <td>None.</td>
                <td>NaN</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.ft.com/">Financial Times: Article</a></th>
                <td class="good">59</td>
                <td>84</td>
                <td class="good">0.32</td>
                <td>2</td>
                <td>19</td>
                <td class="good">0</td>
                <td class="good">4</td>
                <td>1</td>
                <td>None.</td>
                <td class="good">0.6</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://theguardian.com/">The Guardian: Homepage</a></th>
                <td>26</td>
                <td>75</td>
                <td>1.58</td>
                <td>15</td>
                <td>111</td>
                <td>39</td>
                <td>8</td>
                <td>1</td>
                <td>When you visit this site, it tells Facebook.<br />This site allows Google Analytics to follow<br />you across the internet.</td>
                <td>2.7</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.theguardian.com/uk-news/2020/nov/13/yorkshire-ripper-peter-sutcliffe-dies-aged-74
">The Guardian: Article</a></th>
                <td>33</td>
                <td>56</td>
                <td>1.39</td>
                <td>5</td>
                <td>12</td>
                <td>18</td>
                <td>8</td>
                <td>1</td>
                <td>When you visit this site, it tells Facebook.<br />This site allows Google Analytics to follow<br />you across the internet.</td>
                <td>1.3</td>
            </tr>
            <tr>
                <th scope="row"><a href="http://www.dailyrecord.co.uk/">Daily Record: Homepage</a></th>
                <td>12</td>
                <td>36</td>
                <td class="bad">2.65</td>
                <td>183</td>
                <td>193</td>
                <td>85</td>
                <td>32</td>
                <td>63</td>
                <td>This site allows Google Analytics to follow<br />you across the internet.</td>
                <td>4.0</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.dailyrecord.co.uk/news/scottish-news/son-scots-yorkshire-ripper-victim-23003997
">Daily Record: Article</a></th>
                <td>13</td>
                <td>43</td>
                <td>NaN</td>
                <td>32</td>
                <td>45</td>
                <td>15</td>
                <td>32</td>
                <td>63</td>
                <td>This site allows Google Analytics to follow<br />you across the internet.</td>
                <td>3.6</td>
            </tr>
            <tr>
                <th scope="row"><a href="http://www.cityam.com/">City A.M.: Homepage</a></th>
                <td>17</td>
                <td>56</td>
                <td>NaN</td>
                <td>18</td>
                <td>159</td>
                <td>26</td>
                <td>28</td>
                <td>8</td>
                <td>This site allows Google Analytics to follow<br />you across the internet.</td>
                <td>2.5</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.cityam.com/caffe-nero-launches-restructuring-plan-amid-second-lockdown/
">City A.M.: Article</a></th>
                <td>16</td>
                <td>40</td>
                <td>NaN</td>
                <td>27</td>
                <td>138</td>
                <td>35</td>
                <td>28</td>
                <td>8</td>
                <td>This site allows Google Analytics to follow<br />you across the internet.</td>
                <td>2.7</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.independent.co.uk/">The Independent: Homepage</a></th>
                <td>20</td>
                <td>37</td>
                <td>NaN</td>
                <td>125</td>
                <td>28</td>
                <td>114</td>
                <td>15</td>
                <td>5</td>
                <td>This website could be monitoring your keystrokes<br />and mouse clicks.<br />When you visit this site, it tells Facebook.<br />This site allows Google Analytics to follow<br />you across the internet.</td>
                <td>4.5</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.independent.co.uk/news/world/americas/us-election-2020/us-election-results-news-live-biden-trump-map-b1721639.html
">The Independent: Article</a></th>
                <td>20</td>
                <td>31</td>
                <td>NaN</td>
                <td>30</td>
                <td>10</td>
                <td>76</td>
                <td>15</td>
                <td>5</td>
                <td>This website could be monitoring your keystrokes<br />and mouse clicks.<br />When you visit this site, it tells Facebook.<br />This site allows Google Analytics to follow<br />you across the internet.</td>
                <td>NaN</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.telegraph.co.uk/">The Daily Telegraph: Homepage</a></th>
                <td>18</td>
                <td>73</td>
                <td>1.43</td>
                <td class="good">0</td>
                <td>37</td>
                <td class="good">0</td>
                <td>18</td>
                <td>19</td>
                <td>When you visit this site, it tells Facebook.<br />This site allows Google Analytics to follow<br />you across the internet.</td>
                <td>4.4</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.telegraph.co.uk/politics/2020/11/13/boris-johnson-dominic-cummings-carrie-symonds-brexit-latest/
">The Daily Telegraph: Article</a></th>
                <td>NaN</td>
                <td>NaN</td>
                <td>NaN</td>
                <td>3</td>
                <td>90</td>
                <td>89</td>
                <td>18</td>
                <td>19</td>
                <td>When you visit this site, it tells Facebook.<br />This site allows Google Analytics to follow<br />you across the internet.</td>
                <td>3.0</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.bbc.com/news">BBC News: Homepage</a></th>
                <td>72</td>
                <td>98</td>
                <td>0.42</td>
                <td>1</td>
                <td>61</td>
                <td>3</td>
                <td>26</td>
                <td>61</td>
                <td>None.</td>
                <td>1.1</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.bbc.com/news/election-us-2020-54926084
">BBC News: Article</a></th>
                <td>23</td>
                <td>53</td>
                <td>NaN</td>
                <td>0</td>
                <td>14</td>
                <td>0</td>
                <td>26</td>
                <td>61</td>
                <td>None.</td>
                <td>2.6</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://pinopticon.net/">Pinopticon.net: Homepage</a></th>
                <td>95</td>
                <td>99</td>
                <td>0.31</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>None.</td>
                <td>0.25</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://pinopticon.net/">Pinopticon.net: Article</a></th>
                <td>98</td>
                <td>100</td>
                <td>0.17</td>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>None.</td>
                <td>0.11</td>
            </tr>
        </tbody>
    </table>
</div>
<div class="table-wrapper">
    <table>
        <caption>Change in scores since 2020-03-23.</caption>
        <thead>
            <tr>
                <th scope="col">Website</th>
                <th scope="col" colspan="2">Pagespeed Insights</th>
                <th scope="col">Website Carbon<br />Calculator</th>
                <th scope="col">Size</th>
            </tr>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Mobile</th>
                <th scope="col">Desktop</th>
                <th scope="col">Grams (g)</th>
                <th scope="col">Weight<br />(MB)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"><a href="https://www.metro.news/">Metro</a></th>
                <td class="bad">-18</td>
                <td class="bad">-22</td>
                <td class="bad">+0.16</td>
                <td class="bad">+0.6</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.thesun.co.uk/">The Sun</a></th>
                <td class="good">+10</td>
                <td class="good">+28</td>
                <td class="good">-0.21</td>
                <td class="bad">+10.1</td>
            </tr>
            <tr>
                <th scope="row"><a href="http://dailymail.co.uk/">Daily Mail</a></th>
                <td class="bad">-8</td>
                <td class="bad">-3</td>
                <td>NaN</td>
                <td class="good">-1.1</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.standard.co.uk/">Evening Standard</a></th>
                <td class="bad">-15</td>
                <td class="bad">-29</td>
                <td class="bad">+0.54</td>
                <td class="bad">+0.4</td>
            </tr>
            <tr>
                <th scope="row"><a href="http://mirror.co.uk/">Daily Mirror</a></th>
                <td class="bad">-9</td>
                <td class="bad">-45</td>
                <td>NaN</td>
                <td class="bad">+1.1</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.thetimes.co.uk/">The Times/a></th>
                <td>NaN</td>
                <td>NaN</td>
                <td class="good">-0.63</td>
                <td class="good">-2.5</td>
            </tr>
            <tr>
                <th scope="row"><a href="http://www.express.co.uk/">Daily Express</a></th>
                <td class="bad">-5</td>
                <td class="bad">-14</td>
                <td>NaN</td>
                <td class="bad">+1.1</td>
            </tr>
            <tr>
                <th scope="row"><a href="http://www.dailystar.co.uk/">Daily Star</a></th>
                <td class="bad">-12</td>
                <td class="bad">-28</td>
                <td>NaN</td>
                <td class="good">-0.7</td>
            </tr>
            <tr>
                <th scope="row"><a href="http://inews.co.uk/">i</a></th>
                <td class="bad">-3</td>
                <td class="good">+19</td>
                <td class="bad">+0.63</td>
                <td class="good">-0.5</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.ft.com/">Financial Times</a></th>
                <td class="good">+13</td>
                <td class="bad">-15</td>
                <td class="good">-0.11</td>
                <td class="good">-1.7</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://theguardian.com/">The Guardian</a></th>
                <td class="bad">-9</td>
                <td class="good">+7</td>
                <td class="good">-0.05</td>
                <td class="good">-0.6</td>
            </tr>
            <tr>
                <th scope="row"><a href="http://www.dailyrecord.co.uk/">Daily Record</a></th>
                <td class="bad">-16</td>
                <td class="bad">-48</td>
                <td>NaN</td>
                <td class="bad">+1.9</td>
            </tr>
            <tr>
                <th scope="row"><a href="http://www.cityam.com/">City A.M.</a></th>
                <td class="bad">-15</td>
                <td class="bad">-20</td>
                <td>NaN</td>
                <td class="bad">+0.9</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.independent.co.uk/">The Independent</a></th>
                <td class="bad">-3</td>
                <td class="bad">-21</td>
                <td >NaN</td>
                <td class="bad">+0.4</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.telegraph.co.uk/">The Daily Telegraph</a></th>
                <td class="bad">-19</td>
                <td class="good">+2</td>
                <td >NaN</td>
                <td class="bad">+1.5</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.bbc.com/news">BBC News</a></th>
                <td class="bad">-12</td>
                <td class="bad">-2</td>
                <td class="good">-0.09</td>
                <td class="good">-1.1</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://pinopticon.net/">Pinopticon.net</a></th>
                <td class="bad">-4</td>
                <td class="bad">-1</td>
                <td class="bad">+0.17</td>
                <td class="bad">+0.08</td>
            </tr>
        </tbody>
    </table>
</div>

The results, particularly the shift since the last measurement, are very interesting. As anticipated, almost all of the sites have regressed on PageSpeed Insights scores; though some very much more so than the others, with the Daily Mirror losing a whole 45 points on desktop, compared to the 1 point for this site.

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