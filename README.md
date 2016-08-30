#Normit [![Build Status](https://travis-ci.org/pawurb/normit.png)](https://travis-ci.org/pawurb/normit) [![NPM version](https://badge.fury.io/js/normit.svg)](http://badge.fury.io/js/normit) [![Coverage Status](https://coveralls.io/repos/pawurb/normit/badge.png?branch=master)](https://coveralls.io/r/pawurb/normit?branch=master)

Normit is an easy way to translate stuff in your terminal. You can check out its Ruby gem version [termit](https://github.com/pawurb/termit).

## Installation
```bash
npm install normit -g
```

## Usage
```bash
normit 'source_language' 'target_language' 'text'
```

Example:

```bash

normit en es "hey cowboy where is your horse?"
=> "Hey vaquero dónde está tu caballo?"

normit fr en "qui est votre papa?"
=> "Who's Your Daddy?"
```

Parenthesis are not necessary for text data input:
```bash
normit fr ru qui est votre papa
=> "Кто твой папочка?"
```
#### Speech synthesis

Specify a **-t** (talk) flag to use speech synthesis (requires mpg123):
``` bash
normit en fr "hey cowboy where is your horse?" -t
=> "Hey cowboy où est votre cheval ?" # and a french voice says something about a horse
```

You can use normit as a speech synthesizer of any supported language without having to translate anything:
``` bash
normit en en "hold your horses cowboy !" -t
=> "hold your horses cowboy !" # and an english voice asks you to hold on
```

#### Learning language when committing to git (zsh only)
Idea by [Nedomas](https://news.ycombinator.com/item?id=7545747) . See and hear your messages translated to target lang every time you commit:

In **~/.zshrc**
```bash
export LANG=es
git(){[[ "$@" = commit\ -m* ]]&&normit en $LANG ${${@:$#}//./} -t;command git $@}
```
I am no shell ninja so if you know how to make it work in bash then please submit a PR.

## Language codes:

To find all available language codes visit https://msdn.microsoft.com/en-us/library/hh456380.aspx

## Requirements

Works with node 0.10.0 and higher.

To use speech synthesis you need to have mpg123 installed.

For Ubuntu:

    sudo apt-get install mpg123

For MacOSX:

    brew install mpg123

## Status

It was rewritten to work with [Bing Translator](https://www.bing.com/translator) . Thanks to [Ragnarson](https://ragnarson.com) for supporting it !

## Disclaimer

Normit works by scraping the private APIs and is therefore not recommended for use in production or on a large scale.
