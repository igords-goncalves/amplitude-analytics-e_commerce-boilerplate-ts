describe('Fluxo de adicionar ao carrinho', () => {
  it('envia evento add_to_cart para o Amplitude', () => {
    cy.intercept('POST', 'https://api2.amplitude.com/2/httpapi', (req) => {
      const body = JSON.parse(req.body);
      const event = body.events.find(e => e.event_type === 'add_to_cart');
      expect(event).to.exist;
      expect(event.event_properties.product_name).to.equal('Produto Teste');
    }).as('amplitude');

    cy.visit('/');
    cy.get('[data-testid=add-to-cart]').click();
    cy.wait('@amplitude');
  });
});
