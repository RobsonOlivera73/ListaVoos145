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
   
// Seleciona "Boston" no combo de Cidade de partida:   
    await page.selectOption('select[name="fromPort"]', { label: 'Boston' })

// Seleciona "London" no  combo de Cidades de destino:
    await page.selectOption('select[name="toPort"]', { label: 'London' })

// Clica no botão "Find Flights"
     await page.click('input[type="submit"]')

     // Verificar a pagina de voos de partida para voos de destino    
     await expect(page).toHaveURL(/.*reserve/) 
     await expect(page.locator('.container h3')).toContainText('Flights from')
     //await page.click('xpath=/html/body/div[2]/table/tbody/tr[2]/td[1]/input')
     await page.waitForTimeout(2000) // mal visto // alfinete // temporária
     //const tituloh3 = page.locator('.container h3')
     //await expect(tituloh3).toHaveText('<h3>Flights from Boston to London: </h3>')
     //await expect(page.locator(titulo)) 

     //Clicar no botão "Chosse This Flight"
     //await page.click('input[type="submit"]') //Clica no primeiro botão do formulario
     //await page.locator('text=9696').locator('input[type=submit]').click()
     await page.getByRole('row', { name: 'Choose This Flight 9696 Aer' }).getByRole('button').click()
     //await page.click('//tr[normalize-space(.)="Choose This Flight 9696 Aer"]//input[@type="submit"]');
     await page.waitForTimeout(2000) // mal visto // alfinete // temporária

     //Validar as informaçõs da pagina "Your flight"
     await expect(page).toHaveURL(/.*purchase/) 
     await expect(page.locator('.container h2')).toContainText('Your flight from TLV to SFO has been reserved.')
     await expect(page.locator('p', { hasText:'Please submit the form below to purchase the flight.' })).toHaveText('Please submit the form below to purchase the flight.')

    // Preencher os campos com dados 
     await page.fill('#inputName', 'Robson Oliveira')
     await page.fill('#address', 'R Panamericana, 73')
     await page.fill('#city', 'Osasco')
     await page.fill('#state', 'São Paulo')
     await page.fill('#zipCode', '06033180')
     await page.selectOption('select[name="cardType"]', { label: "Diner's Club" })
     await page.fill('#creditCardNumber', '4203254032242500')
     await page.fill('#creditCardMonth', 'R Panamericana, 73')
     await page.locator('#creditCardMonth').fill('')
     await page.fill('#creditCardMonth', '05')
     await page.locator('#creditCardYear').fill('')
     await page.fill('#creditCardYear', '2032')
     await page.fill('#nameOnCard', 'ROBSON A OLIVEIRA')
     await page.click('#rememberMe')
     await page.click('input[type="submit"]')

     await page.waitForTimeout(5000) // mal visto // alfinete // temporária


}) //Fim do Script