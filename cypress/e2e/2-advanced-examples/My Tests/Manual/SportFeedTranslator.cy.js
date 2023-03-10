
describe('Sport Feed Translator Tool - test suite', () => {
   
  context('Positive', () => {
    
    context('Functional testing', () => {
      it('Translate Sport, English/Bulgarian/Greek', () => {
        cy.step('click on empty field for English (Basketball), type Basketball')
        cy.step('click on empty field for Bulgarian type Баскетбол')
        cy.step('click on empty field for Greek type Μπάσκετ')
        cy.step('click Save')
        cy.step('open https://staging.efbet.tech/')
        cy.step('front page is turned on English, Basketball should have Basketball title')
        cy.step('front page is turned on Bulgarian, Basketball should have Баскетбол title')
        cy.step('front page is turned on Greek, Basketball should have Μπάσκετ title')
      });
      it('Multiple translation -check cache of service', () => {
        cy.step('select Sport')
        cy.step('Translate five empty field')
        cy.step('Save')
      });

    })
    context('Filter Languages', () => {
      it('Bulgarian lang off', () => {
        cy.step('uncheck Bulgarian language')
        cy.step('Should hide Bulgarian language column')
      });
      it('Greek lang off', () => {
        cy.step('uncheck Greek language')
        cy.step('Should hide Greek language column')
      });
      it('Romanian lang off', () => {
        cy.step('uncheck Romanian language')
        cy.step('Should hide Romanian language column')
      });
      it('Turkish lang off', () => {
        cy.step('uncheck Greek language')
        cy.step('Should Turkish language column')
      });
      it('English lang off', () => {
        cy.step('uncheck Greek language')
        cy.step('Should hide input for English language column')
      });
    })
    context('Search scope', () => {
      it('Sport', () => {
        cy.step('Select Sport from drop down')
        cy.step('Type Ski')
        cy.step('click SEARCH BUTTON')
        cy.step('should have key-values which contains Ski')
      });
      it('Tournament', () => {
        cy.step('Select Tournament from drop down')
        cy.step('Type Europe')
        cy.step('click SEARCH BUTTON')
        cy.step('should have key-values which contains Europe')
      });
      it('Category', () => {
        cy.step('Select Category from drop down')
        cy.step('click SEARCH BUTTON')
        cy.step('should have key-values which contains Category key-values')
      });
      it('Sport', () => {
        cy.step('Select Sport from drop down')
        cy.step('click SEARCH BUTTON')
        cy.step('should have key-values which contains Sports key-values')
      });
      it('Market', () => {
        cy.step('Select Market from drop down')
        cy.step('click SEARCH BUTTON')
        cy.step('should have key-values which contains Market key-values')
      });
      it('Market Outcome', () => {
        cy.step('Select Market Outcome from drop down')
        cy.step('click SEARCH BUTTON')
        cy.step('should have key-values which contains Market Outcome key-values')
      });
      it('Market Templates', () => {
        cy.step('Select Market Templates from drop down')
        cy.step('click SEARCH BUTTON')
        cy.step('should have key-values which contains Market Templates key-values')
      });
      it('Market Outcome Templates', () => {
        cy.step('Select Market Outcome Templates from drop down')
        cy.step('click SEARCH BUTTON')
        cy.step('should have key-values which contains Market Outcome Templates key-values')
      });
      it('Competitor', () => {
        cy.step('Select Competitor from drop down')
        cy.step('click SEARCH BUTTON')
        cy.step('should have key-values which contains Competitor key-values')
      });
      it('Player', () => {
        cy.step('Select Player from drop down')
        cy.step('click SEARCH BUTTON')
        cy.step('should have key-values which contains Player key-values')
      });
      it('Sport Group', () => {
        cy.step('Select Sport Group from drop down')
        cy.step('click SEARCH BUTTON')
        cy.step('should have key-values which contains Sport Group key-values')
      });
      it('Market tab', () => {
        cy.step('Select Market tab from drop down')
        cy.step('click SEARCH BUTTON')
        cy.step('should have key-values which contains Market tab key-values')
      })   
    });
    context('Show Translation pages', () => {
      it('All phrases', () => {
        cy.step('Click All phrases')
        cy.step('should show all phrases for translation')
      });
      it('Translated', () => {
        cy.step('Click Translated')
        cy.step('should show Translated phrases')
      });
      it('For translation', () => {
        cy.step('Click Translation')
        cy.step('should show all phrases for translations')
      });
    });

    });
    context('Pagination', () => {
      it('Correct total pages on translated', () => {
        cy.step('Select Translated')
        cy.step('should show all translated phrases if they are more then 25 show on 2 lists etc.')
      });
      it('Correct total pages on For translation', () => {
        cy.step('Select For translation')
        cy.step('should show all For translation phrases if they are more then 25 show on 2 lists etc.')
      });
    }) 
    context('Item preview per page', () => {
      it('25', () => {
        cy.step('Select Item per page 25')
        cy.step('should show 25 results max per page')
      });
      it('50', () => {
        cy.step('Select Item per page 50')
        cy.step('should show 50 results max per page')
      });
      it('100', () => {
        cy.step('Select Item per page 100')
        cy.step('should show 100 results max per page')
      });
    }) 
    context('Check property validation', () => {
      it('Valid translation property', () => {
        cy.step('Send request for translation [{id: 8, name: "Basketball", translatedNames: {en: "Basketball", bg: "Баскетбол"}}]')
        cy.step('Send request to check changed property ')
        cy.step('Assert both')
      });
      it('Validation for duplication', () => {
        cy.step('Send request for translations [{id: 8, name: "Basketball", translatedNames: {en: "Basketball", bg: "Баскетбол"}, id: 8, name: "Basketball", translatedNames: {en: "Basketball", bg: Баскетбол}}]')
        cy.step('Check authorization request ')
      });
      it('Empty string validation', () => {
        cy.step('Send request for translation [{id: 8, name: "Basketball", translatedNames: {en: "Basketball", bg: ""}}]')
        cy.step('Check Sport/Basketball is previewed with title/value')
      });
      it('Translate Market Outcome', () => {
        cy.step('Translate Market Outcome')
        cy.step('Check Market Outcome is translated')
        cy.step('Check Market Outcome is previewed correctly')
      });
      it('Translate Market', () => {
        cy.step('Translate Market')
        cy.step('Check Market is translated')
        cy.step('Check Market is previewed correctly')
      });
      it('Translate Market Template', () => {
        cy.step('Translate Market Template')
        cy.step('Check Market Template is translated')
        cy.step('Check Market Template is previewed correctly')
      });
      it('Translate Competitor', () => {
        cy.step('Translate Competitor')
        cy.step('Check Competitor is translated')
        cy.step('Check Competitor is previewed correctly')
      });
      it('Translate Sport', () => {
        cy.step('Translate Sport')
        cy.step('Check Sport is translated')
        cy.step('Check Sport is previewed correctly')
      });
      it('Sport Event', () => {
        cy.step('Translate Sport Event')
        cy.step('Check Sport Event is translated')
        cy.step('Check Sport Event is previewed correctly')
      });
      it('Tournament', () => {
        cy.step('Translate Tournament')
        cy.step('Check Tournament is translated')
        cy.step('Check Tournament is previewed correctly')
      });
      it('Category', () => {
        cy.step('Translate Category')
        cy.step('Check Category is translated')
        cy.step('Check Category is previewed correctly')
      });
    }) 
    context('Negative', () => {
      it('Key validation', () => {
        cy.step('Select Sport, click search')
        cy.step('click Add Key Value')
        cy.step('Add first key with value Alpine Ski')
        cy.step('Add second key with value Alpine Ski')
        cy.step('should not have duplicate values')
      });
      it('Delete Translated Sport, Bulgarian', () => {
        cy.step('click on field for Bulgarian /Sport Basketball, should have Баскетбол')
        cy.step('delete text')
        cy.step('click Save')
        cy.step('open https://staging.efbet.tech/')
        cy.step('front page is turned on Bulgarian, Basketball should have Basketball title')
      });
    }) 
});

  
  
