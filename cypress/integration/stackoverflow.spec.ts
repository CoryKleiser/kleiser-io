describe('StackOverflow Section Tests', () => {
  beforeEach(() => {
    cy.server();
    cy.fixture('stackoverflow.topTags.json')
      .then((data) => {
        cy.route('GET', 'https://api.stackexchange.com/2.2/users/6713829/top-tags?site=stackoverflow', data);
      });
    cy.fixture('stackoverflow.userInfo.json')
      .then((data) => {
        // TODO:: mock data correctly
        cy.route('GET', 'https://api.stackexchange.com/2.2/users/6713829?site=stackoverflow');
      });
    cy.visit('/');
  })
  it('displays top tags on load', () => {
    cy.get('#stackoverflow > .card-body > ul.list-group > li')
      .should('have.length', 4);
  });
  it('displays user info on load', () => {
    // TODO:: Implement Tests
  });
});
