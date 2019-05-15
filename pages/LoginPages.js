
var logingmail = {

  logaPasseiDireto: function(){
    return this.waitForElementVisible('@inputEmail',10000)
    .setValue('@inputEmail', 'desafiosqa@gmail.com')
    .click('@btnProxima')
    .waitForElementVisible('@inputPassword', 10000)
    .setValue('@inputPassword', '123@2019')
    .click('@btnProximaPassword')

  },

  validaLogin: function(){
    return this.useXpath()
    .waitForElementVisible ('//div[@class="content_info"]', 10000)
    .click('//div[@class="content_info"]')
    .assert.containsText('//div[@class="text"]/h1[contains(text(),"Desafios QA")]', "Desafios QA" )
  },

};

module.exports = {

  commands: [logingmail],

    url: 'https://www.passeidireto.com/',

    elements: {
      btnEntrar: {
      selector: '#dropLogin'
      },
      btnGoogle: {
        selector:'//button[@class="btn_google"]',
        locateStrategy: 'xpath'
      },
      btnProxima: {
        selector: '#identifierNext'
      },
      inputEmail: {
        selector: '#identifierId'
      },
      inputPassword: {
        selector: 'input[type=password]'
      },
      btnProximaPassword: {
        selector: '#passwordNext'
      },
      elementLogin:{
        selector: '//div[@data-v-c182f1f6]/h1[contains(text(),"Desafios")]',
        locateStrategy: 'xpath'
      },
      inputLivro:{
        selector:'//input[@type="text"]',

      }
    }
 };
