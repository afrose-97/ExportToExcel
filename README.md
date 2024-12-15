<<<<<<< HEAD

# Excel Export Control PCF (PowerApps Component Framework)

## Overview
The **Excel Export Control** is a custom PowerApps Component Framework (PCF) component designed to simplify the process of exporting gallery data from Power Apps to an Excel file. This component provides enhanced flexibility with customizable button properties and file settings, ensuring seamless integration with your app's design and functionality.

## Features
### 1. Data Export to Excel
- Export data from a Power Apps gallery directly to an Excel file with a single click.

### 2. Customizable Button
- Modify button attributes to match your app's theme, including:
  - **Text**: Define button label.
  - **Color**: Customize background and text colors.
  - **Size**: Adjust dimensions to fit your UI.
  - **Style**: Apply styling for better user experience.

### 3. Fluent UI Icon Support
- Add a Fluent UI icon to the button for better visual consistency with your app's interface. Icons can be chosen from [Fluent UI Icons](https://www.flicon.io/).

### 4. Column Ordering
- Arrange gallery columns in the desired order for the Excel output using simple customization options.

---

## Installation Guide

### Prerequisites
1. Ensure you have [Power Platform CLI](https://learn.microsoft.com/en-us/power-platform/developer/cli/introduction) installed.
2. Access to your Power Platform environment.
3. Node.js and npm installed on your development machine.

---

### Steps to Push the Component

#### 1. Clone the Repository
Clone the repository containing the **Excel Export Control** component:
```bash
    git clone <repository-url>
```

#### 2. Navigate to the Component Folder
Navigate into the **ExportToExcel** folder:
```bash
    cd ExportToExcel
```

#### 3. Retrieve Developer Resource URL
Retrieve the developer resource URL for your environment:
1. Navigate to **Advanced Settings** in your Power Apps environment.
2. Copy the **Developer Resource URL**.

#### 4. Authenticate with Power Platform
Use the Power Platform CLI to authenticate:
```bash
    pac auth create --url <developer-resource-url>
```
Follow the prompts to log in with your Power Apps credentials.

#### 5. Push the Component to the Environment
Push the component to your Power Apps environment:
```bash
    pac pcf push --publisher-prefix contoso
```

---

## Usage
1. **Add the Component to Your App:**
   - Open your Power Apps app.
   - Select the component from the **Insert** panel and drag it onto the canvas.

2. **Configure Properties:**
   - Set the button text, color, icon, and column order properties using the component properties panel.

3. **Bind Data Source:**
   - Link the gallery data to the component to enable export functionality.

4. **Test the Export:**
   - Click the button to download the Excel file with the gallery data.

---

## New Features Added
1. **Data Export to Excel:** Export gallery data to an Excel file effortlessly.
2. **Customizable Button:** Tailor the button’s appearance to match your app.
3. **Fluent UI Icon Support:** Add icons to improve the button's UI.
4. **Column Ordering:** Arrange columns for better presentation in Excel.

---

## Customization Options
### Button Customization
- **Text:** Set a user-friendly label for the export button.
- **Background and Text Colors:** Define theme-aligned colors.
- **Dimensions:** Adjust height and width to suit your layout.
- **Icon:** Add icons for enhanced usability.

### Column Configuration
- Define a preferred column arrangement for Excel output in the properties panel.

---

## Troubleshooting
### Common Issues
1. **Authentication Error:** Ensure the developer resource URL is correct, and you have proper permissions in the Power Apps environment.
2. **Component Not Showing:** Verify that the component is properly pushed and included in your app.

### Debugging
- Use the PowerApps CLI `pac pcf push` command with the `--debug` flag to identify issues during deployment.

---

## References
- [Power Platform CLI Documentation](https://learn.microsoft.com/en-us/power-platform/developer/cli/introduction)
- [Fluent UI Icons](https://www.flicon.io/)
- [PCF Development Documentation](https://learn.microsoft.com/en-us/powerapps/developer/component-framework/overview)

---

## License
This project is licensed under the [MIT License](https://github.com/afrose-97/ExportToExcel/blob/main/LICENSE.txt).

---

## Feedback and Contributions
We welcome feedback and contributions! Please submit issues or pull requests in the repository to help improve this component.
