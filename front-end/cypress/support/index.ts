// cypress/support/index.ts
Cypress.Commands.add(
  'typeRandomWords',
  { prevSubject: 'element' },
  (subject /* :JQuery<HTMLElement> */, count = 3, options?) => {
    return cy.wrap(subject).type(generateRandomWords(count), options)
  }
)