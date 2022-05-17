Feature('Testing Send Us a Message page');

// Check if website is accessible
Scenario('open website', ({ I }) => {
    I.amOnPage('https://bluescapeqainterview.wordpress.com/contact/')
});

// Check if name input field is present
Scenario('check name input field is present and required', ({ I }) => {
    I.amOnPage('https://bluescapeqainterview.wordpress.com/contact/')
    I.seeElement({'xpath':'//*[@id="g7-name" and @required]'})
});

// Check if email input field is present and required
Scenario('check email input field is present and required', ({ I }) => {
    I.amOnPage('https://bluescapeqainterview.wordpress.com/contact/')
    I.seeElement({'xpath':'//*[@id="g7-email" and @required]'})
});

// Check if website input field is present
Scenario('check website input field is present', ({ I }) => {
    I.amOnPage('https://bluescapeqainterview.wordpress.com/contact/')
    I.seeElement({'xpath':'//*[@id="g7-website"]'})
});

// Check date input field is present and required
Scenario('check date input field is present and required', ({ I }) => {
    I.amOnPage('https://bluescapeqainterview.wordpress.com/contact/')
    I.seeElement({'xpath':'//*[@id="g7-date" and @required]'})
});

// Try to submit a form with an invalid website
// User should not see "Message Sent" success page
Scenario('submit invalid website', ({ I }) => {
    I.amOnPage('https://bluescapeqainterview.wordpress.com/contact/')
    I.fillField({'xpath':'//*[@id="g7-name"]'}, "TEST")
    I.fillField({'xpath':'//*[@id="g7-email"]'}, "TEST@TEST.COM")
    I.fillField({'xpath':'//*[@id="g7-website"]'}, "test")
    I.click({'xpath':'//*[@id="g7-date"]'})
    I.click({'xpath':'//*[@class=" ui-datepicker-days-cell-over  ui-datepicker-today"]'})
    I.click({'xpath':'//*[@type="submit"]'})
    I.dontSee('Message Sent')
});

// Verify happy path with a valid form submitted
// User should see "Message Sent" success page
Scenario('Happy path: submit valid form', ({ I }) => {
    I.amOnPage('https://bluescapeqainterview.wordpress.com/contact/')
    I.fillField({'xpath':'//*[@id="g7-name"]'}, "TEST")
    I.fillField({'xpath':'//*[@id="g7-email"]'}, "TEST@TEST.COM")
    I.fillField({'xpath':'//*[@id="g7-website"]'}, "http://www.test.com")
    I.click({'xpath':'//*[@id="g7-date"]'})
    I.click({'xpath':'//*[@class=" ui-datepicker-days-cell-over  ui-datepicker-today"]'})
    I.click({'xpath':'//*[@type="submit"]'})
    I.see('Message Sent')
});

