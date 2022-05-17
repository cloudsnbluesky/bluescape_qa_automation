# Bluescape QA Automation Interview

This is the take-home assignment for the QA Automation role at Bluescape written with Playwright helper

## Pre-requisites

* npm
* codeceptjs


## To run
```bash
npx codeceptjs run
```

## Scenarios
* Check if website is accessible
* Check if name input field is present
* Check if email input field is present and required
* Check if website input field is present
* Check date input field is present and required
* Try to submit a form with an invalid website, user should not see "Message Sent" success page
* Verify happy path with a valid form submitted, user should see "Message Sent" success page
