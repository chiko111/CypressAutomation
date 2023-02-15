/// <reference types="cypress" />
let SelectSport = "StarCraft{enter}"
let templateName = "New{enter}"
let marketType = "STATIC{enter}"
let selectGroup = "SCORE{enter}"
let selectOutType = "ORDINARY{enter}"
let selectOutTypeOrder = "DEFAULT{enter}"
let templateNameOut = "hcp{enter}"
let specifier1 = "1"
let specifier2 = "1"

describe('Mapping Tool - Create Market', () => {
  
    
});
context('Mapping tool - Delete - Specifier', () => {
  beforeEach(() => {
  
    cy.viewport(1920, 1080)
    cy.visit('https://backoffice-staging.efbet.tech/adm')
    cy.loginBA()
    
  })
 
  it('Select Sport, templateName, selectGroup, selectOutType, selectOutTypeOrder', () => {
    //cy.visit('https://backoffice-staging.efbet.tech/adm').wait(5000)
specify('Select')
    cy.contains('Content Management').click({multiple: true})
    cy.get('#root > main > section.efb-container.p-0 > div > a:nth-child(10)').click()
    cy.contains('MARKET TEMPLATES').click()
    cy.contains('CREATE NEW MARKET TEMPLATE').click()
    cy.get('#react-select-3-input').click({force: true}).type(SelectSport, {force: true})
    cy.get('#tabs-1-tab-1 > div > div.Modal_modal__3Tkov > div:nth-child(2) > div > div.CreateMarketTemplates_SettingsWrapper__2scT1 > div.CreateMarketTemplates_MarketSettingsWrapper__3K-fF > div.CreateMarketTemplates_MarketTemplate__179DF > div > div:nth-child(3) > input').click({force: true}).type(templateName)
    cy.get('#react-select-4-input').click({force: true} ).type(marketType, {force: true})
    cy.get('#react-select-5-input').click({force: true}).type(selectGroup, {force: true})
    cy.get('#react-select-6-input').click({force: true}).type(selectOutType, {force: true})
    cy.get('#react-select-7-input').click({force: true}).type(selectOutTypeOrder, {force: true})
specify('TemplateName Add')
    cy.get('#tabs-1-tab-1 > div > div.Modal_modal__3Tkov > div:nth-child(2) > div > div.CreateMarketTemplates_SettingsWrapper__2scT1 > div.CreateMarketTemplates_OutcomeSettingsWrapper__2ccHY > div:nth-child(1) > div.CreateMarketTemplates_Wrapper__2F9zL > div.CreateMarketTemplates_AddNewOutcome__1VJIp > div > input').click({force: true} ).type(templateNameOut)
    cy.get('#tabs-1-tab-1 > div > div.Modal_modal__3Tkov > div:nth-child(2) > div > div.CreateMarketTemplates_SettingsWrapper__2scT1 > div.CreateMarketTemplates_OutcomeSettingsWrapper__2ccHY > div:nth-child(1) > div.CreateMarketTemplates_Wrapper__2F9zL > div.CreateMarketTemplates_AddNewOutcome__1VJIp > button').click({force: true})
specify('Add specifier')
    cy.get('#tabs-1-tab-1 > div > div.Modal_modal__3Tkov > div:nth-child(2) > div > div.CreateMarketTemplates_SettingsWrapper__2scT1 > div.CreateMarketTemplates_OutcomeSettingsWrapper__2ccHY > div.CreateMarketTemplates_OutcomeSettings__1AQjz.CreateMarketTemplates_SpecifiersSettings__nZUkP > div > div.CreateMarketTemplates_Wrapper__2F9zL > div > input').click({force: true} ).type(specifier1)
    cy.get('#tabs-1-tab-1 > div > div.Modal_modal__3Tkov > div:nth-child(2) > div > div.CreateMarketTemplates_SettingsWrapper__2scT1 > div.CreateMarketTemplates_OutcomeSettingsWrapper__2ccHY > div.CreateMarketTemplates_OutcomeSettings__1AQjz.CreateMarketTemplates_SpecifiersSettings__nZUkP > div > div.CreateMarketTemplates_Wrapper__2F9zL > div > button').click({force: true})
    cy.get('#tabs-1-tab-1 > div > div.Modal_modal__3Tkov > div:nth-child(2) > div > div.CreateMarketTemplates_SettingsWrapper__2scT1 > div.CreateMarketTemplates_OutcomeSettingsWrapper__2ccHY > div.CreateMarketTemplates_OutcomeSettings__1AQjz.CreateMarketTemplates_SpecifiersSettings__nZUkP > div > div.CreateMarketTemplates_Wrapper__2F9zL > div > input').click({force: true} ).type(specifier2)
    cy.get('#tabs-1-tab-1 > div > div.Modal_modal__3Tkov > div:nth-child(2) > div > div.CreateMarketTemplates_SettingsWrapper__2scT1 > div.CreateMarketTemplates_OutcomeSettingsWrapper__2ccHY > div.CreateMarketTemplates_OutcomeSettings__1AQjz.CreateMarketTemplates_SpecifiersSettings__nZUkP > div > div.CreateMarketTemplates_Wrapper__2F9zL > div > button').click({force: true})
    cy.get('#tabs-1-tab-1 > div > div.Modal_modal__3Tkov > div:nth-child(2) > div > div.CreateMarketTemplates_SettingsWrapper__2scT1 > div.CreateMarketTemplates_OutcomeSettingsWrapper__2ccHY > div.CreateMarketTemplates_OutcomeSettings__1AQjz.CreateMarketTemplates_SpecifiersSettings__nZUkP > div > div.CreateMarketTemplates_MultipleSpecifiers__2979l > div:nth-child(2) > span > svg > path').click()
    cy.contains('Save').click()
  })
});