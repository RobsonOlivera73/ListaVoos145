// 1 - Referências e bibliotecas
// Declara um obejto chamado test vindo da biblioteca Playwright
const { test, expect } = require('@playwright/test')

// 2 Classe ou Funções ou Métódos 
// Um script pode executar de forma:
// - Sincrona: Simultâneo. Ex.: Ligação de Voz
// - Assincrona: Separado. Ex.: mensagem de texto no Whatsapp
test('Lista de Voos', async ({page}) => {
    await page.goto('/') // abre o browser no site alvo
    await expect(page).toHaveURL('/')  // verifica se esta na pagina inicial ou raiz
    await expect(page.locator('.container h1')).toContainText('Welcome to the Simple Travel Agency!')

    // clicar no link "home" no cabeçalho da pagina
    await page.click('text=home')

    // Validar pagina de login
    await expect(page).toHaveURL(/.*login/)
    await expect(page.locator('div[class="panel-heading"]')).toHaveText('Login')

    //Clicar no link "Register"
    await page.click('text=Register')


    // Preencher campos com dados válidos para cadastrar novo usuário
    await page.fill('[name="name"]', 'Robson Oliveira')
    await page.fill('[name="company"]', 'Tudo em Oferta Ecommerce')
    await page.fill('[name="email"]', 'robson.oliveira@gmail.com')
    await page.fill('[type="password"]', 'Registro123')
    await page.fill('#password-confirm', 'Registro123')
    

    //Confirmar cadastro de novo usuário
    await page.click('text=Register') 
    await page.waitForTimeout(5000) // mal visto // alfinete // temporária
    // Validar tela
    //await expect(page).toHaveURL(/.*register/)
    //await expect(page.locator('[class="message"]')).toHaveText('                Page Expired            ')
    //await page.waitForTimeout(5000) // mal visto // alfinete // temporária

})

