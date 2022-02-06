

import { Wordpress } from './pages'

const word = new Wordpress()

describe('wordpress validate functionality', () => {

   

    before('Verify login functionality', () => {

        word.visit()

        word.login('arpit', 'shashank@137')

        //check the backend was properly reached
        // word.backend()

    })

    beforeEach(() => {
        
        Cypress.Cookies.preserveOnce('wp-settings-time-20', '1644132666')
      })

      
    it('Verify page navigating to the settings page', () => {
        word.backend()
        word.settings_page()
    })

    it('Verify page navigating to the advanced ads page', () => {
        word.advanced_ads_page()
    })

    it('Verify advanced ads list is empty', () => {
        word.advanced_ads_list()
    })

})









