 
Cypress.Commands.add('getByText', (elementText) => {
    cy.contains(elementText)
      .should('have.length', 1)
      .then(($element) => {
        cy.wrap($element).as('elementByText');
      });
  });


  Cypress.Commands.add('clickElementByText', (elementText) => {
    cy.contains(elementText)
      .should("be.visible")
      .click();
  });
  
  Cypress.Commands.add('getImgsBySrcPattern', (srcPattern) => {
    cy.get('img[src]')
      .filter((index, element) => {
        const srcAttributeValue = element.getAttribute('src');
        return srcAttributeValue && srcAttributeValue.match(srcPattern);
      })
      
      .then(($imgs) => {
        cy.wrap($imgs).as('imgsBySrcPattern');
      });
  });
  