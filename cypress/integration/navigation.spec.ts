describe('Navigation Tests', () => {
  before(() => {
    cy.server();
    cy.route('GET', 'https://api.stackexchange.com/2.2/users/6713829/top-tags?site=stackoverflow', 'fixture:stackoverflow.topTags.json');
    cy.route('GET', 'https://api.stackexchange.com/2.2/users/6713829/?site=stackoverflow', 'fixture:stackoverflow.userInfo.json');
    cy.route('GET', 'https://api.github.com/users/corykleiser', 'fixture:github.userInfo.json');
    cy.route('GET', 'https://api.github.com/users/corykleiser/repos', 'fixture:github.userRepos.json');
    cy.visit('/');
  });
  it('shows nav on mouseover and hides on mouseleave', () => {
    cy.get('[data-test=nav-toggle]').trigger('mouseover');
    cy.get('[data-test=nav-list]').should('exist');
    cy.get('[data-test=nav-list]').trigger('mouseleave');
    cy.get('[data-test=nav-list]').should('not.exist');
  });
  it('scrolls to about sections when user clicks About nav item', () => {
    cy.get('[data-test=nav-toggle]').trigger('mouseover');
    cy.get('[data-test=nav-about-item').click();
    cy.wait(500).then(() => {
      cy.get('[data-test=about-section]').then($el => {
        expect(Math.floor($el[0].getBoundingClientRect().top)).to.equal(0);
      });
    });
  });
  it('scrolls to work when user clicks Work nav item', () => {
    cy.get('[data-test=nav-toggle]').trigger('mouseover');
    cy.get('[data-test=nav-work-item]').click();
    cy.wait(1000).then(() => {
      cy.get('[data-test=work-section]').then($el => {
        expect(Math.floor($el[0].getBoundingClientRect().top)).to.equal(0);
      });
    });
  });
  it('scrolls to contact when user clicks contact nav item', () => {
    cy.get('[data-test=nav-toggle]').trigger('mouseover');
    cy.get('[data-test=nav-contact-item]').click();
    cy.wait(1250).then(() => {
      cy.get('[data-test=contact-section]').then($el => {
        expect(Math.floor($el[0].getBoundingClientRect().top)).to.equal(0);
      });
    });
  });
  it('scrolls to intro when user clicks home nav item', () => {
    cy.get('[data-test=nav-toggle]').trigger('mouseover');
    cy.get('[data-test=nav-home-item]').click();
    cy.wait(1250).then(() => {
      cy.get('[data-test=intro-section]').then($el => {
        expect(Math.floor($el[0].getBoundingClientRect().top)).to.equal(0);
      });
    });
  });
});
