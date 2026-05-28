// ===== GOOGLE APPS SCRIPT FOR GOOGLE SHEETS INTEGRATION =====
// This script should be deployed as a Web App from Google Apps Script
// Steps to use:
// 1. Go to script.google.com
// 2. Create a new Google Apps Script project
// 3. Copy this code into the editor
// 4. Create a new spreadsheet and link it to this script
// 5. Deploy as Web App (Execute as: your email, Who has access: Anyone)
// 6. Copy the deployment URL and paste it into script.js (searchfor YOUR_GOOGLE_APPS_SCRIPT_URL_HERE)

function doPost(e) {
    try {
        // Parse incoming JSON data
        const data = JSON.parse(e.postData.contents);
        
        // Get or create the spreadsheet
        const sheet = SpreadsheetApp.getActiveSheet();
        
        // Add headers if this is the first row
        if (sheet.getLastRow() === 0) {
            sheet.appendRow([
                'Timestamp',
                'Customer Name',
                'Phone',
                'Address',
                'Products',
                'Quantities',
                'Prices',
                'Total',
                'Order ID'
            ]);
        }
        
        // Format products data
        const productNames = data.products.map(p => p.name).join(' | ');
        const productQuantities = data.products.map(p => p.quantity).join(' | ');
        const productPrices = data.products.map(p => p.price).join(' | ');
        const orderId = 'ORD-' + new Date().getTime();
        
        // Add new row with order data
        sheet.appendRow([
            data.timestamp,
            data.customerName,
            data.customerPhone,
            data.customerAddress,
            productNames,
            productQuantities,
            productPrices,
            data.total,
            orderId
        ]);
        
        // Auto-fit columns
        sheet.autoResizeColumns(1, 9);
        
        // Return success response
        return ContentService.createTextOutput(JSON.stringify({
            status: 'success',
            message: 'Order saved successfully',
            orderId: orderId
        })).setMimeType(ContentService.MimeType.JSON);
        
    } catch (error) {
        return ContentService.createTextOutput(JSON.stringify({
            status: 'error',
            message: error.toString()
        })).setMimeType(ContentService.MimeType.JSON);
    }
}

function doGet(e) {
    return ContentService.createTextOutput('Google Apps Script is working. Use POST method to submit orders.');
}

// Optional: Function to format data for better readability
function formatOrderRow(data) {
    return {
        timestamp: new Date().toLocaleString('pt-BR'),
        customerName: data.customerName || 'N/A',
        customerPhone: data.customerPhone || 'N/A',
        customerAddress: data.customerAddress || 'N/A',
        productCount: data.products.length,
        totalValue: data.total
    };
}
