describe('Health Page', () => {

    it('should be able to log-in ', () => {
        // Test steps and assertions should be defined here
        // For example, visit a page, interact with elements, and make assertions
        cy.visit('http://localhost:5173/'); // Replace with the actual URL

        cy.get('[data-id="sign-in"]').click();
        cy.findByPlaceholderText("Enter email").type("emeholisaeloka@gmail.com");
        cy.findByLabelText(/password/i).type("11111111");

        cy.findByRole('button', { name: /login/i }).click(); 

        cy.findByRole('textbox', { name: /location/i}).type("hospital");
        cy.findByRole('button', { name: /hospitals/i }).click();

        cy.intercept('POST', 'http://127.0.0.1:8000/api/caresearch').as('searchFacilityRequest');

        // Wait for the API request to complete
        cy.wait('@searchFacilityRequest');


        cy.get('.info-wrapper').should('exist');// the main div that wraps the displayed api's response


    });



 it('should handle no facilities found', () => {

     cy.visit('http://localhost:5173/'); // Replace with the actual URL

        cy.get('[data-id="sign-in"]').click();
        cy.findByPlaceholderText("Enter email").type("emeholisaeloka@gmail.com");
        cy.findByLabelText(/password/i).type("11111111");

        cy.findByRole('button', { name: /login/i }).click(); 

        cy.findByRole('textbox', { name: /location/i}).type("hospital");
        cy.findByRole('button', { name: /hospitals/i }).click();

    // Mock an empty API response
    cy.intercept('POST', 'http://127.0.0.1:8000/api/caresearch', []).as('searchFacilityRequest');

    // Wait for the API request to complete
    cy.wait('@searchFacilityRequest');

    // Check if the "No facilities found" message is displayed
    cy.contains('No facilities found based on the search.').should('exist');
  });



  
});
