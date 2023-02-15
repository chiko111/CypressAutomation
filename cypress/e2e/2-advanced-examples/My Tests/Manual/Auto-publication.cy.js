
describe('Auto-publication - test suite', () => {
   
  context('BU=BG', () => {
    
    
    context('Set configuration', () => {
      it('on Sport', () => {
        cy.step('Login->Auto-Publication')
        cy.step('Select Sport')
        cy.step('Add new rule->Set configuration ')
        cy.step('Set configuration about time is affecting both Categories under the selected sport and their tournaments').should('setted configuration inherit from Sport all the levels below')
      });
      it('on Category', () => {
        cy.step('Login->Auto-Publication')
        cy.step('Select Category')
        cy.step('Add new rule->Set configuration ')
        cy.step('Setted configuration about time is affecting Tournaments under the selected Category').should('setted  configuration inherit from the Category the level below - Tournament')
      });
      it('on Tournament', () => {
        cy.step('Login->Auto-Publication')
        cy.step('Select Sport->Category->Tournament')
        cy.step('Add new rule->Set configuration under selected tournament')
        cy.step('Setted configuration about time is affecting all events that are part of the Tournament').should('setted  configuration inherit from the Tournament all events that are part')
      });
      it('Reset option - Tournament have changes', () => {
        cy.step('Login->Auto-Publication')
        cy.step('Select Sport with already made configurations under Tournament')
        cy.step('In order to reset the changes navigate under the sport under witch is the configured tournament')
        cy.step('Clearing the changes / resetting them is possible only from Sport level')
      });

  context('Configuration about time', () => {
      it('Custom for Hours', () => {
        cy.step('Login->Auto-Publication')
        cy.step('Set from 1 to 23 hours before the event start').should('Time configuration for hours does not have value <1')
      });

      it('Custom for Days', () => {
        cy.step('Login->Auto-Publication')
        cy.step('Set from 1 to XXXX days before the event start ').should('Configuration for days doest not have value < 1 day ')
      });
    });
    context('Custom hour configuration per', () => {
      it('Sport level', () => {
        cy.step('Login->Auto-Publication')
        cy.step('Set from 1 to 23 hours before the event start').should('Time configuration for hours does not have value <1')
      });

      it('Category-Sport is w/o any config for h.', () => {
        cy.step('Login->Auto-Publication')
        cy.step('Set from 1 to XXXX days before the event start ').should('Configuration for days doest not have value < 1 day ')
      });
      it('Category - Sport is with config per h. ', () => {
        cy.step('Login->Auto-Publication')
        cy.step('Set from 1 to XXXX days before the event start ').should('Configuration for days doest not have value < 1 day ')
      });
      it('Tournament - Category is w/o any config for h.', () => {
        cy.step('Login->Auto-Publication')
        cy.step('Navigate under sport w already created publication rule')
        cy.step('Select Category->Tournament')
        cy.ste('Add New Rule').should('Rule is created')
      });
      it('Tournament - Category is w any config for h.', () => {
      cy.step('Login->Auto-Publication')
      cy.step('Navigate under sport w already created publication rule')
      cy.step('Select Category->Tournament')
      cy.ste('Add New Rule').should('Rule is created successfully. Adding new rule is posibble for Category Tournament only under Sport with already added configuration ')
      });
    });
    context('Config about time', () => {
      it('Instant', () => {
        cy.step('Login->Auto-Publication')
        cy.step('Select Edit / Add new rule buttons')
        cy.step('Select Instant').should('Auto-publication has 3 options')
        cy.step('Save')
        cy.step('Under time column record = Instant is populated')
      });

      it('Disabled', () => {
        cy.step('Login->Auto-Publication')
        cy.step('Select Edit / Add new rule buttons')
        cy.step('Select Disabled').should('Auto-publication has 3 options')
        cy.step('Save')
        cy.step('Under time column record = Disabled is populated')
      });
    });
    context('Instant time configuration per', () => {
      it('Sport level', () => {
        cy.step('Login->Auto-Publication')
        cy.step('Navigate under Sport w/o configuration')
        cy.step('Select Add new rule')
        cy.step('Under auto publication options select Instant and save')
      });

      it('Category level', () => {
        cy.step('Login->Auto-Publication')
        cy.step('Navigate under Sport and select tournament under it ')
        cy.step('Under selected category create new rule')
        cy.step('For auto publication select type = Instant')
        cy.step('Save the changes')
      });
      it('Tournament level', () => {
        cy.step('Login->Auto-Publication')
        cy.step('Navigate under Sport without configuration')
        cy.step('Select Add new rule')
        cy.step('Under auto publication options select Disabled and save')
      });
    });
    context('Disabled time configuration per', () => {
      it('Sport level', () => {
        cy.step('Login->Auto-Publication')
        cy.step('Navigate under Sport without configuration')
        cy.step('Select Add new rule ')
        cy.step('Under auto publication options select Disabled and save')
      });

      it('Category level', () => {
        cy.step('Login->Auto-Publication')
        cy.step('Navigate under Sport and select Category under it').should('Selected sport is with created auto publication rule')
        cy.step('Under selected category create new rule')
        cy.step('For auto publication select type = Disabled')
        cy.step('Save the changes').should('Sport is with auto publication time as original ; Tournaments under the category are with auto publication rule same as it')
      });
      it('Tournament level', () => {
        cy.step('Login->Auto-Publication')
        cy.step('Navigate under Sport and select tournament under it').should('Selected sport is with created auto publication rule ')
        cy.step('Under selected tournament create new auto publication rule and save the changes').should('For auto publication select type = Disabled')
        cy.step('New rule is applied only under the selected tournament')
      });
    });
    context('Duplicates', () => {
      it('configured by Tournament level', () => {
        cy.step('Login->Auto-Publication')
        cy.step('Navigate under Sport and select tournament under it').should('Selected sport is with created auto publication rule')
        cy.step('From Add new rule button enable Allow Duplicates switch').should('This option is available only under Tournament level')
      });

      it('configured by Tournament level ', () => {
        cy.step('Login->Auto-Publication')
        cy.step('Navigate under Sport and select tournament under it').should('Selected sport is with created auto publication rule ')
        cy.step('From Add new rule button navigate under Allow Duplicates switch').should('By default this option is disabled ')
      });
    });
    context('Reset options', () => {
      it('Category have changes ', () => {
        cy.step('Login->Auto-Publication')
        cy.step('Select sport with already made configurations under a Category')
        cy.step('In order to reset the changes navigate under the sport under witch is the configured category')
        cy.step('Clearing the changes / resetting them is possible only from Sport level') 
      });

      it('Sport have changes', () => {
        cy.step('Login->Auto-Publication')
        cy.step('Select sport with already made configurations under a Sport ')
        cy.step('In order to reset the changes select reset from the selected sport')
        cy.step('Clearing the changes / resetting them is possible only from Sport level') 
      });
    });
    context('Configuration about time', () => {
      it('custom for hours / maximum', () => {
        cy.step('Login->Auto-Publication')
        cy.step('Configuration about time is available for hours and it can be set from 1 to 23 hours before the event start')
        cy.step('Time configuration for hours does not have value >24').should('maximum hour configuration available for setting is 24 hour ')
      });

      it('custom for days / maximum', () => {
        cy.step('Login->Auto-Publication')
        cy.step('Configuration about time is available for days and it can be set from 1 to XXXX days before the event start')
        cy.step('Configuration for days doest have maximum range displayed as XXXX')
      });
      it('Custom hour configuration per Sport level - max', () => {
        cy.step('Login->Auto-Publication')
        cy.step('Navigate under sport and select custom time configuration to be for hours')
        cy.step('Set the minimum available hour configuration under the selected sport').should('minimum available hour configuration is 1 hour')
        cy.step('Sport is going to be published an hour before sport events are to be published')
      }); 
    });
  });
});
})
  
