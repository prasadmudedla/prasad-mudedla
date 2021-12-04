# Monefy Exploratory Testing Plan

## Explore target, with resources, to discover information
1. Expense & Income
    * `High Priority` Verify that the user is able to add new income / expense for each category.
    * `High Priority` Verify that when the user adds / updates, income / expense the mathematical operations are valid.
    * `High Priority` Verify that when the user adds / updates / deletes, income / expense the balance and the UI charts are updated.
    * `High Priority` Verify that when the user adds / updates / deletes, income / expense the values of every category is updated.
    * `High Priority` Verify that when the user selects Day / Week / Month / Year, the balance and the UI charts are updated.

2. Accounts
    * `High Priority` Verify that the is able to create a new account and should get a notification for the creation of the account.
    * `High Priority` Verify that the is able to delete an account and should get a notification for the deletion of the account.
    * `High Priority` Verify that once the user deletes the account all the income/expense should be deleted.
    * `High Priority` Verify that the user is able to switch between the accounts.
    * `High Priority` Verify that when the user switches the account UI & Charts should be updated accordingly.
    * `Medium Priority` Verify the behaviour of the application while creating and deleting multiple accounts and updating the calculations after each action.
    * `Medium Priority` Verify user is able to edit the first day of the month, first day of the week and the carry over functionality.

3. Pro Features
    * `High Priority` Verify if the user is able to buy the Pro features using different payment types.
    * `High Priority` Verify if the free user is not be able to use the pro features.
    * `High Priority` Verify if only the pro user is able to use features like Multi-Currency, Synchronization, Passcode protection etc.
    * `High Priority` Verify if both free / pro user are able to edit categories but only pro user is able to add new categories.

4. Settings
    * Export to file
        * `High Priority` Verify if the clicking on this option asks for the user permission to access the media, files on the device.
        * `High Priority` Verify if the user is able to select Character set, Decimal separator, Delimiter character.
        * `High Priority` Verify if the user is suggested options to Upload to the exported data.
    * About Monefy
        * `High Priority` Verify if the user is able to view the information about the application, version.
        * `High Priority` Verify if the user is enable / disable Google Analytics.
    * Privacy Policy
        * `High Priority` Verify if the user is redirected to Monefy Privacy Policy
        * `Medium Priority` Verify if the user is able to minimize the privacy policy browser window and come back to the application.
    * Synchronization
        * `High Priority` Verify if the pro user is able to synchronize the data to both Dropbox / Google Drive.
        * `High Priority` Verify if the pro user is able to view / reuse the exported data and is not corrupted.
        * `High Priority` Verify if the user is asked about the Dropbox / Google Drive credentials when trying to synchronize data for the first time.
    * Data Backup
        * `High Priority` Verify if when the user clicks on 'Create data backup', data back-up is created.
        * `High Priority` Verify if when the user clicks on 'Restore data', data back-up is restored.
        * `High Priority` Verify if when the user clicks on 'Clear data', data back-up is cleared both from Dropbox / Google Drive.

5. Amount Transfers
    * `High Priority` Verify that the user is able to transfer between the accounts.
    * `High Priority` Verify that the user is able to see all the transfers in the transaction list.
    * `High Priority` Verify that the balances and UI charts update after the transfers.

## Findings from your charters. Did everything work as expected? What bugs were discovered?
-	Findings/Improvements needed from UI standpoint:
When user tries to add the new expense, after we enter the amount ‘ADD button should be bolded rather than showing the font, size, colour displayed same as in calculator.
-	When user clicks on new income, types the amount, then here as well we need to show the Choose category button differentiated from calculator.
-	When user opens app from the second time we see that New Expense and New Income buttons are showing as symbols in the form of – and + rather than showing the actual names for the better user experience.

## Prioritisation of those charters - which area of the app or testing would you explore first and why?
-	Verifying the usability of the App such as all the links, buttons and fields are working.
-	Next Priority is to test whether user is able to add the new expense and new income because that’s the main/parent functionality which is tied up to the categories.
-	Next priority would be to test the accounts section whether user is able to add the payments in terms of cash/payment cards. Because without amount getting added to the wallet user would not be able to settle the payments.
-   Next priority would be to test the Amount Transfers section.
-   Next Priority is to verify all the pro features such as Multi-currency, Synchronization, Adding New categories etc.

## How much time you have planned for each charter?

- For each platform,
	-	For testing all the expenses with respective to categories, I would allocate 30 minutes of testing.
	-	For testing all the incomes with respective to categories, I would allocate 30 minutes of testing.
	-	For testing the accounts section, I would allocate 15 minutes.
	-	For testing the Settings section, would allocate another 20 minutes.
	-	For all the sorting/filter related functions such as Day/Week/Month/Year, All, Interval and Choose Date, I would allocate 15 minutes of testing time.
	-	For verifying the balance amounts, category wise amounts would allocate 10 minutes.
	-	All together I would finish the testing of all the functionalities in a span of 2 hours by following the module based approach.

## What kind of risks you need to mitigate for this type of application?
- Data Privacy.
- Governance.
- Calculations with multi-currency.
- Unavialability of Synchronization servers.
- App Upgrade.
- Accessibility Controls.
