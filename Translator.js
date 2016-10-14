/*
* Author : Damien Assany
* Email : damien.assany@live.fr
* GitHub : https://github.com/PandaDevIO
*/

'use strict';

const languages = {
  fr: require('../../languages/fr'),
  en: require('../../languages/en')
};

class Translator {
  get(key: String, language: String) {
    return languages[language][key];
  }
}

module.exports = new Translator();
