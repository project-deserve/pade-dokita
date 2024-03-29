initiate();
loadJS("settings.js");		

function initiate() {
	this.manifest = {
		"name": chrome.i18n ? chrome.i18n.getMessage('manifest_extensionName') + " | " + chrome.runtime.getManifest().version : "Project Deserve | 0.0.1",
		"icon": "../img/logo_32.png",
		"settings": [
			{
				"tab": i18n.get("Configuration"),
				"group": i18n.get("Connection"),
				"name": "pade_enable_converse",
				"type": "checkbox",
				"label": i18n.get("Enable Instant Messaging")
			},		
			{
				"tab": i18n.get("Configuration"),
				"group": i18n.get("Connection"),
				"name": "pade_domain",
				"type": "text",
				"label": i18n.get("Domain"),
				"text": "example.com"
			},
			{
				"tab": i18n.get("Configuration"),
				"group": i18n.get("Connection"),
				"name": "pade_server_url",
				"type": "text",
				"label": i18n.get("Server Url"),
				"text": "https://example.com:7443"
			},			
			{
				"tab": i18n.get("Configuration"),
				"group": i18n.get("Connection"),
				"name": "pade_access_token",
				"type": "text",
				"label": i18n.get("Access Token"),
				"text": "Enter your acces token",
				"masked": true			
			},
			{
				"tab": i18n.get("Configuration"),
				"group": i18n.get("Login"),
				"name": "pade_username",
				"type": "text",
				"label": i18n.get("Username"),
				"text": i18n.get("anotheruser")
			},			
			{
				"tab": i18n.get("Configuration"),
				"group": i18n.get("Login"),
				"name": "pade_name",
				"type": "text",
				"label": i18n.get("Display Name"),
				"text": i18n.get("Another User")
			},
			{
				"tab": i18n.get("Configuration"),
				"group": i18n.get("Login"),
				"name": "pade_email",
				"type": "text",
				"label": i18n.get("Email"),
				"text": "anotheruser@domain"
			},	
						{
				"tab": i18n.get("Configuration"),
				"group": i18n.get("Printer"),
				"name": "pade_printer_name",
				"type": "popupButton",
				"label": i18n.get("Device"),
				"options": [
					{"text": "Thermal Receipt Printer", "value": "POS-58"},
				]
			},										
			{
				"tab": i18n.get("Configuration"),
				"group": i18n.get("User Interface"),
				"name": "pade_contry_code",
				"type": "popupButton",
				"label": i18n.get("Country Code"),
				"options": [
					{"text": "Algeria", "value": "ar-DZ"},
					{"text": "Argentina", "value": "es-AR"},
					{"text": "Australia", "value": "en-AU"},
					{"text": "Bahrain", "value": "ar-BH"},
					{"text": "Bolivia", "value": "es-BO"},
					{"text": "Brazil", "value": "pt-BR"},
					{"text": "Bulgaria", "value": "bg-BG"},
					{"text": "Canada", "value": "en-CA"},
					{"text": "Chile", "value": "es-CL"},
					{"text": "China (Simp.)", "value": "cmn-Hans-CN"},
					{"text": "Colombia", "value": "es-CO"},
					{"text": "Costa Rica", "value": "es-CR"},
					{"text": "Croatia", "value": "hr_HR"},
					{"text": "Czech Republic", "value": "cs-CZ"},
					{"text": "Denmark", "value": "da-DK"},
					{"text": "Dominican Republic", "value": "es-DO"},
					{"text": "Ecuador", "value": "es-EC"},
					{"text": "Egypt", "value": "ar-EG"},
					{"text": "El Salvador", "value": "es-SV"},
					{"text": "Finland", "value": "fi-FI"},
					{"text": "France", "value": "fr-FR"},
					{"text": "Germany", "value": "de-DE"},
					{"text": "Greece", "value": "el-GR"},
					{"text": "Guatemala", "value": "es-GT"},
					{"text": "Honduras", "value": "es-HN"},
					{"text": "Hong Kong SAR (Trad.)", "value": "cmn-Hans-HK"},
					{"text": "Hong Kong", "value": "yue-Hant-HK"},
					{"text": "Hungary", "value": "hu-HU"},
					{"text": "Iceland", "value": "is-IS"},
					{"text": "India", "value": "en-IN"},
					{"text": "India", "value": "hi-IN"},
					{"text": "Indonesia", "value": "id-ID"},
					{"text": "Iran", "value": "fa-IR"},
					{"text": "Iraq", "value": "ar-IQ"},
					{"text": "Ireland", "value": "en-IE"},
					{"text": "Israel", "value": "he-IL"},
					{"text": "Israel", "value": "ar-IL"},
					{"text": "Italy", "value": "it-IT"},
					{"text": "Japan", "value": "ja-JP"},
					{"text": "Jordan", "value": "ar-JO"},
					{"text": "Korea", "value": "ko-KR"},
					{"text": "Kuwait", "value": "ar-KW"},
					{"text": "Lebanon", "value": "ar-LB"},
					{"text": "Lithuania", "value": "lt-LT"},
					{"text": "Malaysia", "value": "ms-MY"},
					{"text": "Morocco", "value": "ar-MA"},
					{"text": "México", "value": "es-MX"},
					{"text": "Netherlands", "value": "nl-NL"},
					{"text": "New Zealand", "value": "en-NZ"},
					{"text": "Nicaragua", "value": "es-NI"},
					{"text": "Norway", "value": "nb-NO"},
					{"text": "Oman", "value": "ar-OM"},
					{"text": "Palestinian Territory", "value": "ar-PS"},
					{"text": "Panamá", "value": "es-PA"},
					{"text": "Paraguay", "value": "es-PY"},
					{"text": "Perú", "value": "es-PE"},
					{"text": "Philippines", "value": "en-PH"},
					{"text": "Philippines", "value": "fil-PH"},
					{"text": "Poland", "value": "pl-PL"},
					{"text": "Portugal", "value": "pt-PT"},
					{"text": "Puerto Rico", "value": "es-PR"},
					{"text": "Qatar", "value": "ar-QA"},
					{"text": "Romania", "value": "ro-RO"},
					{"text": "Russia", "value": "ru-RU"},
					{"text": "Saudi Arabia", "value": "ar-SA"},
					{"text": "Serbia", "value": "sr-RS"},
					{"text": "Slovakia", "value": "sk-SK"},
					{"text": "Slovenia", "value": "sl-SI"},
					{"text": "South Africa", "value": "en-ZA"},
					{"text": "Spain", "value": "es-ES"},
					{"text": "Sweden", "value": "sv-SE"},
					{"text": "Switzerland", "value": "it-CH"},
					{"text": "Taiwan (Trad.)", "value": "cmn-Hant-TW"},
					{"text": "Thailand", "value": "th-TH"},
					{"text": "Tunisia", "value": "ar-TN"},
					{"text": "Turkey", "value": "tr-TR"},
					{"text": "UAE", "value": "ar-AE"},
					{"text": "Ukraine", "value": "uk-UA"},
					{"text": "United Kingdom", "value": "en-GB"},
					{"text": "United States", "value": "en-US"},
					{"text": "Uruguay", "value": "es-UY"},
					{"text": "Venezuela", "value": "es-VE"},
					{"text": "Viet Nam", "value": "vi-VN"}
				]
			},	
			{
				"tab": i18n.get("Configuration"),
				"group": i18n.get("Action"),
				"name": "pade_save",
				"type": "button",
				"text": i18n.get("Save")			
			},
			{
				"tab": i18n.get("Configuration"),
				"group": i18n.get("Action"),
				"name": "testPrinter",
				"type": "button",
				"text": i18n.get("Test Printer")
			},			
			{
				"tab": i18n.get("Configuration"),
				"group": i18n.get("Action"),
				"name": "factoryReset",
				"type": "button",
				"text": i18n.get("Factory Reset")
			},	
			{
				"tab": i18n.get("Configuration"),
				"group": i18n.get("Action"),
				"name": "actionResponse",
				"type": "description",
				"text": ""
			},			
			
		],
		"alignment": [
			[	"pade_domain",
				"pade_server_url",
				"pade_access_token",
				"pade_username",
				"pade_name",
				"pade_email"
			]		
		]
	};
}

