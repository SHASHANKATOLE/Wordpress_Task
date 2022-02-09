


import { Wordpress } from '../support/pages'

const word = new Wordpress()

describe('wordpress validate functionality', () => {

    beforeEach('Verify login functionality', () => {
        word.visit()
        word.login()
    })

    it('Verify page navigating to the settings page', () => {

        word.backend()    //check the backend was properly reached
        word.settings_page()
    })

    it('Verify page navigating to the advanced ads page', () => {

        word.advanced_ads_page()
    })

    it('Verify advanced ads list is empty', () => {

        word.advanced_ads_list()
    })

})









