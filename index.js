'use strict';

module.exports = {
  'disallowAttributeConcatenation': true,
  'disallowAttributeInterpolation': true,
  'disallowAttributeTemplateString': null,
  'disallowBlockExpansion': true,
  'disallowClassAttributeWithStaticValue': true,
  'disallowClassLiteralsBeforeAttributes': null,
  'disallowClassLiteralsBeforeIdLiterals': true,
  'disallowClassLiterals': null,
  'disallowDuplicateAttributes': true,
  'disallowHtmlText': null,
  'disallowIdAttributeWithStaticValue': true,
  'disallowIdLiteralsBeforeAttributes': null,
  'disallowLegacyMixinCall': true,
  'disallowMultipleLineBreaks': true,
  'disallowSpaceAfterCodeOperator': null,
  'disallowSpacesInsideAttributeBrackets': true,
  'disallowSpecificAttributes': null,
  'disallowStringConcatenation': true,
  'disallowStringInterpolation': true,
  'disallowTagInterpolation': true,
  'disallowTemplateString': null,
  'maximumNumberOfLines': null,
  'requireClassLiteralsBeforeAttributes': true,
  'requireClassLiteralsBeforeIdLiterals': null,
  'requireIdLiteralsBeforeAttributes': true,
  'requireLineFeedAtFileEnd': true,
  'requireLowerCaseAttributes': true,
  'requireLowerCaseTags': true,
  'requireSpaceAfterCodeOperator': true,
  'requireSpacesInsideAttributeBrackets': null,
  'requireSpecificAttributes': [
    { 'html': 'lang' },
    { 'form': 'action' },
    { 'img': 'alt' },
    { 'input': 'type' },
    { 'input[type=submit]': 'value' }
  ],
  'requireStrictEqualityOperators': true,
  'validateAttributeQuoteMarks': '\'',
  'validateAttributeSeparator': ', ',
  'validateDivTags': true,
  'validateExtensions': null,
  'validateIndentation': 2,
  'validateLineBreaks': 'LF',
  'validateSelfClosingTags': true,
  'validateTemplateString': true
};