function loadJS(name)
{
	console.debug("loadJS", name);
	var head  = document.getElementsByTagName('head')[0];
	var s1 = document.createElement('script');
	s1.src = name;
	s1.async = false;
	head.appendChild(s1);
}
	
function setSetting(name, value)
{
    console.debug("setSetting", name, value);
    window.localStorage["store.settings." + name] = JSON.stringify(value);
}

function setDefaultSetting(name, defaultValue)
{
    console.debug("setDefaultSetting", name, defaultValue, window.localStorage["store.settings." + name]);

    if (!window.localStorage["store.settings." + name] && window.localStorage["store.settings." + name] != false)
    {
        if (defaultValue) window.localStorage["store.settings." + name] = JSON.stringify(defaultValue);
    }
}

function getSetting(name, defaultValue)
{
    console.debug("getSetting", name);
    var value = defaultValue ? defaultValue : null;

    if (window.localStorage["store.settings." + name])
    {
        value = JSON.parse(window.localStorage["store.settings." + name]);
    }

    return value;
}

function removeSetting(name)
{
    localStorage.removeItem("store.settings." + name);
}

function getPassword(password)
{
    if (!password || password == "") return null;
    if (password.startsWith("token-")) return atob(password.substring(6));

    window.localStorage["store.settings.password"] = JSON.stringify("token-" + btoa(password));
    return password;
}

function getStaticSetting(name)
{
    let zindex = -1;

    for (let z=0; z<this.manifest.settings.length; z++)
    {
        if (name === this.manifest.settings[z].name)
        {
            zindex = z;
            break;
        }
    }
    return zindex;
}

// branding overrides
var overrides = Object.getOwnPropertyNames(branding);

console.debug("branding - start", overrides, branding, this.manifest.settings);

for (var i=0; i<overrides.length; i++)
{
    var setting = overrides[i];
    var override = branding[setting];

    var index = getStaticSetting(setting);

    if ( index > -1)
    {
        if (override.value != null && override.value != undefined)
        {
            var oldSetting = this.manifest.settings[index]

            if (oldSetting.type == "description")
            {
                oldSetting.text = override.value
            }

            if (!window.localStorage["store.settings." + setting])  // override default value
            {
                window.localStorage["store.settings." + setting] = JSON.stringify(override.value);
            }
        }

        if (override.disable) this.manifest.settings.splice(index, 1);
    }

    console.debug("branding - found", i, index, setting, override.value, override.disable, window.localStorage["store.settings." + setting]);
}