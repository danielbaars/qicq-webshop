const validationMessages = {
    "businessorder": {
        "1": "Er is geen <span>zakelijk of particulier<\/span> keuze aangegeven.",
        "16": "Er is geen geldige <span>zakelijk of particulier<\/span> optie gekozen."
    },
    "company": {
        "1": "Er is geen <span>bedrijfsnaam<\/span> ingevuld.",
        "8": "Er is een te lange <span>bedrijfsnaam<\/span> ingevuld."
    },
    "reference": {
        "1": "Er is geen <span>referentie<\/span> ingevuld.",
        "8": "Er is een te lange <span>referentie<\/span> ingevuld."
    },
    "vatNr": {
        "1": "Er is geen <span>btw-nummer<\/span> ingevuld.",
        "2": "Er is geen geldig <span>btw-nummer<\/span> ingevuld.",
        "4": "Er is een te kort <span>btw-nummer<\/span> ingevuld.",
        "8": "Er is een te lang <span>btw-nummer<\/span> ingevuld.",
        "16": "Er is geen geldig <span>btw-nummer<\/span> ingevuld."
    },
    "firstName": {
        "1": "Er is geen <span>voornaam<\/span> ingevuld.",
        "8": "Er is een te lange <span>voornaam<\/span> ingevuld."
    },
    "nameAdditions": {
        "8": "Er is een te lang <span>tussenvoegsel<\/span> ingevuld."
    },
    "gender": {
        "1": "Er is geen <span>aanhef<\/span> gekozen.",
        "16": "Er is geen geldige <span>aanhef<\/span> gekozen."
    },
    "lastName": {
        "1": "Er is geen <span>achternaam<\/span> ingevuld.",
        "8": "Er is een te lange <span>achternaam<\/span> ingevuld."
    },
    "street": {
        "1": "Er is geen <span>straatnaam<\/span> ingevuld.",
        "2": "Er is geen geldige <span>straatnaam<\/span> ingevuld (vul alleen de straatnaam in, niet uw huisnummer).",
        "8": "Er is een te lange <span>straatnaam<\/span> ingevuld."
    },
    "postalCode": {
        "1": "Er is geen <span>postcode<\/span> ingevuld.",
        "2": "Er is geen geldige <span>postcode<\/span> ingevuld.",
        "8": "Er is een te lange <span>postcode<\/span> ingevuld."
    },
    "streetNr": {
        "1": "Er is geen <span>huisnummer<\/span> ingevuld.",
        "2": "Vul alleen de cijfers van uw <span>huisnummer<\/span> in.",
        "8": "Er is een te lang <span>huisnummer<\/span> ingevuld.",
        "16": "Er is geen geldige combinatie van <span>postcode en huisnummer<\/span> ingevuld.",
        "128": "We konden jouw combinatie van <span>postcode en huisnummer<\/span> niet vinden. Klopt deze w\u00e9l? Vul dan je straatnaam en woonplaats in."
    },
    "streetNrAddition": {
        "8": "Er is een te lange <span>huisnummer toevoeging<\/span> ingevuld."
    },
    "busNr": {
        "8": "Er is een te lang <span>busnummer<\/span> ingevuld."
    },
    "city": {
        "1": "Er is geen <span>woonplaats<\/span> ingevuld.",
        "8": "Er is een te lange <span>plaatsnaam<\/span> ingevuld."
    },
    "alternativeshipmentaddress": {
        "1": "Er is geen afwijkend <span>afleveradres<\/span> selectie ingevuld."
    },
    "shipmentaddress_streetAddition": {
        "8": "Er is een te lange <span>aanvulling<\/span> ingevuld."
    },
    "shipmentaddress_firstName": {
        "1": "Er is geen <span>voornaam<\/span> ingevuld.",
        "8": "Er is een te lange <span>voornaam<\/span> ingevuld."
    },
    "shipmentaddress_nameAdditions": {
        "8": "Er is een te lang <span>tussenvoegsel<\/span> ingevuld."
    },
    "shipmentaddress_gender": {
        "1": "Er is geen <span>aanhef<\/span> ingevuld."
    },
    "shipmentaddress_lastName": {
        "1": "Er is geen <span>achternaam<\/span> ingevuld.",
        "8": "Er is een te lange <span>achternaam<\/span> ingevuld."
    },
    "shipmentaddress_street": {
        "1": "Er is geen <span>straatnaam<\/span> ingevuld.",
        "8": "Er is een te lange <span>straatnaam<\/span> ingevuld."
    },
    "shipmentaddress_postalCode": {
        "1": "Er is geen <span>postcode<\/span> ingevuld.",
        "2": "Er is geen geldige <span>postcode<\/span> ingevuld.",
        "8": "Er is een te lange <span>postcode<\/span> ingevuld."
    },
    "shipmentaddress_city": {
        "1": "Er is geen <span>woonplaats<\/span> ingevuld.",
        "8": "Er is een te lange <span>plaatsnaam<\/span> ingevuld."
    },
    "shipmentaddress_streetNr": {
        "1": "Er is geen <span>huisnummer<\/span> ingevuld.",
        "8": "Er is een te lang <span>huisnummer<\/span> ingevuld.",
        "16": "Er is geen geldige combinatie van <span>postcode en huisnummer<\/span> ingevuld.",
        "128": "We konden jouw combinatie van <span>postcode en huisnummer<\/span> niet vinden. Klopt deze w\u00e9l? Vul dan je straatnaam en woonplaats in."
    },
    "shipmentaddress_streetNrAddition": {
        "8": "Er is een te lange <span>huisnummer toevoeging<\/span> ingevuld."
    },
    "shipmentaddress_busNr": {
        "8": "Er is een te lang <span>busnummer<\/span> ingevuld."
    },
    "email": {
        "1": "Er is geen <span>e-mailadres<\/span> ingevuld.",
        "2": "Er is geen geldig <span>e-mailadres<\/span> ingevuld. Controleer of het e-mailadres een @ en een punt bevat. En of er geen spaties in staan.",
        "4": "Er is een te kort <span>e-mailadres<\/span> ingevuld.",
        "8": "Er is een te lang <span>e-mailadres<\/span> ingevuld."
    },
    "telephone": {
        "1": "Er is geen <span>telefoonnummer<\/span> ingevuld.",
        "2": "Er is geen geldig <span>telefoonnummer<\/span> ingevuld.",
        "4": "Er is een te kort <span>telefoonnummer<\/span> ingevuld.",
        "8": "Er is een te lang <span>telefoonnummer<\/span> ingevuld."
    },
    "invoiceDeliveryMethodId": {
        "1": "Er is geen <span>verzendwijze<\/span> van het factuur gekozen.",
        "16": "Er is geen geldige <span>verzendwijze<\/span> opgegeven."
    },
    "newsletter": {
        "1": "Er is geen <span>nieuwsbrief keuze<\/span> gemaakt.",
        "2": "Er is geen geldige <span>nieuwsbrief keuze<\/span> opgegeven.",
        "4": "Er is een te korte waarde ingevuld voor de <span>nieuwsbrief keuze<\/span>.",
        "8": "Er is geen geldige <span>nieuwsbrief keuze<\/span> opgegeven."
    },
    "password": {
        "1": "Er is geen <span>wachtwoord<\/span> ingevuld.",
        "4": "Er is een te kort <span>wachtwoord<\/span> ingevuld.",
        "8": "Er is een te lang <span>wachtwoord<\/span> ingevuld.",
        "2": "Het <span>bevestigingswachtwoord<\/span> moet gelijk zijn aan het wachtwoord.",
        "16": "Het <span>bevestigingswachtwoord<\/span> moet gelijk zijn aan het wachtwoord."
    },
    "confirmPassword": {
        "1": "Er is geen <span>bevestigingswachtwoord<\/span> ingevuld.",
        "4": "Er is een te kort <span>bevestigingswachtwoord<\/span> ingevuld.",
        "2": "Het <span>bevestigingswachtwoord<\/span> moet gelijk zijn aan het wachtwoord.",
        "8": "Er is een te lang <span>bevestigingswachtwoord<\/span> ingevuld.",
        "16": "Het <span>bevestigingswachtwoord<\/span> moet gelijk zijn aan het wachtwoord."
    }
};

export default validationMessages;
