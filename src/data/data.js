export const VERSION_DETAILS = [
    {
        "version": "1.43.21",
        "date": "January 6, 2025",
        "added": [
            "Affaire Module: Attach static assets to projects",
        ],
        "changed": [],
        "fixed": [],
    },
    {
        "version": "1.42.21",
        "date": "December 11, 2024",
        "added": [
            "Affaire Module: Toggle elements to be updated by clients",
            "Affaire Module: Send reminders each 3 days for incomplete orders",
            "Affaire Module: Load articles data from DivaTex ERP"
        ],
        "changed": [],
        "fixed": [],
    },
    {
        "version": "1.39.21",
        "date": "November 21, 2024",
        "added": [
            "Affaire Module: Auto fill sizes with with initial values",
            "Affaire Module: Auto fill recap form for all affaires",
            "Affaire Module: Shipping fees",
            "Affaire Module: Ability to create a copy of an existing affaire",
            "Affaire Module: Ability to create a version of an existing affaire",
            "Affaire Module: Ability to add discount value per affaire and not just per article",
            "Clients Module: Allowing clients to create their own offer through the online portal",
            "Clients Module: Clients invoices grouped under 'Facturation' tab",
        ],
        "changed": [
            "Affaire Module: Changed the sizes grid to be XXS -> 4XL",
            "Affaire Module: Toggling the 'type de procedure' option for all Appel d'offre",
            "Affaire Module: Shared prototype config between 'Achat' and 'Location' offer types",
            "Affaire Module: Ability to select more than one 'Blanchisseur'",
            "Affaire Module: Updated the entire sales-client workflow to allow for more interactivity",
        ],
        "fixed": [
            "Affaire Module: Clients filter not showing correct data",
            "Affaire Module: Pagination",
        ],
    },
    {
        "version": "1.26.19",
        "date": "October 29, 2024",
        "added": [
            "Affaire Module: Added YouSign support",
            "Affaire Module: Added affaire status",
            "Affaire Module: Added affaire types",
            "Clients Module: Added client status",
            "Clients Module: Added client filter",
            "User guide for the catalogue module",
        ],
        "changed": [
            "Affaire Module: Changed contract form for Appel d'offre",
            "Affaire Module: Changed articles selection workflow for Appel d'offre"
        ],
        "fixed": [
            "Affaire Module: Fixed article total displayed in recap tab",
            "Affaire Module: Fixed new article's image not displaying",
            "Affaire Module: Fixed colors selection not being scoped to parent article",
            "Affaire Module: Project not scoped to selected client",
        ],
    },
    {
        "version": "1.18.15",
        "date": "October 20, 2024",
        "added": [
            "Affaire Module: Create new product",
            "Global loader for all http requests"
        ],
        "changed": [],
        "fixed": [
            "Affaire Module: Recap tab is always empty",
            "Affaire Module: Missing padding in the project's sidebar",
            "Client Area: All affaires are shown in a single spot"
        ],
    },
    {
        "version": "1.16.12",
        "date": "October 15, 2024",
        "added": [
            "Added user guide",
        ],
        "changed": [
            'Affaire Module: Article selection by color (& size)'
        ],
        "fixed": [
            "Clients Module: Fixed 'add new client' redirection to dahsboard",
        ],
    },
    {
        "version": "1.14.11",
        "date": "October 10, 2024",
        "added": [
            "Affaire Module: Added %/£ toggle in the contract tab",
            "Affaire Module: Added a rich text editor for the 'critere' field",
            "Catalogue Module: Listing available articles"
        ],
        "changed": [],
        "fixed": [
            "Fixed action buttons ui to match the rest of the theme",
            "Fixed profile photo not saving",
            "Affaire Module: Fixed projects not showing for selected clients"
        ],
    },
    {
        "version": "1.11.8",
        "date": "October 8, 2024",
        "added": [],
        "changed": [
            "Removed all json files and replaced them with database entries",
            "Affaire Module: Added a form array as 'criteres d'attribution'"
        ],
        "fixed": [
            "Affaire Module: document can not be saved (logo, t-label, ...)",
            "Affaire Module: Only unlock \"send email\" once the affaire has been saved",
            "Affaire Module: project not being saved correctly"
        ],
    },
    {
        "version": "1.9.5",
        "date": "October 2, 2024",
        "added": [
            "Client Module: Updated client preview to include a data table of available contact people",
            "Affaire Module: Implemented 'Repondre a un appel d'offre'",
            "Client Module: SAV handling per affaire",
            "Client Module: Added a progress bar to indicate profile data completion",
        ],
        "changed": [
            "Client Module: Display sales full name on assignment dialog",
            "Client Module: Display client's addresses on preview section",
            "Clients Module: Updated the account activation Email template",
            "Root Module: Removed sign up button and privated the route",
            "Clients Module:; Redirect on client save"
        ],
        "fixed": [
            "Client Module: Refactored the route guard to handle client access correctly",
            "Client Module: Removed unecessary tabs (used for testing)",
            "Client's Module: Fixed pre-populated client form",
            "Affaire Module: Added unique constraint for project name (per client)",
            "Affaire Module: Disabled action buttons while affaire is still being created"
        ],
    },
    {
        "version": "1.0.0",
        "date": "September 20, 2024",
        "added": [
            "Clients Module",
            "",
            "----- List all available clients",
            "----- Delete existing clients",
            "----- List client's orders",
            "----- List client's contact people",
            "----- List client's documents (rapport de visite, ...)",
            "----- Update client's data",
            "-------- Manage contact people",
            "-------- Manage rapport de visite",
            "-------- Update client's survey (qualité)",
            "----- Assign client to sales agent",
            "----- Activate/Deactivate CMS access",
            "----- Activate/Deactivate contact person account",
            "",

            "Affaire Module",
            "",
            "----- List available affaire created by authenticated sales agent",
            "----- List affaire related to assigned clients",
            "----- Create new orders for specific clients (default expiration date set to 30 days)",
            "-------- Manage clients' projects",
            "-------- Manage articles (oer color per size)",
            "-------- Checkout page to manage client's additinal info (address, contact person, dates, ...)",
            "----- Notify client via Email",
            "-------- Customize email template with header and footer text",
            "-------- Select which contact person to be notified",
            "-------- Re-send confirmation email any time",
            "",

            "Root Module",
            "",
            "----- Allow sales to authenticate using already created credentials",
            "----- Allow guest users to request accounts (sign up)",
            "-------- Add guest users as additional contact to already existing company (based on matching tax_id)",
            "----- Necessary boilerplate to structure the overall layout of the application",
            "-------- Routing",
            "-------- Shared elements between modules"
        ],
        "changed": [],
        "fixed": [],
    },
];
