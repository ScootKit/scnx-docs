# Information for Community Translations

## General overview

Translating our software is handled through [weblate](https://localize.scootkit.net/engage/scnx/), a continues
localization platform.

To get started with contributing to translations, please create an account by singing in
on [Weblate](https://localize.scootkit.net/engage/scnx/).

If you only want to report issues, please either use [this form](https://scnx.app/typo) or suggest a correction to a
string on weblate.

## Strings and their usage

Each sentence or word displayed on our platforms is added on weblate as a string. When translating, it might not be
obvious where the string will appear on our platforms. Due to this, please review the string name and (if applicable)
description and screenshots.

## Template strings

String might include "templates" that are replaced by our software when displaying the string.

For example, the string "**%u** has been given **%m** money." will be displayed as "scderox has been given 200 money.".
Due to this, do not translate, change or edit these parameters (bold). You can move their position in the string, but
they need to be included without changing their capitalization's. Depending on the project, these template strings might have different formats.

Some used formats include
* `%parameterName`
* `%parameterName%`
* `{parameterName}`
* `{{parameterName}}`

Some template strings might also be marked a such in weblate, but that is not always the case, so please think twice when seeing these parameters.

## Guidelines for translations

Please follow the following rules when translating:

* DO translate the *meaning* of a string instead of translating word-for-word. In general, it might be a good idea to
  rephrase the structure of the english sentence to a structure that is more widely used in your native language.
* DO use your brain to translate things - always check the meaning and context of any translations you make.
* If you use translating software, DO check if the translated sentence makes sense before saving the changes.
* DO use the comments for clarification if if you are unsure t know how to translate a string or the context is unclear.
* DO NOT post about unannounced features or strings. Keep these features confidential.
* DO NOT translate strings that are part of the checkout process or include legally relevant information.

Before translating in a particular project, you'll need to sign a CLA ("Contributor Agreement"). Please review this
document closely as their include important information about your rights regarding your translation. The CLA is a
binding legal document, and you might be asked to provide personal data to sign the document. If this is the case, your
data will be processed in accordance with our [Privacy Policy](https://scootk.it/scnx-privacy).

## How to use weblate

We do not have capacity to provide extensive training on the use of weblate. Please
use [this guide](https://docs.weblate.org/en/latest/user/translating.html) for reference.