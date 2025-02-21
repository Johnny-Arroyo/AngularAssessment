**ProductApp (Magic: The Gathering Store)**
This project is a Magic: The Gathering store built with Angular. It uses standalone components and modern Angular features to display a list of Magic cards and their details.

**Prerequisites**
Node.js: Install a supported version (recommended: Node 20.x).
npm: Ensure you have npm (version 11.0.0 or later).
Angular CLI: Installed globally (version 19.1.7 or later).


**Installation**
1. Clone the Repository: in the command line run:

`git clone https://github.com/Johnny-Arroyo/AngularAssessment.git`
`cd product-app`

2. Install Dependencies

`npm install`



To start a local development server, in the command line run:

`ng serve`

Once the server is running, open your browser and navigate to http://localhost:4200. The application will automatically reload if you modify any source files.



**Application Overview**
Products Page:
/products displays a list of Magic: The Gathering cards.
Each product is displayed using a reusable ProductCardComponent.

Product Detail Page:
Click on a product's 'view details' button to view its detailed information at /products/:id.


**Assets**
The mock product data is stored in:

src/assets/mock-data/products.json
Ensure that your angular.json is configured to copy assets from src/assets (if not, update the assets configuration accordingly).