/// <reference types="cypress" />

describe("Mapping Tool - test suite", () => {
  context("Market Templates", () => {
    context("Delete", () => {
      it("Specifier", () => {
        cy.step("Navigate");
        cy.step("Market Templates");
        cy.step("Select Drop-down - StarCraft(ID:26)");
        cy.step("Select TestOne");
        cy.step("Click Edit Mapping");
        cy.step("Click Delete Specifier");
        cy.step("Click Save Mapping");
      });
      it("Outcome", () => {
        cy.step("Navigate");
        cy.step("Market Templates");
        cy.step("Select Drop-down - StarCraft(ID:26)");
        cy.step("Select TestOne");
        cy.step("Click Edit Mapping");
        cy.step("Click Delete Outcome Template Name");
        cy.step("Click Save Mapping");
      });
      it("Mapping", () => {
        cy.step("Navigate");
        cy.step("Market Templates");
        cy.step("Select Drop-down - StarCraft(ID:26)");
        cy.step("Select TestOne");
        cy.step("Click Edit Mapping");
        cy.step("Click Delete Mapping");
        cy.step("Click Save Mapping");
      });
    });
    context("Add", () => {
      it("Specifier", () => {
        cy.step("Navigate");
        cy.step("Market Templates");
        cy.step("Select Drop-down - StarCraft(ID:26)");
        cy.step("Select TestOne");
        cy.step("Click Edit Mapping");
        cy.step("Add Specifier");
        cy.step("Click Add");
        cy.step("Click Save Mapping");
      });
      it("Outcome", () => {
        cy.step("Navigate");
        cy.step("Market Templates");
        cy.step("Select Drop-down - StarCraft(ID:26)");
        cy.step("Select TestOne");
        cy.step("Click Edit Mapping");
        cy.step("Add New Outcome Template");
        cy.step("Type hcp");
        cy.step("Select from drop down Draw{hcp}");
        cy.step("Click Add");
        cy.step("Click Save Mapping");
      });
      context("Update", () => {
        it("Change Market Type", () => {
          cy.step("Navigate");
          cy.step("Market Templates");
          cy.step("Select Drop-down - StarCraft(ID:26)");
          cy.step("Select TestOne");
          cy.step("Click Edit Mapping");
          cy.step("Select Market Type - Dynamic");
          cy.step("Click Save Mapping");
        });
        it("Change Sport", () => {
          cy.step("Navigate");
          cy.step("Market Templates");
          cy.step("Select Drop-down - StarCraft(ID:26)");
          cy.step("Select TestOne");
          cy.step("Click Edit Mapping");
          cy.step("Select Sport - dropdown");
          cy.step("Click Save Mapping");
        });
        it("Change Group", () => {
          cy.step("Navigate");
          cy.step("Market Templates");
          cy.step("Select Drop-down - Soccer(ID:120)");
          cy.step("Select Match Winner");
          cy.step("Click Edit Mapping");
          cy.step("Select Group - corners");
          cy.step("Click Save Mapping");
        });
        it("Outcome Type", () => {
          cy.step("Navigate");
          cy.step("Market Templates");
          cy.step("Select Drop-down - Soccer(ID:120)");
          cy.step("Select Match Winner");
          cy.step("Click Edit Mapping");
          cy.step("Select Outcome Types - Totals");
          cy.step("Click Save Mapping");
        });
        it("Outcome Order Type", () => {
          cy.step("Navigate");
          cy.step("Market Templates");
          cy.step("Select Drop-down - Soccer(ID:120)");
          cy.step("Select Match Winner");
          cy.step("Click Edit Mapping");
          cy.step("Select Outcome order type - Name");
          cy.step("Click Save Mapping");
        });
      });
    });
  });
  context("Draft", () => {
    context("Delete Mapping", () => {
      it("Outcome Order Type", () => {
        cy.step("Navigate");
        cy.step("Draft");
        cy.step("Select mapping");
        cy.step("Click Delete");
      });
    });
  });
  context("Create New Market Template", () => {
    context("Save new static market", () => {
      it("Outcome Order Type - Static", () => {
        cy.step("Navigate to Mapping Tool");
        cy.step("Click create new Market Template");
        cy.step("Select Sport from drop down");
        cy.step("Type Market Template Name");
        cy.step("Select Market Type - Static");
        cy.step("Select Group");
        cy.step("Select Outcome Type");
        cy.step("Select Outcome Order Type");
        cy.step("Add Outcome - type hcp - click add");
        cy.step("Add specifier - Type 1 - slick add");
        cy.step("Click SAVE");
      });
      it("Outcome Order Type - Dynamic", () => {
        cy.step("Navigate to Mapping Tool");
        cy.step("Click create new Market Template");
        cy.step("Select Sport from drop down");
        cy.step("Type Market Template Name");
        cy.step("Select Market Type - Dynamic");
        cy.step("Select Group");
        cy.step("Select Outcome Type");
        cy.step("Select Outcome Order Type");
        cy.step("Add Outcome - type hcp - click add");
        cy.step("Add specifier - Type 1 - slick add");
        cy.step("Click SAVE");
      });
      it("Outcome Order Type - Outright", () => {
        cy.step("Navigate to Mapping Tool");
        cy.step("Click create new Market Template");
        cy.step("Select Sport from drop down");
        cy.step("Type Market Template Name");
        cy.step("Select Market Type - Outright");
        cy.step("Select Group");
        cy.step("Select Outcome Type");
        cy.step("Select Outcome Order Type");
        cy.step("Add Outcome - type hcp - click add");
        cy.step("Add specifier - Type 1 - slick add");
        cy.step("Click SAVE");
      });
      it("Select Group - SCORE ", () => {
        cy.step("Navigate to Mapping Tool");
        cy.step("Click create new Market Template");
        cy.step("Select Sport from drop down");
        cy.step("Type Market Template Name");
        cy.step("Select Market Type - Static");
        cy.step("Select Group - SCORE");
        cy.step("Select Outcome Type");
        cy.step("Select Outcome Order Type");
        cy.step("Add Outcome - type hcp - click add");
        cy.step("Add specifier - Type 1 - slick add");
        cy.step("Click SAVE");
      });
      it("Select Group - CORNERS", () => {
        cy.step("Navigate to Mapping Tool");
        cy.step("Click create new Market Template");
        cy.step("Select Sport from drop down");
        cy.step("Type Market Template Name");
        cy.step("Select Market Type - Static");
        cy.step("Select Group - CORNERS");
        cy.step("Select Outcome Type");
        cy.step("Select Outcome Order Type");
        cy.step("Add Outcome - type hcp - click add");
        cy.step("Add specifier - Type 1 - slick add");
        cy.step("Click SAVE");
      });
      it("Select Outcome Type - ORDINARY", () => {
        cy.step("Navigate to Mapping Tool");
        cy.step("Click create new Market Template");
        cy.step("Select Sport from drop down");
        cy.step("Type Market Template Name");
        cy.step("Select Market Type - Static");
        cy.step("Select Group - SCORE");
        cy.step("Select Outcome Type - ORDINARY");
        cy.step("Select Outcome Order Type");
        cy.step("Add Outcome - type hcp - click add");
        cy.step("Add specifier - Type 1 - slick add");
        cy.step("Click SAVE");
      });
      it("Select Outcome Type - TOTALS", () => {
        cy.step("Navigate to Mapping Tool");
        cy.step("Click create new Market Template");
        cy.step("Select Sport from drop down");
        cy.step("Type Market Template Name");
        cy.step("Select Market Type - Static");
        cy.step("Select Group - BOOKINGS");
        cy.step("Select Outcome Type - TOTALS");
        cy.step("Select Outcome Order Type");
        cy.step("Add Outcome - type hcp - click add");
        cy.step("Add specifier - Type 1 - slick add");
        cy.step("Click SAVE");
      });
      it("Select Outcome Type - ASIAN_HANDICAP", () => {
        cy.step("Navigate to Mapping Tool");
        cy.step("Click create new Market Template");
        cy.step("Select Sport from drop down");
        cy.step("Type Market Template Name");
        cy.step("Select Market Type - Static");
        cy.step("Select Group - BOOKINGS");
        cy.step("Select Outcome Type - ASIAN_HANDICAP");
        cy.step("Select Outcome Order Type");
        cy.step("Add Outcome - type hcp - click add");
        cy.step("Add specifier - Type 1 - slick add");
        cy.step("Click SAVE");
      });
      it("Select Outcome Type - HANDICAP", () => {
        cy.step("Navigate to Mapping Tool");
        cy.step("Click create new Market Template");
        cy.step("Select Sport from drop down");
        cy.step("Type Market Template Name");
        cy.step("Select Market Type - Static");
        cy.step("Select Group - BOOKINGS");
        cy.step("Select Outcome Type - HANDICAP");
        cy.step("Select Outcome Order Type");
        cy.step("Add Outcome - type hcp - click add");
        cy.step("Add specifier - Type 1 - slick add");
        cy.step("Click SAVE");
      });
      it("Select Outcome Type - CORRECT_SCORE_2", () => {
        cy.step("Navigate to Mapping Tool");
        cy.step("Click create new Market Template");
        cy.step("Select Sport from drop down");
        cy.step("Type Market Template Name");
        cy.step("Select Market Type - Static");
        cy.step("Select Group - BOOKINGS");
        cy.step("Select Outcome Type - CORRECT_SCORE_2");
        cy.step("Select Outcome Order Type");
        cy.step("Add Outcome - type hcp - click add");
        cy.step("Add specifier - Type 1 - slick add");
        cy.step("Click SAVE");
      });
      it("Select Outcome Type - CORRECT_SCORE_3", () => {
        cy.step("Navigate to Mapping Tool");
        cy.step("Click create new Market Template");
        cy.step("Select Sport from drop down");
        cy.step("Type Market Template Name");
        cy.step("Select Market Type - Static");
        cy.step("Select Group - BOOKINGS");
        cy.step("Select Outcome Type - CORRECT_SCORE_3");
        cy.step("Select Outcome Order Type");
        cy.step("Add Outcome - type hcp - click add");
        cy.step("Add specifier - Type 1 - slick add");
        cy.step("Click SAVE");
      });
      it("Select Outcome Type - CORNERS", () => {
        cy.step("Navigate to Mapping Tool");
        cy.step("Click create new Market Template");
        cy.step("Select Sport from drop down");
        cy.step("Type Market Template Name");
        cy.step("Select Market Type - Static");
        cy.step("Select Group - BOOKINGS");
        cy.step("Select Outcome Type");
        cy.step("Select Outcome Order Type - CORNERS");
        cy.step("Add Outcome - type hcp - click add");
        cy.step("Add specifier - Type 1 - slick add");
        cy.step("Click SAVE");
      });
      it("Select Outcome Order Type - Default", () => {
        cy.step("Navigate to Mapping Tool");
        cy.step("Click create new Market Template");
        cy.step("Select Sport from drop down");
        cy.step("Type Market Template Name");
        cy.step("Select Market Type - Static");
        cy.step("Select Group - BOOKINGS");
        cy.step("Select Outcome Type");
        cy.step("Select Outcome Order Type - Default");
        cy.step("Add Outcome - type hcp - click add");
        cy.step("Add specifier - Type 1 - slick add");
        cy.step("Click SAVE");
      });
      it("Select Outcome Order Type - Odds", () => {
        cy.step("Navigate to Mapping Tool");
        cy.step("Click create new Market Template");
        cy.step("Select Sport from drop down");
        cy.step("Type Market Template Name");
        cy.step("Select Market Type - Static");
        cy.step("Select Group - BOOKINGS");
        cy.step("Select Outcome Type");
        cy.step("Select Outcome Order Type - Odds");
        cy.step("Add Outcome - type hcp - click add");
        cy.step("Add specifier - Type 1 - slick add");
        cy.step("Click SAVE");
      });
      it("Select Outcome Order Type - Name", () => {
        cy.step("Navigate to Mapping Tool");
        cy.step("Click create new Market Template");
        cy.step("Select Sport from drop down");
        cy.step("Type Market Template Name");
        cy.step("Select Market Type - Static");
        cy.step("Select Group - BOOKINGS");
        cy.step("Select Outcome Type");
        cy.step("Select Outcome Order Type - Name");
        cy.step("Add Outcome - type hcp - click add");
        cy.step("Add specifier - Type 1 - slick add");
        cy.step("Click SAVE");
      });
      it("No duplication verification on add Outcome", () => {
        cy.step("Navigate to Mapping Tool");
        cy.step("Click create new Market Template");
        cy.step("Select Sport from drop down");
        cy.step("Type Market Template Name");
        cy.step("Select Market Type - Static");
        cy.step("Select Group - BOOKINGS");
        cy.step("Select Outcome Type");
        cy.step("Select Outcome Order Type - Name");
        cy.step("Add Outcome - type hcp - click add");
        cy.step(
          "Add Second Outcome - type hcp - click add should be give no duplicate allowed"
        );
        cy.step("Add specifier - Type 1 - click add");
        cy.step("Click SAVE");
      });
      it("No duplication verification on add Specifier", () => {
        cy.step("Navigate to Mapping Tool");
        cy.step("Click create new Market Template");
        cy.step("Select Sport from drop down");
        cy.step("Type Market Template Name");
        cy.step("Select Market Type - Static");
        cy.step("Select Group - BOOKINGS");
        cy.step("Select Outcome Type");
        cy.step("Select Outcome Order Type - Name");
        cy.step("Add Outcome - type hcp - click add");
        cy.step("Add specifier - Type 1 - click add");
        cy.step(
          "Add second specifier - Type 1 - click add should be not allowed"
        );
        cy.step("Click SAVE");
      });
    });
  });
  context("Outcome Template", () => {
    context("Create New Outcome Template", () => {
      it("Create", () => {
        cy.step("Navigate to Mapping tool");
        cy.step("Click Outcome Templates");
        cy.step("Click Create new outcome template");
        cy.step("Type Outcome template name");
        cy.step("Click Create");
      });
      it("Check created outcome template", () => {
        cy.step("Navigate to Mapping tool");
        cy.step("Click Outcome Templates");
        cy.step("Type Outcome template name (from previous test)");
        cy.step("Click Search");
        cy.step("Outcome template name is exist");
      });
      it("Search", () => {
        cy.step("Navigate to Mapping tool");
        cy.step("Click Outcome Templates");
        cy.step("Type Outcome template name");
        cy.step("System display all markets with typed name");
      });
    });
  });
});
