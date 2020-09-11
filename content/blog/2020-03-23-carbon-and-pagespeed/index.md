+++
title = "Carbon and pagespeed in newspaper websites"
date = 2020-03-23
description = "With many in the west currently self-isolating due to the ongoing COVID-19 pandemic, internet use is growing rapidly. In light of this strain on the internet, I decided it would be an interesting experiment to analyse the page load performance and carbon generated from viewing a common and seemingly simple form of site – newspaper websites."
[taxonomies]
categories = ["Web"]

# Custom data
[extra]
banner = "/img/banners/stairwell_banner.jpg"
meta_desc = "Analysis of the page load performance and carbon generated from viewing various UK newspaper websites."
+++
<div class="text-block">

## Preface
With many in the west currently self-isolating due to the ongoing COVID-19 pandemic, internet use is growing rapidly. A high-profile change recently has been many video streaming services [reducing the bandwidth of the videos they offer](https://www.theguardian.com/media/2020/mar/19/netflix-to-slow-europe-transmissions-to-avoid-broadband-overload) in an attempt to relieve some of the increasing stress on the network. The internet (and video streaming services especially) have come under scrutiny for the amount of electricity that running the supporting infrastructure creates and the resultant environmental impact from the carbon emissions that this produces. Thankfully, though, it looks like that with the reduced emissions from travel <a href="https://www.theguardian.com/world/2020/mar/10/coronavirus-could-cause-fall-in-global-co2-emissions">it is possible this will lead to the first fall in global emissions since the 2008-09 financial crisis</a>.

Watching videos, conference calls, and online gaming are all high bandwidth activities that consume a lot of energy; while working as a web developer, however, I frequently observed that even simple sites, when poorly built, can be very inefficient on bandwidth and the processing power of the devices used to view them. Unoptimised images, heavy use of tracking scripts, and multiple advertisements are all things that can turn even a basic, text-heavy site into a resource hog that has the potential to be quite expensive to view for those on metered connections (such as when downloading a page over 4g).

In their latest newsletter (at the time of writing) [Smashing Magazine](https://www.smashingmagazine.com/) published a link to an online tool that can estimate the carbon emissions of someone viewing a page from a website. Having experimented with the tool on my own site, and in light of the current strain on the internet, I decided it would be an interesting experiment to analyse the page load performance and carbon generated from viewing a common and seemingly simple form of site – newspaper websites. 

Deciding which source of news to read has traditionally been a stylistic and ideological choice, but as we increasingly turn to the internet for information it has the potential to also become a financial and environmental one as well.

## Methodology
I wanted to compare some popular sources of online news for the UK; unfortunately, there is little hard data on page hits for various news websites, so instead I decided to use a proxy measurement in the form of the circulation of the printed form of a newspaper. Wikipedia lists the [newspapers in the UK with the highest circulation](https://en.wikipedia.org/wiki/List_of_newspapers_in_the_United_Kingdom_by_circulation) and I took the top 15 of these to compare – using their official websites for comparison.

All the websites were tested using a series of tools:
- [Google page speed insights](https://developers.google.com/speed/pagespeed/insights/) – analyses how fast the page loads compared to other websites. Taking into account the size of the page, how fast the server(s) take to respond and how long the page takes to render etc. It then makes suggestions on how to improve this, such as optimising images and minifying javascript. Scores a website between 0 and 100, with 0 – 49 being considered slow, 50 - 89 average, and 90 – 100 fast.
- [Pingdom tools](https://tools.pingdom.com/) – similar to pagespeed insights, but with a greater focus on server configuration. Same numerical scoring system as pagespeed insights, in my personal experience it is harder to get a 90+ score here.
- [Website carbon calculator](https://www.websitecarbon.com/) – determines the approximate amount of CO<sub>2</sub> emitted for each pageview. Taking into account the page size, the energy type the server is running on (i.e. renewable or fossil fuel), and the amount of processing power required to display the page etc.

Each webpage was tested with all of these tools in the same 1 hour period on 2020-03-23 to make the test as fair as possible. While the figures for carbon emitted are likely not 100% accurate, the test was made as objective as possible by all the checks being fully automated. The only input required from myself was loading each tool and feeding it the url to each website’s homepage.

## The Results
The results are detailed in the table below. I have included BBC News and this website for comparison purposes only. The total page size column is as reported via pingdom tools and the Cost to View calculated from this using the [average mobile data tariff](https://www.cable.co.uk/mobiles/worldwide-data-pricing/) from 2019 (this is purely the cost to download the page on a mobile connection, it does not take into account any subscription charges or paywalls present on the website). Cells with a green background represent the best score out of the newspaper websites, and those with a red background the worst.

Fields marked NaN are where the tool was unable to get a result; from experience this is generally where the test has timed out before it can return a result and an indication of extremely low performance.

<div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Circulation</th>
                <th scope="col">Pagespeed Insights (Mobile)</th>
                <th scope="col">Pagespeed Insights (Desktop)</th>
                <th scope="col">Pingdom Tools</th>
                <th scope="col">Website Carbon Calculator (g)</th>
                <th scope="col">Size (MB)</th>
                <th scope="col">Cost to View ($)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"><a href="https://www.metro.news/">Metro</a></th>
                <td>1426535</td>
                <td class="good">46</td>
                <td class="good">95</td>
                <td class="good">77</td>
                <td>1.72</td>
                <td>2.90</td>
                <td>$0.0193</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.thesun.co.uk/">The Sun</a></th>
                <td>1250634</td>
                <td class="bad">5</td>
                <td class="bad">24</td>
                <td>63</td>
                <td>2.51</td>
                <td>5.10</td>
                <td>$0.0340</td>
            </tr>
            <tr>
                <th scope="row"><a href="http://dailymail.co.uk/">Daily Mail</a></th>
                <td>1169241</td>
                <td>20</td>
                <td>42</td>
                <td class="bad">60</td>
                <td>NaN</td>
                <td>3.80</td>
                <td>$0.0253</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.standard.co.uk/">Evening Standard</a></th>
                <td>798168</td>
                <td>36</td>
                <td>72</td>
                <td>61</td>
                <td>2.04</td>
                <td>2.80</td>
                <td>$0.0186</td>
            </tr>
            <tr>
                <th scope="row"><a href="http://mirror.co.uk/">Daily Mirror</a></th>
                <td>451466</td>
                <td>20</td>
                <td>70</td>
                <td>66</td>
                <td>NaN</td>
                <td>2.20</td>
                <td>$0.0147</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.thetimes.co.uk/">The Times</a></th>
                <td>368929</td>
                <td>NaN</td>
                <td>Nan</td>
                <td>62</td>
                <td class="bad">3.04</td>
                <td class="bad">5.80</td>
                <td class="bad">$0.0386</td>
            </tr>
            <tr>
                <th scope="row"><a href="http://www.express.co.uk/">Daily Express</a></th>
                <td>296079</td>
                <td>14</td>
                <td>49</td>
                <td>66</td>
                <td>NaN</td>
                <td>2.80</td>
                <td>$0.0186</td>
            </tr>
            <tr>
                <th scope="row"><a href="http://www.dailystar.co.uk/">Daily Star</a></th>
                <td>277237</td>
                <td>24</td>
                <td>65</td>
                <td>67</td>
                <td>NaN</td>
                <td>3.20</td>
                <td>$0.0213</td>
            </tr>
            <tr>
                <th scope="row"><a href="http://inews.co.uk/">i</a></th>
                <td>217182</td>
                <td>38</td>
                <td>61</td>
                <td>62</td>
                <td>1.66</td>
                <td>2.20</td>
                <td>$0.0147</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.ft.com/">Financial Times</a></th>
                <td>157982</td>
                <td>21</td>
                <td>32</td>
                <td>67</td>
                <td class="good">1.00</td>
                <td>1.70</td>
                <td>$0.0113</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://theguardian.com/">The Guardian</a></th>
                <td>132341</td>
                <td>35</td>
                <td>68</td>
                <td>61</td>
                <td>1.63</td>
                <td>3.30</td>
                <td>$0.0220</td>
            </tr>
            <tr>
                <th scope="row"><a href="http://www.dailyrecord.co.uk/">Daily Record</a></th>
                <td>104343</td>
                <td>28</td>
                <td>84</td>
                <td>66</td>
                <td>NaN</td>
                <td>2.10</td>
                <td>$0.0140</td>
            </tr>
            <tr>
                <th scope="row"><a href="http://www.cityam.com/">City A.M.</a></th>
                <td>85521</td>
                <td>32</td>
                <td>76</td>
                <td>70</td>
                <td>1.75</td>
                <td class="good">1.60</td>
                <td class="good">$0.0107</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.independent.co.uk/">The Independent</a></th>
                <td>N/A</td>
                <td>23</td>
                <td>58</td>
                <td>63</td>
                <td>NaN</td>
                <td>4.10</td>
                <td>$0.0273</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.telegraph.co.uk/">The Daily Telegraph</a></th>
                <td>N/A</td>
                <td>37</td>
                <td>71</td>
                <td>64</td>
                <td>NaN</td>
                <td>2.90</td>
                <td>$0.0193</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://www.bbc.com/news">BBC News</a></th>
                <td>N/A</td>
                <td>84</td>
                <td>100</td>
                <td>82</td>
                <td>0.51</td>
                <td>2.20</td>
                <td>$0.0147</td>
            </tr>
            <tr>
                <th scope="row"><a href="https://pinopticon.net/">Pinopticon.net</a></th>
                <td>N/A</td>
                <td>99</td>
                <td>100</td>
                <td>98</td>
                <td>0.14</td>
                <td>0.17</td>
                <td>$0.0011</td>
            </tr>
        </tbody>
    </table>
</div>
<figure>
    <img src="News_Carbon_01.svg" alt="Visual representation of data from the table" />
</figure>
<figure>
    <img src="News_Carbon_02.svg" alt="Visual representation of data from the table" />
</figure>

As you can see from the results, there is a huge amount of variance between the websites tested. In terms of carbon output, the worst offender (The Times) emits over 3 times as much carbon as the best performing site (Financial Times) per pageview. Total page size has an even greater level of variance with the largest page (again The Times) over 3.5 times the size of the smallest (City A.M.) Pingdom tools and Pagespeed insights also display a wide level of variation with the best performing site (Metro) having much higher scores than the worst (The Sun for pagespeed and Daily Mail for Pingdom).

As is to be expected, websites with a higher page load speed also tended to have a lower total page size and carbon emissions, though this was not always the case. There are many factors that determine these metrics, and as an example a site could have a relatively low page size, but poorly optimized javascript that would bring down page performance. Generally speaking, however, from my experience optimisations made to a single metric will almost always improve the others.

The results become even more interesting when the scores are compared against the two comparison websites. None of the newspaper websites tested emit under a gram of carbon per page view and yet, the BBC manages to deliver what is presumably a similar amount of information with just over half a gram of carbon emitted; also with excellent page load speed.

## Conclusion
While this is not intended to be an in-depth look at the performance of news websites it does hopefully show that the choice of news source can have a substantial environmental impact. All of the newspapers tested have circulations in the tens (if not hundreds) of thousands and if increasing numbers of those readers are going online for their daily updates the differences could add up to become quite substantial.

In addition to this it should also be apparent the poor state of performance optimisation present on the websites tested. All of the newspaper website tested on pagespeed insights have a score below 50 for mobile and only a single one is considered fast on desktop. Furthermore, none of them have a total page size below 1.5MB which especially on mobile networks can contribute to poor user experience.

The most positive environmental change here would be for readers of The Times to move to BBC News, but regardless of which newspaper you read, do consider changing what source you use to stay up to date – it could well make a difference to both the planet, and your patience.

</div>