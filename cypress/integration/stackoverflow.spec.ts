describe('StackOverflow Section Tests', () => {
  beforeEach(() => {
    cy.server();
    cy.route('GET', 'https://api.stackexchange.com/2.2/users/6713829/top-tags?site=stackoverflow', 'fixture:stackoverflow.topTags.json');
    cy.route('GET', 'https://api.stackexchange.com/2.2/users/6713829/?site=stackoverflow', 'fixture:stackoverflow.userInfo.json');
    cy.route('GET', 'https://api.github.com/users/corykleiser', 'fixture:github.userInfo.json');
    cy.route('GET', 'https://api.github.com/users/corykleiser/repos', 'fixture:github.userRepos.json');
    cy.visit('/');
  });
  it('displays top tags on load', () => {
    cy.get('#stackoverflow > .card-body > ul.list-group > li')
      .should('have.length', 4);
  });
  it('displays user info on load', () => {
    // TODO:: Implement Tests
  });
});
