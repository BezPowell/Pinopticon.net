+++
title = "Announcing ccolour-juicer"
date = 2020-11-09
description = "I've just launched a simple cli utility to print out a list of unique colours in a given css file.."

[taxonomies]
categories = ["Web"]
+++
[ccolour-juicer](https://github.com/BezPowell/ccolour-juicer) is a simple cli utility for extracting a list of unique colours in a given css file. Useful for identifying 'color-creep', or just figuring out what colours you are actually using without having to figure out a bash script for it.

I recently found myself having to get a list of unique colours in one of my stylesheets, and this seemed like the best solution. There are a few more features I plan to implement such as an option to skip checking named colours (as the regex for these is slow) and outputting as a csv, but still should have some utility in its current state.

Any testing and feedback most welcome!