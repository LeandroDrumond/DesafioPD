
var validaLista = {


  validaListaFunction:function(){

   return this.waitForElementVisible('@cestaLista')
    .pause(20000)
          .getText('@cestaLista', function(browser) {

          if (browser.value === 'testeLista') {

            this.setValue('//input[@type="text"]', ['trex', this.Keys.ENTER])
            this.waitForElementPresent('//a[@href="/arquivo/29260283/trex-row"]//i[@class="pd-icon small active save"]')
            this.click('//a[@href="/arquivo/29260283/trex-row"]//div//i[@class="pd-icon small active save"]')
            .pause(10000)

          }
        });
    }


};


module.exports = {

commands:[validaLista],

    elements: {
      btnLista: {
      selector: '//ul//a[@href="/perfil/65795389/listas"]',
      locateStrategy: 'xpath'
      },
      cestaLista: {
        selector: '//h1[contains(text(),"testeLista")]',
        locateStrategy: 'xpath'
      },
      btnLivro: {
        selector: '//a[@href="/arquivo/29260283/trex-row"]//div[@class="pd-card-thumb"]//div[@class="content"]',
        locateStrategy: 'xpath'
      }
    }


}