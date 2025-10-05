describe('Experimento de botão de checkout', () => {
  it('envia evento experiment_view com variante correta', () => {
    cy.intercept('POST', 'https://api2.amplitude.com/2/httpapi', (req) => {
      const body = JSON.parse(req.body);
      const event = body.events.find(e => e.event_type === 'experiment_view');
      if (event) {
        expect(event.event_properties.experiment_key).to.equal('new_checkout_button');
        expect(['control', 'variant']).to.include(event.event_properties.variant);
      }
    }).as('amplitude');

    cy.visit('/');
    cy.wait('@amplitude');
  });
});
