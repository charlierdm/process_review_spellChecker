# process_review_spellChecker

<strong>This is my solution for a process review I took part in. Using TDD principles, I developed the required feature in a given time. I wrote my solution in JavaScript and used Jest to create my tests.</strong>

![481](https://user-images.githubusercontent.com/75075773/122057520-a0dbe280-cde2-11eb-89d9-d79d788ccf8e.jpg)


## Task

<strong>Mega soft weird: a company that develops a word processor</strong>


* The feature that needs building today is a spell checker

* It will accept a string of space seperated words and highlight words that have been mispelt. <b><em>For example: "tme", ["time"] => "~tme~"<b/><em>

* As a second parameter, it will accept the correctly spelt word in lower case.


## Input / Output Examples

| Input      | Output |
| -----------| ----------- |
|    "time", ["time"]        |   "time"       |
|    "tme", ["time"]      |    "~tme~"         |
|    "cta", ["cat"]        |   "~cta~"             |
|    "Hand", ["hand"]       |  "Hand"       |
|    "haNd", ["hand"]       |  "haNd"                  |                 |
|    "the clock", ["the", "clock"]      | "the clock"           |
|    "teh clock", ["the", "clock"]       |  "~teh~ clock"           |
|    "teh clokc", ["the", "clock"]           |   "~teh~ ~clokc~"        |
| <strong>Edge Cases</strong> |             |
|       ""     |     Throw Error - "No words found."        |
