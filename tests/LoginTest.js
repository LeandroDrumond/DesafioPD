
module.exports = {

      'Deve Logar com conta do Gmail': function(browser){

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
        browser.end();

    },

};


