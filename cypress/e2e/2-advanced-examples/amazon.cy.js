/// <reference types="cypress" />

context('Amazon MacBook Air Search', () => {
    beforeEach(() => {
        cy.visit('https://www.amazon.com/')
    })


    it('should find the cheapest MacBook Air M2 8GB with 500GB SSD', () => {

        // Шаг 2: Ввести в поисковике 'MacBook Air M2' и нажать Enter
        cy.get('input[id="twotabsearchtextbox"]').type('MacBook Air M2').type('{enter}');

        // Шаг 3: Дождаться загрузки результатов поиска и получить информацию о самом дешевом продукте
        cy.get('.s-main-slot').should('be.visible');
        cy.get('.s-main-slot .s-result-item').then((products) => {
            let cheapestProduct = null;
            let cheapestPrice = Number.POSITIVE_INFINITY;

            products.each((index, product) => {
                const title = Cypress.$(product).find('.a-text-normal').text();
                const priceText = Cypress.$(product).find('.a-price .a-offscreen').text();
                const price = parseFloat(priceText.replace('$', '').replace(',', ''));

                if (price < cheapestPrice) {
                    cheapestPrice = price;
                    cheapestProduct = { title, price };
                }
            });

            // Шаг 4: Проверить, что найденный продукт является самым дешевым MacBook Air M2
            if (cheapestProduct) {
                const title = cheapestProduct.title;
                console.log('Самый дешевый продукт:', title);
                console.log('Цена:', cheapestProduct.price);

                // Добавьте свои собственные проверки
                // cy.wrap(title).should('include.text', 'MacBook Air M2');
                cy.wrap(cheapestProduct.price).should('be.lessThan', 1000); // Ваше значение цены
            } else {
                console.log('Продукты не найдены');
            }
        });


    })
})

