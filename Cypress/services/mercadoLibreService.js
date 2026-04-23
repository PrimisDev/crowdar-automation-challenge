class MercadoLibreService {
  getDepartments() {
    return cy.request({
      method: "GET",
      url: "https://www.mercadolibre.com.ar/menu/departments",
      headers: {
        accept: "application/json"
      }
    });
  }
}

export default new MercadoLibreService();