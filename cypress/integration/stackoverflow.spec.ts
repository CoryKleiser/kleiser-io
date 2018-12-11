describe('StackOverflow Section Tests', () => {
  before(() => {
    cy.server();
    cy.route('GET', 'https://api.stackexchange.com/2.2/users/6713829/top-tags?site=stackoverflow', 'fixture:stackoverflow.topTags.json');
    cy.route('GET', 'https://api.stackexchange.com/2.2/users/6713829/?site=stackoverflow', 'fixture:stackoverflow.userInfo.json');
    cy.route('GET', 'https://api.github.com/users/corykleiser', 'fixture:github.userInfo.json');
    cy.route('GET', 'https://api.github.com/users/corykleiser/repos', 'fixture:github.userRepos.json');
    cy.visit('/');
  });
  it('displays top tags on load', () => {
    cy.get('[data-test=top-tags]')
      .should('have.length', 4);
  });
  it('displays user image on load', () => {
    cy.get('#stackoverflow > .card-img-top').should('have.attr', 'src').and('include', 'https://upload.wikimedia.org/wikipedia/en/thumb/9/99/MarioSMBW.png/220px-MarioSMBW.png')
  });
  it('displays user name on load', () => {
    cy.get('[data-test=so-header]').contains('Mario');
  });
  it('displays user reputation on load', () => {
    // TODO: Implement
  });
});
