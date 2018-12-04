describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.server();
    cy.route('GET', 'https://api.stackexchange.com/2.2/users/6713829/top-tags?site=stackoverflow', 'fixture:stackoverflow.topTags.json');
    cy.route('GET', 'https://api.stackexchange.com/2.2/users/6713829/?site=stackoverflow', 'fixture:stackoverflow.userInfo.json');
    cy.route('GET', 'https://api.github.com/users/corykleiser', 'fixture:github.userInfo.json');
    cy.route('GET', 'https://api.github.com/users/corykleiser/repos', 'fixture:github.userRepos.json');
    cy.visit('/');
  });
  it('shows nav on mouseover and hides on mouseleave', () => {
    cy.get('[data-cy=nav-toggle]').trigger('mouseover');
    cy.get('[data-cy=nav-list]').should('exist');
    cy.get('[data-cy=nav-list]').trigger('mouseleave');
    cy.get('[data-cy=nav-list]').should('not.exist');
  });
  it('')
});
