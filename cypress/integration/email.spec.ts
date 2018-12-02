describe('Email Form Test', () => {
  const typedName = 'John Testington';
  const typedEmail = 'jtestington@email.test';
  const typedSubject = 'Test Subject';
  const typedMessage = 'Testing Testing Testing Testing';

  // @ts-ignore
  const typeName = (name) => {
    return cy.get('#name')
      .focus()
      .type(name);
  };
  // @ts-ignore
  const typeEmail = (email) => {
    return cy.get('#email')
      .focus()
      .type(email);
  };

  // @ts-ignore
  const typeSubject = (subject) => {
    return cy.get('#subject')
      .focus()
      .type(subject);
  };

  // @ts-ignore
  const typeMessage = (message) => {
    return cy.get('#message')
      .focus()
      .type(message);
  };

  beforeEach(() => {
    cy.visit('/');
  });

  it('accepts input for name', () => {
    typeName(typedName)
      .should('have.value', typedName);
  });

  it('accepts input for email', () => {
    typeEmail(typedEmail)
      .should('have.value', typedEmail);
  });

  it('accepts input for subject', () => {
      typeSubject(typedSubject)
        .should('have.value', typedSubject);
  });

  it('accepts input for body', () => {
      typeMessage(typedMessage).should('have.value', typedMessage);
  });

  it('submit button is disabled with no input', () => {
    cy.get('.container-fluid > .btn').should('be.disabled');
  });

  it('submit button is not disabled when proper input is entered', () => {
    typeName(typedName);
    typeEmail(typedEmail);
    typeSubject(typedSubject);
    typeMessage(typedMessage);
    cy.get('.container-fluid > .btn').should('not.be.disabled');
  });

});
