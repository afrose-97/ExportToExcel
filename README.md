# ExcelExportGallery
Excel Export Control: Simplified Data Export to Excel from Power Apps with Customizable Button and File Settings.

Steps to push the component:

You can push this component directly using the Visual studio developer command prompt. The steps to do so are:

1. Clone the repository
2. cd into the ExportToExcel folder
3. Run the command: npm install
4. Get the Power Platform Environment Instance url by clicking the gear at the top right when you are located in the environment, then clicking "Session details" option. In the pop-up window, copy the "Instance url" URL for your environment.
5. Use the command: pac auth create --url (url from step 4) and authenticate with your credentials.
6. Use the command: pac pcf push --publisher-prefix contoso to push the component. //This will add the custom control to the Default Solution of the environment, if you want to add the custom control to a specific solution, please use the command in step 7
7. Use the command: pac pcf push --solution-unique-name contosoSolution (replace with your target solution name)