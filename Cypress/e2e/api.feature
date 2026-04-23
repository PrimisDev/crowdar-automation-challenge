@API @MercadoLibre
Feature: Mercado Libre API

  Scenario: Get departments from Mercado Libre
    When the user requests Mercado Libre departments
    Then the response should contain departments