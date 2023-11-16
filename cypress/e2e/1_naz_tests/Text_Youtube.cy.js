// selector of container list : .style-scope ytmusic-playlist-shelf-renderer


describe('My Test', function () {
    it('Test Text', () => {
        cy.visit('https://music.youtube.com/playlist?list=PLaDEN37_2VSGss0qxaaXZhpPegadaQTKM')
        cy.get('.csJmFc > [jsaction="JIbuQc:ldDdv(b3VHJd)"] > .lssxud > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d')
            .should('be.visible')
            .click()
        cy.get('.style-scope ytmusic-playlist-shelf-renderer').should('be.visible')

        cy.get('.title.style-scope.ytmusic-responsive-list-item-renderer[title]')
        .should('be.visible')
        .each(($songTitle) => {
            // Выводим каждое название песни в консоль
            cy.log($songTitle.attr('title'))
        })


    })

})




// describe('My Test', function () {
//     it('Test Text', () => {
//         cy.visit('https://music.youtube.com/playlist?list=PLaDEN37_2VSGss0qxaaXZhpPegadaQTKM')
//         cy.get('.csJmFc > [jsaction="JIbuQc:ldDdv(b3VHJd)"] > .lssxud > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d')
//             .should('be.visible')
//             .click()
//         cy.get('.style-scope ytmusic-playlist-shelf-renderer').should('be.visible')

//         cy.get('.title.style-scope.ytmusic-responsive-list-item-renderer[title]')
//         .should('be.visible')
//         .each(($songTitle) => {
//             // Выводим каждое название песни в консоль
//             cy.log($songTitle.attr('title'))
//         })


//     })

// })


// describe('My Test', function () {
//     it('Test Text', () => {
//         cy.visit('https://music.youtube.com/playlist?list=PLaDEN37_2VSGss0qxaaXZhpPegadaQTKM')
//         cy.get('.csJmFc > [jsaction="JIbuQc:ldDdv(b3VHJd)"] > .lssxud > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d')
//             .should('be.visible')
//             .click()
//         cy.get('.style-scope ytmusic-playlist-shelf-renderer').invoke('text').then((text) => {
//             // Выведем текст в консоль
//             console.log('Текст элемента:', text)

  
//             // Например, проверим, содержит ли текст определенную строку
//             expect(text).to.include('ожидаемый текст')
//         })

//     })

// })
