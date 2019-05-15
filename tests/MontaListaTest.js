
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

    'Monta Lista de Livros': function(browser){

        var montaLista = browser.page.MontaListaPages();
        montaLista.waitForElementVisible ('@btnLista', 10000)
        .click('@btnLista')
        .useXpath()
        .waitForElementVisible('//h1[contains(text(),"testeLista")]')
        montaLista.validaListaFunction()
        browser.end();
    }
}
