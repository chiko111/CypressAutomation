
describe('Risk Management - test suite', () => {
   
  context('Live delay', () => {
    
    
    context('Tree structure', () => {
      it('Sport is always on top level', () => {
        cy.step('Login->Risk Management ->Live Delay')
        cy.step('Create New Delay')
        cy.step('Select Sport->Category->Tournament->Market')
        cy.step('Select Risk Category')
        cy.step('Set Delay 10')
        cy.step('Save')
        cy.step('The tree').should('Risk Category->Sport->Tournament->Market->Delay')
      });
      it('Category under Sport', () => {
        cy.step('Login->Risk Management ->Live Delay')
        cy.step('Create New Delay')
        cy.step('Select Sport Soccer->Category->Tournament->Market')
        cy.step('Select Risk Category Good Customer')
        cy.step('Set Delay 10')
        cy.step('Save')
        cy.step('Create New Delay 2')
        cy.step('Select Sport Ski->Category->Tournament->Market')
        cy.step('Select Risk Category Good Customer')
        cy.step('Set Delay 10')
        cy.step('Save')
        cy.step('The tree').should('Risk Category->Sport->Soccer->Delay-> Ski->Delay')
      });
      it('Same Sport different category', () => {
        cy.step('Login->Risk Management ->Live Delay')
        cy.step('Create New Delay')
        cy.step('Select Sport Soccer->Category->Market')
        cy.step('Select Risk Category Good Customer')
        cy.step('Set Delay 5')
        cy.step('Save')
        cy.step('Create New Delay 2')
        cy.step('Select Sport Soccer->Category2->Market')
        cy.step('Select Risk Category Good Customer')
        cy.step('Set Delay 10')
        cy.step('Save')
        cy.step('The tree').should('Risk Category->Sport->Category->Delay 5->Category2->Delay 2')
      });
      it('Level Configuration', () => {
        cy.step('Login->Risk Management ->Live Delay')
        cy.step('Create New Delay')
        cy.step('Select Sport Soccer->Category->Market')
        cy.step('Select Risk Category Good Customer')
        cy.step('Set Delay 5')
        cy.step('Save')
        cy.step('Create New Delay 2')
        cy.step('Select Sport Soccer->Category2->Market')
        cy.step('Select Risk Category Good Customer')
        cy.step('Set Delay 10')
        cy.step('Save')
        cy.step('The tree').should('Risk Category->Sport->Category->Delay 5->Category2->Delay 2')
      });

  context('Level Configuration', () => {
      it('Create Global Delay', () => {
        cy.step('Login->Risk Management ->Live Delay')
        cy.step('Default Delay set to 5 sec')
        cy.step('Save').click()
        cy.visit('https://staging.efbet.tech/live/')
        cy.step('Login->make live bet').should('wait 5 sec')
      });
      it('Per Risk Category + Sport Delay', () => {
        cy.step('Login->Risk Management ->Live Delay')
        cy.step('Create New Delay')
        cy.step('Select Sport Soccer')
        cy.step('Select Risk Category Good Customer')
        cy.step('Set Delay 15')
        cy.step('Save')
        cy.visit('https://staging.efbet.tech/live/')
        cy.step('Login (Good Customer)->make live bet on Soccer').should('wait 15 sec')
      });
      it('Per Risk Category + Sport + Category Delay', () => {
        cy.step('Login->Risk Management ->Live Delay')
        cy.step('Create New Delay')
        cy.step('Select Sport Soccer->International')
        cy.step('Select Risk Category Good Customer')
        cy.step('Set Delay 20')
        cy.step('Save')
        cy.visit('https://staging.efbet.tech/live/')
        cy.step('Login (Good Customer)->make live bet on Soccer/International').should('wait 20 sec')
      });
      it('Per Risk Category + Sport + Category + Tournament Delay', () => {
        cy.step('Login->Risk Management ->Live Delay')
        cy.step('Create New Delay')
        cy.step('Select Sport Soccer->International->Euro Cup')
        cy.step('Select Risk Category Good Customer')
        cy.step('Set Delay 15')
        cy.step('Save')
        cy.visit('https://staging.efbet.tech/live/')
        cy.step('Login (Good Customer)->make live bet on Soccer/International/Euro Cup').should('wait 20 sec')
      });
      it('Per Risk Category + Sport + Category + Tournament + Market Delay', () => {
        cy.step('Login->Risk Management ->Live Delay')
        cy.step('Create New Delay')
        cy.step('Select Sport Soccer->International->Euro Cup->Market')
        cy.step('Select Risk Category Good Customer')
        cy.step('Set Delay 12')
        cy.step('Save')
        cy.visit('https://staging.efbet.tech/live/')
        cy.step('Login (Good Customer)->make live bet on Soccer/International/Euro Cup/Market').should('wait 12 sec')
      });
      it('Edit Delay Per Risk Category + Sport', () => {
        cy.step('Login->Risk Management->Live Delay')
        cy.step('Select Delay').click()
        cy.step('Set Delay 10')
        cy.step('Save')
        cy.visit('https://staging.efbet.tech/live/')
        cy.step('Login (Good Customer)->make live bet on Soccer').should('wait 10 sec')
      });
      it('Edit Delay Per Risk Category + Sport + Category', () => {
        cy.step('Login->Risk Management ->Live Delay')
        cy.step('Select Delay').click()
        cy.step('Set Delay 10')
        cy.step('Save')
        cy.visit('https://staging.efbet.tech/live/')
        cy.step('Login (Good Customer)->make live bet on Soccer/International').should('wait 10 sec')
      });
      it('Edit Delay Per Risk Category + Sport + Category + Tournament', () => {
        cy.step('Login->Risk Management ->Live Delay')
        cy.step('Select Delay').click()
        cy.step('Set Delay 15')
        cy.step('Save')
        cy.visit('https://staging.efbet.tech/live/')
        cy.step('Login (Good Customer)->make live bet on Soccer/International/Euro Cup').should('wait 15 sec')
      });
      it('Edit Delay Per Risk Category + Sport + Category + Tournament + Market', () => {
        cy.step('Login->Risk Management ->Live Delay')
        cy.step('Select Delay').click()
        cy.step('Set Delay 7')
        cy.step('Save')
        cy.visit('https://staging.efbet.tech/live/')
        cy.step('Login (Good Customer)->make live bet on Soccer/International/Euro Cup/Market').should('wait 7 sec')
      });
      it('Delete Delay Per Risk Category + Sport', () => {
        cy.step('Login->Risk Management->Live Delay')
        cy.step('Select Delay').click()
        cy.step('Delete Delay')
        cy.step('Save')
        cy.visit('https://staging.efbet.tech/live/')
        cy.step('Login (Good Customer)->make live bet on Soccer').should('wait Global Delay')
      });
      it('Delete Delay Per Risk Category + Sport + Category', () => {
        cy.step('Login->Risk Management ->Live Delay')
        cy.step('Select Delay').click()
        cy.step('Delete Delay')
        cy.step('Save')
        cy.visit('https://staging.efbet.tech/live/')
        cy.step('Login (Good Customer)->make live bet on Soccer/International').should('wait Global Delay')
      });
      it('Delete Delay Per Risk Category + Sport + Category + Tournament', () => {
        cy.step('Login->Risk Management ->Live Delay')
        cy.step('Select Delay').click()
        cy.step('Delete Delay')
        cy.step('Save')
        cy.visit('https://staging.efbet.tech/live/')
        cy.step('Login (Good Customer)->make live bet on Soccer/International/Euro Cup').should('wait Global Delay')
      });
      it('Delete Delay Per Risk Category + Sport + Category + Tournament + Market', () => {
        cy.step('Login->Risk Management ->Live Delay')
        cy.step('Select Delay').click()
        cy.step('Delete Delay')
        cy.step('Save')
        cy.visit('https://staging.efbet.tech/live/')
        cy.step('Login (Good Customer)->make live bet on Soccer/International/Euro Cup/Market').should('wait Global Delay')
      });
      it('Player w/o referral goes to live delay', () => {
        cy.step('Login->Risk Management ->Live Delay')
        cy.step('Create New Delay')
        cy.step('Select Sport Soccer->International')
        cy.step('Select Risk Category Good Customer')
        cy.step('Set Delay 20')
        cy.step('Save')
        cy.visit('https://staging.efbet.tech/live/')
        cy.step('Login (Good Customer)->make live bet on Soccer/International').should('wait 20 sec')
      });
      it('Bet with mixed outcomes live delay is applied', () => {
        cy.step('Login->Risk Management ->Live Delay')
        cy.step('Create New Delay')
        cy.step('Select Sport Soccer->International')
        cy.step('Select Risk Category Good Customer')
        cy.step('Set Delay 20')
        cy.step('Save')
        cy.visit('https://staging.efbet.tech/live/')
        cy.step('Login (New User)->make System  w live bet + pre match on Soccer/International')
        cy.step('').should('wait 20 sec')
      });
      it('Field validation Global Delay 1-60', () => {
        cy.step('Login->Risk Management ->Live Delay')
        cy.step('Create New Delay')
        cy.step('Select Sport Soccer->International')
        cy.step('Select Risk Category Good Customer')
        cy.step('Set Delay 1')
        cy.step('Save')
        cy.step('Delay').should('wait 1 sec')
        cy.step('Set Delay 60')
        cy.step('Save')
        cy.step('Delay').should('wait 60 sec')
        });
    });
  });
  context('Negative', () => {
      it('Per Risk Category + Sport + Category Delay', () => {
        cy.step('Login->Risk Management ->Live Delay')
        cy.step('Create New Delay')
        cy.step('Select Sport Soccer->International')
        cy.step('Select Risk Category Good Customer')
        cy.step('Set Delay 20')
        cy.step('Save')
        cy.visit('https://staging.efbet.tech/live/')
        cy.step('Login (Good Customer)->make live bet on Soccer').should('wait Global Delay set 1 sec')
      });
      it('Live Delay only in live', () => {
        cy.step('Login->Risk Management ->Live Delay')
        cy.step('Create New Delay')
        cy.step('Select Sport Soccer->International')
        cy.step('Select Risk Category Good Customer')
        cy.step('Set Delay 20')
        cy.step('Save')
        cy.visit('https://staging.efbet.tech/live/')
        cy.step('Login (Good Customer)->make bet on pre match on Soccer/International').should('wait Global Delay set 1 sec')
      });
      it('Field validation Global Delay 0, 61, a, @', () => {
        cy.step('Login->Risk Management ->Live Delay')
        cy.step('Create New Delay')
        cy.step('Select Sport Soccer->International')
        cy.step('Select Risk Category Good Customer')
        cy.step('Set Delay 0')
        cy.step('Save')
        cy.step('Delay').should('wait 0 sec')
        cy.step('Set Delay 61')
        cy.step('Save')
        cy.step('Delay').should('wait 61 sec')
        cy.step('Set Delay a')
        cy.step('Save')
        cy.step('Delay').should('wait a sec')
        cy.step('Set Delay @')
        cy.step('Save')
        cy.step('Delay').should('wait @ sec')
      });
    });
  });
});  
