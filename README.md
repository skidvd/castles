# Aequilibrium - The Castle Company

## Solution Abstract

I have created a simple JavaScript function to determine how many castles to build for a 
given input (topography) array.

Additionally, I have defined a test harness function that can be used to execute and evaluate onoe or
more test conditions and their expected resulting values.  There are a hand full of such test cases 
with their expected values contained in the source already.  You may add to and/or modify this list as you
may require.  

## Assumptions

- As part of the problem's definition (below) specification for a peak and valley, the description 
include the text ...is above/below "the immediately preceding and following ints".  The inclusion of the
word 'immediately' may potentially be understood in multiple ways (either literally - meaning only a 
single preceding and/or following int or, not quite so literally including a set of perhaps multiple
preceding and/or following ints meeting the comparison criteria).  I am assuming that this 2nd 
understanding is what is intended for purposes of this exercise.  This basically means that any 
intermediary 'ledges' (of multiple occurrences of a given height) along a broader continuing slope that 
are not absolute peaks and valleys will not be counted as places to build a castle.  I hope that this is 
the correct understanding for this problem.  Both of the final 2 test cases have such 'ledges' that will 
be excluded by this logic.  If this is not the correct understanding, then the ledges can be counted by 
making the following minor changes:
    - replacing the 'peekHeight < height' comparison on line 19 with 'peekHeight <= height'   
    - replacing the 'peekHeight > height' comparison on line 20 with 'peekHeight >= height'
    - commenting out the .filter invocation on lines 8 - 11   

## How to install, build and run

## How to run

1. Prerequisites
    ```
   - You will need a current version of node installed (I have v12.16.3)
   - You will need to have cloned this repository
    ```
2. Run
    ``` 
    - cd into <repository-dir>
    - node castles.js  // this will run all tests in the file and report the individual and cummulative results via console logs
    ```   

## Castles problem definition

Aequilibrium is in the business of building castles (we really aren’t, but let’s pretend). Now, we also
believe in quality aesthetics, so we only want to build castles in two types of places:

- a. Peaks
- b. Valleys

Let’s say you have an array of integers that describes a stretch of land, where each integer represents the
current height of the land. Can you write a function that reads that array and returns the number of
castles that Aequilibrium should build on that stretch of land? You can write this solution in whatever
language you like and provide a way to test it.

You can make the following assumptions:
- You can always build a castle at the start of the array, provided it is non-empty
- We only want to build one castle per peak or valley.
- A peak is an integer or series of integers that is above the immediately preceding and following
ints. For example, in the sequence [2,6,6,6,3] the sequence of 3 6s is a peak.
- A valley is an integer or series of integers that is below the immediately preceding and
following ints. For example, in the sequence [6,1,4] the "1" would be a valley.
