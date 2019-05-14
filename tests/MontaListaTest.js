
module.exports = {

    beforeEach: function(browser, done) {
        var login = browser.page.LoginPages();
        login.navigate()
        .click('@btnEntrar')
        .click('@btnGoogle')
        browser.windowHandles(function(result){
        var handle = result.value[1]
        browser.switchWindow(handle)
        })
        login.logaPasseiDireto()
        browser.windowHandles(function(result){
          var handle = result.value[0]
          browser.switchWindow(handle)
          })
        login.validaLogin()
        done();

    },

    'Teste Metodo': function(browser){

        console.log('Teste')
        var montaLista = browser.page.MontaListaPages();
        montaLista.waitForElementVisible ('@btnLista', 20000)
        .click('@btnLista')
        .useXpath()
        .waitForElementVisible('//h1[contains(text(),"testeLista")]')
        .pause(20000)
        .useXpath()
              .getText('//h1[contains(text(),"testeLista")]', function(result) {
              console.log(result.value);
              if (result.value === 'testeLista') {

                browser.click('//h1[contains(text(),"testeLista")]')
                .pause(20000)
                console.log ("caiu no if, vou dormir")
              }
            });
        browser.end();
    }
}
