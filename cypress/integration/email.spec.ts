describe('Email Form Test', () => {
  const typedName = 'John Testington';
  const typedEmail = 'jtestington@email.test';
  const typedSubject = 'Test Subject';
  const typedMessage = 'Testing Testing Testing Testing';

  // @ts-ignore
  const typeName = (name) => {
    return cy.get('[data-cy=contact-name]')
      .focus()
      .type(name);
  };
  // @ts-ignore
  const typeEmail = (email) => {
    return cy.get('[data-cy=contact-email]')
      .focus()
      .type(email);
  };

  // @ts-ignore
  const typeSubject = (subject) => {
    return cy.get('[data-cy=message-subject]')
      .focus()
      .type(subject);
  };

  // @ts-ignore
  const typeMessage = (message) => {
    return cy.get('[data-cy=message-body]')
      .focus()
      .type(message);
  };

  before(() => {
    cy.server();
    cy.route('GET', 'https://api.stackexchange.com/2.2/users/6713829/top-tags?site=stackoverflow', 'fixture:stackoverflow.topTags.json');
    cy.route('GET', 'https://api.stackexchange.com/2.2/users/6713829/?site=stackoverflow', 'fixture:stackoverflow.userInfo.json');
    cy.route('GET', 'https://api.github.com/users/corykleiser', 'fixture:github.userInfo.json');
    cy.route('GET', 'https://api.github.com/users/corykleiser/repos', 'fixture:github.userRepos.json');
    cy.visit('/');
  });

  it('submit button is disabled with no input', () => {
    cy.get('[data-cy=contact-submit]').should('be.disabled');
  });

  it('accepts input for name', () => {
    typeName(typedName)
      .should('have.value', typedName);
  });

  it('submit button is disabled with incomplete input', () => {
    cy.get('[data-cy=contact-submit]').should('be.disabled');
  });

  it('accepts input for email', () => {
    typeEmail(typedEmail)
      .should('have.value', typedEmail);
  });

  it('submit button is disabled with incomplete input', () => {
    cy.get('[data-cy=contact-submit]').should('be.disabled');
  });

  it('accepts input for subject', () => {
      typeSubject(typedSubject)
        .should('have.value', typedSubject);
  });

  it('submit button is disabled with incomplete input', () => {
    cy.get('[data-cy=contact-submit]').should('be.disabled');
  });

  it('accepts input for body', () => {
      typeMessage(typedMessage).should('have.value', typedMessage);
  });

  it('submit button is not disabled when proper input is entered', () => {
    // typeName(typedName);
    // typeEmail(typedEmail);
    // typeSubject(typedSubject);
    // typeMessage(typedMessage);
    cy.get('[data-cy=contact-submit]').should('not.be.disabled');
  });

});
