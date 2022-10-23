const cities = [
 {
   "city": "Tokyo",
   "lat": 35.6839,
   "lng": 139.7744,
   "country": "Japan",
   "iso2": "JP",
   "iso3": "JPN",
   "capital": "primary",
   "population": 39105000
 },
 {
   "city": "Jakarta",
   "lat": -6.2146,
   "lng": 106.8451,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "primary",
   "population": 35362000
 },
 {
   "city": "Manila",
   "lat": 14.6,
   "lng": 120.9833,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "primary",
   "population": 23971000
 },
 {
   "city": "Seoul",
   "lat": 37.56,
   "lng": 126.99,
   "country": "South Korea",
   "iso2": "KR",
   "iso3": "KOR",
   "capital": "primary",
   "population": 22394000
 },
 {
   "city": "Mexico City",
   "lat": 19.4333,
   "lng": -99.1333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "primary",
   "population": 21505000
 },
 {
   "city": "Cairo",
   "lat": 30.0444,
   "lng": 31.2358,
   "country": "Egypt",
   "iso2": "EG",
   "iso3": "EGY",
   "capital": "primary",
   "population": 19787000
 },
 {
   "city": "Beijing",
   "lat": 39.904,
   "lng": 116.4075,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "primary",
   "population": 19437000
 },
 {
   "city": "Moscow",
   "lat": 55.7558,
   "lng": 37.6178,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "primary",
   "population": 17693000
 },
 {
   "city": "Bangkok",
   "lat": 13.75,
   "lng": 100.5167,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "primary",
   "population": 17573000
 },
 {
   "city": "Dhaka",
   "lat": 23.7289,
   "lng": 90.3944,
   "country": "Bangladesh",
   "iso2": "BD",
   "iso3": "BGD",
   "capital": "primary",
   "population": 16839000
 },
 {
   "city": "Buenos Aires",
   "lat": -34.5997,
   "lng": -58.3819,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "primary",
   "population": 16216000
 },
 {
   "city": "Kinshasa",
   "lat": -4.3317,
   "lng": 15.3139,
   "country": "Congo (Kinshasa)",
   "iso2": "CD",
   "iso3": "COD",
   "capital": "primary",
   "population": 15056000
 },
 {
   "city": "Tehran",
   "lat": 35.7,
   "lng": 51.4167,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "primary",
   "population": 13819000
 },
 {
   "city": "London",
   "lat": 51.5072,
   "lng": -0.1275,
   "country": "United Kingdom",
   "iso2": "GB",
   "iso3": "GBR",
   "capital": "primary",
   "population": 11120000
 },
 {
   "city": "Paris",
   "lat": 48.8566,
   "lng": 2.3522,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "primary",
   "population": 11027000
 },
 {
   "city": "Lima",
   "lat": -12.06,
   "lng": -77.0375,
   "country": "Peru",
   "iso2": "PE",
   "iso3": "PER",
   "capital": "primary",
   "population": 8992000
 },
 {
   "city": "Luanda",
   "lat": -8.8383,
   "lng": 13.2344,
   "country": "Angola",
   "iso2": "AO",
   "iso3": "AGO",
   "capital": "primary",
   "population": 8883000
 },
 {
   "city": "Kuala Lumpur",
   "lat": 3.1478,
   "lng": 101.6953,
   "country": "Malaysia",
   "iso2": "MY",
   "iso3": "MYS",
   "capital": "primary",
   "population": 8639000
 },
 {
   "city": "Hanoi",
   "lat": 21.0245,
   "lng": 105.8412,
   "country": "Vietnam",
   "iso2": "VN",
   "iso3": "VNM",
   "capital": "primary",
   "population": 8246600
 },
 {
   "city": "Bogotá",
   "lat": 4.6126,
   "lng": -74.0705,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "primary",
   "population": 7743955
 },
 {
   "city": "Dar es Salaam",
   "lat": -6.8,
   "lng": 39.2833,
   "country": "Tanzania",
   "iso2": "TZ",
   "iso3": "TZA",
   "capital": "primary",
   "population": 7461000
 },
 {
   "city": "Hong Kong",
   "lat": 22.3069,
   "lng": 114.1831,
   "country": "Hong Kong",
   "iso2": "HK",
   "iso3": "HKG",
   "capital": "primary",
   "population": 7398000
 },
 {
   "city": "Santiago",
   "lat": -33.45,
   "lng": -70.6667,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "primary",
   "population": 7026000
 },
 {
   "city": "Riyadh",
   "lat": 24.65,
   "lng": 46.71,
   "country": "Saudi Arabia",
   "iso2": "SA",
   "iso3": "SAU",
   "capital": "primary",
   "population": 6889000
 },
 {
   "city": "Baghdad",
   "lat": 33.35,
   "lng": 44.4167,
   "country": "Iraq",
   "iso2": "IQ",
   "iso3": "IRQ",
   "capital": "primary",
   "population": 6107000
 },
 {
   "city": "Khartoum",
   "lat": 15.6031,
   "lng": 32.5265,
   "country": "Sudan",
   "iso2": "SD",
   "iso3": "SDN",
   "capital": "primary",
   "population": 6017000
 },
 {
   "city": "Madrid",
   "lat": 40.4167,
   "lng": -3.7167,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "primary",
   "population": 6006000
 },
 {
   "city": "Nairobi",
   "lat": -1.2864,
   "lng": 36.8172,
   "country": "Kenya",
   "iso2": "KE",
   "iso3": "KEN",
   "capital": "primary",
   "population": 5545000
 },
 {
   "city": "Rangoon",
   "lat": 16.795,
   "lng": 96.16,
   "country": "Myanmar",
   "iso2": "MM",
   "iso3": "MMR",
   "capital": "primary",
   "population": 5430000
 },
 {
   "city": "Washington",
   "lat": 38.9047,
   "lng": -77.0163,
   "country": "United States",
   "iso2": "US",
   "iso3": "USA",
   "capital": "primary",
   "population": 5379184
 },
 {
   "city": "Singapore",
   "lat": 1.3,
   "lng": 103.8,
   "country": "Singapore",
   "iso2": "SG",
   "iso3": "SGP",
   "capital": "primary",
   "population": 5271000
 },
 {
   "city": "Abidjan",
   "lat": 5.3364,
   "lng": -4.0267,
   "country": "Côte d'Ivoire",
   "iso2": "CI",
   "iso3": "CIV",
   "capital": "primary",
   "population": 4980000
 },
 {
   "city": "Kabul",
   "lat": 34.5328,
   "lng": 69.1658,
   "country": "Afghanistan",
   "iso2": "AF",
   "iso3": "AFG",
   "capital": "primary",
   "population": 4273156
 },
 {
   "city": "Amman",
   "lat": 31.95,
   "lng": 35.9333,
   "country": "Jordan",
   "iso2": "JO",
   "iso3": "JOR",
   "capital": "primary",
   "population": 4007526
 },
 {
   "city": "Berlin",
   "lat": 52.5167,
   "lng": 13.3833,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "primary",
   "population": 3664088
 },
 {
   "city": "Algiers",
   "lat": 36.7764,
   "lng": 3.0586,
   "country": "Algeria",
   "iso2": "DZ",
   "iso3": "DZA",
   "capital": "primary",
   "population": 3415811
 },
 {
   "city": "Addis Ababa",
   "lat": 9.0272,
   "lng": 38.7369,
   "country": "Ethiopia",
   "iso2": "ET",
   "iso3": "ETH",
   "capital": "primary",
   "population": 3041002
 },
 {
   "city": "Brasília",
   "lat": -15.7939,
   "lng": -47.8828,
   "country": "Brazil",
   "iso2": "BR",
   "iso3": "BRA",
   "capital": "primary",
   "population": 3015268
 },
 {
   "city": "Kuwait City",
   "lat": 29.375,
   "lng": 47.98,
   "country": "Kuwait",
   "iso2": "KW",
   "iso3": "KWT",
   "capital": "primary",
   "population": 2989000
 },
 {
   "city": "Kyiv",
   "lat": 50.45,
   "lng": 30.5236,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "primary",
   "population": 2963199
 },
 {
   "city": "Sanaa",
   "lat": 15.35,
   "lng": 44.2,
   "country": "Yemen",
   "iso2": "YE",
   "iso3": "YEM",
   "capital": "primary",
   "population": 2957000
 },
 {
   "city": "Guatemala City",
   "lat": 14.6099,
   "lng": -90.5252,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "primary",
   "population": 2934841
 },
 {
   "city": "Rome",
   "lat": 41.8931,
   "lng": 12.4828,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "primary",
   "population": 2872800
 },
 {
   "city": "La Paz",
   "lat": -16.4942,
   "lng": -68.1475,
   "country": "Bolivia",
   "iso2": "BO",
   "iso3": "BOL",
   "capital": "primary",
   "population": 2867504
 },
 {
   "city": "Pyongyang",
   "lat": 39.03,
   "lng": 125.73,
   "country": "North Korea",
   "iso2": "KP",
   "iso3": "PRK",
   "capital": "primary",
   "population": 2863000
 },
 {
   "city": "Antananarivo",
   "lat": -18.9386,
   "lng": 47.5214,
   "country": "Madagascar",
   "iso2": "MG",
   "iso3": "MDG",
   "capital": "primary",
   "population": 2610000
 },
 {
   "city": "Santo Domingo",
   "lat": 18.4764,
   "lng": -69.8933,
   "country": "Dominican Republic",
   "iso2": "DO",
   "iso3": "DOM",
   "capital": "primary",
   "population": 2581827
 },
 {
   "city": "Tashkent",
   "lat": 41.3,
   "lng": 69.2667,
   "country": "Uzbekistan",
   "iso2": "UZ",
   "iso3": "UZB",
   "capital": "primary",
   "population": 2497900
 },
 {
   "city": "Ouagadougou",
   "lat": 12.3686,
   "lng": -1.5275,
   "country": "Burkina Faso",
   "iso2": "BF",
   "iso3": "BFA",
   "capital": "primary",
   "population": 2453496
 },
 {
   "city": "Yaoundé",
   "lat": 3.8578,
   "lng": 11.5181,
   "country": "Cameroon",
   "iso2": "CM",
   "iso3": "CMR",
   "capital": "primary",
   "population": 2440462
 },
 {
   "city": "Accra",
   "lat": 5.6037,
   "lng": -0.187,
   "country": "Ghana",
   "iso2": "GH",
   "iso3": "GHA",
   "capital": "primary",
   "population": 2291352
 },
 {
   "city": "Baku",
   "lat": 40.3667,
   "lng": 49.8352,
   "country": "Azerbaijan",
   "iso2": "AZ",
   "iso3": "AZE",
   "capital": "primary",
   "population": 2181800
 },
 {
   "city": "Harare",
   "lat": -17.8292,
   "lng": 31.0522,
   "country": "Zimbabwe",
   "iso2": "ZW",
   "iso3": "ZWE",
   "capital": "primary",
   "population": 2150000
 },
 {
   "city": "Havana",
   "lat": 23.1367,
   "lng": -82.3589,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "primary",
   "population": 2141652
 },
 {
   "city": "Phnom Penh",
   "lat": 11.5696,
   "lng": 104.921,
   "country": "Cambodia",
   "iso2": "KH",
   "iso3": "KHM",
   "capital": "primary",
   "population": 2129371
 },
 {
   "city": "Mogadishu",
   "lat": 2.0408,
   "lng": 45.3425,
   "country": "Somalia",
   "iso2": "SO",
   "iso3": "SOM",
   "capital": "primary",
   "population": 2120000
 },
 {
   "city": "Quito",
   "lat": -0.22,
   "lng": -78.5125,
   "country": "Ecuador",
   "iso2": "EC",
   "iso3": "ECU",
   "capital": "primary",
   "population": 2011388
 },
 {
   "city": "Minsk",
   "lat": 53.9022,
   "lng": 27.5618,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "primary",
   "population": 2009786
 },
 {
   "city": "Bamako",
   "lat": 12.6458,
   "lng": -7.9922,
   "country": "Mali",
   "iso2": "ML",
   "iso3": "MLI",
   "capital": "primary",
   "population": 2009109
 },
 {
   "city": "Caracas",
   "lat": 10.5,
   "lng": -66.9333,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "primary",
   "population": 1943901
 },
 {
   "city": "Vienna",
   "lat": 48.2083,
   "lng": 16.3725,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "primary",
   "population": 1911191
 },
 {
   "city": "Bucharest",
   "lat": 44.4,
   "lng": 26.0833,
   "country": "Romania",
   "iso2": "RO",
   "iso3": "ROU",
   "capital": "primary",
   "population": 1883425
 },
 {
   "city": "Brazzaville",
   "lat": -4.2667,
   "lng": 15.2833,
   "country": "Congo (Brazzaville)",
   "iso2": "CG",
   "iso3": "COG",
   "capital": "primary",
   "population": 1827000
 },
 {
   "city": "Warsaw",
   "lat": 52.23,
   "lng": 21.0111,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "primary",
   "population": 1790658
 },
 {
   "city": "Damascus",
   "lat": 33.5131,
   "lng": 36.2919,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "primary",
   "population": 1754000
 },
 {
   "city": "Brussels",
   "lat": 50.8353,
   "lng": 4.3314,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "primary",
   "population": 1743000
 },
 {
   "city": "Lusaka",
   "lat": -15.4167,
   "lng": 28.2833,
   "country": "Zambia",
   "iso2": "ZM",
   "iso3": "ZMB",
   "capital": "primary",
   "population": 1742979
 },
 {
   "city": "Budapest",
   "lat": 47.4983,
   "lng": 19.0408,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "primary",
   "population": 1723836
 },
 {
   "city": "Conakry",
   "lat": 9.538,
   "lng": -13.6773,
   "country": "Guinea",
   "iso2": "GN",
   "iso3": "GIN",
   "capital": "primary",
   "population": 1667864
 },
 {
   "city": "Kampala",
   "lat": 0.3136,
   "lng": 32.5811,
   "country": "Uganda",
   "iso2": "UG",
   "iso3": "UGA",
   "capital": "primary",
   "population": 1659600
 },
 {
   "city": "Abu Dhabi",
   "lat": 24.4511,
   "lng": 54.3969,
   "country": "United Arab Emirates",
   "iso2": "AE",
   "iso3": "ARE",
   "capital": "primary",
   "population": 1483000
 },
 {
   "city": "Muscat",
   "lat": 23.6139,
   "lng": 58.5922,
   "country": "Oman",
   "iso2": "OM",
   "iso3": "OMN",
   "capital": "primary",
   "population": 1421409
 },
 {
   "city": "Ulaanbaatar",
   "lat": 47.9214,
   "lng": 106.9055,
   "country": "Mongolia",
   "iso2": "MN",
   "iso3": "MNG",
   "capital": "primary",
   "population": 1396288
 },
 {
   "city": "Belgrade",
   "lat": 44.8167,
   "lng": 20.4667,
   "country": "Serbia",
   "iso2": "RS",
   "iso3": "SRB",
   "capital": "primary",
   "population": 1378682
 },
 {
   "city": "Prague",
   "lat": 50.0833,
   "lng": 14.4167,
   "country": "Czechia",
   "iso2": "CZ",
   "iso3": "CZE",
   "capital": "primary",
   "population": 1335084
 },
 {
   "city": "Montevideo",
   "lat": -34.8667,
   "lng": -56.1667,
   "country": "Uruguay",
   "iso2": "UY",
   "iso3": "URY",
   "capital": "primary",
   "population": 1319108
 },
 {
   "city": "Sofia",
   "lat": 42.6979,
   "lng": 23.3217,
   "country": "Bulgaria",
   "iso2": "BG",
   "iso3": "BGR",
   "capital": "primary",
   "population": 1277411
 },
 {
   "city": "Abuja",
   "lat": 9.0556,
   "lng": 7.4914,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "primary",
   "population": 1235880
 },
 {
   "city": "Maputo",
   "lat": -25.9153,
   "lng": 32.5764,
   "country": "Mozambique",
   "iso2": "MZ",
   "iso3": "MOZ",
   "capital": "primary",
   "population": 1191613
 },
 {
   "city": "Doha",
   "lat": 25.3,
   "lng": 51.5333,
   "country": "Qatar",
   "iso2": "QA",
   "iso3": "QAT",
   "capital": "primary",
   "population": 1186023
 },
 {
   "city": "Nay Pyi Taw",
   "lat": 19.7475,
   "lng": 96.115,
   "country": "Myanmar",
   "iso2": "MM",
   "iso3": "MMR",
   "capital": "primary",
   "population": 1160242
 },
 {
   "city": "Kigali",
   "lat": -1.9536,
   "lng": 30.0606,
   "country": "Rwanda",
   "iso2": "RW",
   "iso3": "RWA",
   "capital": "primary",
   "population": 1156663
 },
 {
   "city": "Dakar",
   "lat": 14.7319,
   "lng": -17.4572,
   "country": "Senegal",
   "iso2": "SN",
   "iso3": "SEN",
   "capital": "primary",
   "population": 1146053
 },
 {
   "city": "Tegucigalpa",
   "lat": 14.0942,
   "lng": -87.2067,
   "country": "Honduras",
   "iso2": "HN",
   "iso3": "HND",
   "capital": "primary",
   "population": 1126534
 },
 {
   "city": "Tripoli",
   "lat": 32.8752,
   "lng": 13.1875,
   "country": "Libya",
   "iso2": "LY",
   "iso3": "LBY",
   "capital": "primary",
   "population": 1126000
 },
 {
   "city": "Tbilisi",
   "lat": 41.7225,
   "lng": 44.7925,
   "country": "Georgia",
   "iso2": "GE",
   "iso3": "GEO",
   "capital": "primary",
   "population": 1118035
 },
 {
   "city": "N’Djamena",
   "lat": 12.11,
   "lng": 15.05,
   "country": "Chad",
   "iso2": "TD",
   "iso3": "TCD",
   "capital": "primary",
   "population": 1092066
 },
 {
   "city": "Copenhagen",
   "lat": 55.6805,
   "lng": 12.5615,
   "country": "Denmark",
   "iso2": "DK",
   "iso3": "DNK",
   "capital": "primary",
   "population": 1085000
 },
 {
   "city": "Nur-Sultan",
   "lat": 51.1333,
   "lng": 71.4333,
   "country": "Kazakhstan",
   "iso2": "KZ",
   "iso3": "KAZ",
   "capital": "primary",
   "population": 1078362
 },
 {
   "city": "Nouakchott",
   "lat": 18.0858,
   "lng": -15.9785,
   "country": "Mauritania",
   "iso2": "MR",
   "iso3": "MRT",
   "capital": "primary",
   "population": 1077169
 },
 {
   "city": "Yerevan",
   "lat": 40.1814,
   "lng": 44.5144,
   "country": "Armenia",
   "iso2": "AM",
   "iso3": "ARM",
   "capital": "primary",
   "population": 1075800
 },
 {
   "city": "Tunis",
   "lat": 36.8008,
   "lng": 10.18,
   "country": "Tunisia",
   "iso2": "TN",
   "iso3": "TUN",
   "capital": "primary",
   "population": 1056247
 },
 {
   "city": "Bishkek",
   "lat": 42.8667,
   "lng": 74.5667,
   "country": "Kyrgyzstan",
   "iso2": "KG",
   "iso3": "KGZ",
   "capital": "primary",
   "population": 1053900
 },
 {
   "city": "Managua",
   "lat": 12.15,
   "lng": -86.2667,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "primary",
   "population": 1028808
 },
 {
   "city": "Niamey",
   "lat": 13.5086,
   "lng": 2.1111,
   "country": "Niger",
   "iso2": "NE",
   "iso3": "NER",
   "capital": "primary",
   "population": 1026848
 },
 {
   "city": "Monrovia",
   "lat": 6.3106,
   "lng": -10.8047,
   "country": "Liberia",
   "iso2": "LR",
   "iso3": "LBR",
   "capital": "primary",
   "population": 1021762
 },
 {
   "city": "Islamabad",
   "lat": 33.6989,
   "lng": 73.0369,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "primary",
   "population": 1014825
 },
 {
   "city": "Ottawa",
   "lat": 45.4247,
   "lng": -75.695,
   "country": "Canada",
   "iso2": "CA",
   "iso3": "CAN",
   "capital": "primary",
   "population": 989567
 },
 {
   "city": "Port-au-Prince",
   "lat": 18.5425,
   "lng": -72.3386,
   "country": "Haiti",
   "iso2": "HT",
   "iso3": "HTI",
   "capital": "primary",
   "population": 987310
 },
 {
   "city": "Stockholm",
   "lat": 59.3294,
   "lng": 18.0686,
   "country": "Sweden",
   "iso2": "SE",
   "iso3": "SWE",
   "capital": "primary",
   "population": 975819
 },
 {
   "city": "Kathmandu",
   "lat": 27.7167,
   "lng": 85.3667,
   "country": "Nepal",
   "iso2": "NP",
   "iso3": "NPL",
   "capital": "primary",
   "population": 975453
 },
 {
   "city": "Asmara",
   "lat": 15.3333,
   "lng": 38.9167,
   "country": "Eritrea",
   "iso2": "ER",
   "iso3": "ERI",
   "capital": "primary",
   "population": 963000
 },
 {
   "city": "Freetown",
   "lat": 8.4833,
   "lng": -13.2331,
   "country": "Sierra Leone",
   "iso2": "SL",
   "iso3": "SLE",
   "capital": "primary",
   "population": 951000
 },
 {
   "city": "Vientiane",
   "lat": 17.9667,
   "lng": 102.6,
   "country": "Laos",
   "iso2": "LA",
   "iso3": "LAO",
   "capital": "primary",
   "population": 948487
 },
 {
   "city": "Jerusalem",
   "lat": 31.7833,
   "lng": 35.2167,
   "country": "Israel",
   "iso2": "IL",
   "iso3": "ISR",
   "capital": "primary",
   "population": 919438
 },
 {
   "city": "Bangui",
   "lat": 4.3732,
   "lng": 18.5628,
   "country": "Central African Republic",
   "iso2": "CF",
   "iso3": "CAF",
   "capital": "primary",
   "population": 889231
 },
 {
   "city": "Panama City",
   "lat": 9,
   "lng": -79.5,
   "country": "Panama",
   "iso2": "PA",
   "iso3": "PAN",
   "capital": "primary",
   "population": 880691
 },
 {
   "city": "Amsterdam",
   "lat": 52.3667,
   "lng": 4.8833,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "primary",
   "population": 862965
 },
 {
   "city": "Lomé",
   "lat": 6.1319,
   "lng": 1.2228,
   "country": "Togo",
   "iso2": "TG",
   "iso3": "TGO",
   "capital": "primary",
   "population": 837437
 },
 {
   "city": "Libreville",
   "lat": 0.3901,
   "lng": 9.4544,
   "country": "Gabon",
   "iso2": "GA",
   "iso3": "GAB",
   "capital": "primary",
   "population": 797003
 },
 {
   "city": "Zagreb",
   "lat": 45.8131,
   "lng": 15.9772,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "primary",
   "population": 790017
 },
 {
   "city": "Lilongwe",
   "lat": -13.9833,
   "lng": 33.7833,
   "country": "Malawi",
   "iso2": "MW",
   "iso3": "MWI",
   "capital": "primary",
   "population": 781538
 },
 {
   "city": "Dushanbe",
   "lat": 38.5731,
   "lng": 68.7864,
   "country": "Tajikistan",
   "iso2": "TJ",
   "iso3": "TJK",
   "capital": "primary",
   "population": 778500
 },
 {
   "city": "Cotonou",
   "lat": 6.402,
   "lng": 2.518,
   "country": "Benin",
   "iso2": "BJ",
   "iso3": "BEN",
   "capital": "primary",
   "population": 762000
 },
 {
   "city": "Colombo",
   "lat": 6.9167,
   "lng": 79.8333,
   "country": "Sri Lanka",
   "iso2": "LK",
   "iso3": "LKA",
   "capital": "primary",
   "population": 752993
 },
 {
   "city": "Pretoria",
   "lat": -25.7464,
   "lng": 28.1881,
   "country": "South Africa",
   "iso2": "ZA",
   "iso3": "ZAF",
   "capital": "primary",
   "population": 741651
 },
 {
   "city": "Oslo",
   "lat": 59.9111,
   "lng": 10.7528,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "primary",
   "population": 693494
 },
 {
   "city": "Athens",
   "lat": 37.9842,
   "lng": 23.7281,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "primary",
   "population": 664046
 },
 {
   "city": "Bujumbura",
   "lat": -3.3825,
   "lng": 29.3611,
   "country": "Burundi",
   "iso2": "BI",
   "iso3": "BDI",
   "capital": "primary",
   "population": 658859
 },
 {
   "city": "Helsinki",
   "lat": 60.1756,
   "lng": 24.9342,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "primary",
   "population": 642045
 },
 {
   "city": "Skopje",
   "lat": 41.9833,
   "lng": 21.4333,
   "country": "Macedonia",
   "iso2": "MK",
   "iso3": "MKD",
   "capital": "primary",
   "population": 640000
 },
 {
   "city": "Chisinau",
   "lat": 47.0228,
   "lng": 28.8353,
   "country": "Moldova",
   "iso2": "MD",
   "iso3": "MDA",
   "capital": "primary",
   "population": 639000
 },
 {
   "city": "Riga",
   "lat": 56.9475,
   "lng": 24.1069,
   "country": "Latvia",
   "iso2": "LV",
   "iso3": "LVA",
   "capital": "primary",
   "population": 614618
 },
 {
   "city": "Kingston",
   "lat": 17.9714,
   "lng": -76.7931,
   "country": "Jamaica",
   "iso2": "JM",
   "iso3": "JAM",
   "capital": "primary",
   "population": 580000
 },
 {
   "city": "Vilnius",
   "lat": 54.6833,
   "lng": 25.2833,
   "country": "Lithuania",
   "iso2": "LT",
   "iso3": "LTU",
   "capital": "primary",
   "population": 574147
 },
 {
   "city": "Rabat",
   "lat": 34.0253,
   "lng": -6.8361,
   "country": "Morocco",
   "iso2": "MA",
   "iso3": "MAR",
   "capital": "primary",
   "population": 572717
 },
 {
   "city": "San Salvador",
   "lat": 13.6989,
   "lng": -89.1914,
   "country": "El Salvador",
   "iso2": "SV",
   "iso3": "SLV",
   "capital": "primary",
   "population": 567698
 },
 {
   "city": "Djibouti",
   "lat": 11.595,
   "lng": 43.1481,
   "country": "Djibouti",
   "iso2": "DJ",
   "iso3": "DJI",
   "capital": "primary",
   "population": 562000
 },
 {
   "city": "Dublin",
   "lat": 53.3497,
   "lng": -6.2603,
   "country": "Ireland",
   "iso2": "IE",
   "iso3": "IRL",
   "capital": "primary",
   "population": 553165
 },
 {
   "city": "The Hague",
   "lat": 52.08,
   "lng": 4.31,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "primary",
   "population": 537833
 },
 {
   "city": "Asunción",
   "lat": -25.3,
   "lng": -57.6333,
   "country": "Paraguay",
   "iso2": "PY",
   "iso3": "PRY",
   "capital": "primary",
   "population": 524190
 },
 {
   "city": "Lisbon",
   "lat": 38.708,
   "lng": -9.139,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "primary",
   "population": 506654
 },
 {
   "city": "Bratislava",
   "lat": 48.1447,
   "lng": 17.1128,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "primary",
   "population": 475503
 },
 {
   "city": "Tallinn",
   "lat": 59.4372,
   "lng": 24.745,
   "country": "Estonia",
   "iso2": "EE",
   "iso3": "EST",
   "capital": "primary",
   "population": 438341
 },
 {
   "city": "Cape Town",
   "lat": -33.925,
   "lng": 18.425,
   "country": "South Africa",
   "iso2": "ZA",
   "iso3": "ZAF",
   "capital": "primary",
   "population": 433688
 },
 {
   "city": "Wellington",
   "lat": -41.2889,
   "lng": 174.7772,
   "country": "New Zealand",
   "iso2": "NZ",
   "iso3": "NZL",
   "capital": "primary",
   "population": 418500
 },
 {
   "city": "Tirana",
   "lat": 41.33,
   "lng": 19.82,
   "country": "Albania",
   "iso2": "AL",
   "iso3": "ALB",
   "capital": "primary",
   "population": 418495
 },
 {
   "city": "Dodoma",
   "lat": -6.1835,
   "lng": 35.746,
   "country": "Tanzania",
   "iso2": "TZ",
   "iso3": "TZA",
   "capital": "primary",
   "population": 410956
 },
 {
   "city": "Bissau",
   "lat": 11.8592,
   "lng": -15.5956,
   "country": "Guinea-Bissau",
   "iso2": "GW",
   "iso3": "GNB",
   "capital": "primary",
   "population": 395954
 },
 {
   "city": "Canberra",
   "lat": -35.2931,
   "lng": 149.1269,
   "country": "Australia",
   "iso2": "AU",
   "iso3": "AUS",
   "capital": "primary",
   "population": 381488
 },
 {
   "city": "Juba",
   "lat": 4.85,
   "lng": 31.6,
   "country": "South Sudan",
   "iso2": "SS",
   "iso3": "SSD",
   "capital": "primary",
   "population": 372410
 },
 {
   "city": "Beirut",
   "lat": 33.8869,
   "lng": 35.5131,
   "country": "Lebanon",
   "iso2": "LB",
   "iso3": "LBN",
   "capital": "primary",
   "population": 361366
 },
 {
   "city": "Yamoussoukro",
   "lat": 6.8161,
   "lng": -5.2742,
   "country": "Côte d'Ivoire",
   "iso2": "CI",
   "iso3": "CIV",
   "capital": "primary",
   "population": 355573
 },
 {
   "city": "Maseru",
   "lat": -29.31,
   "lng": 27.48,
   "country": "Lesotho",
   "iso2": "LS",
   "iso3": "LSO",
   "capital": "primary",
   "population": 330790
 },
 {
   "city": "Nicosia",
   "lat": 35.1725,
   "lng": 33.365,
   "country": "Cyprus",
   "iso2": "CY",
   "iso3": "CYP",
   "capital": "primary",
   "population": 330000
 },
 {
   "city": "San Juan",
   "lat": 18.4037,
   "lng": -66.0636,
   "country": "Puerto Rico",
   "iso2": "PR",
   "iso3": "PRI",
   "capital": "primary",
   "population": 323279
 },
 {
   "city": "Windhoek",
   "lat": -22.57,
   "lng": 17.0836,
   "country": "Namibia",
   "iso2": "NA",
   "iso3": "NAM",
   "capital": "primary",
   "population": 322500
 },
 {
   "city": "Port Moresby",
   "lat": -9.4789,
   "lng": 147.1494,
   "country": "Papua New Guinea",
   "iso2": "PG",
   "iso3": "PNG",
   "capital": "primary",
   "population": 317374
 },
 {
   "city": "Porto-Novo",
   "lat": 6.4833,
   "lng": 2.6167,
   "country": "Benin",
   "iso2": "BJ",
   "iso3": "BEN",
   "capital": "primary",
   "population": 300000
 },
 {
   "city": "Sucre",
   "lat": -19.0431,
   "lng": -65.2592,
   "country": "Bolivia",
   "iso2": "BO",
   "iso3": "BOL",
   "capital": "primary",
   "population": 300000
 },
 {
   "city": "San José",
   "lat": 9.9333,
   "lng": -84.0833,
   "country": "Costa Rica",
   "iso2": "CR",
   "iso3": "CRI",
   "capital": "primary",
   "population": 288054
 },
 {
   "city": "Ljubljana",
   "lat": 46.05,
   "lng": 14.5167,
   "country": "Slovenia",
   "iso2": "SI",
   "iso3": "SVN",
   "capital": "primary",
   "population": 286745
 },
 {
   "city": "Sarajevo",
   "lat": 43.8563,
   "lng": 18.4132,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "primary",
   "population": 275524
 },
 {
   "city": "Nassau",
   "lat": 25.0667,
   "lng": -77.3333,
   "country": "The Bahamas",
   "iso2": "BS",
   "iso3": "BHS",
   "capital": "primary",
   "population": 274400
 },
 {
   "city": "Bloemfontein",
   "lat": -29.1,
   "lng": 26.2167,
   "country": "South Africa",
   "iso2": "ZA",
   "iso3": "ZAF",
   "capital": "primary",
   "population": 256185
 },
 {
   "city": "Fort-de-France",
   "lat": 14.6104,
   "lng": -61.08,
   "country": "Martinique",
   "iso2": "MQ",
   "iso3": "MTQ",
   "capital": "primary",
   "population": 253995
 },
 {
   "city": "New Delhi",
   "lat": 28.6139,
   "lng": 77.209,
   "country": "India",
   "iso2": "IN",
   "iso3": "IND",
   "capital": "primary",
   "population": 249998
 },
 {
   "city": "Gaborone",
   "lat": -24.6569,
   "lng": 25.9086,
   "country": "Botswana",
   "iso2": "BW",
   "iso3": "BWA",
   "capital": "primary",
   "population": 231626
 },
 {
   "city": "Paramaribo",
   "lat": 5.8667,
   "lng": -55.1667,
   "country": "Suriname",
   "iso2": "SR",
   "iso3": "SUR",
   "capital": "primary",
   "population": 223757
 },
 {
   "city": "Dili",
   "lat": -8.5536,
   "lng": 125.5783,
   "country": "Timor-Leste",
   "iso2": "TL",
   "iso3": "TLS",
   "capital": "primary",
   "population": 222323
 },
 {
   "city": "Georgetown",
   "lat": 6.7833,
   "lng": -58.1667,
   "country": "Guyana",
   "iso2": "GY",
   "iso3": "GUY",
   "capital": "primary",
   "population": 200500
 },
 {
   "city": "Saint-Denis",
   "lat": -20.8789,
   "lng": 55.4481,
   "country": "Reunion",
   "iso2": "RE",
   "iso3": "REU",
   "capital": "primary",
   "population": 190047
 },
 {
   "city": "Malabo",
   "lat": 3.7521,
   "lng": 8.7737,
   "country": "Equatorial Guinea",
   "iso2": "GQ",
   "iso3": "GNQ",
   "capital": "primary",
   "population": 187302
 },
 {
   "city": "Gibraltar",
   "lat": 36.1324,
   "lng": -5.3781,
   "country": "Gibraltar",
   "iso2": "GI",
   "iso3": "GIB",
   "capital": "primary",
   "population": 187083
 },
 {
   "city": "Podgorica",
   "lat": 42.4397,
   "lng": 19.2661,
   "country": "Montenegro",
   "iso2": "ME",
   "iso3": "MNE",
   "capital": "primary",
   "population": 174515
 },
 {
   "city": "Manama",
   "lat": 26.225,
   "lng": 50.5775,
   "country": "Bahrain",
   "iso2": "BH",
   "iso3": "BHR",
   "capital": "primary",
   "population": 157474
 },
 {
   "city": "Willemstad",
   "lat": 12.108,
   "lng": -68.935,
   "country": "Curaçao",
   "iso2": "CW",
   "iso3": "CUW",
   "capital": "primary",
   "population": 150000
 },
 {
   "city": "Port Louis",
   "lat": -20.1667,
   "lng": 57.5,
   "country": "Mauritius",
   "iso2": "MU",
   "iso3": "MUS",
   "capital": "primary",
   "population": 149194
 },
 {
   "city": "Bern",
   "lat": 46.948,
   "lng": 7.4474,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "primary",
   "population": 133798
 },
 {
   "city": "Male",
   "lat": 4.175,
   "lng": 73.5083,
   "country": "Maldives",
   "iso2": "MV",
   "iso3": "MDV",
   "capital": "primary",
   "population": 133019
 },
 {
   "city": "Papeete",
   "lat": -17.5334,
   "lng": -149.5667,
   "country": "French Polynesia",
   "iso2": "PF",
   "iso3": "PYF",
   "capital": "primary",
   "population": 131695
 },
 {
   "city": "Reykjavík",
   "lat": 64.1475,
   "lng": -21.935,
   "country": "Iceland",
   "iso2": "IS",
   "iso3": "ISL",
   "capital": "primary",
   "population": 128793
 },
 {
   "city": "Luxembourg",
   "lat": 49.6106,
   "lng": 6.1328,
   "country": "Luxembourg",
   "iso2": "LU",
   "iso3": "LUX",
   "capital": "primary",
   "population": 128512
 },
 {
   "city": "Praia",
   "lat": 14.9177,
   "lng": -23.5092,
   "country": "Cabo Verde",
   "iso2": "CV",
   "iso3": "CPV",
   "capital": "primary",
   "population": 127832
 },
 {
   "city": "Sri Jayewardenepura Kotte",
   "lat": 6.9,
   "lng": 79.9164,
   "country": "Sri Lanka",
   "iso2": "LK",
   "iso3": "LKA",
   "capital": "primary",
   "population": 115826
 },
 {
   "city": "Moroni",
   "lat": -11.7036,
   "lng": 43.2536,
   "country": "Comoros",
   "iso2": "KM",
   "iso3": "COM",
   "capital": "primary",
   "population": 111329
 },
 {
   "city": "Bridgetown",
   "lat": 13.0975,
   "lng": -59.6167,
   "country": "Barbados",
   "iso2": "BB",
   "iso3": "BRB",
   "capital": "primary",
   "population": 110000
 },
 {
   "city": "Thimphu",
   "lat": 27.4833,
   "lng": 89.6333,
   "country": "Bhutan",
   "iso2": "BT",
   "iso3": "BTN",
   "capital": "primary",
   "population": 104000
 },
 {
   "city": "Mbabane",
   "lat": -26.3208,
   "lng": 31.1617,
   "country": "Swaziland",
   "iso2": "SZ",
   "iso3": "SWZ",
   "capital": "primary",
   "population": 94874
 },
 {
   "city": "Nouméa",
   "lat": -22.2625,
   "lng": 166.4443,
   "country": "New Caledonia",
   "iso2": "NC",
   "iso3": "NCL",
   "capital": "primary",
   "population": 93060
 },
 {
   "city": "Suva",
   "lat": -18.1333,
   "lng": 178.4333,
   "country": "Fiji",
   "iso2": "FJ",
   "iso3": "FJI",
   "capital": "primary",
   "population": 88271
 },
 {
   "city": "Honiara",
   "lat": -9.4333,
   "lng": 159.95,
   "country": "Solomon Islands",
   "iso2": "SB",
   "iso3": "SLB",
   "capital": "primary",
   "population": 84520
 },
 {
   "city": "Ankara",
   "lat": 39.93,
   "lng": 32.85,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "primary",
   "population": 77168
 },
 {
   "city": "Castries",
   "lat": 14.0167,
   "lng": -60.9833,
   "country": "Saint Lucia",
   "iso2": "LC",
   "iso3": "LCA",
   "capital": "primary",
   "population": 70000
 },
 {
   "city": "Cayenne",
   "lat": 4.933,
   "lng": -52.33,
   "country": "French Guiana",
   "iso2": "GF",
   "iso3": "GUF",
   "capital": "primary",
   "population": 61550
 },
 {
   "city": "São Tomé",
   "lat": 0.3333,
   "lng": 6.7333,
   "country": "Sao Tome And Principe",
   "iso2": "ST",
   "iso3": "STP",
   "capital": "primary",
   "population": 56166
 },
 {
   "city": "Hamilton",
   "lat": 32.2942,
   "lng": -64.7839,
   "country": "Bermuda",
   "iso2": "BM",
   "iso3": "BMU",
   "capital": "primary",
   "population": 52320
 },
 {
   "city": "Port-Vila",
   "lat": -17.7333,
   "lng": 168.3167,
   "country": "Vanuatu",
   "iso2": "VU",
   "iso3": "VUT",
   "capital": "primary",
   "population": 51437
 },
 {
   "city": "Bandar Seri Begawan",
   "lat": 4.9167,
   "lng": 114.9167,
   "country": "Brunei",
   "iso2": "BN",
   "iso3": "BRN",
   "capital": "primary",
   "population": 50000
 },
 {
   "city": "Gitega",
   "lat": -3.4283,
   "lng": 29.925,
   "country": "Burundi",
   "iso2": "BI",
   "iso3": "BDI",
   "capital": "primary",
   "population": 41944
 },
 {
   "city": "Apia",
   "lat": -13.8333,
   "lng": -171.8333,
   "country": "Samoa",
   "iso2": "WS",
   "iso3": "WSM",
   "capital": "primary",
   "population": 37708
 },
 {
   "city": "Port of Spain",
   "lat": 10.6667,
   "lng": -61.5167,
   "country": "Trinidad And Tobago",
   "iso2": "TT",
   "iso3": "TTO",
   "capital": "primary",
   "population": 37074
 },
 {
   "city": "Monaco",
   "lat": 43.7396,
   "lng": 7.4069,
   "country": "Monaco",
   "iso2": "MC",
   "iso3": "MCO",
   "capital": "primary",
   "population": 36371
 },
 {
   "city": "Oranjestad",
   "lat": 12.5186,
   "lng": -70.0358,
   "country": "Aruba",
   "iso2": "AW",
   "iso3": "ABW",
   "capital": "primary",
   "population": 34980
 },
 {
   "city": "Saint Helier",
   "lat": 49.1858,
   "lng": -2.11,
   "country": "Jersey",
   "iso2": "JE",
   "iso3": "JEY",
   "capital": "primary",
   "population": 33522
 },
 {
   "city": "Mamoudzou",
   "lat": -12.7871,
   "lng": 45.275,
   "country": "Mayotte",
   "iso2": "YT",
   "iso3": "MYT",
   "capital": "primary",
   "population": 32057
 },
 {
   "city": "Banjul",
   "lat": 13.4531,
   "lng": -16.5775,
   "country": "The Gambia",
   "iso2": "GM",
   "iso3": "GMB",
   "capital": "primary",
   "population": 31356
 },
 {
   "city": "Majuro",
   "lat": 7.0918,
   "lng": 171.3802,
   "country": "Marshall Islands",
   "iso2": "MH",
   "iso3": "MHL",
   "capital": "primary",
   "population": 30000
 },
 {
   "city": "Tarawa",
   "lat": 1.3382,
   "lng": 173.0176,
   "country": "Kiribati",
   "iso2": "KI",
   "iso3": "KIR",
   "capital": "primary",
   "population": 28802
 },
 {
   "city": "Douglas",
   "lat": 54.15,
   "lng": -4.4819,
   "country": "Isle Of Man",
   "iso2": "IM",
   "iso3": "IMN",
   "capital": "primary",
   "population": 27938
 },
 {
   "city": "George Town",
   "lat": 19.2866,
   "lng": -81.3744,
   "country": "Cayman Islands",
   "iso2": "KY",
   "iso3": "CYM",
   "capital": "primary",
   "population": 27704
 },
 {
   "city": "Victoria",
   "lat": -4.6236,
   "lng": 55.4544,
   "country": "Seychelles",
   "iso2": "SC",
   "iso3": "SYC",
   "capital": "primary",
   "population": 26450
 },
 {
   "city": "Kingstown",
   "lat": 13.1667,
   "lng": -61.2333,
   "country": "Saint Vincent And The Grenadines",
   "iso2": "VC",
   "iso3": "VCT",
   "capital": "primary",
   "population": 25000
 },
 {
   "city": "Nuku‘alofa",
   "lat": -21.1347,
   "lng": -175.2083,
   "country": "Tonga",
   "iso2": "TO",
   "iso3": "TON",
   "capital": "primary",
   "population": 23221
 },
 {
   "city": "Andorra la Vella",
   "lat": 42.5,
   "lng": 1.5,
   "country": "Andorra",
   "iso2": "AD",
   "iso3": "AND",
   "capital": "primary",
   "population": 22615
 },
 {
   "city": "Saint John’s",
   "lat": 17.1211,
   "lng": -61.8447,
   "country": "Antigua And Barbuda",
   "iso2": "AG",
   "iso3": "ATG",
   "capital": "primary",
   "population": 21926
 },
 {
   "city": "Ashgabat",
   "lat": 37.95,
   "lng": 58.3833,
   "country": "Turkmenistan",
   "iso2": "TM",
   "iso3": "TKM",
   "capital": "primary",
   "population": 19426
 },
 {
   "city": "Nuuk",
   "lat": 64.175,
   "lng": -51.7333,
   "country": "Greenland",
   "iso2": "GL",
   "iso3": "GRL",
   "capital": "primary",
   "population": 18326
 },
 {
   "city": "Belmopan",
   "lat": 17.25,
   "lng": -88.7675,
   "country": "Belize",
   "iso2": "BZ",
   "iso3": "BLZ",
   "capital": "primary",
   "population": 17222
 },
 {
   "city": "Roseau",
   "lat": 15.3,
   "lng": -61.3833,
   "country": "Dominica",
   "iso2": "DM",
   "iso3": "DMA",
   "capital": "primary",
   "population": 16582
 },
 {
   "city": "Tórshavn",
   "lat": 62,
   "lng": -6.7833,
   "country": "Faroe Islands",
   "iso2": "FO",
   "iso3": "FRO",
   "capital": "primary",
   "population": 13326
 },
 {
   "city": "Basseterre",
   "lat": 17.2983,
   "lng": -62.7342,
   "country": "Saint Kitts And Nevis",
   "iso2": "KN",
   "iso3": "KNA",
   "capital": "primary",
   "population": 13220
 },
 {
   "city": "Pago Pago",
   "lat": -14.274,
   "lng": -170.7046,
   "country": "American Samoa",
   "iso2": "AS",
   "iso3": "ASM",
   "capital": "primary",
   "population": 12576
 },
 {
   "city": "Valletta",
   "lat": 35.8978,
   "lng": 14.5125,
   "country": "Malta",
   "iso2": "MT",
   "iso3": "MLT",
   "capital": "primary",
   "population": 6444
 },
 {
   "city": "Palikir",
   "lat": 6.9178,
   "lng": 158.185,
   "country": "Federated States of Micronesia",
   "iso2": "FM",
   "iso3": "FSM",
   "capital": "primary",
   "population": 6227
 },
 {
   "city": "Funafuti",
   "lat": -8.5243,
   "lng": 179.1942,
   "country": "Tuvalu",
   "iso2": "TV",
   "iso3": "TUV",
   "capital": "primary",
   "population": 6025
 },
 {
   "city": "Grand Turk",
   "lat": 21.4664,
   "lng": -71.136,
   "country": "Turks And Caicos Islands",
   "iso2": "TC",
   "iso3": "TCA",
   "capital": "primary",
   "population": 5801
 },
 {
   "city": "Lobamba",
   "lat": -26.4465,
   "lng": 31.2064,
   "country": "Swaziland",
   "iso2": "SZ",
   "iso3": "SWZ",
   "capital": "primary",
   "population": 5800
 },
 {
   "city": "Vaduz",
   "lat": 47.1397,
   "lng": 9.5219,
   "country": "Liechtenstein",
   "iso2": "LI",
   "iso3": "LIE",
   "capital": "primary",
   "population": 5668
 },
 {
   "city": "Avarua",
   "lat": -21.207,
   "lng": -159.771,
   "country": "Cook Islands",
   "iso2": "CK",
   "iso3": "COK",
   "capital": "primary",
   "population": 5445
 },
 {
   "city": "Saint George’s",
   "lat": 12.0444,
   "lng": -61.7417,
   "country": "Grenada",
   "iso2": "GD",
   "iso3": "GRD",
   "capital": "primary",
   "population": 4315
 },
 {
   "city": "San Marino",
   "lat": 43.932,
   "lng": 12.4484,
   "country": "San Marino",
   "iso2": "SM",
   "iso3": "SMR",
   "capital": "primary",
   "population": 4040
 },
 {
   "city": "Capitol Hill",
   "lat": 15.2137,
   "lng": 145.7546,
   "country": "Northern Mariana Islands",
   "iso2": "MP",
   "iso3": "MNP",
   "capital": "primary",
   "population": 2500
 },
 {
   "city": "Stanley",
   "lat": -51.7,
   "lng": -57.85,
   "country": "Falkland Islands (Islas Malvinas)",
   "iso2": "FK",
   "iso3": "FLK",
   "capital": "primary",
   "population": 2213
 },
 {
   "city": "Alofi",
   "lat": -19.056,
   "lng": -169.921,
   "country": "Niue",
   "iso2": "NU",
   "iso3": "NIU",
   "capital": "primary",
   "population": 1611
 },
 {
   "city": "Hagåtña",
   "lat": 13.4745,
   "lng": 144.7504,
   "country": "Guam",
   "iso2": "GU",
   "iso3": "GUM",
   "capital": "primary",
   "population": 1051
 },
 {
   "city": "Vatican City",
   "lat": 41.9033,
   "lng": 12.4534,
   "country": "Vatican City",
   "iso2": "VA",
   "iso3": "VAT",
   "capital": "primary",
   "population": 825
 },
 {
   "city": "Jamestown",
   "lat": -15.9251,
   "lng": -5.7179,
   "country": "Saint Helena, Ascension, And Tristan Da Cunha",
   "iso2": "SH",
   "iso3": "SHN",
   "capital": "primary",
   "population": 714
 },
 {
   "city": "Brades",
   "lat": 16.7928,
   "lng": -62.2106,
   "country": "Montserrat",
   "iso2": "MS",
   "iso3": "MSR",
   "capital": "primary",
   "population": 391
 },
 {
   "city": "Basse-Terre",
   "lat": 16.0104,
   "lng": -61.7055,
   "country": "Guadeloupe",
   "iso2": "GP",
   "iso3": "GLP",
   "capital": "primary",
   "population": 307
 },
 {
   "city": "Ngerulmud",
   "lat": 7.5006,
   "lng": 134.6242,
   "country": "Palau",
   "iso2": "PW",
   "iso3": "PLW",
   "capital": "primary",
   "population": 271
 },
 {
   "city": "Adamstown",
   "lat": -25.0667,
   "lng": -130.0833,
   "country": "Pitcairn Islands",
   "iso2": "PN",
   "iso3": "PCN",
   "capital": "primary",
   "population": null
 },
 {
   "city": "Al Quds",
   "lat": 31.7764,
   "lng": 35.2269,
   "country": "West Bank",
   "iso2": "XW",
   "iso3": "XWB",
   "capital": "primary",
   "population": null
 },
 {
   "city": "Charlotte Amalie",
   "lat": 18.3419,
   "lng": -64.9332,
   "country": "U.S. Virgin Islands",
   "iso2": "VI",
   "iso3": "VIR",
   "capital": "primary",
   "population": null
 },
 {
   "city": "Flying Fish Cove",
   "lat": -10.4167,
   "lng": 105.7167,
   "country": "Christmas Island",
   "iso2": "CX",
   "iso3": "CXR",
   "capital": "primary",
   "population": null
 },
 {
   "city": "Gaza",
   "lat": 31.5069,
   "lng": 34.456,
   "country": "Gaza Strip",
   "iso2": "XG",
   "iso3": "XGZ",
   "capital": "primary",
   "population": null
 },
 {
   "city": "Gustavia",
   "lat": 17.8958,
   "lng": -62.8508,
   "country": "Saint Barthelemy",
   "iso2": "BL",
   "iso3": "BLM",
   "capital": "primary",
   "population": null
 },
 {
   "city": "King Edward Point",
   "lat": -54.2833,
   "lng": -36.5,
   "country": "South Georgia And South Sandwich Islands",
   "iso2": "GS",
   "iso3": "SGS",
   "capital": "primary",
   "population": null
 },
 {
   "city": "Kingston",
   "lat": -29.0569,
   "lng": 167.9617,
   "country": "Norfolk Island",
   "iso2": "NF",
   "iso3": "NFK",
   "capital": "primary",
   "population": null
 },
 {
   "city": "Longyearbyen",
   "lat": 78.2167,
   "lng": 15.6333,
   "country": "Svalbard",
   "iso2": "XR",
   "iso3": "XSV",
   "capital": "primary",
   "population": null
 },
 {
   "city": "Marigot",
   "lat": 18.0706,
   "lng": -63.0847,
   "country": "Saint Martin",
   "iso2": "MF",
   "iso3": "MAF",
   "capital": "primary",
   "population": null
 },
 {
   "city": "Mata-Utu",
   "lat": -13.2825,
   "lng": -176.1736,
   "country": "Wallis And Futuna",
   "iso2": "WF",
   "iso3": "WLF",
   "capital": "primary",
   "population": null
 },
 {
   "city": "Philipsburg",
   "lat": 18.0256,
   "lng": -63.0492,
   "country": "Sint Maarten",
   "iso2": "SX",
   "iso3": "SXM",
   "capital": "primary",
   "population": null
 },
 {
   "city": "Pristina",
   "lat": 42.6633,
   "lng": 21.1622,
   "country": "Kosovo",
   "iso2": "XK",
   "iso3": "XKS",
   "capital": "primary",
   "population": null
 },
 {
   "city": "Road Town",
   "lat": 18.4167,
   "lng": -64.6167,
   "country": "British Virgin Islands",
   "iso2": "VG",
   "iso3": "VGB",
   "capital": "primary",
   "population": null
 },
 {
   "city": "Saint-Pierre",
   "lat": 46.7811,
   "lng": -56.1764,
   "country": "Saint Pierre And Miquelon",
   "iso2": "PM",
   "iso3": "SPM",
   "capital": "primary",
   "population": null
 },
 {
   "city": "The Valley",
   "lat": 18.2167,
   "lng": -63.05,
   "country": "Anguilla",
   "iso2": "AI",
   "iso3": "AIA",
   "capital": "primary",
   "population": null
 },
 {
   "city": "Tifariti",
   "lat": 26.0928,
   "lng": -10.6089,
   "country": "Morocco",
   "iso2": "MA",
   "iso3": "MAR",
   "capital": "primary",
   "population": null
 },
 {
   "city": "Yaren",
   "lat": -0.5477,
   "lng": 166.9209,
   "country": "Nauru",
   "iso2": "NR",
   "iso3": "NRU",
   "capital": "primary",
   "population": null
 },
 {
   "city": "Lagos",
   "lat": 6.45,
   "lng": 3.4,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 15487000
 },
 {
   "city": "Shenzhen",
   "lat": 22.535,
   "lng": 114.054,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 14678000
 },
 {
   "city": "Handan",
   "lat": 36.6116,
   "lng": 114.4894,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 9549700
 },
 {
   "city": "Zhoukou",
   "lat": 33.625,
   "lng": 114.6418,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 8953172
 },
 {
   "city": "Ganzhou",
   "lat": 25.8292,
   "lng": 114.9336,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 8677600
 },
 {
   "city": "Tongshan",
   "lat": 34.261,
   "lng": 117.1859,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 8669000
 },
 {
   "city": "Heze",
   "lat": 35.2333,
   "lng": 115.4333,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 8287693
 },
 {
   "city": "Dongguan",
   "lat": 23.0475,
   "lng": 113.7493,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 8142000
 },
 {
   "city": "Foshan",
   "lat": 23.0292,
   "lng": 113.1056,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 7905700
 },
 {
   "city": "Ahmedabad",
   "lat": 23.03,
   "lng": 72.58,
   "country": "India",
   "iso2": "IN",
   "iso3": "IND",
   "capital": "minor",
   "population": 7717000
 },
 {
   "city": "Zhanjiang",
   "lat": 21.1967,
   "lng": 110.4031,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 7332000
 },
 {
   "city": "Nantong",
   "lat": 31.9829,
   "lng": 120.8873,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 7283622
 },
 {
   "city": "Yancheng",
   "lat": 33.3936,
   "lng": 120.1339,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 7260240
 },
 {
   "city": "Shangrao",
   "lat": 28.4419,
   "lng": 117.9633,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 6810700
 },
 {
   "city": "Quanzhou",
   "lat": 24.9139,
   "lng": 118.5858,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 6480000
 },
 {
   "city": "Wuxi",
   "lat": 31.5667,
   "lng": 120.2833,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 6372624
 },
 {
   "city": "Huanggang",
   "lat": 30.45,
   "lng": 114.875,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 6333000
 },
 {
   "city": "Maoming",
   "lat": 21.6618,
   "lng": 110.9178,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 6313200
 },
 {
   "city": "Nanchong",
   "lat": 30.7991,
   "lng": 106.0784,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 6278614
 },
 {
   "city": "Jieyang",
   "lat": 23.5533,
   "lng": 116.3649,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 6089400
 },
 {
   "city": "Yulin",
   "lat": 22.6293,
   "lng": 110.1507,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 5849700
 },
 {
   "city": "Changde",
   "lat": 29.0397,
   "lng": 111.6839,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 5827200
 },
 {
   "city": "Liaocheng",
   "lat": 36.45,
   "lng": 115.9833,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 5789863
 },
 {
   "city": "Qingdao",
   "lat": 36.1167,
   "lng": 120.4,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 5775000
 },
 {
   "city": "Nangandao",
   "lat": 35.2992,
   "lng": 113.8851,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 5708191
 },
 {
   "city": "Xiangyang",
   "lat": 32.0654,
   "lng": 112.1531,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 5680000
 },
 {
   "city": "Lu’an",
   "lat": 31.7542,
   "lng": 116.5078,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 5611701
 },
 {
   "city": "Yichun",
   "lat": 27.8041,
   "lng": 114.383,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 5573200
 },
 {
   "city": "Dezhou",
   "lat": 37.4513,
   "lng": 116.3105,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 5568235
 },
 {
   "city": "Dazhou",
   "lat": 31.2152,
   "lng": 107.4947,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 5468097
 },
 {
   "city": "Suihua",
   "lat": 46.6384,
   "lng": 126.9808,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 5418153
 },
 {
   "city": "Qiqihar",
   "lat": 47.3398,
   "lng": 123.9512,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 5367003
 },
 {
   "city": "Shantou",
   "lat": 23.3735,
   "lng": 116.6941,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 5319028
 },
 {
   "city": "Weinan",
   "lat": 34.4996,
   "lng": 109.4684,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 5286077
 },
 {
   "city": "Changzhou",
   "lat": 31.8122,
   "lng": 119.9692,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 5278121
 },
 {
   "city": "Pudong",
   "lat": 31.2231,
   "lng": 121.5397,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 5187200
 },
 {
   "city": "Zhangzhou",
   "lat": 24.5093,
   "lng": 117.6612,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 5140000
 },
 {
   "city": "Suzhou",
   "lat": 31.304,
   "lng": 120.6164,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 5103000
 },
 {
   "city": "Xianyang",
   "lat": 34.35,
   "lng": 108.7167,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 5096001
 },
 {
   "city": "Guilin",
   "lat": 25.2667,
   "lng": 110.2833,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 5085500
 },
 {
   "city": "Taizhou",
   "lat": 32.4831,
   "lng": 119.9,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 5031000
 },
 {
   "city": "Ji’an",
   "lat": 27.1172,
   "lng": 114.9793,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 4956600
 },
 {
   "city": "Jiujiang",
   "lat": 29.7048,
   "lng": 116.0021,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 4896800
 },
 {
   "city": "Huizhou",
   "lat": 23.1115,
   "lng": 114.4152,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 4830000
 },
 {
   "city": "Chenzhou",
   "lat": 25.7989,
   "lng": 113.0267,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 4744500
 },
 {
   "city": "Anqing",
   "lat": 30.5,
   "lng": 117.0333,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 4723000
 },
 {
   "city": "Jiangmen",
   "lat": 22.5833,
   "lng": 113.0833,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 4630300
 },
 {
   "city": "Mianyang",
   "lat": 31.4669,
   "lng": 104.7385,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 4613862
 },
 {
   "city": "Yibin",
   "lat": 28.7596,
   "lng": 104.64,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 4471896
 },
 {
   "city": "Timbío",
   "lat": 2.3528,
   "lng": -76.6819,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 4444444
 },
 {
   "city": "Guigang",
   "lat": 23.0961,
   "lng": 109.6092,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 4409200
 },
 {
   "city": "Xinpu",
   "lat": 34.5906,
   "lng": 119.1801,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 4393482
 },
 {
   "city": "Meizhou",
   "lat": 24.2998,
   "lng": 116.1191,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 4378800
 },
 {
   "city": "Chifeng",
   "lat": 42.2663,
   "lng": 118.9223,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 4341245
 },
 {
   "city": "Jiangguanchi",
   "lat": 34.0244,
   "lng": 113.8201,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 4307488
 },
 {
   "city": "Luzhou",
   "lat": 28.8918,
   "lng": 105.4409,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 4218427
 },
 {
   "city": "Zhaoqing",
   "lat": 23.05,
   "lng": 112.4667,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 4151700
 },
 {
   "city": "Xiaoxita",
   "lat": 30.7083,
   "lng": 111.2803,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 4137900
 },
 {
   "city": "Xiamen",
   "lat": 24.4797,
   "lng": 118.0819,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 4110000
 },
 {
   "city": "Liuzhou",
   "lat": 24.3264,
   "lng": 109.4281,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 4041700
 },
 {
   "city": "Zhuzhou",
   "lat": 27.8407,
   "lng": 113.1469,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 4020800
 },
 {
   "city": "Deyang",
   "lat": 31.1289,
   "lng": 104.395,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 3877000
 },
 {
   "city": "Qingyuan",
   "lat": 23.6842,
   "lng": 113.0507,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 3874000
 },
 {
   "city": "Wuhu",
   "lat": 31.334,
   "lng": 118.3622,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 3842100
 },
 {
   "city": "Neijiang",
   "lat": 29.5872,
   "lng": 105.0635,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 3702847
 },
 {
   "city": "Baicheng",
   "lat": 23.901,
   "lng": 106.6194,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 3669400
 },
 {
   "city": "Puyang",
   "lat": 35.7639,
   "lng": 115.03,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 3598740
 },
 {
   "city": "Hechi",
   "lat": 24.6928,
   "lng": 108.085,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 3545700
 },
 {
   "city": "Shiyan",
   "lat": 32.6351,
   "lng": 110.7755,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 3398000
 },
 {
   "city": "Changzhi",
   "lat": 36.1953,
   "lng": 113.097,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 3334565
 },
 {
   "city": "Qinzhou",
   "lat": 21.95,
   "lng": 108.6167,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 3304400
 },
 {
   "city": "Bazhou",
   "lat": 31.8576,
   "lng": 106.7559,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 3283148
 },
 {
   "city": "Qincheng",
   "lat": 34.5809,
   "lng": 105.7311,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 3262549
 },
 {
   "city": "Zhongshan",
   "lat": 22.5333,
   "lng": 113.35,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 3260000
 },
 {
   "city": "Suining",
   "lat": 30.5098,
   "lng": 105.5737,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 3252619
 },
 {
   "city": "Guang’an",
   "lat": 30.4673,
   "lng": 106.6336,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 3205476
 },
 {
   "city": "Faisalabad",
   "lat": 31.418,
   "lng": 73.079,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 3203846
 },
 {
   "city": "Tongliao",
   "lat": 43.6172,
   "lng": 122.264,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 3139153
 },
 {
   "city": "Zhenjiang",
   "lat": 32.2109,
   "lng": 119.4551,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 3113384
 },
 {
   "city": "Heyuan",
   "lat": 23.7503,
   "lng": 114.6923,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 3093900
 },
 {
   "city": "Xinzhou",
   "lat": 38.4178,
   "lng": 112.7233,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 3067501
 },
 {
   "city": "Wuzhou",
   "lat": 23.4833,
   "lng": 111.3167,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 3061100
 },
 {
   "city": "Shaoguan",
   "lat": 24.8011,
   "lng": 113.5927,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2997600
 },
 {
   "city": "Shanwei",
   "lat": 22.7664,
   "lng": 115.3331,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2993600
 },
 {
   "city": "Ningde",
   "lat": 26.6617,
   "lng": 119.5228,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2910000
 },
 {
   "city": "Putian",
   "lat": 25.4394,
   "lng": 119.0103,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2900000
 },
 {
   "city": "Weihai",
   "lat": 37.5,
   "lng": 122.1,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2804771
 },
 {
   "city": "Rizhao",
   "lat": 35.4164,
   "lng": 119.4331,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2801013
 },
 {
   "city": "Mudanjiang",
   "lat": 44.5861,
   "lng": 129.5997,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2798723
 },
 {
   "city": "Dingxi",
   "lat": 35.5806,
   "lng": 104.6263,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2698624
 },
 {
   "city": "Nanping",
   "lat": 26.6448,
   "lng": 118.1728,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2690000
 },
 {
   "city": "Chaozhou",
   "lat": 23.67,
   "lng": 116.63,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2656600
 },
 {
   "city": "Longyan",
   "lat": 25.0881,
   "lng": 117.0244,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2640000
 },
 {
   "city": "Huludao",
   "lat": 40.7094,
   "lng": 120.8378,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2623541
 },
 {
   "city": "Gulou",
   "lat": 26.0819,
   "lng": 119.2981,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2606000
 },
 {
   "city": "Yanjiang",
   "lat": 30.1256,
   "lng": 104.6397,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2593843
 },
 {
   "city": "Sanming",
   "lat": 26.2658,
   "lng": 117.6302,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2580000
 },
 {
   "city": "Yangjiang",
   "lat": 21.8556,
   "lng": 111.9627,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2555600
 },
 {
   "city": "Jiamusi",
   "lat": 46.8081,
   "lng": 130.3653,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2552097
 },
 {
   "city": "Luohe",
   "lat": 33.583,
   "lng": 114.0109,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2544266
 },
 {
   "city": "Yunfu",
   "lat": 22.9242,
   "lng": 112.0353,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2526900
 },
 {
   "city": "Huangshi",
   "lat": 30.2018,
   "lng": 115.0326,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2471700
 },
 {
   "city": "Yingkou",
   "lat": 40.6653,
   "lng": 122.2297,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2428534
 },
 {
   "city": "Lianshan",
   "lat": 40.7523,
   "lng": 120.828,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2426000
 },
 {
   "city": "Yuxi",
   "lat": 24.3495,
   "lng": 102.5432,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2386000
 },
 {
   "city": "Kuaidamao",
   "lat": 41.7302,
   "lng": 125.9471,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2324439
 },
 {
   "city": "Jincheng",
   "lat": 35.4906,
   "lng": 112.8483,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2279146
 },
 {
   "city": "Laibin",
   "lat": 23.7333,
   "lng": 109.2333,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2233900
 },
 {
   "city": "Ma’anshan",
   "lat": 31.6858,
   "lng": 118.5101,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2202899
 },
 {
   "city": "Gaoping",
   "lat": 30.7824,
   "lng": 106.1281,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2174000
 },
 {
   "city": "Ningbo",
   "lat": 29.875,
   "lng": 121.5492,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2125500
 },
 {
   "city": "Qingyang",
   "lat": 24.8141,
   "lng": 118.5792,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2111000
 },
 {
   "city": "Chongzuo",
   "lat": 22.4167,
   "lng": 107.3667,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2099400
 },
 {
   "city": "Rawalpindi",
   "lat": 33.6007,
   "lng": 73.0679,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 2098231
 },
 {
   "city": "Hezhou",
   "lat": 24.4164,
   "lng": 111.5478,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2072600
 },
 {
   "city": "Pingliang",
   "lat": 35.5412,
   "lng": 106.6819,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2068033
 },
 {
   "city": "Shengli",
   "lat": 37.45,
   "lng": 118.4667,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2035338
 },
 {
   "city": "Baicheng",
   "lat": 45.6148,
   "lng": 122.832,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 2032356
 },
 {
   "city": "Gujranwala",
   "lat": 32.15,
   "lng": 74.1833,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 2027001
 },
 {
   "city": "Pingxiang",
   "lat": 27.6333,
   "lng": 113.85,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1933200
 },
 {
   "city": "Tijuana",
   "lat": 32.525,
   "lng": -117.0333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 1922523
 },
 {
   "city": "Zhuhai",
   "lat": 22.2769,
   "lng": 113.5678,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1891100
 },
 {
   "city": "Xiping",
   "lat": 40.082,
   "lng": 113.2981,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1873000
 },
 {
   "city": "Multan",
   "lat": 30.1978,
   "lng": 71.4711,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 1871843
 },
 {
   "city": "Jixi",
   "lat": 45.2937,
   "lng": 130.965,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1862165
 },
 {
   "city": "Saidu Sharif",
   "lat": 34.75,
   "lng": 72.3572,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 1860310
 },
 {
   "city": "Ecatepec",
   "lat": 19.6097,
   "lng": -99.06,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 1857188
 },
 {
   "city": "Wuwei",
   "lat": 37.9278,
   "lng": 102.6329,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1815059
 },
 {
   "city": "Hyderabad City",
   "lat": 25.3792,
   "lng": 68.3683,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 1732693
 },
 {
   "city": "Shuozhou",
   "lat": 39.3408,
   "lng": 112.4292,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1714857
 },
 {
   "city": "Baiyin",
   "lat": 36.5448,
   "lng": 104.1766,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1708751
 },
 {
   "city": "Beihai",
   "lat": 21.4667,
   "lng": 109.1,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1680000
 },
 {
   "city": "Heihe",
   "lat": 50.2458,
   "lng": 127.4886,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1673899
 },
 {
   "city": "Jingdezhen",
   "lat": 29.2942,
   "lng": 117.2036,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1673200
 },
 {
   "city": "Yushan",
   "lat": 31.3867,
   "lng": 120.9766,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1651200
 },
 {
   "city": "León de los Aldama",
   "lat": 21.1167,
   "lng": -101.6833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 1579803
 },
 {
   "city": "Madurai",
   "lat": 9.9197,
   "lng": 78.1194,
   "country": "India",
   "iso2": "IN",
   "iso3": "IND",
   "capital": "minor",
   "population": 1561129
 },
 {
   "city": "Zhangjiajie",
   "lat": 29.1255,
   "lng": 110.4844,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1537900
 },
 {
   "city": "Aba",
   "lat": 5.1167,
   "lng": 7.3667,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 1530000
 },
 {
   "city": "Yucheng",
   "lat": 29.9888,
   "lng": 103.0007,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1507258
 },
 {
   "city": "Guiping",
   "lat": 23.4,
   "lng": 110.0833,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1496904
 },
 {
   "city": "Leizhou",
   "lat": 20.9147,
   "lng": 110.0806,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1494700
 },
 {
   "city": "Onitsha",
   "lat": 6.1667,
   "lng": 6.7833,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 1483000
 },
 {
   "city": "Zapopan",
   "lat": 20.7167,
   "lng": -103.4,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 1476491
 },
 {
   "city": "Huazhou",
   "lat": 32.6832,
   "lng": 112.079,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1468061
 },
 {
   "city": "Shuangyashan",
   "lat": 46.6388,
   "lng": 131.1545,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1462626
 },
 {
   "city": "Yangshe",
   "lat": 31.8775,
   "lng": 120.5512,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1432044
 },
 {
   "city": "Chizhou",
   "lat": 30.6583,
   "lng": 117.4849,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1402518
 },
 {
   "city": "Fuqing",
   "lat": 25.7232,
   "lng": 119.3735,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1390487
 },
 {
   "city": "Yutan",
   "lat": 28.3147,
   "lng": 112.554,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1368117
 },
 {
   "city": "Huangshan",
   "lat": 29.7132,
   "lng": 118.3151,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1358980
 },
 {
   "city": "Juárez",
   "lat": 31.7386,
   "lng": -106.487,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 1321004
 },
 {
   "city": "Wusong",
   "lat": 30.9333,
   "lng": 117.7667,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1311726
 },
 {
   "city": "Yangquan",
   "lat": 37.8576,
   "lng": 113.5762,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1300000
 },
 {
   "city": "Baishan",
   "lat": 41.9377,
   "lng": 126.4179,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1296127
 },
 {
   "city": "Haicheng",
   "lat": 40.8523,
   "lng": 122.7474,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1293877
 },
 {
   "city": "Wuzhong",
   "lat": 37.9874,
   "lng": 106.1919,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1284000
 },
 {
   "city": "Rucheng",
   "lat": 32.3852,
   "lng": 120.5634,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1267066
 },
 {
   "city": "Shaoyang",
   "lat": 32.9387,
   "lng": 119.8404,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1253548
 },
 {
   "city": "Beidao",
   "lat": 34.602,
   "lng": 105.918,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1225000
 },
 {
   "city": "Dadukou",
   "lat": 26.5849,
   "lng": 101.7149,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1214121
 },
 {
   "city": "Zhangye",
   "lat": 38.9355,
   "lng": 100.4553,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1199515
 },
 {
   "city": "Rosario",
   "lat": -32.9575,
   "lng": -60.6394,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 1193605
 },
 {
   "city": "Xinyu",
   "lat": 27.795,
   "lng": 114.9242,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1186700
 },
 {
   "city": "Cilacap",
   "lat": -7.7167,
   "lng": 109.017,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 1174964
 },
 {
   "city": "Guankou",
   "lat": 28.2363,
   "lng": 113.6984,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1168056
 },
 {
   "city": "Lianyuan",
   "lat": 27.6961,
   "lng": 111.6659,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1162928
 },
 {
   "city": "Rongcheng",
   "lat": 29.8239,
   "lng": 112.9019,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1162770
 },
 {
   "city": "Kaiyuan",
   "lat": 36.0656,
   "lng": 113.8153,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1160000
 },
 {
   "city": "Leiyang",
   "lat": 26.4179,
   "lng": 112.8457,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1151554
 },
 {
   "city": "Yichun",
   "lat": 47.7235,
   "lng": 128.8893,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1148126
 },
 {
   "city": "Yingchuan",
   "lat": 34.1511,
   "lng": 113.4733,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1131896
 },
 {
   "city": "Ikare",
   "lat": 7.5304,
   "lng": 5.76,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 1099931
 },
 {
   "city": "Xibeijie",
   "lat": 39.737,
   "lng": 98.5049,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1095947
 },
 {
   "city": "Yicheng",
   "lat": 31.3697,
   "lng": 119.8239,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1082929
 },
 {
   "city": "Nezahualcóyotl",
   "lat": 19.4,
   "lng": -98.9889,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 1077208
 },
 {
   "city": "Taixing",
   "lat": 32.1724,
   "lng": 120.0142,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1073921
 },
 {
   "city": "Goyang",
   "lat": 37.6564,
   "lng": 126.835,
   "country": "South Korea",
   "iso2": "KR",
   "iso3": "KOR",
   "capital": "minor",
   "population": 1061929
 },
 {
   "city": "Mizhou",
   "lat": 35.99,
   "lng": 119.3801,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1060000
 },
 {
   "city": "Xishan",
   "lat": 27.6609,
   "lng": 113.4946,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1060000
 },
 {
   "city": "Ezhou",
   "lat": 30.3972,
   "lng": 114.8842,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1059700
 },
 {
   "city": "Hegang",
   "lat": 47.3139,
   "lng": 130.2775,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1058665
 },
 {
   "city": "Zhongwei",
   "lat": 37.5139,
   "lng": 105.1884,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1046000
 },
 {
   "city": "Ogbomoso",
   "lat": 8.1333,
   "lng": 4.25,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 1032000
 },
 {
   "city": "Taizhou",
   "lat": 28.6583,
   "lng": 121.4221,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 1030200
 },
 {
   "city": "Thủ Đức",
   "lat": 10.7924,
   "lng": 106.7518,
   "country": "Vietnam",
   "iso2": "VN",
   "iso3": "VNM",
   "capital": "minor",
   "population": 1013795
 },
 {
   "city": "Xingcheng",
   "lat": 24.1681,
   "lng": 115.6669,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 993000
 },
 {
   "city": "Dongtai",
   "lat": 32.8534,
   "lng": 120.3037,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 990306
 },
 {
   "city": "Yingcheng",
   "lat": 24.1878,
   "lng": 113.4042,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 986400
 },
 {
   "city": "Luocheng",
   "lat": 22.7645,
   "lng": 111.5745,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 984100
 },
 {
   "city": "Nada",
   "lat": 19.5,
   "lng": 109.5833,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 977700
 },
 {
   "city": "Huilong",
   "lat": 31.8131,
   "lng": 121.6574,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 972525
 },
 {
   "city": "Shaoxing",
   "lat": 30,
   "lng": 120.5833,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 961200
 },
 {
   "city": "Fangchenggang",
   "lat": 21.6,
   "lng": 108.3,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 953300
 },
 {
   "city": "Meishan",
   "lat": 34.1736,
   "lng": 112.839,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 936000
 },
 {
   "city": "Taihe",
   "lat": 30.8706,
   "lng": 105.3784,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 924531
 },
 {
   "city": "Taihecun",
   "lat": 45.768,
   "lng": 131.0063,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 920471
 },
 {
   "city": "Naucalpan de Juárez",
   "lat": 19.4753,
   "lng": -99.2378,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 913681
 },
 {
   "city": "Hengzhou",
   "lat": 22.6896,
   "lng": 109.2674,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 908400
 },
 {
   "city": "Cancún",
   "lat": 21.1606,
   "lng": -86.8475,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 888797
 },
 {
   "city": "Dengtalu",
   "lat": 36.0819,
   "lng": 114.3481,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 887000
 },
 {
   "city": "Kaifeng Chengguanzhen",
   "lat": 34.8519,
   "lng": 114.3481,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 872000
 },
 {
   "city": "Bucheon",
   "lat": 37.4989,
   "lng": 126.7831,
   "country": "South Korea",
   "iso2": "KR",
   "iso3": "KOR",
   "capital": "minor",
   "population": 867678
 },
 {
   "city": "Hai’an",
   "lat": 32.532,
   "lng": 120.4604,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 866337
 },
 {
   "city": "Weichanglu",
   "lat": 37.1792,
   "lng": 119.9333,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 859424
 },
 {
   "city": "Leping",
   "lat": 28.9632,
   "lng": 117.1203,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 852800
 },
 {
   "city": "Hailun",
   "lat": 47.4585,
   "lng": 126.9632,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 850000
 },
 {
   "city": "Tongchuan",
   "lat": 34.9057,
   "lng": 108.9422,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 834437
 },
 {
   "city": "Warri",
   "lat": 5.5167,
   "lng": 5.75,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 830106
 },
 {
   "city": "Rongjiawan",
   "lat": 29.1409,
   "lng": 113.1087,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 826000
 },
 {
   "city": "Gaoyou",
   "lat": 32.7847,
   "lng": 119.4432,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 811800
 },
 {
   "city": "Yiyang",
   "lat": 26.4103,
   "lng": 112.3913,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 810447
 },
 {
   "city": "Puxi",
   "lat": 35.2125,
   "lng": 114.735,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 809535
 },
 {
   "city": "Zijinglu",
   "lat": 34.7513,
   "lng": 112.9854,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 807857
 },
 {
   "city": "Palermo",
   "lat": 2.8883,
   "lng": -75.4339,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 800000
 },
 {
   "city": "Qingping",
   "lat": 34.538,
   "lng": 113.3796,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 797200
 },
 {
   "city": "Cencheng",
   "lat": 22.9297,
   "lng": 111.0186,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 772113
 },
 {
   "city": "Fuyang",
   "lat": 30.0553,
   "lng": 119.95,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 771000
 },
 {
   "city": "Frankfurt",
   "lat": 50.1136,
   "lng": 8.6797,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 764104
 },
 {
   "city": "Zhongba",
   "lat": 31.7761,
   "lng": 104.7406,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 762140
 },
 {
   "city": "Bahawalpur",
   "lat": 29.3956,
   "lng": 71.6722,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 762111
 },
 {
   "city": "Qingnian",
   "lat": 36.8494,
   "lng": 115.7061,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 760781
 },
 {
   "city": "Xinhualu",
   "lat": 34.3962,
   "lng": 113.7249,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 758079
 },
 {
   "city": "Ciudad Guayana",
   "lat": 8.3596,
   "lng": -62.6517,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 751331
 },
 {
   "city": "Licheng",
   "lat": 31.4174,
   "lng": 119.4786,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 749522
 },
 {
   "city": "Chengguan",
   "lat": 35.5256,
   "lng": 113.6976,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 740435
 },
 {
   "city": "Zunhua",
   "lat": 40.1881,
   "lng": 117.9593,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 737011
 },
 {
   "city": "Shuangqiao",
   "lat": 35.0833,
   "lng": 112.5833,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 733000
 },
 {
   "city": "Comodoro Rivadavia",
   "lat": -45.8667,
   "lng": -67.5,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 730266
 },
 {
   "city": "Langzhong",
   "lat": 31.5504,
   "lng": 105.9938,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 728935
 },
 {
   "city": "Tlajomulco de Zúñiga",
   "lat": 20.4736,
   "lng": -103.4431,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 727750
 },
 {
   "city": "Anlu",
   "lat": 31.2575,
   "lng": 113.6783,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 720000
 },
 {
   "city": "Changsha",
   "lat": 22.3762,
   "lng": 112.6877,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 717700
 },
 {
   "city": "Shihezi",
   "lat": 44.3,
   "lng": 86.0333,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 717000
 },
 {
   "city": "Torreón",
   "lat": 25.5394,
   "lng": -103.4486,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 716672
 },
 {
   "city": "Yatou",
   "lat": 37.1653,
   "lng": 122.4867,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 714211
 },
 {
   "city": "Xichang",
   "lat": 27.8983,
   "lng": 102.2706,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 712434
 },
 {
   "city": "Chengxiang",
   "lat": 31.4515,
   "lng": 121.1043,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 709500
 },
 {
   "city": "Dashiqiao",
   "lat": 40.6328,
   "lng": 122.5021,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 704891
 },
 {
   "city": "Soledad",
   "lat": 10.92,
   "lng": -74.77,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 698852
 },
 {
   "city": "Shishi",
   "lat": 24.7355,
   "lng": 118.6434,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 693000
 },
 {
   "city": "Miluo Chengguanzhen",
   "lat": 28.8049,
   "lng": 113.0745,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 692080
 },
 {
   "city": "Guadalupe",
   "lat": 25.6775,
   "lng": -100.2597,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 691931
 },
 {
   "city": "Gaizhou",
   "lat": 40.4019,
   "lng": 122.3499,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 691595
 },
 {
   "city": "Leling",
   "lat": 37.7333,
   "lng": 117.2167,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 689867
 },
 {
   "city": "Jianshe",
   "lat": 34.2189,
   "lng": 113.7693,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 687130
 },
 {
   "city": "Jingcheng",
   "lat": 32.0058,
   "lng": 120.2547,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 684360
 },
 {
   "city": "Xigazê",
   "lat": 29.2649,
   "lng": 88.8799,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 679771
 },
 {
   "city": "Acapulco de Juárez",
   "lat": 16.8636,
   "lng": -99.8825,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 673478
 },
 {
   "city": "Bahār",
   "lat": 34.9069,
   "lng": 48.4414,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 673405
 },
 {
   "city": "Songyang",
   "lat": 34.4603,
   "lng": 113.028,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 668592
 },
 {
   "city": "Ch’ŏngjin",
   "lat": 41.8,
   "lng": 129.7831,
   "country": "North Korea",
   "iso2": "KP",
   "iso3": "PRK",
   "capital": "minor",
   "population": 667929
 },
 {
   "city": "Qionghu",
   "lat": 28.8417,
   "lng": 112.3595,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 667104
 },
 {
   "city": "Zhaodong",
   "lat": 46.0635,
   "lng": 125.9773,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 666532
 },
 {
   "city": "Puyang Chengguanzhen",
   "lat": 35.7004,
   "lng": 114.98,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 666322
 },
 {
   "city": "Wenchang",
   "lat": 31.054,
   "lng": 116.9507,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 664455
 },
 {
   "city": "Tlaquepaque",
   "lat": 20.6167,
   "lng": -103.3167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 664193
 },
 {
   "city": "Catia La Mar",
   "lat": 10.6038,
   "lng": -67.0303,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 661897
 },
 {
   "city": "Sargodha",
   "lat": 32.0836,
   "lng": 72.6711,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 659862
 },
 {
   "city": "Mazatlán",
   "lat": 23.2167,
   "lng": -106.4167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 658354
 },
 {
   "city": "Lingbao Chengguanzhen",
   "lat": 34.5221,
   "lng": 110.8786,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 656571
 },
 {
   "city": "Sialkot City",
   "lat": 32.5,
   "lng": 74.5333,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 655852
 },
 {
   "city": "Tlalnepantla",
   "lat": 19.5367,
   "lng": -99.1947,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 653410
 },
 {
   "city": "Xiping",
   "lat": 25.6005,
   "lng": 103.8166,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 652604
 },
 {
   "city": "Guixi",
   "lat": 28.2861,
   "lng": 117.2083,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 647240
 },
 {
   "city": "Tengyue",
   "lat": 25.0208,
   "lng": 98.4972,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 644765
 },
 {
   "city": "Wuxue",
   "lat": 29.8518,
   "lng": 115.5539,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 644247
 },
 {
   "city": "Xinshi",
   "lat": 31.0236,
   "lng": 113.1079,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 636776
 },
 {
   "city": "Jin’e",
   "lat": 29.3395,
   "lng": 105.2868,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 633210
 },
 {
   "city": "Rotterdam",
   "lat": 51.9225,
   "lng": 4.4792,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 631155
 },
 {
   "city": "Kryvyi Rih",
   "lat": 47.9086,
   "lng": 33.3433,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 629695
 },
 {
   "city": "Xinxing",
   "lat": 39.8734,
   "lng": 124.1453,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 627475
 },
 {
   "city": "Suohe",
   "lat": 34.7879,
   "lng": 113.392,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 626700
 },
 {
   "city": "Zhuangyuan",
   "lat": 37.3056,
   "lng": 120.8275,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 626683
 },
 {
   "city": "Turpan",
   "lat": 42.95,
   "lng": 89.1822,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 622903
 },
 {
   "city": "Villa Nueva",
   "lat": 14.5314,
   "lng": -90.5964,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 618397
 },
 {
   "city": "Meihekou",
   "lat": 42.5279,
   "lng": 125.678,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 618251
 },
 {
   "city": "Sanya",
   "lat": 18.2536,
   "lng": 109.5019,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 614647
 },
 {
   "city": "Chimalhuacán",
   "lat": 19.4167,
   "lng": -98.9,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 614453
 },
 {
   "city": "Tianchang",
   "lat": 32.6853,
   "lng": 119.0041,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 602840
 },
 {
   "city": "Qamdo",
   "lat": 31.1375,
   "lng": 97.1777,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 598862
 },
 {
   "city": "Leipzig",
   "lat": 51.3333,
   "lng": 12.3833,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 597215
 },
 {
   "city": "Mar del Plata",
   "lat": -38,
   "lng": -57.55,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 593337
 },
 {
   "city": "Irapuato",
   "lat": 20.6667,
   "lng": -101.35,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 592953
 },
 {
   "city": "Luocheng",
   "lat": 30.9793,
   "lng": 104.28,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 591115
 },
 {
   "city": "Reynosa",
   "lat": 26.0922,
   "lng": -98.2778,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 589466
 },
 {
   "city": "Dortmund",
   "lat": 51.5139,
   "lng": 7.4653,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 587696
 },
 {
   "city": "Jinhua",
   "lat": 29.1046,
   "lng": 119.6494,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 586000
 },
 {
   "city": "Shangzhi",
   "lat": 45.2116,
   "lng": 127.962,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 585386
 },
 {
   "city": "Essen",
   "lat": 51.4508,
   "lng": 7.0131,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 582415
 },
 {
   "city": "Wancheng",
   "lat": 18.8,
   "lng": 110.4,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 578600
 },
 {
   "city": "Málaga",
   "lat": 36.7194,
   "lng": -4.42,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 577405
 },
 {
   "city": "Fu’an",
   "lat": 27.1,
   "lng": 119.6333,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 577000
 },
 {
   "city": "Puente Alto",
   "lat": -33.6167,
   "lng": -70.5833,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 573935
 },
 {
   "city": "Kumul",
   "lat": 42.8322,
   "lng": 93.5155,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 572400
 },
 {
   "city": "Luofeng",
   "lat": 37.359,
   "lng": 120.396,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 570898
 },
 {
   "city": "Tonalá",
   "lat": 20.6167,
   "lng": -103.2333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 569913
 },
 {
   "city": "Huzhou",
   "lat": 30.8695,
   "lng": 120.0958,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 569000
 },
 {
   "city": "Wencheng",
   "lat": 19.6167,
   "lng": 110.75,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 568900
 },
 {
   "city": "Kuiju",
   "lat": 36.8528,
   "lng": 119.3904,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 564501
 },
 {
   "city": "Zhenzhou",
   "lat": 32.2739,
   "lng": 119.1619,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 564021
 },
 {
   "city": "Ensenada",
   "lat": 31.8578,
   "lng": -116.6058,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 557430
 },
 {
   "city": "Luanzhou",
   "lat": 39.7396,
   "lng": 118.6978,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 554315
 },
 {
   "city": "Korla",
   "lat": 41.7646,
   "lng": 86.1527,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 549324
 },
 {
   "city": "Huanghua",
   "lat": 38.371,
   "lng": 117.3329,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 548507
 },
 {
   "city": "Ghulja",
   "lat": 43.9,
   "lng": 81.35,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 542507
 },
 {
   "city": "Fuding",
   "lat": 27.2,
   "lng": 120.2,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 542000
 },
 {
   "city": "Heroica Matamoros",
   "lat": 25.8797,
   "lng": -97.5042,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 541979
 },
 {
   "city": "Chang’an",
   "lat": 29.4761,
   "lng": 113.448,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 537500
 },
 {
   "city": "Aksu",
   "lat": 41.1664,
   "lng": 80.25,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 535657
 },
 {
   "city": "Wuhai",
   "lat": 39.6844,
   "lng": 106.8158,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 532902
 },
 {
   "city": "Antwerp",
   "lat": 51.2211,
   "lng": 4.3997,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 529247
 },
 {
   "city": "Ailan Mubage",
   "lat": 43.9167,
   "lng": 81.3167,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 526745
 },
 {
   "city": "Santa Teresa del Tuy",
   "lat": 10.2333,
   "lng": -66.65,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 525321
 },
 {
   "city": "Ciudad Apodaca",
   "lat": 25.7833,
   "lng": -100.1833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 523370
 },
 {
   "city": "Yucheng",
   "lat": 36.9329,
   "lng": 116.6403,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 522878
 },
 {
   "city": "Soacha",
   "lat": 4.5781,
   "lng": -74.2144,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 522442
 },
 {
   "city": "Tultitlán de Mariano Escobedo",
   "lat": 19.645,
   "lng": -99.1694,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 520557
 },
 {
   "city": "Pohang",
   "lat": 36.0322,
   "lng": 129.365,
   "country": "South Korea",
   "iso2": "KR",
   "iso3": "KOR",
   "capital": "minor",
   "population": 520305
 },
 {
   "city": "Anda",
   "lat": 46.4078,
   "lng": 125.3252,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 520000
 },
 {
   "city": "Zhoushan",
   "lat": 29.9887,
   "lng": 122.2049,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 516000
 },
 {
   "city": "Jiaji",
   "lat": 19.2431,
   "lng": 110.4642,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 515700
 },
 {
   "city": "Nuremberg",
   "lat": 49.4539,
   "lng": 11.0775,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 515543
 },
 {
   "city": "Yanji",
   "lat": 42.9044,
   "lng": 129.5067,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 513072
 },
 {
   "city": "Yicheng",
   "lat": 31.7117,
   "lng": 112.2551,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 512530
 },
 {
   "city": "Encheng",
   "lat": 22.1879,
   "lng": 112.3131,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 509700
 },
 {
   "city": "Kashgar",
   "lat": 39.45,
   "lng": 75.9833,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 506640
 },
 {
   "city": "Yiwu",
   "lat": 29.3081,
   "lng": 120.0698,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 502000
 },
 {
   "city": "Ile-Ife",
   "lat": 7.4667,
   "lng": 4.5667,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 501952
 },
 {
   "city": "Meicheng",
   "lat": 30.6412,
   "lng": 116.5689,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 500292
 },
 {
   "city": "Jiaxing",
   "lat": 30.7522,
   "lng": 120.75,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 500100
 },
 {
   "city": "Sukkur",
   "lat": 27.6995,
   "lng": 68.8673,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 499900
 },
 {
   "city": "Taozhou",
   "lat": 30.8956,
   "lng": 119.411,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 499132
 },
 {
   "city": "Duisburg",
   "lat": 51.4322,
   "lng": 6.7611,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 495885
 },
 {
   "city": "Chengjiao",
   "lat": 35.4043,
   "lng": 114.0593,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 495744
 },
 {
   "city": "Ixtapaluca",
   "lat": 19.3186,
   "lng": -98.8822,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 495566
 },
 {
   "city": "Celaya",
   "lat": 20.5222,
   "lng": -100.8122,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 494304
 },
 {
   "city": "Larkana",
   "lat": 27.56,
   "lng": 68.2264,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 490508
 },
 {
   "city": "Los Mochis",
   "lat": 25.7835,
   "lng": -108.9937,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 490000
 },
 {
   "city": "Ciudad López Mateos",
   "lat": 19.55,
   "lng": -99.2833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 489937
 },
 {
   "city": "Dunhua",
   "lat": 43.3667,
   "lng": 128.2333,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 483811
 },
 {
   "city": "Kaihua",
   "lat": 23.3715,
   "lng": 104.2437,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 481505
 },
 {
   "city": "Fuyuan",
   "lat": 48.3614,
   "lng": 134.2875,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 480000
 },
 {
   "city": "Jiannan",
   "lat": 31.3446,
   "lng": 104.1994,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 477868
 },
 {
   "city": "Chiniot",
   "lat": 31.7167,
   "lng": 72.9833,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 477781
 },
 {
   "city": "Shekhupura",
   "lat": 31.7083,
   "lng": 74,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 473129
 },
 {
   "city": "Fujin",
   "lat": 47.2489,
   "lng": 132.0341,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 470000
 },
 {
   "city": "Küçükçekmece",
   "lat": 41,
   "lng": 28.8,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 469431
 },
 {
   "city": "Kuqa",
   "lat": 41.7152,
   "lng": 82.9604,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 462588
 },
 {
   "city": "Xicheng",
   "lat": 23.3629,
   "lng": 103.1545,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 459781
 },
 {
   "city": "Lanús",
   "lat": -34.7,
   "lng": -58.4,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 459263
 },
 {
   "city": "Jian’ou",
   "lat": 27.0387,
   "lng": 118.3215,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 456000
 },
 {
   "city": "Minzhu",
   "lat": 43.7192,
   "lng": 127.337,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 453265
 },
 {
   "city": "Eslāmshahr",
   "lat": 35.5522,
   "lng": 51.235,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 448129
 },
 {
   "city": "Tanbei",
   "lat": 35.0907,
   "lng": 112.9317,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 447701
 },
 {
   "city": "San Nicolás de los Garza",
   "lat": 25.75,
   "lng": -100.2833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 443273
 },
 {
   "city": "Ning’an",
   "lat": 44.3439,
   "lng": 129.4656,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 440000
 },
 {
   "city": "Jinchang",
   "lat": 38.5168,
   "lng": 102.1866,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 438026
 },
 {
   "city": "Guangming",
   "lat": 45.3357,
   "lng": 122.7765,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 437559
 },
 {
   "city": "Kāshān",
   "lat": 33.9833,
   "lng": 51.4333,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 432557
 },
 {
   "city": "Calicut",
   "lat": 11.25,
   "lng": 75.7667,
   "country": "India",
   "iso2": "IN",
   "iso3": "IND",
   "capital": "minor",
   "population": 431560
 },
 {
   "city": "Veracruz",
   "lat": 19.1903,
   "lng": -96.1533,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 428323
 },
 {
   "city": "Yan’an Beilu",
   "lat": 44.0222,
   "lng": 87.2961,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 426253
 },
 {
   "city": "Buenaventura",
   "lat": 3.8772,
   "lng": -77.0267,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 423927
 },
 {
   "city": "Hailin",
   "lat": 44.5735,
   "lng": 129.3825,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 420000
 },
 {
   "city": "Mishan",
   "lat": 45.542,
   "lng": 131.8666,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 420000
 },
 {
   "city": "Lecheng",
   "lat": 25.1307,
   "lng": 113.3472,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 419500
 },
 {
   "city": "Wenlan",
   "lat": 23.3689,
   "lng": 103.3881,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 417156
 },
 {
   "city": "Paju",
   "lat": 37.8328,
   "lng": 126.8169,
   "country": "South Korea",
   "iso2": "KR",
   "iso3": "KOR",
   "capital": "minor",
   "population": 415345
 },
 {
   "city": "Nagqu",
   "lat": 31.4766,
   "lng": 92.0569,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 414554
 },
 {
   "city": "Jhang City",
   "lat": 31.2681,
   "lng": 72.3181,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 414131
 },
 {
   "city": "Fangting",
   "lat": 31.1282,
   "lng": 104.1695,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 412758
 },
 {
   "city": "Zhangjiakou Shi Xuanhua Qu",
   "lat": 40.5944,
   "lng": 115.0243,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 409745
 },
 {
   "city": "Zaria",
   "lat": 11.0667,
   "lng": 7.7,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 408198
 },
 {
   "city": "Dera Ghazi Khan",
   "lat": 30.05,
   "lng": 70.6333,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 399064
 },
 {
   "city": "Xushan",
   "lat": 30.1697,
   "lng": 121.2665,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 397000
 },
 {
   "city": "Karamay",
   "lat": 45.5928,
   "lng": 84.8711,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 391008
 },
 {
   "city": "Gujrat",
   "lat": 32.5736,
   "lng": 74.0789,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 390533
 },
 {
   "city": "Tieli",
   "lat": 46.9838,
   "lng": 128.04,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 390000
 },
 {
   "city": "Oyo",
   "lat": 7.8333,
   "lng": 3.9333,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 386723
 },
 {
   "city": "Lianzhou",
   "lat": 24.7868,
   "lng": 112.3735,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 384700
 },
 {
   "city": "Nuevo Laredo",
   "lat": 27.4861,
   "lng": -99.5069,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 384033
 },
 {
   "city": "Sintra",
   "lat": 38.7974,
   "lng": -9.3904,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 377835
 },
 {
   "city": "Helixi",
   "lat": 30.6267,
   "lng": 118.9861,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 376857
 },
 {
   "city": "Bello",
   "lat": 6.3319,
   "lng": -75.5581,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 371591
 },
 {
   "city": "Az Zubayr",
   "lat": 30.3892,
   "lng": 47.7081,
   "country": "Iraq",
   "iso2": "IQ",
   "iso3": "IRQ",
   "capital": "minor",
   "population": 370000
 },
 {
   "city": "Huichang",
   "lat": 34.9136,
   "lng": 112.7852,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 367113
 },
 {
   "city": "Tecámac",
   "lat": 19.7131,
   "lng": -98.9683,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 364579
 },
 {
   "city": "Bochum",
   "lat": 51.4833,
   "lng": 7.2167,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 364454
 },
 {
   "city": "Shuanghejiedao",
   "lat": 30.3866,
   "lng": 106.7756,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 360000
 },
 {
   "city": "Yong’an",
   "lat": 25.9733,
   "lng": 117.3593,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 357000
 },
 {
   "city": "Minatitlán",
   "lat": 17.9833,
   "lng": -94.55,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 356020
 },
 {
   "city": "Orizaba",
   "lat": 18.85,
   "lng": -97.1,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 355333
 },
 {
   "city": "Wuppertal",
   "lat": 51.2667,
   "lng": 7.1833,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 355004
 },
 {
   "city": "Gimpo",
   "lat": 37.6236,
   "lng": 126.7142,
   "country": "South Korea",
   "iso2": "KR",
   "iso3": "KOR",
   "capital": "minor",
   "population": 352683
 },
 {
   "city": "Licheng",
   "lat": 24.4935,
   "lng": 110.3902,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 352472
 },
 {
   "city": "Yakeshi",
   "lat": 49.2842,
   "lng": 120.7283,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 352173
 },
 {
   "city": "Cabimas",
   "lat": 10.4,
   "lng": -71.4333,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 351735
 },
 {
   "city": "Palmira",
   "lat": 3.5347,
   "lng": -76.2956,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 349294
 },
 {
   "city": "Tapachula",
   "lat": 14.9,
   "lng": -92.2667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 348156
 },
 {
   "city": "Bilbao",
   "lat": 43.2569,
   "lng": -2.9236,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 346405
 },
 {
   "city": "Konak",
   "lat": 38.4183,
   "lng": 27.1347,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 344678
 },
 {
   "city": "Gómez Palacio",
   "lat": 25.5611,
   "lng": -103.4983,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 342286
 },
 {
   "city": "Yeosu",
   "lat": 34.7368,
   "lng": 127.7458,
   "country": "South Korea",
   "iso2": "KR",
   "iso3": "KOR",
   "capital": "minor",
   "population": 341994
 },
 {
   "city": "Lianran",
   "lat": 24.9211,
   "lng": 102.4778,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 341341
 },
 {
   "city": "Nice",
   "lat": 43.7034,
   "lng": 7.2663,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 341032
 },
 {
   "city": "Kaesŏng",
   "lat": 37.964,
   "lng": 126.5644,
   "country": "North Korea",
   "iso2": "KP",
   "iso3": "PRK",
   "capital": "minor",
   "population": 338155
 },
 {
   "city": "Tangdong",
   "lat": 25.9755,
   "lng": 113.2302,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 337495
 },
 {
   "city": "Alicante",
   "lat": 38.3453,
   "lng": -0.4831,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 337304
 },
 {
   "city": "Uruapan",
   "lat": 19.4208,
   "lng": -102.0628,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 334749
 },
 {
   "city": "Bielefeld",
   "lat": 52.0167,
   "lng": 8.5333,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 333509
 },
 {
   "city": "Soledad de Graciano Sánchez",
   "lat": 22.1833,
   "lng": -100.9333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 332072
 },
 {
   "city": "Bonn",
   "lat": 50.7339,
   "lng": 7.0997,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 330579
 },
 {
   "city": "Bamiantong",
   "lat": 44.9164,
   "lng": 130.5212,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 330000
 },
 {
   "city": "Ciudad Obregón",
   "lat": 27.4939,
   "lng": -109.9389,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 329404
 },
 {
   "city": "Salamanca",
   "lat": 20.5703,
   "lng": -101.1972,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 327169
 },
 {
   "city": "Yunzhong",
   "lat": 39.8143,
   "lng": 113.0946,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 326849
 },
 {
   "city": "Al Fallūjah",
   "lat": 33.35,
   "lng": 43.7833,
   "country": "Iraq",
   "iso2": "IQ",
   "iso3": "IRQ",
   "capital": "minor",
   "population": 326471
 },
 {
   "city": "Yıldırım",
   "lat": 40.1878,
   "lng": 29.0822,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 324377
 },
 {
   "city": "Dongyang",
   "lat": 29.2785,
   "lng": 120.2282,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 322500
 },
 {
   "city": "Hotan",
   "lat": 37.1012,
   "lng": 79.9327,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 322300
 },
 {
   "city": "Córdoba",
   "lat": 37.8845,
   "lng": -4.7796,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 322071
 },
 {
   "city": "Guasave",
   "lat": 25.5744,
   "lng": -108.4706,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 320000
 },
 {
   "city": "Tehuacán",
   "lat": 18.4617,
   "lng": -97.3928,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 319375
 },
 {
   "city": "Coatzacoalcos",
   "lat": 18.15,
   "lng": -94.4333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 319187
 },
 {
   "city": "Zalantun",
   "lat": 48.0033,
   "lng": 122.7365,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 318933
 },
 {
   "city": "Münster",
   "lat": 51.9625,
   "lng": 7.6256,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 316403
 },
 {
   "city": "San Miguelito",
   "lat": 9.033,
   "lng": -79.5,
   "country": "Panama",
   "iso2": "PA",
   "iso3": "PAN",
   "capital": "minor",
   "population": 315019
 },
 {
   "city": "Kasur",
   "lat": 31.1167,
   "lng": 74.45,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 314617
 },
 {
   "city": "Yakou",
   "lat": 33.2937,
   "lng": 113.5203,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 313828
 },
 {
   "city": "Zarzal",
   "lat": 4.3942,
   "lng": -76.0703,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 312599
 },
 {
   "city": "Catania",
   "lat": 37.5027,
   "lng": 15.0873,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 311584
 },
 {
   "city": "Chalco",
   "lat": 19.2647,
   "lng": -98.8975,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 310130
 },
 {
   "city": "Mannheim",
   "lat": 49.4878,
   "lng": 8.4661,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 309721
 },
 {
   "city": "Shahrīār",
   "lat": 35.6597,
   "lng": 51.0592,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 309607
 },
 {
   "city": "Shahr-e Qods",
   "lat": 35.7214,
   "lng": 51.1089,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 309605
 },
 {
   "city": "Karlsruhe",
   "lat": 49.0167,
   "lng": 8.4,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 308436
 },
 {
   "city": "Ciudad Santa Catarina",
   "lat": 25.6833,
   "lng": -100.45,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 306322
 },
 {
   "city": "Puerto La Cruz",
   "lat": 10.2167,
   "lng": -64.6167,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 306261
 },
 {
   "city": "Playa del Carmen",
   "lat": 20.6275,
   "lng": -87.0811,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 304942
 },
 {
   "city": "Vila Nova de Gaia",
   "lat": 41.1333,
   "lng": -8.6167,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 302295
 },
 {
   "city": "San Bernardo",
   "lat": -33.6,
   "lng": -70.7167,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 301313
 },
 {
   "city": "San Juan del Río",
   "lat": 20.3833,
   "lng": -99.9833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 301237
 },
 {
   "city": "Qianzhou",
   "lat": 28.3185,
   "lng": 109.7318,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 301000
 },
 {
   "city": "Mardan",
   "lat": 34.1958,
   "lng": 72.0447,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 300424
 },
 {
   "city": "Coatepeque",
   "lat": 14.7,
   "lng": -91.8667,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 300000
 },
 {
   "city": "Ciudad General Escobedo",
   "lat": 25.7933,
   "lng": -100.1583,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 299364
 },
 {
   "city": "Bahía Blanca",
   "lat": -38.7167,
   "lng": -62.2667,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 299101
 },
 {
   "city": "Jember",
   "lat": -8.1727,
   "lng": 113.6873,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 298585
 },
 {
   "city": "İskenderun",
   "lat": 36.5804,
   "lng": 36.17,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 297943
 },
 {
   "city": "Yangsan",
   "lat": 35.3386,
   "lng": 129.0386,
   "country": "South Korea",
   "iso2": "KR",
   "iso3": "KOR",
   "capital": "minor",
   "population": 297532
 },
 {
   "city": "Tampico",
   "lat": 22.2553,
   "lng": -97.8686,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 297284
 },
 {
   "city": "Augsburg",
   "lat": 48.3717,
   "lng": 10.8983,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 295830
 },
 {
   "city": "Montpellier",
   "lat": 43.6119,
   "lng": 3.8772,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 290053
 },
 {
   "city": "Hulin",
   "lat": 45.7671,
   "lng": 132.9646,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 290000
 },
 {
   "city": "Hong’an",
   "lat": 47.21,
   "lng": 123.61,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 289999
 },
 {
   "city": "Pendik",
   "lat": 40.8775,
   "lng": 29.2514,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 289380
 },
 {
   "city": "Punto Fijo",
   "lat": 11.7167,
   "lng": -70.1833,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 287558
 },
 {
   "city": "Malārd",
   "lat": 35.6658,
   "lng": 50.9767,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 281027
 },
 {
   "city": "Zhuji",
   "lat": 29.7169,
   "lng": 120.2314,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 278900
 },
 {
   "city": "Shaowu",
   "lat": 27.3417,
   "lng": 117.4869,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 278000
 },
 {
   "city": "Itagüí",
   "lat": 6.1726,
   "lng": -75.6096,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 276744
 },
 {
   "city": "Owo",
   "lat": 7.1664,
   "lng": 5.58,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 276574
 },
 {
   "city": "Linxia Chengguanzhen",
   "lat": 35.6,
   "lng": 103.2167,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 274466
 },
 {
   "city": "Yeosu",
   "lat": 34.7607,
   "lng": 127.6622,
   "country": "South Korea",
   "iso2": "KR",
   "iso3": "KOR",
   "capital": "minor",
   "population": 273761
 },
 {
   "city": "Majene",
   "lat": -3.5336,
   "lng": 118.966,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 272377
 },
 {
   "city": "Espoo",
   "lat": 60.21,
   "lng": 24.66,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 269802
 },
 {
   "city": "Floridablanca",
   "lat": 7.0697,
   "lng": -73.0978,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 267170
 },
 {
   "city": "Suncheon",
   "lat": 34.9506,
   "lng": 127.4875,
   "country": "South Korea",
   "iso2": "KR",
   "iso3": "KOR",
   "capital": "minor",
   "population": 265390
 },
 {
   "city": "Dezfūl",
   "lat": 32.3878,
   "lng": 48.4033,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 264709
 },
 {
   "city": "Nawabshah",
   "lat": 26.2442,
   "lng": 68.41,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 263102
 },
 {
   "city": "Gent",
   "lat": 51.0536,
   "lng": 3.7253,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 262219
 },
 {
   "city": "Heroica Nogales",
   "lat": 31.3186,
   "lng": -110.9458,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 261137
 },
 {
   "city": "Ciudad Benito Juárez",
   "lat": 25.65,
   "lng": -100.0833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 260683
 },
 {
   "city": "Mönchengladbach",
   "lat": 51.2,
   "lng": 6.4333,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 259665
 },
 {
   "city": "Gelsenkirchen",
   "lat": 51.5167,
   "lng": 7.1,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 259105
 },
 {
   "city": "Wutong",
   "lat": 30.6326,
   "lng": 120.5474,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 257800
 },
 {
   "city": "Verona",
   "lat": 45.4386,
   "lng": 10.9928,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 257275
 },
 {
   "city": "Antsirabe",
   "lat": -19.8667,
   "lng": 47.0333,
   "country": "Madagascar",
   "iso2": "MG",
   "iso3": "MDG",
   "capital": "minor",
   "population": 257163
 },
 {
   "city": "Ondo",
   "lat": 7.0904,
   "lng": 4.84,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 257005
 },
 {
   "city": "Horlivka",
   "lat": 48.3336,
   "lng": 38.0925,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 256714
 },
 {
   "city": "San Pedro Carchá",
   "lat": 15.4768,
   "lng": -90.312,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 255006
 },
 {
   "city": "Turmero",
   "lat": 10.2283,
   "lng": -67.4753,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 254880
 },
 {
   "city": "Higüey",
   "lat": 18.6181,
   "lng": -68.7111,
   "country": "Dominican Republic",
   "iso2": "DO",
   "iso3": "DOM",
   "capital": "minor",
   "population": 251243
 },
 {
   "city": "Jinshi",
   "lat": 29.6334,
   "lng": 111.8746,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 251064
 },
 {
   "city": "Iwo",
   "lat": 7.63,
   "lng": 4.18,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 250443
 },
 {
   "city": "Bābol",
   "lat": 36.55,
   "lng": 52.6833,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 250217
 },
 {
   "city": "Komsomol’sk-na-Amure",
   "lat": 50.55,
   "lng": 137,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 249810
 },
 {
   "city": "Aachen",
   "lat": 50.7762,
   "lng": 6.0838,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 248960
 },
 {
   "city": "Braunschweig",
   "lat": 52.2692,
   "lng": 10.5211,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 248561
 },
 {
   "city": "Sahiwal",
   "lat": 30.6706,
   "lng": 73.1064,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 247706
 },
 {
   "city": "Gdynia",
   "lat": 54.5189,
   "lng": 18.5319,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 247672
 },
 {
   "city": "Beichengqu",
   "lat": 40.4348,
   "lng": 113.1565,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 245608
 },
 {
   "city": "A Coruña",
   "lat": 43.3667,
   "lng": -8.3833,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 245468
 },
 {
   "city": "Merlo",
   "lat": -34.6653,
   "lng": -58.7275,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 244168
 },
 {
   "city": "Sabzevār",
   "lat": 36.2167,
   "lng": 57.6667,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 243700
 },
 {
   "city": "Chemnitz",
   "lat": 50.8333,
   "lng": 12.9167,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 243487
 },
 {
   "city": "Sapele",
   "lat": 5.8261,
   "lng": 5.6536,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 242652
 },
 {
   "city": "Zhangping",
   "lat": 25.2938,
   "lng": 117.4148,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 242000
 },
 {
   "city": "Baruta",
   "lat": 10.4335,
   "lng": -66.8754,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 240755
 },
 {
   "city": "Shanhu",
   "lat": 29.5908,
   "lng": 120.8176,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 240400
 },
 {
   "city": "Atushi",
   "lat": 39.7114,
   "lng": 76.1753,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 240368
 },
 {
   "city": "Mokpo",
   "lat": 34.7936,
   "lng": 126.3886,
   "country": "South Korea",
   "iso2": "KR",
   "iso3": "KOR",
   "capital": "minor",
   "population": 239524
 },
 {
   "city": "Lishui",
   "lat": 28.45,
   "lng": 119.9167,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 238400
 },
 {
   "city": "Wuyishan",
   "lat": 27.7562,
   "lng": 118.0267,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 238000
 },
 {
   "city": "Halle",
   "lat": 51.4828,
   "lng": 11.9697,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 237865
 },
 {
   "city": "Aarhus",
   "lat": 56.1572,
   "lng": 10.2107,
   "country": "Denmark",
   "iso2": "DK",
   "iso3": "DNK",
   "capital": "minor",
   "population": 237551
 },
 {
   "city": "Āmol",
   "lat": 36.4669,
   "lng": 52.3569,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 237528
 },
 {
   "city": "Monclova",
   "lat": 26.9103,
   "lng": -101.4222,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 237169
 },
 {
   "city": "Mirpur Khas",
   "lat": 25.5269,
   "lng": 69.0111,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 236961
 },
 {
   "city": "Pākdasht",
   "lat": 35.4817,
   "lng": 51.6803,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 236319
 },
 {
   "city": "Najafābād",
   "lat": 32.6342,
   "lng": 51.3667,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 235281
 },
 {
   "city": "Kamianske",
   "lat": 48.5076,
   "lng": 34.6132,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 235066
 },
 {
   "city": "Borūjerd",
   "lat": 33.8972,
   "lng": 48.7514,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 234997
 },
 {
   "city": "Singaraja",
   "lat": -8.1167,
   "lng": 115.0833,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 234468
 },
 {
   "city": "Messina",
   "lat": 38.1936,
   "lng": 15.5542,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 234293
 },
 {
   "city": "Okara",
   "lat": 30.81,
   "lng": 73.4597,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 232386
 },
 {
   "city": "Jiayuguan",
   "lat": 39.8112,
   "lng": 98.2862,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 231853
 },
 {
   "city": "Granada",
   "lat": 37.1781,
   "lng": -3.6008,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 231775
 },
 {
   "city": "Eindhoven",
   "lat": 51.4344,
   "lng": 5.4842,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 231642
 },
 {
   "city": "Freiburg im Breisgau",
   "lat": 47.995,
   "lng": 7.85,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 230940
 },
 {
   "city": "Fresnillo",
   "lat": 23.175,
   "lng": -102.8675,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 230865
 },
 {
   "city": "Quilmes",
   "lat": -34.7167,
   "lng": -58.2667,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 230810
 },
 {
   "city": "Envigado",
   "lat": 6.1719,
   "lng": -75.5803,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 228848
 },
 {
   "city": "Krefeld",
   "lat": 51.3333,
   "lng": 6.5667,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 226844
 },
 {
   "city": "Mubi",
   "lat": 10.2604,
   "lng": 13.2606,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 225705
 },
 {
   "city": "Varāmīn",
   "lat": 35.2714,
   "lng": 51.6511,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 225628
 },
 {
   "city": "Hunchun",
   "lat": 42.8679,
   "lng": 130.3585,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 225454
 },
 {
   "city": "Carlos Manuel de Céspedes",
   "lat": 21.5767,
   "lng": -78.2775,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 224488
 },
 {
   "city": "Huixquilucan",
   "lat": 19.3611,
   "lng": -99.3508,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 224042
 },
 {
   "city": "Częstochowa",
   "lat": 50.8096,
   "lng": 19.1222,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 223322
 },
 {
   "city": "Ji’an Shi",
   "lat": 41.1231,
   "lng": 126.1815,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 222938
 },
 {
   "city": "Guéckédou",
   "lat": 8.5667,
   "lng": -10.1333,
   "country": "Guinea",
   "iso2": "GN",
   "iso3": "GIN",
   "capital": "minor",
   "population": 221715
 },
 {
   "city": "Neyshābūr",
   "lat": 36.22,
   "lng": 58.82,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 221700
 },
 {
   "city": "Sāveh",
   "lat": 35.0211,
   "lng": 50.3564,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 220762
 },
 {
   "city": "Kremenchuk",
   "lat": 49.0775,
   "lng": 33.4239,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 220174
 },
 {
   "city": "Radom",
   "lat": 51.4036,
   "lng": 21.1567,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 219703
 },
 {
   "city": "Tuluá",
   "lat": 4.0847,
   "lng": -76.1986,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 219138
 },
 {
   "city": "Zākhū",
   "lat": 37.1436,
   "lng": 42.6819,
   "country": "Iraq",
   "iso2": "IQ",
   "iso3": "IRQ",
   "capital": "minor",
   "population": 219006
 },
 {
   "city": "Khomeynī Shahr",
   "lat": 32.7,
   "lng": 51.5211,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 218737
 },
 {
   "city": "Córdoba",
   "lat": 18.8942,
   "lng": -96.9347,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 218153
 },
 {
   "city": "Apapa",
   "lat": 6.4489,
   "lng": 3.3589,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 217362
 },
 {
   "city": "Tilburg",
   "lat": 51.57,
   "lng": 5.07,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 217259
 },
 {
   "city": "José C. Paz",
   "lat": -34.5167,
   "lng": -58.7667,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 216637
 },
 {
   "city": "Lübeck",
   "lat": 53.8697,
   "lng": 10.6864,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 215846
 },
 {
   "city": "Gangneung",
   "lat": 37.7556,
   "lng": 128.8961,
   "country": "South Korea",
   "iso2": "KR",
   "iso3": "KOR",
   "capital": "minor",
   "population": 215677
 },
 {
   "city": "Golmud",
   "lat": 36.4067,
   "lng": 94.9006,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 215214
 },
 {
   "city": "Guadalupe",
   "lat": 22.7528,
   "lng": -102.5078,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 215000
 },
 {
   "city": "Cúa",
   "lat": 10.1667,
   "lng": -66.8833,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 214823
 },
 {
   "city": "Vantaa",
   "lat": 60.3,
   "lng": 25.0333,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 214605
 },
 {
   "city": "La Victoria",
   "lat": 10.2278,
   "lng": -67.3336,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 214492
 },
 {
   "city": "Sa Đéc",
   "lat": 10.3105,
   "lng": 105.7397,
   "country": "Vietnam",
   "iso2": "VN",
   "iso3": "VNM",
   "capital": "minor",
   "population": 213610
 },
 {
   "city": "El Tigre",
   "lat": 8.8858,
   "lng": -64.2611,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 213524
 },
 {
   "city": "Babruysk",
   "lat": 53.15,
   "lng": 29.2333,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 212200
 },
 {
   "city": "Barrancabermeja",
   "lat": 7.0675,
   "lng": -73.8472,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 210729
 },
 {
   "city": "Padova",
   "lat": 45.4064,
   "lng": 11.8778,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 210440
 },
 {
   "city": "Dongning",
   "lat": 44.0608,
   "lng": 131.1187,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 210000
 },
 {
   "city": "Burutu",
   "lat": 5.35,
   "lng": 5.5167,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 209666
 },
 {
   "city": "Oberhausen",
   "lat": 51.4699,
   "lng": 6.8514,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 209566
 },
 {
   "city": "Ijebu-Ode",
   "lat": 6.8204,
   "lng": 3.92,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 209175
 },
 {
   "city": "Puerto Cabello",
   "lat": 10.4705,
   "lng": -68.0296,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 209080
 },
 {
   "city": "Bila Tserkva",
   "lat": 49.7956,
   "lng": 30.1167,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 208944
 },
 {
   "city": "Guarenas",
   "lat": 10.4739,
   "lng": -66.5383,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 208663
 },
 {
   "city": "Almere",
   "lat": 52.3758,
   "lng": 5.2256,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 207904
 },
 {
   "city": "Cascais",
   "lat": 38.6969,
   "lng": -9.4206,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 206479
 },
 {
   "city": "Loures",
   "lat": 38.8333,
   "lng": -9.1667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 205054
 },
 {
   "city": "Coquimbo",
   "lat": -29.9532,
   "lng": -71.338,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 204068
 },
 {
   "city": "Puerto Vallarta",
   "lat": 20.6458,
   "lng": -105.2222,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 203342
 },
 {
   "city": "Charleroi",
   "lat": 50.4167,
   "lng": 4.4442,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 201816
 },
 {
   "city": "Mai’Adua",
   "lat": 13.1906,
   "lng": 8.2117,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 201178
 },
 {
   "city": "Kassel",
   "lat": 51.3158,
   "lng": 9.4979,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 201048
 },
 {
   "city": "Jacobabad",
   "lat": 28.2769,
   "lng": 68.4514,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 200815
 },
 {
   "city": "Almería",
   "lat": 36.8403,
   "lng": -2.4681,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 200753
 },
 {
   "city": "Nasīm Shahr",
   "lat": 35.5644,
   "lng": 51.1647,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 200393
 },
 {
   "city": "Guacara",
   "lat": 10.2333,
   "lng": -67.8833,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 200212
 },
 {
   "city": "Poza Rica de Hidalgo",
   "lat": 20.5333,
   "lng": -97.45,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 200119
 },
 {
   "city": "Sosnowiec",
   "lat": 50.3,
   "lng": 19.1667,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 199974
 },
 {
   "city": "Taranto",
   "lat": 40.4181,
   "lng": 17.2408,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 198283
 },
 {
   "city": "Martapura",
   "lat": -3.4135,
   "lng": 114.8365,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 198239
 },
 {
   "city": "Helong",
   "lat": 42.5404,
   "lng": 129.0039,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 197885
 },
 {
   "city": "Tocuyito",
   "lat": 10.0889,
   "lng": -68.0922,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 197446
 },
 {
   "city": "Zhugang",
   "lat": 28.1277,
   "lng": 121.2288,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 197400
 },
 {
   "city": "Ciudad Madero",
   "lat": 22.25,
   "lng": -97.8333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 197216
 },
 {
   "city": "Brescia",
   "lat": 45.5389,
   "lng": 10.2203,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 196745
 },
 {
   "city": "Liège",
   "lat": 50.6397,
   "lng": 5.5706,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 196623
 },
 {
   "city": "Zipaquirá",
   "lat": 5.0247,
   "lng": -74.0014,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 196409
 },
 {
   "city": "Parma",
   "lat": 44.8015,
   "lng": 10.328,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 195687
 },
 {
   "city": "Acarigua",
   "lat": 9.5597,
   "lng": -69.2019,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 195637
 },
 {
   "city": "Karaköprü",
   "lat": 37.1803,
   "lng": 38.8111,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 195552
 },
 {
   "city": "Cuautla",
   "lat": 18.8167,
   "lng": -98.95,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 194786
 },
 {
   "city": "Būkān",
   "lat": 36.5211,
   "lng": 46.2089,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 193501
 },
 {
   "city": "Prato",
   "lat": 43.8808,
   "lng": 11.0966,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 193325
 },
 {
   "city": "San Juan Sacatepéquez",
   "lat": 14.7189,
   "lng": -90.6442,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 193000
 },
 {
   "city": "Hyesan",
   "lat": 41.4,
   "lng": 128.1833,
   "country": "North Korea",
   "iso2": "KP",
   "iso3": "PRK",
   "capital": "minor",
   "population": 192680
 },
 {
   "city": "Godoy Cruz",
   "lat": -32.9167,
   "lng": -68.8333,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 191299
 },
 {
   "city": "Valera",
   "lat": 9.3206,
   "lng": -70.6078,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 191167
 },
 {
   "city": "Sơn Tây",
   "lat": 21.1382,
   "lng": 105.505,
   "country": "Vietnam",
   "iso2": "VN",
   "iso3": "VNM",
   "capital": "minor",
   "population": 189547
 },
 {
   "city": "Donghua",
   "lat": 35.2175,
   "lng": 106.6545,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 189333
 },
 {
   "city": "Araure",
   "lat": 9.5667,
   "lng": -69.2167,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 188800
 },
 {
   "city": "Hagen",
   "lat": 51.3594,
   "lng": 7.475,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 188687
 },
 {
   "city": "Selçuklu",
   "lat": 37.9312,
   "lng": 32.4996,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 188224
 },
 {
   "city": "Donostia",
   "lat": 43.32,
   "lng": -1.98,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 188102
 },
 {
   "city": "Prabumulih",
   "lat": -3.462,
   "lng": 104.2229,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 188082
 },
 {
   "city": "Xiashi",
   "lat": 30.5333,
   "lng": 120.6833,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 187300
 },
 {
   "city": "Guatire",
   "lat": 10.4717,
   "lng": -66.5406,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 187262
 },
 {
   "city": "San Diego",
   "lat": 10.2558,
   "lng": -67.9539,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 187215
 },
 {
   "city": "Kayapınar",
   "lat": 37.94,
   "lng": 40.19,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 185626
 },
 {
   "city": "Modena",
   "lat": 44.6458,
   "lng": 10.9257,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 185273
 },
 {
   "city": "Luzhang",
   "lat": 25.8519,
   "lng": 98.8562,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 184835
 },
 {
   "city": "Pak Kret",
   "lat": 13.9125,
   "lng": 100.4978,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 184501
 },
 {
   "city": "Al Qāmishlī",
   "lat": 37.05,
   "lng": 41.2167,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 184231
 },
 {
   "city": "Siguiri",
   "lat": 11.4189,
   "lng": -9.1644,
   "country": "Guinea",
   "iso2": "GN",
   "iso3": "GIN",
   "capital": "minor",
   "population": 183875
 },
 {
   "city": "Breda",
   "lat": 51.5875,
   "lng": 4.775,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 183873
 },
 {
   "city": "Trondheim",
   "lat": 63.44,
   "lng": 10.4,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 183378
 },
 {
   "city": "Banjar",
   "lat": -7.3667,
   "lng": 108.5333,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 182819
 },
 {
   "city": "Pinrang",
   "lat": -3.7857,
   "lng": 119.6522,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 182731
 },
 {
   "city": "Meram",
   "lat": 37.8364,
   "lng": 32.4383,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 182444
 },
 {
   "city": "Reims",
   "lat": 49.2628,
   "lng": 4.0347,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 182211
 },
 {
   "city": "Khowy",
   "lat": 38.5503,
   "lng": 44.9519,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 182000
 },
 {
   "city": "Reggio di Calabria",
   "lat": 38.1144,
   "lng": 15.65,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 181447
 },
 {
   "city": "Epe",
   "lat": 6.5573,
   "lng": 3.9912,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 181409
 },
 {
   "city": "Turbo",
   "lat": 8.0931,
   "lng": -76.7283,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 181000
 },
 {
   "city": "Berazategui",
   "lat": -34.7679,
   "lng": -58.2133,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 180523
 },
 {
   "city": "Funtua",
   "lat": 11.5204,
   "lng": 7.32,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 180475
 },
 {
   "city": "Longjing",
   "lat": 42.77,
   "lng": 129.4197,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 180307
 },
 {
   "city": "Tongjiang",
   "lat": 47.6502,
   "lng": 132.503,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 180000
 },
 {
   "city": "Divo",
   "lat": 5.8372,
   "lng": -5.3572,
   "country": "Côte d'Ivoire",
   "iso2": "CI",
   "iso3": "CIV",
   "capital": "minor",
   "population": 179455
 },
 {
   "city": "Dosquebradas",
   "lat": 4.8361,
   "lng": -75.6761,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 179301
 },
 {
   "city": "Purwakarta",
   "lat": -6.54,
   "lng": 107.44,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 179233
 },
 {
   "city": "Hamm",
   "lat": 51.6667,
   "lng": 7.8167,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 178967
 },
 {
   "city": "Gliwice",
   "lat": 50.3011,
   "lng": 18.6498,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 178186
 },
 {
   "city": "Nijmegen",
   "lat": 51.8475,
   "lng": 5.8625,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 177659
 },
 {
   "city": "Lin’an",
   "lat": 23.6236,
   "lng": 102.8097,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 177303
 },
 {
   "city": "Ciudad Valles",
   "lat": 21.9833,
   "lng": -99.0167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 177022
 },
 {
   "city": "San Luis Río Colorado",
   "lat": 32.4767,
   "lng": -114.7625,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 176685
 },
 {
   "city": "Toulon",
   "lat": 43.1258,
   "lng": 5.9306,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 176198
 },
 {
   "city": "Ereğli",
   "lat": 41.2583,
   "lng": 31.425,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 175605
 },
 {
   "city": "Matosinhos",
   "lat": 41.1867,
   "lng": -8.6844,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 175478
 },
 {
   "city": "Marāgheh",
   "lat": 37.3919,
   "lng": 46.2392,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 175255
 },
 {
   "city": "Amadora",
   "lat": 38.75,
   "lng": -9.2333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 175136
 },
 {
   "city": "Chicoloapan",
   "lat": 19.4167,
   "lng": -98.9,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 175053
 },
 {
   "city": "Sīrjān",
   "lat": 29.47,
   "lng": 55.73,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 175000
 },
 {
   "city": "Zabrze",
   "lat": 50.3,
   "lng": 18.7833,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 174349
 },
 {
   "city": "Baranavichy",
   "lat": 53.1167,
   "lng": 25.9833,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 174183
 },
 {
   "city": "Burgos",
   "lat": 42.3408,
   "lng": -3.6997,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 174051
 },
 {
   "city": "Almada",
   "lat": 38.6803,
   "lng": -9.1583,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 174030
 },
 {
   "city": "Piedras Negras",
   "lat": 28.7,
   "lng": -100.5231,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 173959
 },
 {
   "city": "Linjiang",
   "lat": 41.8471,
   "lng": 126.9301,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 173903
 },
 {
   "city": "Carúpano",
   "lat": 10.6722,
   "lng": -63.2403,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 173877
 },
 {
   "city": "Bida",
   "lat": 9.0804,
   "lng": 6.01,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 173849
 },
 {
   "city": "Shāhīn Shahr",
   "lat": 32.8639,
   "lng": 51.5475,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 173329
 },
 {
   "city": "Saint-Étienne",
   "lat": 45.4347,
   "lng": 4.3903,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 173089
 },
 {
   "city": "Bielsko-Biała",
   "lat": 49.8225,
   "lng": 19.0444,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 172781
 },
 {
   "city": "Albacete",
   "lat": 38.9956,
   "lng": -1.8558,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 172722
 },
 {
   "city": "Castellón de la Plana",
   "lat": 39.9831,
   "lng": -0.0331,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 172589
 },
 {
   "city": "Ludwigshafen",
   "lat": 49.4811,
   "lng": 8.4353,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 172557
 },
 {
   "city": "Banyuwangi",
   "lat": -8.195,
   "lng": 114.3696,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 172424
 },
 {
   "city": "Moca",
   "lat": 19.3833,
   "lng": -70.5167,
   "country": "Dominican Republic",
   "iso2": "DO",
   "iso3": "DOM",
   "capital": "minor",
   "population": 172294
 },
 {
   "city": "Oeiras",
   "lat": 38.697,
   "lng": -9.3017,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 172120
 },
 {
   "city": "Reggio Emilia",
   "lat": 44.7,
   "lng": 10.6333,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 171944
 },
 {
   "city": "Bytom",
   "lat": 50.347,
   "lng": 18.923,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 171515
 },
 {
   "city": "Mülheim",
   "lat": 51.4275,
   "lng": 6.8825,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 170921
 },
 {
   "city": "Kohat",
   "lat": 33.5869,
   "lng": 71.4414,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 170800
 },
 {
   "city": "Malāyer",
   "lat": 34.2942,
   "lng": 48.82,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 170237
 },
 {
   "city": "Comitán",
   "lat": 16.2511,
   "lng": -92.1342,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 170000
 },
 {
   "city": "Le Havre",
   "lat": 49.49,
   "lng": 0.1,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 169733
 },
 {
   "city": "Ciudad del Carmen",
   "lat": 18.6333,
   "lng": -91.8333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 169466
 },
 {
   "city": "Fenglu",
   "lat": 24.6728,
   "lng": 102.9149,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 169366
 },
 {
   "city": "Santa Rita",
   "lat": 10.2003,
   "lng": -67.5514,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 169158
 },
 {
   "city": "Cuauhtémoc",
   "lat": 28.405,
   "lng": -106.8667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 168482
 },
 {
   "city": "Oldenburg",
   "lat": 53.1439,
   "lng": 8.2139,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 168210
 },
 {
   "city": "Gondomar",
   "lat": 41.15,
   "lng": -8.5333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 168027
 },
 {
   "city": "Basuo",
   "lat": 19.102,
   "lng": 108.6391,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 167636
 },
 {
   "city": "Kuytun",
   "lat": 44.4196,
   "lng": 84.9012,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 166261
 },
 {
   "city": "Al Kūfah",
   "lat": 32.03,
   "lng": 44.4,
   "country": "Iraq",
   "iso2": "IQ",
   "iso3": "IRQ",
   "capital": "minor",
   "population": 166100
 },
 {
   "city": "Saqqez",
   "lat": 36.25,
   "lng": 46.2736,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 165258
 },
 {
   "city": "Fukang",
   "lat": 44.1523,
   "lng": 87.9793,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 165006
 },
 {
   "city": "Lagos de Moreno",
   "lat": 21.3564,
   "lng": -101.9292,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 164981
 },
 {
   "city": "San Andrés Tuxtla",
   "lat": 18.4487,
   "lng": -95.2126,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 164834
 },
 {
   "city": "Osnabrück",
   "lat": 52.2789,
   "lng": 8.0431,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 164748
 },
 {
   "city": "Leverkusen",
   "lat": 51.0333,
   "lng": 6.9833,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 163838
 },
 {
   "city": "Piraeus",
   "lat": 37.943,
   "lng": 23.6469,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 163688
 },
 {
   "city": "Pocheon",
   "lat": 37.8944,
   "lng": 127.1992,
   "country": "South Korea",
   "iso2": "KR",
   "iso3": "KOR",
   "capital": "minor",
   "population": 163388
 },
 {
   "city": "Muzaffargarh",
   "lat": 30.0703,
   "lng": 71.1933,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 163268
 },
 {
   "city": "Mostar",
   "lat": 43.3494,
   "lng": 17.8125,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 163067
 },
 {
   "city": "Bandar-e Māhshahr",
   "lat": 30.5589,
   "lng": 49.1981,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 162797
 },
 {
   "city": "Simao",
   "lat": 22.7807,
   "lng": 100.9782,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 162725
 },
 {
   "city": "Anaco",
   "lat": 9.4333,
   "lng": -64.4667,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 162704
 },
 {
   "city": "Jiutepec",
   "lat": 18.8833,
   "lng": -99.1667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 162427
 },
 {
   "city": "Ash Shaţrah",
   "lat": 31.4175,
   "lng": 46.1772,
   "country": "Iraq",
   "iso2": "IQ",
   "iso3": "IRQ",
   "capital": "minor",
   "population": 161949
 },
 {
   "city": "Rafsanjān",
   "lat": 30.4,
   "lng": 56,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 161909
 },
 {
   "city": "Zemun",
   "lat": 44.85,
   "lng": 20.4,
   "country": "Serbia",
   "iso2": "RS",
   "iso3": "SRB",
   "capital": "minor",
   "population": 161596
 },
 {
   "city": "Apeldoorn",
   "lat": 52.21,
   "lng": 5.97,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 161156
 },
 {
   "city": "Papantla de Olarte",
   "lat": 20.4478,
   "lng": -97.32,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 161097
 },
 {
   "city": "Tulancingo",
   "lat": 20.0833,
   "lng": -98.3667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 161069
 },
 {
   "city": "Tacheng",
   "lat": 46.8511,
   "lng": 83.1488,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 161037
 },
 {
   "city": "Girón",
   "lat": 7.0731,
   "lng": -73.1681,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 160403
 },
 {
   "city": "Ciudad Acuña",
   "lat": 29.3242,
   "lng": -100.9317,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 160225
 },
 {
   "city": "José María Ezeiza",
   "lat": -34.8333,
   "lng": -58.5167,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 160219
 },
 {
   "city": "San Nicolás de los Arroyos",
   "lat": -33.3333,
   "lng": -60.2167,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 160000
 },
 {
   "city": "Tyre",
   "lat": 33.2667,
   "lng": 35.2,
   "country": "Lebanon",
   "iso2": "LB",
   "iso3": "LBN",
   "capital": "minor",
   "population": 160000
 },
 {
   "city": "Enschede",
   "lat": 52.2236,
   "lng": 6.8956,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 159703
 },
 {
   "city": "Solingen",
   "lat": 51.1667,
   "lng": 7.0833,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 159360
 },
 {
   "city": "Darmstadt",
   "lat": 49.8667,
   "lng": 8.65,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 159207
 },
 {
   "city": "Hat Yai",
   "lat": 7.0167,
   "lng": 100.4667,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 159130
 },
 {
   "city": "Ravenna",
   "lat": 44.4161,
   "lng": 12.2017,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 159115
 },
 {
   "city": "Puerto Plata",
   "lat": 19.7958,
   "lng": -70.6944,
   "country": "Dominican Republic",
   "iso2": "DO",
   "iso3": "DOM",
   "capital": "minor",
   "population": 158756
 },
 {
   "city": "Heidelberg",
   "lat": 49.4122,
   "lng": 8.71,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 158741
 },
 {
   "city": "Sāmarrā’",
   "lat": 34.194,
   "lng": 43.875,
   "country": "Iraq",
   "iso2": "IQ",
   "iso3": "IRQ",
   "capital": "minor",
   "population": 158508
 },
 {
   "city": "Livorno",
   "lat": 43.55,
   "lng": 10.3167,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 158371
 },
 {
   "city": "Río Cuarto",
   "lat": -33.123,
   "lng": -64.3478,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 158298
 },
 {
   "city": "Seixal",
   "lat": 38.6333,
   "lng": -9.0833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 158269
 },
 {
   "city": "Odense",
   "lat": 55.4004,
   "lng": 10.3833,
   "country": "Denmark",
   "iso2": "DK",
   "iso3": "DNK",
   "capital": "minor",
   "population": 158222
 },
 {
   "city": "Guimarães",
   "lat": 41.445,
   "lng": -8.2908,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 158124
 },
 {
   "city": "San Cristóbal",
   "lat": 16.7367,
   "lng": -92.6383,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 158121
 },
 {
   "city": "Grenoble",
   "lat": 45.1715,
   "lng": 5.7224,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 157650
 },
 {
   "city": "Calama",
   "lat": -22.4624,
   "lng": -68.9272,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 157575
 },
 {
   "city": "Mandi Bahauddin",
   "lat": 32.5861,
   "lng": 73.4917,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 157352
 },
 {
   "city": "Xiaping",
   "lat": 26.7646,
   "lng": 114.3093,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 157000
 },
 {
   "city": "Herne",
   "lat": 51.5426,
   "lng": 7.219,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 156374
 },
 {
   "city": "Amersfoort",
   "lat": 52.15,
   "lng": 5.38,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 156286
 },
 {
   "city": "Cẩm Phả",
   "lat": 21.0065,
   "lng": 107.2726,
   "country": "Vietnam",
   "iso2": "VN",
   "iso3": "VNM",
   "capital": "minor",
   "population": 156000
 },
 {
   "city": "Ar Ramthā",
   "lat": 32.5592,
   "lng": 36.0069,
   "country": "Jordan",
   "iso2": "JO",
   "iso3": "JOR",
   "capital": "minor",
   "population": 155693
 },
 {
   "city": "Horad Barysaw",
   "lat": 54.226,
   "lng": 28.4922,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 155389
 },
 {
   "city": "Melitopol",
   "lat": 46.8333,
   "lng": 35.3667,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 154992
 },
 {
   "city": "Zango",
   "lat": 12.9333,
   "lng": 8.5333,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 154743
 },
 {
   "city": "Angers",
   "lat": 47.4736,
   "lng": -0.5542,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 154508
 },
 {
   "city": "Hoofddorp",
   "lat": 52.3008,
   "lng": 4.6653,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 154235
 },
 {
   "city": "Neuss",
   "lat": 51.2003,
   "lng": 6.6939,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 153796
 },
 {
   "city": "Palo Negro",
   "lat": 10.16,
   "lng": -67.5582,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 153706
 },
 {
   "city": "Hoeryŏng",
   "lat": 42.4333,
   "lng": 129.75,
   "country": "North Korea",
   "iso2": "KP",
   "iso3": "PRK",
   "capital": "minor",
   "population": 153532
 },
 {
   "city": "Ixtlahuaca",
   "lat": 19.5689,
   "lng": -99.7669,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 153184
 },
 {
   "city": "Regensburg",
   "lat": 49.0167,
   "lng": 12.0833,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 152610
 },
 {
   "city": "San Martin Texmelucan de Labastida",
   "lat": 19.2693,
   "lng": -98.4283,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 152051
 },
 {
   "city": "Gonbad-e Kāvūs",
   "lat": 37.25,
   "lng": 55.1672,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 151910
 },
 {
   "city": "Gwangyang",
   "lat": 34.9403,
   "lng": 127.7017,
   "country": "South Korea",
   "iso2": "KR",
   "iso3": "KOR",
   "capital": "minor",
   "population": 151834
 },
 {
   "city": "Foggia",
   "lat": 41.4584,
   "lng": 15.5519,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 151372
 },
 {
   "city": "Dahuaishu",
   "lat": 36.2601,
   "lng": 111.6743,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 151037
 },
 {
   "city": "Manzanillo",
   "lat": 20.3397,
   "lng": -77.1086,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 150999
 },
 {
   "city": "Badajoz",
   "lat": 38.8803,
   "lng": -6.9753,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 150610
 },
 {
   "city": "Paderborn",
   "lat": 51.7167,
   "lng": 8.7667,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 150580
 },
 {
   "city": "Delicias",
   "lat": 28.1931,
   "lng": -105.4717,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 150506
 },
 {
   "city": "Shāhrūd",
   "lat": 36.4181,
   "lng": 54.9764,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 150129
 },
 {
   "city": "Valle de Santiago",
   "lat": 20.3928,
   "lng": -101.1969,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 150054
 },
 {
   "city": "Ocumare del Tuy",
   "lat": 10.1136,
   "lng": -66.7814,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 150000
 },
 {
   "city": "Sievierodonetsk",
   "lat": 48.95,
   "lng": 38.4833,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 150000
 },
 {
   "city": "Pénjamo",
   "lat": 20.4311,
   "lng": -101.7222,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 149936
 },
 {
   "city": "Saumlaki",
   "lat": -7.975,
   "lng": 131.3075,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 149790
 },
 {
   "city": "Nîmes",
   "lat": 43.838,
   "lng": 4.361,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 149633
 },
 {
   "city": "Concordia",
   "lat": -31.3922,
   "lng": -58.0169,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 149450
 },
 {
   "city": "Rimini",
   "lat": 44.0594,
   "lng": 12.5683,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 149403
 },
 {
   "city": "Marvdasht",
   "lat": 29.8742,
   "lng": 52.8025,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 148858
 },
 {
   "city": "Abbottabad",
   "lat": 34.15,
   "lng": 73.2167,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 148587
 },
 {
   "city": "Quilpué",
   "lat": -33.0498,
   "lng": -71.4415,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 147991
 },
 {
   "city": "Turbat",
   "lat": 26.0031,
   "lng": 63.0544,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 147791
 },
 {
   "city": "Osorno",
   "lat": -40.5667,
   "lng": -73.15,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 147460
 },
 {
   "city": "Clermont-Ferrand",
   "lat": 45.7831,
   "lng": 3.0824,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 146734
 },
 {
   "city": "Florencio Varela",
   "lat": -34.8167,
   "lng": -58.3833,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 146704
 },
 {
   "city": "Colina",
   "lat": -33.2,
   "lng": -70.6833,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 146207
 },
 {
   "city": "Dadu",
   "lat": 26.7319,
   "lng": 67.775,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 146179
 },
 {
   "city": "García",
   "lat": 25.8167,
   "lng": -100.5833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 145867
 },
 {
   "city": "Baní",
   "lat": 18.29,
   "lng": -70.33,
   "country": "Dominican Republic",
   "iso2": "DO",
   "iso3": "DOM",
   "capital": "minor",
   "population": 145595
 },
 {
   "city": "Qūchān",
   "lat": 37.1118,
   "lng": 58.5015,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 145531
 },
 {
   "city": "Villa de Cura",
   "lat": 10.0386,
   "lng": -67.4894,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 145098
 },
 {
   "city": "Khairpur Mir’s",
   "lat": 27.5333,
   "lng": 68.7667,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 144949
 },
 {
   "city": "Dongxing",
   "lat": 21.5833,
   "lng": 108.05,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 144709
 },
 {
   "city": "Odivelas",
   "lat": 38.8,
   "lng": -9.1833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 144549
 },
 {
   "city": "Salamanca",
   "lat": 40.9667,
   "lng": -5.6639,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 143269
 },
 {
   "city": "Le Mans",
   "lat": 48.0077,
   "lng": 0.1984,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 143252
 },
 {
   "city": "Aix-en-Provence",
   "lat": 43.5263,
   "lng": 5.4454,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 143097
 },
 {
   "city": "Los Ángeles",
   "lat": -37.4707,
   "lng": -72.3517,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 143023
 },
 {
   "city": "Jinjiang",
   "lat": 19.7386,
   "lng": 110.0058,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 142948
 },
 {
   "city": "Huelva",
   "lat": 37.25,
   "lng": -6.95,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 142538
 },
 {
   "city": "Altay",
   "lat": 47.8666,
   "lng": 88.1166,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 142000
 },
 {
   "city": "Bahawalnagar",
   "lat": 29.9944,
   "lng": 73.2536,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 141935
 },
 {
   "city": "Jahrom",
   "lat": 28.5,
   "lng": 53.56,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 141634
 },
 {
   "city": "Nong’an",
   "lat": 44.419,
   "lng": 125.1702,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 141482
 },
 {
   "city": "Tepatitlán de Morelos",
   "lat": 20.817,
   "lng": -102.733,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 141322
 },
 {
   "city": "Khasavyurt",
   "lat": 43.25,
   "lng": 46.5833,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 141259
 },
 {
   "city": "Rybnik",
   "lat": 50.0833,
   "lng": 18.5,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 141000
 },
 {
   "city": "Iguala de la Independencia",
   "lat": 18.35,
   "lng": -99.5333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 140363
 },
 {
   "city": "Yaritagua",
   "lat": 10.0753,
   "lng": -69.1283,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 140256
 },
 {
   "city": "Lleida",
   "lat": 41.6167,
   "lng": 0.6333,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 140080
 },
 {
   "city": "Cuautitlán Izcalli",
   "lat": 19.65,
   "lng": -99.25,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 140059
 },
 {
   "city": "Torbat-e Ḩeydarīyeh",
   "lat": 35.2739,
   "lng": 59.2194,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 140019
 },
 {
   "city": "Peristéri",
   "lat": 38.0167,
   "lng": 23.6833,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 139981
 },
 {
   "city": "Fusagasugá",
   "lat": 4.3372,
   "lng": -74.3644,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 139805
 },
 {
   "city": "Kanasín",
   "lat": 20.9344,
   "lng": -89.5578,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 139753
 },
 {
   "city": "Brest",
   "lat": 48.39,
   "lng": -4.49,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 139602
 },
 {
   "city": "Momostenango",
   "lat": 15.0444,
   "lng": -91.4083,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 139552
 },
 {
   "city": "Pakpattan",
   "lat": 30.35,
   "lng": 73.4,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 139525
 },
 {
   "city": "Ruda Śląska",
   "lat": 50.2701,
   "lng": 18.8742,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 139412
 },
 {
   "city": "Pīrānshahr",
   "lat": 36.6944,
   "lng": 45.1417,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 138864
 },
 {
   "city": "Candelaria",
   "lat": 13.9311,
   "lng": 121.4233,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 137881
 },
 {
   "city": "Gunungsitoli",
   "lat": 1.1167,
   "lng": 97.5667,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 137104
 },
 {
   "city": "Ingolstadt",
   "lat": 48.7636,
   "lng": 11.4261,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 136981
 },
 {
   "city": "Curicó",
   "lat": -34.9854,
   "lng": -71.2394,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 136954
 },
 {
   "city": "Vila Franca de Xira",
   "lat": 38.95,
   "lng": -8.9833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 136886
 },
 {
   "city": "Marīvān",
   "lat": 35.5269,
   "lng": 46.1761,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 136654
 },
 {
   "city": "San Justo",
   "lat": -34.6833,
   "lng": -58.55,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 136604
 },
 {
   "city": "Tours",
   "lat": 47.3936,
   "lng": 0.6892,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 136463
 },
 {
   "city": "San José del Cabo",
   "lat": 23.0614,
   "lng": -109.7081,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 136285
 },
 {
   "city": "Pageralam",
   "lat": -4.0217,
   "lng": 103.2522,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 136244
 },
 {
   "city": "Rionegro",
   "lat": 6.1533,
   "lng": -75.3742,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 135465
 },
 {
   "city": "Tarragona",
   "lat": 41.1187,
   "lng": 1.2453,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 135436
 },
 {
   "city": "Maia",
   "lat": 41.2333,
   "lng": -8.6167,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 135306
 },
 {
   "city": "Ituzaingó",
   "lat": -34.6582,
   "lng": -58.6672,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 135275
 },
 {
   "city": "Andīmeshk",
   "lat": 32.45,
   "lng": 48.35,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 135116
 },
 {
   "city": "Cartago",
   "lat": 4.75,
   "lng": -75.91,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 134827
 },
 {
   "city": "Shahreẕā",
   "lat": 32.0089,
   "lng": 51.8667,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 134592
 },
 {
   "city": "Zābol",
   "lat": 31.0308,
   "lng": 61.4972,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 134590
 },
 {
   "city": "Salerno",
   "lat": 40.6806,
   "lng": 14.7597,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 133970
 },
 {
   "city": "Amiens",
   "lat": 49.892,
   "lng": 2.299,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 133891
 },
 {
   "city": "Famalicão",
   "lat": 41.4167,
   "lng": -8.5167,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 133832
 },
 {
   "city": "Yunxian Chengguanzhen",
   "lat": 32.8082,
   "lng": 110.8136,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 133558
 },
 {
   "city": "Tando Allahyar",
   "lat": 25.4667,
   "lng": 68.7167,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 133487
 },
 {
   "city": "Pitalito",
   "lat": 1.8539,
   "lng": -76.0514,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 133205
 },
 {
   "city": "Khorramshahr",
   "lat": 30.4333,
   "lng": 48.1833,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 133097
 },
 {
   "city": "San Luis",
   "lat": 16.2,
   "lng": -89.44,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 132470
 },
 {
   "city": "Ferrara",
   "lat": 44.8353,
   "lng": 11.6199,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 132278
 },
 {
   "city": "Calabozo",
   "lat": 8.9219,
   "lng": -67.4283,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 131989
 },
 {
   "city": "Tultepec",
   "lat": 19.685,
   "lng": -99.1281,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 131567
 },
 {
   "city": "Limoges",
   "lat": 45.8353,
   "lng": 1.2625,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 131479
 },
 {
   "city": "Marand",
   "lat": 38.4167,
   "lng": 45.7667,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 130825
 },
 {
   "city": "Nueva Concepción",
   "lat": 14.1997,
   "lng": -91.2997,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 130754
 },
 {
   "city": "Jīroft",
   "lat": 28.6781,
   "lng": 57.7406,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 130429
 },
 {
   "city": "Los Guayos",
   "lat": 10.1833,
   "lng": -67.9333,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 130345
 },
 {
   "city": "Lucheng",
   "lat": 30.0553,
   "lng": 101.9648,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 130142
 },
 {
   "city": "Girardot",
   "lat": 4.3036,
   "lng": -74.8039,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 129834
 },
 {
   "city": "Ciénaga",
   "lat": 11.0067,
   "lng": -74.2467,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 129414
 },
 {
   "city": "Tychy",
   "lat": 50.1667,
   "lng": 19,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 129322
 },
 {
   "city": "Táriba",
   "lat": 7.8167,
   "lng": -72.2167,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 128590
 },
 {
   "city": "Fengcheng",
   "lat": 37.4313,
   "lng": 112.027,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 128571
 },
 {
   "city": "Annecy",
   "lat": 45.916,
   "lng": 6.133,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 128199
 },
 {
   "city": "Vihari",
   "lat": 30.0419,
   "lng": 72.3528,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 128034
 },
 {
   "city": "Guasdualito",
   "lat": 7.2467,
   "lng": -70.7292,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 128025
 },
 {
   "city": "Würzburg",
   "lat": 49.7944,
   "lng": 9.9294,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 127880
 },
 {
   "city": "Salmās",
   "lat": 38.2,
   "lng": 44.7667,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 127864
 },
 {
   "city": "Fürth",
   "lat": 49.4783,
   "lng": 10.9903,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 127748
 },
 {
   "city": "Bam",
   "lat": 29.1083,
   "lng": 58.3583,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 127396
 },
 {
   "city": "Duitama",
   "lat": 5.8219,
   "lng": -73.0297,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 126670
 },
 {
   "city": "Latina",
   "lat": 41.4676,
   "lng": 12.9037,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 126470
 },
 {
   "city": "Heilbronn",
   "lat": 49.1404,
   "lng": 9.218,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 126458
 },
 {
   "city": "Ulm",
   "lat": 48.3984,
   "lng": 9.9916,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 126405
 },
 {
   "city": "Pforzheim",
   "lat": 48.895,
   "lng": 8.705,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 126016
 },
 {
   "city": "Pinsk",
   "lat": 52.1153,
   "lng": 26.1031,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 125900
 },
 {
   "city": "Gashua",
   "lat": 12.8705,
   "lng": 11.04,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 125817
 },
 {
   "city": "Santa Lucía Cotzumalguapa",
   "lat": 14.3333,
   "lng": -91.0167,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 125473
 },
 {
   "city": "Bonao",
   "lat": 18.9333,
   "lng": -70.4,
   "country": "Dominican Republic",
   "iso2": "DO",
   "iso3": "DOM",
   "capital": "minor",
   "population": 125338
 },
 {
   "city": "Cam Ranh",
   "lat": 11.9136,
   "lng": 109.1369,
   "country": "Vietnam",
   "iso2": "VN",
   "iso3": "VNM",
   "capital": "minor",
   "population": 125311
 },
 {
   "city": "Amatitlán",
   "lat": 14.4741,
   "lng": -90.6247,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 125000
 },
 {
   "city": "Zoetermeer",
   "lat": 52.0611,
   "lng": 4.4933,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 124994
 },
 {
   "city": "Leiden",
   "lat": 52.1544,
   "lng": 4.4947,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 124899
 },
 {
   "city": "Zhaxi",
   "lat": 27.844,
   "lng": 105.0451,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 124458
 },
 {
   "city": "New Mirpur",
   "lat": 33.1333,
   "lng": 73.75,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 124352
 },
 {
   "city": "Drohobych",
   "lat": 49.35,
   "lng": 23.5,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 124269
 },
 {
   "city": "Magalang",
   "lat": 15.2167,
   "lng": 120.6667,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 124188
 },
 {
   "city": "Wolfsburg",
   "lat": 52.4231,
   "lng": 10.7872,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 124151
 },
 {
   "city": "Magangué",
   "lat": 9.2467,
   "lng": -74.7594,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 123906
 },
 {
   "city": "Maicao",
   "lat": 11.3778,
   "lng": -72.2414,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 123757
 },
 {
   "city": "Derbent",
   "lat": 42.0692,
   "lng": 48.2958,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 123720
 },
 {
   "city": "Melipilla",
   "lat": -33.7,
   "lng": -71.2167,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 123627
 },
 {
   "city": "Monza",
   "lat": 45.5836,
   "lng": 9.2736,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 123598
 },
 {
   "city": "Dūmā",
   "lat": 33.5722,
   "lng": 36.4019,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 123494
 },
 {
   "city": "Indramayu",
   "lat": -6.3356,
   "lng": 108.319,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 123263
 },
 {
   "city": "Las Margaritas",
   "lat": 16.3078,
   "lng": -91.9683,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 122821
 },
 {
   "city": "Pati",
   "lat": -6.7415,
   "lng": 111.0347,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 122785
 },
 {
   "city": "Kâhta",
   "lat": 37.7803,
   "lng": 38.6217,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 122774
 },
 {
   "city": "Machiques",
   "lat": 10.0667,
   "lng": -72.5667,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 122734
 },
 {
   "city": "Dąbrowa Górnicza",
   "lat": 50.3239,
   "lng": 19.1947,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 122712
 },
 {
   "city": "San Pedro Garza García",
   "lat": 25.6667,
   "lng": -100.3,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 122659
 },
 {
   "city": "Ciudad Hidalgo",
   "lat": 19.6917,
   "lng": -100.5536,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 122619
 },
 {
   "city": "Behbahān",
   "lat": 30.5958,
   "lng": 50.2417,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 122604
 },
 {
   "city": "Cagua",
   "lat": 10.1875,
   "lng": -67.4611,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 122571
 },
 {
   "city": "Ciudad Ojeda",
   "lat": 10.2,
   "lng": -71.3,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 122124
 },
 {
   "city": "León",
   "lat": 42.6056,
   "lng": -5.57,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 122051
 },
 {
   "city": "Xiangcheng",
   "lat": 25.476,
   "lng": 100.5505,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 121959
 },
 {
   "city": "Dorūd",
   "lat": 33.4933,
   "lng": 49.075,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 121608
 },
 {
   "city": "Lianhe",
   "lat": 47.1414,
   "lng": 129.2577,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 121367
 },
 {
   "city": "Boulogne-Billancourt",
   "lat": 48.8352,
   "lng": 2.2409,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 121334
 },
 {
   "city": "Siracusa",
   "lat": 37.0692,
   "lng": 15.2875,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 121171
 },
 {
   "city": "Wuling",
   "lat": 39.4421,
   "lng": 114.23,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 121110
 },
 {
   "city": "Apartadó",
   "lat": 7.8847,
   "lng": -76.635,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 121003
 },
 {
   "city": "Navojoa",
   "lat": 27.0813,
   "lng": -109.4461,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 120926
 },
 {
   "city": "Porlamar",
   "lat": 10.9556,
   "lng": -63.8478,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 120924
 },
 {
   "city": "Bergamo",
   "lat": 45.695,
   "lng": 9.67,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 120923
 },
 {
   "city": "Chilapa de Álvarez",
   "lat": 17.5944,
   "lng": -99.1778,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 120790
 },
 {
   "city": "Barcelos",
   "lat": 41.5333,
   "lng": -8.6167,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 120391
 },
 {
   "city": "Płock",
   "lat": 52.55,
   "lng": 19.7,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 120000
 },
 {
   "city": "Göttingen",
   "lat": 51.5339,
   "lng": 9.9356,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 119801
 },
 {
   "city": "Naz̧arābād",
   "lat": 35.9522,
   "lng": 50.6075,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 119512
 },
 {
   "city": "Tizayuca",
   "lat": 19.8333,
   "lng": -98.9833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 119442
 },
 {
   "city": "Elbląg",
   "lat": 54.1667,
   "lng": 19.4,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 119317
 },
 {
   "city": "Pescara",
   "lat": 42.4643,
   "lng": 14.2142,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 119217
 },
 {
   "city": "Perpignan",
   "lat": 42.6986,
   "lng": 2.8956,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 119188
 },
 {
   "city": "Dordrecht",
   "lat": 51.81,
   "lng": 4.67,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 118654
 },
 {
   "city": "Nowshera",
   "lat": 34.0153,
   "lng": 71.9747,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 118594
 },
 {
   "city": "Matamoros",
   "lat": 25.533,
   "lng": -103.25,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 118337
 },
 {
   "city": "Bruges",
   "lat": 51.2089,
   "lng": 3.2242,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 118284
 },
 {
   "city": "Bama",
   "lat": 11.5204,
   "lng": 13.69,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 118121
 },
 {
   "city": "Besançon",
   "lat": 47.24,
   "lng": 6.02,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 117912
 },
 {
   "city": "Forlì",
   "lat": 44.2225,
   "lng": 12.0408,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 117863
 },
 {
   "city": "Charallave",
   "lat": 10.2431,
   "lng": -66.8622,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 117707
 },
 {
   "city": "Uribia",
   "lat": 11.7139,
   "lng": -72.2658,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 117674
 },
 {
   "city": "Villa de Álvarez",
   "lat": 19.25,
   "lng": -103.7333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 117600
 },
 {
   "city": "San Martín",
   "lat": -33.0806,
   "lng": -68.4706,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 117399
 },
 {
   "city": "Bottrop",
   "lat": 51.5232,
   "lng": 6.9253,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 117383
 },
 {
   "city": "Piedecuesta",
   "lat": 6.9886,
   "lng": -73.0503,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 117364
 },
 {
   "city": "Heroica Guaymas",
   "lat": 27.9183,
   "lng": -110.8989,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 117253
 },
 {
   "city": "Facatativá",
   "lat": 4.8147,
   "lng": -74.3553,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 117133
 },
 {
   "city": "Tandil",
   "lat": -37.3167,
   "lng": -59.1333,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 116917
 },
 {
   "city": "Guadalajara de Buga",
   "lat": 3.9036,
   "lng": -76.2986,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 116893
 },
 {
   "city": "Sassari",
   "lat": 40.7267,
   "lng": 8.5592,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 116641
 },
 {
   "city": "Metz",
   "lat": 49.1203,
   "lng": 6.1778,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 116581
 },
 {
   "city": "Santander de Quilichao",
   "lat": 3.0083,
   "lng": -76.4839,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 116535
 },
 {
   "city": "Wałbrzych",
   "lat": 50.7667,
   "lng": 16.2833,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 116069
 },
 {
   "city": "Reutlingen",
   "lat": 48.4833,
   "lng": 9.2167,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 115966
 },
 {
   "city": "Valle de La Pascua",
   "lat": 9.2033,
   "lng": -66.0103,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 115902
 },
 {
   "city": "Puerto Madryn",
   "lat": -42.773,
   "lng": -65.0366,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 115353
 },
 {
   "city": "Swabi",
   "lat": 34.1167,
   "lng": 72.4667,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 115018
 },
 {
   "city": "Qiaotou",
   "lat": 36.935,
   "lng": 101.6736,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 114712
 },
 {
   "city": "Bijeljina",
   "lat": 44.75,
   "lng": 19.2167,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 114663
 },
 {
   "city": "Shacheng",
   "lat": 40.4027,
   "lng": 115.5126,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 114569
 },
 {
   "city": "Heshan",
   "lat": 23.8163,
   "lng": 108.8847,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 114496
 },
 {
   "city": "Sogamoso",
   "lat": 5.7143,
   "lng": -72.9339,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 114486
 },
 {
   "city": "Jaramānā",
   "lat": 33.4833,
   "lng": 36.35,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 114363
 },
 {
   "city": "Cádiz",
   "lat": 36.535,
   "lng": -6.2975,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 114244
 },
 {
   "city": "Berdiansk",
   "lat": 46.7598,
   "lng": 36.7845,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 114205
 },
 {
   "city": "San Juan",
   "lat": 13.826,
   "lng": 121.396,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 114068
 },
 {
   "city": "Koblenz",
   "lat": 50.3597,
   "lng": 7.5978,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 114024
 },
 {
   "city": "Zhijiang",
   "lat": 27.4367,
   "lng": 109.678,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 113907
 },
 {
   "city": "Helsingborg",
   "lat": 56.0424,
   "lng": 12.721,
   "country": "Sweden",
   "iso2": "SE",
   "iso3": "SWE",
   "capital": "minor",
   "population": 113816
 },
 {
   "city": "San Carlos de Bariloche",
   "lat": -41.15,
   "lng": -71.3,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 112887
 },
 {
   "city": "Carora",
   "lat": 10.1692,
   "lng": -70.0783,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 112600
 },
 {
   "city": "Kristiansand",
   "lat": 58.1467,
   "lng": 7.9956,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 112588
 },
 {
   "city": "Lomas de Zamora",
   "lat": -34.7667,
   "lng": -58.4,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 112580
 },
 {
   "city": "Santa Lucía",
   "lat": 10.2606,
   "lng": -66.6639,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 112357
 },
 {
   "city": "Recklinghausen",
   "lat": 51.6167,
   "lng": 7.2,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 112267
 },
 {
   "city": "Madrid",
   "lat": 4.7306,
   "lng": -74.2639,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 112254
 },
 {
   "city": "Saint-Denis",
   "lat": 48.9356,
   "lng": 2.3539,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 112091
 },
 {
   "city": "Bergisch Gladbach",
   "lat": 50.9917,
   "lng": 7.1367,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 111966
 },
 {
   "city": "Erlangen",
   "lat": 49.5964,
   "lng": 11.0044,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 111962
 },
 {
   "city": "Jaén",
   "lat": 37.7667,
   "lng": -3.7711,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 111932
 },
 {
   "city": "Vicenza",
   "lat": 45.55,
   "lng": 11.55,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 111620
 },
 {
   "city": "Jena",
   "lat": 50.9272,
   "lng": 11.5864,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 111407
 },
 {
   "city": "Villa Mercedes",
   "lat": -33.6667,
   "lng": -65.4667,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 111391
 },
 {
   "city": "Terni",
   "lat": 42.5667,
   "lng": 12.65,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 111189
 },
 {
   "city": "Nsukka",
   "lat": 6.8567,
   "lng": 7.3958,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 111017
 },
 {
   "city": "Nguru",
   "lat": 12.8804,
   "lng": 10.45,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 111014
 },
 {
   "city": "Remscheid",
   "lat": 51.1802,
   "lng": 7.1872,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 110994
 },
 {
   "city": "Alphen aan den Rijn",
   "lat": 52.1333,
   "lng": 4.65,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 110986
 },
 {
   "city": "Tuzla",
   "lat": 44.5381,
   "lng": 18.6761,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 110979
 },
 {
   "city": "Tarnów",
   "lat": 50.0125,
   "lng": 20.9883,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 110956
 },
 {
   "city": "Khushab",
   "lat": 32.2917,
   "lng": 72.35,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 110868
 },
 {
   "city": "Fasā",
   "lat": 28.9381,
   "lng": 53.6481,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 110825
 },
 {
   "city": "Manzanillo",
   "lat": 19.0522,
   "lng": -104.3158,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 110735
 },
 {
   "city": "As Salamīyah",
   "lat": 35.0111,
   "lng": 37.0531,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 110683
 },
 {
   "city": "Nikopol",
   "lat": 47.5772,
   "lng": 34.3575,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 110669
 },
 {
   "city": "Pingquan",
   "lat": 40.9937,
   "lng": 118.6735,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 110646
 },
 {
   "city": "Bandar-e Anzalī",
   "lat": 37.4667,
   "lng": 49.4667,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 110643
 },
 {
   "city": "Trier",
   "lat": 49.7557,
   "lng": 6.6394,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 110636
 },
 {
   "city": "Borāzjān",
   "lat": 29.2667,
   "lng": 51.2158,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 110567
 },
 {
   "city": "Quíbor",
   "lat": 9.9281,
   "lng": -69.5778,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 110536
 },
 {
   "city": "Socopó",
   "lat": 8.2322,
   "lng": -70.8206,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 110512
 },
 {
   "city": "Genhe",
   "lat": 50.7783,
   "lng": 121.5213,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 110438
 },
 {
   "city": "Martínez de la Torre",
   "lat": 20.0667,
   "lng": -97.05,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 110415
 },
 {
   "city": "Cuautitlán",
   "lat": 19.6833,
   "lng": -99.1833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 110385
 },
 {
   "city": "Bāneh",
   "lat": 35.9975,
   "lng": 45.8853,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 110218
 },
 {
   "city": "Argenteuil",
   "lat": 48.95,
   "lng": 2.25,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 110213
 },
 {
   "city": "Tinaquillo",
   "lat": 9.9167,
   "lng": -68.3,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 110000
 },
 {
   "city": "Winterthur",
   "lat": 47.4992,
   "lng": 8.7267,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 109775
 },
 {
   "city": "Dali",
   "lat": 34.7953,
   "lng": 109.9378,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 109696
 },
 {
   "city": "Dera Ismail Khan",
   "lat": 31.8167,
   "lng": 70.9167,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 109686
 },
 {
   "city": "Aguachica",
   "lat": 8.3067,
   "lng": -73.6153,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 109621
 },
 {
   "city": "Gualeguaychú",
   "lat": -33.0078,
   "lng": -58.5111,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 109461
 },
 {
   "city": "Drammen",
   "lat": 59.7439,
   "lng": 10.2045,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 109416
 },
 {
   "city": "Taoyang",
   "lat": 35.3754,
   "lng": 103.8612,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 109300
 },
 {
   "city": "Ipiales",
   "lat": 0.8289,
   "lng": -77.6406,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 109116
 },
 {
   "city": "Túxpam de Rodríguez Cano",
   "lat": 20.95,
   "lng": -97.4,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 109049
 },
 {
   "city": "Mulhouse",
   "lat": 47.75,
   "lng": 7.34,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 108942
 },
 {
   "city": "Soubré",
   "lat": 5.7836,
   "lng": -6.5939,
   "country": "Côte d'Ivoire",
   "iso2": "CI",
   "iso3": "CIV",
   "capital": "minor",
   "population": 108933
 },
 {
   "city": "Tipitapa",
   "lat": 12.2,
   "lng": -86.1,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 108457
 },
 {
   "city": "San Rafael",
   "lat": -34.6175,
   "lng": -68.3356,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 107997
 },
 {
   "city": "Alkmaar",
   "lat": 52.6289,
   "lng": 4.744,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 107822
 },
 {
   "city": "Mazhang",
   "lat": 21.2757,
   "lng": 110.3221,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 107819
 },
 {
   "city": "Kogon Shahri",
   "lat": 39.7211,
   "lng": 64.5458,
   "country": "Uzbekistan",
   "iso2": "UZ",
   "iso3": "UZB",
   "capital": "minor",
   "population": 107566
 },
 {
   "city": "Emmen",
   "lat": 52.7833,
   "lng": 6.9,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 107471
 },
 {
   "city": "Morales",
   "lat": 15.4725,
   "lng": -88.8414,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 107400
 },
 {
   "city": "Bolzano",
   "lat": 46.5,
   "lng": 11.35,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 107317
 },
 {
   "city": "Chichicastenango",
   "lat": 14.9442,
   "lng": -91.1105,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 107193
 },
 {
   "city": "Chongshan",
   "lat": 18.7787,
   "lng": 109.5117,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 107100
 },
 {
   "city": "Koszalin",
   "lat": 54.1903,
   "lng": 16.1817,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 106880
 },
 {
   "city": "Chorzów",
   "lat": 50.3,
   "lng": 18.95,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 106846
 },
 {
   "city": "Chābahār",
   "lat": 25.2836,
   "lng": 60.6236,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 106739
 },
 {
   "city": "Orsha",
   "lat": 54.5092,
   "lng": 30.4258,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 106505
 },
 {
   "city": "As Safīrah",
   "lat": 36.0769,
   "lng": 37.3725,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 106460
 },
 {
   "city": "La Banda",
   "lat": -27.7333,
   "lng": -64.25,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 106441
 },
 {
   "city": "Longjiang",
   "lat": 47.3404,
   "lng": 123.18,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 106384
 },
 {
   "city": "Tiaong",
   "lat": 13.95,
   "lng": 121.3167,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 106265
 },
 {
   "city": "El Limón",
   "lat": 10.3003,
   "lng": -67.6336,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 106206
 },
 {
   "city": "Raba",
   "lat": -8.4614,
   "lng": 118.747,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 106101
 },
 {
   "city": "Pavlohrad",
   "lat": 48.52,
   "lng": 35.87,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 106082
 },
 {
   "city": "Aihua",
   "lat": 24.4629,
   "lng": 100.135,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 106054
 },
 {
   "city": "Contramaestre",
   "lat": 20.3,
   "lng": -76.2506,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 106002
 },
 {
   "city": "Temoaya",
   "lat": 19.4686,
   "lng": -99.5933,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 105766
 },
 {
   "city": "Azare",
   "lat": 11.6804,
   "lng": 10.19,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 105687
 },
 {
   "city": "Tarīm",
   "lat": 16.05,
   "lng": 49,
   "country": "Yemen",
   "iso2": "YE",
   "iso3": "YEM",
   "capital": "minor",
   "population": 105552
 },
 {
   "city": "Caen",
   "lat": 49.18,
   "lng": -0.37,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 105512
 },
 {
   "city": "Mazyr",
   "lat": 52.05,
   "lng": 29.2333,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 105439
 },
 {
   "city": "Charsadda",
   "lat": 34.1453,
   "lng": 71.7308,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 105414
 },
 {
   "city": "Alchevsk",
   "lat": 48.4672,
   "lng": 38.7983,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 105398
 },
 {
   "city": "Robāţ Karīm",
   "lat": 35.4847,
   "lng": 51.0828,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 105393
 },
 {
   "city": "Ash Shaykh ‘Uthmān",
   "lat": 12.8866,
   "lng": 45.0279,
   "country": "Yemen",
   "iso2": "YE",
   "iso3": "YEM",
   "capital": "minor",
   "population": 105248
 },
 {
   "city": "Malacatán",
   "lat": 14.9106,
   "lng": -92.0581,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 105178
 },
 {
   "city": "Texcoco",
   "lat": 19.52,
   "lng": -98.88,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 105165
 },
 {
   "city": "Al Fāw",
   "lat": 29.98,
   "lng": 48.47,
   "country": "Iraq",
   "iso2": "IQ",
   "iso3": "IRQ",
   "capital": "minor",
   "population": 105080
 },
 {
   "city": "Jincheng",
   "lat": 39.5529,
   "lng": 113.1933,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 105038
 },
 {
   "city": "Tagbilaran City",
   "lat": 9.65,
   "lng": 123.85,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 104976
 },
 {
   "city": "Salzgitter",
   "lat": 52.1503,
   "lng": 10.3593,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 104948
 },
 {
   "city": "Koutiala",
   "lat": 12.3833,
   "lng": -5.4667,
   "country": "Mali",
   "iso2": "ML",
   "iso3": "MLI",
   "capital": "minor",
   "population": 104927
 },
 {
   "city": "Nancy",
   "lat": 48.6936,
   "lng": 6.1846,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 104885
 },
 {
   "city": "Parral",
   "lat": 26.9333,
   "lng": -105.6667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 104836
 },
 {
   "city": "Ourense",
   "lat": 42.3364,
   "lng": -7.8633,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 104596
 },
 {
   "city": "Suruç",
   "lat": 36.9761,
   "lng": 38.4253,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 104302
 },
 {
   "city": "Maumere",
   "lat": -8.6189,
   "lng": 122.2123,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 104285
 },
 {
   "city": "Novara",
   "lat": 45.45,
   "lng": 8.6167,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 104183
 },
 {
   "city": "Tantoyuca",
   "lat": 21.35,
   "lng": -98.2333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 103616
 },
 {
   "city": "Biak",
   "lat": -1.18,
   "lng": 136.08,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 103610
 },
 {
   "city": "Konotop",
   "lat": 51.2369,
   "lng": 33.2027,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 103547
 },
 {
   "city": "Piacenza",
   "lat": 45.05,
   "lng": 9.7,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 103082
 },
 {
   "city": "Yilong",
   "lat": 23.7081,
   "lng": 102.496,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 102923
 },
 {
   "city": "Brovary",
   "lat": 50.5114,
   "lng": 30.7903,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 102856
 },
 {
   "city": "Siegen",
   "lat": 50.8756,
   "lng": 8.0167,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 102836
 },
 {
   "city": "Mayarí",
   "lat": 20.6592,
   "lng": -75.6781,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 102354
 },
 {
   "city": "Kāshmar",
   "lat": 35.2383,
   "lng": 58.4656,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 102282
 },
 {
   "city": "Joünié",
   "lat": 33.9697,
   "lng": 35.6156,
   "country": "Lebanon",
   "iso2": "LB",
   "iso3": "LBN",
   "capital": "minor",
   "population": 102221
 },
 {
   "city": "Mositai",
   "lat": 45.5266,
   "lng": 119.6506,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 102214
 },
 {
   "city": "Yishi",
   "lat": 35.1379,
   "lng": 110.764,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 102090
 },
 {
   "city": "Hildesheim",
   "lat": 52.15,
   "lng": 9.95,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 101990
 },
 {
   "city": "Girona",
   "lat": 41.9833,
   "lng": 2.8167,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 101932
 },
 {
   "city": "Shūshtar",
   "lat": 32.0436,
   "lng": 48.8569,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 101878
 },
 {
   "city": "Boryeong",
   "lat": 36.3333,
   "lng": 126.6167,
   "country": "South Korea",
   "iso2": "KR",
   "iso3": "KOR",
   "capital": "minor",
   "population": 101852
 },
 {
   "city": "Al Ḩajar al Aswad",
   "lat": 33.4581,
   "lng": 36.3053,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 101827
 },
 {
   "city": "Ciudad Río Bravo",
   "lat": 25.9861,
   "lng": -98.0889,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 101481
 },
 {
   "city": "San Luis de la Paz",
   "lat": 21.3,
   "lng": -100.5167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 101370
 },
 {
   "city": "Jingping",
   "lat": 39.5189,
   "lng": 112.2837,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 101297
 },
 {
   "city": "Liancheng",
   "lat": 24.0515,
   "lng": 105.0573,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 101221
 },
 {
   "city": "Salihorsk",
   "lat": 52.7842,
   "lng": 27.5425,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 100824
 },
 {
   "city": "Playas de Rosarito",
   "lat": 32.3636,
   "lng": -117.0544,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 100660
 },
 {
   "city": "Ahar",
   "lat": 38.475,
   "lng": 47.0603,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 100641
 },
 {
   "city": "Kallithéa",
   "lat": 37.95,
   "lng": 23.7,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 100641
 },
 {
   "city": "Weifen",
   "lat": 38.4633,
   "lng": 111.1203,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 100615
 },
 {
   "city": "Masjed Soleymān",
   "lat": 31.9333,
   "lng": 49.3,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 100497
 },
 {
   "city": "Kamianets-Podilskyi",
   "lat": 48.6806,
   "lng": 26.5806,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 100462
 },
 {
   "city": "Torbat-e Jām",
   "lat": 35.2439,
   "lng": 60.6225,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 100449
 },
 {
   "city": "Leuven",
   "lat": 50.8775,
   "lng": 4.7044,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 100291
 },
 {
   "city": "Gütersloh",
   "lat": 51.9,
   "lng": 8.3833,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 100194
 },
 {
   "city": "Talipao",
   "lat": 5.976,
   "lng": 121.1087,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 100088
 },
 {
   "city": "Kaiserslautern",
   "lat": 49.4447,
   "lng": 7.7689,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 100030
 },
 {
   "city": "Delft",
   "lat": 52.0119,
   "lng": 4.3594,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 100011
 },
 {
   "city": "Andria",
   "lat": 41.2317,
   "lng": 16.3083,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 99857
 },
 {
   "city": "Kalisz",
   "lat": 51.757,
   "lng": 18.083,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 99761
 },
 {
   "city": "Urgut Shahri",
   "lat": 39.4007,
   "lng": 67.2607,
   "country": "Uzbekistan",
   "iso2": "UZ",
   "iso3": "UZB",
   "capital": "minor",
   "population": 99675
 },
 {
   "city": "Fengning",
   "lat": 41.2013,
   "lng": 116.6433,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 99673
 },
 {
   "city": "Udine",
   "lat": 46.0667,
   "lng": 13.2333,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 99518
 },
 {
   "city": "Arezzo",
   "lat": 43.4631,
   "lng": 11.8781,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 99419
 },
 {
   "city": "Legnica",
   "lat": 51.2101,
   "lng": 16.1619,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 99350
 },
 {
   "city": "Włocławek",
   "lat": 52.65,
   "lng": 19.05,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 99350
 },
 {
   "city": "Abhar",
   "lat": 36.1467,
   "lng": 49.2181,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 99285
 },
 {
   "city": "Deventer",
   "lat": 52.25,
   "lng": 6.2,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 99166
 },
 {
   "city": "Morón",
   "lat": -34.65,
   "lng": -58.6167,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 99066
 },
 {
   "city": "Kontagora",
   "lat": 10.4522,
   "lng": 5.4794,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 98754
 },
 {
   "city": "Senahú",
   "lat": 15.4164,
   "lng": -89.8203,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 98703
 },
 {
   "city": "Cottbus",
   "lat": 51.7606,
   "lng": 14.3342,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 98693
 },
 {
   "city": "Zárate",
   "lat": -34.0833,
   "lng": -59.0333,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 98522
 },
 {
   "city": "Iseyin",
   "lat": 7.9667,
   "lng": 3.6,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 98071
 },
 {
   "city": "Chía",
   "lat": 4.8633,
   "lng": -74.0528,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 97896
 },
 {
   "city": "Ciudad Guzmán",
   "lat": 19.7,
   "lng": -103.4667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 97750
 },
 {
   "city": "Lugo",
   "lat": 43.0167,
   "lng": -7.55,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 97613
 },
 {
   "city": "Bafra",
   "lat": 41.5682,
   "lng": 35.9069,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 97452
 },
 {
   "city": "Jamundí",
   "lat": 3.2608,
   "lng": -76.5394,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 96993
 },
 {
   "city": "Nanterre",
   "lat": 48.8988,
   "lng": 2.1969,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 96807
 },
 {
   "city": "Kāzerūn",
   "lat": 29.6167,
   "lng": 51.65,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 96683
 },
 {
   "city": "Tomohon",
   "lat": 1.3244,
   "lng": 124.8225,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 96411
 },
 {
   "city": "Hanau",
   "lat": 50.1328,
   "lng": 8.9169,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 96023
 },
 {
   "city": "Longquan",
   "lat": 40.3703,
   "lng": 113.7483,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 95849
 },
 {
   "city": "Caseros",
   "lat": -34.6167,
   "lng": -58.5333,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 95785
 },
 {
   "city": "Jinbi",
   "lat": 25.7356,
   "lng": 101.3239,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 95639
 },
 {
   "city": "Lecce",
   "lat": 40.352,
   "lng": 18.1691,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 95441
 },
 {
   "city": "Xiluodu",
   "lat": 28.236,
   "lng": 103.6301,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 95439
 },
 {
   "city": "Cáceres",
   "lat": 39.4833,
   "lng": -6.3667,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 95418
 },
 {
   "city": "Mons",
   "lat": 50.455,
   "lng": 3.952,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 95299
 },
 {
   "city": "Boli",
   "lat": 45.7564,
   "lng": 130.5759,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 95260
 },
 {
   "city": "Dovzhansk",
   "lat": 48.0846,
   "lng": 39.6516,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 95153
 },
 {
   "city": "Jinshan",
   "lat": 25.1496,
   "lng": 102.0742,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 95044
 },
 {
   "city": "Rubio",
   "lat": 7.7,
   "lng": -72.35,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 95041
 },
 {
   "city": "Mianwali",
   "lat": 32.5853,
   "lng": 71.5436,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 95007
 },
 {
   "city": "Biu",
   "lat": 10.6204,
   "lng": 12.19,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 95005
 },
 {
   "city": "Kŭlob",
   "lat": 37.9119,
   "lng": 69.7808,
   "country": "Tajikistan",
   "iso2": "TJ",
   "iso3": "TJK",
   "capital": "minor",
   "population": 95000
 },
 {
   "city": "Pesaro",
   "lat": 43.9102,
   "lng": 12.9133,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 94958
 },
 {
   "city": "Barletta",
   "lat": 41.3167,
   "lng": 16.2833,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 94477
 },
 {
   "city": "Bayan Hot",
   "lat": 38.8556,
   "lng": 105.7001,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 94445
 },
 {
   "city": "Grudziądz",
   "lat": 53.4875,
   "lng": 18.755,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 94368
 },
 {
   "city": "Jaworzno",
   "lat": 50.2,
   "lng": 19.275,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 94305
 },
 {
   "city": "Petapa",
   "lat": 14.4962,
   "lng": -90.5525,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 94228
 },
 {
   "city": "Gera",
   "lat": 50.8782,
   "lng": 12.0824,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 94152
 },
 {
   "city": "Yi Xian",
   "lat": 39.3444,
   "lng": 115.4954,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 94110
 },
 {
   "city": "Alessandria",
   "lat": 44.9133,
   "lng": 8.62,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 93980
 },
 {
   "city": "Monkayo",
   "lat": 7.8167,
   "lng": 126.05,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 93937
 },
 {
   "city": "Valongo",
   "lat": 41.1833,
   "lng": -8.5,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 93858
 },
 {
   "city": "Esslingen",
   "lat": 48.7406,
   "lng": 9.3108,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 93542
 },
 {
   "city": "Ludwigsburg",
   "lat": 48.8975,
   "lng": 9.1919,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 93499
 },
 {
   "city": "La Spezia",
   "lat": 44.108,
   "lng": 9.8289,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 93311
 },
 {
   "city": "Rafaela",
   "lat": -31.2667,
   "lng": -61.4833,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 92945
 },
 {
   "city": "Wukari",
   "lat": 7.8704,
   "lng": 9.78,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 92933
 },
 {
   "city": "Sampit",
   "lat": -2.5329,
   "lng": 112.95,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 92710
 },
 {
   "city": "Naju",
   "lat": 35.0283,
   "lng": 126.7175,
   "country": "South Korea",
   "iso2": "KR",
   "iso3": "KOR",
   "capital": "minor",
   "population": 92582
 },
 {
   "city": "Créteil",
   "lat": 48.7911,
   "lng": 2.4628,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 92265
 },
 {
   "city": "Yumbo",
   "lat": 3.5778,
   "lng": -76.4944,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 92192
 },
 {
   "city": "Coatepec",
   "lat": 19.4553,
   "lng": -96.9586,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 92127
 },
 {
   "city": "Ocozocoautla de Espinosa",
   "lat": 16.75,
   "lng": -93.3667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 92103
 },
 {
   "city": "Avignon",
   "lat": 43.95,
   "lng": 4.8075,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 91729
 },
 {
   "city": "Amstelveen",
   "lat": 52.3019,
   "lng": 4.8581,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 91675
 },
 {
   "city": "Linquan",
   "lat": 37.9513,
   "lng": 110.9877,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 91670
 },
 {
   "city": "Weiyuan",
   "lat": 23.5025,
   "lng": 100.7075,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 91536
 },
 {
   "city": "Helmond",
   "lat": 51.4797,
   "lng": 5.6556,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 91524
 },
 {
   "city": "Oss",
   "lat": 51.7667,
   "lng": 5.5167,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 91451
 },
 {
   "city": "Azua",
   "lat": 18.46,
   "lng": -70.74,
   "country": "Dominican Republic",
   "iso2": "DO",
   "iso3": "DOM",
   "capital": "minor",
   "population": 91345
 },
 {
   "city": "Tecomán",
   "lat": 18.9089,
   "lng": -103.8747,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 91321
 },
 {
   "city": "Mosquera",
   "lat": 4.7078,
   "lng": -74.2328,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 91282
 },
 {
   "city": "Maladzyechna",
   "lat": 54.3136,
   "lng": 26.8517,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 91063
 },
 {
   "city": "Agua Prieta",
   "lat": 31.3258,
   "lng": -109.5489,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 91029
 },
 {
   "city": "Düren",
   "lat": 50.8,
   "lng": 6.4833,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 90733
 },
 {
   "city": "Tübingen",
   "lat": 48.52,
   "lng": 9.0556,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 90546
 },
 {
   "city": "Fundación",
   "lat": 10.5172,
   "lng": -74.1922,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 90514
 },
 {
   "city": "Hezuo",
   "lat": 34.9984,
   "lng": 102.91,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 90290
 },
 {
   "city": "Pistoia",
   "lat": 43.9333,
   "lng": 10.9167,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 90195
 },
 {
   "city": "Pisa",
   "lat": 43.7167,
   "lng": 10.4,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 90118
 },
 {
   "city": "Ocaña",
   "lat": 8.2461,
   "lng": -73.3553,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 90037
 },
 {
   "city": "Ma‘arrat an Nu‘mān",
   "lat": 35.6433,
   "lng": 36.6683,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 90000
 },
 {
   "city": "Flensburg",
   "lat": 54.7819,
   "lng": 9.4367,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 89934
 },
 {
   "city": "Cantaura",
   "lat": 9.3005,
   "lng": -64.3564,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 89552
 },
 {
   "city": "Zwickau",
   "lat": 50.7189,
   "lng": 12.4961,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 89540
 },
 {
   "city": "Prijedor",
   "lat": 44.9667,
   "lng": 16.7,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 89397
 },
 {
   "city": "Níkaia",
   "lat": 37.9667,
   "lng": 23.6333,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 89380
 },
 {
   "city": "Lucca",
   "lat": 43.85,
   "lng": 10.5167,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 89243
 },
 {
   "city": "Kamensk-Shakhtinskiy",
   "lat": 48.3167,
   "lng": 40.2667,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 88997
 },
 {
   "city": "Wangqing",
   "lat": 43.3126,
   "lng": 129.7572,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 88732
 },
 {
   "city": "Montelíbano",
   "lat": 7.9711,
   "lng": -75.4181,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 88674
 },
 {
   "city": "Poitiers",
   "lat": 46.58,
   "lng": 0.34,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 88665
 },
 {
   "city": "Norrköping",
   "lat": 58.5919,
   "lng": 16.1856,
   "country": "Sweden",
   "iso2": "SE",
   "iso3": "SWE",
   "capital": "minor",
   "population": 88639
 },
 {
   "city": "Leping",
   "lat": 37.613,
   "lng": 113.6995,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 88559
 },
 {
   "city": "Gießen",
   "lat": 50.5833,
   "lng": 8.6667,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 88546
 },
 {
   "city": "Maravatío de Ocampo",
   "lat": 19.8933,
   "lng": -100.4428,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 88535
 },
 {
   "city": "Kadirli",
   "lat": 37.3698,
   "lng": 36.1031,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 88527
 },
 {
   "city": "San Luis",
   "lat": 20.1881,
   "lng": -75.8486,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 88496
 },
 {
   "city": "Dongchuan",
   "lat": 25.5086,
   "lng": 101.2356,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 88481
 },
 {
   "city": "Bhakkar",
   "lat": 31.6333,
   "lng": 71.0667,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 88472
 },
 {
   "city": "La Grita",
   "lat": 8.1333,
   "lng": -71.9833,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 88450
 },
 {
   "city": "Zhob",
   "lat": 31.3417,
   "lng": 69.4486,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 88356
 },
 {
   "city": "Sinjār",
   "lat": 36.3209,
   "lng": 41.8766,
   "country": "Iraq",
   "iso2": "IQ",
   "iso3": "IRQ",
   "capital": "minor",
   "population": 88023
 },
 {
   "city": "Tacaná",
   "lat": 15.2415,
   "lng": -92.0684,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 87998
 },
 {
   "city": "Jilotepec",
   "lat": 19.9519,
   "lng": -99.5328,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 87927
 },
 {
   "city": "Maiquetía",
   "lat": 10.5958,
   "lng": -66.9772,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 87909
 },
 {
   "city": "Hilversum",
   "lat": 52.23,
   "lng": 5.18,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 87817
 },
 {
   "city": "Jagüey Grande",
   "lat": 22.5292,
   "lng": -81.1325,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 87771
 },
 {
   "city": "Pergamino",
   "lat": -33.8836,
   "lng": -60.5669,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 87652
 },
 {
   "city": "Consolación del Sur",
   "lat": 22.5083,
   "lng": -83.5172,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 87500
 },
 {
   "city": "Changting",
   "lat": 25.867,
   "lng": 116.3167,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 87458
 },
 {
   "city": "Glyfáda",
   "lat": 37.88,
   "lng": 23.7533,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 87305
 },
 {
   "city": "Houndé",
   "lat": 11.5,
   "lng": -3.5167,
   "country": "Burkina Faso",
   "iso2": "BF",
   "iso3": "BFA",
   "capital": "minor",
   "population": 87154
 },
 {
   "city": "Brindisi",
   "lat": 40.6383,
   "lng": 17.9458,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 87141
 },
 {
   "city": "Guadalajara",
   "lat": 40.6337,
   "lng": -3.1674,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 87064
 },
 {
   "city": "Wulan",
   "lat": 36.5585,
   "lng": 104.6765,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 86990
 },
 {
   "city": "Mechelen",
   "lat": 51.0281,
   "lng": 4.4803,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 86921
 },
 {
   "city": "Menglang",
   "lat": 22.5586,
   "lng": 99.9337,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 86877
 },
 {
   "city": "Dunkerque",
   "lat": 51.0383,
   "lng": 2.3775,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 86865
 },
 {
   "city": "Tangxing",
   "lat": 35.7261,
   "lng": 111.7108,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 86862
 },
 {
   "city": "Campana",
   "lat": -34.1667,
   "lng": -58.9167,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 86860
 },
 {
   "city": "Paredes",
   "lat": 41.2,
   "lng": -8.3333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 86854
 },
 {
   "city": "Heerlen",
   "lat": 50.8833,
   "lng": 5.9833,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 86833
 },
 {
   "city": "Tumaco",
   "lat": 1.81,
   "lng": -78.81,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 86713
 },
 {
   "city": "Cárdenas",
   "lat": 23.0428,
   "lng": -81.2036,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 86700
 },
 {
   "city": "Ciudad de Atlixco",
   "lat": 18.9,
   "lng": -98.45,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 86690
 },
 {
   "city": "Tuncheng",
   "lat": 19.3633,
   "lng": 110.0978,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 86474
 },
 {
   "city": "Yaofeng",
   "lat": 35.1395,
   "lng": 111.2174,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 86435
 },
 {
   "city": "Dingcheng",
   "lat": 19.6819,
   "lng": 110.3637,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 86367
 },
 {
   "city": "Olavarría",
   "lat": -36.9,
   "lng": -60.3333,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 86320
 },
 {
   "city": "Mukacheve",
   "lat": 48.4414,
   "lng": 22.7136,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 86257
 },
 {
   "city": "San Antonio",
   "lat": -33.5809,
   "lng": -71.6132,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 86239
 },
 {
   "city": "Longchuan",
   "lat": 25.1945,
   "lng": 101.2759,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 86060
 },
 {
   "city": "Vólos",
   "lat": 39.3611,
   "lng": 22.9425,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 86046
 },
 {
   "city": "Potiskum",
   "lat": 11.7104,
   "lng": 11.08,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 86002
 },
 {
   "city": "Keffi",
   "lat": 8.8464,
   "lng": 7.8733,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 85911
 },
 {
   "city": "Kapaklı",
   "lat": 41.3333,
   "lng": 27.9667,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 85898
 },
 {
   "city": "Yeysk",
   "lat": 46.7106,
   "lng": 38.2778,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 85760
 },
 {
   "city": "Aalst",
   "lat": 50.9383,
   "lng": 4.0392,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 85715
 },
 {
   "city": "Longhua",
   "lat": 41.317,
   "lng": 117.7264,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 85697
 },
 {
   "city": "Ducheng",
   "lat": 23.2445,
   "lng": 111.5342,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 85659
 },
 {
   "city": "Pariaman",
   "lat": -0.6261,
   "lng": 100.1206,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 85485
 },
 {
   "city": "Chiquinquirá",
   "lat": 5.6175,
   "lng": -73.8164,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 85274
 },
 {
   "city": "Versailles",
   "lat": 48.8053,
   "lng": 2.135,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 85205
 },
 {
   "city": "Villingen-Schwenningen",
   "lat": 48.0603,
   "lng": 8.4586,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 85181
 },
 {
   "city": "Junín",
   "lat": -34.5939,
   "lng": -60.9464,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 85007
 },
 {
   "city": "Treviso",
   "lat": 45.6722,
   "lng": 12.2422,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 84954
 },
 {
   "city": "Ciudad Mante",
   "lat": 22.7333,
   "lng": -98.95,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 84787
 },
 {
   "city": "Sumenep",
   "lat": -7.0049,
   "lng": 113.8496,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 84656
 },
 {
   "city": "Sabanalarga",
   "lat": 10.63,
   "lng": -74.9236,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 84410
 },
 {
   "city": "Chigorodó",
   "lat": 7.6697,
   "lng": -76.6814,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 84183
 },
 {
   "city": "Dārayyā",
   "lat": 33.4589,
   "lng": 36.2372,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 84044
 },
 {
   "city": "Ath Thawrah",
   "lat": 35.8344,
   "lng": 38.5464,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 84000
 },
 {
   "city": "Cereté",
   "lat": 8.8867,
   "lng": -75.7911,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 83917
 },
 {
   "city": "Acayucan",
   "lat": 17.9422,
   "lng": -94.9103,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 83817
 },
 {
   "city": "Worms",
   "lat": 49.6319,
   "lng": 8.3653,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 83330
 },
 {
   "city": "Como",
   "lat": 45.8103,
   "lng": 9.0861,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 83320
 },
 {
   "city": "Fredrikstad",
   "lat": 59.2167,
   "lng": 10.95,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 83193
 },
 {
   "city": "Pontevedra",
   "lat": 42.4333,
   "lng": -8.6333,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 83114
 },
 {
   "city": "Mingxing",
   "lat": 37.4264,
   "lng": 112.5442,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 82981
 },
 {
   "city": "Al Ḩayy",
   "lat": 32.1742,
   "lng": 46.0433,
   "country": "Iraq",
   "iso2": "IQ",
   "iso3": "IRQ",
   "capital": "minor",
   "population": 82900
 },
 {
   "city": "Shīrvān",
   "lat": 37.3967,
   "lng": 57.9294,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 82790
 },
 {
   "city": "Uman",
   "lat": 48.75,
   "lng": 30.2167,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 82762
 },
 {
   "city": "Çayırova",
   "lat": 40.8265,
   "lng": 29.3745,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 82494
 },
 {
   "city": "El Estor",
   "lat": 15.5333,
   "lng": -89.35,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 82491
 },
 {
   "city": "Chervonohrad",
   "lat": 50.3822,
   "lng": 24.2275,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 82395
 },
 {
   "city": "Sabaneta",
   "lat": 6.1508,
   "lng": -75.615,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 82375
 },
 {
   "city": "Oleksandriia",
   "lat": 48.6667,
   "lng": 33.1167,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 82345
 },
 {
   "city": "Grosseto",
   "lat": 42.7722,
   "lng": 11.1089,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 82036
 },
 {
   "city": "Kongjiazhuang",
   "lat": 40.7536,
   "lng": 114.7237,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 81909
 },
 {
   "city": "Presidencia Roque Sáenz Peña",
   "lat": -26.7833,
   "lng": -60.45,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 81879
 },
 {
   "city": "Agboville",
   "lat": 5.9333,
   "lng": -4.2167,
   "country": "Côte d'Ivoire",
   "iso2": "CI",
   "iso3": "CIV",
   "capital": "minor",
   "population": 81770
 },
 {
   "city": "Luján",
   "lat": -34.5703,
   "lng": -59.105,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 81749
 },
 {
   "city": "Felipe Carrillo Puerto",
   "lat": 19.5786,
   "lng": -88.0453,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 81742
 },
 {
   "city": "Minden",
   "lat": 52.2883,
   "lng": 8.9167,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 81682
 },
 {
   "city": "Watampone",
   "lat": -4.5328,
   "lng": 120.3334,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 81629
 },
 {
   "city": "Apizaco",
   "lat": 19.4167,
   "lng": -98.1333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 81565
 },
 {
   "city": "General Roca",
   "lat": -39.0333,
   "lng": -67.5833,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 81534
 },
 {
   "city": "Anapa",
   "lat": 44.8944,
   "lng": 37.3167,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 81447
 },
 {
   "city": "Xiedian",
   "lat": 35.419,
   "lng": 110.8281,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 81386
 },
 {
   "city": "Caldas",
   "lat": 6.0886,
   "lng": -75.6361,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 81381
 },
 {
   "city": "Dessau-Roßlau",
   "lat": 51.8333,
   "lng": 12.2333,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 81237
 },
 {
   "city": "Pilar",
   "lat": -34.4588,
   "lng": -58.9142,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 81120
 },
 {
   "city": "Panzos",
   "lat": 15.3986,
   "lng": -89.6408,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 81063
 },
 {
   "city": "Tecate",
   "lat": 32.5728,
   "lng": -116.6267,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 81059
 },
 {
   "city": "Funza",
   "lat": 4.7175,
   "lng": -74.2094,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 80937
 },
 {
   "city": "Polatsk",
   "lat": 55.4833,
   "lng": 28.8,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 80795
 },
 {
   "city": "Azov",
   "lat": 47.1,
   "lng": 39.4167,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 80721
 },
 {
   "city": "Meybod",
   "lat": 32.25,
   "lng": 54.0167,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 80712
 },
 {
   "city": "Hengelo",
   "lat": 52.2656,
   "lng": 6.7931,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 80683
 },
 {
   "city": "San Cristóbal Verapaz",
   "lat": 15.365,
   "lng": -90.4792,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 80613
 },
 {
   "city": "Varese",
   "lat": 45.8167,
   "lng": 8.8333,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 80544
 },
 {
   "city": "Necochea",
   "lat": -38.55,
   "lng": -58.7333,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 80478
 },
 {
   "city": "Tala",
   "lat": 20.6525,
   "lng": -103.7028,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 80365
 },
 {
   "city": "Tākestān",
   "lat": 36.0694,
   "lng": 49.6958,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 80299
 },
 {
   "city": "Lívingston",
   "lat": 15.83,
   "lng": -88.75,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 80249
 },
 {
   "city": "Los Patios",
   "lat": 7.8342,
   "lng": -72.505,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 80235
 },
 {
   "city": "Namsan",
   "lat": 42.2304,
   "lng": 129.2304,
   "country": "North Korea",
   "iso2": "KP",
   "iso3": "PRK",
   "capital": "minor",
   "population": 80146
 },
 {
   "city": "Purmerend",
   "lat": 52.505,
   "lng": 4.9639,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 80117
 },
 {
   "city": "Balad",
   "lat": 34.0147,
   "lng": 44.1456,
   "country": "Iraq",
   "iso2": "IQ",
   "iso3": "IRQ",
   "capital": "minor",
   "population": 80000
 },
 {
   "city": "Jamshoro",
   "lat": 25.4283,
   "lng": 68.2822,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 80000
 },
 {
   "city": "Koktokay",
   "lat": 47.0004,
   "lng": 89.4666,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 80000
 },
 {
   "city": "San Carlos del Zulia",
   "lat": 9,
   "lng": -71.95,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 80000
 },
 {
   "city": "Tall ‘Afar",
   "lat": 36.3792,
   "lng": 42.4497,
   "country": "Iraq",
   "iso2": "IQ",
   "iso3": "IRQ",
   "capital": "minor",
   "population": 80000
 },
 {
   "city": "Sokcho",
   "lat": 38.2083,
   "lng": 128.5911,
   "country": "South Korea",
   "iso2": "KR",
   "iso3": "KOR",
   "capital": "minor",
   "population": 79846
 },
 {
   "city": "Idah",
   "lat": 7.0833,
   "lng": 6.75,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 79815
 },
 {
   "city": "Baracoa",
   "lat": 20.3444,
   "lng": -74.4956,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 79797
 },
 {
   "city": "Arsuz",
   "lat": 36.4128,
   "lng": 35.8867,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 79782
 },
 {
   "city": "Poblacion",
   "lat": 6.8,
   "lng": 124.6333,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 79739
 },
 {
   "city": "Ciudad Lerdo",
   "lat": 25.55,
   "lng": -103.5167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 79669
 },
 {
   "city": "Jinhe",
   "lat": 22.7815,
   "lng": 103.228,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 79658
 },
 {
   "city": "Mabai",
   "lat": 23.0188,
   "lng": 104.3929,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 79534
 },
 {
   "city": "Vila do Conde",
   "lat": 41.35,
   "lng": -8.75,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 79533
 },
 {
   "city": "Neumünster",
   "lat": 54.0714,
   "lng": 9.99,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 79487
 },
 {
   "city": "Torres Vedras",
   "lat": 39.0833,
   "lng": -9.2667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 79465
 },
 {
   "city": "Jiangna",
   "lat": 23.6128,
   "lng": 104.3433,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 79448
 },
 {
   "city": "Villa María",
   "lat": -32.4103,
   "lng": -63.2314,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 79356
 },
 {
   "city": "Juventino Rosas",
   "lat": 20.65,
   "lng": -101,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 79214
 },
 {
   "city": "Tierralta",
   "lat": 8.1728,
   "lng": -76.0594,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 78770
 },
 {
   "city": "Barreiro",
   "lat": 38.6609,
   "lng": -9.0733,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 78764
 },
 {
   "city": "Alīgūdarz",
   "lat": 33.4006,
   "lng": 49.6947,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 78690
 },
 {
   "city": "Arlit",
   "lat": 18.7333,
   "lng": 7.3833,
   "country": "Niger",
   "iso2": "NE",
   "iso3": "NER",
   "capital": "minor",
   "population": 78651
 },
 {
   "city": "Jelenia Góra",
   "lat": 50.9,
   "lng": 15.7333,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 78335
 },
 {
   "city": "Manbij",
   "lat": 36.5333,
   "lng": 37.95,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 78255
 },
 {
   "city": "Huolu",
   "lat": 38.0874,
   "lng": 114.3159,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 78250
 },
 {
   "city": "Argao",
   "lat": 9.8833,
   "lng": 123.6,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 78187
 },
 {
   "city": "Arjona",
   "lat": 10.255,
   "lng": -75.3447,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 78070
 },
 {
   "city": "Schiedam",
   "lat": 51.9167,
   "lng": 4.4,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 77999
 },
 {
   "city": "Fray Bartolomé de Las Casas",
   "lat": 15.8456,
   "lng": -89.8658,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 77896
 },
 {
   "city": "Villa Victoria",
   "lat": 19.4333,
   "lng": -100,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 77819
 },
 {
   "city": "Linkou",
   "lat": 45.2819,
   "lng": 130.2519,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 77754
 },
 {
   "city": "Hasselt",
   "lat": 50.9305,
   "lng": 5.3385,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 77651
 },
 {
   "city": "Villa Canales",
   "lat": 14.4816,
   "lng": -90.534,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 77638
 },
 {
   "city": "Numan",
   "lat": 9.4536,
   "lng": 11.8367,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 77617
 },
 {
   "city": "Delmenhorst",
   "lat": 53.0506,
   "lng": 8.6317,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 77607
 },
 {
   "city": "Béziers",
   "lat": 43.3476,
   "lng": 3.219,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 77599
 },
 {
   "city": "Bamberg",
   "lat": 49.8917,
   "lng": 10.8917,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 77592
 },
 {
   "city": "Tila",
   "lat": 17.3,
   "lng": -92.4333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 77554
 },
 {
   "city": "Cozumel",
   "lat": 20.5104,
   "lng": -86.9493,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 77236
 },
 {
   "city": "Ende",
   "lat": -8.8333,
   "lng": 121.65,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 77205
 },
 {
   "city": "Palencia",
   "lat": 42.0167,
   "lng": -4.5333,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 77090
 },
 {
   "city": "Chinautla",
   "lat": 14.7029,
   "lng": -90.5,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 77071
 },
 {
   "city": "Tecamachalco",
   "lat": 18.8667,
   "lng": -97.7167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 77061
 },
 {
   "city": "Roosendaal",
   "lat": 51.5314,
   "lng": 4.4556,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 77032
 },
 {
   "city": "Balkh",
   "lat": 36.7581,
   "lng": 66.8989,
   "country": "Afghanistan",
   "iso2": "AF",
   "iso3": "AFG",
   "capital": "minor",
   "population": 77000
 },
 {
   "city": "Nagua",
   "lat": 19.38,
   "lng": -69.85,
   "country": "Dominican Republic",
   "iso2": "DO",
   "iso3": "DOM",
   "capital": "minor",
   "population": 76933
 },
 {
   "city": "Viersen",
   "lat": 51.2556,
   "lng": 6.3917,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 76905
 },
 {
   "city": "Marburg",
   "lat": 50.8167,
   "lng": 8.7667,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 76851
 },
 {
   "city": "Shostka",
   "lat": 51.8657,
   "lng": 33.4766,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 76788
 },
 {
   "city": "Sint-Niklaas",
   "lat": 51.1644,
   "lng": 4.1392,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 76756
 },
 {
   "city": "Mafra",
   "lat": 38.9333,
   "lng": -9.3333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 76685
 },
 {
   "city": "E’erguna",
   "lat": 50.2411,
   "lng": 120.172,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 76667
 },
 {
   "city": "Tacámbaro de Codallos",
   "lat": 19.2356,
   "lng": -101.4569,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 76661
 },
 {
   "city": "Siedlce",
   "lat": 52.1833,
   "lng": 22.2833,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 76585
 },
 {
   "city": "Cotuí",
   "lat": 19.06,
   "lng": -70.15,
   "country": "Dominican Republic",
   "iso2": "DO",
   "iso3": "DOM",
   "capital": "minor",
   "population": 76554
 },
 {
   "city": "Palma Soriano",
   "lat": 20.2139,
   "lng": -75.9919,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 76500
 },
 {
   "city": "Al Musayyib",
   "lat": 32.7786,
   "lng": 44.29,
   "country": "Iraq",
   "iso2": "IQ",
   "iso3": "IRQ",
   "capital": "minor",
   "population": 76454
 },
 {
   "city": "Pau",
   "lat": 43.3,
   "lng": -0.37,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 76275
 },
 {
   "city": "Kortrijk",
   "lat": 50.8333,
   "lng": 3.2667,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 76265
 },
 {
   "city": "Tuban",
   "lat": -6.8995,
   "lng": 112.05,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 76242
 },
 {
   "city": "Berdychiv",
   "lat": 49.8919,
   "lng": 28.6,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 76229
 },
 {
   "city": "Asti",
   "lat": 44.9,
   "lng": 8.2069,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 76211
 },
 {
   "city": "La Rochelle",
   "lat": 46.1591,
   "lng": -1.1517,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 76114
 },
 {
   "city": "Fancheng",
   "lat": 39.1891,
   "lng": 113.2729,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 76088
 },
 {
   "city": "Tailai",
   "lat": 46.3909,
   "lng": 123.4161,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 75992
 },
 {
   "city": "Toba Tek Singh",
   "lat": 30.9667,
   "lng": 72.4833,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 75943
 },
 {
   "city": "Ovalle",
   "lat": -30.6031,
   "lng": -71.203,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 75864
 },
 {
   "city": "Espinal",
   "lat": 4.1486,
   "lng": -74.8819,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 75828
 },
 {
   "city": "Bakhmut",
   "lat": 48.6044,
   "lng": 38.0067,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 75798
 },
 {
   "city": "Caserta",
   "lat": 41.0667,
   "lng": 14.3333,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 75561
 },
 {
   "city": "Jablah",
   "lat": 35.3597,
   "lng": 35.9214,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 75505
 },
 {
   "city": "Zhongcheng",
   "lat": 28.6014,
   "lng": 103.943,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 75425
 },
 {
   "city": "Xinglong",
   "lat": 40.4146,
   "lng": 117.493,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 75381
 },
 {
   "city": "Lüneburg",
   "lat": 53.2525,
   "lng": 10.4144,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 75351
 },
 {
   "city": "Bonāb",
   "lat": 37.3403,
   "lng": 46.0561,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 75332
 },
 {
   "city": "Ardakān",
   "lat": 32.3094,
   "lng": 54.0186,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 75271
 },
 {
   "city": "Acacías",
   "lat": 3.9889,
   "lng": -73.7647,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 75252
 },
 {
   "city": "Frontera",
   "lat": 26.926,
   "lng": -101.449,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 75242
 },
 {
   "city": "Wilhelmshaven",
   "lat": 53.5167,
   "lng": 8.1333,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 75189
 },
 {
   "city": "Mysłowice",
   "lat": 50.2333,
   "lng": 19.1333,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 75183
 },
 {
   "city": "Dongguan",
   "lat": 39.014,
   "lng": 111.0768,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 75135
 },
 {
   "city": "Ciudad Real",
   "lat": 38.9833,
   "lng": -3.9167,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 75104
 },
 {
   "city": "Piotrków Trybunalski",
   "lat": 51.4,
   "lng": 19.6833,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 74905
 },
 {
   "city": "Wiwilí",
   "lat": 13.6167,
   "lng": -85.8167,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 74887
 },
 {
   "city": "Juchitán de Zaragoza",
   "lat": 16.436,
   "lng": -95.0198,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 74825
 },
 {
   "city": "Bayreuth",
   "lat": 49.9481,
   "lng": 11.5783,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 74657
 },
 {
   "city": "Dalaguete",
   "lat": 9.7612,
   "lng": 123.5349,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 74596
 },
 {
   "city": "Detmold",
   "lat": 51.9378,
   "lng": 8.8833,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 74388
 },
 {
   "city": "Silao",
   "lat": 20.9478,
   "lng": -101.4281,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 74242
 },
 {
   "city": "Chalándri",
   "lat": 38.0167,
   "lng": 23.8,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 74192
 },
 {
   "city": "Kara-Balta",
   "lat": 42.8306,
   "lng": 73.8857,
   "country": "Kyrgyzstan",
   "iso2": "KG",
   "iso3": "KGZ",
   "capital": "minor",
   "population": 74133
 },
 {
   "city": "San Ramón de la Nueva Orán",
   "lat": -23.1361,
   "lng": -64.3222,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 74059
 },
 {
   "city": "Dĩ An",
   "lat": 10.8927,
   "lng": 106.7634,
   "country": "Vietnam",
   "iso2": "VN",
   "iso3": "VNM",
   "capital": "minor",
   "population": 73859
 },
 {
   "city": "Grand-Bassam",
   "lat": 5.2,
   "lng": -3.7333,
   "country": "Côte d'Ivoire",
   "iso2": "CI",
   "iso3": "CIV",
   "capital": "minor",
   "population": 73772
 },
 {
   "city": "Siuna",
   "lat": 13.7333,
   "lng": -84.7667,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 73730
 },
 {
   "city": "Ragusa",
   "lat": 36.925,
   "lng": 14.7306,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 73638
 },
 {
   "city": "Linares",
   "lat": -35.8454,
   "lng": -71.5979,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 73602
 },
 {
   "city": "Copacabana",
   "lat": 6.3486,
   "lng": -75.5103,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 73574
 },
 {
   "city": "Sundsvall",
   "lat": 62.3902,
   "lng": 17.3067,
   "country": "Sweden",
   "iso2": "SE",
   "iso3": "SWE",
   "capital": "minor",
   "population": 73389
 },
 {
   "city": "Nizhyn",
   "lat": 51.05,
   "lng": 31.9,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 73283
 },
 {
   "city": "Hoorn",
   "lat": 52.6533,
   "lng": 5.0733,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 73261
 },
 {
   "city": "Quillota",
   "lat": -32.8799,
   "lng": -71.2474,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 73261
 },
 {
   "city": "Konin",
   "lat": 52.2275,
   "lng": 18.2614,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 73176
 },
 {
   "city": "Moa",
   "lat": 20.6556,
   "lng": -74.9417,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 73053
 },
 {
   "city": "Chaigoubu",
   "lat": 40.6687,
   "lng": 114.4157,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 73028
 },
 {
   "city": "Santa Rosa de Cabal",
   "lat": 4.8672,
   "lng": -75.6211,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 73028
 },
 {
   "city": "Naqadeh",
   "lat": 36.95,
   "lng": 45.3833,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 72975
 },
 {
   "city": "San Vicente del Caguán",
   "lat": 2.1153,
   "lng": -74.77,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 72949
 },
 {
   "city": "Calais",
   "lat": 50.9481,
   "lng": 1.8564,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 72929
 },
 {
   "city": "La Dorada",
   "lat": 5.4538,
   "lng": -74.6647,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 72925
 },
 {
   "city": "Jingzhou",
   "lat": 37.6911,
   "lng": 116.2672,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 72806
 },
 {
   "city": "Perote",
   "lat": 19.562,
   "lng": -97.242,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 72795
 },
 {
   "city": "Pavia",
   "lat": 45.1853,
   "lng": 9.155,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 72773
 },
 {
   "city": "Spijkenisse",
   "lat": 51.8333,
   "lng": 4.3167,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 72740
 },
 {
   "city": "Tamazunchale",
   "lat": 21.2667,
   "lng": -98.7833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 72685
 },
 {
   "city": "Lüdenscheid",
   "lat": 51.2198,
   "lng": 7.6273,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 72611
 },
 {
   "city": "Inowrocław",
   "lat": 52.7958,
   "lng": 18.2611,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 72561
 },
 {
   "city": "Zhuolu",
   "lat": 40.3753,
   "lng": 115.215,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 72538
 },
 {
   "city": "Concepción del Uruguay",
   "lat": -32.4833,
   "lng": -58.2333,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 72528
 },
 {
   "city": "Lanxi",
   "lat": 46.2664,
   "lng": 126.276,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 72528
 },
 {
   "city": "Ede",
   "lat": 52.0436,
   "lng": 5.6667,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 72460
 },
 {
   "city": "Almelo",
   "lat": 52.3575,
   "lng": 6.6667,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 72459
 },
 {
   "city": "Landshut",
   "lat": 48.5397,
   "lng": 12.1508,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 72404
 },
 {
   "city": "Vlaardingen",
   "lat": 51.9167,
   "lng": 4.35,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 72404
 },
 {
   "city": "Goya",
   "lat": -29.1333,
   "lng": -59.25,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 72304
 },
 {
   "city": "Xiangjiaba",
   "lat": 28.6282,
   "lng": 104.4211,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 72283
 },
 {
   "city": "Penafiel",
   "lat": 41.2,
   "lng": -8.2833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 72265
 },
 {
   "city": "Esbjerg",
   "lat": 55.467,
   "lng": 8.45,
   "country": "Denmark",
   "iso2": "DK",
   "iso3": "DNK",
   "capital": "minor",
   "population": 72205
 },
 {
   "city": "Cremona",
   "lat": 45.1333,
   "lng": 10.0333,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 72077
 },
 {
   "city": "Brandenburg",
   "lat": 52.4117,
   "lng": 12.5561,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 72040
 },
 {
   "city": "Ostrowiec Świętokrzyski",
   "lat": 50.9333,
   "lng": 21.4,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 72001
 },
 {
   "city": "Colón",
   "lat": 22.7225,
   "lng": -80.9067,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 72000
 },
 {
   "city": "Wenping",
   "lat": 27.193,
   "lng": 103.5461,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 71943
 },
 {
   "city": "Bouaflé",
   "lat": 6.9903,
   "lng": -5.7442,
   "country": "Côte d'Ivoire",
   "iso2": "CI",
   "iso3": "CIV",
   "capital": "minor",
   "population": 71792
 },
 {
   "city": "Florida",
   "lat": 21.5294,
   "lng": -78.2228,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 71676
 },
 {
   "city": "Santo Tirso",
   "lat": 41.3425,
   "lng": -8.4775,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 71530
 },
 {
   "city": "Gouda",
   "lat": 52.0181,
   "lng": 4.7056,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 71449
 },
 {
   "city": "Izmail",
   "lat": 45.35,
   "lng": 28.8333,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 71411
 },
 {
   "city": "Ostend",
   "lat": 51.2333,
   "lng": 2.9333,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 71332
 },
 {
   "city": "Placetas",
   "lat": 22.3158,
   "lng": -79.6556,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 71208
 },
 {
   "city": "San Francisco del Rincón",
   "lat": 21.0228,
   "lng": -101.86,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 71139
 },
 {
   "city": "Gibara",
   "lat": 21.1072,
   "lng": -76.1367,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 71126
 },
 {
   "city": "Tejupilco",
   "lat": 18.9058,
   "lng": -100.1528,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 71077
 },
 {
   "city": "Corozal",
   "lat": 9.3169,
   "lng": -75.2933,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 70853
 },
 {
   "city": "Novomoskovsk",
   "lat": 48.6328,
   "lng": 35.2239,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 70749
 },
 {
   "city": "Loulé",
   "lat": 37.144,
   "lng": -8.0235,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 70622
 },
 {
   "city": "Saint-Nazaire",
   "lat": 47.2806,
   "lng": -2.2086,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 70619
 },
 {
   "city": "Yinying",
   "lat": 37.941,
   "lng": 113.5602,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 70614
 },
 {
   "city": "Cabudare",
   "lat": 10.0331,
   "lng": -69.2633,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 70578
 },
 {
   "city": "Zenica",
   "lat": 44.2017,
   "lng": 17.9039,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 70553
 },
 {
   "city": "Reconquista",
   "lat": -29.1443,
   "lng": -59.6438,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 70549
 },
 {
   "city": "Aschaffenburg",
   "lat": 49.9757,
   "lng": 9.1478,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 70527
 },
 {
   "city": "Baiquan",
   "lat": 47.6018,
   "lng": 126.0819,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 70472
 },
 {
   "city": "Qo‘ng‘irot Shahri",
   "lat": 43.0758,
   "lng": 58.9067,
   "country": "Uzbekistan",
   "iso2": "UZ",
   "iso3": "UZB",
   "capital": "minor",
   "population": 70100
 },
 {
   "city": "Érd",
   "lat": 47.3833,
   "lng": 18.9167,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 70063
 },
 {
   "city": "Oshnavīyeh",
   "lat": 37.0397,
   "lng": 45.0983,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 70030
 },
 {
   "city": "Phú Quốc",
   "lat": 10.2289,
   "lng": 103.9572,
   "country": "Vietnam",
   "iso2": "VN",
   "iso3": "VNM",
   "capital": "minor",
   "population": 70000
 },
 {
   "city": "Zhanggu",
   "lat": 30.8795,
   "lng": 101.8822,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 70000
 },
 {
   "city": "Qingquan",
   "lat": 38.7823,
   "lng": 101.0826,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 69902
 },
 {
   "city": "Villa del Rosario",
   "lat": 7.8353,
   "lng": -72.4736,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 69833
 },
 {
   "city": "Garzón",
   "lat": 2.1961,
   "lng": -75.6292,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 69823
 },
 {
   "city": "San Miguel de Allende",
   "lat": 20.9142,
   "lng": -100.7436,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 69811
 },
 {
   "city": "San Juan de los Lagos",
   "lat": 21.2489,
   "lng": -102.3304,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 69725
 },
 {
   "city": "Suwałki",
   "lat": 54.0833,
   "lng": 22.9333,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 69626
 },
 {
   "city": "Rioverde",
   "lat": 21.93,
   "lng": -99.98,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 69613
 },
 {
   "city": "Celle",
   "lat": 52.6256,
   "lng": 10.0825,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 69602
 },
 {
   "city": "Tournai",
   "lat": 50.6,
   "lng": 3.3833,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 69554
 },
 {
   "city": "Chisec",
   "lat": 15.8125,
   "lng": -90.3217,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 69325
 },
 {
   "city": "Planeta Rica",
   "lat": 8.4089,
   "lng": -75.5819,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 69285
 },
 {
   "city": "Necoclí",
   "lat": 8.4258,
   "lng": -76.7839,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 69090
 },
 {
   "city": "Kovel",
   "lat": 51.2167,
   "lng": 24.7167,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 69089
 },
 {
   "city": "Mansehra",
   "lat": 34.3333,
   "lng": 73.2,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 69085
 },
 {
   "city": "Massa",
   "lat": 44.0333,
   "lng": 10.1333,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 69037
 },
 {
   "city": "Ko Samui",
   "lat": 9.5157,
   "lng": 99.9436,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 68994
 },
 {
   "city": "Huishi",
   "lat": 35.6918,
   "lng": 105.0531,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 68958
 },
 {
   "city": "Yitiaoshan",
   "lat": 37.1889,
   "lng": 104.0571,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 68952
 },
 {
   "city": "Liuhe",
   "lat": 42.2669,
   "lng": 125.7404,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 68938
 },
 {
   "city": "Kempten",
   "lat": 47.7333,
   "lng": 10.3167,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 68907
 },
 {
   "city": "Ixtaczoquitlán",
   "lat": 18.85,
   "lng": -97.0667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 68823
 },
 {
   "city": "Purísima de Bustos",
   "lat": 21.0333,
   "lng": -101.8667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 68795
 },
 {
   "city": "Say’ūn",
   "lat": 15.943,
   "lng": 48.7873,
   "country": "Yemen",
   "iso2": "YE",
   "iso3": "YEM",
   "capital": "minor",
   "population": 68747
 },
 {
   "city": "Colmar",
   "lat": 48.0817,
   "lng": 7.3556,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 68703
 },
 {
   "city": "Zaandam",
   "lat": 52.4417,
   "lng": 4.8422,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 68695
 },
 {
   "city": "Oliveira de Azemeis",
   "lat": 40.8333,
   "lng": -8.4833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 68611
 },
 {
   "city": "Fulda",
   "lat": 50.5528,
   "lng": 9.6775,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 68586
 },
 {
   "city": "Valle Hermoso",
   "lat": 25.6736,
   "lng": -97.8144,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 68573
 },
 {
   "city": "Smila",
   "lat": 49.2167,
   "lng": 31.8667,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 68536
 },
 {
   "city": "Zapotlanejo",
   "lat": 20.6228,
   "lng": -103.0689,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 68519
 },
 {
   "city": "Doboj",
   "lat": 44.7333,
   "lng": 18.1333,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 68514
 },
 {
   "city": "Aalen",
   "lat": 48.8372,
   "lng": 10.0936,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 68361
 },
 {
   "city": "Ash Shiḩr",
   "lat": 14.7608,
   "lng": 49.6069,
   "country": "Yemen",
   "iso2": "YE",
   "iso3": "YEM",
   "capital": "minor",
   "population": 68313
 },
 {
   "city": "Otukpo",
   "lat": 7.1904,
   "lng": 8.13,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 68220
 },
 {
   "city": "Gniezno",
   "lat": 52.5333,
   "lng": 17.6,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 68217
 },
 {
   "city": "Xinhua",
   "lat": 23.6272,
   "lng": 105.62,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 67976
 },
 {
   "city": "Ixtlahuacán de los Membrillos",
   "lat": 20.35,
   "lng": -103.1833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 67969
 },
 {
   "city": "La Barca",
   "lat": 20.2833,
   "lng": -102.5667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 67937
 },
 {
   "city": "Trapani",
   "lat": 38.0175,
   "lng": 12.515,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 67923
 },
 {
   "city": "Yanghe",
   "lat": 38.2727,
   "lng": 106.2496,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 67901
 },
 {
   "city": "Przemyśl",
   "lat": 49.7835,
   "lng": 22.7842,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 67847
 },
 {
   "city": "Chengjiao Chengguanzhen",
   "lat": 34.4362,
   "lng": 104.0306,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 67826
 },
 {
   "city": "Viterbo",
   "lat": 42.4186,
   "lng": 12.1042,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 67798
 },
 {
   "city": "Matehuala",
   "lat": 23.6528,
   "lng": -100.6444,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 67717
 },
 {
   "city": "Heroica Caborca",
   "lat": 30.7167,
   "lng": -112.15,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 67604
 },
 {
   "city": "Manaure",
   "lat": 11.775,
   "lng": -72.4444,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 67584
 },
 {
   "city": "Stargard Szczeciński",
   "lat": 53.3387,
   "lng": 15.0448,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 67579
 },
 {
   "city": "Yüksekova",
   "lat": 37.5667,
   "lng": 44.2833,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 67557
 },
 {
   "city": "Yuquan",
   "lat": 40.4202,
   "lng": 114.0865,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 67449
 },
 {
   "city": "Zihuatanejo",
   "lat": 17.6444,
   "lng": -101.5511,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 67408
 },
 {
   "city": "Venustiano Carranza",
   "lat": 16.3,
   "lng": -92.6,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 67292
 },
 {
   "city": "Tôlan̈aro",
   "lat": -25.0325,
   "lng": 46.9833,
   "country": "Madagascar",
   "iso2": "MG",
   "iso3": "MDG",
   "capital": "minor",
   "population": 67284
 },
 {
   "city": "Cosenza",
   "lat": 39.3,
   "lng": 16.25,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 67239
 },
 {
   "city": "Lushar",
   "lat": 36.4971,
   "lng": 101.564,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 67153
 },
 {
   "city": "Néa Ionía",
   "lat": 38.0333,
   "lng": 23.75,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 67134
 },
 {
   "city": "Dolores Hidalgo Cuna de la Independencia Nacional",
   "lat": 21.1516,
   "lng": -100.9369,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 67101
 },
 {
   "city": "San Pedro Sacatepéquez",
   "lat": 14.9664,
   "lng": -91.7775,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 67075
 },
 {
   "city": "Głogów",
   "lat": 51.6589,
   "lng": 16.0803,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 66980
 },
 {
   "city": "Lupon",
   "lat": 6.8981,
   "lng": 126.0096,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 66979
 },
 {
   "city": "Kati",
   "lat": 12.7504,
   "lng": -8.08,
   "country": "Mali",
   "iso2": "ML",
   "iso3": "MLI",
   "capital": "minor",
   "population": 66895
 },
 {
   "city": "Güines",
   "lat": 22.8475,
   "lng": -82.0236,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 66892
 },
 {
   "city": "El Seibo",
   "lat": 18.77,
   "lng": -69.04,
   "country": "Dominican Republic",
   "iso2": "DO",
   "iso3": "DOM",
   "capital": "minor",
   "population": 66867
 },
 {
   "city": "Kissidougou",
   "lat": 9.1905,
   "lng": -10.12,
   "country": "Guinea",
   "iso2": "GN",
   "iso3": "GIN",
   "capital": "minor",
   "population": 66815
 },
 {
   "city": "Bergen op Zoom",
   "lat": 51.5,
   "lng": 4.3,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 66811
 },
 {
   "city": "Hīt",
   "lat": 33.6417,
   "lng": 42.825,
   "country": "Iraq",
   "iso2": "IQ",
   "iso3": "IRQ",
   "capital": "minor",
   "population": 66700
 },
 {
   "city": "Las Heras",
   "lat": -32.825,
   "lng": -68.8017,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 66663
 },
 {
   "city": "Herford",
   "lat": 52.1146,
   "lng": 8.6734,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 66608
 },
 {
   "city": "Ramos Arizpe",
   "lat": 25.55,
   "lng": -100.9667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 66554
 },
 {
   "city": "Karakax",
   "lat": 37.2714,
   "lng": 79.7267,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 66541
 },
 {
   "city": "Capelle aan den IJssel",
   "lat": 51.9357,
   "lng": 4.5782,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 66514
 },
 {
   "city": "Weiyuan",
   "lat": 36.8413,
   "lng": 101.9557,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 66490
 },
 {
   "city": "Kalush",
   "lat": 49.0442,
   "lng": 24.3597,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 66406
 },
 {
   "city": "Cergy",
   "lat": 49.0361,
   "lng": 2.0631,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 66322
 },
 {
   "city": "Slavyansk-na-Kubani",
   "lat": 45.2586,
   "lng": 38.1247,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 66285
 },
 {
   "city": "Huquan",
   "lat": 39.7603,
   "lng": 114.2834,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 66271
 },
 {
   "city": "Zamość",
   "lat": 50.7206,
   "lng": 23.2586,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 66234
 },
 {
   "city": "Ocoyoacac",
   "lat": 19.2739,
   "lng": -99.4606,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 66190
 },
 {
   "city": "Oberá",
   "lat": -27.4833,
   "lng": -55.1333,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 66112
 },
 {
   "city": "Moita",
   "lat": 38.65,
   "lng": -8.9833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 66029
 },
 {
   "city": "El Carmen de Bolívar",
   "lat": 9.7183,
   "lng": -75.1225,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 66001
 },
 {
   "city": "Lahat",
   "lat": -3.8,
   "lng": 103.5333,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 65906
 },
 {
   "city": "Körfez",
   "lat": 40.7706,
   "lng": 29.7661,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 65786
 },
 {
   "city": "Veenendaal",
   "lat": 52.025,
   "lng": 5.555,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 65589
 },
 {
   "city": "Qarqan",
   "lat": 38.1338,
   "lng": 85.5333,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 65572
 },
 {
   "city": "San Francisco El Alto",
   "lat": 14.95,
   "lng": -91.45,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 65521
 },
 {
   "city": "Los Amates",
   "lat": 15.2667,
   "lng": -89.1,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 65475
 },
 {
   "city": "Purulhá",
   "lat": 15.2353,
   "lng": -90.235,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 65340
 },
 {
   "city": "Katwijk",
   "lat": 52.2008,
   "lng": 4.4153,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 65302
 },
 {
   "city": "Jocotitlán",
   "lat": 19.7072,
   "lng": -99.7867,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 65291
 },
 {
   "city": "Kungur",
   "lat": 57.4333,
   "lng": 56.9333,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 65284
 },
 {
   "city": "Birnin Konni",
   "lat": 13.7904,
   "lng": 5.2599,
   "country": "Niger",
   "iso2": "NE",
   "iso3": "NER",
   "capital": "minor",
   "population": 65252
 },
 {
   "city": "Ḩalabjah",
   "lat": 35.1833,
   "lng": 45.9833,
   "country": "Iraq",
   "iso2": "IQ",
   "iso3": "IRQ",
   "capital": "minor",
   "population": 65200
 },
 {
   "city": "Weimar",
   "lat": 50.9833,
   "lng": 11.3167,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 65090
 },
 {
   "city": "Buynaksk",
   "lat": 42.8167,
   "lng": 47.1167,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 65080
 },
 {
   "city": "Borås",
   "lat": 57.7304,
   "lng": 12.92,
   "country": "Sweden",
   "iso2": "SE",
   "iso3": "SWE",
   "capital": "minor",
   "population": 65008
 },
 {
   "city": "Esquipulas",
   "lat": 14.6167,
   "lng": -89.2,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 65000
 },
 {
   "city": "Svyetlahorsk",
   "lat": 52.6333,
   "lng": 29.7333,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 64989
 },
 {
   "city": "Pabianice",
   "lat": 51.6642,
   "lng": 19.35,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 64988
 },
 {
   "city": "Caripito",
   "lat": 10.111,
   "lng": -63.1048,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 64955
 },
 {
   "city": "Valence",
   "lat": 44.9333,
   "lng": 4.8917,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 64726
 },
 {
   "city": "Bourges",
   "lat": 47.0844,
   "lng": 2.3964,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 64668
 },
 {
   "city": "Meulaboh",
   "lat": 4.1333,
   "lng": 96.1167,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 64646
 },
 {
   "city": "Marinilla",
   "lat": 6.1744,
   "lng": -75.3389,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 64645
 },
 {
   "city": "Santo Domingo Tehuantepec",
   "lat": 16.3184,
   "lng": -95.2478,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 64639
 },
 {
   "city": "Lechang",
   "lat": 35.6415,
   "lng": 111.4633,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 64587
 },
 {
   "city": "Neuwied",
   "lat": 50.4286,
   "lng": 7.4614,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 64574
 },
 {
   "city": "Apaseo el Alto",
   "lat": 20.45,
   "lng": -100.6167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 64443
 },
 {
   "city": "Misantla",
   "lat": 19.9333,
   "lng": -96.85,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 64249
 },
 {
   "city": "Ciénaga de Oro",
   "lat": 8.875,
   "lng": -75.6211,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 64226
 },
 {
   "city": "Qinggang",
   "lat": 46.69,
   "lng": 126.1,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 64182
 },
 {
   "city": "San Felipe",
   "lat": -32.7507,
   "lng": -70.7251,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 64120
 },
 {
   "city": "Bandar-e Genāveh",
   "lat": 29.5833,
   "lng": 50.5167,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 64110
 },
 {
   "city": "Neubrandenburg",
   "lat": 53.5569,
   "lng": 13.2608,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 64086
 },
 {
   "city": "Palaió Fáliro",
   "lat": 37.932,
   "lng": 23.7003,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 64021
 },
 {
   "city": "Crotone",
   "lat": 39.0833,
   "lng": 17.1167,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 63941
 },
 {
   "city": "Zeist",
   "lat": 52.0833,
   "lng": 5.2333,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 63934
 },
 {
   "city": "San José de Bocay",
   "lat": 13.542,
   "lng": -85.5394,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 63922
 },
 {
   "city": "Kangbao",
   "lat": 41.8513,
   "lng": 114.6091,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 63779
 },
 {
   "city": "Santa Catarina Pinula",
   "lat": 14.5644,
   "lng": -90.488,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 63767
 },
 {
   "city": "Zarand",
   "lat": 30.8128,
   "lng": 56.5639,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 63744
 },
 {
   "city": "Guamúchil",
   "lat": 25.4639,
   "lng": -108.0794,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 63743
 },
 {
   "city": "Plauen",
   "lat": 50.495,
   "lng": 12.1383,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 63706
 },
 {
   "city": "Zvornik",
   "lat": 44.3833,
   "lng": 19.1,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 63686
 },
 {
   "city": "Nawá",
   "lat": 32.8833,
   "lng": 36.05,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 63676
 },
 {
   "city": "Guiglo",
   "lat": 6.5436,
   "lng": -7.4933,
   "country": "Côte d'Ivoire",
   "iso2": "CI",
   "iso3": "CIV",
   "capital": "minor",
   "population": 63643
 },
 {
   "city": "At Tall",
   "lat": 33.6103,
   "lng": 36.3106,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 63554
 },
 {
   "city": "Korosten",
   "lat": 50.95,
   "lng": 28.65,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 63525
 },
 {
   "city": "Velika Gorica",
   "lat": 45.7,
   "lng": 16.0667,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 63517
 },
 {
   "city": "Leszno",
   "lat": 51.8403,
   "lng": 16.5749,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 63505
 },
 {
   "city": "Turbaco",
   "lat": 10.3319,
   "lng": -75.4142,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 63450
 },
 {
   "city": "Salto de Agua",
   "lat": 17.55,
   "lng": -92.3333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 63446
 },
 {
   "city": "Pokrovsk",
   "lat": 48.2833,
   "lng": 37.1833,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 63437
 },
 {
   "city": "Póvoa de Varzim",
   "lat": 41.3916,
   "lng": -8.7571,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 63408
 },
 {
   "city": "Rosenheim",
   "lat": 47.8561,
   "lng": 12.1289,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 63324
 },
 {
   "city": "Quimper",
   "lat": 47.9967,
   "lng": -4.0964,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 63166
 },
 {
   "city": "Puerto Asís",
   "lat": 0.5006,
   "lng": -76.4989,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 63067
 },
 {
   "city": "Nieuwegein",
   "lat": 52.0314,
   "lng": 5.0919,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 63036
 },
 {
   "city": "Antony",
   "lat": 48.7539,
   "lng": 2.2975,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 62858
 },
 {
   "city": "Palmela",
   "lat": 38.5675,
   "lng": -8.8991,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 62831
 },
 {
   "city": "Rossosh",
   "lat": 50.1983,
   "lng": 39.5672,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 62827
 },
 {
   "city": "Łomża",
   "lat": 53.1833,
   "lng": 22.0833,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 62700
 },
 {
   "city": "Mobārakeh",
   "lat": 32.3464,
   "lng": 51.5044,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 62454
 },
 {
   "city": "Tanjungpandan",
   "lat": -2.75,
   "lng": 107.65,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 62374
 },
 {
   "city": "Caltanissetta",
   "lat": 37.4915,
   "lng": 14.0624,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 62317
 },
 {
   "city": "Puerto Peñasco",
   "lat": 31.3167,
   "lng": -113.5369,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 62301
 },
 {
   "city": "Roeselare",
   "lat": 50.9447,
   "lng": 3.1233,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 62301
 },
 {
   "city": "Riosucio",
   "lat": 5.4208,
   "lng": -75.7028,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 62296
 },
 {
   "city": "Boryspil",
   "lat": 50.35,
   "lng": 30.95,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 62281
 },
 {
   "city": "Tuapse",
   "lat": 44.1,
   "lng": 39.0833,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 62269
 },
 {
   "city": "Bannu",
   "lat": 32.9889,
   "lng": 70.6056,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 62191
 },
 {
   "city": "Palín",
   "lat": 14.4039,
   "lng": -90.6986,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 62127
 },
 {
   "city": "Figueira da Foz",
   "lat": 40.1508,
   "lng": -8.8618,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 62125
 },
 {
   "city": "Zaraza",
   "lat": 9.3394,
   "lng": -65.3167,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 62027
 },
 {
   "city": "Ferkessédougou",
   "lat": 9.5928,
   "lng": -5.1944,
   "country": "Côte d'Ivoire",
   "iso2": "CI",
   "iso3": "CIV",
   "capital": "minor",
   "population": 62008
 },
 {
   "city": "Ełk",
   "lat": 53.8167,
   "lng": 22.35,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 62006
 },
 {
   "city": "Nahualá",
   "lat": 14.8429,
   "lng": -91.317,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 62000
 },
 {
   "city": "San Francisco",
   "lat": -31.4356,
   "lng": -62.0714,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 62000
 },
 {
   "city": "Troyes",
   "lat": 48.2997,
   "lng": 4.0792,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 61996
 },
 {
   "city": "Villach",
   "lat": 46.6167,
   "lng": 13.8333,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 61879
 },
 {
   "city": "Plato",
   "lat": 9.7925,
   "lng": -74.7825,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 61856
 },
 {
   "city": "Tarnowskie Góry",
   "lat": 50.4455,
   "lng": 18.8615,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 61686
 },
 {
   "city": "Cortazar",
   "lat": 20.483,
   "lng": -100.933,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 61658
 },
 {
   "city": "Tríkala",
   "lat": 39.555,
   "lng": 21.7683,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 61653
 },
 {
   "city": "San Juan Chamelco",
   "lat": 15.4257,
   "lng": -90.3263,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 61634
 },
 {
   "city": "San Antonio del Táchira",
   "lat": 7.8145,
   "lng": -72.4431,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 61630
 },
 {
   "city": "Bergheim",
   "lat": 50.9667,
   "lng": 6.65,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 61612
 },
 {
   "city": "Chełm",
   "lat": 51.1333,
   "lng": 23.4833,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 61588
 },
 {
   "city": "Asker",
   "lat": 59.8331,
   "lng": 10.4392,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 61523
 },
 {
   "city": "Hato Mayor",
   "lat": 18.767,
   "lng": -69.267,
   "country": "Dominican Republic",
   "iso2": "DO",
   "iso3": "DOM",
   "capital": "minor",
   "population": 61517
 },
 {
   "city": "Djibo",
   "lat": 14.1012,
   "lng": -1.6279,
   "country": "Burkina Faso",
   "iso2": "BF",
   "iso3": "BFA",
   "capital": "minor",
   "population": 61456
 },
 {
   "city": "Iztapa",
   "lat": 13.9331,
   "lng": -90.7075,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 61448
 },
 {
   "city": "Slutsk",
   "lat": 53.0167,
   "lng": 27.55,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 61396
 },
 {
   "city": "Výronas",
   "lat": 37.9556,
   "lng": 23.76,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 61308
 },
 {
   "city": "Kolomyia",
   "lat": 48.5167,
   "lng": 25.0333,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 61269
 },
 {
   "city": "Pruszków",
   "lat": 52.1667,
   "lng": 20.8,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 61237
 },
 {
   "city": "Wels",
   "lat": 48.15,
   "lng": 14.0167,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 61233
 },
 {
   "city": "Ar Rastan",
   "lat": 34.9167,
   "lng": 36.7333,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 61176
 },
 {
   "city": "Cherbourg",
   "lat": 49.6333,
   "lng": -1.6,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 60991
 },
 {
   "city": "Montauban",
   "lat": 44.0181,
   "lng": 1.3558,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 60952
 },
 {
   "city": "Los Polvorines",
   "lat": -34.5,
   "lng": -58.7,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 60867
 },
 {
   "city": "Tartagal",
   "lat": -22.5,
   "lng": -63.8333,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 60819
 },
 {
   "city": "Villamaría",
   "lat": 5.0456,
   "lng": -75.5153,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 60729
 },
 {
   "city": "Huatusco",
   "lat": 19.1489,
   "lng": -96.9661,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 60674
 },
 {
   "city": "Savona",
   "lat": 44.308,
   "lng": 8.481,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 60632
 },
 {
   "city": "Mielec",
   "lat": 50.2833,
   "lng": 21.4333,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 60628
 },
 {
   "city": "Autlán de Navarro",
   "lat": 19.7667,
   "lng": -104.3667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 60572
 },
 {
   "city": "Matera",
   "lat": 40.6667,
   "lng": 16.6,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 60403
 },
 {
   "city": "Xo‘jayli Shahri",
   "lat": 42.4047,
   "lng": 59.4517,
   "country": "Uzbekistan",
   "iso2": "UZ",
   "iso3": "UZB",
   "capital": "minor",
   "population": 60401
 },
 {
   "city": "Wesel",
   "lat": 51.6586,
   "lng": 6.6178,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 60357
 },
 {
   "city": "Zamora",
   "lat": 41.5033,
   "lng": -5.7556,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 60297
 },
 {
   "city": "Olbia",
   "lat": 40.9167,
   "lng": 9.5,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 60261
 },
 {
   "city": "Labinsk",
   "lat": 44.6333,
   "lng": 40.7333,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 60164
 },
 {
   "city": "Cubulco",
   "lat": 15.1083,
   "lng": -90.6306,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 60112
 },
 {
   "city": "Yongbei",
   "lat": 26.6897,
   "lng": 100.7463,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 60099
 },
 {
   "city": "Bayjī",
   "lat": 34.9292,
   "lng": 43.4931,
   "country": "Iraq",
   "iso2": "IQ",
   "iso3": "IRQ",
   "capital": "minor",
   "population": 60000
 },
 {
   "city": "Suifenhe",
   "lat": 44.3998,
   "lng": 131.1478,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 60000
 },
 {
   "city": "San Marcos",
   "lat": 8.6622,
   "lng": -75.1289,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 59976
 },
 {
   "city": "Urus-Martan",
   "lat": 43.1224,
   "lng": 45.5366,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 59954
 },
 {
   "city": "Tecpán Guatemala",
   "lat": 14.7667,
   "lng": -91,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 59859
 },
 {
   "city": "Benevento",
   "lat": 41.1333,
   "lng": 14.7833,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 59789
 },
 {
   "city": "Dongcun",
   "lat": 38.28,
   "lng": 111.6751,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 59772
 },
 {
   "city": "Agía Paraskeví",
   "lat": 38.0053,
   "lng": 23.8208,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 59704
 },
 {
   "city": "Hardenberg",
   "lat": 52.5758,
   "lng": 6.6194,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 59689
 },
 {
   "city": "Offenburg",
   "lat": 48.4708,
   "lng": 7.9408,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 59646
 },
 {
   "city": "Altamira",
   "lat": 22.3375,
   "lng": -97.8694,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 59536
 },
 {
   "city": "Sayaxché",
   "lat": 16.5167,
   "lng": -90.1833,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 59499
 },
 {
   "city": "Esfarāyen",
   "lat": 37.0764,
   "lng": 57.51,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 59490
 },
 {
   "city": "Yara",
   "lat": 20.2767,
   "lng": -76.9469,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 59415
 },
 {
   "city": "Los Andes",
   "lat": -32.8337,
   "lng": -70.5982,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 59388
 },
 {
   "city": "Greifswald",
   "lat": 54.0833,
   "lng": 13.3833,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 59382
 },
 {
   "city": "Morón",
   "lat": 22.1108,
   "lng": -78.6278,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 59371
 },
 {
   "city": "Hua Hin",
   "lat": 12.5686,
   "lng": 99.9578,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 59369
 },
 {
   "city": "Comitancillo",
   "lat": 15.0906,
   "lng": -91.7486,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 59357
 },
 {
   "city": "Agrigento",
   "lat": 37.3111,
   "lng": 13.5765,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 59329
 },
 {
   "city": "Stryi",
   "lat": 49.25,
   "lng": 23.85,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 59325
 },
 {
   "city": "El Cuá",
   "lat": 13.3679,
   "lng": -85.6728,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 59307
 },
 {
   "city": "Gannan",
   "lat": 47.9117,
   "lng": 123.4978,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 59239
 },
 {
   "city": "Stralsund",
   "lat": 54.3092,
   "lng": 13.0819,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 59205
 },
 {
   "city": "Sabinas",
   "lat": 27.8489,
   "lng": -101.12,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 59196
 },
 {
   "city": "Chalkída",
   "lat": 38.4625,
   "lng": 23.595,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 59125
 },
 {
   "city": "Dāmghān",
   "lat": 36.1681,
   "lng": 54.3481,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 59106
 },
 {
   "city": "Concepción Tutuapa",
   "lat": 15.2833,
   "lng": -91.7833,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 59063
 },
 {
   "city": "Niort",
   "lat": 46.3258,
   "lng": -0.4606,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 59059
 },
 {
   "city": "Bełchatów",
   "lat": 51.3667,
   "lng": 19.3667,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 59025
 },
 {
   "city": "Florida",
   "lat": 3.3217,
   "lng": -76.2347,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 58988
 },
 {
   "city": "Pamplona",
   "lat": 7.3761,
   "lng": -72.6483,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 58975
 },
 {
   "city": "Kattaqo’rg’on Shahri",
   "lat": 39.8958,
   "lng": 66.2656,
   "country": "Uzbekistan",
   "iso2": "UZ",
   "iso3": "UZB",
   "capital": "minor",
   "population": 58950
 },
 {
   "city": "Santa María Chiquimula",
   "lat": 15.0292,
   "lng": -91.3294,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 58918
 },
 {
   "city": "Chambéry",
   "lat": 45.57,
   "lng": 5.9118,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 58833
 },
 {
   "city": "Sarcelles",
   "lat": 48.9956,
   "lng": 2.3808,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 58811
 },
 {
   "city": "Neu-Ulm",
   "lat": 48.3833,
   "lng": 10,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 58707
 },
 {
   "city": "Sandnes",
   "lat": 58.85,
   "lng": 5.7333,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 58694
 },
 {
   "city": "Jovellanos",
   "lat": 22.8106,
   "lng": -81.1981,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 58685
 },
 {
   "city": "Unna",
   "lat": 51.5347,
   "lng": 7.6889,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 58633
 },
 {
   "city": "Ma’erkang",
   "lat": 31.9046,
   "lng": 102.2167,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 58437
 },
 {
   "city": "San Pedro",
   "lat": -24.2196,
   "lng": -64.87,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 58430
 },
 {
   "city": "San Fernando",
   "lat": -34.5839,
   "lng": -70.9891,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 58367
 },
 {
   "city": "Jiantang",
   "lat": 27.8205,
   "lng": 99.7043,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 58339
 },
 {
   "city": "Punta Alta",
   "lat": -38.88,
   "lng": -62.075,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 58315
 },
 {
   "city": "Sérres",
   "lat": 41.0833,
   "lng": 23.55,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 58287
 },
 {
   "city": "La Gomera",
   "lat": 14.0833,
   "lng": -91.05,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 58272
 },
 {
   "city": "Mouscron",
   "lat": 50.7444,
   "lng": 3.2156,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 58234
 },
 {
   "city": "Samaná",
   "lat": 19.2053,
   "lng": -69.3364,
   "country": "Dominican Republic",
   "iso2": "DO",
   "iso3": "DOM",
   "capital": "minor",
   "population": 58156
 },
 {
   "city": "Felgueiras",
   "lat": 41.3667,
   "lng": -8.2,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 58065
 },
 {
   "city": "Timargara",
   "lat": 34.8281,
   "lng": 71.8408,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 58050
 },
 {
   "city": "Pradera",
   "lat": 3.4189,
   "lng": -76.2439,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 57990
 },
 {
   "city": "Euskirchen",
   "lat": 50.6613,
   "lng": 6.7873,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 57975
 },
 {
   "city": "Acámbaro",
   "lat": 20.0361,
   "lng": -100.7314,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 57972
 },
 {
   "city": "Barneveld",
   "lat": 52.1333,
   "lng": 5.5833,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 57971
 },
 {
   "city": "Ávila",
   "lat": 40.65,
   "lng": -4.6833,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 57949
 },
 {
   "city": "Prokhladnyy",
   "lat": 43.7575,
   "lng": 44.0297,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 57883
 },
 {
   "city": "Alexandroúpoli",
   "lat": 40.85,
   "lng": 25.8667,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 57812
 },
 {
   "city": "Suileng",
   "lat": 47.246,
   "lng": 127.106,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 57789
 },
 {
   "city": "Orito",
   "lat": 0.6661,
   "lng": -76.8708,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 57774
 },
 {
   "city": "Tikhoretsk",
   "lat": 45.85,
   "lng": 40.1167,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 57771
 },
 {
   "city": "Świdnica",
   "lat": 50.8406,
   "lng": 16.4925,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 57761
 },
 {
   "city": "Tarsus",
   "lat": 36.9167,
   "lng": 34.9,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 57737
 },
 {
   "city": "Linares",
   "lat": 24.8604,
   "lng": -99.57,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 57731
 },
 {
   "city": "Ciudad Cuauhtémoc",
   "lat": 22.1833,
   "lng": -97.8333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 57646
 },
 {
   "city": "Salsk",
   "lat": 46.4833,
   "lng": 41.5333,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 57622
 },
 {
   "city": "Göppingen",
   "lat": 48.7025,
   "lng": 9.6528,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 57558
 },
 {
   "city": "Doetinchem",
   "lat": 51.9667,
   "lng": 6.2833,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 57555
 },
 {
   "city": "Diriamba",
   "lat": 11.85,
   "lng": -86.2333,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 57512
 },
 {
   "city": "Hameln",
   "lat": 52.1031,
   "lng": 9.36,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 57510
 },
 {
   "city": "Biała Podlaska",
   "lat": 52.0333,
   "lng": 23.1167,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 57498
 },
 {
   "city": "Santiago Tuxtla",
   "lat": 18.4654,
   "lng": -95.3,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 57466
 },
 {
   "city": "Istaravshan",
   "lat": 39.9108,
   "lng": 69.0064,
   "country": "Tajikistan",
   "iso2": "TJ",
   "iso3": "TJK",
   "capital": "minor",
   "population": 57400
 },
 {
   "city": "Roermond",
   "lat": 51.1933,
   "lng": 5.9872,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 57308
 },
 {
   "city": "Krymsk",
   "lat": 44.9333,
   "lng": 38,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 57229
 },
 {
   "city": "Riosucio",
   "lat": 7.4386,
   "lng": -77.1133,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 57220
 },
 {
   "city": "Bilhorod-Dnistrovskyi",
   "lat": 46.1833,
   "lng": 30.3333,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 57210
 },
 {
   "city": "Melchor Ocampo",
   "lat": 19.7083,
   "lng": -99.1444,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 57152
 },
 {
   "city": "Cosamaloapan",
   "lat": 18.3667,
   "lng": -95.8,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 57147
 },
 {
   "city": "Lorient",
   "lat": 47.75,
   "lng": -3.36,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 57084
 },
 {
   "city": "Pula",
   "lat": 44.8667,
   "lng": 13.8333,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 57053
 },
 {
   "city": "General Pico",
   "lat": -35.6587,
   "lng": -63.7577,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 57029
 },
 {
   "city": "Tønsberg",
   "lat": 59.2981,
   "lng": 10.4236,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 57026
 },
 {
   "city": "Frankfurt (Oder)",
   "lat": 52.3419,
   "lng": 14.5517,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 57015
 },
 {
   "city": "Talagante",
   "lat": -33.6667,
   "lng": -70.9333,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 56990
 },
 {
   "city": "Ródos",
   "lat": 36.4412,
   "lng": 28.2225,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 56969
 },
 {
   "city": "Tezonapa",
   "lat": 18.6058,
   "lng": -96.6875,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 56956
 },
 {
   "city": "Puerto Boyacá",
   "lat": 5.9761,
   "lng": -74.5875,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 56930
 },
 {
   "city": "Heerhugowaard",
   "lat": 52.668,
   "lng": 4.841,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 56742
 },
 {
   "city": "Alcobaça",
   "lat": 39.55,
   "lng": -8.975,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 56693
 },
 {
   "city": "Mengla",
   "lat": 21.4866,
   "lng": 101.5639,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 56612
 },
 {
   "city": "Beauvais",
   "lat": 49.4303,
   "lng": 2.0952,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 56605
 },
 {
   "city": "Tāybād",
   "lat": 34.74,
   "lng": 60.7756,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 56562
 },
 {
   "city": "Bartolomé Masó",
   "lat": 20.1686,
   "lng": -76.9428,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 56460
 },
 {
   "city": "Amealco",
   "lat": 20.1881,
   "lng": -100.1439,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 56457
 },
 {
   "city": "Longxing",
   "lat": 35.6091,
   "lng": 111.2304,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 56381
 },
 {
   "city": "Będzin",
   "lat": 50.325,
   "lng": 19.1333,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 56354
 },
 {
   "city": "Paços de Ferreira",
   "lat": 41.2833,
   "lng": -8.3833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 56340
 },
 {
   "city": "Novohrad-Volynskyi",
   "lat": 50.5833,
   "lng": 27.6333,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 56288
 },
 {
   "city": "Cuneo",
   "lat": 44.3833,
   "lng": 7.55,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 56281
 },
 {
   "city": "Amarante",
   "lat": 41.2667,
   "lng": -8.0833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 56264
 },
 {
   "city": "Khlong Luang",
   "lat": 14.0647,
   "lng": 100.6458,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 56128
 },
 {
   "city": "Xánthi",
   "lat": 41.1333,
   "lng": 24.8833,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 56122
 },
 {
   "city": "Trani",
   "lat": 41.2667,
   "lng": 16.4167,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 56031
 },
 {
   "city": "Kateríni",
   "lat": 40.2667,
   "lng": 22.5,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 55997
 },
 {
   "city": "Zarrīn Shahr",
   "lat": 32.3894,
   "lng": 51.3764,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 55984
 },
 {
   "city": "Khān Shaykhūn",
   "lat": 35.4419,
   "lng": 36.6508,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 55843
 },
 {
   "city": "Changling",
   "lat": 44.27,
   "lng": 123.99,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 55841
 },
 {
   "city": "Lozova",
   "lat": 48.8892,
   "lng": 36.3161,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 55827
 },
 {
   "city": "Azul",
   "lat": -36.7833,
   "lng": -59.85,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 55728
 },
 {
   "city": "Ārān Bīdgol",
   "lat": 34.0578,
   "lng": 51.4842,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 55651
 },
 {
   "city": "Hashtgerd",
   "lat": 35.9619,
   "lng": 50.68,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 55640
 },
 {
   "city": "Oosterhout",
   "lat": 51.6431,
   "lng": 4.8569,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 55616
 },
 {
   "city": "Portimão",
   "lat": 37.1333,
   "lng": -8.5333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 55614
 },
 {
   "city": "Den Helder",
   "lat": 52.9583,
   "lng": 4.7589,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 55604
 },
 {
   "city": "Yongqing",
   "lat": 34.7522,
   "lng": 106.1312,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 55595
 },
 {
   "city": "Görlitz",
   "lat": 51.1528,
   "lng": 14.9872,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 55583
 },
 {
   "city": "Xiva",
   "lat": 41.3783,
   "lng": 60.3639,
   "country": "Uzbekistan",
   "iso2": "UZ",
   "iso3": "UZB",
   "capital": "minor",
   "population": 55568
 },
 {
   "city": "Nuevo Casas Grandes",
   "lat": 30.4167,
   "lng": -107.9167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 55553
 },
 {
   "city": "El Banco",
   "lat": 9.0008,
   "lng": -73.9744,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 55530
 },
 {
   "city": "Baden-Baden",
   "lat": 48.7619,
   "lng": 8.2408,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 55449
 },
 {
   "city": "Waiblingen",
   "lat": 48.8303,
   "lng": 9.3169,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 55449
 },
 {
   "city": "Meaux",
   "lat": 48.9603,
   "lng": 2.8883,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 55416
 },
 {
   "city": "Ovar",
   "lat": 40.8667,
   "lng": -8.6333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 55398
 },
 {
   "city": "Narbonne",
   "lat": 43.1836,
   "lng": 3.0042,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 55375
 },
 {
   "city": "Hoogeveen",
   "lat": 52.7167,
   "lng": 6.4667,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 55224
 },
 {
   "city": "Pombal",
   "lat": 39.9161,
   "lng": -8.6281,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 55217
 },
 {
   "city": "Verviers",
   "lat": 50.5833,
   "lng": 5.85,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 55198
 },
 {
   "city": "Tiquisate",
   "lat": 14.2833,
   "lng": -91.3667,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 54983
 },
 {
   "city": "Martin",
   "lat": 49.0636,
   "lng": 18.9214,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 54978
 },
 {
   "city": "La Roche-sur-Yon",
   "lat": 46.6705,
   "lng": -1.426,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 54766
 },
 {
   "city": "San Gil",
   "lat": 6.555,
   "lng": -73.1336,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 54687
 },
 {
   "city": "Sarpsborg",
   "lat": 59.2839,
   "lng": 11.1096,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 54678
 },
 {
   "city": "Terneuzen",
   "lat": 51.2931,
   "lng": 3.8339,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 54589
 },
 {
   "city": "Jinchang",
   "lat": 38.4858,
   "lng": 112.9643,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 54533
 },
 {
   "city": "Chivilcoy",
   "lat": -34.9,
   "lng": -60.0167,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 54514
 },
 {
   "city": "Mali",
   "lat": 23.1277,
   "lng": 104.7029,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 54511
 },
 {
   "city": "Teramo",
   "lat": 42.6589,
   "lng": 13.7039,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 54338
 },
 {
   "city": "El Rama",
   "lat": 12.2333,
   "lng": -84.3043,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 54337
 },
 {
   "city": "Huixtla",
   "lat": 15.1429,
   "lng": -92.5122,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 54332
 },
 {
   "city": "Kotka",
   "lat": 60.4667,
   "lng": 26.9458,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 54319
 },
 {
   "city": "Bobigny",
   "lat": 48.9106,
   "lng": 2.4397,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 54272
 },
 {
   "city": "Bad Homburg",
   "lat": 50.2292,
   "lng": 8.6105,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 54248
 },
 {
   "city": "Cholet",
   "lat": 47.06,
   "lng": -0.8783,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 54186
 },
 {
   "city": "Hashtpar",
   "lat": 37.7992,
   "lng": 48.9053,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 54178
 },
 {
   "city": "Ixhuatlán de Madero",
   "lat": 20.6833,
   "lng": -98.0167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 54132
 },
 {
   "city": "Kavála",
   "lat": 40.9396,
   "lng": 24.4069,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 54027
 },
 {
   "city": "Puerto Libertador",
   "lat": 7.8881,
   "lng": -75.6717,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 53990
 },
 {
   "city": "Cuenca",
   "lat": 40.0667,
   "lng": -2.15,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 53988
 },
 {
   "city": "Ruteng",
   "lat": -8.6118,
   "lng": 120.4698,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 53976
 },
 {
   "city": "Chaniá",
   "lat": 35.5167,
   "lng": 24.0167,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 53910
 },
 {
   "city": "Avellino",
   "lat": 40.9153,
   "lng": 14.7897,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 53908
 },
 {
   "city": "Siena",
   "lat": 43.3183,
   "lng": 11.3314,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 53901
 },
 {
   "city": "Salo",
   "lat": 60.3831,
   "lng": 23.1331,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 53890
 },
 {
   "city": "Legionowo",
   "lat": 52.3833,
   "lng": 20.8833,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 53886
 },
 {
   "city": "Bījār",
   "lat": 35.8741,
   "lng": 47.5937,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 53871
 },
 {
   "city": "Saint-Quentin",
   "lat": 49.8486,
   "lng": 3.2864,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 53856
 },
 {
   "city": "Shali",
   "lat": 43.15,
   "lng": 45.9,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 53807
 },
 {
   "city": "Tajumulco",
   "lat": 15.0839,
   "lng": -91.9233,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 53791
 },
 {
   "city": "Kampen",
   "lat": 52.55,
   "lng": 5.9,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 53779
 },
 {
   "city": "Upata",
   "lat": 8.0204,
   "lng": -62.41,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 53685
 },
 {
   "city": "Évry",
   "lat": 48.6239,
   "lng": 2.4294,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 53641
 },
 {
   "city": "Kongoussi",
   "lat": 13.3333,
   "lng": -1.5333,
   "country": "Burkina Faso",
   "iso2": "BF",
   "iso3": "BFA",
   "capital": "minor",
   "population": 53641
 },
 {
   "city": "Enerhodar",
   "lat": 47.4989,
   "lng": 34.6558,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 53567
 },
 {
   "city": "Encarnación de Díaz",
   "lat": 21.5167,
   "lng": -102.2333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 53555
 },
 {
   "city": "Pijijiapan",
   "lat": 15.6867,
   "lng": -93.2092,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 53525
 },
 {
   "city": "Marco de Canavezes",
   "lat": 41.1833,
   "lng": -8.15,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 53450
 },
 {
   "city": "Vannes",
   "lat": 47.6559,
   "lng": -2.7603,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 53438
 },
 {
   "city": "Huesca",
   "lat": 42.1333,
   "lng": -0.4167,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 53429
 },
 {
   "city": "Narva",
   "lat": 59.3792,
   "lng": 28.2006,
   "country": "Estonia",
   "iso2": "EE",
   "iso3": "EST",
   "capital": "minor",
   "population": 53424
 },
 {
   "city": "Nordhorn",
   "lat": 52.4333,
   "lng": 7.0667,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 53403
 },
 {
   "city": "Pryluky",
   "lat": 50.6,
   "lng": 32.4,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 53395
 },
 {
   "city": "Tame",
   "lat": 6.4583,
   "lng": -71.7447,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 53266
 },
 {
   "city": "Qingan",
   "lat": 46.8719,
   "lng": 127.5118,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 53206
 },
 {
   "city": "Barbosa",
   "lat": 6.4375,
   "lng": -75.3306,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 53167
 },
 {
   "city": "Neustadt",
   "lat": 49.3443,
   "lng": 8.1952,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 53148
 },
 {
   "city": "Pinotepa",
   "lat": 16.3412,
   "lng": -98.0537,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 53148
 },
 {
   "city": "Barobo",
   "lat": 8.55,
   "lng": 126.2,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 53146
 },
 {
   "city": "Sagua la Grande",
   "lat": 22.8086,
   "lng": -80.0711,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 53077
 },
 {
   "city": "Kalamáta",
   "lat": 37.0378,
   "lng": 22.1111,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 53041
 },
 {
   "city": "Wetzlar",
   "lat": 50.5667,
   "lng": 8.5,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 52954
 },
 {
   "city": "Mercedes",
   "lat": -34.65,
   "lng": -59.4333,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 52949
 },
 {
   "city": "Alvarado",
   "lat": 18.7811,
   "lng": -95.7572,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 52927
 },
 {
   "city": "Gudermes",
   "lat": 43.35,
   "lng": 46.1,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 52908
 },
 {
   "city": "Xincheng",
   "lat": 39.9883,
   "lng": 112.4673,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 52903
 },
 {
   "city": "Ostrołęka",
   "lat": 53.0833,
   "lng": 21.5667,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 52900
 },
 {
   "city": "Kobryn",
   "lat": 52.2167,
   "lng": 24.3667,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 52843
 },
 {
   "city": "Lorica",
   "lat": 9.2419,
   "lng": -75.816,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 52771
 },
 {
   "city": "San José Villa de Allende",
   "lat": 19.3747,
   "lng": -100.1475,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 52641
 },
 {
   "city": "Tlacotepec",
   "lat": 18.6882,
   "lng": -97.6489,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 52508
 },
 {
   "city": "An Nabk",
   "lat": 34.025,
   "lng": 36.7344,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 52502
 },
 {
   "city": "Qabqa",
   "lat": 36.2814,
   "lng": 100.6131,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 52500
 },
 {
   "city": "Pacora",
   "lat": 9.08,
   "lng": -79.28,
   "country": "Panama",
   "iso2": "PA",
   "iso3": "PAN",
   "capital": "minor",
   "population": 52494
 },
 {
   "city": "Dauis",
   "lat": 9.6253,
   "lng": 123.8658,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 52492
 },
 {
   "city": "Passau",
   "lat": 48.5667,
   "lng": 13.4667,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 52469
 },
 {
   "city": "Taxco de Alarcón",
   "lat": 18.5564,
   "lng": -99.605,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 52217
 },
 {
   "city": "Wolfenbüttel",
   "lat": 52.1622,
   "lng": 10.5369,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 52174
 },
 {
   "city": "Cruz del Eje",
   "lat": -30.7333,
   "lng": -64.8,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 52172
 },
 {
   "city": "Ålesund",
   "lat": 62.4723,
   "lng": 6.1549,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 52163
 },
 {
   "city": "Belorechensk",
   "lat": 44.7667,
   "lng": 39.8667,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 52082
 },
 {
   "city": "Acatzingo",
   "lat": 18.9817,
   "lng": -97.7822,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 52078
 },
 {
   "city": "Poprad",
   "lat": 49.05,
   "lng": 20.3,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 52037
 },
 {
   "city": "Ālbū Kamāl",
   "lat": 34.45,
   "lng": 40.9186,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 52020
 },
 {
   "city": "Huamantla",
   "lat": 19.3133,
   "lng": -97.9228,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 51996
 },
 {
   "city": "Trinidad",
   "lat": 21.8,
   "lng": -79.9667,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 51994
 },
 {
   "city": "San Onofre",
   "lat": 9.7372,
   "lng": -75.5256,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 51991
 },
 {
   "city": "Timashevsk",
   "lat": 45.6167,
   "lng": 38.9333,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 51925
 },
 {
   "city": "Gwadar",
   "lat": 25.1264,
   "lng": 62.3225,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 51901
 },
 {
   "city": "El Bagre",
   "lat": 7.6047,
   "lng": -74.8086,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 51862
 },
 {
   "city": "Kleve",
   "lat": 51.79,
   "lng": 6.14,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 51845
 },
 {
   "city": "Covilhã",
   "lat": 40.2833,
   "lng": -7.5,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 51797
 },
 {
   "city": "Rijswijk",
   "lat": 52.0456,
   "lng": 4.33,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 51742
 },
 {
   "city": "Caldas da Rainha",
   "lat": 39.4069,
   "lng": -9.1363,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 51729
 },
 {
   "city": "Berriozábal",
   "lat": 16.7985,
   "lng": -93.2716,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 51722
 },
 {
   "city": "Beykoz",
   "lat": 41.125,
   "lng": 29.1056,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 51689
 },
 {
   "city": "Girardota",
   "lat": 6.3769,
   "lng": -75.4461,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 51662
 },
 {
   "city": "Huazangsi",
   "lat": 36.9836,
   "lng": 103.1265,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 51603
 },
 {
   "city": "Bayonne",
   "lat": 43.49,
   "lng": -1.48,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 51411
 },
 {
   "city": "Tadmur",
   "lat": 34.56,
   "lng": 38.2672,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 51323
 },
 {
   "city": "Guarne",
   "lat": 6.2792,
   "lng": -75.4419,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 51265
 },
 {
   "city": "Segovia",
   "lat": 40.9481,
   "lng": -4.1183,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 51258
 },
 {
   "city": "Montijo",
   "lat": 38.7049,
   "lng": -8.9757,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 51222
 },
 {
   "city": "Woerden",
   "lat": 52.0858,
   "lng": 4.8833,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 51156
 },
 {
   "city": "Rovigo",
   "lat": 45.0809,
   "lng": 11.794,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 51149
 },
 {
   "city": "Pordenone",
   "lat": 45.9626,
   "lng": 12.6563,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 51127
 },
 {
   "city": "Arles",
   "lat": 43.6767,
   "lng": 4.6278,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 51031
 },
 {
   "city": "Tucurú",
   "lat": 15.3,
   "lng": -90.0667,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 50971
 },
 {
   "city": "Bad Kreuznach",
   "lat": 49.8469,
   "lng": 7.8669,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 50948
 },
 {
   "city": "Cuyotenango",
   "lat": 14.5421,
   "lng": -91.5723,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 50860
 },
 {
   "city": "Zabīd",
   "lat": 14.2,
   "lng": 43.3167,
   "country": "Yemen",
   "iso2": "YE",
   "iso3": "YEM",
   "capital": "minor",
   "population": 50781
 },
 {
   "city": "Chieti",
   "lat": 42.3511,
   "lng": 14.1674,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 50770
 },
 {
   "city": "Goslar",
   "lat": 51.906,
   "lng": 10.4292,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 50753
 },
 {
   "city": "Zumpango",
   "lat": 19.7969,
   "lng": -99.0992,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 50742
 },
 {
   "city": "Gummersbach",
   "lat": 51.0333,
   "lng": 7.5667,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 50688
 },
 {
   "city": "Fafe",
   "lat": 41.45,
   "lng": -8.1667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 50633
 },
 {
   "city": "Ravensburg",
   "lat": 47.7831,
   "lng": 9.6114,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 50623
 },
 {
   "city": "Konibodom",
   "lat": 40.2833,
   "lng": 70.4167,
   "country": "Tajikistan",
   "iso2": "TJ",
   "iso3": "TJK",
   "capital": "minor",
   "population": 50400
 },
 {
   "city": "Speyer",
   "lat": 49.3194,
   "lng": 8.4311,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 50378
 },
 {
   "city": "Chinú",
   "lat": 9.1097,
   "lng": -75.3981,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 50313
 },
 {
   "city": "Baranoa",
   "lat": 10.7956,
   "lng": -74.9194,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 50261
 },
 {
   "city": "Qinhe",
   "lat": 36.5047,
   "lng": 112.3335,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 50143
 },
 {
   "city": "Bang Bua Thong",
   "lat": 13.9099,
   "lng": 100.4263,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 50141
 },
 {
   "city": "Böblingen",
   "lat": 48.6833,
   "lng": 9,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 50121
 },
 {
   "city": "Francisco I. Madero",
   "lat": 25.7753,
   "lng": -103.2731,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 50084
 },
 {
   "city": "Nanjian",
   "lat": 25.053,
   "lng": 100.5231,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 50083
 },
 {
   "city": "Cizre",
   "lat": 37.3302,
   "lng": 42.1848,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 50023
 },
 {
   "city": "Gutao",
   "lat": 37.1989,
   "lng": 112.1767,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 50000
 },
 {
   "city": "Lindong",
   "lat": 43.9673,
   "lng": 119.357,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 50000
 },
 {
   "city": "Nenjiang",
   "lat": 49.1745,
   "lng": 125.216,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 50000
 },
 {
   "city": "Sardasht",
   "lat": 36.1553,
   "lng": 45.4789,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 50000
 },
 {
   "city": "Peine",
   "lat": 52.3203,
   "lng": 10.2336,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 49952
 },
 {
   "city": "Porvoo",
   "lat": 60.3931,
   "lng": 25.6639,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 49928
 },
 {
   "city": "Emden",
   "lat": 53.3669,
   "lng": 7.2061,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 49913
 },
 {
   "city": "Houten",
   "lat": 52.0261,
   "lng": 5.1728,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 49911
 },
 {
   "city": "Tepeapulco",
   "lat": 19.7856,
   "lng": -98.5517,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 49850
 },
 {
   "city": "Weert",
   "lat": 51.25,
   "lng": 5.7,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 49842
 },
 {
   "city": "Puławy",
   "lat": 51.4166,
   "lng": 21.9694,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 49839
 },
 {
   "city": "Slonim",
   "lat": 53.0833,
   "lng": 25.3167,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 49830
 },
 {
   "city": "Rāmhormoz",
   "lat": 31.2783,
   "lng": 49.6064,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 49822
 },
 {
   "city": "Rastatt",
   "lat": 48.8572,
   "lng": 8.2031,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 49783
 },
 {
   "city": "Gualán",
   "lat": 15.1333,
   "lng": -89.3667,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 49709
 },
 {
   "city": "Moss",
   "lat": 59.434,
   "lng": 10.6577,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 49668
 },
 {
   "city": "Cimitarra",
   "lat": 6.3133,
   "lng": -73.95,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 49593
 },
 {
   "city": "Laval",
   "lat": 48.0733,
   "lng": -0.7689,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 49573
 },
 {
   "city": "Heidenheim",
   "lat": 48.6761,
   "lng": 10.1544,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 49526
 },
 {
   "city": "Sesimbra",
   "lat": 38.4437,
   "lng": -9.0996,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 49500
 },
 {
   "city": "San Pedro",
   "lat": 25.7578,
   "lng": -102.9831,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 49490
 },
 {
   "city": "Sittard",
   "lat": 51,
   "lng": 5.8667,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 49483
 },
 {
   "city": "Shakhtarsk",
   "lat": 48.0333,
   "lng": 38.4833,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 49482
 },
 {
   "city": "María la Baja",
   "lat": 9.9811,
   "lng": -75.2986,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 49462
 },
 {
   "city": "Villaguay",
   "lat": -31.85,
   "lng": -59.0167,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 49445
 },
 {
   "city": "Mantova",
   "lat": 45.1564,
   "lng": 10.7911,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 49409
 },
 {
   "city": "Lörrach",
   "lat": 47.6156,
   "lng": 7.6614,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 49347
 },
 {
   "city": "Libertador General San Martín",
   "lat": -23.8,
   "lng": -64.7833,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 49267
 },
 {
   "city": "Kizlyar",
   "lat": 43.85,
   "lng": 46.7167,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 49247
 },
 {
   "city": "Agustín Codazzi",
   "lat": 10.0367,
   "lng": -73.2369,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 49233
 },
 {
   "city": "Baicheng",
   "lat": 41.7957,
   "lng": 81.8715,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 49207
 },
 {
   "city": "Samaniego",
   "lat": 1.3364,
   "lng": -77.5925,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 49178
 },
 {
   "city": "Yong’an",
   "lat": 31.0504,
   "lng": 109.5167,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 49168
 },
 {
   "city": "Guozhen",
   "lat": 34.3668,
   "lng": 107.198,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 49100
 },
 {
   "city": "Albi",
   "lat": 43.9289,
   "lng": 2.1464,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 48993
 },
 {
   "city": "Palencia",
   "lat": 14.6676,
   "lng": -90.3575,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 48923
 },
 {
   "city": "Al Mayādīn",
   "lat": 35.0208,
   "lng": 40.4533,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 48922
 },
 {
   "city": "Panay",
   "lat": 11.55,
   "lng": 122.8,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 48890
 },
 {
   "city": "Grasse",
   "lat": 43.6667,
   "lng": 6.9167,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 48865
 },
 {
   "city": "Jiménez",
   "lat": 27.13,
   "lng": -104.9067,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 48859
 },
 {
   "city": "Waingapu",
   "lat": -9.6582,
   "lng": 120.253,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 48828
 },
 {
   "city": "Ascoli Piceno",
   "lat": 42.8547,
   "lng": 13.5753,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 48773
 },
 {
   "city": "Sanare",
   "lat": 9.7822,
   "lng": -69.7931,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 48764
 },
 {
   "city": "Starogard Gdański",
   "lat": 53.9667,
   "lng": 18.5333,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 48690
 },
 {
   "city": "Barendrecht",
   "lat": 51.85,
   "lng": 4.5333,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 48673
 },
 {
   "city": "Garmsār",
   "lat": 35.2167,
   "lng": 52.3333,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 48672
 },
 {
   "city": "Freising",
   "lat": 48.4028,
   "lng": 11.7489,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 48634
 },
 {
   "city": "Angol",
   "lat": -37.7988,
   "lng": -72.7086,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 48608
 },
 {
   "city": "Liujiaxia",
   "lat": 35.9423,
   "lng": 103.3146,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 48505
 },
 {
   "city": "Kurganinsk",
   "lat": 44.8833,
   "lng": 40.6,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 48439
 },
 {
   "city": "Kozlu",
   "lat": 41.4333,
   "lng": 31.75,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 48381
 },
 {
   "city": "Damāvand",
   "lat": 35.7178,
   "lng": 52.065,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 48380
 },
 {
   "city": "Cuxhaven",
   "lat": 53.8667,
   "lng": 8.7,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 48356
 },
 {
   "city": "San Pedro Mixtepec",
   "lat": 16,
   "lng": -97.1169,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 48336
 },
 {
   "city": "IJmuiden",
   "lat": 52.4586,
   "lng": 4.6194,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 48320
 },
 {
   "city": "Titao",
   "lat": 13.7667,
   "lng": -2.0736,
   "country": "Burkina Faso",
   "iso2": "BF",
   "iso3": "BFA",
   "capital": "minor",
   "population": 48242
 },
 {
   "city": "Waalwijk",
   "lat": 51.6833,
   "lng": 5.0667,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 48240
 },
 {
   "city": "Lecco",
   "lat": 45.85,
   "lng": 9.4,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 48177
 },
 {
   "city": "Longtoushan Jiezi",
   "lat": 27.1157,
   "lng": 103.3817,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 48150
 },
 {
   "city": "Alta Gracia",
   "lat": -31.6667,
   "lng": -64.4333,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 48140
 },
 {
   "city": "Zhujiacun",
   "lat": 26.3164,
   "lng": 104.3893,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 48124
 },
 {
   "city": "Santa Catarina Ixtahuacán",
   "lat": 14.8,
   "lng": -91.3667,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 48097
 },
 {
   "city": "Dornbirn",
   "lat": 47.4167,
   "lng": 9.75,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 48067
 },
 {
   "city": "Cuetzalan",
   "lat": 20.0333,
   "lng": -97.5167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 47983
 },
 {
   "city": "Mengmeng",
   "lat": 23.4718,
   "lng": 99.8336,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 47966
 },
 {
   "city": "Carepa",
   "lat": 7.7581,
   "lng": -76.6553,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 47932
 },
 {
   "city": "San Francisco",
   "lat": 16.8017,
   "lng": -89.9342,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 47919
 },
 {
   "city": "Vila Verde",
   "lat": 41.65,
   "lng": -8.4333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 47888
 },
 {
   "city": "Golpāyegān",
   "lat": 33.4536,
   "lng": 50.2883,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 47849
 },
 {
   "city": "Skierniewice",
   "lat": 51.9528,
   "lng": 20.1417,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 47837
 },
 {
   "city": "Tarnobrzeg",
   "lat": 50.5833,
   "lng": 21.6833,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 47816
 },
 {
   "city": "Straubing",
   "lat": 48.8772,
   "lng": 12.5758,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 47794
 },
 {
   "city": "Luwuk",
   "lat": -0.9396,
   "lng": 122.79,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 47778
 },
 {
   "city": "Águeda",
   "lat": 40.5805,
   "lng": -8.4417,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 47729
 },
 {
   "city": "Amahai",
   "lat": -3.3331,
   "lng": 128.919,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 47653
 },
 {
   "city": "Starachowice",
   "lat": 51.05,
   "lng": 21.0667,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 47638
 },
 {
   "city": "Harderwijk",
   "lat": 52.3506,
   "lng": 5.6172,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 47581
 },
 {
   "city": "‘Āmūdā",
   "lat": 37.1042,
   "lng": 40.93,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 47580
 },
 {
   "city": "Kutno",
   "lat": 52.2333,
   "lng": 19.3667,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 47557
 },
 {
   "city": "Stade",
   "lat": 53.6008,
   "lng": 9.4764,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 47533
 },
 {
   "city": "Aznā",
   "lat": 33.4539,
   "lng": 49.455,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 47489
 },
 {
   "city": "Soest",
   "lat": 51.5711,
   "lng": 8.1092,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 47460
 },
 {
   "city": "San Pedro",
   "lat": -33.6794,
   "lng": -59.6669,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 47452
 },
 {
   "city": "Rieti",
   "lat": 42.4044,
   "lng": 12.8567,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 47436
 },
 {
   "city": "Zutphen",
   "lat": 52.14,
   "lng": 6.195,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 47423
 },
 {
   "city": "La Vega",
   "lat": 2.0008,
   "lng": -76.7778,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 47417
 },
 {
   "city": "Dachau",
   "lat": 48.2603,
   "lng": 11.4342,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 47400
 },
 {
   "city": "Chaparral",
   "lat": 3.7236,
   "lng": -75.4847,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 47397
 },
 {
   "city": "Lousada",
   "lat": 41.2833,
   "lng": -8.2833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 47387
 },
 {
   "city": "Villa Constitución",
   "lat": -33.2333,
   "lng": -60.3333,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 47374
 },
 {
   "city": "Sanski Most",
   "lat": 44.7667,
   "lng": 16.6667,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 47359
 },
 {
   "city": "Jobabo",
   "lat": 20.9075,
   "lng": -77.2819,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 47350
 },
 {
   "city": "Kingisepp",
   "lat": 59.3667,
   "lng": 28.6,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 47313
 },
 {
   "city": "San Andrés de Sotavento",
   "lat": 9.1453,
   "lng": -75.5086,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 47282
 },
 {
   "city": "San José Pinula",
   "lat": 14.5446,
   "lng": -90.4083,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 47278
 },
 {
   "city": "Ayapel",
   "lat": 8.3125,
   "lng": -75.145,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 47247
 },
 {
   "city": "Marhanets",
   "lat": 47.648,
   "lng": 34.6167,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 47141
 },
 {
   "city": "Tres Arroyos",
   "lat": -38.3667,
   "lng": -60.2667,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 47136
 },
 {
   "city": "Yabrūd",
   "lat": 33.9672,
   "lng": 36.6572,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 47136
 },
 {
   "city": "Urrao",
   "lat": 6.3156,
   "lng": -76.1342,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 47128
 },
 {
   "city": "Poso",
   "lat": -1.3786,
   "lng": 120.7624,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 47110
 },
 {
   "city": "Qingyuan",
   "lat": 24.5004,
   "lng": 108.6667,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 47062
 },
 {
   "city": "Hà Tiên",
   "lat": 10.3831,
   "lng": 104.4875,
   "country": "Vietnam",
   "iso2": "VN",
   "iso3": "VNM",
   "capital": "minor",
   "population": 47039
 },
 {
   "city": "Tizimín",
   "lat": 21.1425,
   "lng": -88.1647,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 46971
 },
 {
   "city": "Belfort",
   "lat": 47.64,
   "lng": 6.85,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 46954
 },
 {
   "city": "Agrínio",
   "lat": 38.6167,
   "lng": 21.4,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 46899
 },
 {
   "city": "Valencia",
   "lat": 8.2592,
   "lng": -76.1469,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 46897
 },
 {
   "city": "Kabasalan",
   "lat": 7.7968,
   "lng": 122.7627,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 46884
 },
 {
   "city": "Nysa",
   "lat": 50.4714,
   "lng": 17.3339,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 46841
 },
 {
   "city": "Roldanillo",
   "lat": 4.4136,
   "lng": -76.1547,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 46788
 },
 {
   "city": "Lohja",
   "lat": 60.25,
   "lng": 24.0667,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 46785
 },
 {
   "city": "Ciudad Serdán",
   "lat": 18.9833,
   "lng": -97.45,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 46778
 },
 {
   "city": "Santa Ana Chiautempan",
   "lat": 19.3167,
   "lng": -98.1833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 46776
 },
 {
   "city": "Al Quşayr",
   "lat": 34.5089,
   "lng": 36.5797,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 46772
 },
 {
   "city": "Lukavac",
   "lat": 44.5333,
   "lng": 18.5333,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 46731
 },
 {
   "city": "Sarıyer",
   "lat": 41.1911,
   "lng": 29.0094,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 46729
 },
 {
   "city": "Kołobrzeg",
   "lat": 54.1667,
   "lng": 15.5667,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 46716
 },
 {
   "city": "Évreux",
   "lat": 49.02,
   "lng": 1.15,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 46707
 },
 {
   "city": "Tursunzoda",
   "lat": 38.5108,
   "lng": 68.2303,
   "country": "Tajikistan",
   "iso2": "TJ",
   "iso3": "TJK",
   "capital": "minor",
   "population": 46700
 },
 {
   "city": "Landau",
   "lat": 49.1994,
   "lng": 8.1231,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 46677
 },
 {
   "city": "Brive-la-Gaillarde",
   "lat": 45.1583,
   "lng": 1.5321,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 46630
 },
 {
   "city": "Schagen",
   "lat": 52.78,
   "lng": 4.8,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 46553
 },
 {
   "city": "Jocotepec",
   "lat": 20.2863,
   "lng": -103.4304,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 46521
 },
 {
   "city": "Carcassonne",
   "lat": 43.21,
   "lng": 2.35,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 46513
 },
 {
   "city": "Saint-Malo",
   "lat": 48.6481,
   "lng": -2.0075,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 46478
 },
 {
   "city": "Neunkirchen",
   "lat": 49.3448,
   "lng": 7.1799,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 46469
 },
 {
   "city": "Hyvinkää",
   "lat": 60.6306,
   "lng": 24.8597,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 46463
 },
 {
   "city": "Kita",
   "lat": 13.0504,
   "lng": -9.4833,
   "country": "Mali",
   "iso2": "ML",
   "iso3": "MLI",
   "capital": "minor",
   "population": 46435
 },
 {
   "city": "Charleville-Mézières",
   "lat": 49.7719,
   "lng": 4.7161,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 46391
 },
 {
   "city": "Ridderkerk",
   "lat": 51.8667,
   "lng": 4.6,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 46241
 },
 {
   "city": "Soest",
   "lat": 52.1833,
   "lng": 5.2833,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 46194
 },
 {
   "city": "Chichigalpa",
   "lat": 12.5667,
   "lng": -87.0333,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 46185
 },
 {
   "city": "Vercelli",
   "lat": 45.3256,
   "lng": 8.4231,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 46181
 },
 {
   "city": "Akhisar",
   "lat": 38.9167,
   "lng": 27.8333,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 46167
 },
 {
   "city": "Puerto Tejada",
   "lat": 3.23,
   "lng": -76.4175,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 46166
 },
 {
   "city": "Frosinone",
   "lat": 41.6333,
   "lng": 13.35,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 46063
 },
 {
   "city": "Prievidza",
   "lat": 48.7714,
   "lng": 18.6242,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 46059
 },
 {
   "city": "Wittenberg",
   "lat": 51.8671,
   "lng": 12.6484,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 46008
 },
 {
   "city": "Bājil",
   "lat": 15.0583,
   "lng": 43.285,
   "country": "Yemen",
   "iso2": "YE",
   "iso3": "YEM",
   "capital": "minor",
   "population": 46005
 },
 {
   "city": "Santiago Atitlán",
   "lat": 14.6386,
   "lng": -91.2299,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 45982
 },
 {
   "city": "Ḩarastā",
   "lat": 33.5586,
   "lng": 36.365,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 45974
 },
 {
   "city": "Ourém",
   "lat": 39.65,
   "lng": -8.5833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 45932
 },
 {
   "city": "Hof",
   "lat": 50.3167,
   "lng": 11.9167,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 45930
 },
 {
   "city": "Fastiv",
   "lat": 50.0747,
   "lng": 29.9181,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 45907
 },
 {
   "city": "Koupéla",
   "lat": 12.1794,
   "lng": -0.3517,
   "country": "Burkina Faso",
   "iso2": "BF",
   "iso3": "BFA",
   "capital": "minor",
   "population": 45900
 },
 {
   "city": "Blois",
   "lat": 47.5939,
   "lng": 1.3281,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 45871
 },
 {
   "city": "Tallbīsah",
   "lat": 34.8406,
   "lng": 36.7308,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 45853
 },
 {
   "city": "Lubny",
   "lat": 50.0186,
   "lng": 32.9869,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 45786
 },
 {
   "city": "Gotha",
   "lat": 50.9489,
   "lng": 10.7183,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 45733
 },
 {
   "city": "Santa María Huatulco",
   "lat": 15.85,
   "lng": -96.3333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 45680
 },
 {
   "city": "Dendermonde",
   "lat": 51.0167,
   "lng": 4.1,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 45673
 },
 {
   "city": "Chaïdári",
   "lat": 38.0167,
   "lng": 23.65,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 45642
 },
 {
   "city": "Kerkrade",
   "lat": 50.8667,
   "lng": 6.0667,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 45642
 },
 {
   "city": "Remedios",
   "lat": 22.4922,
   "lng": -79.5458,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 45621
 },
 {
   "city": "Tangdukou",
   "lat": 26.9949,
   "lng": 111.2708,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 45617
 },
 {
   "city": "Cuautepec de Hinojosa",
   "lat": 20.15,
   "lng": -98.4333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 45527
 },
 {
   "city": "Xisa",
   "lat": 23.4372,
   "lng": 104.6714,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 45518
 },
 {
   "city": "Oranienburg",
   "lat": 52.7544,
   "lng": 13.2369,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 45492
 },
 {
   "city": "Gaya",
   "lat": 11.8878,
   "lng": 3.4467,
   "country": "Niger",
   "iso2": "NE",
   "iso3": "NER",
   "capital": "minor",
   "population": 45465
 },
 {
   "city": "Bāfq",
   "lat": 31.6053,
   "lng": 55.4028,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 45453
 },
 {
   "city": "Olhão",
   "lat": 37.0278,
   "lng": -7.8389,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 45396
 },
 {
   "city": "San Pelayo",
   "lat": 8.9578,
   "lng": -75.8375,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 45396
 },
 {
   "city": "Veldhoven",
   "lat": 51.42,
   "lng": 5.405,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 45337
 },
 {
   "city": "Ciudad de Huajuapam de León",
   "lat": 17.8097,
   "lng": -97.7764,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 45321
 },
 {
   "city": "Svitlovodsk",
   "lat": 49.0833,
   "lng": 33.25,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 45312
 },
 {
   "city": "Vallenar",
   "lat": -28.5751,
   "lng": -70.7616,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 45298
 },
 {
   "city": "Lodi",
   "lat": 45.3167,
   "lng": 9.5,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 45252
 },
 {
   "city": "Radā‘",
   "lat": 14.4295,
   "lng": 44.8341,
   "country": "Yemen",
   "iso2": "YE",
   "iso3": "YEM",
   "capital": "minor",
   "population": 45233
 },
 {
   "city": "Montemorelos",
   "lat": 25.1872,
   "lng": -99.8267,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 45108
 },
 {
   "city": "Aksay",
   "lat": 47.2667,
   "lng": 39.8667,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 45078
 },
 {
   "city": "Chiapa de Corzo",
   "lat": 16.7083,
   "lng": -93.0169,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 45077
 },
 {
   "city": "Pinamar",
   "lat": -37.1,
   "lng": -56.85,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 45000
 },
 {
   "city": "Rabinal",
   "lat": 15.0833,
   "lng": -90.4917,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 45000
 },
 {
   "city": "San Pedro Ayampuc",
   "lat": 14.7785,
   "lng": -90.4525,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 44996
 },
 {
   "city": "Tank",
   "lat": 32.2167,
   "lng": 70.3833,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 44996
 },
 {
   "city": "Tres Valles",
   "lat": 18.2367,
   "lng": -96.1369,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 44978
 },
 {
   "city": "Shazhou",
   "lat": 40.1376,
   "lng": 94.6638,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 44870
 },
 {
   "city": "Meoqui",
   "lat": 28.2722,
   "lng": -105.4819,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 44853
 },
 {
   "city": "Dráma",
   "lat": 41.1514,
   "lng": 24.1392,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 44823
 },
 {
   "city": "Chalon-sur-Saône",
   "lat": 46.7806,
   "lng": 4.8528,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 44810
 },
 {
   "city": "Cajicá",
   "lat": 4.9167,
   "lng": -74.025,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 44721
 },
 {
   "city": "Arboletes",
   "lat": 8.8511,
   "lng": -76.4272,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 44560
 },
 {
   "city": "Trollhättan",
   "lat": 58.2671,
   "lng": 12.3,
   "country": "Sweden",
   "iso2": "SE",
   "iso3": "SWE",
   "capital": "minor",
   "population": 44543
 },
 {
   "city": "Wiener Neustadt",
   "lat": 47.8167,
   "lng": 16.25,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 44461
 },
 {
   "city": "Zwijndrecht",
   "lat": 51.824,
   "lng": 4.6126,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 44454
 },
 {
   "city": "Banaybanay",
   "lat": 6.9699,
   "lng": 126.0126,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 44451
 },
 {
   "city": "Vlissingen",
   "lat": 51.45,
   "lng": 3.5833,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 44417
 },
 {
   "city": "San Juan y Martínez",
   "lat": 22.2667,
   "lng": -83.8333,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 44344
 },
 {
   "city": "Biella",
   "lat": 45.5664,
   "lng": 8.0533,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 44324
 },
 {
   "city": "Jisr ash Shughūr",
   "lat": 35.8,
   "lng": 36.3167,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 44322
 },
 {
   "city": "Simojovel de Allende",
   "lat": 17.15,
   "lng": -92.7167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 44295
 },
 {
   "city": "Roskilde",
   "lat": 55.65,
   "lng": 12.0833,
   "country": "Denmark",
   "iso2": "DK",
   "iso3": "DNK",
   "capital": "minor",
   "population": 44285
 },
 {
   "city": "Tuodian",
   "lat": 24.6907,
   "lng": 101.6382,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 44265
 },
 {
   "city": "Châlons-en-Champagne",
   "lat": 48.9575,
   "lng": 4.365,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 44246
 },
 {
   "city": "Mantes-la-Jolie",
   "lat": 48.9908,
   "lng": 1.7172,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 44227
 },
 {
   "city": "Saint-Brieuc",
   "lat": 48.5136,
   "lng": -2.7653,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 44170
 },
 {
   "city": "Turnhout",
   "lat": 51.3167,
   "lng": 4.9333,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 44136
 },
 {
   "city": "Vilvoorde",
   "lat": 50.9281,
   "lng": 4.4245,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 44015
 },
 {
   "city": "Dunakeszi",
   "lat": 47.6297,
   "lng": 19.1381,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 43990
 },
 {
   "city": "Dębica",
   "lat": 50.0515,
   "lng": 21.4114,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 43924
 },
 {
   "city": "Nabire",
   "lat": -3.3515,
   "lng": 135.5134,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 43898
 },
 {
   "city": "Comendador",
   "lat": 18.876,
   "lng": -71.707,
   "country": "Dominican Republic",
   "iso2": "DO",
   "iso3": "DOM",
   "capital": "minor",
   "population": 43894
 },
 {
   "city": "Kaufbeuren",
   "lat": 47.88,
   "lng": 10.6225,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 43893
 },
 {
   "city": "Zongolica",
   "lat": 18.6642,
   "lng": -97.0011,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 43871
 },
 {
   "city": "Hinatuan",
   "lat": 8.3667,
   "lng": 126.3333,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 43841
 },
 {
   "city": "Memmingen",
   "lat": 47.9878,
   "lng": 10.1811,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 43837
 },
 {
   "city": "Ciudad Constitución",
   "lat": 25.0322,
   "lng": -111.6703,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 43805
 },
 {
   "city": "Etten-Leur",
   "lat": 51.5706,
   "lng": 4.6356,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 43774
 },
 {
   "city": "Thun",
   "lat": 46.759,
   "lng": 7.63,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 43743
 },
 {
   "city": "Badian",
   "lat": 9.8694,
   "lng": 123.3959,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 43735
 },
 {
   "city": "Takāb",
   "lat": 36.4008,
   "lng": 47.1131,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 43702
 },
 {
   "city": "San Isidro",
   "lat": -34.4667,
   "lng": -58.5167,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 43595
 },
 {
   "city": "Roseller Lim",
   "lat": 7.6568,
   "lng": 122.4701,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 43575
 },
 {
   "city": "Villeta",
   "lat": 5.0128,
   "lng": -74.4731,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 43574
 },
 {
   "city": "Ponte de Lima",
   "lat": 41.7667,
   "lng": -8.5833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 43498
 },
 {
   "city": "Zevenaar",
   "lat": 51.9167,
   "lng": 6.0833,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 43488
 },
 {
   "city": "Bahía Honda",
   "lat": 22.9064,
   "lng": -83.1639,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 43483
 },
 {
   "city": "Sambava",
   "lat": -14.2662,
   "lng": 50.1666,
   "country": "Madagascar",
   "iso2": "MG",
   "iso3": "MDG",
   "capital": "minor",
   "population": 43465
 },
 {
   "city": "Châteauroux",
   "lat": 46.8103,
   "lng": 1.6911,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 43442
 },
 {
   "city": "Istres",
   "lat": 43.5151,
   "lng": 4.9895,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 43411
 },
 {
   "city": "Loreto",
   "lat": 22.2667,
   "lng": -101.9833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 43411
 },
 {
   "city": "Valenciennes",
   "lat": 50.358,
   "lng": 3.5233,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 43405
 },
 {
   "city": "Actopan",
   "lat": 19.5036,
   "lng": -96.6192,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 43388
 },
 {
   "city": "Oxchuc",
   "lat": 16.85,
   "lng": -92.4167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 43350
 },
 {
   "city": "Xihuachi",
   "lat": 35.8164,
   "lng": 108.0125,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 43338
 },
 {
   "city": "Venray",
   "lat": 51.5258,
   "lng": 5.9747,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 43326
 },
 {
   "city": "Hueyapan de Ocampo",
   "lat": 18.15,
   "lng": -95.15,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 43309
 },
 {
   "city": "Esperanza",
   "lat": -31.4489,
   "lng": -60.9317,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 43300
 },
 {
   "city": "Pinneberg",
   "lat": 53.6591,
   "lng": 9.8009,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 43280
 },
 {
   "city": "Villa de Zaachila",
   "lat": 16.9508,
   "lng": -96.7492,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 43279
 },
 {
   "city": "Andes",
   "lat": 5.6556,
   "lng": -75.8803,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 43269
 },
 {
   "city": "Alenquer",
   "lat": 39.05,
   "lng": -9.0167,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 43267
 },
 {
   "city": "Aguazul",
   "lat": 5.1689,
   "lng": -72.5467,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 43183
 },
 {
   "city": "Véroia",
   "lat": 40.5203,
   "lng": 22.2019,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 43158
 },
 {
   "city": "Bāniyās",
   "lat": 35.1822,
   "lng": 35.9403,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 43151
 },
 {
   "city": "Cumaribo",
   "lat": 4.4461,
   "lng": -69.7956,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 43138
 },
 {
   "city": "Ambatondrazaka",
   "lat": -17.8329,
   "lng": 48.4167,
   "country": "Madagascar",
   "iso2": "MG",
   "iso3": "MDG",
   "capital": "minor",
   "population": 43134
 },
 {
   "city": "Khutubi",
   "lat": 44.1874,
   "lng": 86.8946,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 43127
 },
 {
   "city": "Rantepao",
   "lat": -2.969,
   "lng": 119.9,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 43123
 },
 {
   "city": "Macenta",
   "lat": 8.5504,
   "lng": -9.48,
   "country": "Guinea",
   "iso2": "GN",
   "iso3": "GIN",
   "capital": "minor",
   "population": 43102
 },
 {
   "city": "Nansan",
   "lat": 23.7784,
   "lng": 98.8253,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 43097
 },
 {
   "city": "Jesús María",
   "lat": 21.9667,
   "lng": -102.35,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 43012
 },
 {
   "city": "Gualeguay",
   "lat": -33.15,
   "lng": -59.3167,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 43009
 },
 {
   "city": "Bihać",
   "lat": 44.8167,
   "lng": 15.8667,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 43007
 },
 {
   "city": "Poptún",
   "lat": 16.3222,
   "lng": -89.4222,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 42996
 },
 {
   "city": "Ciechanów",
   "lat": 52.8817,
   "lng": 20.6106,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 42965
 },
 {
   "city": "Jatibonico",
   "lat": 21.9464,
   "lng": -79.1675,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 42959
 },
 {
   "city": "Nijkerk",
   "lat": 52.2167,
   "lng": 5.4833,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 42943
 },
 {
   "city": "San Cristóbal Totonicapán",
   "lat": 14.9197,
   "lng": -91.44,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 42937
 },
 {
   "city": "Noordwijk",
   "lat": 52.2333,
   "lng": 4.4333,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 42859
 },
 {
   "city": "Świdnik",
   "lat": 51.2333,
   "lng": 22.7,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 42797
 },
 {
   "city": "Otwock",
   "lat": 52.1167,
   "lng": 21.2667,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 42765
 },
 {
   "city": "Vawkavysk",
   "lat": 53.1667,
   "lng": 24.4667,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 42746
 },
 {
   "city": "Lørenskog",
   "lat": 59.8989,
   "lng": 10.9642,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 42740
 },
 {
   "city": "Nurmijärvi",
   "lat": 60.4667,
   "lng": 24.8083,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 42709
 },
 {
   "city": "Miranda",
   "lat": 3.2503,
   "lng": -76.2286,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 42639
 },
 {
   "city": "Imperia",
   "lat": 43.8865,
   "lng": 8.0297,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 42602
 },
 {
   "city": "Wismar",
   "lat": 53.8925,
   "lng": 11.465,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 42550
 },
 {
   "city": "Borken",
   "lat": 51.8439,
   "lng": 6.8583,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 42530
 },
 {
   "city": "El Charco",
   "lat": 2.4775,
   "lng": -78.1111,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 42525
 },
 {
   "city": "Loufan",
   "lat": 38.0694,
   "lng": 111.7911,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 42520
 },
 {
   "city": "Gifhorn",
   "lat": 52.4886,
   "lng": 10.5464,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 42519
 },
 {
   "city": "Mariel",
   "lat": 22.9936,
   "lng": -82.7539,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 42500
 },
 {
   "city": "Zvolen",
   "lat": 48.5831,
   "lng": 19.1331,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 42476
 },
 {
   "city": "Tarbes",
   "lat": 43.23,
   "lng": 0.07,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 42426
 },
 {
   "city": "Singhanakhon",
   "lat": 7.2389,
   "lng": 100.5506,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 42423
 },
 {
   "city": "Bang Kruai",
   "lat": 13.8042,
   "lng": 100.4755,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 42390
 },
 {
   "city": "Eisenach",
   "lat": 50.9747,
   "lng": 10.3244,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 42370
 },
 {
   "city": "Kotabumi",
   "lat": -4.8333,
   "lng": 104.9,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 42366
 },
 {
   "city": "Cuihua",
   "lat": 27.7527,
   "lng": 103.8906,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 42262
 },
 {
   "city": "President Quirino",
   "lat": 6.7,
   "lng": 124.7333,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 42244
 },
 {
   "city": "Claveria",
   "lat": 12.9035,
   "lng": 123.2457,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 42142
 },
 {
   "city": "Sieradz",
   "lat": 51.6,
   "lng": 18.75,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 42120
 },
 {
   "city": "Cáceres",
   "lat": 7.5794,
   "lng": -75.3503,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 42112
 },
 {
   "city": "Coyuca de Catalán",
   "lat": 18.3256,
   "lng": -100.6992,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 42069
 },
 {
   "city": "Sarāb",
   "lat": 37.9408,
   "lng": 47.5367,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 42057
 },
 {
   "city": "Mikołów",
   "lat": 50.1961,
   "lng": 18.8619,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 42053
 },
 {
   "city": "Korenovsk",
   "lat": 45.4667,
   "lng": 39.45,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 42019
 },
 {
   "city": "Tequila",
   "lat": 20.8794,
   "lng": -103.8356,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 42009
 },
 {
   "city": "Santa Rosa del Sur",
   "lat": 7.9633,
   "lng": -74.0533,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 42003
 },
 {
   "city": "Lingquan",
   "lat": 36.9985,
   "lng": 110.8417,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 41996
 },
 {
   "city": "Aurich",
   "lat": 53.4714,
   "lng": 7.4836,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 41991
 },
 {
   "city": "Tiel",
   "lat": 51.8833,
   "lng": 5.4333,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 41978
 },
 {
   "city": "Amberg",
   "lat": 49.4444,
   "lng": 11.8483,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 41970
 },
 {
   "city": "Heinsberg",
   "lat": 51.0631,
   "lng": 6.0964,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 41946
 },
 {
   "city": "Tactic",
   "lat": 15.3167,
   "lng": -90.3511,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 41930
 },
 {
   "city": "Uspantán",
   "lat": 15.3458,
   "lng": -90.8694,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 41892
 },
 {
   "city": "Ocosingo",
   "lat": 16.9072,
   "lng": -92.0961,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 41878
 },
 {
   "city": "Montenegro",
   "lat": 4.5653,
   "lng": -75.7511,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 41857
 },
 {
   "city": "Ansbach",
   "lat": 49.3,
   "lng": 10.5833,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 41847
 },
 {
   "city": "Yinggen",
   "lat": 19.0372,
   "lng": 109.8283,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 41835
 },
 {
   "city": "Homburg",
   "lat": 49.3167,
   "lng": 7.3333,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 41811
 },
 {
   "city": "Coyotepec",
   "lat": 19.7756,
   "lng": -99.2056,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 41810
 },
 {
   "city": "Castres",
   "lat": 43.6,
   "lng": 2.25,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 41795
 },
 {
   "city": "Nordhausen",
   "lat": 51.505,
   "lng": 10.7911,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 41791
 },
 {
   "city": "Tādif",
   "lat": 36.348,
   "lng": 37.53,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 41786
 },
 {
   "city": "Uden",
   "lat": 51.6667,
   "lng": 5.6167,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 41782
 },
 {
   "city": "Macerata",
   "lat": 43.3003,
   "lng": 13.4533,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 41776
 },
 {
   "city": "Angoulême",
   "lat": 45.65,
   "lng": 0.16,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 41711
 },
 {
   "city": "Pueblo Nuevo",
   "lat": 8.505,
   "lng": -75.5075,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 41684
 },
 {
   "city": "Bayt al Faqīh",
   "lat": 14.5167,
   "lng": 43.3167,
   "country": "Yemen",
   "iso2": "YE",
   "iso3": "YEM",
   "capital": "minor",
   "population": 41652
 },
 {
   "city": "Jáltipan de Morelos",
   "lat": 17.9703,
   "lng": -94.7144,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 41644
 },
 {
   "city": "Su-ngai Kolok",
   "lat": 6.0297,
   "lng": 101.9668,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 41590
 },
 {
   "city": "Santa Cruz de Los Taques",
   "lat": 11.8231,
   "lng": -70.2535,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 41579
 },
 {
   "city": "Arras",
   "lat": 50.292,
   "lng": 2.78,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 41555
 },
 {
   "city": "Amuntai",
   "lat": -2.4177,
   "lng": 115.2494,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 41554
 },
 {
   "city": "Yarumal",
   "lat": 6.9633,
   "lng": -75.4172,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 41542
 },
 {
   "city": "Świnoujście",
   "lat": 53.9167,
   "lng": 14.25,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 41479
 },
 {
   "city": "Poti",
   "lat": 42.15,
   "lng": 41.6667,
   "country": "Georgia",
   "iso2": "GE",
   "iso3": "GEO",
   "capital": "minor",
   "population": 41465
 },
 {
   "city": "Siegburg",
   "lat": 50.8014,
   "lng": 7.2044,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 41463
 },
 {
   "city": "Shepetivka",
   "lat": 50.1833,
   "lng": 27.0667,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 41415
 },
 {
   "city": "San",
   "lat": 13.3004,
   "lng": -4.9,
   "country": "Mali",
   "iso2": "ML",
   "iso3": "MLI",
   "capital": "minor",
   "population": 41386
 },
 {
   "city": "Tuchín",
   "lat": 9.1858,
   "lng": -75.5553,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 41345
 },
 {
   "city": "Teoloyucan",
   "lat": 19.7442,
   "lng": -99.1811,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 41333
 },
 {
   "city": "Nazilli",
   "lat": 37.9125,
   "lng": 28.3206,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 41330
 },
 {
   "city": "El Tocuyo",
   "lat": 9.7822,
   "lng": -69.7931,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 41327
 },
 {
   "city": "Arauquita",
   "lat": 7.0261,
   "lng": -71.4272,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 41309
 },
 {
   "city": "Niquero",
   "lat": 20.0472,
   "lng": -77.5781,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 41252
 },
 {
   "city": "Coburg",
   "lat": 50.2585,
   "lng": 10.9579,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 41249
 },
 {
   "city": "Bourg-en-Bresse",
   "lat": 46.2056,
   "lng": 5.2289,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 41248
 },
 {
   "city": "Chaves",
   "lat": 41.7399,
   "lng": -7.4707,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 41243
 },
 {
   "city": "Beverwijk",
   "lat": 52.4864,
   "lng": 4.6572,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 41176
 },
 {
   "city": "Guaduas",
   "lat": 5.0694,
   "lng": -74.5981,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 41142
 },
 {
   "city": "Temryuk",
   "lat": 45.2667,
   "lng": 37.3833,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 41133
 },
 {
   "city": "Ceyhan",
   "lat": 37.0283,
   "lng": 35.8139,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 41124
 },
 {
   "city": "Ciudad Darío",
   "lat": 12.7333,
   "lng": -86.1167,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 41014
 },
 {
   "city": "Chambas",
   "lat": 22.1967,
   "lng": -78.9133,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 41000
 },
 {
   "city": "Segovia",
   "lat": 7.0781,
   "lng": -74.7017,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 41000
 },
 {
   "city": "Eberswalde",
   "lat": 52.8331,
   "lng": 13.8331,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 40965
 },
 {
   "city": "Wijchen",
   "lat": 51.8067,
   "lng": 5.7211,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 40951
 },
 {
   "city": "Dronten",
   "lat": 52.5242,
   "lng": 5.7125,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 40815
 },
 {
   "city": "Saint-Germain-en-Laye",
   "lat": 48.8989,
   "lng": 2.0938,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 40806
 },
 {
   "city": "Alès",
   "lat": 44.1281,
   "lng": 4.0817,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 40802
 },
 {
   "city": "Schwabach",
   "lat": 49.3292,
   "lng": 11.0208,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 40792
 },
 {
   "city": "Gonābād",
   "lat": 34.3528,
   "lng": 58.6836,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 40773
 },
 {
   "city": "Pie de Pató",
   "lat": 5.5153,
   "lng": -76.9747,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 40733
 },
 {
   "city": "Shanhe",
   "lat": 35.4844,
   "lng": 108.364,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 40728
 },
 {
   "city": "Tomar",
   "lat": 39.6,
   "lng": -8.4167,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 40677
 },
 {
   "city": "Boulogne-sur-Mer",
   "lat": 50.7264,
   "lng": 1.6147,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 40664
 },
 {
   "city": "Vahdat",
   "lat": 38.5531,
   "lng": 69.0197,
   "country": "Tajikistan",
   "iso2": "TJ",
   "iso3": "TJK",
   "capital": "minor",
   "population": 40600
 },
 {
   "city": "Gap",
   "lat": 44.5594,
   "lng": 6.0786,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 40559
 },
 {
   "city": "Compiègne",
   "lat": 49.4149,
   "lng": 2.8231,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 40542
 },
 {
   "city": "El Tumbador",
   "lat": 14.8667,
   "lng": -91.9333,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 40520
 },
 {
   "city": "Szigetszentmiklós",
   "lat": 47.3453,
   "lng": 19.0483,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 40519
 },
 {
   "city": "Cumbal",
   "lat": 0.9078,
   "lng": -77.7908,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 40492
 },
 {
   "city": "Sovetsk",
   "lat": 55.0833,
   "lng": 21.8833,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 40486
 },
 {
   "city": "Thionville",
   "lat": 49.3589,
   "lng": 6.1692,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 40477
 },
 {
   "city": "Schwäbisch Hall",
   "lat": 49.1122,
   "lng": 9.7375,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 40440
 },
 {
   "city": "Pirmasens",
   "lat": 49.2,
   "lng": 7.6,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 40403
 },
 {
   "city": "Aracataca",
   "lat": 10.5911,
   "lng": -74.185,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 40400
 },
 {
   "city": "Asunción Mita",
   "lat": 14.3333,
   "lng": -89.7167,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 40391
 },
 {
   "city": "La Unión",
   "lat": 4.5331,
   "lng": -76.1006,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 40339
 },
 {
   "city": "Romny",
   "lat": 50.7428,
   "lng": 33.4879,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 40316
 },
 {
   "city": "Belaya Kalitva",
   "lat": 48.1667,
   "lng": 40.7833,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 40275
 },
 {
   "city": "Halberstadt",
   "lat": 51.8958,
   "lng": 11.0467,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 40256
 },
 {
   "city": "Camargo",
   "lat": 27.667,
   "lng": -105.167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 40221
 },
 {
   "city": "Myrhorod",
   "lat": 49.964,
   "lng": 33.6124,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 40160
 },
 {
   "city": "Túquerres",
   "lat": 1.0872,
   "lng": -77.6189,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 40159
 },
 {
   "city": "Podilsk",
   "lat": 47.7419,
   "lng": 29.535,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 40155
 },
 {
   "city": "Taicheng",
   "lat": 38.7206,
   "lng": 113.2437,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 40145
 },
 {
   "city": "Gourcy",
   "lat": 13.2063,
   "lng": -2.3586,
   "country": "Burkina Faso",
   "iso2": "BF",
   "iso3": "BFA",
   "capital": "minor",
   "population": 40144
 },
 {
   "city": "Oroqen Zizhiqi",
   "lat": 50.5667,
   "lng": 123.7167,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 40128
 },
 {
   "city": "San Agustín Acasaguastlán",
   "lat": 14.95,
   "lng": -89.9667,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 40121
 },
 {
   "city": "Järvenpää",
   "lat": 60.4722,
   "lng": 25.0889,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 40106
 },
 {
   "city": "Raxruhá",
   "lat": 15.8666,
   "lng": -90.0424,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 40094
 },
 {
   "city": "Altagracia de Orituco",
   "lat": 9.8504,
   "lng": -66.38,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 40052
 },
 {
   "city": "Hellevoetsluis",
   "lat": 51.8333,
   "lng": 4.1333,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 40049
 },
 {
   "city": "Kwidzyn",
   "lat": 53.7358,
   "lng": 18.9308,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 40008
 },
 {
   "city": "Neumarkt",
   "lat": 49.2833,
   "lng": 11.4667,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 40002
 },
 {
   "city": "Alashankou",
   "lat": 45.1714,
   "lng": 82.5731,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 40000
 },
 {
   "city": "Isfara",
   "lat": 40.1167,
   "lng": 70.6333,
   "country": "Tajikistan",
   "iso2": "TJ",
   "iso3": "TJK",
   "capital": "minor",
   "population": 40000
 },
 {
   "city": "Melun",
   "lat": 48.5406,
   "lng": 2.66,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 39947
 },
 {
   "city": "Chojnice",
   "lat": 53.6955,
   "lng": 17.557,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 39937
 },
 {
   "city": "Yian",
   "lat": 47.8804,
   "lng": 125.3,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 39924
 },
 {
   "city": "Jayrūd",
   "lat": 33.8072,
   "lng": 36.7403,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 39903
 },
 {
   "city": "Sarāqib",
   "lat": 35.8644,
   "lng": 36.8058,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 39901
 },
 {
   "city": "Acevedo",
   "lat": 1.8047,
   "lng": -75.8897,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 39877
 },
 {
   "city": "Freiberg",
   "lat": 50.9119,
   "lng": 13.3428,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 39872
 },
 {
   "city": "Považská Bystrica",
   "lat": 49.1167,
   "lng": 18.45,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 39837
 },
 {
   "city": "Rauma",
   "lat": 61.1167,
   "lng": 21.5,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 39809
 },
 {
   "city": "Dolores",
   "lat": 16.5142,
   "lng": -89.4158,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 39783
 },
 {
   "city": "Hangu",
   "lat": 33.5281,
   "lng": 71.0572,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 39766
 },
 {
   "city": "Hofheim",
   "lat": 50.0876,
   "lng": 8.4447,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 39766
 },
 {
   "city": "Apsheronsk",
   "lat": 44.4608,
   "lng": 39.7406,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 39762
 },
 {
   "city": "Maarssen",
   "lat": 52.1408,
   "lng": 5.0394,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 39752
 },
 {
   "city": "Novozybkov",
   "lat": 52.5333,
   "lng": 31.9333,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 39725
 },
 {
   "city": "Nowa Sól",
   "lat": 51.8,
   "lng": 15.7167,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 39721
 },
 {
   "city": "Bosconia",
   "lat": 9.9761,
   "lng": -73.8903,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 39716
 },
 {
   "city": "Soria",
   "lat": 41.7667,
   "lng": -2.4667,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 39695
 },
 {
   "city": "Líbano",
   "lat": 4.9206,
   "lng": -75.0611,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 39665
 },
 {
   "city": "Douai",
   "lat": 50.3714,
   "lng": 3.08,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 39634
 },
 {
   "city": "Villa de San Diego de Ubaté",
   "lat": 5.3072,
   "lng": -73.8144,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 39568
 },
 {
   "city": "Salcedo",
   "lat": 19.42,
   "lng": -70.39,
   "country": "Dominican Republic",
   "iso2": "DO",
   "iso3": "DOM",
   "capital": "minor",
   "population": 39557
 },
 {
   "city": "Skövde",
   "lat": 58.3995,
   "lng": 13.8538,
   "country": "Sweden",
   "iso2": "SE",
   "iso3": "SWE",
   "capital": "minor",
   "population": 39543
 },
 {
   "city": "San Juan del Cesar",
   "lat": 10.7708,
   "lng": -73.0031,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 39472
 },
 {
   "city": "San José de Ocoa",
   "lat": 18.55,
   "lng": -70.5,
   "country": "Dominican Republic",
   "iso2": "DO",
   "iso3": "DOM",
   "capital": "minor",
   "population": 39451
 },
 {
   "city": "Stendal",
   "lat": 52.6,
   "lng": 11.85,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 39439
 },
 {
   "city": "Borlänge",
   "lat": 60.4833,
   "lng": 15.4167,
   "country": "Sweden",
   "iso2": "SE",
   "iso3": "SWE",
   "capital": "minor",
   "population": 39422
 },
 {
   "city": "Bolesławiec",
   "lat": 51.2667,
   "lng": 15.5667,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 39412
 },
 {
   "city": "Sanjiang",
   "lat": 24.7265,
   "lng": 112.2884,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 39398
 },
 {
   "city": "Abrantes",
   "lat": 39.4644,
   "lng": -8.1978,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 39325
 },
 {
   "city": "Puerto Berrío",
   "lat": 6.4906,
   "lng": -74.4047,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 39314
 },
 {
   "city": "Tarazá",
   "lat": 7.5839,
   "lng": -75.4003,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 39257
 },
 {
   "city": "Apan",
   "lat": 19.7,
   "lng": -98.4333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 39247
 },
 {
   "city": "Baghlān",
   "lat": 36.1328,
   "lng": 68.7,
   "country": "Afghanistan",
   "iso2": "AF",
   "iso3": "AFG",
   "capital": "minor",
   "population": 39228
 },
 {
   "city": "Playa Vicente",
   "lat": 17.8333,
   "lng": -95.8167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 39205
 },
 {
   "city": "El Viejo",
   "lat": 12.6667,
   "lng": -87.1667,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 39178
 },
 {
   "city": "Heemskerk",
   "lat": 52.5108,
   "lng": 4.6728,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 39164
 },
 {
   "city": "Michalovce",
   "lat": 48.7575,
   "lng": 21.9183,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 39151
 },
 {
   "city": "Jiquipilas",
   "lat": 16.6683,
   "lng": -93.6444,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 39109
 },
 {
   "city": "Draguignan",
   "lat": 43.5403,
   "lng": 6.4667,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 39106
 },
 {
   "city": "Oświęcim",
   "lat": 50.0333,
   "lng": 19.2333,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 39057
 },
 {
   "city": "Toumodi",
   "lat": 6.552,
   "lng": -5.019,
   "country": "Côte d'Ivoire",
   "iso2": "CI",
   "iso3": "CIV",
   "capital": "minor",
   "population": 39005
 },
 {
   "city": "Al Mālikīyah",
   "lat": 37.1031,
   "lng": 42.0822,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 39000
 },
 {
   "city": "Trofa",
   "lat": 41.3374,
   "lng": -8.5596,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 38999
 },
 {
   "city": "Ciudad Melchor Múzquiz",
   "lat": 27.8775,
   "lng": -101.5164,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 38992
 },
 {
   "city": "La Chaux-de-Fonds",
   "lat": 47.0996,
   "lng": 6.8296,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 38965
 },
 {
   "city": "Yakacık",
   "lat": 36.75,
   "lng": 36.2167,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 38959
 },
 {
   "city": "Galeana",
   "lat": 24.8333,
   "lng": -100.0667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 38930
 },
 {
   "city": "Juan Rodríguez Clara",
   "lat": 18,
   "lng": -95.4,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 38895
 },
 {
   "city": "Malbork",
   "lat": 54.0285,
   "lng": 19.0444,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 38895
 },
 {
   "city": "Empalme",
   "lat": 27.9617,
   "lng": -110.8125,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 38886
 },
 {
   "city": "Xiwanzi",
   "lat": 40.9717,
   "lng": 115.2737,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 38879
 },
 {
   "city": "Mettmann",
   "lat": 51.25,
   "lng": 6.9667,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 38829
 },
 {
   "city": "Balcarce",
   "lat": -37.8464,
   "lng": -58.2556,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 38823
 },
 {
   "city": "Wageningen",
   "lat": 51.9644,
   "lng": 5.6631,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 38774
 },
 {
   "city": "Los Palacios",
   "lat": 22.5822,
   "lng": -83.2489,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 38731
 },
 {
   "city": "Dzhankoi",
   "lat": 45.7086,
   "lng": 34.3933,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 38714
 },
 {
   "city": "Cajibío",
   "lat": 2.6233,
   "lng": -76.5731,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 38703
 },
 {
   "city": "Yako",
   "lat": 12.9667,
   "lng": -2.2667,
   "country": "Burkina Faso",
   "iso2": "BF",
   "iso3": "BFA",
   "capital": "minor",
   "population": 38689
 },
 {
   "city": "Marinha Grande",
   "lat": 39.75,
   "lng": -8.9333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 38681
 },
 {
   "city": "Zacatelco",
   "lat": 19.2167,
   "lng": -98.2333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 38654
 },
 {
   "city": "Kirkkonummi",
   "lat": 60.1167,
   "lng": 24.4167,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 38649
 },
 {
   "city": "Tuusula",
   "lat": 60.4028,
   "lng": 25.0292,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 38646
 },
 {
   "city": "Dabola",
   "lat": 10.75,
   "lng": -11.1167,
   "country": "Guinea",
   "iso2": "GN",
   "iso3": "GIN",
   "capital": "minor",
   "population": 38617
 },
 {
   "city": "Ílhavo",
   "lat": 40.6,
   "lng": -8.6667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 38598
 },
 {
   "city": "Kardítsa",
   "lat": 39.3647,
   "lng": 21.9219,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 38554
 },
 {
   "city": "Abinsk",
   "lat": 44.8667,
   "lng": 38.1667,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 38547
 },
 {
   "city": "Khalkhāl",
   "lat": 37.6189,
   "lng": 48.5258,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 38521
 },
 {
   "city": "Caibarién",
   "lat": 22.5158,
   "lng": -79.4722,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 38479
 },
 {
   "city": "La Unión",
   "lat": 14.9667,
   "lng": -89.2833,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 38473
 },
 {
   "city": "Lanyi",
   "lat": 38.7048,
   "lng": 111.5601,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 38431
 },
 {
   "city": "Chartres",
   "lat": 48.456,
   "lng": 1.484,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 38426
 },
 {
   "city": "Sibaté",
   "lat": 4.4908,
   "lng": -74.2594,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 38412
 },
 {
   "city": "Sassandra",
   "lat": 4.9504,
   "lng": -6.0833,
   "country": "Côte d'Ivoire",
   "iso2": "CI",
   "iso3": "CIV",
   "capital": "minor",
   "population": 38411
 },
 {
   "city": "Ereğli",
   "lat": 37.5142,
   "lng": 34.048,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 38362
 },
 {
   "city": "Steyr",
   "lat": 48.05,
   "lng": 14.4167,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 38331
 },
 {
   "city": "Krasnyy Sulin",
   "lat": 47.8833,
   "lng": 40.0667,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 38284
 },
 {
   "city": "Pirna",
   "lat": 50.9622,
   "lng": 13.9403,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 38277
 },
 {
   "city": "Siyang",
   "lat": 27.2116,
   "lng": 108.7463,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 38261
 },
 {
   "city": "Xico",
   "lat": 19.417,
   "lng": -97,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 38198
 },
 {
   "city": "Nové Zámky",
   "lat": 47.9831,
   "lng": 18.1728,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 38172
 },
 {
   "city": "Cananea",
   "lat": 30.9819,
   "lng": -110.3006,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 38113
 },
 {
   "city": "Veghel",
   "lat": 51.6169,
   "lng": 5.5481,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 38077
 },
 {
   "city": "Tlapa de Comonfort",
   "lat": 17.5461,
   "lng": -98.5764,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 37975
 },
 {
   "city": "Bautzen",
   "lat": 51.1814,
   "lng": 14.4239,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 37966
 },
 {
   "city": "Hajīn",
   "lat": 34.6894,
   "lng": 40.8308,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 37935
 },
 {
   "city": "Sampués",
   "lat": 9.1847,
   "lng": -75.3786,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 37925
 },
 {
   "city": "Andkhōy",
   "lat": 36.95,
   "lng": 65.1167,
   "country": "Afghanistan",
   "iso2": "AF",
   "iso3": "AFG",
   "capital": "minor",
   "population": 37887
 },
 {
   "city": "Santiago",
   "lat": 25.4333,
   "lng": -100.1333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 37886
 },
 {
   "city": "Tlalixcoyan",
   "lat": 18.8031,
   "lng": -96.0611,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 37857
 },
 {
   "city": "Dibulla",
   "lat": 11.2725,
   "lng": -73.3089,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 37854
 },
 {
   "city": "Güira de Melena",
   "lat": 22.8019,
   "lng": -82.5047,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 37838
 },
 {
   "city": "Yajalón",
   "lat": 17.1667,
   "lng": -92.3333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 37833
 },
 {
   "city": "Al Qaryatayn",
   "lat": 34.2294,
   "lng": 37.2406,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 37820
 },
 {
   "city": "Falāvarjān",
   "lat": 32.5553,
   "lng": 51.5097,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 37740
 },
 {
   "city": "Goes",
   "lat": 51.5,
   "lng": 3.8833,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 37739
 },
 {
   "city": "Fürstenfeldbruck",
   "lat": 48.1778,
   "lng": 11.2556,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 37677
 },
 {
   "city": "Venlo",
   "lat": 51.37,
   "lng": 6.1681,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 37663
 },
 {
   "city": "Aboisso",
   "lat": 5.4667,
   "lng": -3.2,
   "country": "Côte d'Ivoire",
   "iso2": "CI",
   "iso3": "CIV",
   "capital": "minor",
   "population": 37654
 },
 {
   "city": "Yanqi",
   "lat": 42.0608,
   "lng": 86.5686,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 37649
 },
 {
   "city": "Kalinkavichy",
   "lat": 52.1333,
   "lng": 29.3333,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 37633
 },
 {
   "city": "Landgraaf",
   "lat": 50.9083,
   "lng": 6.0297,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 37591
 },
 {
   "city": "Dubno",
   "lat": 50.3931,
   "lng": 25.735,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 37545
 },
 {
   "city": "Raalte",
   "lat": 52.4,
   "lng": 6.2833,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 37511
 },
 {
   "city": "El Bordo",
   "lat": 2.1142,
   "lng": -76.9831,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 37504
 },
 {
   "city": "Żary",
   "lat": 51.6333,
   "lng": 15.1333,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 37502
 },
 {
   "city": "Ma‘arratmişrīn",
   "lat": 36,
   "lng": 36.6667,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 37490
 },
 {
   "city": "Jarosław",
   "lat": 50.0162,
   "lng": 22.6778,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 37479
 },
 {
   "city": "Sopot",
   "lat": 54.4419,
   "lng": 18.5478,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 37457
 },
 {
   "city": "Santa Rosa de Osos",
   "lat": 6.6472,
   "lng": -75.4606,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 37435
 },
 {
   "city": "Nandaime",
   "lat": 11.75,
   "lng": -86.05,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 37413
 },
 {
   "city": "Progreso",
   "lat": 21.28,
   "lng": -89.67,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 37369
 },
 {
   "city": "Spišská Nová Ves",
   "lat": 48.95,
   "lng": 20.5667,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 37326
 },
 {
   "city": "Haugesund",
   "lat": 59.4102,
   "lng": 5.2755,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 37323
 },
 {
   "city": "Tibú",
   "lat": 8.64,
   "lng": -72.7381,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 37286
 },
 {
   "city": "Mariano Escobedo",
   "lat": 18.9167,
   "lng": -97.1333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 37285
 },
 {
   "city": "Fermo",
   "lat": 43.1604,
   "lng": 13.7181,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 37238
 },
 {
   "city": "Mölndal",
   "lat": 57.6542,
   "lng": 12.0139,
   "country": "Sweden",
   "iso2": "SE",
   "iso3": "SWE",
   "capital": "minor",
   "population": 37233
 },
 {
   "city": "Warendorf",
   "lat": 51.9539,
   "lng": 7.9933,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 37226
 },
 {
   "city": "Melgar",
   "lat": 4.2039,
   "lng": -74.6428,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 37224
 },
 {
   "city": "Salvatierra",
   "lat": 20.2156,
   "lng": -100.8961,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 37203
 },
 {
   "city": "Kizilyurt",
   "lat": 43.2,
   "lng": 46.8667,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 37171
 },
 {
   "city": "Ciudad Manuel Doblado",
   "lat": 20.7303,
   "lng": -101.9533,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 37145
 },
 {
   "city": "Silves",
   "lat": 37.1833,
   "lng": -8.4333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 37126
 },
 {
   "city": "Maşyāf",
   "lat": 35.0653,
   "lng": 36.3421,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 37109
 },
 {
   "city": "Suhl",
   "lat": 50.6106,
   "lng": 10.6931,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 36955
 },
 {
   "city": "Shengli",
   "lat": 37.9842,
   "lng": 106.1967,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 36937
 },
 {
   "city": "Chimboy Shahri",
   "lat": 42.9311,
   "lng": 59.7708,
   "country": "Uzbekistan",
   "iso2": "UZ",
   "iso3": "UZB",
   "capital": "minor",
   "population": 36917
 },
 {
   "city": "Dagua",
   "lat": 3.6575,
   "lng": -76.6917,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 36891
 },
 {
   "city": "San Miguel Chicaj",
   "lat": 15.1,
   "lng": -90.4,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 36845
 },
 {
   "city": "Caimito",
   "lat": 22.9575,
   "lng": -82.5964,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 36813
 },
 {
   "city": "Morondava",
   "lat": -20.2833,
   "lng": 44.2833,
   "country": "Madagascar",
   "iso2": "MG",
   "iso3": "MDG",
   "capital": "minor",
   "population": 36803
 },
 {
   "city": "Qalādizay",
   "lat": 36.1811,
   "lng": 45.1286,
   "country": "Iraq",
   "iso2": "IQ",
   "iso3": "IRQ",
   "capital": "minor",
   "population": 36792
 },
 {
   "city": "La Macarena",
   "lat": 2.1828,
   "lng": -73.7847,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 36781
 },
 {
   "city": "Sayula",
   "lat": 19.8836,
   "lng": -103.5972,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 36778
 },
 {
   "city": "Torres Novas",
   "lat": 39.4833,
   "lng": -8.5333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 36717
 },
 {
   "city": "Esquel",
   "lat": -42.9,
   "lng": -71.3167,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 36687
 },
 {
   "city": "Belalcázar",
   "lat": 2.6469,
   "lng": -75.9717,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 36628
 },
 {
   "city": "Cantanhede",
   "lat": 40.3462,
   "lng": -8.5941,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 36595
 },
 {
   "city": "Jaral del Progreso",
   "lat": 20.3667,
   "lng": -101.0667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 36584
 },
 {
   "city": "Nuoro",
   "lat": 40.3201,
   "lng": 9.3281,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 36579
 },
 {
   "city": "Chrzanów",
   "lat": 50.1333,
   "lng": 19.4,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 36575
 },
 {
   "city": "‘Afrīn",
   "lat": 36.5119,
   "lng": 36.8694,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 36562
 },
 {
   "city": "Porsgrunn",
   "lat": 59.1419,
   "lng": 9.6568,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 36526
 },
 {
   "city": "Haomen",
   "lat": 37.3757,
   "lng": 101.622,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 36515
 },
 {
   "city": "Neiba",
   "lat": 18.49,
   "lng": -71.42,
   "country": "Dominican Republic",
   "iso2": "DO",
   "iso3": "DOM",
   "capital": "minor",
   "population": 36511
 },
 {
   "city": "Nueve de Julio",
   "lat": -35.45,
   "lng": -60.8833,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 36494
 },
 {
   "city": "Zinacantán",
   "lat": 16.7601,
   "lng": -92.7236,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 36489
 },
 {
   "city": "Erding",
   "lat": 48.3001,
   "lng": 11.9082,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 36469
 },
 {
   "city": "Lecherías",
   "lat": 10.1889,
   "lng": -64.6951,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 36450
 },
 {
   "city": "Sonsón",
   "lat": 5.7094,
   "lng": -75.3106,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 36445
 },
 {
   "city": "Tocancipá",
   "lat": 4.9661,
   "lng": -73.9111,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 36439
 },
 {
   "city": "San Pablo",
   "lat": 7.4764,
   "lng": -73.9231,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 36341
 },
 {
   "city": "Villefranche-sur-Saône",
   "lat": 45.9833,
   "lng": 4.7167,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 36288
 },
 {
   "city": "Coatepec Harinas",
   "lat": 18.9,
   "lng": -99.7167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 36269
 },
 {
   "city": "Coesfeld",
   "lat": 51.9458,
   "lng": 7.1675,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 36217
 },
 {
   "city": "Smarhon’",
   "lat": 54.4836,
   "lng": 26.4,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 36202
 },
 {
   "city": "Mühlhausen",
   "lat": 51.2167,
   "lng": 10.45,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 36200
 },
 {
   "city": "San Bernardo del Viento",
   "lat": 9.355,
   "lng": -75.9544,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 36200
 },
 {
   "city": "José María Morelos",
   "lat": 19.75,
   "lng": -88.7,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 36179
 },
 {
   "city": "Zacatepec",
   "lat": 18.6833,
   "lng": -99.1833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 36159
 },
 {
   "city": "Ameca",
   "lat": 20.5486,
   "lng": -104.0431,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 36156
 },
 {
   "city": "Rāmsar",
   "lat": 36.9169,
   "lng": 50.6736,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 35997
 },
 {
   "city": "Kakhovka",
   "lat": 46.8,
   "lng": 33.4667,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 35900
 },
 {
   "city": "Daiyue",
   "lat": 39.5284,
   "lng": 112.8056,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 35894
 },
 {
   "city": "San Antonio",
   "lat": 13.9,
   "lng": 121.3,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 35891
 },
 {
   "city": "Brzeg",
   "lat": 50.8667,
   "lng": 17.4833,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 35890
 },
 {
   "city": "Chernyakhovsk",
   "lat": 54.6333,
   "lng": 21.8167,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 35888
 },
 {
   "city": "Santa Cruz Verapaz",
   "lat": 15.3736,
   "lng": -90.4306,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 35878
 },
 {
   "city": "Karak",
   "lat": 33.1167,
   "lng": 71.0833,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 35844
 },
 {
   "city": "Tomatlán",
   "lat": 19.9333,
   "lng": -105.2333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 35824
 },
 {
   "city": "Castricum",
   "lat": 52.5517,
   "lng": 4.6583,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 35772
 },
 {
   "city": "Mengdong",
   "lat": 23.1499,
   "lng": 99.2462,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 35741
 },
 {
   "city": "Pak Chong",
   "lat": 14.6796,
   "lng": 101.3976,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 35736
 },
 {
   "city": "Tuttlingen",
   "lat": 47.985,
   "lng": 8.8233,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 35730
 },
 {
   "city": "Kumo",
   "lat": 10.0431,
   "lng": 11.2183,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 35712
 },
 {
   "city": "Belluno",
   "lat": 46.1408,
   "lng": 12.2156,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 35710
 },
 {
   "city": "Teruel",
   "lat": 40.3456,
   "lng": -1.1065,
   "country": "Spain",
   "iso2": "ES",
   "iso3": "ESP",
   "capital": "minor",
   "population": 35691
 },
 {
   "city": "Turgutlu",
   "lat": 38.5,
   "lng": 27.7,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 35674
 },
 {
   "city": "Santiago de Tolú",
   "lat": 9.525,
   "lng": -75.5817,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 35670
 },
 {
   "city": "Guacarí",
   "lat": 3.7647,
   "lng": -76.3322,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 35662
 },
 {
   "city": "Kuala Kapuas",
   "lat": -3.0996,
   "lng": 114.35,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 35632
 },
 {
   "city": "Chortoq",
   "lat": 41.0689,
   "lng": 71.8153,
   "country": "Uzbekistan",
   "iso2": "UZ",
   "iso3": "UZB",
   "capital": "minor",
   "population": 35615
 },
 {
   "city": "Rongwo",
   "lat": 35.5077,
   "lng": 102.0121,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 35612
 },
 {
   "city": "Palaiseau",
   "lat": 48.7145,
   "lng": 2.2457,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 35590
 },
 {
   "city": "Cha-am",
   "lat": 12.7992,
   "lng": 99.9683,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 35581
 },
 {
   "city": "San Sebastián de Yalí",
   "lat": 13.3,
   "lng": -86.1833,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 35549
 },
 {
   "city": "Savonlinna",
   "lat": 61.8667,
   "lng": 28.8831,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 35523
 },
 {
   "city": "Miahuatlán de Porfirio Díaz",
   "lat": 16.3283,
   "lng": -96.5961,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 35517
 },
 {
   "city": "Gigante",
   "lat": 2.3867,
   "lng": -75.5461,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 35498
 },
 {
   "city": "Coevorden",
   "lat": 52.6667,
   "lng": 6.75,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 35483
 },
 {
   "city": "Cartagena del Chairá",
   "lat": 1.3361,
   "lng": -74.8467,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 35473
 },
 {
   "city": "Bougouni",
   "lat": 11.4177,
   "lng": -7.4832,
   "country": "Mali",
   "iso2": "ML",
   "iso3": "MLI",
   "capital": "minor",
   "population": 35450
 },
 {
   "city": "Jasło",
   "lat": 49.7333,
   "lng": 21.4667,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 35445
 },
 {
   "city": "Tallkalakh",
   "lat": 34.6683,
   "lng": 36.2597,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 35445
 },
 {
   "city": "Dayr Ḩāfir",
   "lat": 36.1592,
   "lng": 37.704,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 35409
 },
 {
   "city": "Zorgo",
   "lat": 12.25,
   "lng": -0.6167,
   "country": "Burkina Faso",
   "iso2": "BF",
   "iso3": "BFA",
   "capital": "minor",
   "population": 35406
 },
 {
   "city": "Millerovo",
   "lat": 48.9167,
   "lng": 40.4,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 35384
 },
 {
   "city": "Lębork",
   "lat": 54.55,
   "lng": 17.75,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 35374
 },
 {
   "city": "Meppen",
   "lat": 52.6906,
   "lng": 7.291,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 35373
 },
 {
   "city": "La Palma",
   "lat": 22.7472,
   "lng": -83.5525,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 35346
 },
 {
   "city": "Cegléd",
   "lat": 47.1772,
   "lng": 19.7981,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 35334
 },
 {
   "city": "Tonalá",
   "lat": 16.0894,
   "lng": -93.7514,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 35322
 },
 {
   "city": "Kerava",
   "lat": 60.4028,
   "lng": 25.1,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 35293
 },
 {
   "city": "Quimbaya",
   "lat": 4.6239,
   "lng": -75.7631,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 35276
 },
 {
   "city": "San Miguel Ixtahuacán",
   "lat": 15.25,
   "lng": -91.75,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 35276
 },
 {
   "city": "Gorinchem",
   "lat": 51.8306,
   "lng": 4.9742,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 35255
 },
 {
   "city": "Limburg",
   "lat": 50.3833,
   "lng": 8.0667,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 35243
 },
 {
   "city": "Voznesensk",
   "lat": 47.5725,
   "lng": 31.3119,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 35243
 },
 {
   "city": "Thonon-les-Bains",
   "lat": 46.3627,
   "lng": 6.475,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 35241
 },
 {
   "city": "Fonseca",
   "lat": 10.8858,
   "lng": -72.8481,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 35205
 },
 {
   "city": "Praya",
   "lat": -8.7223,
   "lng": 116.2923,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 35183
 },
 {
   "city": "Bucha",
   "lat": 50.5464,
   "lng": 30.235,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 35162
 },
 {
   "city": "Soteapan",
   "lat": 18.2333,
   "lng": -94.8667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 35155
 },
 {
   "city": "Ingelheim",
   "lat": 49.9747,
   "lng": 8.0564,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 35146
 },
 {
   "city": "San Vicente de Chucurí",
   "lat": 6.8819,
   "lng": -73.4119,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 35121
 },
 {
   "city": "Puerto López",
   "lat": 4.0897,
   "lng": -72.9619,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 35097
 },
 {
   "city": "Al Ḩişn",
   "lat": 32.487,
   "lng": 35.88,
   "country": "Jordan",
   "iso2": "JO",
   "iso3": "JOR",
   "capital": "minor",
   "population": 35085
 },
 {
   "city": "Umarkot",
   "lat": 25.3614,
   "lng": 69.7361,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 35059
 },
 {
   "city": "Casilda",
   "lat": -33.0442,
   "lng": -61.1681,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 35058
 },
 {
   "city": "San Luis de Sincé",
   "lat": 9.2447,
   "lng": -75.1458,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 35022
 },
 {
   "city": "Huehuetán",
   "lat": 15.0319,
   "lng": -92.3844,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 35017
 },
 {
   "city": "Champerico",
   "lat": 14.293,
   "lng": -91.914,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 35000
 },
 {
   "city": "Tall Salḩab",
   "lat": 35.2609,
   "lng": 36.3822,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 35000
 },
 {
   "city": "Bochil",
   "lat": 16.9953,
   "lng": -92.8903,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 34997
 },
 {
   "city": "Ieper",
   "lat": 50.85,
   "lng": 2.8833,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 34964
 },
 {
   "city": "Leer",
   "lat": 53.2308,
   "lng": 7.4528,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 34958
 },
 {
   "city": "Montluçon",
   "lat": 46.3408,
   "lng": 2.6033,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 34938
 },
 {
   "city": "Campoalegre",
   "lat": 2.6867,
   "lng": -75.3256,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 34923
 },
 {
   "city": "Cloppenburg",
   "lat": 52.8478,
   "lng": 8.0439,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 34913
 },
 {
   "city": "Ikot Abasi",
   "lat": 4.5704,
   "lng": 7.56,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 34911
 },
 {
   "city": "Winsen",
   "lat": 53.3667,
   "lng": 10.2167,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 34896
 },
 {
   "city": "Yarīm",
   "lat": 14.2978,
   "lng": 44.3778,
   "country": "Yemen",
   "iso2": "YE",
   "iso3": "YEM",
   "capital": "minor",
   "population": 34805
 },
 {
   "city": "Haguenau",
   "lat": 48.82,
   "lng": 7.79,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 34789
 },
 {
   "city": "Baja",
   "lat": 46.1833,
   "lng": 18.9536,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 34788
 },
 {
   "city": "Auxerre",
   "lat": 47.7986,
   "lng": 3.5672,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 34764
 },
 {
   "city": "Samandağ",
   "lat": 36.085,
   "lng": 35.9806,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 34641
 },
 {
   "city": "Sarpol-e Z̄ahāb",
   "lat": 34.4614,
   "lng": 45.8647,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 34632
 },
 {
   "city": "Buenos Aires",
   "lat": 3.0164,
   "lng": -76.6411,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 34631
 },
 {
   "city": "Chacabuco",
   "lat": -34.65,
   "lng": -60.49,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 34587
 },
 {
   "city": "Bugojno",
   "lat": 44.0572,
   "lng": 17.4508,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 34559
 },
 {
   "city": "Saarlouis",
   "lat": 49.3167,
   "lng": 6.75,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 34552
 },
 {
   "city": "Sabaneta",
   "lat": 19.4833,
   "lng": -71.35,
   "country": "Dominican Republic",
   "iso2": "DO",
   "iso3": "DOM",
   "capital": "minor",
   "population": 34540
 },
 {
   "city": "Bāft",
   "lat": 29.2331,
   "lng": 56.6022,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 34517
 },
 {
   "city": "Cieszyn",
   "lat": 49.75,
   "lng": 18.6333,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 34513
 },
 {
   "city": "Balingen",
   "lat": 48.2731,
   "lng": 8.8506,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 34505
 },
 {
   "city": "Ocuilan de Arteaga",
   "lat": 19,
   "lng": -99.4,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 34485
 },
 {
   "city": "Gerāsh",
   "lat": 27.665,
   "lng": 54.1369,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 34469
 },
 {
   "city": "Banes",
   "lat": 20.9697,
   "lng": -75.7117,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 34452
 },
 {
   "city": "Sambir",
   "lat": 49.5167,
   "lng": 23.2,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 34444
 },
 {
   "city": "Uster",
   "lat": 47.3492,
   "lng": 8.7192,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 34442
 },
 {
   "city": "Mosonmagyaróvár",
   "lat": 47.8667,
   "lng": 17.2667,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 34439
 },
 {
   "city": "Merauke",
   "lat": -8.4932,
   "lng": 140.4018,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 34412
 },
 {
   "city": "Gorizia",
   "lat": 45.9352,
   "lng": 13.6193,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 34411
 },
 {
   "city": "Santa Ana Nextlalpan",
   "lat": 19.7167,
   "lng": -99.0667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 34374
 },
 {
   "city": "Zhmerynka",
   "lat": 49.0425,
   "lng": 28.0992,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 34353
 },
 {
   "city": "Phra Phutthabat",
   "lat": 14.7212,
   "lng": 100.8047,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 34322
 },
 {
   "city": "Wavre",
   "lat": 50.7167,
   "lng": 4.6,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 34305
 },
 {
   "city": "Esposende",
   "lat": 41.5333,
   "lng": -8.7833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 34254
 },
 {
   "city": "La Huacana",
   "lat": 18.9625,
   "lng": -101.8069,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 34243
 },
 {
   "city": "Kraśnik",
   "lat": 50.9167,
   "lng": 22.2167,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 34230
 },
 {
   "city": "Gulkevichi",
   "lat": 45.3603,
   "lng": 40.6945,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 34215
 },
 {
   "city": "Zweibrücken",
   "lat": 49.2494,
   "lng": 7.3608,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 34209
 },
 {
   "city": "Shāhīn Dezh",
   "lat": 36.6792,
   "lng": 46.5667,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 34204
 },
 {
   "city": "IJsselstein",
   "lat": 52.02,
   "lng": 5.0422,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 34160
 },
 {
   "city": "Caldono",
   "lat": 2.7969,
   "lng": -76.4828,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 34132
 },
 {
   "city": "San Agustín",
   "lat": 1.8792,
   "lng": -76.2683,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 34120
 },
 {
   "city": "Qingyang",
   "lat": 36.1985,
   "lng": 113.4313,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 34098
 },
 {
   "city": "Steinfurt",
   "lat": 52.1504,
   "lng": 7.3366,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 34084
 },
 {
   "city": "Merseburg",
   "lat": 51.3544,
   "lng": 11.9928,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 34080
 },
 {
   "city": "San Juan Nepomuceno",
   "lat": 9.9522,
   "lng": -75.0811,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 34012
 },
 {
   "city": "Majagual",
   "lat": 8.5408,
   "lng": -74.6297,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 34010
 },
 {
   "city": "Quinchía",
   "lat": 5.3394,
   "lng": -75.7294,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 34005
 },
 {
   "city": "Roanne",
   "lat": 46.0367,
   "lng": 4.0689,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 34004
 },
 {
   "city": "Peyziwat",
   "lat": 39.4905,
   "lng": 76.7389,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 33971
 },
 {
   "city": "San Juan Evangelista",
   "lat": 17.8833,
   "lng": -95.1333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 33929
 },
 {
   "city": "Réo",
   "lat": 12.3167,
   "lng": -2.4667,
   "country": "Burkina Faso",
   "iso2": "BF",
   "iso3": "BFA",
   "capital": "minor",
   "population": 33893
 },
 {
   "city": "Lianga",
   "lat": 8.633,
   "lng": 126.0932,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 33869
 },
 {
   "city": "Sneek",
   "lat": 53.0325,
   "lng": 5.66,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 33855
 },
 {
   "city": "Bell Ville",
   "lat": -32.6333,
   "lng": -62.6833,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 33835
 },
 {
   "city": "Parras de la Fuente",
   "lat": 25.4403,
   "lng": -102.1792,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 33817
 },
 {
   "city": "San Antonio de los Baños",
   "lat": 22.8889,
   "lng": -82.4989,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 33811
 },
 {
   "city": "Mâcon",
   "lat": 46.3063,
   "lng": 4.8313,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 33810
 },
 {
   "city": "Tekes",
   "lat": 43.2181,
   "lng": 81.8372,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 33740
 },
 {
   "city": "Zacatlán",
   "lat": 19.9319,
   "lng": -97.96,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 33736
 },
 {
   "city": "Chilecito",
   "lat": -29.1667,
   "lng": -67.5,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 33724
 },
 {
   "city": "Léo",
   "lat": 11.1,
   "lng": -2.1,
   "country": "Burkina Faso",
   "iso2": "BF",
   "iso3": "BFA",
   "capital": "minor",
   "population": 33717
 },
 {
   "city": "Puerto Rico",
   "lat": 1.9075,
   "lng": -75.1583,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 33701
 },
 {
   "city": "San Antero",
   "lat": 9.3775,
   "lng": -75.7603,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 33662
 },
 {
   "city": "Vibo Valentia",
   "lat": 38.6753,
   "lng": 16.0959,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 33642
 },
 {
   "city": "Todos Santos Cuchumatán",
   "lat": 15.5116,
   "lng": -91.6051,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 33619
 },
 {
   "city": "Uelzen",
   "lat": 52.9647,
   "lng": 10.5658,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 33614
 },
 {
   "city": "Lochem",
   "lat": 52.15,
   "lng": 6.4167,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 33590
 },
 {
   "city": "Deggendorf",
   "lat": 48.8353,
   "lng": 12.9644,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 33585
 },
 {
   "city": "Qadsayyā",
   "lat": 33.5333,
   "lng": 36.2167,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 33571
 },
 {
   "city": "Meppel",
   "lat": 52.7033,
   "lng": 6.1917,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 33564
 },
 {
   "city": "Nowy Targ",
   "lat": 49.4833,
   "lng": 20.0333,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 33545
 },
 {
   "city": "Biberach",
   "lat": 48.0981,
   "lng": 9.7886,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 33510
 },
 {
   "city": "Corinto",
   "lat": 3.1739,
   "lng": -76.2594,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 33489
 },
 {
   "city": "Humenné",
   "lat": 48.9306,
   "lng": 21.9122,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 33441
 },
 {
   "city": "Ciudad Tecún Umán",
   "lat": 14.6833,
   "lng": -92.1333,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 33426
 },
 {
   "city": "Castro",
   "lat": -42.4824,
   "lng": -73.7643,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 33417
 },
 {
   "city": "Paso de Ovejas",
   "lat": 19.285,
   "lng": -96.44,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 33392
 },
 {
   "city": "Kos",
   "lat": 36.8153,
   "lng": 27.1103,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 33387
 },
 {
   "city": "Tulum",
   "lat": 20.2119,
   "lng": -87.4658,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 33374
 },
 {
   "city": "Iława",
   "lat": 53.5964,
   "lng": 19.5656,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 33322
 },
 {
   "city": "Nokia",
   "lat": 61.4767,
   "lng": 23.5053,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 33322
 },
 {
   "city": "Baltiysk",
   "lat": 54.65,
   "lng": 19.9167,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 33317
 },
 {
   "city": "Nevers",
   "lat": 46.9933,
   "lng": 3.1572,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 33279
 },
 {
   "city": "Calpulalpan",
   "lat": 19.5869,
   "lng": -98.5683,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 33263
 },
 {
   "city": "Pivijay",
   "lat": 10.4608,
   "lng": -74.6153,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 33225
 },
 {
   "city": "Bragado",
   "lat": -35.1167,
   "lng": -60.5,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 33222
 },
 {
   "city": "Obukhiv",
   "lat": 50.1,
   "lng": 30.6167,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 33204
 },
 {
   "city": "Khvāf",
   "lat": 34.5764,
   "lng": 60.1408,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 33189
 },
 {
   "city": "Police",
   "lat": 53.55,
   "lng": 14.5708,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 33152
 },
 {
   "city": "Epe",
   "lat": 52.3333,
   "lng": 5.9167,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 33145
 },
 {
   "city": "Chuhuiv",
   "lat": 49.8353,
   "lng": 36.6756,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 33144
 },
 {
   "city": "Dzierżoniów",
   "lat": 50.7281,
   "lng": 16.6511,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 33137
 },
 {
   "city": "Pánuco",
   "lat": 22.05,
   "lng": -98.1833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 33122
 },
 {
   "city": "Bandırma",
   "lat": 40.3542,
   "lng": 27.9725,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 33116
 },
 {
   "city": "Oława",
   "lat": 50.9333,
   "lng": 17.3,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 33108
 },
 {
   "city": "Temascalapa",
   "lat": 19.8,
   "lng": -98.9,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 33063
 },
 {
   "city": "San Luis",
   "lat": 22.2828,
   "lng": -83.7681,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 33039
 },
 {
   "city": "Puebloviejo",
   "lat": 10.9942,
   "lng": -74.2833,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 33030
 },
 {
   "city": "Sanarate",
   "lat": 14.795,
   "lng": -90.1922,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 33025
 },
 {
   "city": "Jishi",
   "lat": 35.8511,
   "lng": 102.4788,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 33022
 },
 {
   "city": "Agen",
   "lat": 44.2049,
   "lng": 0.6212,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 33012
 },
 {
   "city": "Panjakent",
   "lat": 39.5031,
   "lng": 67.615,
   "country": "Tajikistan",
   "iso2": "TJ",
   "iso3": "TJK",
   "capital": "minor",
   "population": 33000
 },
 {
   "city": "Laojiezi",
   "lat": 26.86,
   "lng": 103.1306,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 32998
 },
 {
   "city": "Djenné",
   "lat": 13.9,
   "lng": -4.55,
   "country": "Mali",
   "iso2": "ML",
   "iso3": "MLI",
   "capital": "minor",
   "population": 32944
 },
 {
   "city": "Vác",
   "lat": 47.7753,
   "lng": 19.1311,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 32927
 },
 {
   "city": "Nogent-sur-Marne",
   "lat": 48.8375,
   "lng": 2.4833,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 32922
 },
 {
   "city": "Fraijanes",
   "lat": 14.4622,
   "lng": -90.4386,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 32889
 },
 {
   "city": "Mataquescuintla",
   "lat": 14.5336,
   "lng": -90.1838,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 32860
 },
 {
   "city": "San Felipe",
   "lat": 21.4833,
   "lng": -101.2167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 32831
 },
 {
   "city": "Maassluis",
   "lat": 51.9189,
   "lng": 4.2567,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 32768
 },
 {
   "city": "Bocas de Satinga",
   "lat": 2.3469,
   "lng": -78.3256,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 32759
 },
 {
   "city": "Puerto Escondido",
   "lat": 9.0192,
   "lng": -76.2614,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 32745
 },
 {
   "city": "Ylöjärvi",
   "lat": 61.55,
   "lng": 23.5833,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 32738
 },
 {
   "city": "Sayula de Alemán",
   "lat": 17.8833,
   "lng": -94.95,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 32721
 },
 {
   "city": "Ansongo",
   "lat": 15.665,
   "lng": 0.5028,
   "country": "Mali",
   "iso2": "ML",
   "iso3": "MLI",
   "capital": "minor",
   "population": 32709
 },
 {
   "city": "Silvia",
   "lat": 2.6108,
   "lng": -76.3789,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 32692
 },
 {
   "city": "Bernburg",
   "lat": 51.8,
   "lng": 11.7333,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 32674
 },
 {
   "city": "Putla Villa de Guerrero",
   "lat": 17.0321,
   "lng": -97.9293,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 32640
 },
 {
   "city": "El Difícil",
   "lat": 9.8469,
   "lng": -74.2367,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 32637
 },
 {
   "city": "Liptovský Mikuláš",
   "lat": 49.0811,
   "lng": 19.6181,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 32593
 },
 {
   "city": "Kaarina",
   "lat": 60.4069,
   "lng": 22.3722,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 32590
 },
 {
   "city": "Bardejov",
   "lat": 49.295,
   "lng": 21.2758,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 32587
 },
 {
   "city": "Inzá",
   "lat": 2.5503,
   "lng": -76.0636,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 32582
 },
 {
   "city": "Kohtla-Järve",
   "lat": 59.4,
   "lng": 27.2833,
   "country": "Estonia",
   "iso2": "EE",
   "iso3": "EST",
   "capital": "minor",
   "population": 32577
 },
 {
   "city": "Payshamba Shahri",
   "lat": 40.005,
   "lng": 66.2264,
   "country": "Uzbekistan",
   "iso2": "UZ",
   "iso3": "UZB",
   "capital": "minor",
   "population": 32568
 },
 {
   "city": "Cambrai",
   "lat": 50.1767,
   "lng": 3.2356,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 32501
 },
 {
   "city": "Réthymno",
   "lat": 35.3689,
   "lng": 24.4739,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 32468
 },
 {
   "city": "Fucheng",
   "lat": 35.3678,
   "lng": 103.7074,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 32463
 },
 {
   "city": "Vechta",
   "lat": 52.7306,
   "lng": 8.2886,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 32433
 },
 {
   "city": "Tenosique",
   "lat": 17.4756,
   "lng": -91.4225,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 32415
 },
 {
   "city": "Bussum",
   "lat": 52.2733,
   "lng": 5.1611,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 32410
 },
 {
   "city": "Naumburg",
   "lat": 51.1521,
   "lng": 11.8098,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 32402
 },
 {
   "city": "Deurne",
   "lat": 51.4639,
   "lng": 5.7947,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 32362
 },
 {
   "city": "La Virginia",
   "lat": 4.8967,
   "lng": -75.8839,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 32330
 },
 {
   "city": "San Pedro de Urabá",
   "lat": 8.275,
   "lng": -76.3769,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 32328
 },
 {
   "city": "Menglie",
   "lat": 22.5833,
   "lng": 101.866,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 32306
 },
 {
   "city": "Papendrecht",
   "lat": 51.8333,
   "lng": 4.6833,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 32290
 },
 {
   "city": "Kangasala",
   "lat": 61.4639,
   "lng": 24.065,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 32229
 },
 {
   "city": "Épinal",
   "lat": 48.1744,
   "lng": 6.4512,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 32223
 },
 {
   "city": "Cantel",
   "lat": 14.8112,
   "lng": -91.4555,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 32221
 },
 {
   "city": "Şāfītā",
   "lat": 34.8208,
   "lng": 36.1173,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 32213
 },
 {
   "city": "Santo Domingo Suchitepéquez",
   "lat": 14.4667,
   "lng": -91.4833,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 32202
 },
 {
   "city": "Kristianstad",
   "lat": 56.0337,
   "lng": 14.1333,
   "country": "Sweden",
   "iso2": "SE",
   "iso3": "SWE",
   "capital": "minor",
   "population": 32188
 },
 {
   "city": "Primorsko-Akhtarsk",
   "lat": 46.05,
   "lng": 38.1833,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 32180
 },
 {
   "city": "Xangda",
   "lat": 32.2056,
   "lng": 96.4751,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 32175
 },
 {
   "city": "Forchheim",
   "lat": 49.7197,
   "lng": 11.0581,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 32171
 },
 {
   "city": "Buguey",
   "lat": 18.2882,
   "lng": 121.8331,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 32148
 },
 {
   "city": "Grodzisk Mazowiecki",
   "lat": 52.1089,
   "lng": 20.625,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 32125
 },
 {
   "city": "Zapala",
   "lat": -38.9028,
   "lng": -70.065,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 32097
 },
 {
   "city": "Altenburg",
   "lat": 50.985,
   "lng": 12.4333,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 32074
 },
 {
   "city": "Remedios",
   "lat": 7.0275,
   "lng": -74.6939,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 32057
 },
 {
   "city": "Ciudad Sabinas Hidalgo",
   "lat": 26.5,
   "lng": -100.1833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 32047
 },
 {
   "city": "Cabaiguán",
   "lat": 22.0839,
   "lng": -79.4953,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 32000
 },
 {
   "city": "Levice",
   "lat": 48.2136,
   "lng": 18.6069,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 31974
 },
 {
   "city": "San Andrés Itzapa",
   "lat": 14.6167,
   "lng": -90.85,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 31956
 },
 {
   "city": "Petatlán",
   "lat": 17.5383,
   "lng": -101.2739,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 31910
 },
 {
   "city": "Nilka",
   "lat": 43.7826,
   "lng": 82.5089,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 31907
 },
 {
   "city": "Paso del Macho",
   "lat": 18.9667,
   "lng": -96.7167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 31890
 },
 {
   "city": "Itzehoe",
   "lat": 53.925,
   "lng": 9.5164,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 31879
 },
 {
   "city": "Turicato",
   "lat": 19.05,
   "lng": -101.4167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 31877
 },
 {
   "city": "Paipa",
   "lat": 5.78,
   "lng": -73.1175,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 31868
 },
 {
   "city": "Guachavés",
   "lat": 1.2219,
   "lng": -77.6772,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 31856
 },
 {
   "city": "Touba",
   "lat": 8.2833,
   "lng": -7.6833,
   "country": "Côte d'Ivoire",
   "iso2": "CI",
   "iso3": "CIV",
   "capital": "minor",
   "population": 31844
 },
 {
   "city": "Oldenzaal",
   "lat": 52.3125,
   "lng": 6.9292,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 31840
 },
 {
   "city": "Santa Rita",
   "lat": 10.5367,
   "lng": -71.5108,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 31810
 },
 {
   "city": "Stadskanaal",
   "lat": 52.9864,
   "lng": 6.9589,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 31789
 },
 {
   "city": "Chajul",
   "lat": 15.4872,
   "lng": -91.0347,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 31780
 },
 {
   "city": "Gödöllő",
   "lat": 47.6,
   "lng": 19.3667,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 31779
 },
 {
   "city": "Tuzantán",
   "lat": 15.15,
   "lng": -92.4167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 31755
 },
 {
   "city": "Châtellerault",
   "lat": 46.8178,
   "lng": 0.5461,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 31733
 },
 {
   "city": "Aalsmeer",
   "lat": 52.2639,
   "lng": 4.7625,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 31728
 },
 {
   "city": "Sitionuevo",
   "lat": 10.7758,
   "lng": -74.7203,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 31706
 },
 {
   "city": "Amecameca de Juárez",
   "lat": 19.1238,
   "lng": -98.7665,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 31687
 },
 {
   "city": "Zhaoyu",
   "lat": 37.3512,
   "lng": 112.3193,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 31685
 },
 {
   "city": "Jāsim",
   "lat": 32.9922,
   "lng": 36.06,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 31683
 },
 {
   "city": "Oristano",
   "lat": 39.9058,
   "lng": 8.5916,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 31671
 },
 {
   "city": "Lens",
   "lat": 50.4322,
   "lng": 2.8333,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 31606
 },
 {
   "city": "Jesús María",
   "lat": -30.9817,
   "lng": -64.0942,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 31602
 },
 {
   "city": "Chum Phae",
   "lat": 16.5431,
   "lng": 102.1104,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 31597
 },
 {
   "city": "Galapa",
   "lat": 10.9003,
   "lng": -74.8853,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 31596
 },
 {
   "city": "Žepče",
   "lat": 44.4333,
   "lng": 18.0333,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 31582
 },
 {
   "city": "Olintepeque",
   "lat": 14.8833,
   "lng": -91.5167,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 31551
 },
 {
   "city": "I‘zāz",
   "lat": 36.5888,
   "lng": 37.0441,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 31534
 },
 {
   "city": "Mae Sot",
   "lat": 16.7101,
   "lng": 98.5707,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 31530
 },
 {
   "city": "Puerto Wilches",
   "lat": 7.3483,
   "lng": -73.8983,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 31509
 },
 {
   "city": "San Pedro Sacatepéquez",
   "lat": 14.6862,
   "lng": -90.6423,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 31503
 },
 {
   "city": "Trebinje",
   "lat": 42.7089,
   "lng": 18.3217,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 31433
 },
 {
   "city": "L’Haÿ-les-Roses",
   "lat": 48.78,
   "lng": 2.3374,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 31417
 },
 {
   "city": "Neira",
   "lat": 5.1664,
   "lng": -75.5189,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 31399
 },
 {
   "city": "Halden",
   "lat": 59.1264,
   "lng": 11.4828,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 31387
 },
 {
   "city": "Kudymkar",
   "lat": 59.0167,
   "lng": 54.6667,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 31370
 },
 {
   "city": "Yawatahama-shi",
   "lat": 33.4631,
   "lng": 132.4233,
   "country": "Japan",
   "iso2": "JP",
   "iso3": "JPN",
   "capital": "minor",
   "population": 31363
 },
 {
   "city": "Cauquenes",
   "lat": -35.9671,
   "lng": -72.3154,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 31362
 },
 {
   "city": "Zgorzelec",
   "lat": 51.1528,
   "lng": 15,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 31359
 },
 {
   "city": "Guamo",
   "lat": 4.0281,
   "lng": -74.97,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 31350
 },
 {
   "city": "Wenxian Chengguanzhen",
   "lat": 32.9421,
   "lng": 104.687,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 31339
 },
 {
   "city": "Skellefteå",
   "lat": 64.65,
   "lng": 20.85,
   "country": "Sweden",
   "iso2": "SE",
   "iso3": "SWE",
   "capital": "minor",
   "population": 31311
 },
 {
   "city": "Buurhakaba",
   "lat": 2.7837,
   "lng": 44.0833,
   "country": "Somalia",
   "iso2": "SO",
   "iso3": "SOM",
   "capital": "minor",
   "population": 31267
 },
 {
   "city": "Ózd",
   "lat": 48.2192,
   "lng": 20.2869,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 31234
 },
 {
   "city": "Kosonsoy",
   "lat": 41.2492,
   "lng": 71.5458,
   "country": "Uzbekistan",
   "iso2": "UZ",
   "iso3": "UZB",
   "capital": "minor",
   "population": 31217
 },
 {
   "city": "Tongeren",
   "lat": 50.7794,
   "lng": 5.4631,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 31142
 },
 {
   "city": "Oudenaarde",
   "lat": 50.85,
   "lng": 3.6,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 31132
 },
 {
   "city": "Pichucalco",
   "lat": 17.5,
   "lng": -93.1167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 31107
 },
 {
   "city": "Chitral",
   "lat": 35.8511,
   "lng": 71.7889,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 31100
 },
 {
   "city": "Río Grande",
   "lat": -53.7914,
   "lng": -67.699,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 31095
 },
 {
   "city": "Lagos",
   "lat": 37.1,
   "lng": -8.6667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 31049
 },
 {
   "city": "Espinho",
   "lat": 41.01,
   "lng": -8.64,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 31027
 },
 {
   "city": "Tokmak",
   "lat": 47.2514,
   "lng": 35.7058,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 31016
 },
 {
   "city": "Hendrik-Ido-Ambacht",
   "lat": 51.85,
   "lng": 4.63,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 30966
 },
 {
   "city": "Valkenswaard",
   "lat": 51.35,
   "lng": 5.4592,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 30910
 },
 {
   "city": "Ski",
   "lat": 59.7419,
   "lng": 10.8939,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 30843
 },
 {
   "city": "Capulhuac",
   "lat": 19.2,
   "lng": -99.4667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 30838
 },
 {
   "city": "Escuinapa",
   "lat": 22.9822,
   "lng": -105.7031,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 30790
 },
 {
   "city": "Neuruppin",
   "lat": 52.9222,
   "lng": 12.8,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 30764
 },
 {
   "city": "Boxtel",
   "lat": 51.5911,
   "lng": 5.3275,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 30747
 },
 {
   "city": "Santiago Sacatepéquez",
   "lat": 14.653,
   "lng": -90.6524,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 30747
 },
 {
   "city": "Vrilíssia",
   "lat": 38.0391,
   "lng": 23.8378,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 30741
 },
 {
   "city": "Amatenango de la Frontera",
   "lat": 15.4333,
   "lng": -92.1167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 30732
 },
 {
   "city": "Synelnykove",
   "lat": 48.3178,
   "lng": 35.5119,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 30724
 },
 {
   "city": "Verbania",
   "lat": 45.9228,
   "lng": 8.5519,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 30709
 },
 {
   "city": "Hajdúböszörmény",
   "lat": 47.6667,
   "lng": 21.5167,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 30704
 },
 {
   "city": "Tepetlaoxtoc",
   "lat": 19.5731,
   "lng": -98.8203,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 30680
 },
 {
   "city": "Dreux",
   "lat": 48.7372,
   "lng": 1.3664,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 30664
 },
 {
   "city": "Mercedes",
   "lat": -29.1796,
   "lng": -58.08,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 30649
 },
 {
   "city": "Madruga",
   "lat": 22.9164,
   "lng": -81.9239,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 30640
 },
 {
   "city": "Victoria",
   "lat": -32.6167,
   "lng": -60.1667,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 30623
 },
 {
   "city": "Banamba",
   "lat": 13.55,
   "lng": -7.45,
   "country": "Mali",
   "iso2": "ML",
   "iso3": "MLI",
   "capital": "minor",
   "population": 30591
 },
 {
   "city": "Mohyliv-Podilskyi",
   "lat": 48.45,
   "lng": 27.7833,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 30589
 },
 {
   "city": "Ödemiş",
   "lat": 38.2311,
   "lng": 27.9719,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 30580
 },
 {
   "city": "Ciudad Vieja",
   "lat": 14.5233,
   "lng": -90.7667,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 30565
 },
 {
   "city": "Thung Song",
   "lat": 8.1669,
   "lng": 99.6745,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 30500
 },
 {
   "city": "G’ijduvon Shahri",
   "lat": 40.1,
   "lng": 64.6833,
   "country": "Uzbekistan",
   "iso2": "UZ",
   "iso3": "UZB",
   "capital": "minor",
   "population": 30486
 },
 {
   "city": "Magdalena de Kino",
   "lat": 30.6167,
   "lng": -111.05,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 30429
 },
 {
   "city": "Horki",
   "lat": 54.2833,
   "lng": 30.9833,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 30390
 },
 {
   "city": "Łowicz",
   "lat": 52.1,
   "lng": 19.9333,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 30383
 },
 {
   "city": "Pápa",
   "lat": 47.3306,
   "lng": 17.4658,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 30382
 },
 {
   "city": "Łuków",
   "lat": 51.9167,
   "lng": 22.3833,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 30381
 },
 {
   "city": "Amagá",
   "lat": 6.0383,
   "lng": -75.7028,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 30376
 },
 {
   "city": "Temascaltepec de González",
   "lat": 19.0433,
   "lng": -100.0414,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 30336
 },
 {
   "city": "Huatabampo",
   "lat": 26.8275,
   "lng": -109.6422,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 30324
 },
 {
   "city": "Bielsk Podlaski",
   "lat": 52.7641,
   "lng": 23.1902,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 30322
 },
 {
   "city": "Télimélé",
   "lat": 10.905,
   "lng": -13.043,
   "country": "Guinea",
   "iso2": "GN",
   "iso3": "GIN",
   "capital": "minor",
   "population": 30311
 },
 {
   "city": "Chimichagua",
   "lat": 9.2578,
   "lng": -73.8133,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 30303
 },
 {
   "city": "Osterholz-Scharmbeck",
   "lat": 53.2269,
   "lng": 8.7947,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 30300
 },
 {
   "city": "Ometepec",
   "lat": 16.6833,
   "lng": -98.4167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 30271
 },
 {
   "city": "Kórinthos",
   "lat": 37.9386,
   "lng": 22.9272,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 30176
 },
 {
   "city": "Yverdon-les-Bains",
   "lat": 46.7785,
   "lng": 6.6408,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 30157
 },
 {
   "city": "Augustów",
   "lat": 53.85,
   "lng": 22.9667,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 30153
 },
 {
   "city": "Kombissiri",
   "lat": 12.0667,
   "lng": -1.3333,
   "country": "Burkina Faso",
   "iso2": "BF",
   "iso3": "BFA",
   "capital": "minor",
   "population": 30137
 },
 {
   "city": "Shangpa",
   "lat": 26.9052,
   "lng": 98.8679,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 30129
 },
 {
   "city": "Planadas",
   "lat": 3.1964,
   "lng": -75.6444,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 30117
 },
 {
   "city": "Bochnia",
   "lat": 49.9833,
   "lng": 20.4333,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 30075
 },
 {
   "city": "Périgueux",
   "lat": 45.1929,
   "lng": 0.7217,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 30060
 },
 {
   "city": "Villa Ángela",
   "lat": -27.5833,
   "lng": -60.7167,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 30051
 },
 {
   "city": "Nanchital de Lázaro Cárdenas del Río",
   "lat": 18.0667,
   "lng": -94.4167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 30039
 },
 {
   "city": "Leusden",
   "lat": 52.1331,
   "lng": 5.4297,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 30030
 },
 {
   "city": "Condega",
   "lat": 13.365,
   "lng": -86.3985,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 30000
 },
 {
   "city": "Eshtehārd",
   "lat": 35.7256,
   "lng": 50.3661,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 29993
 },
 {
   "city": "Asipovichy",
   "lat": 53.3,
   "lng": 28.65,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 29981
 },
 {
   "city": "Meschede",
   "lat": 51.3503,
   "lng": 8.2836,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 29921
 },
 {
   "city": "San Andrés Xecul",
   "lat": 14.9,
   "lng": -91.4833,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 29849
 },
 {
   "city": "Mława",
   "lat": 53.1341,
   "lng": 20.3812,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 29836
 },
 {
   "city": "Best",
   "lat": 51.5108,
   "lng": 5.3922,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 29821
 },
 {
   "city": "Bad Hersfeld",
   "lat": 50.8683,
   "lng": 9.7067,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 29800
 },
 {
   "city": "Tequisquiapan",
   "lat": 20.5206,
   "lng": -99.8958,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 29799
 },
 {
   "city": "Fresno",
   "lat": 5.1536,
   "lng": -75.0369,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 29794
 },
 {
   "city": "Giannitsá",
   "lat": 40.7962,
   "lng": 22.4145,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 29789
 },
 {
   "city": "Purificación",
   "lat": 3.8567,
   "lng": -74.9325,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 29777
 },
 {
   "city": "Santiago do Cacém",
   "lat": 38,
   "lng": -8.6833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 29749
 },
 {
   "city": "Merzig",
   "lat": 49.4471,
   "lng": 6.6312,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 29745
 },
 {
   "city": "Arlon",
   "lat": 49.6836,
   "lng": 5.8167,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 29733
 },
 {
   "city": "Atbasar",
   "lat": 51.8,
   "lng": 68.3667,
   "country": "Kazakhstan",
   "iso2": "KZ",
   "iso3": "KAZ",
   "capital": "minor",
   "population": 29733
 },
 {
   "city": "Tabio",
   "lat": 4.9158,
   "lng": -74.0983,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 29731
 },
 {
   "city": "Heesch",
   "lat": 51.7314,
   "lng": 5.53,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 29728
 },
 {
   "city": "Mont-de-Marsan",
   "lat": 43.89,
   "lng": -0.5,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 29683
 },
 {
   "city": "Neuburg",
   "lat": 48.7333,
   "lng": 11.1833,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 29682
 },
 {
   "city": "Yingshouyingzi",
   "lat": 40.5451,
   "lng": 117.656,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 29664
 },
 {
   "city": "Bosanska Krupa",
   "lat": 44.8833,
   "lng": 16.15,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 29659
 },
 {
   "city": "Toksun",
   "lat": 42.7918,
   "lng": 88.6536,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 29657
 },
 {
   "city": "Giżycko",
   "lat": 54.04,
   "lng": 21.7589,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 29642
 },
 {
   "city": "San Rafael",
   "lat": 20.1889,
   "lng": -96.8658,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 29631
 },
 {
   "city": "Alquízar",
   "lat": 22.8067,
   "lng": -82.5828,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 29616
 },
 {
   "city": "Villa Gesell",
   "lat": -37.2556,
   "lng": -56.9681,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 29593
 },
 {
   "city": "Vienne",
   "lat": 45.5242,
   "lng": 4.8781,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 29583
 },
 {
   "city": "Barbosa",
   "lat": 5.9331,
   "lng": -73.6147,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 29581
 },
 {
   "city": "Xalatlaco",
   "lat": 19.1811,
   "lng": -99.4164,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 29572
 },
 {
   "city": "Ja‘ār",
   "lat": 13.2167,
   "lng": 45.3,
   "country": "Yemen",
   "iso2": "YE",
   "iso3": "YEM",
   "capital": "minor",
   "population": 29495
 },
 {
   "city": "Flandes",
   "lat": 4.2844,
   "lng": -74.8142,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 29478
 },
 {
   "city": "Uithoorn",
   "lat": 52.2422,
   "lng": 4.825,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 29478
 },
 {
   "city": "Escárcega",
   "lat": 18.6067,
   "lng": -90.7344,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 29477
 },
 {
   "city": "Saalfeld",
   "lat": 50.6506,
   "lng": 11.3542,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 29457
 },
 {
   "city": "Juchitepec",
   "lat": 19.0997,
   "lng": -98.8792,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 29436
 },
 {
   "city": "Krimpen aan den IJssel",
   "lat": 51.92,
   "lng": 4.6,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 29376
 },
 {
   "city": "Ra’s al ‘Ayn",
   "lat": 36.8503,
   "lng": 40.0706,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 29347
 },
 {
   "city": "Gyula",
   "lat": 46.65,
   "lng": 21.2828,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 29308
 },
 {
   "city": "Kiskunfélegyháza",
   "lat": 46.705,
   "lng": 19.85,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 29306
 },
 {
   "city": "Riihimäki",
   "lat": 60.7333,
   "lng": 24.7667,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 29269
 },
 {
   "city": "Quivicán",
   "lat": 22.8247,
   "lng": -82.3558,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 29253
 },
 {
   "city": "Güstrow",
   "lat": 53.7939,
   "lng": 12.1764,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 29241
 },
 {
   "city": "Fundão",
   "lat": 40.1333,
   "lng": -7.5,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 29213
 },
 {
   "city": "Cañada de Gómez",
   "lat": -32.8167,
   "lng": -61.4,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 29205
 },
 {
   "city": "Diemen",
   "lat": 52.3439,
   "lng": 4.9625,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 29196
 },
 {
   "city": "Zapotiltic",
   "lat": 19.627,
   "lng": -103.417,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 29190
 },
 {
   "city": "Friedberg",
   "lat": 50.3353,
   "lng": 8.755,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 29180
 },
 {
   "city": "Svendborg",
   "lat": 55.0704,
   "lng": 10.6167,
   "country": "Denmark",
   "iso2": "DK",
   "iso3": "DNK",
   "capital": "minor",
   "population": 29180
 },
 {
   "city": "Aipe",
   "lat": 3.2219,
   "lng": -75.2375,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 29177
 },
 {
   "city": "San Fernando",
   "lat": 24.8504,
   "lng": -98.16,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 29171
 },
 {
   "city": "Ath",
   "lat": 50.6311,
   "lng": 3.7769,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 29164
 },
 {
   "city": "Anadia",
   "lat": 40.4333,
   "lng": -8.4333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 29150
 },
 {
   "city": "Landsberg",
   "lat": 48.0528,
   "lng": 10.8689,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 29132
 },
 {
   "city": "Sopó",
   "lat": 4.9081,
   "lng": -73.9403,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 29120
 },
 {
   "city": "San Cristóbal",
   "lat": 22.7169,
   "lng": -83.0511,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 29119
 },
 {
   "city": "Moñitos",
   "lat": 9.2461,
   "lng": -76.1286,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 29117
 },
 {
   "city": "Primero de Enero",
   "lat": 21.9453,
   "lng": -78.4189,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 29117
 },
 {
   "city": "Ozumba",
   "lat": 19.0392,
   "lng": -98.7936,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 29114
 },
 {
   "city": "Northeim",
   "lat": 51.7067,
   "lng": 10.0011,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 29107
 },
 {
   "city": "Şūrān",
   "lat": 35.2897,
   "lng": 36.7433,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 29100
 },
 {
   "city": "Boxmeer",
   "lat": 51.6483,
   "lng": 5.9444,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 29065
 },
 {
   "city": "Nouna",
   "lat": 12.7329,
   "lng": -3.8622,
   "country": "Burkina Faso",
   "iso2": "BF",
   "iso3": "BFA",
   "capital": "minor",
   "population": 29048
 },
 {
   "city": "Benavente",
   "lat": 38.9833,
   "lng": -8.8167,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 29019
 },
 {
   "city": "Reforma",
   "lat": 17.8658,
   "lng": -93.1472,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 29018
 },
 {
   "city": "Sint-Michielsgestel",
   "lat": 51.6433,
   "lng": 5.3586,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 28991
 },
 {
   "city": "Nentón",
   "lat": 15.8012,
   "lng": -91.7552,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 28983
 },
 {
   "city": "La Dorada",
   "lat": 0.3436,
   "lng": -76.9108,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 28982
 },
 {
   "city": "Villa Comaltitlán",
   "lat": 15.2167,
   "lng": -92.5667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 28961
 },
 {
   "city": "Tondela",
   "lat": 40.5167,
   "lng": -8.0833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 28946
 },
 {
   "city": "Ban Phai",
   "lat": 16.073,
   "lng": 102.7362,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 28913
 },
 {
   "city": "Salihli",
   "lat": 38.4811,
   "lng": 28.1392,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 28909
 },
 {
   "city": "La Calera",
   "lat": 4.7197,
   "lng": -73.97,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 28908
 },
 {
   "city": "Winterswijk",
   "lat": 51.9667,
   "lng": 6.7167,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 28903
 },
 {
   "city": "Brodnica",
   "lat": 53.25,
   "lng": 19.4,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 28880
 },
 {
   "city": "Schwandorf",
   "lat": 49.3236,
   "lng": 12.0993,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 28828
 },
 {
   "city": "Caicedonia",
   "lat": 4.3347,
   "lng": -75.8281,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 28825
 },
 {
   "city": "Höxter",
   "lat": 51.7667,
   "lng": 9.3667,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 28824
 },
 {
   "city": "Hirado",
   "lat": 33.3681,
   "lng": 129.5539,
   "country": "Japan",
   "iso2": "JP",
   "iso3": "JPN",
   "capital": "minor",
   "population": 28822
 },
 {
   "city": "Krotoszyn",
   "lat": 51.697,
   "lng": 17.4357,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 28804
 },
 {
   "city": "Carpentras",
   "lat": 44.0558,
   "lng": 5.0489,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 28798
 },
 {
   "city": "Hatonuevo",
   "lat": 11.0672,
   "lng": -72.7631,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 28671
 },
 {
   "city": "San Salvador",
   "lat": 20.2833,
   "lng": -99.0153,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 28637
 },
 {
   "city": "Pabellón de Arteaga",
   "lat": 22.15,
   "lng": -102.2667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 28633
 },
 {
   "city": "Byaroza",
   "lat": 52.5333,
   "lng": 24.9825,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 28619
 },
 {
   "city": "San Carlos",
   "lat": 8.7944,
   "lng": -75.6994,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 28597
 },
 {
   "city": "Dieppe",
   "lat": 49.92,
   "lng": 1.08,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 28561
 },
 {
   "city": "Culemborg",
   "lat": 51.95,
   "lng": 5.2333,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 28555
 },
 {
   "city": "Schwelm",
   "lat": 51.2904,
   "lng": 7.2972,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 28542
 },
 {
   "city": "Baradero",
   "lat": -33.8,
   "lng": -59.5167,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 28537
 },
 {
   "city": "Isnos",
   "lat": 1.9289,
   "lng": -76.2158,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 28530
 },
 {
   "city": "Soissons",
   "lat": 49.3817,
   "lng": 3.3236,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 28522
 },
 {
   "city": "Nivelles",
   "lat": 50.5964,
   "lng": 4.3236,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 28521
 },
 {
   "city": "Dalfsen",
   "lat": 52.5031,
   "lng": 6.2592,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 28499
 },
 {
   "city": "Heerenveen",
   "lat": 52.95,
   "lng": 5.9333,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 28497
 },
 {
   "city": "Lillehammer",
   "lat": 61.1146,
   "lng": 10.4674,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 28493
 },
 {
   "city": "Rendsburg",
   "lat": 54.3044,
   "lng": 9.6644,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 28470
 },
 {
   "city": "Venezuela",
   "lat": 21.7511,
   "lng": -78.7792,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 28470
 },
 {
   "city": "Coyaima",
   "lat": 3.7975,
   "lng": -75.1939,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 28443
 },
 {
   "city": "Tha Yang",
   "lat": 12.9658,
   "lng": 99.8924,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 28437
 },
 {
   "city": "Raseborg",
   "lat": 59.975,
   "lng": 23.4361,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 28405
 },
 {
   "city": "Chortkiv",
   "lat": 49.0167,
   "lng": 25.8,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 28393
 },
 {
   "city": "Toli",
   "lat": 45.9313,
   "lng": 83.6039,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 28378
 },
 {
   "city": "Ciro Redondo",
   "lat": 22.0189,
   "lng": -78.7031,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 28370
 },
 {
   "city": "Waddinxveen",
   "lat": 52.0333,
   "lng": 4.6333,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 28316
 },
 {
   "city": "Guamal",
   "lat": 9.1442,
   "lng": -74.2236,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 28277
 },
 {
   "city": "Alga",
   "lat": 49.9032,
   "lng": 57.335,
   "country": "Kazakhstan",
   "iso2": "KZ",
   "iso3": "KAZ",
   "capital": "minor",
   "population": 28267
 },
 {
   "city": "Carbonia",
   "lat": 39.1668,
   "lng": 8.522,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 28265
 },
 {
   "city": "Las Rosas",
   "lat": 16.3556,
   "lng": -92.3672,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 28261
 },
 {
   "city": "Gusev",
   "lat": 54.5922,
   "lng": 22.1997,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 28257
 },
 {
   "city": "Bad Neuenahr-Ahrweiler",
   "lat": 50.5447,
   "lng": 7.1133,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 28251
 },
 {
   "city": "Bardaskan",
   "lat": 35.2631,
   "lng": 57.9722,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 28233
 },
 {
   "city": "Khust",
   "lat": 48.1814,
   "lng": 23.2978,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 28206
 },
 {
   "city": "Zacoalco de Torres",
   "lat": 20.2333,
   "lng": -103.5833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 28205
 },
 {
   "city": "Gyöngyös",
   "lat": 47.7833,
   "lng": 19.9333,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 28179
 },
 {
   "city": "Guma",
   "lat": 37.6168,
   "lng": 78.2809,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 28163
 },
 {
   "city": "Circasia",
   "lat": 4.62,
   "lng": -75.6347,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 28162
 },
 {
   "city": "Warin Chamrap",
   "lat": 15.2008,
   "lng": 104.8612,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 28154
 },
 {
   "city": "Meißen",
   "lat": 51.1636,
   "lng": 13.4775,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 28153
 },
 {
   "city": "Čapljina",
   "lat": 43.11,
   "lng": 17.7,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 28122
 },
 {
   "city": "Brunssum",
   "lat": 50.95,
   "lng": 5.9667,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 28103
 },
 {
   "city": "Khulm",
   "lat": 36.6833,
   "lng": 67.6833,
   "country": "Afghanistan",
   "iso2": "AF",
   "iso3": "AFG",
   "capital": "minor",
   "population": 28078
 },
 {
   "city": "Dajabón",
   "lat": 19.5667,
   "lng": -71.71,
   "country": "Dominican Republic",
   "iso2": "DO",
   "iso3": "DOM",
   "capital": "minor",
   "population": 28071
 },
 {
   "city": "Esztergom",
   "lat": 47.7856,
   "lng": 18.7403,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 28026
 },
 {
   "city": "Ajka",
   "lat": 47.1006,
   "lng": 17.5522,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 27995
 },
 {
   "city": "Lučenec",
   "lat": 48.3314,
   "lng": 19.6708,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 27991
 },
 {
   "city": "San Martín de los Andes",
   "lat": -40.1667,
   "lng": -71.35,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 27956
 },
 {
   "city": "Khmilnyk",
   "lat": 49.55,
   "lng": 27.9667,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 27941
 },
 {
   "city": "Nochistlán de Mejía",
   "lat": 21.3642,
   "lng": -102.8464,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 27932
 },
 {
   "city": "Emmendingen",
   "lat": 48.1214,
   "lng": 7.8492,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 27882
 },
 {
   "city": "Quiroga",
   "lat": 19.6638,
   "lng": -101.524,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 27862
 },
 {
   "city": "Villa Luvianos",
   "lat": 18.92,
   "lng": -100.2983,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 27860
 },
 {
   "city": "Sabaneta",
   "lat": 8.7522,
   "lng": -69.9325,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 27850
 },
 {
   "city": "Salinas Victoria",
   "lat": 25.9667,
   "lng": -100.3,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 27848
 },
 {
   "city": "Zolotonosha",
   "lat": 49.6833,
   "lng": 32.0333,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 27847
 },
 {
   "city": "Uchturpan",
   "lat": 41.2136,
   "lng": 79.2319,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 27836
 },
 {
   "city": "Imatra",
   "lat": 61.1931,
   "lng": 28.7764,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 27835
 },
 {
   "city": "Kętrzyn",
   "lat": 54.0833,
   "lng": 21.3833,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 27827
 },
 {
   "city": "Vyshhorod",
   "lat": 50.5833,
   "lng": 30.5,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 27825
 },
 {
   "city": "Tlalpujahua de Rayón",
   "lat": 19.8052,
   "lng": -100.1741,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 27788
 },
 {
   "city": "İnegöl",
   "lat": 40.0806,
   "lng": 29.5097,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 27777
 },
 {
   "city": "Viñales",
   "lat": 22.6153,
   "lng": -83.7158,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 27771
 },
 {
   "city": "Soledad de Doblado",
   "lat": 19.0447,
   "lng": -96.4233,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 27770
 },
 {
   "city": "Fūman",
   "lat": 37.2239,
   "lng": 49.3125,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 27763
 },
 {
   "city": "Peniche",
   "lat": 39.35,
   "lng": -9.3667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 27753
 },
 {
   "city": "Örnsköldsvik",
   "lat": 63.294,
   "lng": 18.7122,
   "country": "Sweden",
   "iso2": "SE",
   "iso3": "SWE",
   "capital": "minor",
   "population": 27749
 },
 {
   "city": "Gabasumdo",
   "lat": 35.2554,
   "lng": 100.5693,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 27742
 },
 {
   "city": "Kongsberg",
   "lat": 59.665,
   "lng": 9.6464,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 27694
 },
 {
   "city": "Piešťany",
   "lat": 48.5833,
   "lng": 17.8333,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 27681
 },
 {
   "city": "Argelia",
   "lat": 2.2558,
   "lng": -77.2492,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 27670
 },
 {
   "city": "Ban Chang",
   "lat": 12.7209,
   "lng": 101.0669,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 27668
 },
 {
   "city": "Atlautla",
   "lat": 19,
   "lng": -98.7167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 27663
 },
 {
   "city": "Catemaco",
   "lat": 18.4167,
   "lng": -95.1167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 27615
 },
 {
   "city": "Contla",
   "lat": 19.3333,
   "lng": -98.1667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 27610
 },
 {
   "city": "Soignies",
   "lat": 50.5667,
   "lng": 4.0667,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 27603
 },
 {
   "city": "Söke",
   "lat": 37.7482,
   "lng": 27.4061,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 27558
 },
 {
   "city": "Zaltbommel",
   "lat": 51.8,
   "lng": 5.25,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 27549
 },
 {
   "city": "Szentendre",
   "lat": 47.6733,
   "lng": 19.0725,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 27534
 },
 {
   "city": "Siverek",
   "lat": 37.75,
   "lng": 39.3167,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 27527
 },
 {
   "city": "Abarkūh",
   "lat": 31.1289,
   "lng": 53.2822,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 27524
 },
 {
   "city": "Hulst",
   "lat": 51.3158,
   "lng": 4.0539,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 27524
 },
 {
   "city": "Orosháza",
   "lat": 46.5678,
   "lng": 20.6428,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 27492
 },
 {
   "city": "Veendam",
   "lat": 53.1,
   "lng": 6.8667,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 27491
 },
 {
   "city": "Zakopane",
   "lat": 49.2994,
   "lng": 19.9519,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 27490
 },
 {
   "city": "Supía",
   "lat": 5.4506,
   "lng": -75.6514,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 27489
 },
 {
   "city": "Nunspeet",
   "lat": 52.3333,
   "lng": 5.7833,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 27481
 },
 {
   "city": "Tongyangdao",
   "lat": 41.7676,
   "lng": 109.9711,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 27476
 },
 {
   "city": "Ciudad Bolívar",
   "lat": 5.8494,
   "lng": -76.0203,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 27458
 },
 {
   "city": "Sola",
   "lat": 58.88,
   "lng": 5.6286,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 27457
 },
 {
   "city": "Los Reyes de Juárez",
   "lat": 18.9267,
   "lng": -97.7983,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 27454
 },
 {
   "city": "Toqsu",
   "lat": 41.5417,
   "lng": 82.604,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 27454
 },
 {
   "city": "Abasolo",
   "lat": 20.4511,
   "lng": -101.5289,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 27389
 },
 {
   "city": "Tuxpan",
   "lat": 19.5661,
   "lng": -100.4625,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 27371
 },
 {
   "city": "Gorlice",
   "lat": 49.6556,
   "lng": 21.1604,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 27357
 },
 {
   "city": "Bakhchysarai",
   "lat": 44.7528,
   "lng": 33.8608,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 27351
 },
 {
   "city": "Zempoala",
   "lat": 19.9167,
   "lng": -98.6667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 27333
 },
 {
   "city": "Castaños",
   "lat": 26.7833,
   "lng": -101.4167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 27314
 },
 {
   "city": "Cuerámaro",
   "lat": 20.6258,
   "lng": -101.6739,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 27308
 },
 {
   "city": "Arnstadt",
   "lat": 50.8342,
   "lng": 10.9464,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 27304
 },
 {
   "city": "Biłgoraj",
   "lat": 50.55,
   "lng": 22.7333,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 27290
 },
 {
   "city": "Heemstede",
   "lat": 52.3528,
   "lng": 4.62,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 27286
 },
 {
   "city": "Enna",
   "lat": 37.5667,
   "lng": 14.2667,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 27243
 },
 {
   "city": "Tire",
   "lat": 38.0833,
   "lng": 27.7333,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 27243
 },
 {
   "city": "Ixtapa",
   "lat": 16.8,
   "lng": -92.9,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 27198
 },
 {
   "city": "Garmisch-Partenkirchen",
   "lat": 47.5,
   "lng": 11.0833,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 27194
 },
 {
   "city": "Kłodzko",
   "lat": 50.4378,
   "lng": 16.6528,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 27193
 },
 {
   "city": "Çorlu",
   "lat": 41.1597,
   "lng": 27.8028,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 27187
 },
 {
   "city": "Tauramena",
   "lat": 5.0167,
   "lng": -72.75,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 27178
 },
 {
   "city": "Ixchiguán",
   "lat": 15.1642,
   "lng": -91.9333,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 27176
 },
 {
   "city": "Sibinal",
   "lat": 15.1333,
   "lng": -92.05,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 27171
 },
 {
   "city": "Vilyeyka",
   "lat": 54.4833,
   "lng": 26.9167,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 27167
 },
 {
   "city": "San Juan de Urabá",
   "lat": 8.7611,
   "lng": -76.5286,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 27149
 },
 {
   "city": "Lier",
   "lat": 59.8675,
   "lng": 10.2142,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 27118
 },
 {
   "city": "Leiderdorp",
   "lat": 52.1617,
   "lng": 4.5283,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 27109
 },
 {
   "city": "Tall Rif‘at",
   "lat": 36.4733,
   "lng": 37.0972,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 27086
 },
 {
   "city": "Szentes",
   "lat": 46.6519,
   "lng": 20.2572,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 27080
 },
 {
   "city": "Villagrán",
   "lat": 20.517,
   "lng": -100.983,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 27079
 },
 {
   "city": "Mayskiy",
   "lat": 43.6333,
   "lng": 44.0667,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 27074
 },
 {
   "city": "Klosterneuburg",
   "lat": 48.3042,
   "lng": 16.3167,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 27058
 },
 {
   "city": "Amatepec",
   "lat": 18.65,
   "lng": -100.15,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 27026
 },
 {
   "city": "Aalten",
   "lat": 51.925,
   "lng": 6.5808,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 27011
 },
 {
   "city": "Pueblo Bello",
   "lat": 10.4164,
   "lng": -73.5867,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 27007
 },
 {
   "city": "Marcos Juárez",
   "lat": -32.7,
   "lng": -62.1,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 27004
 },
 {
   "city": "Estarreja",
   "lat": 40.75,
   "lng": -8.5667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 26997
 },
 {
   "city": "Rapperswil-Jona",
   "lat": 47.2286,
   "lng": 8.8317,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 26989
 },
 {
   "city": "Nava",
   "lat": 28.4214,
   "lng": -100.7675,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 26963
 },
 {
   "city": "Zuitou",
   "lat": 34.0622,
   "lng": 107.3127,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 26948
 },
 {
   "city": "Werkendam",
   "lat": 51.8097,
   "lng": 4.8928,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 26940
 },
 {
   "city": "Rambouillet",
   "lat": 48.6444,
   "lng": 1.8308,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 26933
 },
 {
   "city": "Sabanilla",
   "lat": 17.2833,
   "lng": -92.55,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 26921
 },
 {
   "city": "Ermelo",
   "lat": 52.3,
   "lng": 5.6331,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 26858
 },
 {
   "city": "Ružomberok",
   "lat": 49.0786,
   "lng": 19.3083,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 26854
 },
 {
   "city": "Chíos",
   "lat": 38.3725,
   "lng": 26.1375,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 26850
 },
 {
   "city": "Majagua",
   "lat": 21.9244,
   "lng": -78.9906,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 26830
 },
 {
   "city": "Bafoulabé",
   "lat": 13.8064,
   "lng": -10.8322,
   "country": "Mali",
   "iso2": "ML",
   "iso3": "MLI",
   "capital": "minor",
   "population": 26823
 },
 {
   "city": "Bergerac",
   "lat": 44.85,
   "lng": 0.48,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 26823
 },
 {
   "city": "Geldermalsen",
   "lat": 51.8833,
   "lng": 5.2833,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 26818
 },
 {
   "city": "Khānābād",
   "lat": 36.6831,
   "lng": 69.1636,
   "country": "Afghanistan",
   "iso2": "AF",
   "iso3": "AFG",
   "capital": "minor",
   "population": 26803
 },
 {
   "city": "Fortul",
   "lat": 6.7931,
   "lng": -71.7714,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 26798
 },
 {
   "city": "Iglesias",
   "lat": 39.3103,
   "lng": 8.5372,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 26784
 },
 {
   "city": "Qarah Ẕīā’ od Dīn",
   "lat": 38.8914,
   "lng": 45.0256,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 26767
 },
 {
   "city": "Morales",
   "lat": 2.7603,
   "lng": -76.6339,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 26707
 },
 {
   "city": "Los Córdobas",
   "lat": 8.8953,
   "lng": -76.3547,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 26705
 },
 {
   "city": "Kiruna",
   "lat": 67.8494,
   "lng": 20.2544,
   "country": "Sweden",
   "iso2": "SE",
   "iso3": "SWE",
   "capital": "minor",
   "population": 26703
 },
 {
   "city": "Lamego",
   "lat": 41.0833,
   "lng": -7.8667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 26691
 },
 {
   "city": "Betong",
   "lat": 5.7731,
   "lng": 101.0725,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 26640
 },
 {
   "city": "Champotón",
   "lat": 19.35,
   "lng": -90.7167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 26636
 },
 {
   "city": "Brzozów",
   "lat": 49.6953,
   "lng": 22.0194,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 26615
 },
 {
   "city": "Saumur",
   "lat": 47.26,
   "lng": -0.0769,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 26599
 },
 {
   "city": "Puerto Colombia",
   "lat": 10.9922,
   "lng": -74.9528,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 26595
 },
 {
   "city": "San Benito Abad",
   "lat": 8.9272,
   "lng": -75.0264,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 26595
 },
 {
   "city": "Sens",
   "lat": 48.1975,
   "lng": 3.2877,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 26586
 },
 {
   "city": "Kiskunhalas",
   "lat": 46.4319,
   "lng": 19.4883,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 26584
 },
 {
   "city": "Lanquín",
   "lat": 15.5758,
   "lng": -89.9811,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 26551
 },
 {
   "city": "San Alberto",
   "lat": 7.7592,
   "lng": -73.3931,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 26551
 },
 {
   "city": "Jászberény",
   "lat": 47.5,
   "lng": 19.9167,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 26540
 },
 {
   "city": "La Unión",
   "lat": -40.2952,
   "lng": -73.0822,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 26517
 },
 {
   "city": "Lauf",
   "lat": 49.5103,
   "lng": 11.2772,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 26515
 },
 {
   "city": "San Antonio del Sur",
   "lat": 20.0569,
   "lng": -74.8078,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 26509
 },
 {
   "city": "Vught",
   "lat": 51.65,
   "lng": 5.3,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 26396
 },
 {
   "city": "Balboa",
   "lat": 2.0406,
   "lng": -77.2164,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 26384
 },
 {
   "city": "Jaltenco",
   "lat": 19.7511,
   "lng": -99.0931,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 26359
 },
 {
   "city": "Pensilvania",
   "lat": 5.384,
   "lng": -75.1612,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 26342
 },
 {
   "city": "Ondokuzmayıs",
   "lat": 41.4944,
   "lng": 36.0789,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 26337
 },
 {
   "city": "Tehuipango",
   "lat": 18.5167,
   "lng": -97.05,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 26322
 },
 {
   "city": "Sangerhausen",
   "lat": 51.4667,
   "lng": 11.3,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 26297
 },
 {
   "city": "Az Zabadānī",
   "lat": 33.7247,
   "lng": 36.1003,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 26285
 },
 {
   "city": "Aş Şanamayn",
   "lat": 33.0711,
   "lng": 36.1842,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 26268
 },
 {
   "city": "Semīrom",
   "lat": 31.4142,
   "lng": 51.5694,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 26260
 },
 {
   "city": "Paz de Ariporo",
   "lat": 5.8811,
   "lng": -71.8917,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 26237
 },
 {
   "city": "Buesaco",
   "lat": 1.3847,
   "lng": -77.1564,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 26229
 },
 {
   "city": "Wassenaar",
   "lat": 52.1453,
   "lng": 4.4006,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 26211
 },
 {
   "city": "Montemor-o-Velho",
   "lat": 40.1667,
   "lng": -8.6833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 26171
 },
 {
   "city": "Tavira",
   "lat": 37.1309,
   "lng": -7.6506,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 26167
 },
 {
   "city": "Kluczbork",
   "lat": 50.9833,
   "lng": 18.2167,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 26164
 },
 {
   "city": "Jarocin",
   "lat": 51.9667,
   "lng": 17.5,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 26155
 },
 {
   "city": "Oisterwijk",
   "lat": 51.5833,
   "lng": 5.2,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 26140
 },
 {
   "city": "Khashuri",
   "lat": 41.9975,
   "lng": 43.5986,
   "country": "Georgia",
   "iso2": "GE",
   "iso3": "GEO",
   "capital": "minor",
   "population": 26135
 },
 {
   "city": "Perevalsk",
   "lat": 48.4333,
   "lng": 38.8167,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 26132
 },
 {
   "city": "Toktogul",
   "lat": 41.8826,
   "lng": 72.9372,
   "country": "Kyrgyzstan",
   "iso2": "KG",
   "iso3": "KGZ",
   "capital": "minor",
   "population": 26115
 },
 {
   "city": "Tuxpan",
   "lat": 21.8667,
   "lng": -105.45,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 26115
 },
 {
   "city": "Kathu",
   "lat": 7.9112,
   "lng": 98.3475,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 26078
 },
 {
   "city": "Mahates",
   "lat": 10.2322,
   "lng": -75.1911,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 26075
 },
 {
   "city": "Odemira",
   "lat": 37.5833,
   "lng": -8.6333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 26066
 },
 {
   "city": "Dongen",
   "lat": 51.6258,
   "lng": 4.9433,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 26051
 },
 {
   "city": "Chuimatan",
   "lat": 35.7166,
   "lng": 102.8771,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 26044
 },
 {
   "city": "Eidsvoll",
   "lat": 60.3475,
   "lng": 11.2508,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 26031
 },
 {
   "city": "Świecie",
   "lat": 53.4167,
   "lng": 18.4333,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 26026
 },
 {
   "city": "Heppenheim",
   "lat": 49.6415,
   "lng": 8.645,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 26023
 },
 {
   "city": "Diapaga",
   "lat": 12.0667,
   "lng": 1.7833,
   "country": "Burkina Faso",
   "iso2": "BF",
   "iso3": "BFA",
   "capital": "minor",
   "population": 26013
 },
 {
   "city": "Istmina",
   "lat": 5.1633,
   "lng": -76.6867,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 25981
 },
 {
   "city": "Puerto Píritu",
   "lat": 10.0667,
   "lng": -65.05,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 25981
 },
 {
   "city": "Dolores",
   "lat": -36.3132,
   "lng": -57.6792,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 25940
 },
 {
   "city": "Santa Ana",
   "lat": 9.3194,
   "lng": -74.5706,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 25938
 },
 {
   "city": "Pfaffenhofen",
   "lat": 48.5333,
   "lng": 11.5167,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 25917
 },
 {
   "city": "Kulmbach",
   "lat": 50.1,
   "lng": 11.4333,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 25915
 },
 {
   "city": "Köthen",
   "lat": 51.7511,
   "lng": 11.9779,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 25911
 },
 {
   "city": "San Martín",
   "lat": 3.6969,
   "lng": -73.6986,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 25902
 },
 {
   "city": "Colotenango",
   "lat": 15.4054,
   "lng": -91.7156,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 25900
 },
 {
   "city": "Beuningen",
   "lat": 51.8667,
   "lng": 5.7667,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 25882
 },
 {
   "city": "Marmara Ereğlisi",
   "lat": 40.9697,
   "lng": 27.9553,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 25873
 },
 {
   "city": "Sankt Wendel",
   "lat": 49.4667,
   "lng": 7.1667,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 25862
 },
 {
   "city": "San Juan Ixcoy",
   "lat": 15.6,
   "lng": -91.45,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 25846
 },
 {
   "city": "Montbéliard",
   "lat": 47.51,
   "lng": 6.8,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 25809
 },
 {
   "city": "Nechí",
   "lat": 8.0958,
   "lng": -74.775,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 25790
 },
 {
   "city": "Ceylanpınar",
   "lat": 36.8461,
   "lng": 40.0489,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 25781
 },
 {
   "city": "Tholen",
   "lat": 51.5847,
   "lng": 4.1211,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 25780
 },
 {
   "city": "Alençon",
   "lat": 48.4306,
   "lng": 0.0931,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 25775
 },
 {
   "city": "Yany Kapu",
   "lat": 45.9675,
   "lng": 33.8003,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 25769
 },
 {
   "city": "Lourinhã",
   "lat": 39.25,
   "lng": -9.3167,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 25735
 },
 {
   "city": "Néa Filadélfeia",
   "lat": 38.035,
   "lng": 23.7381,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 25734
 },
 {
   "city": "Helmstedt",
   "lat": 52.2281,
   "lng": 11.0106,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 25728
 },
 {
   "city": "Vierzon",
   "lat": 47.2225,
   "lng": 2.0694,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 25725
 },
 {
   "city": "Huejotzingo",
   "lat": 19.1594,
   "lng": -98.4073,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 25684
 },
 {
   "city": "Haisyn",
   "lat": 48.8094,
   "lng": 29.3906,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 25672
 },
 {
   "city": "Santa Lucia La Reforma",
   "lat": 15.1333,
   "lng": -91.2333,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 25668
 },
 {
   "city": "Lüleburgaz",
   "lat": 41.4056,
   "lng": 27.3569,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 25667
 },
 {
   "city": "Batabanó",
   "lat": 22.7167,
   "lng": -82.2833,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 25664
 },
 {
   "city": "San Lucas Tolimán",
   "lat": 14.6333,
   "lng": -91.1333,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 25650
 },
 {
   "city": "Yolombó",
   "lat": 6.5978,
   "lng": -75.0122,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 25647
 },
 {
   "city": "Jalpan",
   "lat": 21.2167,
   "lng": -99.4725,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 25550
 },
 {
   "city": "Solano",
   "lat": 0.6983,
   "lng": -75.2539,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 25546
 },
 {
   "city": "Aurillac",
   "lat": 44.9261,
   "lng": 2.4406,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 25531
 },
 {
   "city": "Tougué",
   "lat": 11.44,
   "lng": -11.67,
   "country": "Guinea",
   "iso2": "GN",
   "iso3": "GIN",
   "capital": "minor",
   "population": 25531
 },
 {
   "city": "Topoľčany",
   "lat": 48.55,
   "lng": 18.1833,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 25492
 },
 {
   "city": "Voorschoten",
   "lat": 52.125,
   "lng": 4.445,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 25479
 },
 {
   "city": "Siófok",
   "lat": 46.9,
   "lng": 18.05,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 25461
 },
 {
   "city": "Vistahermosa",
   "lat": 3.1239,
   "lng": -73.7514,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 25461
 },
 {
   "city": "San José",
   "lat": 1.6967,
   "lng": -78.2453,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 25433
 },
 {
   "city": "Limonar",
   "lat": 22.9561,
   "lng": -81.4086,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 25421
 },
 {
   "city": "Vynohradiv",
   "lat": 48.1397,
   "lng": 23.0331,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 25403
 },
 {
   "city": "Salamína",
   "lat": 37.9649,
   "lng": 23.4993,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 25370
 },
 {
   "city": "Duiven",
   "lat": 51.9472,
   "lng": 6.0211,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 25332
 },
 {
   "city": "Schleswig",
   "lat": 54.5153,
   "lng": 9.5697,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 25322
 },
 {
   "city": "Samtredia",
   "lat": 42.1625,
   "lng": 42.3417,
   "country": "Georgia",
   "iso2": "GE",
   "iso3": "GEO",
   "capital": "minor",
   "population": 25318
 },
 {
   "city": "Groß-Gerau",
   "lat": 49.9214,
   "lng": 8.4818,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 25302
 },
 {
   "city": "Étampes",
   "lat": 48.4343,
   "lng": 2.1615,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 25287
 },
 {
   "city": "Rottweil",
   "lat": 48.1681,
   "lng": 8.6247,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 25274
 },
 {
   "city": "La Unión",
   "lat": 1.6053,
   "lng": -77.1297,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 25270
 },
 {
   "city": "Akşehir",
   "lat": 38.3592,
   "lng": 31.4164,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 25269
 },
 {
   "city": "Chocontá",
   "lat": 5.1467,
   "lng": -73.6825,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 25257
 },
 {
   "city": "Albergaria-a-Velha",
   "lat": 40.6936,
   "lng": -8.4806,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 25252
 },
 {
   "city": "Miahuatlán",
   "lat": 18.5667,
   "lng": -97.4333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 25228
 },
 {
   "city": "Sandoná",
   "lat": 1.2847,
   "lng": -77.4711,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 25220
 },
 {
   "city": "Sastamala",
   "lat": 61.3417,
   "lng": 22.9083,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 25220
 },
 {
   "city": "Maaseik",
   "lat": 51.1019,
   "lng": 5.7856,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 25201
 },
 {
   "city": "Morozovsk",
   "lat": 48.35,
   "lng": 41.8333,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 25198
 },
 {
   "city": "San Lucas Sacatepéquez",
   "lat": 14.6095,
   "lng": -90.6568,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 25198
 },
 {
   "city": "Şaydnāyā",
   "lat": 33.6958,
   "lng": 36.3775,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 25194
 },
 {
   "city": "Béthune",
   "lat": 50.5303,
   "lng": 2.6408,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 25193
 },
 {
   "city": "Raahe",
   "lat": 64.6847,
   "lng": 24.4792,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 25165
 },
 {
   "city": "Saintes",
   "lat": 45.7464,
   "lng": -0.6333,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 25148
 },
 {
   "city": "Santa María Tonameca",
   "lat": 15.7458,
   "lng": -96.5472,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 25130
 },
 {
   "city": "Steenbergen",
   "lat": 51.5833,
   "lng": 4.25,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 25054
 },
 {
   "city": "Wolfsberg",
   "lat": 46.8419,
   "lng": 14.8408,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 25035
 },
 {
   "city": "Sliedrecht",
   "lat": 51.8222,
   "lng": 4.7744,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 25026
 },
 {
   "city": "La Blanca",
   "lat": 14.5791,
   "lng": -92.1414,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 25000
 },
 {
   "city": "Shaqlāwah",
   "lat": 36.3964,
   "lng": 44.3436,
   "country": "Iraq",
   "iso2": "IQ",
   "iso3": "IRQ",
   "capital": "minor",
   "population": 25000
 },
 {
   "city": "Sultepec",
   "lat": 18.8667,
   "lng": -99.95,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 24986
 },
 {
   "city": "Stein",
   "lat": 50.9679,
   "lng": 5.7652,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 24961
 },
 {
   "city": "Wałcz",
   "lat": 53.2667,
   "lng": 16.4667,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 24949
 },
 {
   "city": "Cuijk",
   "lat": 51.7269,
   "lng": 5.8794,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 24931
 },
 {
   "city": "Pinillos",
   "lat": 8.915,
   "lng": -74.4619,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 24923
 },
 {
   "city": "Elefsína",
   "lat": 38.0414,
   "lng": 23.5453,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 24910
 },
 {
   "city": "Hunucmá",
   "lat": 21.0153,
   "lng": -89.8744,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 24910
 },
 {
   "city": "Kazincbarcika",
   "lat": 48.2531,
   "lng": 20.6456,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 24905
 },
 {
   "city": "Pezinok",
   "lat": 48.2667,
   "lng": 17.2667,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 24900
 },
 {
   "city": "Ixhuatlancillo",
   "lat": 18.9,
   "lng": -97.15,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 24896
 },
 {
   "city": "Socorro",
   "lat": 6.4603,
   "lng": -73.27,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 24895
 },
 {
   "city": "Sabanagrande",
   "lat": 10.7903,
   "lng": -74.7556,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 24880
 },
 {
   "city": "Pavlovsk",
   "lat": 50.45,
   "lng": 40.0667,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 24858
 },
 {
   "city": "Vichy",
   "lat": 46.1278,
   "lng": 3.4267,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 24854
 },
 {
   "city": "Colón",
   "lat": -32.2241,
   "lng": -58.1419,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 24835
 },
 {
   "city": "Muret",
   "lat": 43.4611,
   "lng": 1.3267,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 24813
 },
 {
   "city": "Madaoua",
   "lat": 14.0762,
   "lng": 5.9586,
   "country": "Niger",
   "iso2": "NE",
   "iso3": "NER",
   "capital": "minor",
   "population": 24804
 },
 {
   "city": "Lincoln",
   "lat": -34.85,
   "lng": -61.5167,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 24798
 },
 {
   "city": "Baarn",
   "lat": 52.2125,
   "lng": 5.2861,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 24767
 },
 {
   "city": "Farafangana",
   "lat": -22.8166,
   "lng": 47.8332,
   "country": "Madagascar",
   "iso2": "MG",
   "iso3": "MDG",
   "capital": "minor",
   "population": 24764
 },
 {
   "city": "Ziketan",
   "lat": 35.5885,
   "lng": 99.9866,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 24758
 },
 {
   "city": "Jamay",
   "lat": 20.2944,
   "lng": -102.7097,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 24753
 },
 {
   "city": "Bad Oldesloe",
   "lat": 53.8117,
   "lng": 10.3742,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 24744
 },
 {
   "city": "Villanueva",
   "lat": 4.6087,
   "lng": -72.9288,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 24740
 },
 {
   "city": "Harstad",
   "lat": 68.7988,
   "lng": 16.5393,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 24738
 },
 {
   "city": "Zumpango del Río",
   "lat": 17.65,
   "lng": -99.5,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 24719
 },
 {
   "city": "Delfzijl",
   "lat": 53.3333,
   "lng": 6.9167,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 24716
 },
 {
   "city": "Laon",
   "lat": 49.5639,
   "lng": 3.6244,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 24710
 },
 {
   "city": "Algeciras",
   "lat": 2.5219,
   "lng": -75.3144,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 24708
 },
 {
   "city": "Ma‘bar",
   "lat": 14.7939,
   "lng": 44.2936,
   "country": "Yemen",
   "iso2": "YE",
   "iso3": "YEM",
   "capital": "minor",
   "population": 24707
 },
 {
   "city": "Seia",
   "lat": 40.422,
   "lng": -7.7024,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 24702
 },
 {
   "city": "San Martín Sacatepéquez",
   "lat": 14.8246,
   "lng": -91.6425,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 24700
 },
 {
   "city": "Santa Rosa",
   "lat": 10.4456,
   "lng": -75.3686,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 24694
 },
 {
   "city": "Olpe",
   "lat": 51.0289,
   "lng": 7.8514,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 24688
 },
 {
   "city": "Monte Cristi",
   "lat": 19.85,
   "lng": -71.65,
   "country": "Dominican Republic",
   "iso2": "DO",
   "iso3": "DOM",
   "capital": "minor",
   "population": 24674
 },
 {
   "city": "Leoben",
   "lat": 47.3817,
   "lng": 15.0972,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 24645
 },
 {
   "city": "Krems an der Donau",
   "lat": 48.4167,
   "lng": 15.6167,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 24610
 },
 {
   "city": "Shangtianba",
   "lat": 28.039,
   "lng": 103.8584,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 24606
 },
 {
   "city": "Trebišov",
   "lat": 48.6333,
   "lng": 21.7167,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 24587
 },
 {
   "city": "Calamar",
   "lat": 10.25,
   "lng": -74.9158,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 24573
 },
 {
   "city": "Carlos A. Carrillo",
   "lat": 18.3667,
   "lng": -95.75,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 24565
 },
 {
   "city": "La Huerta",
   "lat": 19.4833,
   "lng": -104.65,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 24563
 },
 {
   "city": "Takhli",
   "lat": 15.2667,
   "lng": 100.35,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 24563
 },
 {
   "city": "El Retorno",
   "lat": 2.3306,
   "lng": -72.6278,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 24562
 },
 {
   "city": "Zernograd",
   "lat": 46.85,
   "lng": 40.3,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 24561
 },
 {
   "city": "Valdivia",
   "lat": 7.1636,
   "lng": -75.4392,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 24538
 },
 {
   "city": "Ciudad Altamirano",
   "lat": 18.3583,
   "lng": -100.6667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 24533
 },
 {
   "city": "Wągrowiec",
   "lat": 52.8,
   "lng": 17.2,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 24529
 },
 {
   "city": "Libourne",
   "lat": 44.92,
   "lng": -0.24,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 24511
 },
 {
   "city": "Mahdīshahr",
   "lat": 35.7108,
   "lng": 53.3539,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 24485
 },
 {
   "city": "Cabricán",
   "lat": 15.0768,
   "lng": -91.65,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 24474
 },
 {
   "city": "Cartaxo",
   "lat": 39.15,
   "lng": -8.7833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 24462
 },
 {
   "city": "Tocopilla",
   "lat": -22.0941,
   "lng": -70.201,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 24460
 },
 {
   "city": "Nittedal",
   "lat": 60.0731,
   "lng": 10.8722,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 24454
 },
 {
   "city": "Tamahú",
   "lat": 15.3069,
   "lng": -90.2342,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 24444
 },
 {
   "city": "Oegstgeest",
   "lat": 52.1667,
   "lng": 4.4667,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 24426
 },
 {
   "city": "Pýrgos",
   "lat": 37.6667,
   "lng": 21.4333,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 24359
 },
 {
   "city": "Puerto Guzmán",
   "lat": 0.9636,
   "lng": -76.4086,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 24355
 },
 {
   "city": "Wierden",
   "lat": 52.35,
   "lng": 6.5833,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 24351
 },
 {
   "city": "Porto de Mós",
   "lat": 39.6,
   "lng": -8.8167,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 24342
 },
 {
   "city": "La Montañita",
   "lat": 1.4792,
   "lng": -75.4361,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 24323
 },
 {
   "city": "Rodez",
   "lat": 44.3506,
   "lng": 2.575,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 24319
 },
 {
   "city": "Xinxing",
   "lat": 47.1601,
   "lng": 123.8,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 24317
 },
 {
   "city": "Čadca",
   "lat": 49.4386,
   "lng": 18.7883,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 24315
 },
 {
   "city": "Avellaneda",
   "lat": -34.6625,
   "lng": -58.3678,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 24313
 },
 {
   "city": "Oud-Beijerland",
   "lat": 51.82,
   "lng": 4.42,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 24301
 },
 {
   "city": "Raisio",
   "lat": 60.4861,
   "lng": 22.1694,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 24290
 },
 {
   "city": "Saint-Laurent-du-Maroni",
   "lat": 5.4976,
   "lng": -54.0325,
   "country": "French Guiana",
   "iso2": "GF",
   "iso3": "GUF",
   "capital": "minor",
   "population": 24287
 },
 {
   "city": "Stjørdal",
   "lat": 63.475,
   "lng": 11.1708,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 24283
 },
 {
   "city": "Saky",
   "lat": 45.1336,
   "lng": 33.5772,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 24282
 },
 {
   "city": "Haaksbergen",
   "lat": 52.1547,
   "lng": 6.7419,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 24277
 },
 {
   "city": "Nueva Paz",
   "lat": 22.7667,
   "lng": -81.75,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 24277
 },
 {
   "city": "Senftenberg",
   "lat": 51.5167,
   "lng": 14.0167,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 24275
 },
 {
   "city": "El Salto",
   "lat": 23.7823,
   "lng": -105.3585,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 24241
 },
 {
   "city": "Meiningen",
   "lat": 50.55,
   "lng": 10.4167,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 24233
 },
 {
   "city": "Waldshut-Tiengen",
   "lat": 47.6231,
   "lng": 8.2144,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 24226
 },
 {
   "city": "Donmatías",
   "lat": 6.4858,
   "lng": -75.3953,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 24201
 },
 {
   "city": "Uchquduq Shahri",
   "lat": 42.1567,
   "lng": 63.5556,
   "country": "Uzbekistan",
   "iso2": "UZ",
   "iso3": "UZB",
   "capital": "minor",
   "population": 24200
 },
 {
   "city": "Putten",
   "lat": 52.2579,
   "lng": 5.608,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 24198
 },
 {
   "city": "Gyál",
   "lat": 47.3822,
   "lng": 19.2136,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 24193
 },
 {
   "city": "Sandomierz",
   "lat": 50.6833,
   "lng": 21.75,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 24187
 },
 {
   "city": "Rathenow",
   "lat": 52.6,
   "lng": 12.3333,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 24179
 },
 {
   "city": "Krychaw",
   "lat": 53.7194,
   "lng": 31.7139,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 24170
 },
 {
   "city": "Velingrad",
   "lat": 42.0276,
   "lng": 23.9913,
   "country": "Bulgaria",
   "iso2": "BG",
   "iso3": "BGR",
   "capital": "minor",
   "population": 24147
 },
 {
   "city": "Białogard",
   "lat": 54.007,
   "lng": 15.9875,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 24146
 },
 {
   "city": "Rioblanco",
   "lat": 3.5292,
   "lng": -75.6447,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 24139
 },
 {
   "city": "Marsella",
   "lat": 4.9367,
   "lng": -75.7392,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 24131
 },
 {
   "city": "Bergama",
   "lat": 39.1228,
   "lng": 27.1783,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 24121
 },
 {
   "city": "Edremit",
   "lat": 39.5961,
   "lng": 27.0244,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 24115
 },
 {
   "city": "Frederikshavn",
   "lat": 57.4337,
   "lng": 10.5333,
   "country": "Denmark",
   "iso2": "DK",
   "iso3": "DNK",
   "capital": "minor",
   "population": 24103
 },
 {
   "city": "Cogua",
   "lat": 5.0619,
   "lng": -73.9794,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 24092
 },
 {
   "city": "Kościan",
   "lat": 52.0833,
   "lng": 16.65,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 24086
 },
 {
   "city": "Santa María Colotepec",
   "lat": 15.8833,
   "lng": -96.9167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 24076
 },
 {
   "city": "Kourou",
   "lat": 5.16,
   "lng": -52.6499,
   "country": "French Guiana",
   "iso2": "GF",
   "iso3": "GUF",
   "capital": "minor",
   "population": 24029
 },
 {
   "city": "Rimavská Sobota",
   "lat": 48.3814,
   "lng": 20.02,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 24010
 },
 {
   "city": "San Marcos",
   "lat": 11.9167,
   "lng": -86.2,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 24000
 },
 {
   "city": "Zolochiv",
   "lat": 49.8075,
   "lng": 24.9031,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 23986
 },
 {
   "city": "Solin",
   "lat": 43.5317,
   "lng": 16.4947,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 23926
 },
 {
   "city": "El Zulia",
   "lat": 7.9325,
   "lng": -72.6025,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 23921
 },
 {
   "city": "Hollola",
   "lat": 60.9886,
   "lng": 25.5128,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 23915
 },
 {
   "city": "Hajdúszoboszló",
   "lat": 47.45,
   "lng": 21.3833,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 23873
 },
 {
   "city": "Tecolutla",
   "lat": 20.4797,
   "lng": -97.01,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 23865
 },
 {
   "city": "Mirandela",
   "lat": 41.4833,
   "lng": -7.1833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 23850
 },
 {
   "city": "Tepalcatepec",
   "lat": 19.1833,
   "lng": -102.85,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 23842
 },
 {
   "city": "Honda",
   "lat": 5.2069,
   "lng": -74.7367,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 23830
 },
 {
   "city": "Paraíso",
   "lat": 18.3961,
   "lng": -93.2128,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 23830
 },
 {
   "city": "Sonneberg",
   "lat": 50.35,
   "lng": 11.1667,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 23830
 },
 {
   "city": "Svishtov",
   "lat": 43.6113,
   "lng": 25.3569,
   "country": "Bulgaria",
   "iso2": "BG",
   "iso3": "BGR",
   "capital": "minor",
   "population": 23795
 },
 {
   "city": "Goirle",
   "lat": 51.5203,
   "lng": 5.0671,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 23793
 },
 {
   "city": "Hoh Ereg",
   "lat": 41.0955,
   "lng": 111.4408,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 23776
 },
 {
   "city": "Dole",
   "lat": 47.0931,
   "lng": 5.4906,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 23770
 },
 {
   "city": "Wil",
   "lat": 47.4664,
   "lng": 9.0497,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 23768
 },
 {
   "city": "Wijk bij Duurstede",
   "lat": 51.9761,
   "lng": 5.3369,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 23762
 },
 {
   "city": "Kościerzyna",
   "lat": 54.1167,
   "lng": 17.9833,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 23744
 },
 {
   "city": "Luninyets",
   "lat": 52.25,
   "lng": 26.8,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 23734
 },
 {
   "city": "Berehove",
   "lat": 48.2025,
   "lng": 22.6375,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 23732
 },
 {
   "city": "Fria",
   "lat": 10.3804,
   "lng": -13.55,
   "country": "Guinea",
   "iso2": "GN",
   "iso3": "GIN",
   "capital": "minor",
   "population": 23729
 },
 {
   "city": "Comapa",
   "lat": 14.1114,
   "lng": -89.7497,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 23715
 },
 {
   "city": "Rishton",
   "lat": 40.3567,
   "lng": 71.2847,
   "country": "Uzbekistan",
   "iso2": "UZ",
   "iso3": "UZB",
   "capital": "minor",
   "population": 23706
 },
 {
   "city": "Salqīn",
   "lat": 36.1394,
   "lng": 36.4539,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 23700
 },
 {
   "city": "Cazones de Herrera",
   "lat": 20.7,
   "lng": -97.3,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 23675
 },
 {
   "city": "Olopa",
   "lat": 14.6833,
   "lng": -89.35,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 23668
 },
 {
   "city": "Amstetten",
   "lat": 48.1167,
   "lng": 14.8667,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 23656
 },
 {
   "city": "Salzwedel",
   "lat": 52.85,
   "lng": 11.15,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 23655
 },
 {
   "city": "Bang Sao Thong",
   "lat": 13.5812,
   "lng": 100.7957,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 23630
 },
 {
   "city": "Coronel Suárez",
   "lat": -37.4667,
   "lng": -61.9333,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 23621
 },
 {
   "city": "Koziatyn",
   "lat": 49.7167,
   "lng": 28.8333,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 23610
 },
 {
   "city": "Oldebroek",
   "lat": 52.4667,
   "lng": 5.9167,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 23598
 },
 {
   "city": "Calw",
   "lat": 48.7144,
   "lng": 8.7375,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 23590
 },
 {
   "city": "Rochefort",
   "lat": 45.9421,
   "lng": -0.9588,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 23583
 },
 {
   "city": "Korbach",
   "lat": 51.2719,
   "lng": 8.8731,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 23581
 },
 {
   "city": "Cerro Azul",
   "lat": 21.2,
   "lng": -97.7331,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 23573
 },
 {
   "city": "Bauta",
   "lat": 22.9919,
   "lng": -82.5492,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 23557
 },
 {
   "city": "El Paso",
   "lat": 9.6622,
   "lng": -73.7519,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 23534
 },
 {
   "city": "Canalete",
   "lat": 8.79,
   "lng": -76.2411,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 23520
 },
 {
   "city": "Suonan",
   "lat": 35.6634,
   "lng": 103.3923,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 23499
 },
 {
   "city": "Starnberg",
   "lat": 47.9972,
   "lng": 11.3406,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 23498
 },
 {
   "city": "Padre Burgos",
   "lat": 13.9226,
   "lng": 121.8116,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 23488
 },
 {
   "city": "Tata",
   "lat": 47.65,
   "lng": 18.3167,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 23479
 },
 {
   "city": "Heiloo",
   "lat": 52.6011,
   "lng": 4.7019,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 23464
 },
 {
   "city": "Mégara",
   "lat": 38,
   "lng": 23.3333,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 23456
 },
 {
   "city": "Freudenstadt",
   "lat": 48.4633,
   "lng": 8.4111,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 23442
 },
 {
   "city": "Silopi",
   "lat": 37.2497,
   "lng": 42.4717,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 23430
 },
 {
   "city": "Nagykőrös",
   "lat": 47.0331,
   "lng": 19.7839,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 23424
 },
 {
   "city": "San Rafael del Sur",
   "lat": 11.85,
   "lng": -86.45,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 23420
 },
 {
   "city": "Sattahip",
   "lat": 12.6636,
   "lng": 100.9036,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 23418
 },
 {
   "city": "San Buenaventura",
   "lat": 27.0625,
   "lng": -101.5467,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 23413
 },
 {
   "city": "Veinticinco de Mayo",
   "lat": -35.4167,
   "lng": -60.1667,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 23408
 },
 {
   "city": "Si Racha",
   "lat": 13.1744,
   "lng": 100.9306,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 23400
 },
 {
   "city": "Mosbach",
   "lat": 49.35,
   "lng": 9.1333,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 23398
 },
 {
   "city": "Saint-Dizier",
   "lat": 48.6383,
   "lng": 4.9497,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 23382
 },
 {
   "city": "Teorama",
   "lat": 8.4353,
   "lng": -73.2864,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 23381
 },
 {
   "city": "Almeirim",
   "lat": 39.2167,
   "lng": -8.6333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 23376
 },
 {
   "city": "Ahualulco de Mercado",
   "lat": 20.6992,
   "lng": -103.9556,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 23362
 },
 {
   "city": "Doctor Mora",
   "lat": 21.1425,
   "lng": -100.3192,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 23324
 },
 {
   "city": "Sai Mai",
   "lat": 13.8882,
   "lng": 100.462,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 23316
 },
 {
   "city": "Achkhoy-Martan",
   "lat": 43.1939,
   "lng": 45.2833,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 23282
 },
 {
   "city": "San José",
   "lat": 1.4739,
   "lng": -77.0808,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 23279
 },
 {
   "city": "Santa Lucía Utatlán",
   "lat": 14.7667,
   "lng": -91.2667,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 23255
 },
 {
   "city": "Ozuluama de Mascareñas",
   "lat": 21.6667,
   "lng": -97.85,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 23244
 },
 {
   "city": "Borne",
   "lat": 52.3,
   "lng": 6.75,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 23210
 },
 {
   "city": "Hisor",
   "lat": 38.5264,
   "lng": 68.5381,
   "country": "Tajikistan",
   "iso2": "TJ",
   "iso3": "TJK",
   "capital": "minor",
   "population": 23200
 },
 {
   "city": "Alcalá",
   "lat": 4.6736,
   "lng": -75.7825,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 23195
 },
 {
   "city": "Husum",
   "lat": 54.4769,
   "lng": 9.0511,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 23189
 },
 {
   "city": "Santo Tomás",
   "lat": 10.7575,
   "lng": -74.7558,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 23188
 },
 {
   "city": "Huitiupán",
   "lat": 17.1667,
   "lng": -92.6833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 23172
 },
 {
   "city": "Tototlán",
   "lat": 20.5333,
   "lng": -102.7833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 23171
 },
 {
   "city": "Puerto Concordia",
   "lat": 2.6233,
   "lng": -72.7592,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 23131
 },
 {
   "city": "Soledad Atzompa",
   "lat": 18.755,
   "lng": -97.1522,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 23130
 },
 {
   "city": "Tamiahua",
   "lat": 21.2788,
   "lng": -97.4462,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 23120
 },
 {
   "city": "Rafael Delgado",
   "lat": 18.8167,
   "lng": -97.0667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 23112
 },
 {
   "city": "El Tejar",
   "lat": 14.65,
   "lng": -90.8,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 23100
 },
 {
   "city": "Elburg",
   "lat": 52.4333,
   "lng": 5.85,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 23086
 },
 {
   "city": "Achí",
   "lat": 8.5692,
   "lng": -74.5561,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 23051
 },
 {
   "city": "Oliveira do Bairro",
   "lat": 40.5167,
   "lng": -8.5,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 23028
 },
 {
   "city": "Curumaní",
   "lat": 9.1997,
   "lng": -73.5425,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 23018
 },
 {
   "city": "Palmar de Varela",
   "lat": 10.7389,
   "lng": -74.7547,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 23012
 },
 {
   "city": "Gyêgu",
   "lat": 33.0166,
   "lng": 96.7333,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 23000
 },
 {
   "city": "Wichian Buri",
   "lat": 15.6565,
   "lng": 101.1072,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 22995
 },
 {
   "city": "Bartoszyce",
   "lat": 54.2535,
   "lng": 20.8082,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 22984
 },
 {
   "city": "Dabeiba",
   "lat": 7.0014,
   "lng": -76.2611,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 22954
 },
 {
   "city": "Taxisco",
   "lat": 14.0716,
   "lng": -90.4645,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 22948
 },
 {
   "city": "Znamianka",
   "lat": 48.7136,
   "lng": 32.6733,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 22936
 },
 {
   "city": "Kilkís",
   "lat": 40.9954,
   "lng": 22.8765,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 22914
 },
 {
   "city": "La Democracia",
   "lat": 14.2308,
   "lng": -90.9472,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 22884
 },
 {
   "city": "Thebes",
   "lat": 38.3242,
   "lng": 23.3236,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 22883
 },
 {
   "city": "Kalat",
   "lat": 29.0258,
   "lng": 66.59,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 22879
 },
 {
   "city": "Luruaco",
   "lat": 10.6083,
   "lng": -75.1417,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 22878
 },
 {
   "city": "Guadalupe",
   "lat": 2.025,
   "lng": -75.7564,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 22867
 },
 {
   "city": "Vale de Cambra",
   "lat": 40.85,
   "lng": -8.4,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 22864
 },
 {
   "city": "Vagos",
   "lat": 40.55,
   "lng": -8.6667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 22851
 },
 {
   "city": "Arcos de Valdevez",
   "lat": 41.85,
   "lng": -8.4167,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 22847
 },
 {
   "city": "Zacualpa",
   "lat": 15.0272,
   "lng": -90.8778,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 22846
 },
 {
   "city": "Guanajay",
   "lat": 22.9306,
   "lng": -82.6881,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 22839
 },
 {
   "city": "Abbeville",
   "lat": 50.1058,
   "lng": 1.8358,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 22837
 },
 {
   "city": "Tunuyán",
   "lat": -33.5667,
   "lng": -69.0167,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 22834
 },
 {
   "city": "Qaţanā",
   "lat": 33.4333,
   "lng": 36.0833,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 22831
 },
 {
   "city": "Szczytno",
   "lat": 53.5628,
   "lng": 20.9853,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 22813
 },
 {
   "city": "Lisse",
   "lat": 52.2597,
   "lng": 4.5611,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 22800
 },
 {
   "city": "Ostrów Mazowiecka",
   "lat": 52.8,
   "lng": 21.9,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 22800
 },
 {
   "city": "Frontera",
   "lat": 18.5336,
   "lng": -92.6469,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 22795
 },
 {
   "city": "Albufeira",
   "lat": 37.0897,
   "lng": -8.2458,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 22794
 },
 {
   "city": "Westerstede",
   "lat": 53.25,
   "lng": 7.9167,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 22778
 },
 {
   "city": "Banovići",
   "lat": 44.4089,
   "lng": 18.5287,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 22773
 },
 {
   "city": "Santa Fe de Antioquia",
   "lat": 6.5564,
   "lng": -75.8275,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 22764
 },
 {
   "city": "Jawor",
   "lat": 51.0676,
   "lng": 16.185,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 22758
 },
 {
   "city": "Ojinaga",
   "lat": 29.5644,
   "lng": -104.4164,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 22744
 },
 {
   "city": "Amalfi",
   "lat": 6.9092,
   "lng": -75.0767,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 22714
 },
 {
   "city": "Buenavista",
   "lat": 8.2233,
   "lng": -75.4817,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 22711
 },
 {
   "city": "Valle Nacional",
   "lat": 17.7667,
   "lng": -96.3,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 22699
 },
 {
   "city": "Nizip",
   "lat": 37.0097,
   "lng": 37.7942,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 22675
 },
 {
   "city": "Partizánske",
   "lat": 48.6333,
   "lng": 18.3667,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 22653
 },
 {
   "city": "Lefkáda",
   "lat": 38.7178,
   "lng": 20.6439,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 22652
 },
 {
   "city": "Dunajská Streda",
   "lat": 47.9961,
   "lng": 17.6147,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 22643
 },
 {
   "city": "Magdalena",
   "lat": 20.9092,
   "lng": -103.9803,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 22643
 },
 {
   "city": "Komló",
   "lat": 46.1911,
   "lng": 18.2611,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 22635
 },
 {
   "city": "Røyken",
   "lat": 59.7336,
   "lng": 10.4289,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 22635
 },
 {
   "city": "Manzanares",
   "lat": 5.2519,
   "lng": -75.1569,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 22623
 },
 {
   "city": "Losser",
   "lat": 52.2617,
   "lng": 7.0044,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 22622
 },
 {
   "city": "San Raimundo",
   "lat": 14.7647,
   "lng": -90.5956,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 22615
 },
 {
   "city": "El Bosque",
   "lat": 17.0667,
   "lng": -92.7167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 22606
 },
 {
   "city": "Lajas",
   "lat": 22.4164,
   "lng": -80.2906,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 22602
 },
 {
   "city": "Vranov nad Topľou",
   "lat": 48.8806,
   "lng": 21.6731,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 22589
 },
 {
   "city": "Yahualica de González Gallo",
   "lat": 21.1781,
   "lng": -102.886,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 22586
 },
 {
   "city": "Sardinata",
   "lat": 8.0836,
   "lng": -72.8003,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 22583
 },
 {
   "city": "Rucphen",
   "lat": 51.5319,
   "lng": 4.5597,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 22572
 },
 {
   "city": "Polatlı",
   "lat": 39.5842,
   "lng": 32.1472,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 22558
 },
 {
   "city": "Goleniów",
   "lat": 53.55,
   "lng": 14.8167,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 22553
 },
 {
   "city": "Tlacolula de Matamoros",
   "lat": 16.9542,
   "lng": -96.4792,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 22545
 },
 {
   "city": "Lempäälä",
   "lat": 61.3139,
   "lng": 23.7528,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 22536
 },
 {
   "city": "Makó",
   "lat": 46.22,
   "lng": 20.4789,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 22514
 },
 {
   "city": "Mutatá",
   "lat": 7.2433,
   "lng": -76.4358,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 22505
 },
 {
   "city": "Burg",
   "lat": 52.2725,
   "lng": 11.855,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 22478
 },
 {
   "city": "Erzin",
   "lat": 36.9539,
   "lng": 36.2022,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 22477
 },
 {
   "city": "Weilheim",
   "lat": 47.8333,
   "lng": 11.1333,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 22477
 },
 {
   "city": "Yuli",
   "lat": 41.3351,
   "lng": 86.2614,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 22474
 },
 {
   "city": "Baclayon",
   "lat": 9.6227,
   "lng": 123.9135,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 22461
 },
 {
   "city": "Puente Nacional",
   "lat": 19.3333,
   "lng": -96.4833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 22454
 },
 {
   "city": "Nadvirna",
   "lat": 48.6333,
   "lng": 24.5833,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 22447
 },
 {
   "city": "Bad Kissingen",
   "lat": 50.2,
   "lng": 10.0667,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 22444
 },
 {
   "city": "Akçakoca",
   "lat": 41.0806,
   "lng": 31.1297,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 22416
 },
 {
   "city": "La Jagua de Ibirico",
   "lat": 9.5611,
   "lng": -73.3364,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 22405
 },
 {
   "city": "Büyükçekmece",
   "lat": 41.02,
   "lng": 28.5775,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 22394
 },
 {
   "city": "Ar Ruţbah",
   "lat": 33.0333,
   "lng": 40.2833,
   "country": "Iraq",
   "iso2": "IQ",
   "iso3": "IRQ",
   "capital": "minor",
   "population": 22370
 },
 {
   "city": "Torcy",
   "lat": 48.8502,
   "lng": 2.6508,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 22361
 },
 {
   "city": "Arouca",
   "lat": 40.9338,
   "lng": -8.2449,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 22359
 },
 {
   "city": "Lebu",
   "lat": -37.6103,
   "lng": -73.6561,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 22345
 },
 {
   "city": "Beek en Donk",
   "lat": 51.5161,
   "lng": 5.6208,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 22333
 },
 {
   "city": "Épernay",
   "lat": 49.0403,
   "lng": 3.96,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 22330
 },
 {
   "city": "Natagaima",
   "lat": 3.6231,
   "lng": -75.0936,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 22320
 },
 {
   "city": "Zeewolde",
   "lat": 52.3333,
   "lng": 5.5167,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 22309
 },
 {
   "city": "El Doncello",
   "lat": 1.68,
   "lng": -75.285,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 22306
 },
 {
   "city": "Barakī Barak",
   "lat": 33.9667,
   "lng": 68.9667,
   "country": "Afghanistan",
   "iso2": "AF",
   "iso3": "AFG",
   "capital": "minor",
   "population": 22305
 },
 {
   "city": "Zhedao",
   "lat": 24.8098,
   "lng": 98.2961,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 22290
 },
 {
   "city": "Acatlán",
   "lat": 20.4242,
   "lng": -103.6014,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 22261
 },
 {
   "city": "El Colegio",
   "lat": 4.5808,
   "lng": -74.4425,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 22247
 },
 {
   "city": "Stadthagen",
   "lat": 52.3247,
   "lng": 9.2069,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 22247
 },
 {
   "city": "San Andrés Villa Seca",
   "lat": 14.5667,
   "lng": -91.5833,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 22245
 },
 {
   "city": "Huangzhai",
   "lat": 38.0605,
   "lng": 112.6701,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 22233
 },
 {
   "city": "El Progreso",
   "lat": 14.35,
   "lng": -89.85,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 22220
 },
 {
   "city": "Šaľa",
   "lat": 48.15,
   "lng": 17.8833,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 22219
 },
 {
   "city": "Auch",
   "lat": 43.6465,
   "lng": 0.5855,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 22200
 },
 {
   "city": "Repelón",
   "lat": 10.4944,
   "lng": -75.1242,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 22196
 },
 {
   "city": "Maribojoc",
   "lat": 9.75,
   "lng": 123.85,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 22178
 },
 {
   "city": "Salvaterra de Magos",
   "lat": 39.0167,
   "lng": -8.7833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 22159
 },
 {
   "city": "San Rafael del Norte",
   "lat": 13.2,
   "lng": -86.1,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 22147
 },
 {
   "city": "Lubartów",
   "lat": 51.4667,
   "lng": 22.6,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 22138
 },
 {
   "city": "Qapqal",
   "lat": 43.834,
   "lng": 81.1581,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 22111
 },
 {
   "city": "Pailitas",
   "lat": 8.9597,
   "lng": -73.625,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 22083
 },
 {
   "city": "Timbiquí",
   "lat": 2.7719,
   "lng": -77.665,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 22077
 },
 {
   "city": "Lom",
   "lat": 43.8254,
   "lng": 23.2374,
   "country": "Bulgaria",
   "iso2": "BG",
   "iso3": "BGR",
   "capital": "minor",
   "population": 22075
 },
 {
   "city": "Tiquisio",
   "lat": 8.5578,
   "lng": -74.2639,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 22041
 },
 {
   "city": "Dongta",
   "lat": 38.0824,
   "lng": 106.339,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 22040
 },
 {
   "city": "Semikarakorsk",
   "lat": 47.5167,
   "lng": 40.8,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 22030
 },
 {
   "city": "Silvania",
   "lat": 4.4033,
   "lng": -74.3881,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 22020
 },
 {
   "city": "Apolda",
   "lat": 51.0247,
   "lng": 11.5139,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 22012
 },
 {
   "city": "Millau",
   "lat": 44.0986,
   "lng": 3.0783,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 22002
 },
 {
   "city": "Corinto",
   "lat": 12.4833,
   "lng": -87.1833,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 22000
 },
 {
   "city": "Tecali",
   "lat": 18.9011,
   "lng": -97.97,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 21992
 },
 {
   "city": "Chaumont",
   "lat": 48.1117,
   "lng": 5.1389,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 21990
 },
 {
   "city": "Świedbodzin",
   "lat": 52.25,
   "lng": 15.5333,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 21988
 },
 {
   "city": "Taminango",
   "lat": 1.57,
   "lng": -77.2806,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 21985
 },
 {
   "city": "Hillegom",
   "lat": 52.2917,
   "lng": 4.5794,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 21966
 },
 {
   "city": "Villa de Leyva",
   "lat": 5.6331,
   "lng": -73.5256,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 21953
 },
 {
   "city": "Iisalmi",
   "lat": 63.5611,
   "lng": 27.1889,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 21945
 },
 {
   "city": "Ḩārim",
   "lat": 36.2076,
   "lng": 36.5192,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 21934
 },
 {
   "city": "Svetlyy",
   "lat": 54.6833,
   "lng": 20.1333,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 21928
 },
 {
   "city": "Tornio",
   "lat": 65.8497,
   "lng": 24.1441,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 21928
 },
 {
   "city": "Axapusco",
   "lat": 19.7194,
   "lng": -98.7972,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 21915
 },
 {
   "city": "Villeneuve-sur-Lot",
   "lat": 44.4081,
   "lng": 0.705,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 21915
 },
 {
   "city": "Krathum Baen",
   "lat": 13.6519,
   "lng": 100.2572,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 21904
 },
 {
   "city": "Grajewo",
   "lat": 53.65,
   "lng": 22.45,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 21900
 },
 {
   "city": "Póvoa de Lanhoso",
   "lat": 41.5667,
   "lng": -8.2667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 21886
 },
 {
   "city": "Wieliczka",
   "lat": 49.9894,
   "lng": 20.0661,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 21878
 },
 {
   "city": "Heide",
   "lat": 54.1961,
   "lng": 9.0933,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 21852
 },
 {
   "city": "Binnish",
   "lat": 35.95,
   "lng": 36.7,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 21848
 },
 {
   "city": "Vänersborg",
   "lat": 58.363,
   "lng": 12.33,
   "country": "Sweden",
   "iso2": "SE",
   "iso3": "SWE",
   "capital": "minor",
   "population": 21835
 },
 {
   "city": "Ginebra",
   "lat": 3.7244,
   "lng": -76.2672,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 21815
 },
 {
   "city": "Azambuja",
   "lat": 39.0667,
   "lng": -8.8667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 21814
 },
 {
   "city": "Łęczna",
   "lat": 51.3,
   "lng": 22.8833,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 21802
 },
 {
   "city": "Kreuzlingen",
   "lat": 47.6458,
   "lng": 9.1783,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 21801
 },
 {
   "city": "Siilinjärvi",
   "lat": 63.075,
   "lng": 27.66,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 21794
 },
 {
   "city": "Opoczno",
   "lat": 51.3833,
   "lng": 20.2833,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 21780
 },
 {
   "city": "Kemi",
   "lat": 65.7336,
   "lng": 24.5634,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 21758
 },
 {
   "city": "Chapa de Mota",
   "lat": 19.8144,
   "lng": -99.5269,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 21746
 },
 {
   "city": "Puerto Triunfo",
   "lat": 5.8728,
   "lng": -74.6397,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 21745
 },
 {
   "city": "Kurikka",
   "lat": 62.6167,
   "lng": 22.4,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 21734
 },
 {
   "city": "Osterode",
   "lat": 51.7286,
   "lng": 10.2522,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 21731
 },
 {
   "city": "Tixtla de Guerrero",
   "lat": 17.5667,
   "lng": -99.4,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 21720
 },
 {
   "city": "Hlohovec",
   "lat": 48.4311,
   "lng": 17.8031,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 21715
 },
 {
   "city": "São João da Madeira",
   "lat": 40.9,
   "lng": -8.5,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 21713
 },
 {
   "city": "Kitzingen",
   "lat": 49.7333,
   "lng": 10.1667,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 21704
 },
 {
   "city": "Sombrerete",
   "lat": 23.6333,
   "lng": -103.6397,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 21702
 },
 {
   "city": "Koło",
   "lat": 52.2,
   "lng": 18.6333,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 21686
 },
 {
   "city": "Ocotlán de Morelos",
   "lat": 16.7914,
   "lng": -96.675,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 21676
 },
 {
   "city": "Forbach",
   "lat": 49.19,
   "lng": 6.9,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 21652
 },
 {
   "city": "San Jacinto",
   "lat": 9.8311,
   "lng": -75.1219,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 21644
 },
 {
   "city": "Sondrio",
   "lat": 46.1697,
   "lng": 9.87,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 21642
 },
 {
   "city": "San Justo",
   "lat": -30.7833,
   "lng": -60.5833,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 21624
 },
 {
   "city": "Nueva Granada",
   "lat": 9.8011,
   "lng": -74.3917,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 21612
 },
 {
   "city": "Zundert",
   "lat": 51.4703,
   "lng": 4.66,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 21612
 },
 {
   "city": "Cuilapan de Guerrero",
   "lat": 16.9972,
   "lng": -96.7817,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 21597
 },
 {
   "city": "Chapala",
   "lat": 20.2933,
   "lng": -103.1897,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 21596
 },
 {
   "city": "Senaki",
   "lat": 42.2689,
   "lng": 42.0678,
   "country": "Georgia",
   "iso2": "GE",
   "iso3": "GEO",
   "capital": "minor",
   "population": 21596
 },
 {
   "city": "Kant",
   "lat": 42.8833,
   "lng": 74.85,
   "country": "Kyrgyzstan",
   "iso2": "KG",
   "iso3": "KGZ",
   "capital": "minor",
   "population": 21589
 },
 {
   "city": "La Resolana",
   "lat": 19.6031,
   "lng": -104.4362,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 21584
 },
 {
   "city": "San Nicolás",
   "lat": 22.7819,
   "lng": -81.9069,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 21563
 },
 {
   "city": "Galeras",
   "lat": 9.1586,
   "lng": -75.0489,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 21548
 },
 {
   "city": "Gölcük",
   "lat": 40.6667,
   "lng": 29.8333,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 21544
 },
 {
   "city": "Jämsä",
   "lat": 61.8639,
   "lng": 25.1903,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 21542
 },
 {
   "city": "Sonthofen",
   "lat": 47.5142,
   "lng": 10.2817,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 21541
 },
 {
   "city": "Acatic",
   "lat": 20.7803,
   "lng": -102.91,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 21530
 },
 {
   "city": "Vecsés",
   "lat": 47.4108,
   "lng": 19.2722,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 21529
 },
 {
   "city": "Deán Funes",
   "lat": -30.4333,
   "lng": -64.35,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 21518
 },
 {
   "city": "Dudelange",
   "lat": 49.4806,
   "lng": 6.0875,
   "country": "Luxembourg",
   "iso2": "LU",
   "iso3": "LUX",
   "capital": "minor",
   "population": 21513
 },
 {
   "city": "Sondershausen",
   "lat": 51.3667,
   "lng": 10.8667,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 21513
 },
 {
   "city": "San Martín de las Pirámides",
   "lat": 19.7333,
   "lng": -98.8167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 21511
 },
 {
   "city": "Áno Sýros",
   "lat": 37.45,
   "lng": 24.9,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 21507
 },
 {
   "city": "Villagarzón",
   "lat": 1.0294,
   "lng": -76.6164,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 21507
 },
 {
   "city": "Nang Rong",
   "lat": 14.6363,
   "lng": 102.7746,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 21493
 },
 {
   "city": "San Bernardo",
   "lat": 1.5164,
   "lng": -77.0467,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 21492
 },
 {
   "city": "Puerto Natales",
   "lat": -51.7263,
   "lng": -72.5062,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 21477
 },
 {
   "city": "Zile",
   "lat": 40.3,
   "lng": 35.8833,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 21463
 },
 {
   "city": "El Paujíl",
   "lat": 1.5694,
   "lng": -75.3264,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 21462
 },
 {
   "city": "Kotli",
   "lat": 33.5156,
   "lng": 73.9019,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 21462
 },
 {
   "city": "Aichach",
   "lat": 48.45,
   "lng": 11.1333,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 21434
 },
 {
   "city": "Péfki",
   "lat": 38.0667,
   "lng": 23.8,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 21415
 },
 {
   "city": "Santa Bárbara",
   "lat": 5.8747,
   "lng": -75.5661,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 21413
 },
 {
   "city": "Moniquirá",
   "lat": 5.8744,
   "lng": -73.5717,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 21402
 },
 {
   "city": "Heroica Ciudad de Tlaxiaco",
   "lat": 17.2077,
   "lng": -97.6798,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 21391
 },
 {
   "city": "Kozluk",
   "lat": 38.1833,
   "lng": 41.4926,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 21380
 },
 {
   "city": "Livadeiá",
   "lat": 38.4361,
   "lng": 22.875,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 21379
 },
 {
   "city": "Allende",
   "lat": 28.3333,
   "lng": -100.8333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 21376
 },
 {
   "city": "Almaguer",
   "lat": 1.9131,
   "lng": -76.8561,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 21374
 },
 {
   "city": "Fortín de las Flores",
   "lat": 18.9,
   "lng": -97,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 21370
 },
 {
   "city": "Youganning",
   "lat": 34.7356,
   "lng": 101.5978,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 21323
 },
 {
   "city": "Mrągowo",
   "lat": 53.8644,
   "lng": 21.3051,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 21302
 },
 {
   "city": "Wang Nam Yen",
   "lat": 13.5004,
   "lng": 102.1806,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 21301
 },
 {
   "city": "Huy",
   "lat": 50.5167,
   "lng": 5.2333,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 21293
 },
 {
   "city": "Elverum",
   "lat": 60.8833,
   "lng": 11.5667,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 21292
 },
 {
   "city": "Antsohihy",
   "lat": -14.8661,
   "lng": 47.9834,
   "country": "Madagascar",
   "iso2": "MG",
   "iso3": "MDG",
   "capital": "minor",
   "population": 21290
 },
 {
   "city": "Działdowo",
   "lat": 53.2333,
   "lng": 20.1833,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 21279
 },
 {
   "city": "Tubbergen",
   "lat": 52.4,
   "lng": 6.7667,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 21276
 },
 {
   "city": "Belovodskoe",
   "lat": 42.8333,
   "lng": 74.1167,
   "country": "Kyrgyzstan",
   "iso2": "KG",
   "iso3": "KGZ",
   "capital": "minor",
   "population": 21275
 },
 {
   "city": "Aguadas",
   "lat": 5.6092,
   "lng": -75.4564,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 21237
 },
 {
   "city": "Prudnik",
   "lat": 50.3197,
   "lng": 17.5792,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 21237
 },
 {
   "city": "Montecristo",
   "lat": 8.2958,
   "lng": -74.4728,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 21229
 },
 {
   "city": "Degollado",
   "lat": 20.4667,
   "lng": -102.15,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 21226
 },
 {
   "city": "Gryfino",
   "lat": 53.2524,
   "lng": 14.4883,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 21221
 },
 {
   "city": "Rio Maior",
   "lat": 39.3333,
   "lng": -8.9333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 21192
 },
 {
   "city": "Bologoye",
   "lat": 57.8787,
   "lng": 34.0789,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 21158
 },
 {
   "city": "Varkaus",
   "lat": 62.3167,
   "lng": 27.8833,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 21155
 },
 {
   "city": "Florencia",
   "lat": 22.1475,
   "lng": -78.9669,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 21150
 },
 {
   "city": "Hallein",
   "lat": 47.6667,
   "lng": 13.0833,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 21150
 },
 {
   "city": "El Calafate",
   "lat": -50.3395,
   "lng": -72.2649,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 21132
 },
 {
   "city": "Suaza",
   "lat": 1.975,
   "lng": -75.7956,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 21119
 },
 {
   "city": "Nogales",
   "lat": 18.8167,
   "lng": -97.1667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 21113
 },
 {
   "city": "Chocamán",
   "lat": 19.0122,
   "lng": -97.0328,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 21102
 },
 {
   "city": "Altepexi",
   "lat": 18.3676,
   "lng": -97.3004,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 21100
 },
 {
   "city": "Sadao",
   "lat": 6.6386,
   "lng": 100.424,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 21086
 },
 {
   "city": "Brezno",
   "lat": 48.8036,
   "lng": 19.6381,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 21082
 },
 {
   "city": "Stange",
   "lat": 60.6494,
   "lng": 11.3664,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 21072
 },
 {
   "city": "Chascomús",
   "lat": -35.575,
   "lng": -58.0089,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 21054
 },
 {
   "city": "Villapinzón",
   "lat": 5.2158,
   "lng": -73.5967,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 21049
 },
 {
   "city": "Leerdam",
   "lat": 51.8939,
   "lng": 5.0914,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 21030
 },
 {
   "city": "La Colonia Tovar",
   "lat": 10.4167,
   "lng": -67.2833,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 21000
 },
 {
   "city": "Fredonia",
   "lat": 5.9267,
   "lng": -75.6739,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 20997
 },
 {
   "city": "El Retén",
   "lat": 10.6106,
   "lng": -74.2683,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 20981
 },
 {
   "city": "Bugalagrande",
   "lat": 4.2075,
   "lng": -76.1575,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 20970
 },
 {
   "city": "Renens",
   "lat": 46.5353,
   "lng": 6.5897,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 20927
 },
 {
   "city": "Eeklo",
   "lat": 51.1858,
   "lng": 3.5639,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 20890
 },
 {
   "city": "Texistepec",
   "lat": 17.9,
   "lng": -94.8167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 20887
 },
 {
   "city": "Sotomayor",
   "lat": 1.4933,
   "lng": -77.5214,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 20865
 },
 {
   "city": "Kara-Suu",
   "lat": 40.7,
   "lng": 72.8833,
   "country": "Kyrgyzstan",
   "iso2": "KG",
   "iso3": "KGZ",
   "capital": "minor",
   "population": 20862
 },
 {
   "city": "Oliveira do Hospital",
   "lat": 40.3667,
   "lng": -7.8667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 20855
 },
 {
   "city": "Ovejas",
   "lat": 9.5258,
   "lng": -75.2272,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 20846
 },
 {
   "city": "Sanhe",
   "lat": 36.5643,
   "lng": 105.6401,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 20844
 },
 {
   "city": "Siquinalá",
   "lat": 14.3082,
   "lng": -90.9659,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 20843
 },
 {
   "city": "Kremenets",
   "lat": 50.1081,
   "lng": 25.7275,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 20837
 },
 {
   "city": "Sarreguemines",
   "lat": 49.11,
   "lng": 7.07,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 20820
 },
 {
   "city": "Valkeakoski",
   "lat": 61.2667,
   "lng": 24.0306,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 20800
 },
 {
   "city": "Germersheim",
   "lat": 49.2167,
   "lng": 8.3667,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 20779
 },
 {
   "city": "Urk",
   "lat": 52.6653,
   "lng": 5.6058,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 20776
 },
 {
   "city": "Samacá",
   "lat": 5.4919,
   "lng": -73.4867,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 20767
 },
 {
   "city": "Dax",
   "lat": 43.71,
   "lng": -1.05,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 20762
 },
 {
   "city": "Illapel",
   "lat": -31.6327,
   "lng": -71.1683,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 20751
 },
 {
   "city": "Beaune",
   "lat": 47.025,
   "lng": 4.8397,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 20711
 },
 {
   "city": "Lebedinovka",
   "lat": 42.88,
   "lng": 74.68,
   "country": "Kyrgyzstan",
   "iso2": "KG",
   "iso3": "KGZ",
   "capital": "minor",
   "population": 20709
 },
 {
   "city": "Günzburg",
   "lat": 48.4525,
   "lng": 10.2711,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 20707
 },
 {
   "city": "Elvas",
   "lat": 38.88,
   "lng": -7.1628,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 20706
 },
 {
   "city": "Ménaka",
   "lat": 15.9167,
   "lng": 2.4,
   "country": "Mali",
   "iso2": "ML",
   "iso3": "MLI",
   "capital": "minor",
   "population": 20702
 },
 {
   "city": "Mae Sai",
   "lat": 20.4266,
   "lng": 99.8841,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 20699
 },
 {
   "city": "Brummen",
   "lat": 52.1,
   "lng": 6.1667,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 20698
 },
 {
   "city": "Dolyna",
   "lat": 48.9703,
   "lng": 24.0108,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 20691
 },
 {
   "city": "Mäntsälä",
   "lat": 60.6331,
   "lng": 25.3167,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 20685
 },
 {
   "city": "Melena del Sur",
   "lat": 22.7814,
   "lng": -82.1486,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 20646
 },
 {
   "city": "Pueblo Nuevo",
   "lat": 13.3833,
   "lng": -86.4833,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 20620
 },
 {
   "city": "Forst (Lausitz)",
   "lat": 51.7333,
   "lng": 14.6333,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 20618
 },
 {
   "city": "Hajnówka",
   "lat": 52.7333,
   "lng": 23.5667,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 20615
 },
 {
   "city": "Na Klang",
   "lat": 17.3043,
   "lng": 102.1964,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 20609
 },
 {
   "city": "Jitotol",
   "lat": 17.0667,
   "lng": -92.8667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 20606
 },
 {
   "city": "Gjøvik",
   "lat": 60.7957,
   "lng": 10.6916,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 20589
 },
 {
   "city": "Luckenwalde",
   "lat": 52.0831,
   "lng": 13.1667,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 20586
 },
 {
   "city": "Qagan Us",
   "lat": 36.2979,
   "lng": 98.0937,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 20570
 },
 {
   "city": "Mödling",
   "lat": 48.0856,
   "lng": 16.2831,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 20555
 },
 {
   "city": "Laboulaye",
   "lat": -34.1267,
   "lng": -63.3911,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 20534
 },
 {
   "city": "Fougères",
   "lat": 48.3525,
   "lng": -1.1986,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 20528
 },
 {
   "city": "Baião",
   "lat": 41.1667,
   "lng": -8.0333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 20522
 },
 {
   "city": "Traunstein",
   "lat": 47.8683,
   "lng": 12.6433,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 20520
 },
 {
   "city": "Atoyac de Álvarez",
   "lat": 17.2,
   "lng": -100.4333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 20515
 },
 {
   "city": "Tyrnyauz",
   "lat": 43.4,
   "lng": 42.9167,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 20513
 },
 {
   "city": "Khvānsār",
   "lat": 33.2206,
   "lng": 50.315,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 20490
 },
 {
   "city": "Timaná",
   "lat": 1.9499,
   "lng": -75.9139,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 20463
 },
 {
   "city": "Ås",
   "lat": 59.6603,
   "lng": 10.7836,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 20439
 },
 {
   "city": "Chełmno",
   "lat": 53.3492,
   "lng": 18.4261,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 20428
 },
 {
   "city": "Mealhada",
   "lat": 40.3833,
   "lng": -8.45,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 20428
 },
 {
   "city": "Cinfães",
   "lat": 41.0667,
   "lng": -8.0833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 20427
 },
 {
   "city": "Pak Phanang",
   "lat": 8.3538,
   "lng": 100.2023,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 20425
 },
 {
   "city": "Aígio",
   "lat": 38.25,
   "lng": 22.0833,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 20422
 },
 {
   "city": "Tielt",
   "lat": 50.9989,
   "lng": 3.3258,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 20422
 },
 {
   "city": "San Lorenzo",
   "lat": 1.5039,
   "lng": -77.2178,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 20403
 },
 {
   "city": "Pleszew",
   "lat": 51.8974,
   "lng": 17.7856,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 20365
 },
 {
   "city": "Senica",
   "lat": 48.6806,
   "lng": 17.3667,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 20342
 },
 {
   "city": "Santa María Chilchotla",
   "lat": 18.2333,
   "lng": -96.8167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 20328
 },
 {
   "city": "Mühldorf",
   "lat": 48.2456,
   "lng": 12.5228,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 20323
 },
 {
   "city": "Wittmund",
   "lat": 53.5747,
   "lng": 7.7808,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 20321
 },
 {
   "city": "Gostyń",
   "lat": 51.8792,
   "lng": 17.0125,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 20296
 },
 {
   "city": "Ciudad Melchor de Mencos",
   "lat": 17.0667,
   "lng": -89.15,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 20273
 },
 {
   "city": "Teculután",
   "lat": 14.9877,
   "lng": -89.717,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 20272
 },
 {
   "city": "Concordia",
   "lat": 6.0456,
   "lng": -75.9075,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 20271
 },
 {
   "city": "Simití",
   "lat": 7.9564,
   "lng": -73.9461,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 20271
 },
 {
   "city": "Tenjo",
   "lat": 4.8697,
   "lng": -74.1439,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 20269
 },
 {
   "city": "Villa Hidalgo",
   "lat": 21.6762,
   "lng": -102.588,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 20257
 },
 {
   "city": "Rovira",
   "lat": 4.2392,
   "lng": -75.2403,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 20255
 },
 {
   "city": "Bad Salzungen",
   "lat": 50.8117,
   "lng": 10.2333,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 20244
 },
 {
   "city": "Uzunköprü",
   "lat": 41.2669,
   "lng": 26.6875,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 20237
 },
 {
   "city": "Kozan",
   "lat": 37.4507,
   "lng": 35.8123,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 20236
 },
 {
   "city": "Ocós",
   "lat": 14.5138,
   "lng": -92.1909,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 20215
 },
 {
   "city": "Marneuli",
   "lat": 41.4969,
   "lng": 44.8108,
   "country": "Georgia",
   "iso2": "GE",
   "iso3": "GEO",
   "capital": "minor",
   "population": 20211
 },
 {
   "city": "Entroncamento",
   "lat": 39.4667,
   "lng": -8.4667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 20206
 },
 {
   "city": "Benemérito",
   "lat": 16.5172,
   "lng": -90.6531,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 20193
 },
 {
   "city": "Bladel",
   "lat": 51.3667,
   "lng": 5.2167,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 20175
 },
 {
   "city": "Cruz Grande",
   "lat": 16.7333,
   "lng": -99.1333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 20175
 },
 {
   "city": "Lisieux",
   "lat": 49.15,
   "lng": 0.23,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 20171
 },
 {
   "city": "Bella Vista",
   "lat": 15.5833,
   "lng": -92.2167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 20142
 },
 {
   "city": "Bolvadin",
   "lat": 38.7167,
   "lng": 31.05,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 20139
 },
 {
   "city": "Kartal",
   "lat": 40.9108,
   "lng": 29.1617,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 20139
 },
 {
   "city": "Lichtenfels",
   "lat": 50.1333,
   "lng": 11.0333,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 20133
 },
 {
   "city": "Huanímaro",
   "lat": 20.3675,
   "lng": -101.4969,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 20117
 },
 {
   "city": "Senec",
   "lat": 48.2189,
   "lng": 17.3997,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 20116
 },
 {
   "city": "Greiz",
   "lat": 50.6547,
   "lng": 12.1997,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 20103
 },
 {
   "city": "Celorico de Basto",
   "lat": 41.3869,
   "lng": -8.0022,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 20098
 },
 {
   "city": "Donauwörth",
   "lat": 48.7184,
   "lng": 10.777,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 20080
 },
 {
   "city": "Hatvan",
   "lat": 47.6681,
   "lng": 19.6697,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 20079
 },
 {
   "city": "Naranjos",
   "lat": 21.3472,
   "lng": -97.6833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 20073
 },
 {
   "city": "Alblasserdam",
   "lat": 51.8667,
   "lng": 4.6667,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 20069
 },
 {
   "city": "Nové Mesto nad Váhom",
   "lat": 48.7833,
   "lng": 17.8333,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 20066
 },
 {
   "city": "Torgau",
   "lat": 51.5603,
   "lng": 13.0056,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 20065
 },
 {
   "city": "Pita",
   "lat": 11.08,
   "lng": -12.401,
   "country": "Guinea",
   "iso2": "GN",
   "iso3": "GIN",
   "capital": "minor",
   "population": 20052
 },
 {
   "city": "Alagir",
   "lat": 43.0417,
   "lng": 44.2106,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 20043
 },
 {
   "city": "Lannion",
   "lat": 48.7325,
   "lng": -3.4553,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 20040
 },
 {
   "city": "Castillo de Teayo",
   "lat": 20.75,
   "lng": -97.6333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 20037
 },
 {
   "city": "Rhenen",
   "lat": 51.9597,
   "lng": 5.5689,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 20004
 },
 {
   "city": "Ciudad Miguel Alemán",
   "lat": 26.4003,
   "lng": -99.0253,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 19998
 },
 {
   "city": "Holzminden",
   "lat": 51.8297,
   "lng": 9.4483,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 19998
 },
 {
   "city": "Vianen",
   "lat": 51.9833,
   "lng": 5.1,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 19967
 },
 {
   "city": "Coruche",
   "lat": 38.95,
   "lng": -8.5333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 19944
 },
 {
   "city": "Xiaqiaotou",
   "lat": 27.2167,
   "lng": 100.15,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 19922
 },
 {
   "city": "Äänekoski",
   "lat": 62.6042,
   "lng": 25.7264,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 19919
 },
 {
   "city": "Cahors",
   "lat": 44.4475,
   "lng": 1.4406,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 19907
 },
 {
   "city": "El Arenal",
   "lat": 20.7754,
   "lng": -103.6935,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 19900
 },
 {
   "city": "Peshtera",
   "lat": 42.034,
   "lng": 24.3025,
   "country": "Bulgaria",
   "iso2": "BG",
   "iso3": "BGR",
   "capital": "minor",
   "population": 19894
 },
 {
   "city": "Törökszentmiklós",
   "lat": 47.1833,
   "lng": 20.4167,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 19890
 },
 {
   "city": "Mangualde",
   "lat": 40.6,
   "lng": -7.7667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 19880
 },
 {
   "city": "Kūysinjaq",
   "lat": 36.0828,
   "lng": 44.6286,
   "country": "Iraq",
   "iso2": "IQ",
   "iso3": "IRQ",
   "capital": "minor",
   "population": 19878
 },
 {
   "city": "Brandsen",
   "lat": -35.1667,
   "lng": -58.2167,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 19877
 },
 {
   "city": "Hamina",
   "lat": 60.5697,
   "lng": 27.1981,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 19877
 },
 {
   "city": "Haren",
   "lat": 53.1667,
   "lng": 6.6,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 19860
 },
 {
   "city": "Comapa",
   "lat": 19.1667,
   "lng": -96.8666,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 19859
 },
 {
   "city": "Snina",
   "lat": 48.9881,
   "lng": 22.1567,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 19855
 },
 {
   "city": "Zimatlán de Álvarez",
   "lat": 16.8667,
   "lng": -96.7833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 19849
 },
 {
   "city": "Kleppe",
   "lat": 58.7772,
   "lng": 5.5967,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 19848
 },
 {
   "city": "Tepetlixpa",
   "lat": 19.0006,
   "lng": -98.8178,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 19843
 },
 {
   "city": "Dingolfing",
   "lat": 48.6333,
   "lng": 12.5,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 19839
 },
 {
   "city": "General Martín Miguel de Güemes",
   "lat": -24.6667,
   "lng": -65.05,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 19828
 },
 {
   "city": "Nesoddtangen",
   "lat": 59.8086,
   "lng": 10.6556,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 19805
 },
 {
   "city": "Ban Na San",
   "lat": 8.7997,
   "lng": 99.3635,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 19801
 },
 {
   "city": "Annaberg-Buchholz",
   "lat": 50.58,
   "lng": 13.0022,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 19769
 },
 {
   "city": "Puerto Armuelles",
   "lat": 8.2777,
   "lng": -82.8621,
   "country": "Panama",
   "iso2": "PA",
   "iso3": "PAN",
   "capital": "minor",
   "population": 19763
 },
 {
   "city": "Os",
   "lat": 60.2269,
   "lng": 5.4758,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 19742
 },
 {
   "city": "Bressuire",
   "lat": 46.84,
   "lng": -0.4886,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 19733
 },
 {
   "city": "Karcag",
   "lat": 47.3167,
   "lng": 20.9333,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 19732
 },
 {
   "city": "Saint-Dié-des-Vosges",
   "lat": 48.2842,
   "lng": 6.9492,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 19724
 },
 {
   "city": "Hongshui",
   "lat": 38.5077,
   "lng": 100.8814,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 19718
 },
 {
   "city": "Buşrá ash Shām",
   "lat": 32.5167,
   "lng": 36.4833,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 19683
 },
 {
   "city": "Leek",
   "lat": 53.15,
   "lng": 6.3833,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 19669
 },
 {
   "city": "Chiconcuac",
   "lat": 19.55,
   "lng": -98.9,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 19656
 },
 {
   "city": "Komárom",
   "lat": 47.74,
   "lng": 18.1217,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 19656
 },
 {
   "city": "Rāwah",
   "lat": 34.4792,
   "lng": 41.9083,
   "country": "Iraq",
   "iso2": "IQ",
   "iso3": "IRQ",
   "capital": "minor",
   "population": 19629
 },
 {
   "city": "Urumita",
   "lat": 10.5603,
   "lng": -73.0136,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 19629
 },
 {
   "city": "Eschwege",
   "lat": 51.1881,
   "lng": 10.0528,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 19606
 },
 {
   "city": "Hidalgotitlán",
   "lat": 17.7833,
   "lng": -94.6333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 19587
 },
 {
   "city": "Heinola",
   "lat": 61.2052,
   "lng": 26.0348,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 19575
 },
 {
   "city": "Moulins",
   "lat": 46.5647,
   "lng": 3.3325,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 19563
 },
 {
   "city": "Candelaria",
   "lat": 22.7439,
   "lng": -82.9581,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 19523
 },
 {
   "city": "Hoxut",
   "lat": 42.2552,
   "lng": 86.8607,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 19520
 },
 {
   "city": "Nakło nad Notecią",
   "lat": 53.1403,
   "lng": 17.5928,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 19507
 },
 {
   "city": "Tapalpa",
   "lat": 19.9445,
   "lng": -103.7585,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 19506
 },
 {
   "city": "Várpalota",
   "lat": 47.1972,
   "lng": 18.1394,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 19484
 },
 {
   "city": "Jesús María",
   "lat": 20.6068,
   "lng": -102.223,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 19469
 },
 {
   "city": "Polonuevo",
   "lat": 10.7772,
   "lng": -74.8528,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 19454
 },
 {
   "city": "Jakobstad",
   "lat": 63.6667,
   "lng": 22.7,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 19436
 },
 {
   "city": "Sipoo",
   "lat": 60.3764,
   "lng": 25.2722,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 19399
 },
 {
   "city": "Dalanzadgad",
   "lat": 43.57,
   "lng": 104.4258,
   "country": "Mongolia",
   "iso2": "MN",
   "iso3": "MNG",
   "capital": "minor",
   "population": 19396
 },
 {
   "city": "Kantharalak",
   "lat": 14.6536,
   "lng": 104.6278,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 19392
 },
 {
   "city": "Keszthely",
   "lat": 46.7675,
   "lng": 17.2463,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 19387
 },
 {
   "city": "Coquimatlán",
   "lat": 19.2038,
   "lng": -103.8086,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 19385
 },
 {
   "city": "Sélestat",
   "lat": 48.2594,
   "lng": 7.4542,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 19360
 },
 {
   "city": "Balta",
   "lat": 47.9361,
   "lng": 29.6225,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 19353
 },
 {
   "city": "Amatán",
   "lat": 17.3667,
   "lng": -92.8167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 19348
 },
 {
   "city": "Ban Bueng",
   "lat": 13.314,
   "lng": 101.1114,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 19346
 },
 {
   "city": "José Cardel",
   "lat": 19.3667,
   "lng": -96.3667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 19341
 },
 {
   "city": "Weesp",
   "lat": 52.3069,
   "lng": 5.0417,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 19334
 },
 {
   "city": "Someren",
   "lat": 51.3847,
   "lng": 5.7119,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 19322
 },
 {
   "city": "Korsholm",
   "lat": 63.1125,
   "lng": 21.6778,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 19302
 },
 {
   "city": "Dolynska",
   "lat": 48.1111,
   "lng": 32.7648,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 19287
 },
 {
   "city": "Lieto",
   "lat": 60.5,
   "lng": 22.4497,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 19263
 },
 {
   "city": "Henichesk",
   "lat": 46.1769,
   "lng": 34.7989,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 19253
 },
 {
   "city": "Haldensleben",
   "lat": 52.2833,
   "lng": 11.4167,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 19247
 },
 {
   "city": "Soure",
   "lat": 40.05,
   "lng": -8.6333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 19245
 },
 {
   "city": "Monção",
   "lat": 42.0733,
   "lng": -8.48,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 19230
 },
 {
   "city": "Pułtusk",
   "lat": 52.7025,
   "lng": 21.0828,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 19229
 },
 {
   "city": "Magitang",
   "lat": 35.9484,
   "lng": 102.0273,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 19226
 },
 {
   "city": "Kufstein",
   "lat": 47.5833,
   "lng": 12.1667,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 19223
 },
 {
   "city": "Kabūdarāhang",
   "lat": 35.2083,
   "lng": 48.7239,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 19216
 },
 {
   "city": "Tingloy",
   "lat": 13.65,
   "lng": 120.8667,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 19215
 },
 {
   "city": "Albertville",
   "lat": 45.6758,
   "lng": 6.3925,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 19214
 },
 {
   "city": "Texcaltitlán",
   "lat": 18.9297,
   "lng": -99.9372,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 19206
 },
 {
   "city": "Lumphat",
   "lat": 13.507,
   "lng": 106.981,
   "country": "Cambodia",
   "iso2": "KH",
   "iso3": "KHM",
   "capital": "minor",
   "population": 19205
 },
 {
   "city": "Jamiltepec",
   "lat": 16.2783,
   "lng": -97.82,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 19201
 },
 {
   "city": "San José Ojetenam",
   "lat": 15.2167,
   "lng": -91.9667,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 19194
 },
 {
   "city": "Rožňava",
   "lat": 48.6586,
   "lng": 20.5314,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 19190
 },
 {
   "city": "Žiar nad Hronom",
   "lat": 48.5919,
   "lng": 18.8533,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 19188
 },
 {
   "city": "Vera",
   "lat": -29.4667,
   "lng": -60.2167,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 19185
 },
 {
   "city": "Izra",
   "lat": 32.8567,
   "lng": 36.2469,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 19158
 },
 {
   "city": "Vila Real de Santo António",
   "lat": 37.2,
   "lng": -7.4167,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 19156
 },
 {
   "city": "Pastavy",
   "lat": 55.1167,
   "lng": 26.8333,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 19153
 },
 {
   "city": "Senguio",
   "lat": 19.7539,
   "lng": -100.3377,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 19146
 },
 {
   "city": "La Ligua",
   "lat": -32.4494,
   "lng": -71.2317,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 19127
 },
 {
   "city": "Ashkezar",
   "lat": 32,
   "lng": 54.2044,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 19123
 },
 {
   "city": "La Unión",
   "lat": 5.9728,
   "lng": -75.3611,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 19119
 },
 {
   "city": "Eersel",
   "lat": 51.3572,
   "lng": 5.3147,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 19110
 },
 {
   "city": "San Antonio Sacatepéquez",
   "lat": 14.9667,
   "lng": -91.7333,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 19103
 },
 {
   "city": "Chodzież",
   "lat": 52.9901,
   "lng": 16.9122,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 19100
 },
 {
   "city": "Cherán",
   "lat": 19.6833,
   "lng": -101.95,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 19081
 },
 {
   "city": "Ixtlahuacán del Río",
   "lat": 20.8667,
   "lng": -103.25,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 19070
 },
 {
   "city": "Le Puy-en-Velay",
   "lat": 45.0433,
   "lng": 3.885,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 19061
 },
 {
   "city": "Préveza",
   "lat": 38.95,
   "lng": 20.75,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 19042
 },
 {
   "city": "Sömmerda",
   "lat": 51.1617,
   "lng": 11.1169,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 19034
 },
 {
   "city": "Proletarsk",
   "lat": 46.7031,
   "lng": 41.7192,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 19032
 },
 {
   "city": "Pruzhany",
   "lat": 52.5567,
   "lng": 24.4644,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 19032
 },
 {
   "city": "Saint-Lô",
   "lat": 49.1144,
   "lng": -1.0917,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 19024
 },
 {
   "city": "Cotija de la Paz",
   "lat": 19.81,
   "lng": -102.7047,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 19018
 },
 {
   "city": "Riom",
   "lat": 45.8936,
   "lng": 3.1125,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 19011
 },
 {
   "city": "Vista Hermosa de Negrete",
   "lat": 20.2728,
   "lng": -102.4806,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 18995
 },
 {
   "city": "Wittlich",
   "lat": 49.9869,
   "lng": 6.8897,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 18995
 },
 {
   "city": "El Quetzal",
   "lat": 14.7667,
   "lng": -91.8167,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 18979
 },
 {
   "city": "Dillingen",
   "lat": 48.5667,
   "lng": 10.4667,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 18978
 },
 {
   "city": "Norak",
   "lat": 38.3883,
   "lng": 69.325,
   "country": "Tajikistan",
   "iso2": "TJ",
   "iso3": "TJK",
   "capital": "minor",
   "population": 18950
 },
 {
   "city": "Tak Bai",
   "lat": 6.2592,
   "lng": 102.053,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 18943
 },
 {
   "city": "Malacky",
   "lat": 48.4381,
   "lng": 17.0236,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 18935
 },
 {
   "city": "Meerssen",
   "lat": 50.8858,
   "lng": 5.7519,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 18923
 },
 {
   "city": "Contamana",
   "lat": -7.3493,
   "lng": -75.0086,
   "country": "Peru",
   "iso2": "PE",
   "iso3": "PER",
   "capital": "minor",
   "population": 18921
 },
 {
   "city": "Zuidhorn",
   "lat": 53.2468,
   "lng": 6.4077,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 18917
 },
 {
   "city": "Naantali",
   "lat": 60.4681,
   "lng": 22.0264,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 18916
 },
 {
   "city": "Pirkkala",
   "lat": 61.4667,
   "lng": 23.65,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 18913
 },
 {
   "city": "Kalynivka",
   "lat": 49.4472,
   "lng": 28.5231,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 18906
 },
 {
   "city": "Tadó",
   "lat": 5.2633,
   "lng": -76.56,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 18906
 },
 {
   "city": "Dolný Kubín",
   "lat": 49.2117,
   "lng": 19.2992,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 18905
 },
 {
   "city": "Mo i Rana",
   "lat": 66.3167,
   "lng": 14.1667,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 18899
 },
 {
   "city": "Jiaoxiyakou",
   "lat": 26.1274,
   "lng": 102.4502,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 18894
 },
 {
   "city": "Amares",
   "lat": 41.6333,
   "lng": -8.35,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 18889
 },
 {
   "city": "Polohy",
   "lat": 47.4796,
   "lng": 36.2611,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 18886
 },
 {
   "city": "Náousa",
   "lat": 40.6306,
   "lng": 22.0642,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 18882
 },
 {
   "city": "Groesbeek",
   "lat": 51.7833,
   "lng": 5.9333,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 18870
 },
 {
   "city": "Laukaa",
   "lat": 62.4167,
   "lng": 25.95,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 18865
 },
 {
   "city": "Stord",
   "lat": 59.8081,
   "lng": 5.4664,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 18861
 },
 {
   "city": "Prenzlau",
   "lat": 53.3167,
   "lng": 13.8667,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 18849
 },
 {
   "city": "Piatykhatky",
   "lat": 48.4126,
   "lng": 33.7034,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 18845
 },
 {
   "city": "Qitai",
   "lat": 41.5494,
   "lng": 113.5339,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 18831
 },
 {
   "city": "Vélez",
   "lat": 6.0131,
   "lng": -73.6736,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 18808
 },
 {
   "city": "Huehuetla",
   "lat": 20.1075,
   "lng": -97.6233,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 18803
 },
 {
   "city": "Bad Tölz",
   "lat": 47.7603,
   "lng": 11.5567,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 18802
 },
 {
   "city": "Sortavala",
   "lat": 61.7,
   "lng": 30.6667,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 18801
 },
 {
   "city": "Druten",
   "lat": 51.8889,
   "lng": 5.6044,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 18797
 },
 {
   "city": "Starobilsk",
   "lat": 49.2667,
   "lng": 38.9167,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 18796
 },
 {
   "city": "Tocaima",
   "lat": 4.4578,
   "lng": -74.6347,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 18790
 },
 {
   "city": "Paks",
   "lat": 46.6219,
   "lng": 18.8558,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 18788
 },
 {
   "city": "Tlalnelhuayocan",
   "lat": 19.5667,
   "lng": -96.9667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 18715
 },
 {
   "city": "Vovchansk",
   "lat": 50.2881,
   "lng": 36.9461,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 18644
 },
 {
   "city": "Aldama",
   "lat": 28.8386,
   "lng": -105.9111,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 18642
 },
 {
   "city": "Soma",
   "lat": 39.1833,
   "lng": 27.6056,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 18633
 },
 {
   "city": "Orodara",
   "lat": 10.974,
   "lng": -4.908,
   "country": "Burkina Faso",
   "iso2": "BF",
   "iso3": "BFA",
   "capital": "minor",
   "population": 18632
 },
 {
   "city": "Krasnystaw",
   "lat": 51,
   "lng": 23.1667,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 18630
 },
 {
   "city": "Cognac",
   "lat": 45.6958,
   "lng": -0.3292,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 18628
 },
 {
   "city": "Oirschot",
   "lat": 51.5047,
   "lng": 5.3128,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 18623
 },
 {
   "city": "Starodub",
   "lat": 52.5833,
   "lng": 32.7667,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 18615
 },
 {
   "city": "Heerde",
   "lat": 52.4,
   "lng": 6.0667,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 18546
 },
 {
   "city": "Marktoberdorf",
   "lat": 47.7667,
   "lng": 10.6167,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 18539
 },
 {
   "city": "Alzey",
   "lat": 49.7517,
   "lng": 8.1161,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 18535
 },
 {
   "city": "Gostynin",
   "lat": 52.4294,
   "lng": 19.4619,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 18527
 },
 {
   "city": "Asunción Nochixtlán",
   "lat": 17.4581,
   "lng": -97.2233,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 18525
 },
 {
   "city": "Enkhuizen",
   "lat": 52.7,
   "lng": 5.2833,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 18507
 },
 {
   "city": "Bergeijk",
   "lat": 51.3203,
   "lng": 5.3592,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 18491
 },
 {
   "city": "Kherāmeh",
   "lat": 29.5,
   "lng": 53.3164,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 18477
 },
 {
   "city": "Bad Dürkheim",
   "lat": 49.4618,
   "lng": 8.1724,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 18476
 },
 {
   "city": "Monor",
   "lat": 47.3475,
   "lng": 19.4489,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 18476
 },
 {
   "city": "Taft",
   "lat": 31.7475,
   "lng": 54.2042,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 18464
 },
 {
   "city": "Weißenburg",
   "lat": 49.0306,
   "lng": 10.9719,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 18464
 },
 {
   "city": "Międzyrzecz",
   "lat": 52.4446,
   "lng": 15.578,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 18459
 },
 {
   "city": "Nara",
   "lat": 15.18,
   "lng": -7.28,
   "country": "Mali",
   "iso2": "ML",
   "iso3": "MLI",
   "capital": "minor",
   "population": 18459
 },
 {
   "city": "Coalcomán de Vázquez Pallares",
   "lat": 18.7833,
   "lng": -103.1667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 18444
 },
 {
   "city": "Ponedera",
   "lat": 10.6419,
   "lng": -74.7531,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 18430
 },
 {
   "city": "Orestiáda",
   "lat": 41.5,
   "lng": 26.5333,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 18426
 },
 {
   "city": "Svatove",
   "lat": 49.4092,
   "lng": 38.1619,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 18417
 },
 {
   "city": "San Blas Atempa",
   "lat": 16.3167,
   "lng": -95.2167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 18406
 },
 {
   "city": "Filomeno Mata",
   "lat": 20.2,
   "lng": -97.7,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 18367
 },
 {
   "city": "Nytva",
   "lat": 57.9333,
   "lng": 55.3333,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 18366
 },
 {
   "city": "Santiago Ixcuintla",
   "lat": 21.811,
   "lng": -105.2079,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 18365
 },
 {
   "city": "Campo de la Cruz",
   "lat": 10.3778,
   "lng": -74.8814,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 18354
 },
 {
   "city": "Bánovce nad Bebravou",
   "lat": 48.7186,
   "lng": 18.2581,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 18350
 },
 {
   "city": "Békés",
   "lat": 46.7769,
   "lng": 21.125,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 18322
 },
 {
   "city": "Tha Bo",
   "lat": 17.8494,
   "lng": 102.5858,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 18320
 },
 {
   "city": "San José Tenango",
   "lat": 18.15,
   "lng": -96.7333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 18316
 },
 {
   "city": "Dobrush",
   "lat": 52.4167,
   "lng": 31.3167,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 18311
 },
 {
   "city": "Charata",
   "lat": -27.2144,
   "lng": -61.1881,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 18297
 },
 {
   "city": "Bad Reichenhall",
   "lat": 47.7247,
   "lng": 12.8769,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 18278
 },
 {
   "city": "Lobos",
   "lat": -35.1864,
   "lng": -59.0961,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 18278
 },
 {
   "city": "Kristiansund",
   "lat": 63.1105,
   "lng": 7.7279,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 18273
 },
 {
   "city": "Isfana",
   "lat": 39.8389,
   "lng": 69.5275,
   "country": "Kyrgyzstan",
   "iso2": "KG",
   "iso3": "KGZ",
   "capital": "minor",
   "population": 18244
 },
 {
   "city": "Pieksämäki",
   "lat": 62.3,
   "lng": 27.1583,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 18220
 },
 {
   "city": "Sikhio",
   "lat": 14.8764,
   "lng": 101.7202,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 18209
 },
 {
   "city": "Cuautitlán",
   "lat": 19.4333,
   "lng": -104.3,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 18138
 },
 {
   "city": "Feyẕābād",
   "lat": 35.0189,
   "lng": 58.7833,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 18120
 },
 {
   "city": "Coronda",
   "lat": -31.9667,
   "lng": -60.9167,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 18115
 },
 {
   "city": "General Juan Madariaga",
   "lat": -37.0167,
   "lng": -57.1333,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 18089
 },
 {
   "city": "Hardinxveld-Giessendam",
   "lat": 51.83,
   "lng": 4.87,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 18051
 },
 {
   "city": "Middelharnis",
   "lat": 51.7535,
   "lng": 4.1647,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 18050
 },
 {
   "city": "Parchim",
   "lat": 53.4167,
   "lng": 11.8333,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 18037
 },
 {
   "city": "Łask",
   "lat": 51.5924,
   "lng": 19.1332,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 18029
 },
 {
   "city": "Lunéville",
   "lat": 48.5894,
   "lng": 6.5017,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 18027
 },
 {
   "city": "Çarşamba",
   "lat": 41.198,
   "lng": 36.726,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 18003
 },
 {
   "city": "Dombóvár",
   "lat": 46.3769,
   "lng": 18.131,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 17995
 },
 {
   "city": "Cuquío",
   "lat": 20.9275,
   "lng": -103.0239,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 17980
 },
 {
   "city": "Sabana de Torres",
   "lat": 7.3903,
   "lng": -73.5003,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 17965
 },
 {
   "city": "Juanacatlán",
   "lat": 20.5,
   "lng": -103.1667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 17955
 },
 {
   "city": "Bodegraven",
   "lat": 52.0808,
   "lng": 4.7486,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 17954
 },
 {
   "city": "Mapastepec",
   "lat": 15.4417,
   "lng": -92.8917,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 17931
 },
 {
   "city": "Pô",
   "lat": 11.1667,
   "lng": -1.15,
   "country": "Burkina Faso",
   "iso2": "BF",
   "iso3": "BFA",
   "capital": "minor",
   "population": 17924
 },
 {
   "city": "Unión de San Antonio",
   "lat": 21.128,
   "lng": -102.006,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 17915
 },
 {
   "city": "Pelaya",
   "lat": 8.6892,
   "lng": -73.6653,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 17910
 },
 {
   "city": "Nguigmi",
   "lat": 14.2532,
   "lng": 13.1108,
   "country": "Niger",
   "iso2": "NE",
   "iso3": "NER",
   "capital": "minor",
   "population": 17897
 },
 {
   "city": "Oborniki",
   "lat": 52.65,
   "lng": 16.8167,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 17895
 },
 {
   "city": "Sint-Oedenrode",
   "lat": 51.5636,
   "lng": 5.4608,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 17893
 },
 {
   "city": "Zapotlán del Rey",
   "lat": 20.4674,
   "lng": -102.9248,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 17893
 },
 {
   "city": "Yuanquan",
   "lat": 40.5004,
   "lng": 95.8,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 17886
 },
 {
   "city": "San Kamphaeng",
   "lat": 18.75,
   "lng": 99.1167,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 17857
 },
 {
   "city": "Kongsvinger",
   "lat": 60.1912,
   "lng": 11.9992,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 17851
 },
 {
   "city": "San Bartolo Tutotepec",
   "lat": 20.4,
   "lng": -98.2,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 17837
 },
 {
   "city": "Ommen",
   "lat": 52.5167,
   "lng": 6.4167,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 17813
 },
 {
   "city": "Púchov",
   "lat": 49.12,
   "lng": 18.3306,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 17810
 },
 {
   "city": "Salgar",
   "lat": 5.9639,
   "lng": -75.9775,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 17804
 },
 {
   "city": "Oroszlány",
   "lat": 47.4892,
   "lng": 18.3164,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 17802
 },
 {
   "city": "Hlybokaye",
   "lat": 55.1333,
   "lng": 27.6833,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 17790
 },
 {
   "city": "Anda",
   "lat": 9.744,
   "lng": 124.576,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 17778
 },
 {
   "city": "Rawa Mazowiecka",
   "lat": 51.7667,
   "lng": 20.25,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 17765
 },
 {
   "city": "Klaeng",
   "lat": 12.7778,
   "lng": 101.6483,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 17764
 },
 {
   "city": "Łańcut",
   "lat": 50.0687,
   "lng": 22.2291,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 17749
 },
 {
   "city": "Arsanjān",
   "lat": 29.9122,
   "lng": 53.3083,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 17642
 },
 {
   "city": "La Primavera",
   "lat": 5.4906,
   "lng": -70.4092,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 17626
 },
 {
   "city": "Benito Juárez",
   "lat": 20.8833,
   "lng": -98.2,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 17618
 },
 {
   "city": "Sam Phran",
   "lat": 13.727,
   "lng": 100.2153,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 17611
 },
 {
   "city": "Totoró",
   "lat": 2.5103,
   "lng": -76.4019,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 17611
 },
 {
   "city": "Lousã",
   "lat": 40.1125,
   "lng": -8.2469,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 17604
 },
 {
   "city": "Garwolin",
   "lat": 51.9,
   "lng": 21.6167,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 17602
 },
 {
   "city": "Tougan",
   "lat": 13.0667,
   "lng": -3.0667,
   "country": "Burkina Faso",
   "iso2": "BF",
   "iso3": "BFA",
   "capital": "minor",
   "population": 17590
 },
 {
   "city": "Aliağa",
   "lat": 38.8008,
   "lng": 26.9728,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 17578
 },
 {
   "city": "Muḩradah",
   "lat": 35.2478,
   "lng": 36.5725,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 17578
 },
 {
   "city": "Yupiltepeque",
   "lat": 14.1941,
   "lng": -89.7913,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 17574
 },
 {
   "city": "Compostela",
   "lat": 21.2389,
   "lng": -104.9,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 17573
 },
 {
   "city": "Alcochete",
   "lat": 38.7553,
   "lng": -8.9608,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 17569
 },
 {
   "city": "Sipacapa",
   "lat": 15.2128,
   "lng": -91.6342,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 17549
 },
 {
   "city": "Salcajá",
   "lat": 14.8833,
   "lng": -91.45,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 17535
 },
 {
   "city": "Marmande",
   "lat": 44.5,
   "lng": 0.1653,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 17534
 },
 {
   "city": "Guidan Roumdji",
   "lat": 13.6575,
   "lng": 6.6958,
   "country": "Niger",
   "iso2": "NE",
   "iso3": "NER",
   "capital": "minor",
   "population": 17525
 },
 {
   "city": "Moloacán",
   "lat": 17.9833,
   "lng": -94.35,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 17504
 },
 {
   "city": "Boulsa",
   "lat": 12.6667,
   "lng": -0.5833,
   "country": "Burkina Faso",
   "iso2": "BF",
   "iso3": "BFA",
   "capital": "minor",
   "population": 17489
 },
 {
   "city": "Karukh",
   "lat": 34.4868,
   "lng": 62.5918,
   "country": "Afghanistan",
   "iso2": "AF",
   "iso3": "AFG",
   "capital": "minor",
   "population": 17484
 },
 {
   "city": "Dabas",
   "lat": 47.1833,
   "lng": 19.3167,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 17481
 },
 {
   "city": "Pajapan",
   "lat": 18.2667,
   "lng": -94.6833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 17480
 },
 {
   "city": "Tepatlaxco",
   "lat": 19.0667,
   "lng": -97.9667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 17472
 },
 {
   "city": "Marche-en-Famenne",
   "lat": 50.2275,
   "lng": 5.3444,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 17455
 },
 {
   "city": "Puerto Aysén",
   "lat": -45.4068,
   "lng": -72.6977,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 17441
 },
 {
   "city": "Montemor-o-Novo",
   "lat": 38.65,
   "lng": -8.2167,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 17437
 },
 {
   "city": "Veinticinco de Mayo",
   "lat": -37.771,
   "lng": -67.7173,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 17430
 },
 {
   "city": "Totutla",
   "lat": 19.2167,
   "lng": -96.9667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 17428
 },
 {
   "city": "Forssa",
   "lat": 60.8167,
   "lng": 23.6167,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 17422
 },
 {
   "city": "Guaranda",
   "lat": 8.4672,
   "lng": -74.5367,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 17422
 },
 {
   "city": "Bolhrad",
   "lat": 45.6855,
   "lng": 28.6134,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 17400
 },
 {
   "city": "Pontarlier",
   "lat": 46.9061,
   "lng": 6.3547,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 17393
 },
 {
   "city": "Alotenango",
   "lat": 14.4878,
   "lng": -90.8058,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 17369
 },
 {
   "city": "Eldorado",
   "lat": -26.4,
   "lng": -54.6333,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 17365
 },
 {
   "city": "Ayacucho",
   "lat": -37.1525,
   "lng": -58.4882,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 17364
 },
 {
   "city": "Brignoles",
   "lat": 43.4058,
   "lng": 6.0617,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 17364
 },
 {
   "city": "Skadovsk",
   "lat": 46.1167,
   "lng": 32.9167,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 17344
 },
 {
   "city": "Lons-le-Saunier",
   "lat": 46.6744,
   "lng": 5.5539,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 17320
 },
 {
   "city": "Suesca",
   "lat": 5.1017,
   "lng": -73.7981,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 17318
 },
 {
   "city": "Betulia",
   "lat": 6.1122,
   "lng": -75.9839,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 17317
 },
 {
   "city": "Berezhany",
   "lat": 49.4464,
   "lng": 24.9436,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 17316
 },
 {
   "city": "As Suqaylibīyah",
   "lat": 35.3697,
   "lng": 36.38,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 17313
 },
 {
   "city": "Mecayapan",
   "lat": 18.2167,
   "lng": -94.8333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 17312
 },
 {
   "city": "Ban Pong",
   "lat": 13.8174,
   "lng": 99.883,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 17298
 },
 {
   "city": "Guryevsk",
   "lat": 54.7667,
   "lng": 20.6,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 17295
 },
 {
   "city": "Sigmaringen",
   "lat": 48.0867,
   "lng": 9.2164,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 17278
 },
 {
   "city": "Turhal",
   "lat": 40.3871,
   "lng": 36.0863,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 17278
 },
 {
   "city": "San Felipe",
   "lat": 14.6206,
   "lng": -91.5961,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 17268
 },
 {
   "city": "Bad Segeberg",
   "lat": 53.9356,
   "lng": 10.3089,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 17267
 },
 {
   "city": "Rattaphum",
   "lat": 7.1412,
   "lng": 100.2905,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 17257
 },
 {
   "city": "Tecolotlán",
   "lat": 20.2024,
   "lng": -104.0504,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 17257
 },
 {
   "city": "El Rosal",
   "lat": 4.8519,
   "lng": -74.2628,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 17254
 },
 {
   "city": "Echt",
   "lat": 51.1058,
   "lng": 5.8706,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 17251
 },
 {
   "city": "Waalre",
   "lat": 51.3867,
   "lng": 5.4456,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 17247
 },
 {
   "city": "Kangaba",
   "lat": 11.9333,
   "lng": -8.4167,
   "country": "Mali",
   "iso2": "ML",
   "iso3": "MLI",
   "capital": "minor",
   "population": 17232
 },
 {
   "city": "Huitán",
   "lat": 15.0486,
   "lng": -91.64,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 17209
 },
 {
   "city": "Naarden",
   "lat": 52.2953,
   "lng": 5.1622,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 17202
 },
 {
   "city": "Almolonga",
   "lat": 14.8122,
   "lng": -91.4944,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 17186
 },
 {
   "city": "Brielle",
   "lat": 51.9042,
   "lng": 4.1639,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 17182
 },
 {
   "city": "Nallıhan",
   "lat": 40.1883,
   "lng": 31.3509,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 17181
 },
 {
   "city": "Verdun",
   "lat": 49.1597,
   "lng": 5.3828,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 17161
 },
 {
   "city": "Konstantinovsk",
   "lat": 47.5833,
   "lng": 41.1,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 17160
 },
 {
   "city": "Sawankhalok",
   "lat": 17.3099,
   "lng": 99.8263,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 17148
 },
 {
   "city": "Peso da Régua",
   "lat": 41.1632,
   "lng": -7.789,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 17131
 },
 {
   "city": "Balmazújváros",
   "lat": 47.6167,
   "lng": 21.35,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 17109
 },
 {
   "city": "Heilbad Heiligenstadt",
   "lat": 51.3775,
   "lng": 10.1344,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 17105
 },
 {
   "city": "Ignacio de la Llave",
   "lat": 18.6618,
   "lng": -95.9721,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 17105
 },
 {
   "city": "San Juan del Sur",
   "lat": 11.25,
   "lng": -85.8667,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 17104
 },
 {
   "city": "Schijndel",
   "lat": 51.6183,
   "lng": 5.4364,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 17104
 },
 {
   "city": "Braunau am Inn",
   "lat": 48.2583,
   "lng": 13.0333,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 17095
 },
 {
   "city": "Mohács",
   "lat": 45.9958,
   "lng": 18.6797,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 17089
 },
 {
   "city": "Condeixa-a-Nova",
   "lat": 40.1167,
   "lng": -8.5,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 17078
 },
 {
   "city": "Zvenyhorodka",
   "lat": 49.0833,
   "lng": 30.9667,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 17078
 },
 {
   "city": "Kozienice",
   "lat": 51.5833,
   "lng": 21.5667,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 17075
 },
 {
   "city": "Gennep",
   "lat": 51.6942,
   "lng": 5.9733,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 17071
 },
 {
   "city": "Kempele",
   "lat": 64.9125,
   "lng": 25.5083,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 17066
 },
 {
   "city": "Kafr Zaytā",
   "lat": 35.3736,
   "lng": 36.6017,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 17052
 },
 {
   "city": "Santa María",
   "lat": -26.6833,
   "lng": -66.0333,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 17030
 },
 {
   "city": "Zandvoort",
   "lat": 52.3667,
   "lng": 4.5333,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 17011
 },
 {
   "city": "Staphorst",
   "lat": 52.6333,
   "lng": 6.2,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 17003
 },
 {
   "city": "Nederweert",
   "lat": 51.2828,
   "lng": 5.7472,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 17001
 },
 {
   "city": "Braniewo",
   "lat": 54.3833,
   "lng": 19.8333,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 16992
 },
 {
   "city": "Ihosy",
   "lat": -22.3996,
   "lng": 46.1167,
   "country": "Madagascar",
   "iso2": "MG",
   "iso3": "MDG",
   "capital": "minor",
   "population": 16990
 },
 {
   "city": "Retiro",
   "lat": 6.0597,
   "lng": -75.5039,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 16974
 },
 {
   "city": "Eutin",
   "lat": 54.1378,
   "lng": 10.6181,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 16971
 },
 {
   "city": "Ashmyany",
   "lat": 54.425,
   "lng": 25.9375,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 16966
 },
 {
   "city": "Alcantara",
   "lat": 9.9715,
   "lng": 123.4047,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 16910
 },
 {
   "city": "Cham",
   "lat": 49.2183,
   "lng": 12.6658,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 16907
 },
 {
   "city": "Son en Breugel",
   "lat": 51.5158,
   "lng": 5.5022,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 16904
 },
 {
   "city": "Dehāqān",
   "lat": 31.94,
   "lng": 51.6478,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 16899
 },
 {
   "city": "Bytów",
   "lat": 54.1667,
   "lng": 17.5,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 16888
 },
 {
   "city": "Diepholz",
   "lat": 52.6072,
   "lng": 8.3711,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 16882
 },
 {
   "city": "Kronach",
   "lat": 50.2411,
   "lng": 11.3281,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 16874
 },
 {
   "city": "Pran Buri",
   "lat": 12.3939,
   "lng": 99.9159,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 16851
 },
 {
   "city": "São Pedro do Sul",
   "lat": 40.75,
   "lng": -8.0667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 16851
 },
 {
   "city": "Hajdúnánás",
   "lat": 47.85,
   "lng": 21.4333,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 16828
 },
 {
   "city": "Brzesko",
   "lat": 49.9667,
   "lng": 20.6167,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 16819
 },
 {
   "city": "Kauhava",
   "lat": 63.1014,
   "lng": 23.0639,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 16784
 },
 {
   "city": "Grójec",
   "lat": 51.8656,
   "lng": 20.8675,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 16758
 },
 {
   "city": "El Piñón",
   "lat": 10.4039,
   "lng": -74.8231,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 16752
 },
 {
   "city": "Cajolá",
   "lat": 14.9252,
   "lng": -91.616,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 16751
 },
 {
   "city": "Shahbā",
   "lat": 32.8539,
   "lng": 36.6294,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 16745
 },
 {
   "city": "Chinampa de Gorostiza",
   "lat": 21.3667,
   "lng": -97.7333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 16741
 },
 {
   "city": "Diksmuide",
   "lat": 51.0333,
   "lng": 2.8667,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 16739
 },
 {
   "city": "Kaiwen",
   "lat": 27.1548,
   "lng": 99.8371,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 16738
 },
 {
   "city": "Ponte de Sôr",
   "lat": 39.25,
   "lng": -8.0167,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 16722
 },
 {
   "city": "Krapkowice",
   "lat": 50.4751,
   "lng": 17.9654,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 16721
 },
 {
   "city": "Kelheim",
   "lat": 48.9167,
   "lng": 11.8667,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 16714
 },
 {
   "city": "Asten",
   "lat": 51.4031,
   "lng": 5.7472,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 16710
 },
 {
   "city": "Cabeceiras de Basto",
   "lat": 41.5167,
   "lng": -8,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 16710
 },
 {
   "city": "Jilotepec",
   "lat": 19.6113,
   "lng": -96.9224,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 16682
 },
 {
   "city": "Zequ",
   "lat": 35.0376,
   "lng": 101.4606,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 16666
 },
 {
   "city": "Federación",
   "lat": -30.9833,
   "lng": -57.9167,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 16658
 },
 {
   "city": "Güroymak",
   "lat": 38.5762,
   "lng": 42.0207,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 16613
 },
 {
   "city": "Noordwijkerhout",
   "lat": 52.2594,
   "lng": 4.4919,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 16605
 },
 {
   "city": "Pajapita",
   "lat": 14.7243,
   "lng": -92.0334,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 16600
 },
 {
   "city": "Menemen",
   "lat": 38.6,
   "lng": 27.0667,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 16588
 },
 {
   "city": "Xinyuan",
   "lat": 37.2953,
   "lng": 99.0341,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 16585
 },
 {
   "city": "Mátészalka",
   "lat": 47.9431,
   "lng": 22.3167,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 16576
 },
 {
   "city": "Rypin",
   "lat": 53.0667,
   "lng": 19.45,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 16558
 },
 {
   "city": "Panagyurishte",
   "lat": 42.5026,
   "lng": 24.1802,
   "country": "Bulgaria",
   "iso2": "BG",
   "iso3": "BGR",
   "capital": "minor",
   "population": 16553
 },
 {
   "city": "Gryfice",
   "lat": 53.9167,
   "lng": 15.2,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 16524
 },
 {
   "city": "Ciudad Guadalupe Victoria",
   "lat": 24.4497,
   "lng": -104.1225,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 16506
 },
 {
   "city": "Ivanava",
   "lat": 52.1333,
   "lng": 25.55,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 16498
 },
 {
   "city": "Zapotlán de Juárez",
   "lat": 19.9667,
   "lng": -98.85,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 16493
 },
 {
   "city": "Kežmarok",
   "lat": 49.1383,
   "lng": 20.4292,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 16481
 },
 {
   "city": "Złotoryja",
   "lat": 51.1264,
   "lng": 15.9198,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 16479
 },
 {
   "city": "Reyhanlı",
   "lat": 36.2679,
   "lng": 36.5675,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 16469
 },
 {
   "city": "Loimaa",
   "lat": 60.8514,
   "lng": 23.0583,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 16467
 },
 {
   "city": "Anorí",
   "lat": 7.0736,
   "lng": -75.1469,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 16447
 },
 {
   "city": "Hannut",
   "lat": 50.6725,
   "lng": 5.078,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 16435
 },
 {
   "city": "Bilohirsk",
   "lat": 45.0544,
   "lng": 34.6022,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 16428
 },
 {
   "city": "Santa Cruz Naranjo",
   "lat": 14.3833,
   "lng": -90.3667,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 16385
 },
 {
   "city": "Palestina de los Altos",
   "lat": 14.9333,
   "lng": -91.7,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 16384
 },
 {
   "city": "Olecko",
   "lat": 54.0333,
   "lng": 22.5,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 16364
 },
 {
   "city": "Juchique de Ferrer",
   "lat": 19.8333,
   "lng": -96.7,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 16360
 },
 {
   "city": "Cosautlán",
   "lat": 19.3333,
   "lng": -96.9833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 16353
 },
 {
   "city": "Stará Ľubovňa",
   "lat": 49.3167,
   "lng": 20.6833,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 16348
 },
 {
   "city": "Digne-les-Bains",
   "lat": 44.0925,
   "lng": 6.2356,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 16333
 },
 {
   "city": "Orimattila",
   "lat": 60.8042,
   "lng": 25.7333,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 16326
 },
 {
   "city": "Shahriston",
   "lat": 39.7667,
   "lng": 68.8167,
   "country": "Tajikistan",
   "iso2": "TJ",
   "iso3": "TJK",
   "capital": "minor",
   "population": 16295
 },
 {
   "city": "Ayvalık",
   "lat": 39.3167,
   "lng": 26.7,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 16283
 },
 {
   "city": "San Antonio Oeste",
   "lat": -40.7333,
   "lng": -64.95,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 16265
 },
 {
   "city": "Spárti",
   "lat": 37.0739,
   "lng": 22.4294,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 16239
 },
 {
   "city": "Oteapan",
   "lat": 18,
   "lng": -94.6667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 16222
 },
 {
   "city": "Aranyaprathet",
   "lat": 13.6928,
   "lng": 102.5017,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 16211
 },
 {
   "city": "Sedan",
   "lat": 49.7019,
   "lng": 4.9403,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 16193
 },
 {
   "city": "Guanagazapa",
   "lat": 14.2333,
   "lng": -90.65,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 16187
 },
 {
   "city": "As Sukhnah",
   "lat": 34.8868,
   "lng": 38.8721,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 16173
 },
 {
   "city": "San Cristóbal Cucho",
   "lat": 14.9,
   "lng": -91.7833,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 16158
 },
 {
   "city": "Rygge",
   "lat": 59.3747,
   "lng": 10.7147,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 16145
 },
 {
   "city": "Bar",
   "lat": 49.0781,
   "lng": 27.6831,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 16136
 },
 {
   "city": "Vendôme",
   "lat": 47.7928,
   "lng": 1.0656,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 16133
 },
 {
   "city": "Bang Phae",
   "lat": 13.6983,
   "lng": 99.9068,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 16130
 },
 {
   "city": "Chinggil",
   "lat": 46.666,
   "lng": 90.3794,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 16098
 },
 {
   "city": "Mezőkövesd",
   "lat": 47.8067,
   "lng": 20.5647,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 16098
 },
 {
   "city": "Chai Prakan",
   "lat": 19.7322,
   "lng": 99.1403,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 16090
 },
 {
   "city": "Aquitania",
   "lat": 5.5194,
   "lng": -72.8836,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 16087
 },
 {
   "city": "Mezőtúr",
   "lat": 47.0042,
   "lng": 20.6181,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 16086
 },
 {
   "city": "Kisvárda",
   "lat": 48.2264,
   "lng": 22.0844,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 16084
 },
 {
   "city": "Santiago Tulantepec",
   "lat": 20.0397,
   "lng": -98.3575,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 16078
 },
 {
   "city": "Csongrád",
   "lat": 46.7111,
   "lng": 20.1403,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 16027
 },
 {
   "city": "Ciudad de Huitzuco",
   "lat": 18.3,
   "lng": -99.35,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 16025
 },
 {
   "city": "Alaşehir",
   "lat": 38.35,
   "lng": 28.5167,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 16012
 },
 {
   "city": "Thérmi",
   "lat": 40.5472,
   "lng": 23.0197,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 16004
 },
 {
   "city": "El Rosario",
   "lat": 22.9922,
   "lng": -105.8572,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 16001
 },
 {
   "city": "Höganäs",
   "lat": 56.196,
   "lng": 12.5769,
   "country": "Sweden",
   "iso2": "SE",
   "iso3": "SWE",
   "capital": "minor",
   "population": 16001
 },
 {
   "city": "Dianga",
   "lat": 34.0587,
   "lng": 103.2074,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 15993
 },
 {
   "city": "Tasīl",
   "lat": 32.8353,
   "lng": 35.9714,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 15985
 },
 {
   "city": "Yaypan",
   "lat": 40.3758,
   "lng": 70.8156,
   "country": "Uzbekistan",
   "iso2": "UZ",
   "iso3": "UZB",
   "capital": "minor",
   "population": 15984
 },
 {
   "city": "Vicente Guerrero",
   "lat": 23.75,
   "lng": -103.9833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 15982
 },
 {
   "city": "Chivolo",
   "lat": 10.0264,
   "lng": -74.6214,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 15960
 },
 {
   "city": "Beek",
   "lat": 50.9394,
   "lng": 5.7961,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 15929
 },
 {
   "city": "Ban Dung",
   "lat": 17.704,
   "lng": 103.2623,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 15913
 },
 {
   "city": "Bastogne",
   "lat": 50.0042,
   "lng": 5.72,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 15894
 },
 {
   "city": "San Julián",
   "lat": 21.0167,
   "lng": -102.1667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 15890
 },
 {
   "city": "Skvyra",
   "lat": 49.7333,
   "lng": 29.6833,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 15889
 },
 {
   "city": "Lam Luk Ka",
   "lat": 13.9297,
   "lng": 100.7375,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 15881
 },
 {
   "city": "Sertã",
   "lat": 39.8008,
   "lng": -8.1003,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 15880
 },
 {
   "city": "İncirliova",
   "lat": 37.8547,
   "lng": 27.7236,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 15870
 },
 {
   "city": "Bruck an der Mur",
   "lat": 47.4106,
   "lng": 15.2686,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 15837
 },
 {
   "city": "Harlingen",
   "lat": 53.1736,
   "lng": 5.4272,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 15822
 },
 {
   "city": "Atescatempa",
   "lat": 14.175,
   "lng": -89.7417,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 15820
 },
 {
   "city": "Tlaltetela",
   "lat": 19.3167,
   "lng": -96.9,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 15818
 },
 {
   "city": "Batalha",
   "lat": 39.65,
   "lng": -8.8167,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 15805
 },
 {
   "city": "Ixhuatlán del Sureste",
   "lat": 18.017,
   "lng": -94.38,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 15800
 },
 {
   "city": "Tenango de Doria",
   "lat": 20.3356,
   "lng": -98.2267,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 15793
 },
 {
   "city": "Voss",
   "lat": 60.7025,
   "lng": 6.4231,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 15787
 },
 {
   "city": "Macedo de Cavaleiros",
   "lat": 41.5333,
   "lng": -6.95,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 15776
 },
 {
   "city": "Guasca",
   "lat": 4.8658,
   "lng": -73.8772,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 15727
 },
 {
   "city": "Przeworsk",
   "lat": 50.0667,
   "lng": 22.5,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 15713
 },
 {
   "city": "Okhtyrka",
   "lat": 50.3074,
   "lng": 34.9016,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 15694
 },
 {
   "city": "Si Satchanalai",
   "lat": 17.4155,
   "lng": 99.8152,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 15691
 },
 {
   "city": "Kuusamo",
   "lat": 65.9667,
   "lng": 29.1667,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 15688
 },
 {
   "city": "Tīrān",
   "lat": 32.7025,
   "lng": 51.1536,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 15673
 },
 {
   "city": "La Cruz",
   "lat": 23.9214,
   "lng": -106.8919,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 15657
 },
 {
   "city": "Montbrison",
   "lat": 45.6075,
   "lng": 4.0653,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 15656
 },
 {
   "city": "Belen",
   "lat": 36.4917,
   "lng": 36.1917,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 15629
 },
 {
   "city": "Serpa",
   "lat": 37.9333,
   "lng": -7.5833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 15623
 },
 {
   "city": "Rakhiv",
   "lat": 48.05,
   "lng": 24.2167,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 15621
 },
 {
   "city": "Bozyazı",
   "lat": 36.1,
   "lng": 32.975,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 15615
 },
 {
   "city": "Tatahuicapan",
   "lat": 18.25,
   "lng": -94.7667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 15614
 },
 {
   "city": "Mangqu",
   "lat": 35.5707,
   "lng": 100.7798,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 15609
 },
 {
   "city": "Pamiers",
   "lat": 43.1164,
   "lng": 1.6108,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 15603
 },
 {
   "city": "At-Bashy",
   "lat": 41.1725,
   "lng": 75.7968,
   "country": "Kyrgyzstan",
   "iso2": "KG",
   "iso3": "KGZ",
   "capital": "minor",
   "population": 15601
 },
 {
   "city": "Łęczyca",
   "lat": 52.0583,
   "lng": 19.2,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 15593
 },
 {
   "city": "Najasa",
   "lat": 21.0836,
   "lng": -77.7472,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 15579
 },
 {
   "city": "Bohodukhiv",
   "lat": 50.1608,
   "lng": 35.5164,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 15576
 },
 {
   "city": "Juma Shahri",
   "lat": 39.7094,
   "lng": 66.6614,
   "country": "Uzbekistan",
   "iso2": "UZ",
   "iso3": "UZB",
   "capital": "minor",
   "population": 15571
 },
 {
   "city": "Szarvas",
   "lat": 46.85,
   "lng": 20.6,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 15565
 },
 {
   "city": "Sarıkamış",
   "lat": 40.3314,
   "lng": 42.5903,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 15557
 },
 {
   "city": "Einsiedeln",
   "lat": 47.1278,
   "lng": 8.7431,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 15550
 },
 {
   "city": "Monte Plata",
   "lat": 18.807,
   "lng": -69.784,
   "country": "Dominican Republic",
   "iso2": "DO",
   "iso3": "DOM",
   "capital": "minor",
   "population": 15532
 },
 {
   "city": "Mandal",
   "lat": 58.0333,
   "lng": 7.4833,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 15529
 },
 {
   "city": "Santa María de Jesús",
   "lat": 14.4933,
   "lng": -90.7094,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 15529
 },
 {
   "city": "Uusikaupunki",
   "lat": 60.7833,
   "lng": 21.4167,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 15510
 },
 {
   "city": "Saint-Julien-en-Genevois",
   "lat": 46.1442,
   "lng": 6.0842,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 15509
 },
 {
   "city": "Zelenogradsk",
   "lat": 54.95,
   "lng": 20.4833,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 15493
 },
 {
   "city": "Kalocsa",
   "lat": 46.5333,
   "lng": 18.9856,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 15490
 },
 {
   "city": "Jędrzejów",
   "lat": 50.6333,
   "lng": 20.3,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 15484
 },
 {
   "city": "Toul",
   "lat": 48.675,
   "lng": 5.8917,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 15470
 },
 {
   "city": "Churumuco de Morelos",
   "lat": 18.6167,
   "lng": -101.6333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 15455
 },
 {
   "city": "Differdange",
   "lat": 49.5242,
   "lng": 5.8914,
   "country": "Luxembourg",
   "iso2": "LU",
   "iso3": "LUX",
   "capital": "minor",
   "population": 15455
 },
 {
   "city": "Kafr Nubl",
   "lat": 35.6139,
   "lng": 36.5611,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 15455
 },
 {
   "city": "Kinna",
   "lat": 57.4954,
   "lng": 12.6805,
   "country": "Sweden",
   "iso2": "SE",
   "iso3": "SWE",
   "capital": "minor",
   "population": 15448
 },
 {
   "city": "Madera",
   "lat": 29.19,
   "lng": -108.1414,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 15447
 },
 {
   "city": "Jiblah",
   "lat": 13.9167,
   "lng": 44.15,
   "country": "Yemen",
   "iso2": "YE",
   "iso3": "YEM",
   "capital": "minor",
   "population": 15431
 },
 {
   "city": "Nuth",
   "lat": 50.9167,
   "lng": 5.8833,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 15423
 },
 {
   "city": "Khao Yoi",
   "lat": 13.2403,
   "lng": 99.8254,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 15416
 },
 {
   "city": "Spittal an der Drau",
   "lat": 46.7917,
   "lng": 13.4958,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 15413
 },
 {
   "city": "Bad Neustadt",
   "lat": 50.3219,
   "lng": 10.2161,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 15411
 },
 {
   "city": "Klimavichy",
   "lat": 53.6167,
   "lng": 31.95,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 15408
 },
 {
   "city": "Fontainebleau",
   "lat": 48.4089,
   "lng": 2.7017,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 15407
 },
 {
   "city": "Kérouané",
   "lat": 9.2704,
   "lng": -9.02,
   "country": "Guinea",
   "iso2": "GN",
   "iso3": "GIN",
   "capital": "minor",
   "population": 15406
 },
 {
   "city": "Landázuri",
   "lat": 6.2181,
   "lng": -73.8114,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 15395
 },
 {
   "city": "Villa del Rosario",
   "lat": -31.5833,
   "lng": -63.5333,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 15394
 },
 {
   "city": "Künzelsau",
   "lat": 49.2833,
   "lng": 9.6833,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 15391
 },
 {
   "city": "Ayutla de los Libres",
   "lat": 16.9,
   "lng": -99.2167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 15370
 },
 {
   "city": "Thoen",
   "lat": 17.61,
   "lng": 99.2234,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 15360
 },
 {
   "city": "Château-Thierry",
   "lat": 49.0464,
   "lng": 3.4031,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 15351
 },
 {
   "city": "Amatitán",
   "lat": 20.8333,
   "lng": -103.7167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 15344
 },
 {
   "city": "Alta",
   "lat": 69.9686,
   "lng": 23.2714,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 15342
 },
 {
   "city": "Castro Daire",
   "lat": 40.9,
   "lng": -7.9333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 15339
 },
 {
   "city": "Świdwin",
   "lat": 53.7667,
   "lng": 15.7833,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 15338
 },
 {
   "city": "Lahoysk",
   "lat": 54.2,
   "lng": 27.85,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 15336
 },
 {
   "city": "Chaltyr",
   "lat": 47.2833,
   "lng": 39.5,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 15334
 },
 {
   "city": "Hilvarenbeek",
   "lat": 51.4861,
   "lng": 5.1367,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 15334
 },
 {
   "city": "Khamir",
   "lat": 15.99,
   "lng": 43.95,
   "country": "Yemen",
   "iso2": "YE",
   "iso3": "YEM",
   "capital": "minor",
   "population": 15333
 },
 {
   "city": "Cárdenas",
   "lat": 22.0103,
   "lng": -99.6522,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 15331
 },
 {
   "city": "Villa Paranacito",
   "lat": -33.7,
   "lng": -58.6833,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 15321
 },
 {
   "city": "Birecik",
   "lat": 37.025,
   "lng": 37.9769,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 15317
 },
 {
   "city": "Loviisa",
   "lat": 60.4569,
   "lng": 26.225,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 15311
 },
 {
   "city": "Conguaco",
   "lat": 14.047,
   "lng": -90.0336,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 15295
 },
 {
   "city": "Erongarícuaro",
   "lat": 19.5833,
   "lng": -101.7167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 15291
 },
 {
   "city": "Chilcuautla",
   "lat": 20.3333,
   "lng": -99.2333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 15284
 },
 {
   "city": "Maardu",
   "lat": 59.4781,
   "lng": 25.0161,
   "country": "Estonia",
   "iso2": "EE",
   "iso3": "EST",
   "capital": "minor",
   "population": 15284
 },
 {
   "city": "Penacova",
   "lat": 40.2667,
   "lng": -8.2667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 15251
 },
 {
   "city": "Támesis",
   "lat": 5.6647,
   "lng": -75.7144,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 15218
 },
 {
   "city": "Issoire",
   "lat": 45.5442,
   "lng": 3.2489,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 15214
 },
 {
   "city": "San Rafael Pie de la Cuesta",
   "lat": 14.9333,
   "lng": -91.9167,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 15207
 },
 {
   "city": "La Apartada",
   "lat": 8.05,
   "lng": -75.3356,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 15204
 },
 {
   "city": "Masty",
   "lat": 53.4,
   "lng": 24.5333,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 15197
 },
 {
   "city": "Siemiatycze",
   "lat": 52.4272,
   "lng": 22.8625,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 15169
 },
 {
   "city": "Waremme",
   "lat": 50.7,
   "lng": 5.25,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 15168
 },
 {
   "city": "Moura",
   "lat": 38.1397,
   "lng": -7.4505,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 15167
 },
 {
   "city": "Nazaré",
   "lat": 39.6,
   "lng": -9.0667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 15158
 },
 {
   "city": "Samobor",
   "lat": 45.8011,
   "lng": 15.711,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 15147
 },
 {
   "city": "San Antonio La Paz",
   "lat": 14.75,
   "lng": -90.2833,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 15142
 },
 {
   "city": "Joghtāy",
   "lat": 36.6361,
   "lng": 57.0728,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 15134
 },
 {
   "city": "Kysucké Nové Mesto",
   "lat": 49.3,
   "lng": 18.7833,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 15132
 },
 {
   "city": "Choszczno",
   "lat": 53.1667,
   "lng": 15.4,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 15109
 },
 {
   "city": "Gardabani",
   "lat": 41.45,
   "lng": 45.1,
   "country": "Georgia",
   "iso2": "GE",
   "iso3": "GEO",
   "capital": "minor",
   "population": 15100
 },
 {
   "city": "Huitzilan",
   "lat": 19.9667,
   "lng": -97.6833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 15096
 },
 {
   "city": "Budakeszi",
   "lat": 47.5111,
   "lng": 18.93,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 15088
 },
 {
   "city": "Sárvár",
   "lat": 47.2539,
   "lng": 16.9353,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 15072
 },
 {
   "city": "Tapolca",
   "lat": 46.8828,
   "lng": 17.4411,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 15072
 },
 {
   "city": "Tulchyn",
   "lat": 48.6744,
   "lng": 28.8497,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 15051
 },
 {
   "city": "Amlash",
   "lat": 37.0975,
   "lng": 50.1864,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 15047
 },
 {
   "city": "Boskoop",
   "lat": 52.0667,
   "lng": 4.6333,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 15045
 },
 {
   "city": "Ünye",
   "lat": 41.1271,
   "lng": 37.2882,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 15039
 },
 {
   "city": "Ylivieska",
   "lat": 64.0722,
   "lng": 24.5375,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 15039
 },
 {
   "city": "Zozocolco de Hidalgo",
   "lat": 20.1333,
   "lng": -97.5833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 15031
 },
 {
   "city": "Galanta",
   "lat": 48.1914,
   "lng": 17.7308,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 15029
 },
 {
   "city": "Mindelheim",
   "lat": 48.0333,
   "lng": 10.4667,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 15002
 },
 {
   "city": "Acala",
   "lat": 16.5533,
   "lng": -92.8069,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 15001
 },
 {
   "city": "Şalkhad",
   "lat": 32.4914,
   "lng": 36.7106,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 15000
 },
 {
   "city": "Bonanza",
   "lat": 14.0167,
   "lng": -84.5833,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 15000
 },
 {
   "city": "Chaguaramas",
   "lat": 9.3385,
   "lng": -66.2525,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 15000
 },
 {
   "city": "Battalgazi",
   "lat": 38.4228,
   "lng": 38.3656,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 14994
 },
 {
   "city": "Verdal",
   "lat": 63.7922,
   "lng": 11.4817,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 14986
 },
 {
   "city": "Obando",
   "lat": 4.5761,
   "lng": -75.9731,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 14980
 },
 {
   "city": "Vesoul",
   "lat": 47.6222,
   "lng": 6.1553,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 14973
 },
 {
   "city": "Skalica",
   "lat": 48.8436,
   "lng": 17.2264,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 14967
 },
 {
   "city": "Brake",
   "lat": 53.3333,
   "lng": 8.4833,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 14965
 },
 {
   "city": "Westervoort",
   "lat": 51.9667,
   "lng": 5.9667,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 14944
 },
 {
   "city": "Vennesla",
   "lat": 58.3106,
   "lng": 7.8569,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 14935
 },
 {
   "city": "Calkiní",
   "lat": 20.3667,
   "lng": -90.05,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 14934
 },
 {
   "city": "Tecuala",
   "lat": 22.4004,
   "lng": -105.46,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 14921
 },
 {
   "city": "Bitburg",
   "lat": 49.9747,
   "lng": 6.5256,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 14904
 },
 {
   "city": "La Flèche",
   "lat": 47.6997,
   "lng": -0.0761,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 14902
 },
 {
   "city": "Mariestad",
   "lat": 58.705,
   "lng": 13.828,
   "country": "Sweden",
   "iso2": "SE",
   "iso3": "SWE",
   "capital": "minor",
   "population": 14891
 },
 {
   "city": "Senlis",
   "lat": 49.2072,
   "lng": 2.5867,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 14891
 },
 {
   "city": "Nastola",
   "lat": 60.9477,
   "lng": 25.9301,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 14890
 },
 {
   "city": "Kilimli",
   "lat": 41.4833,
   "lng": 31.8333,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 14889
 },
 {
   "city": "Pontivy",
   "lat": 48.0686,
   "lng": -2.9628,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 14889
 },
 {
   "city": "Sassenheim",
   "lat": 52.2258,
   "lng": 4.5225,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 14886
 },
 {
   "city": "Kontiolahti",
   "lat": 62.7667,
   "lng": 29.85,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 14827
 },
 {
   "city": "Grândola",
   "lat": 38.1768,
   "lng": -8.5689,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 14826
 },
 {
   "city": "Tall Abyaḑ",
   "lat": 36.6975,
   "lng": 38.9567,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 14825
 },
 {
   "city": "Alexándreia",
   "lat": 40.6283,
   "lng": 22.4454,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 14821
 },
 {
   "city": "Cabañas",
   "lat": 14.9333,
   "lng": -89.8,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 14817
 },
 {
   "city": "Huixcolotla",
   "lat": 18.9219,
   "lng": -97.7708,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 14810
 },
 {
   "city": "Cerritos",
   "lat": 22.4275,
   "lng": -100.2783,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 14804
 },
 {
   "city": "Levoča",
   "lat": 49.0228,
   "lng": 20.5906,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 14803
 },
 {
   "city": "Vrbovec",
   "lat": 45.8833,
   "lng": 16.4333,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 14797
 },
 {
   "city": "Montargis",
   "lat": 47.9969,
   "lng": 2.7325,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 14789
 },
 {
   "city": "Maqat",
   "lat": 47.65,
   "lng": 53.3167,
   "country": "Kazakhstan",
   "iso2": "KZ",
   "iso3": "KAZ",
   "capital": "minor",
   "population": 14756
 },
 {
   "city": "Detva",
   "lat": 48.5572,
   "lng": 19.4208,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 14751
 },
 {
   "city": "Tamuín",
   "lat": 22,
   "lng": -98.7833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 14748
 },
 {
   "city": "Limanowa",
   "lat": 49.7167,
   "lng": 20.4667,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 14738
 },
 {
   "city": "Slochteren",
   "lat": 53.2167,
   "lng": 6.8,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 14737
 },
 {
   "city": "Tepetzintla",
   "lat": 21.1452,
   "lng": -97.8558,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 14736
 },
 {
   "city": "Bar-le-Duc",
   "lat": 48.7717,
   "lng": 5.1672,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 14733
 },
 {
   "city": "Morlaix",
   "lat": 48.5775,
   "lng": -3.8278,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 14729
 },
 {
   "city": "Ząbkowice Śląskie",
   "lat": 50.5897,
   "lng": 16.8124,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 14728
 },
 {
   "city": "Saint-Omer",
   "lat": 50.7483,
   "lng": 2.2608,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 14726
 },
 {
   "city": "Loreto",
   "lat": 26.0128,
   "lng": -111.3433,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 14724
 },
 {
   "city": "Ivanić-Grad",
   "lat": 45.7081,
   "lng": 16.3947,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 14723
 },
 {
   "city": "Le Raincy",
   "lat": 48.8992,
   "lng": 2.5231,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 14708
 },
 {
   "city": "Ochakiv",
   "lat": 46.6186,
   "lng": 31.5392,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 14705
 },
 {
   "city": "Tulle",
   "lat": 45.2658,
   "lng": 1.7722,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 14705
 },
 {
   "city": "Ardestān",
   "lat": 33.3797,
   "lng": 52.3725,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 14698
 },
 {
   "city": "Grodzisk Wielkopolski",
   "lat": 52.2333,
   "lng": 16.3667,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 14697
 },
 {
   "city": "Carmen de Areco",
   "lat": -34.3833,
   "lng": -59.8167,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 14692
 },
 {
   "city": "Berettyóújfalu",
   "lat": 47.2167,
   "lng": 21.55,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 14690
 },
 {
   "city": "Thuin",
   "lat": 50.3397,
   "lng": 4.287,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 14671
 },
 {
   "city": "Condoto",
   "lat": 5.0917,
   "lng": -76.65,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 14660
 },
 {
   "city": "Ratzeburg",
   "lat": 53.7017,
   "lng": 10.7567,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 14652
 },
 {
   "city": "Tiszaújváros",
   "lat": 47.9228,
   "lng": 21.0519,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 14649
 },
 {
   "city": "Mineral del Monte",
   "lat": 20.1333,
   "lng": -98.6667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 14640
 },
 {
   "city": "Gouré",
   "lat": 13.9874,
   "lng": 10.27,
   "country": "Niger",
   "iso2": "NE",
   "iso3": "NER",
   "capital": "minor",
   "population": 14639
 },
 {
   "city": "Técpan de Galeana",
   "lat": 17.25,
   "lng": -100.6833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 14638
 },
 {
   "city": "Nannestad",
   "lat": 60.2456,
   "lng": 10.9528,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 14637
 },
 {
   "city": "Woudrichem",
   "lat": 51.8133,
   "lng": 5.0006,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 14634
 },
 {
   "city": "Sepīdān",
   "lat": 30.2606,
   "lng": 51.9842,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 14633
 },
 {
   "city": "Zontecomatlán de López y Fuentes",
   "lat": 20.7667,
   "lng": -98.3333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 14620
 },
 {
   "city": "Xincun",
   "lat": 27.6739,
   "lng": 103.8739,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 14614
 },
 {
   "city": "Lapua",
   "lat": 62.9708,
   "lng": 23.0069,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 14609
 },
 {
   "city": "Radomyshl",
   "lat": 50.4947,
   "lng": 29.2333,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 14607
 },
 {
   "city": "Wschowa",
   "lat": 51.8,
   "lng": 16.3,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 14607
 },
 {
   "city": "Ciudad Hidalgo",
   "lat": 14.6792,
   "lng": -92.1497,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 14606
 },
 {
   "city": "Paianía",
   "lat": 37.95,
   "lng": 23.85,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 14595
 },
 {
   "city": "Breza",
   "lat": 44.021,
   "lng": 18.261,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 14564
 },
 {
   "city": "Mocha",
   "lat": 13.3167,
   "lng": 43.25,
   "country": "Yemen",
   "iso2": "YE",
   "iso3": "YEM",
   "capital": "minor",
   "population": 14562
 },
 {
   "city": "Les Sables-d’Olonne",
   "lat": 46.4972,
   "lng": -1.7833,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 14545
 },
 {
   "city": "Bludenz",
   "lat": 47.1533,
   "lng": 9.8219,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 14539
 },
 {
   "city": "Sarmīn",
   "lat": 35.9,
   "lng": 36.7167,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 14530
 },
 {
   "city": "Tsimlyansk",
   "lat": 47.6467,
   "lng": 42.0947,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 14528
 },
 {
   "city": "Cadaval",
   "lat": 39.25,
   "lng": -9.1,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 14525
 },
 {
   "city": "Anapoima",
   "lat": 4.5503,
   "lng": -74.5361,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 14519
 },
 {
   "city": "Guachochi",
   "lat": 26.8194,
   "lng": -107.07,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 14513
 },
 {
   "city": "Pilisvörösvár",
   "lat": 47.6211,
   "lng": 18.9108,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 14500
 },
 {
   "city": "Askim",
   "lat": 59.5832,
   "lng": 11.1629,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 14488
 },
 {
   "city": "Lopik",
   "lat": 51.9722,
   "lng": 4.9464,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 14473
 },
 {
   "city": "Sopetrán",
   "lat": 6.5017,
   "lng": -75.7433,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 14453
 },
 {
   "city": "Lagoa",
   "lat": 37.1333,
   "lng": -8.45,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 14442
 },
 {
   "city": "Nioro",
   "lat": 15.1833,
   "lng": -9.55,
   "country": "Mali",
   "iso2": "ML",
   "iso3": "MLI",
   "capital": "minor",
   "population": 14421
 },
 {
   "city": "Chiconquiaco",
   "lat": 19.75,
   "lng": -96.8167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 14394
 },
 {
   "city": "San Cristóbal",
   "lat": -30.3105,
   "lng": -61.2372,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 14389
 },
 {
   "city": "Santa Rosalía",
   "lat": 27.3389,
   "lng": -112.2669,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 14357
 },
 {
   "city": "Pomorie",
   "lat": 42.5569,
   "lng": 27.6405,
   "country": "Bulgaria",
   "iso2": "BG",
   "iso3": "BGR",
   "capital": "minor",
   "population": 14335
 },
 {
   "city": "San Andrés Timilpan",
   "lat": 19.8667,
   "lng": -99.7333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 14335
 },
 {
   "city": "Tenerife",
   "lat": 9.8989,
   "lng": -74.8589,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 14320
 },
 {
   "city": "Estremoz",
   "lat": 38.8422,
   "lng": -7.5881,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 14318
 },
 {
   "city": "Bor",
   "lat": 37.8963,
   "lng": 34.5627,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 14309
 },
 {
   "city": "Jever",
   "lat": 53.5744,
   "lng": 7.9008,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 14301
 },
 {
   "city": "Rovinj",
   "lat": 45.0833,
   "lng": 13.6333,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 14294
 },
 {
   "city": "Dinan",
   "lat": 48.4556,
   "lng": -2.0503,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 14281
 },
 {
   "city": "Pak Thong Chai",
   "lat": 14.7302,
   "lng": 102.0263,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 14272
 },
 {
   "city": "Ciénega de Flores",
   "lat": 25.95,
   "lng": -100.1833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 14268
 },
 {
   "city": "Det Udom",
   "lat": 14.906,
   "lng": 105.0784,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 14264
 },
 {
   "city": "Balassagyarmat",
   "lat": 48.0712,
   "lng": 19.2937,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 14262
 },
 {
   "city": "Sines",
   "lat": 37.9546,
   "lng": -8.8644,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 14238
 },
 {
   "city": "Kouroussa",
   "lat": 10.653,
   "lng": -9.892,
   "country": "Guinea",
   "iso2": "GN",
   "iso3": "GIN",
   "capital": "minor",
   "population": 14223
 },
 {
   "city": "Náfplio",
   "lat": 37.5667,
   "lng": 22.8,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 14203
 },
 {
   "city": "Feldkirchen",
   "lat": 46.7236,
   "lng": 14.0919,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 14198
 },
 {
   "city": "Almoloya de Alquisiras",
   "lat": 18.85,
   "lng": -99.85,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 14196
 },
 {
   "city": "Haaren",
   "lat": 51.6017,
   "lng": 5.2228,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 14195
 },
 {
   "city": "Juan de Acosta",
   "lat": 10.8286,
   "lng": -75.035,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 14184
 },
 {
   "city": "Puerto Deseado",
   "lat": -47.75,
   "lng": -65.9167,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 14183
 },
 {
   "city": "Bua Yai",
   "lat": 15.5858,
   "lng": 102.4337,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 14168
 },
 {
   "city": "Juan Aldama",
   "lat": 24.291,
   "lng": -103.394,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 14162
 },
 {
   "city": "Grajales",
   "lat": 19.25,
   "lng": -97.7833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 14159
 },
 {
   "city": "Püspökladány",
   "lat": 47.3197,
   "lng": 21.1139,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 14154
 },
 {
   "city": "Narvik",
   "lat": 68.4383,
   "lng": 17.4278,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 14148
 },
 {
   "city": "Astravyets",
   "lat": 54.6136,
   "lng": 25.9553,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 14147
 },
 {
   "city": "Kerben",
   "lat": 41.5,
   "lng": 71.75,
   "country": "Kyrgyzstan",
   "iso2": "KG",
   "iso3": "KGZ",
   "capital": "minor",
   "population": 14141
 },
 {
   "city": "Sai Buri",
   "lat": 6.7012,
   "lng": 101.6181,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 14137
 },
 {
   "city": "Añatuya",
   "lat": -28.4667,
   "lng": -62.8333,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 14133
 },
 {
   "city": "Tepoztlán",
   "lat": 18.9853,
   "lng": -99.0997,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 14130
 },
 {
   "city": "Valença",
   "lat": 42.0282,
   "lng": -8.6339,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 14127
 },
 {
   "city": "Naţanz",
   "lat": 33.5111,
   "lng": 51.9181,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 14122
 },
 {
   "city": "El Porvenir de Velasco Suárez",
   "lat": 15.4556,
   "lng": -92.2794,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 14121
 },
 {
   "city": "Titiribí",
   "lat": 6.0625,
   "lng": -75.7936,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 14092
 },
 {
   "city": "Beilen",
   "lat": 52.8567,
   "lng": 6.5111,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 14089
 },
 {
   "city": "Ezequiel Montes",
   "lat": 20.6667,
   "lng": -99.8833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 14053
 },
 {
   "city": "Tempio Pausania",
   "lat": 40.9015,
   "lng": 9.1044,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 14052
 },
 {
   "city": "El Carmen de Atrato",
   "lat": 5.8983,
   "lng": -76.1431,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 14049
 },
 {
   "city": "Gouveia",
   "lat": 40.5,
   "lng": -7.6,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 14046
 },
 {
   "city": "Merzifon",
   "lat": 40.8836,
   "lng": 35.4711,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 14042
 },
 {
   "city": "Río de Oro",
   "lat": 8.2917,
   "lng": -73.3872,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 14041
 },
 {
   "city": "Nelas",
   "lat": 40.5167,
   "lng": -7.85,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 14037
 },
 {
   "city": "Lübben (Spreewald)",
   "lat": 51.95,
   "lng": 13.9,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 14036
 },
 {
   "city": "Fāmenīn",
   "lat": 35.1139,
   "lng": 48.9717,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 14019
 },
 {
   "city": "Villacidro",
   "lat": 39.4578,
   "lng": 8.7424,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 14019
 },
 {
   "city": "Córdoba",
   "lat": 0.8533,
   "lng": -77.5178,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 14006
 },
 {
   "city": "Nesebar",
   "lat": 42.6595,
   "lng": 27.7247,
   "country": "Bulgaria",
   "iso2": "BG",
   "iso3": "BGR",
   "capital": "minor",
   "population": 14000
 },
 {
   "city": "Montfoort",
   "lat": 52.045,
   "lng": 4.9508,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 13996
 },
 {
   "city": "Koundara",
   "lat": 12.48,
   "lng": -13.296,
   "country": "Guinea",
   "iso2": "GN",
   "iso3": "GIN",
   "capital": "minor",
   "population": 13990
 },
 {
   "city": "Guazacapán",
   "lat": 14.0751,
   "lng": -90.4161,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 13979
 },
 {
   "city": "Raydah",
   "lat": 15.8233,
   "lng": 44.0386,
   "country": "Yemen",
   "iso2": "YE",
   "iso3": "YEM",
   "capital": "minor",
   "population": 13971
 },
 {
   "city": "Mjölby",
   "lat": 58.3321,
   "lng": 15.1312,
   "country": "Sweden",
   "iso2": "SE",
   "iso3": "SWE",
   "capital": "minor",
   "population": 13947
 },
 {
   "city": "Bang Racham",
   "lat": 14.8864,
   "lng": 100.3235,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 13937
 },
 {
   "city": "Mór",
   "lat": 47.3717,
   "lng": 18.2086,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 13936
 },
 {
   "city": "Castelsarrasin",
   "lat": 44.04,
   "lng": 1.1069,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 13934
 },
 {
   "city": "Pastores",
   "lat": 14.5967,
   "lng": -90.7547,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 13902
 },
 {
   "city": "Tucacas",
   "lat": 10.7978,
   "lng": -68.3175,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 13901
 },
 {
   "city": "Babaeski",
   "lat": 41.4325,
   "lng": 27.0931,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 13879
 },
 {
   "city": "Kauhajoki",
   "lat": 62.4319,
   "lng": 22.1794,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 13875
 },
 {
   "city": "Człuchów",
   "lat": 53.65,
   "lng": 17.3667,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 13869
 },
 {
   "city": "Alcanena",
   "lat": 39.4667,
   "lng": -8.6667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 13868
 },
 {
   "city": "Taphan Hin",
   "lat": 16.2108,
   "lng": 100.4188,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 13868
 },
 {
   "city": "Guapí",
   "lat": 2.5604,
   "lng": -77.86,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 13853
 },
 {
   "city": "Polotitlán de la Ilustración",
   "lat": 20.2231,
   "lng": -99.8147,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 13851
 },
 {
   "city": "Kiskőrös",
   "lat": 46.6203,
   "lng": 19.2836,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 13833
 },
 {
   "city": "Horodyshche",
   "lat": 49.2925,
   "lng": 31.4581,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 13799
 },
 {
   "city": "Demre",
   "lat": 36.255,
   "lng": 29.9978,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 13793
 },
 {
   "city": "Apostolove",
   "lat": 47.6595,
   "lng": 33.717,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 13792
 },
 {
   "city": "İslahiye",
   "lat": 37.0264,
   "lng": 36.6322,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 13775
 },
 {
   "city": "La Quiaca",
   "lat": -22.1056,
   "lng": -65.6,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 13761
 },
 {
   "city": "Hola Prystan",
   "lat": 46.5167,
   "lng": 32.5167,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 13760
 },
 {
   "city": "Jardín",
   "lat": 5.5983,
   "lng": -75.8197,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 13748
 },
 {
   "city": "Enghien",
   "lat": 50.7,
   "lng": 4.0333,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 13734
 },
 {
   "city": "Argentan",
   "lat": 48.7444,
   "lng": -0.0203,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 13730
 },
 {
   "city": "Schwaz",
   "lat": 47.35,
   "lng": 11.7,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 13728
 },
 {
   "city": "Xireg",
   "lat": 36.9257,
   "lng": 98.4837,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 13723
 },
 {
   "city": "Gołdap",
   "lat": 54.3063,
   "lng": 22.3036,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 13716
 },
 {
   "city": "Montabaur",
   "lat": 50.4375,
   "lng": 7.8258,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 13691
 },
 {
   "city": "San Pedro Pochutla",
   "lat": 15.7463,
   "lng": -96.4652,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 13685
 },
 {
   "city": "Altos del Rosario",
   "lat": 8.7914,
   "lng": -74.1636,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 13669
 },
 {
   "city": "Erbach",
   "lat": 49.6569,
   "lng": 8.9931,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 13666
 },
 {
   "city": "Lauterbach",
   "lat": 50.6378,
   "lng": 9.3944,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 13664
 },
 {
   "city": "Svetlogorsk",
   "lat": 54.9333,
   "lng": 20.15,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 13663
 },
 {
   "city": "Aldama",
   "lat": 22.9194,
   "lng": -98.0736,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 13661
 },
 {
   "city": "Jindayris",
   "lat": 36.3947,
   "lng": 36.6889,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 13661
 },
 {
   "city": "Tavşanlı",
   "lat": 39.5461,
   "lng": 29.4922,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 13652
 },
 {
   "city": "Filandia",
   "lat": 4.6733,
   "lng": -75.6583,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 13628
 },
 {
   "city": "Haßfurt",
   "lat": 50.0353,
   "lng": 10.5123,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 13609
 },
 {
   "city": "San Javier",
   "lat": -30.5833,
   "lng": -59.95,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 13604
 },
 {
   "city": "Frías",
   "lat": -28.6496,
   "lng": -65.15,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 13594
 },
 {
   "city": "Głubczyce",
   "lat": 50.2,
   "lng": 17.8333,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 13572
 },
 {
   "city": "Agua Blanca",
   "lat": 14.4833,
   "lng": -89.6494,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 13571
 },
 {
   "city": "Winsum",
   "lat": 53.3312,
   "lng": 6.5157,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 13560
 },
 {
   "city": "Sátoraljaújhely",
   "lat": 48.3941,
   "lng": 21.6561,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 13554
 },
 {
   "city": "Nidzica",
   "lat": 53.3583,
   "lng": 20.425,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 13547
 },
 {
   "city": "Dinant",
   "lat": 50.2564,
   "lng": 4.9136,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 13544
 },
 {
   "city": "Kaharlyk",
   "lat": 49.8522,
   "lng": 30.8092,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 13544
 },
 {
   "city": "Chañaral",
   "lat": -26.3479,
   "lng": -70.6224,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 13543
 },
 {
   "city": "Uitgeest",
   "lat": 52.5292,
   "lng": 4.7103,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 13528
 },
 {
   "city": "Eichstätt",
   "lat": 48.8919,
   "lng": 11.1839,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 13525
 },
 {
   "city": "San Jorge",
   "lat": 14.9253,
   "lng": -89.5897,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 13525
 },
 {
   "city": "Chalma",
   "lat": 21.2167,
   "lng": -98.4,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 13479
 },
 {
   "city": "Wolsztyn",
   "lat": 52.1167,
   "lng": 16.1167,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 13477
 },
 {
   "city": "Fereydūnshahr",
   "lat": 32.9411,
   "lng": 50.1211,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 13475
 },
 {
   "city": "Ilamatlán",
   "lat": 20.7833,
   "lng": -98.45,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 13474
 },
 {
   "city": "Niquinohomo",
   "lat": 11.9,
   "lng": -86.1,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 13458
 },
 {
   "city": "Ascensión",
   "lat": 31.0928,
   "lng": -107.9964,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 13456
 },
 {
   "city": "Manatí",
   "lat": 10.4481,
   "lng": -74.9592,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 13456
 },
 {
   "city": "Dok Kham Tai",
   "lat": 19.162,
   "lng": 99.9926,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 13450
 },
 {
   "city": "Unión de Tula",
   "lat": 19.957,
   "lng": -104.268,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 13446
 },
 {
   "city": "Khoyniki",
   "lat": 51.9,
   "lng": 29.9667,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 13439
 },
 {
   "city": "San Jacinto del Cauca",
   "lat": 8.2497,
   "lng": -74.72,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 13426
 },
 {
   "city": "Kaspi",
   "lat": 41.925,
   "lng": 44.4222,
   "country": "Georgia",
   "iso2": "GE",
   "iso3": "GEO",
   "capital": "minor",
   "population": 13423
 },
 {
   "city": "Náfpaktos",
   "lat": 38.3917,
   "lng": 21.8275,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 13415
 },
 {
   "city": "Develi",
   "lat": 38.3886,
   "lng": 35.4925,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 13411
 },
 {
   "city": "Bollnäs",
   "lat": 61.3484,
   "lng": 16.3883,
   "country": "Sweden",
   "iso2": "SE",
   "iso3": "SWE",
   "capital": "minor",
   "population": 13398
 },
 {
   "city": "Arruda dos Vinhos",
   "lat": 38.9833,
   "lng": -9.0667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 13391
 },
 {
   "city": "Kastoriá",
   "lat": 40.5181,
   "lng": 21.2688,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 13387
 },
 {
   "city": "Joaquín V. González",
   "lat": -25.1171,
   "lng": -64.1247,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 13376
 },
 {
   "city": "Feldbach",
   "lat": 46.955,
   "lng": 15.8883,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 13369
 },
 {
   "city": "Karakoçan",
   "lat": 38.9551,
   "lng": 40.0375,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 13353
 },
 {
   "city": "Cadereyta",
   "lat": 20.7,
   "lng": -99.8167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 13347
 },
 {
   "city": "Rheinfelden",
   "lat": 47.5539,
   "lng": 7.7958,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 13337
 },
 {
   "city": "Bozüyük",
   "lat": 39.9078,
   "lng": 30.0367,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 13307
 },
 {
   "city": "Grimstad",
   "lat": 58.3405,
   "lng": 8.5934,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 13304
 },
 {
   "city": "Fontenay-le-Comte",
   "lat": 46.4669,
   "lng": -0.8064,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 13302
 },
 {
   "city": "Rosas",
   "lat": 2.26,
   "lng": -76.74,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 13302
 },
 {
   "city": "Soyaniquilpan",
   "lat": 19.9892,
   "lng": -99.4361,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 13290
 },
 {
   "city": "Trogir",
   "lat": 43.5167,
   "lng": 16.25,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 13260
 },
 {
   "city": "Usumatlán",
   "lat": 14.9489,
   "lng": -89.7767,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 13245
 },
 {
   "city": "Ad Duraykīsh",
   "lat": 34.8969,
   "lng": 36.1346,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 13244
 },
 {
   "city": "Ulvila",
   "lat": 61.4292,
   "lng": 21.875,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 13237
 },
 {
   "city": "Tauberbischofsheim",
   "lat": 49.6225,
   "lng": 9.6628,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 13231
 },
 {
   "city": "Gvardeysk",
   "lat": 54.65,
   "lng": 21.0667,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 13227
 },
 {
   "city": "Beyla",
   "lat": 8.687,
   "lng": -8.657,
   "country": "Guinea",
   "iso2": "GN",
   "iso3": "GIN",
   "capital": "minor",
   "population": 13204
 },
 {
   "city": "Bombarral",
   "lat": 39.2667,
   "lng": -9.15,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 13193
 },
 {
   "city": "Gmunden",
   "lat": 47.9181,
   "lng": 13.7994,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 13191
 },
 {
   "city": "Vila Pouca de Aguiar",
   "lat": 41.4833,
   "lng": -7.6333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 13187
 },
 {
   "city": "Erbaa",
   "lat": 40.6667,
   "lng": 36.5667,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 13168
 },
 {
   "city": "Vasylivka",
   "lat": 47.4344,
   "lng": 35.2808,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 13166
 },
 {
   "city": "Woudenberg",
   "lat": 52.0806,
   "lng": 5.4164,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 13166
 },
 {
   "city": "Trzebnica",
   "lat": 51.305,
   "lng": 17.0614,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 13161
 },
 {
   "city": "Miahuatlán",
   "lat": 18.2833,
   "lng": -97.2833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 13159
 },
 {
   "city": "Autun",
   "lat": 46.9511,
   "lng": 4.2986,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 13157
 },
 {
   "city": "Villa Juárez",
   "lat": 27.1278,
   "lng": -109.8426,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 13153
 },
 {
   "city": "Santa María Jalapa del Marqués",
   "lat": 16.4401,
   "lng": -95.4434,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 13148
 },
 {
   "city": "Singuilucan",
   "lat": 19.9675,
   "lng": -98.5178,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 13143
 },
 {
   "city": "Bergen",
   "lat": 51.5992,
   "lng": 6.0336,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 13140
 },
 {
   "city": "Ansião",
   "lat": 39.9167,
   "lng": -8.4333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 13128
 },
 {
   "city": "Neustadt",
   "lat": 49.58,
   "lng": 10.6089,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 13121
 },
 {
   "city": "Brig-Glis",
   "lat": 46.3159,
   "lng": 7.9876,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 13109
 },
 {
   "city": "Miranda do Corvo",
   "lat": 40.1,
   "lng": -8.3333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 13098
 },
 {
   "city": "Mazatlán Villa de Flores",
   "lat": 18.0167,
   "lng": -96.9167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 13097
 },
 {
   "city": "Gex",
   "lat": 46.3333,
   "lng": 6.0578,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 13093
 },
 {
   "city": "Chos Malal",
   "lat": -37.3833,
   "lng": -70.2667,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 13092
 },
 {
   "city": "Küssnacht",
   "lat": 47.0828,
   "lng": 8.4408,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 13084
 },
 {
   "city": "Phra Samut Chedi",
   "lat": 13.5934,
   "lng": 100.5801,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 13082
 },
 {
   "city": "Châteaudun",
   "lat": 48.0708,
   "lng": 1.3378,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 13078
 },
 {
   "city": "Włodawa",
   "lat": 51.55,
   "lng": 23.55,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 13066
 },
 {
   "city": "Alcácer do Sal",
   "lat": 38.3725,
   "lng": -8.5133,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 13046
 },
 {
   "city": "Shahr-e Herāt",
   "lat": 30.0542,
   "lng": 54.3731,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 13032
 },
 {
   "city": "Bayeux",
   "lat": 49.2786,
   "lng": -0.7039,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 13017
 },
 {
   "city": "Tetiiv",
   "lat": 49.3708,
   "lng": 29.69,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 13015
 },
 {
   "city": "Kaji",
   "lat": 26.0249,
   "lng": 102.7873,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 13005
 },
 {
   "city": "Vieira do Minho",
   "lat": 41.6333,
   "lng": -8.1333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 12997
 },
 {
   "city": "Notodden",
   "lat": 59.5617,
   "lng": 9.2658,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 12994
 },
 {
   "city": "Karapınar",
   "lat": 37.7147,
   "lng": 33.5508,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 12989
 },
 {
   "city": "Nacozari de García",
   "lat": 30.3833,
   "lng": -109.6833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 12987
 },
 {
   "city": "Korneuburg",
   "lat": 48.3453,
   "lng": 16.3331,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 12986
 },
 {
   "city": "Bonyhád",
   "lat": 46.3,
   "lng": 18.53,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 12982
 },
 {
   "city": "Maravilla Tenejapa",
   "lat": 16.1333,
   "lng": -91.2833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 12945
 },
 {
   "city": "Song Phi Nong",
   "lat": 14.2306,
   "lng": 100.0389,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 12926
 },
 {
   "city": "Balatonfüred",
   "lat": 46.95,
   "lng": 17.8833,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 12923
 },
 {
   "city": "Valparaíso",
   "lat": 22.7667,
   "lng": -103.5667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 12919
 },
 {
   "city": "Bahçe",
   "lat": 37.2039,
   "lng": 36.5825,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 12917
 },
 {
   "city": "Anolaima",
   "lat": 4.7633,
   "lng": -74.4647,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 12911
 },
 {
   "city": "Schinnen",
   "lat": 50.9428,
   "lng": 5.8894,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 12911
 },
 {
   "city": "İdil",
   "lat": 37.3347,
   "lng": 41.8894,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 12905
 },
 {
   "city": "Guéret",
   "lat": 46.1706,
   "lng": 1.8683,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 12889
 },
 {
   "city": "Yavoriv",
   "lat": 49.9469,
   "lng": 23.3931,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 12888
 },
 {
   "city": "Tapilula",
   "lat": 17.2536,
   "lng": -93.0093,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 12887
 },
 {
   "city": "Sungurlu",
   "lat": 40.161,
   "lng": 34.377,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 12886
 },
 {
   "city": "Malaryta",
   "lat": 51.7972,
   "lng": 24.0808,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 12883
 },
 {
   "city": "Neunkirchen",
   "lat": 47.7269,
   "lng": 16.0817,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 12879
 },
 {
   "city": "Mayenne",
   "lat": 48.3031,
   "lng": -0.6136,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 12874
 },
 {
   "city": "Novhorod-Siverskyi",
   "lat": 51.9833,
   "lng": 33.2667,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 12862
 },
 {
   "city": "Nuevo Ideal",
   "lat": 24.8875,
   "lng": -105.0728,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 12850
 },
 {
   "city": "Chiquimulilla",
   "lat": 14.0858,
   "lng": -90.3822,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 12842
 },
 {
   "city": "Mora",
   "lat": 61.0096,
   "lng": 14.5635,
   "country": "Sweden",
   "iso2": "SE",
   "iso3": "SWE",
   "capital": "minor",
   "population": 12826
 },
 {
   "city": "Berkovitsa",
   "lat": 43.2371,
   "lng": 23.1251,
   "country": "Bulgaria",
   "iso2": "BG",
   "iso3": "BGR",
   "capital": "minor",
   "population": 12821
 },
 {
   "city": "Chiatura",
   "lat": 42.2903,
   "lng": 43.2819,
   "country": "Georgia",
   "iso2": "GE",
   "iso3": "GEO",
   "capital": "minor",
   "population": 12803
 },
 {
   "city": "Rosario del Tala",
   "lat": -32.3008,
   "lng": -59.1389,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 12801
 },
 {
   "city": "Bershad",
   "lat": 48.3728,
   "lng": 29.5325,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 12795
 },
 {
   "city": "Kapelle",
   "lat": 51.5,
   "lng": 3.95,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 12785
 },
 {
   "city": "Gyomaendrőd",
   "lat": 46.9361,
   "lng": 20.8233,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 12784
 },
 {
   "city": "Franeker",
   "lat": 53.1875,
   "lng": 5.54,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 12781
 },
 {
   "city": "Oudenbosch",
   "lat": 51.5892,
   "lng": 4.5239,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 12780
 },
 {
   "city": "Pichilemu",
   "lat": -34.3851,
   "lng": -72.0049,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 12776
 },
 {
   "city": "Perez",
   "lat": 14.1833,
   "lng": 121.9333,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 12767
 },
 {
   "city": "Agdangan",
   "lat": 13.8758,
   "lng": 121.9122,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 12764
 },
 {
   "city": "Kaeng Khoi",
   "lat": 14.5864,
   "lng": 100.9967,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 12752
 },
 {
   "city": "Adygeysk",
   "lat": 44.88,
   "lng": 39.19,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 12745
 },
 {
   "city": "San Salvador",
   "lat": -31.6167,
   "lng": -58.5,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 12733
 },
 {
   "city": "Diébougou",
   "lat": 10.9667,
   "lng": -3.25,
   "country": "Burkina Faso",
   "iso2": "BF",
   "iso3": "BFA",
   "capital": "minor",
   "population": 12732
 },
 {
   "city": "Chaiyo",
   "lat": 14.6666,
   "lng": 100.4702,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 12710
 },
 {
   "city": "Sabinov",
   "lat": 49.1,
   "lng": 21.1,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 12700
 },
 {
   "city": "Derventa",
   "lat": 44.98,
   "lng": 17.91,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 12680
 },
 {
   "city": "Pfarrkirchen",
   "lat": 48.4419,
   "lng": 12.9443,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 12677
 },
 {
   "city": "Hajdúhadház",
   "lat": 47.6833,
   "lng": 21.6667,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 12669
 },
 {
   "city": "Los Santos",
   "lat": 6.7561,
   "lng": -73.1022,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 12648
 },
 {
   "city": "Al Muzayrīb",
   "lat": 32.7109,
   "lng": 36.0266,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 12640
 },
 {
   "city": "Kamianka-Dniprovska",
   "lat": 47.4792,
   "lng": 34.4232,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 12638
 },
 {
   "city": "Junín de los Andes",
   "lat": -39.9506,
   "lng": -71.0694,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 12621
 },
 {
   "city": "Kalajoki",
   "lat": 64.2597,
   "lng": 23.9486,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 12621
 },
 {
   "city": "Maxcanú",
   "lat": 20.5833,
   "lng": -89.9833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 12621
 },
 {
   "city": "Santa Bárbara de Pinto",
   "lat": 9.4353,
   "lng": -74.7017,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 12610
 },
 {
   "city": "Niksar",
   "lat": 40.5833,
   "lng": 36.9667,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 12577
 },
 {
   "city": "Chok Chai",
   "lat": 14.7284,
   "lng": 102.1652,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 12568
 },
 {
   "city": "El Fuerte",
   "lat": 26.4214,
   "lng": -108.62,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 12566
 },
 {
   "city": "Bonneville",
   "lat": 46.0789,
   "lng": 6.4008,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 12557
 },
 {
   "city": "Rong Kwang",
   "lat": 18.3392,
   "lng": 100.3172,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 12553
 },
 {
   "city": "Sankt Veit an der Glan",
   "lat": 46.7667,
   "lng": 14.3603,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 12547
 },
 {
   "city": "Golub-Dobrzyń",
   "lat": 53.1,
   "lng": 19.05,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 12546
 },
 {
   "city": "Sabugal",
   "lat": 40.35,
   "lng": -7.0833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 12544
 },
 {
   "city": "Ban Laem",
   "lat": 13.2168,
   "lng": 99.9767,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 12541
 },
 {
   "city": "Koriukivka",
   "lat": 51.7833,
   "lng": 32.25,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 12539
 },
 {
   "city": "La Carlota",
   "lat": -33.4179,
   "lng": -63.2935,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 12537
 },
 {
   "city": "Kantang",
   "lat": 7.4067,
   "lng": 99.515,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 12533
 },
 {
   "city": "Goražde",
   "lat": 43.6667,
   "lng": 18.9778,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 12512
 },
 {
   "city": "Ocotepec",
   "lat": 17.2191,
   "lng": -93.1724,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 12508
 },
 {
   "city": "Tiszavasvári",
   "lat": 47.9511,
   "lng": 21.3689,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 12508
 },
 {
   "city": "Brzeziny",
   "lat": 51.8,
   "lng": 19.75,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 12501
 },
 {
   "city": "Isla Mujeres",
   "lat": 21.2084,
   "lng": -86.7115,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 12491
 },
 {
   "city": "Kamin-Kashyrskyi",
   "lat": 51.6242,
   "lng": 24.9606,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 12489
 },
 {
   "city": "Pyrzyce",
   "lat": 53.1417,
   "lng": 14.8917,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 12484
 },
 {
   "city": "Grave",
   "lat": 51.7592,
   "lng": 5.7383,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 12483
 },
 {
   "city": "Tenango del Aire",
   "lat": 19.1575,
   "lng": -98.8581,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 12470
 },
 {
   "city": "Santa Ana Maya",
   "lat": 20,
   "lng": -101.0167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 12466
 },
 {
   "city": "Mira",
   "lat": 40.4285,
   "lng": -8.7363,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 12465
 },
 {
   "city": "San Bartolo",
   "lat": 15.0844,
   "lng": -91.4558,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 12459
 },
 {
   "city": "Urla",
   "lat": 38.3222,
   "lng": 26.7647,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 12454
 },
 {
   "city": "Voerendaal",
   "lat": 50.8833,
   "lng": 5.9167,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 12452
 },
 {
   "city": "Sátão",
   "lat": 40.7333,
   "lng": -7.7167,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 12444
 },
 {
   "city": "Alanya",
   "lat": 36.5436,
   "lng": 31.9997,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 12436
 },
 {
   "city": "Balchik",
   "lat": 43.4102,
   "lng": 28.1662,
   "country": "Bulgaria",
   "iso2": "BG",
   "iso3": "BGR",
   "capital": "minor",
   "population": 12421
 },
 {
   "city": "Lubaczów",
   "lat": 50.1556,
   "lng": 23.123,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 12415
 },
 {
   "city": "Neerijnen",
   "lat": 51.8333,
   "lng": 5.2833,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 12397
 },
 {
   "city": "San Pedro Jicayán",
   "lat": 16.4167,
   "lng": -97.9833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 12387
 },
 {
   "city": "Saboyá",
   "lat": 5.6969,
   "lng": -73.7631,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 12372
 },
 {
   "city": "Santa Ana",
   "lat": 30.5406,
   "lng": -111.1205,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 12372
 },
 {
   "city": "Dokkum",
   "lat": 53.3253,
   "lng": 5.9989,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 12365
 },
 {
   "city": "Aleksandrów Kujawski",
   "lat": 52.875,
   "lng": 18.7,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 12359
 },
 {
   "city": "Forécariah",
   "lat": 9.43,
   "lng": -13.098,
   "country": "Guinea",
   "iso2": "GN",
   "iso3": "GIN",
   "capital": "minor",
   "population": 12358
 },
 {
   "city": "Sever do Vouga",
   "lat": 40.7167,
   "lng": -8.3667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 12356
 },
 {
   "city": "Zunil",
   "lat": 14.7836,
   "lng": -91.4844,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 12356
 },
 {
   "city": "Reẕvānshahr",
   "lat": 37.5511,
   "lng": 49.1394,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 12355
 },
 {
   "city": "Vobkent Shahri",
   "lat": 40.0233,
   "lng": 64.5139,
   "country": "Uzbekistan",
   "iso2": "UZ",
   "iso3": "UZB",
   "capital": "minor",
   "population": 12351
 },
 {
   "city": "Huai Yot",
   "lat": 7.7894,
   "lng": 99.6347,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 12337
 },
 {
   "city": "Nong Khae",
   "lat": 14.3352,
   "lng": 100.8727,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 12336
 },
 {
   "city": "Foča",
   "lat": 43.5,
   "lng": 18.7833,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 12334
 },
 {
   "city": "Mecatlán",
   "lat": 20.2135,
   "lng": -97.6574,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 12332
 },
 {
   "city": "Sarrebourg",
   "lat": 48.7347,
   "lng": 7.0539,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 12331
 },
 {
   "city": "Kálymnos",
   "lat": 36.9512,
   "lng": 26.9832,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 12324
 },
 {
   "city": "Emiliano Zapata",
   "lat": 19.65,
   "lng": -98.55,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 12309
 },
 {
   "city": "Nagykáta",
   "lat": 47.4178,
   "lng": 19.7414,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 12280
 },
 {
   "city": "Hatillo de Loba",
   "lat": 8.9556,
   "lng": -74.0769,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 12270
 },
 {
   "city": "Córdoba",
   "lat": 9.5867,
   "lng": -74.8272,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 12266
 },
 {
   "city": "Pargas",
   "lat": 60.3,
   "lng": 22.3,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 12266
 },
 {
   "city": "Revúca",
   "lat": 48.6833,
   "lng": 20.1167,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 12249
 },
 {
   "city": "Emet",
   "lat": 39.3415,
   "lng": 29.2586,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 12246
 },
 {
   "city": "Ebersberg",
   "lat": 48.0833,
   "lng": 11.9667,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 12239
 },
 {
   "city": "Cuichapa",
   "lat": 18.7667,
   "lng": -96.8667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 12238
 },
 {
   "city": "Hasköy",
   "lat": 38.6864,
   "lng": 41.6936,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 12238
 },
 {
   "city": "Tempoal de Sánchez",
   "lat": 21.5167,
   "lng": -98.3833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 12237
 },
 {
   "city": "Sillamäe",
   "lat": 59.3931,
   "lng": 27.7742,
   "country": "Estonia",
   "iso2": "EE",
   "iso3": "EST",
   "capital": "minor",
   "population": 12230
 },
 {
   "city": "Mende",
   "lat": 44.5183,
   "lng": 3.5006,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 12227
 },
 {
   "city": "Ahram",
   "lat": 28.8825,
   "lng": 51.2744,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 12182
 },
 {
   "city": "Chanal",
   "lat": 16.6489,
   "lng": -92.2214,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 12181
 },
 {
   "city": "Vöcklabruck",
   "lat": 48.0086,
   "lng": 13.6558,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 12179
 },
 {
   "city": "Leibnitz",
   "lat": 46.7831,
   "lng": 15.545,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 12176
 },
 {
   "city": "Hattem",
   "lat": 52.4744,
   "lng": 6.0697,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 12173
 },
 {
   "city": "Kırkağaç",
   "lat": 39.1056,
   "lng": 27.6731,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 12162
 },
 {
   "city": "Na Wa",
   "lat": 17.4692,
   "lng": 104.102,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 12160
 },
 {
   "city": "Ilmajoki",
   "lat": 62.7333,
   "lng": 22.5833,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 12159
 },
 {
   "city": "Ebéjico",
   "lat": 6.3264,
   "lng": -75.7661,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 12158
 },
 {
   "city": "Liperi",
   "lat": 62.5333,
   "lng": 29.3833,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 12150
 },
 {
   "city": "Arganil",
   "lat": 40.2167,
   "lng": -8.05,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 12145
 },
 {
   "city": "Grootegast",
   "lat": 53.2091,
   "lng": 6.2674,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 12143
 },
 {
   "city": "Cocotitlán",
   "lat": 19.2167,
   "lng": -98.85,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 12142
 },
 {
   "city": "Sapna",
   "lat": 44.4917,
   "lng": 19.0028,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 12136
 },
 {
   "city": "Ortaköy",
   "lat": 38.7372,
   "lng": 34.0386,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 12132
 },
 {
   "city": "Eura",
   "lat": 61.1333,
   "lng": 22.0833,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 12128
 },
 {
   "city": "Beryslav",
   "lat": 46.8333,
   "lng": 33.4167,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 12123
 },
 {
   "city": "Veľký Krtíš",
   "lat": 48.215,
   "lng": 19.3381,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 12115
 },
 {
   "city": "Citlaltépec",
   "lat": 21.3366,
   "lng": -97.8784,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 12109
 },
 {
   "city": "Alaplı",
   "lat": 41.1833,
   "lng": 31.3833,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 12105
 },
 {
   "city": "San Carlos Yautepec",
   "lat": 16.5,
   "lng": -96.1,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 12101
 },
 {
   "city": "Županja",
   "lat": 45.0667,
   "lng": 18.7,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 12090
 },
 {
   "city": "Caimito",
   "lat": 8.7894,
   "lng": -75.1161,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 12077
 },
 {
   "city": "Tábua",
   "lat": 40.3667,
   "lng": -8.0333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 12071
 },
 {
   "city": "Kozloduy",
   "lat": 43.7764,
   "lng": 23.7294,
   "country": "Bulgaria",
   "iso2": "BG",
   "iso3": "BGR",
   "capital": "minor",
   "population": 12067
 },
 {
   "city": "Curití",
   "lat": 6.6044,
   "lng": -73.0681,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 12065
 },
 {
   "city": "Biga",
   "lat": 40.2281,
   "lng": 27.2422,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 12063
 },
 {
   "city": "Oiba",
   "lat": 6.2639,
   "lng": -73.2992,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 12063
 },
 {
   "city": "Ponte da Barca",
   "lat": 41.8,
   "lng": -8.4167,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 12061
 },
 {
   "city": "Alavus",
   "lat": 62.5861,
   "lng": 23.6194,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 12044
 },
 {
   "city": "Perleberg",
   "lat": 53.0667,
   "lng": 11.8667,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 12035
 },
 {
   "city": "Huité",
   "lat": 14.9175,
   "lng": -89.7172,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 12021
 },
 {
   "city": "Châteaubriant",
   "lat": 47.7169,
   "lng": -1.3761,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 12011
 },
 {
   "city": "Bilovodsk",
   "lat": 49.1992,
   "lng": 39.5756,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 12000
 },
 {
   "city": "Provins",
   "lat": 48.5589,
   "lng": 3.2994,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 12000
 },
 {
   "city": "Wang Saphung",
   "lat": 17.2995,
   "lng": 101.7624,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 11992
 },
 {
   "city": "Tiszakécske",
   "lat": 46.9311,
   "lng": 20.095,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 11990
 },
 {
   "city": "Volosovo",
   "lat": 59.4472,
   "lng": 29.4847,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 11987
 },
 {
   "city": "Bicske",
   "lat": 47.4907,
   "lng": 18.6363,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 11969
 },
 {
   "city": "Nong Bua",
   "lat": 15.8647,
   "lng": 100.5858,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 11951
 },
 {
   "city": "Mykhailivka",
   "lat": 47.2717,
   "lng": 35.2248,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 11949
 },
 {
   "city": "Alijó",
   "lat": 41.2764,
   "lng": -7.4749,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 11942
 },
 {
   "city": "Sogndal",
   "lat": 61.2297,
   "lng": 7.1006,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 11938
 },
 {
   "city": "Sárbogárd",
   "lat": 46.8878,
   "lng": 18.6193,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 11937
 },
 {
   "city": "Don Sak",
   "lat": 9.3169,
   "lng": 99.6944,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 11934
 },
 {
   "city": "Schoonhoven",
   "lat": 51.9475,
   "lng": 4.8486,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 11922
 },
 {
   "city": "Aheqi",
   "lat": 40.9372,
   "lng": 78.4543,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 11910
 },
 {
   "city": "Burhaniye",
   "lat": 39.5108,
   "lng": 26.9786,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 11908
 },
 {
   "city": "Mitontic",
   "lat": 16.8667,
   "lng": -92.6333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11906
 },
 {
   "city": "Ried im Innkreis",
   "lat": 48.21,
   "lng": 13.4894,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 11903
 },
 {
   "city": "Balancán",
   "lat": 17.8,
   "lng": -91.53,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11895
 },
 {
   "city": "Ojuelos de Jalisco",
   "lat": 21.8642,
   "lng": -101.5933,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11881
 },
 {
   "city": "Janów Lubelski",
   "lat": 50.7,
   "lng": 22.4,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 11879
 },
 {
   "city": "El Palmar",
   "lat": 14.65,
   "lng": -91.5833,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 11875
 },
 {
   "city": "Jaltenango",
   "lat": 15.8725,
   "lng": -92.725,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11875
 },
 {
   "city": "Silifke",
   "lat": 36.3783,
   "lng": 33.9261,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 11864
 },
 {
   "city": "Abasolo",
   "lat": 24.0559,
   "lng": -98.3733,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11862
 },
 {
   "city": "Bad Fallingbostel",
   "lat": 52.8675,
   "lng": 9.6967,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 11852
 },
 {
   "city": "Malargüe",
   "lat": -35.4745,
   "lng": -69.5853,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 11847
 },
 {
   "city": "Vendas Novas",
   "lat": 38.678,
   "lng": -8.4555,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 11846
 },
 {
   "city": "Lienz",
   "lat": 46.8297,
   "lng": 12.7697,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 11844
 },
 {
   "city": "Hildburghausen",
   "lat": 50.4261,
   "lng": 10.7289,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 11836
 },
 {
   "city": "Nyírbátor",
   "lat": 47.8353,
   "lng": 22.13,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 11831
 },
 {
   "city": "Nova Gradiška",
   "lat": 45.25,
   "lng": 17.3833,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 11821
 },
 {
   "city": "Pfäffikon",
   "lat": 47.3667,
   "lng": 8.7822,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 11817
 },
 {
   "city": "Haradok",
   "lat": 55.4667,
   "lng": 29.9833,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 11814
 },
 {
   "city": "Château-Gontier",
   "lat": 47.8286,
   "lng": -0.7028,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 11805
 },
 {
   "city": "Kőszeg",
   "lat": 47.3817,
   "lng": 16.5519,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 11805
 },
 {
   "city": "Ghabāghib",
   "lat": 33.1839,
   "lng": 36.2264,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 11802
 },
 {
   "city": "Veurne",
   "lat": 51.0722,
   "lng": 2.6622,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 11790
 },
 {
   "city": "Cafayate",
   "lat": -26.07,
   "lng": -65.98,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 11785
 },
 {
   "city": "Villefranche-de-Rouergue",
   "lat": 44.3525,
   "lng": 2.0342,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 11781
 },
 {
   "city": "Opmeer",
   "lat": 52.7033,
   "lng": 4.9444,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 11779
 },
 {
   "city": "Thiers",
   "lat": 45.8564,
   "lng": 3.5475,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 11778
 },
 {
   "city": "Lieksa",
   "lat": 63.3167,
   "lng": 30.0167,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 11772
 },
 {
   "city": "Kankaanpää",
   "lat": 61.8042,
   "lng": 22.3944,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 11769
 },
 {
   "city": "Villa Aldama",
   "lat": 19.65,
   "lng": -97.2333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11760
 },
 {
   "city": "Kuchinarai",
   "lat": 16.5318,
   "lng": 104.044,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 11753
 },
 {
   "city": "Tolcayuca",
   "lat": 19.95,
   "lng": -98.9167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11746
 },
 {
   "city": "Vitry-le-François",
   "lat": 48.7247,
   "lng": 4.5844,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 11743
 },
 {
   "city": "Bajestān",
   "lat": 34.5164,
   "lng": 58.1844,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 11741
 },
 {
   "city": "Ovidiopol",
   "lat": 46.2667,
   "lng": 30.4333,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 11741
 },
 {
   "city": "San Nicolás de los Ranchos",
   "lat": 19.0667,
   "lng": -98.4833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11734
 },
 {
   "city": "Altstätten",
   "lat": 47.378,
   "lng": 9.5488,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 11730
 },
 {
   "city": "San Antonio Palopó",
   "lat": 14.7,
   "lng": -91.1167,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 11728
 },
 {
   "city": "Appingedam",
   "lat": 53.3167,
   "lng": 6.8667,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 11721
 },
 {
   "city": "Puente Nacional",
   "lat": 5.8772,
   "lng": -73.6786,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 11718
 },
 {
   "city": "Torbalı",
   "lat": 38.1619,
   "lng": 27.3583,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 11712
 },
 {
   "city": "Myjava",
   "lat": 48.7578,
   "lng": 17.5686,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 11708
 },
 {
   "city": "Nemyriv",
   "lat": 48.9794,
   "lng": 28.8439,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 11697
 },
 {
   "city": "Issoudun",
   "lat": 46.9481,
   "lng": 1.9933,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 11690
 },
 {
   "city": "Óbidos",
   "lat": 39.3585,
   "lng": -9.176,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 11689
 },
 {
   "city": "Ángel R. Cabada",
   "lat": 18.5969,
   "lng": -95.4453,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11689
 },
 {
   "city": "Lom Sak",
   "lat": 16.7775,
   "lng": 101.2468,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 11685
 },
 {
   "city": "Şereflikoçhisar",
   "lat": 38.9444,
   "lng": 33.5419,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 11683
 },
 {
   "city": "Buldan",
   "lat": 38.045,
   "lng": 28.8306,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 11681
 },
 {
   "city": "Hollabrunn",
   "lat": 48.5667,
   "lng": 16.0833,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 11681
 },
 {
   "city": "Prymorsk",
   "lat": 46.7333,
   "lng": 36.3596,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 11679
 },
 {
   "city": "Góra",
   "lat": 51.6667,
   "lng": 16.55,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 11678
 },
 {
   "city": "Oliva",
   "lat": -32.0416,
   "lng": -63.5698,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 11672
 },
 {
   "city": "Deutschlandsberg",
   "lat": 46.8161,
   "lng": 15.215,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 11663
 },
 {
   "city": "Opatija",
   "lat": 45.3347,
   "lng": 14.3069,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 11659
 },
 {
   "city": "Lyuban’",
   "lat": 52.7819,
   "lng": 28.0525,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 11654
 },
 {
   "city": "Mixtla de Altamirano",
   "lat": 18.6,
   "lng": -97,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11646
 },
 {
   "city": "Labin",
   "lat": 45.0833,
   "lng": 14.1167,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 11642
 },
 {
   "city": "Beşikdüzü",
   "lat": 41.052,
   "lng": 39.2329,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 11641
 },
 {
   "city": "Candelaria",
   "lat": 10.4592,
   "lng": -74.8806,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 11635
 },
 {
   "city": "Tlachichilco",
   "lat": 20.6217,
   "lng": -98.1994,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11630
 },
 {
   "city": "Weiz",
   "lat": 47.2189,
   "lng": 15.6253,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 11627
 },
 {
   "city": "Tepetzintla",
   "lat": 19.9667,
   "lng": -97.8333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11622
 },
 {
   "city": "Mala Vyska",
   "lat": 48.65,
   "lng": 31.6333,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 11614
 },
 {
   "city": "Sint Anthonis",
   "lat": 51.6258,
   "lng": 5.8811,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 11606
 },
 {
   "city": "Saint-Gaudens",
   "lat": 43.1081,
   "lng": 0.7233,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 11604
 },
 {
   "city": "Kalmiuske",
   "lat": 47.6667,
   "lng": 38.0667,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 11603
 },
 {
   "city": "Drawsko Pomorskie",
   "lat": 53.5333,
   "lng": 15.8,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 11597
 },
 {
   "city": "Santa Comba Dão",
   "lat": 40.4,
   "lng": -8.1333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 11597
 },
 {
   "city": "Shengping",
   "lat": 28.4865,
   "lng": 98.913,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 11595
 },
 {
   "city": "Phon",
   "lat": 15.8084,
   "lng": 102.6018,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 11593
 },
 {
   "city": "Santa Lucía",
   "lat": 10.3247,
   "lng": -74.9589,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 11584
 },
 {
   "city": "Zlaté Moravce",
   "lat": 48.3781,
   "lng": 18.3964,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 11583
 },
 {
   "city": "Jarābulus",
   "lat": 36.8175,
   "lng": 38.0111,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 11570
 },
 {
   "city": "Arcachon",
   "lat": 44.6586,
   "lng": -1.1689,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 11567
 },
 {
   "city": "La Unión",
   "lat": 8.8572,
   "lng": -75.2767,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 11566
 },
 {
   "city": "Eijsden",
   "lat": 50.7778,
   "lng": 5.7108,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 11565
 },
 {
   "city": "Loutráki",
   "lat": 37.975,
   "lng": 22.9767,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 11564
 },
 {
   "city": "Miesbach",
   "lat": 47.789,
   "lng": 11.8338,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 11562
 },
 {
   "city": "Mistelbach",
   "lat": 48.5667,
   "lng": 16.5667,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 11559
 },
 {
   "city": "Cisneros",
   "lat": 6.5383,
   "lng": -75.0886,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 11555
 },
 {
   "city": "Esil",
   "lat": 51.9556,
   "lng": 66.4042,
   "country": "Kazakhstan",
   "iso2": "KZ",
   "iso3": "KAZ",
   "capital": "minor",
   "population": 11551
 },
 {
   "city": "Espita",
   "lat": 21.0128,
   "lng": -88.3047,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11551
 },
 {
   "city": "Den Chai",
   "lat": 17.9835,
   "lng": 100.0519,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 11542
 },
 {
   "city": "Weinfelden",
   "lat": 47.5698,
   "lng": 9.112,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 11534
 },
 {
   "city": "Epazoyucan",
   "lat": 20.0177,
   "lng": -98.6361,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11522
 },
 {
   "city": "Cholpon-Ata",
   "lat": 42.65,
   "lng": 77.0833,
   "country": "Kyrgyzstan",
   "iso2": "KG",
   "iso3": "KGZ",
   "capital": "minor",
   "population": 11520
 },
 {
   "city": "Coronel Dorrego",
   "lat": -38.7,
   "lng": -61.2667,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 11510
 },
 {
   "city": "Cerrillos",
   "lat": -24.9,
   "lng": -65.4833,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 11498
 },
 {
   "city": "Çayeli",
   "lat": 41.093,
   "lng": 40.7292,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 11496
 },
 {
   "city": "Guayabal",
   "lat": 5.0306,
   "lng": -74.8844,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 11490
 },
 {
   "city": "Landsmeer",
   "lat": 52.4293,
   "lng": 4.9136,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 11488
 },
 {
   "city": "Yakymivka",
   "lat": 46.6967,
   "lng": 35.1664,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 11481
 },
 {
   "city": "Myronivka",
   "lat": 49.65,
   "lng": 30.9833,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 11478
 },
 {
   "city": "Poldasht",
   "lat": 39.3481,
   "lng": 45.0711,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 11472
 },
 {
   "city": "Klyetsk",
   "lat": 53.0636,
   "lng": 26.6372,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 11462
 },
 {
   "city": "Satuek",
   "lat": 15.3008,
   "lng": 103.3013,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 11444
 },
 {
   "city": "Sonoita",
   "lat": 31.8614,
   "lng": -112.8544,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11440
 },
 {
   "city": "Egersund",
   "lat": 58.45,
   "lng": 6.0067,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 11433
 },
 {
   "city": "Tlacolulan",
   "lat": 19.6667,
   "lng": -97,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11431
 },
 {
   "city": "Kavarna",
   "lat": 43.436,
   "lng": 28.3392,
   "country": "Bulgaria",
   "iso2": "BG",
   "iso3": "BGR",
   "capital": "minor",
   "population": 11422
 },
 {
   "city": "Jimaní",
   "lat": 18.4833,
   "lng": -71.85,
   "country": "Dominican Republic",
   "iso2": "DO",
   "iso3": "DOM",
   "capital": "minor",
   "population": 11414
 },
 {
   "city": "Gänserndorf",
   "lat": 48.3406,
   "lng": 16.7175,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 11404
 },
 {
   "city": "Santa María Huazolotitlán",
   "lat": 16.3014,
   "lng": -97.9125,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11400
 },
 {
   "city": "Ulricehamn",
   "lat": 57.7917,
   "lng": 13.4186,
   "country": "Sweden",
   "iso2": "SE",
   "iso3": "SWE",
   "capital": "minor",
   "population": 11399
 },
 {
   "city": "Monte Quemado",
   "lat": -25.8072,
   "lng": -62.8278,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 11387
 },
 {
   "city": "Onoto",
   "lat": 9.5958,
   "lng": -65.1897,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 11378
 },
 {
   "city": "Humahuaca",
   "lat": -23.2054,
   "lng": -65.3505,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 11369
 },
 {
   "city": "Resende",
   "lat": 41.1,
   "lng": -7.95,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 11364
 },
 {
   "city": "Yangirabot",
   "lat": 40.0333,
   "lng": 65.9667,
   "country": "Uzbekistan",
   "iso2": "UZ",
   "iso3": "UZB",
   "capital": "minor",
   "population": 11364
 },
 {
   "city": "Bytča",
   "lat": 49.2228,
   "lng": 18.5581,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 11362
 },
 {
   "city": "Zierikzee",
   "lat": 51.6497,
   "lng": 3.9164,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 11360
 },
 {
   "city": "Belén",
   "lat": -27.6496,
   "lng": -67.0333,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 11359
 },
 {
   "city": "Zaragoza",
   "lat": 17.9487,
   "lng": -94.6436,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11354
 },
 {
   "city": "Tekkeköy",
   "lat": 41.2125,
   "lng": 36.4569,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 11351
 },
 {
   "city": "Talaigua Nuevo",
   "lat": 9.3028,
   "lng": -74.5678,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 11350
 },
 {
   "city": "Bátonyterenye",
   "lat": 47.9892,
   "lng": 19.8286,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 11345
 },
 {
   "city": "Virton",
   "lat": 49.5675,
   "lng": 5.5325,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 11323
 },
 {
   "city": "Randaberg",
   "lat": 59.0017,
   "lng": 5.6153,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 11315
 },
 {
   "city": "Pionerskiy",
   "lat": 54.95,
   "lng": 20.2167,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 11312
 },
 {
   "city": "Sárospatak",
   "lat": 48.3189,
   "lng": 21.5661,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 11291
 },
 {
   "city": "Saverne",
   "lat": 48.7414,
   "lng": 7.3619,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 11289
 },
 {
   "city": "Bayındır",
   "lat": 38.2192,
   "lng": 27.6481,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 11273
 },
 {
   "city": "Coveñas",
   "lat": 9.4014,
   "lng": -75.68,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 11270
 },
 {
   "city": "Illintsi",
   "lat": 49.1,
   "lng": 29.2,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 11270
 },
 {
   "city": "Susurluk",
   "lat": 39.9136,
   "lng": 28.1578,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 11268
 },
 {
   "city": "Søgne",
   "lat": 58.0942,
   "lng": 7.7725,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 11260
 },
 {
   "city": "El Playón",
   "lat": 7.4703,
   "lng": -73.2033,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 11252
 },
 {
   "city": "Lang Suan",
   "lat": 9.9519,
   "lng": 99.0813,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 11250
 },
 {
   "city": "Anamur",
   "lat": 36.0836,
   "lng": 32.8261,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 11246
 },
 {
   "city": "Tosya",
   "lat": 41.017,
   "lng": 34.0383,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 11239
 },
 {
   "city": "Krosno Odrzańskie",
   "lat": 52.0542,
   "lng": 15.1,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 11238
 },
 {
   "city": "Körmend",
   "lat": 47.0108,
   "lng": 16.6056,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 11236
 },
 {
   "city": "Sankt Johann im Pongau",
   "lat": 47.35,
   "lng": 13.2,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 11235
 },
 {
   "city": "Križevci",
   "lat": 46.0333,
   "lng": 16.5333,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 11231
 },
 {
   "city": "Kaset Wisai",
   "lat": 15.6556,
   "lng": 103.5836,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 11217
 },
 {
   "city": "González",
   "lat": 22.8281,
   "lng": -98.4306,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11212
 },
 {
   "city": "Temamatla",
   "lat": 19.2028,
   "lng": -98.87,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11206
 },
 {
   "city": "Gárdony",
   "lat": 47.1973,
   "lng": 18.6091,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 11204
 },
 {
   "city": "Blaricum",
   "lat": 52.2728,
   "lng": 5.2422,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 11202
 },
 {
   "city": "Qaşr-e Shīrīn",
   "lat": 34.5156,
   "lng": 45.5792,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 11202
 },
 {
   "city": "Morazán",
   "lat": 14.9322,
   "lng": -90.1433,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 11201
 },
 {
   "city": "Staryya Darohi",
   "lat": 53.0394,
   "lng": 28.265,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 11198
 },
 {
   "city": "Sanjiaocheng",
   "lat": 36.8993,
   "lng": 100.9872,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 11196
 },
 {
   "city": "Laren",
   "lat": 52.2544,
   "lng": 5.2317,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 11195
 },
 {
   "city": "Bad Schwalbach",
   "lat": 50.1401,
   "lng": 8.0694,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 11187
 },
 {
   "city": "Salaya",
   "lat": 13.8023,
   "lng": 100.3208,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 11180
 },
 {
   "city": "Hinwil",
   "lat": 47.3033,
   "lng": 8.8444,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 11179
 },
 {
   "city": "Marcali",
   "lat": 46.5831,
   "lng": 17.4064,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 11169
 },
 {
   "city": "San José de Aerocuar",
   "lat": 10.6014,
   "lng": -63.3278,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 11162
 },
 {
   "city": "Padre Burgos",
   "lat": 10.0333,
   "lng": 125.0167,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 11159
 },
 {
   "city": "Zaragoza",
   "lat": 28.4869,
   "lng": -100.9175,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11150
 },
 {
   "city": "Doesburg",
   "lat": 52.0167,
   "lng": 6.1333,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 11148
 },
 {
   "city": "Węgorzewo",
   "lat": 54.2167,
   "lng": 21.75,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 11144
 },
 {
   "city": "Panajachel",
   "lat": 14.7361,
   "lng": -91.1558,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 11142
 },
 {
   "city": "Esquipulas Palo Gordo",
   "lat": 14.9333,
   "lng": -91.8167,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 11138
 },
 {
   "city": "Villanueva",
   "lat": 22.3536,
   "lng": -102.8831,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11138
 },
 {
   "city": "Santa Ana Huista",
   "lat": 15.6833,
   "lng": -91.8167,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 11134
 },
 {
   "city": "Sansare",
   "lat": 14.7478,
   "lng": -90.1158,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 11124
 },
 {
   "city": "Crikvenica",
   "lat": 45.1833,
   "lng": 14.7,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 11122
 },
 {
   "city": "Mineral de Angangueo",
   "lat": 19.6206,
   "lng": -100.2844,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11120
 },
 {
   "city": "Tha Chang",
   "lat": 9.2674,
   "lng": 99.1922,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 11108
 },
 {
   "city": "Svidník",
   "lat": 49.3056,
   "lng": 21.5678,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 11096
 },
 {
   "city": "Bang Ban",
   "lat": 14.4247,
   "lng": 100.4758,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 11092
 },
 {
   "city": "Si Wilai",
   "lat": 18.1865,
   "lng": 103.7408,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 11090
 },
 {
   "city": "Briançon",
   "lat": 44.8958,
   "lng": 6.635,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 11084
 },
 {
   "city": "Belén de los Andaquíes",
   "lat": 1.4164,
   "lng": -75.8727,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 11081
 },
 {
   "city": "Tortolì",
   "lat": 39.9333,
   "lng": 9.65,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 11081
 },
 {
   "city": "Pedernales",
   "lat": 18.038,
   "lng": -71.741,
   "country": "Dominican Republic",
   "iso2": "DO",
   "iso3": "DOM",
   "capital": "minor",
   "population": 11072
 },
 {
   "city": "El Águila",
   "lat": 4.9081,
   "lng": -76.0422,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 11069
 },
 {
   "city": "Týrnavos",
   "lat": 39.7353,
   "lng": 22.2869,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 11069
 },
 {
   "city": "Villa La Angostura",
   "lat": -40.7616,
   "lng": -71.6448,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 11063
 },
 {
   "city": "Viranşehir",
   "lat": 37.2306,
   "lng": 39.7653,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 11063
 },
 {
   "city": "Myślibórz",
   "lat": 52.925,
   "lng": 14.8667,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 11049
 },
 {
   "city": "Joquicingo",
   "lat": 19.0556,
   "lng": -99.5467,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11042
 },
 {
   "city": "Sarayköy",
   "lat": 37.9265,
   "lng": 28.9267,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 11042
 },
 {
   "city": "Chornomorske",
   "lat": 45.5031,
   "lng": 32.705,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 11039
 },
 {
   "city": "Tezoatlán de Segura y Luna",
   "lat": 17.65,
   "lng": -97.8167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11034
 },
 {
   "city": "Phanat Nikhom",
   "lat": 13.4458,
   "lng": 101.1844,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 11032
 },
 {
   "city": "Apt",
   "lat": 43.8761,
   "lng": 5.3964,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 11011
 },
 {
   "city": "Saucillo",
   "lat": 28.0333,
   "lng": -105.2833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 11004
 },
 {
   "city": "Regen",
   "lat": 48.97,
   "lng": 13.1264,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 11001
 },
 {
   "city": "Al ‘Amādīyah",
   "lat": 37.0922,
   "lng": 43.4878,
   "country": "Iraq",
   "iso2": "IQ",
   "iso3": "IRQ",
   "capital": "minor",
   "population": 11000
 },
 {
   "city": "Nowe Miasto Lubawskie",
   "lat": 53.4167,
   "lng": 19.5833,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 10997
 },
 {
   "city": "Agua de Dios",
   "lat": 4.3781,
   "lng": -74.6683,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 10995
 },
 {
   "city": "Tolna",
   "lat": 46.4167,
   "lng": 18.7833,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 10987
 },
 {
   "city": "Fao Rai",
   "lat": 18.0175,
   "lng": 103.3057,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 10978
 },
 {
   "city": "Acanceh",
   "lat": 20.8133,
   "lng": -89.4524,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10968
 },
 {
   "city": "Kiskunmajsa",
   "lat": 46.4922,
   "lng": 19.7367,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 10968
 },
 {
   "city": "Zhydachiv",
   "lat": 49.3833,
   "lng": 24.1333,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 10962
 },
 {
   "city": "Álamos",
   "lat": 27.0275,
   "lng": -108.94,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10961
 },
 {
   "city": "El Tarra",
   "lat": 8.5756,
   "lng": -73.0944,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 10957
 },
 {
   "city": "Ráckeve",
   "lat": 47.1608,
   "lng": 18.9456,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 10956
 },
 {
   "city": "Völkermarkt",
   "lat": 46.6622,
   "lng": 14.6344,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 10946
 },
 {
   "city": "Rokytne",
   "lat": 49.6897,
   "lng": 30.4751,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 10938
 },
 {
   "city": "Texcatepec",
   "lat": 20.5833,
   "lng": -98.3667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10934
 },
 {
   "city": "Neman",
   "lat": 55.0333,
   "lng": 22.0333,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 10931
 },
 {
   "city": "Emirdağ",
   "lat": 39.0197,
   "lng": 31.1503,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 10914
 },
 {
   "city": "Yalvaç",
   "lat": 38.3,
   "lng": 31.1833,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 10912
 },
 {
   "city": "Zwettl",
   "lat": 48.6033,
   "lng": 15.1689,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 10908
 },
 {
   "city": "Bobrynets",
   "lat": 48.0578,
   "lng": 32.1581,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 10898
 },
 {
   "city": "Eisenberg",
   "lat": 50.9667,
   "lng": 11.9,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 10885
 },
 {
   "city": "Sultanhanı",
   "lat": 38.2481,
   "lng": 33.5465,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 10884
 },
 {
   "city": "Nivala",
   "lat": 63.9292,
   "lng": 24.9778,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 10876
 },
 {
   "city": "Estanzuela",
   "lat": 14.9979,
   "lng": -89.5705,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 10872
 },
 {
   "city": "Sagarejo",
   "lat": 41.7333,
   "lng": 45.3333,
   "country": "Georgia",
   "iso2": "GE",
   "iso3": "GEO",
   "capital": "minor",
   "population": 10871
 },
 {
   "city": "Phrai Bueng",
   "lat": 14.749,
   "lng": 104.3574,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 10864
 },
 {
   "city": "Davos",
   "lat": 46.8091,
   "lng": 9.8398,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 10862
 },
 {
   "city": "Mogotes",
   "lat": 6.4764,
   "lng": -72.9703,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 10860
 },
 {
   "city": "Sarmiento",
   "lat": -45.6,
   "lng": -69.0833,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 10858
 },
 {
   "city": "Phibun Mangsahan",
   "lat": 15.2482,
   "lng": 105.2296,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 10842
 },
 {
   "city": "Villa Corzo",
   "lat": 16.1848,
   "lng": -93.2677,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10841
 },
 {
   "city": "Khlung",
   "lat": 12.4525,
   "lng": 102.2267,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 10835
 },
 {
   "city": "Kitee",
   "lat": 62.0986,
   "lng": 30.1375,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 10832
 },
 {
   "city": "Pua",
   "lat": 19.1799,
   "lng": 100.9089,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 10831
 },
 {
   "city": "Ørsta",
   "lat": 62.2003,
   "lng": 6.1322,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 10830
 },
 {
   "city": "Reguengos de Monsaraz",
   "lat": 38.4167,
   "lng": -7.5333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 10828
 },
 {
   "city": "Tatvan",
   "lat": 38.5022,
   "lng": 42.2814,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 10786
 },
 {
   "city": "Volda",
   "lat": 62.1468,
   "lng": 6.068,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 10781
 },
 {
   "city": "Ixtacomitán",
   "lat": 17.4267,
   "lng": -93.0943,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10772
 },
 {
   "city": "Kurman",
   "lat": 45.4978,
   "lng": 34.295,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 10766
 },
 {
   "city": "Malkara",
   "lat": 40.8933,
   "lng": 26.9042,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 10763
 },
 {
   "city": "Vire",
   "lat": 48.8386,
   "lng": -0.8892,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 10762
 },
 {
   "city": "Santo Domingo",
   "lat": 6.4708,
   "lng": -75.1658,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 10759
 },
 {
   "city": "Villa Unión",
   "lat": 23.9667,
   "lng": -104.0333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10753
 },
 {
   "city": "Wang Sombun",
   "lat": 13.3515,
   "lng": 102.1833,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 10747
 },
 {
   "city": "Tiszafüred",
   "lat": 47.619,
   "lng": 20.76,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 10745
 },
 {
   "city": "Tezontepec",
   "lat": 19.8833,
   "lng": -98.8167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10723
 },
 {
   "city": "Santa Bárbara",
   "lat": 26.8133,
   "lng": -105.8203,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10721
 },
 {
   "city": "Villa Purificación",
   "lat": 19.7858,
   "lng": -104.7078,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10704
 },
 {
   "city": "Sam Ko",
   "lat": 14.6013,
   "lng": 100.2602,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 10696
 },
 {
   "city": "Hämeenkyrö",
   "lat": 61.6333,
   "lng": 23.2,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 10667
 },
 {
   "city": "São Brás de Alportel",
   "lat": 37.15,
   "lng": -7.8833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 10662
 },
 {
   "city": "Chuqung",
   "lat": 33.3743,
   "lng": 97.0637,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 10659
 },
 {
   "city": "Al Atārib",
   "lat": 36.1389,
   "lng": 36.83,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 10657
 },
 {
   "city": "Stropkov",
   "lat": 49.205,
   "lng": 21.6514,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 10654
 },
 {
   "city": "Celldömölk",
   "lat": 47.2575,
   "lng": 17.1525,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 10646
 },
 {
   "city": "Almoloya",
   "lat": 19.7,
   "lng": -98.4,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10638
 },
 {
   "city": "Knin",
   "lat": 44.0333,
   "lng": 16.1833,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 10633
 },
 {
   "city": "Oloron-Sainte-Marie",
   "lat": 43.1942,
   "lng": -0.6067,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 10629
 },
 {
   "city": "Escuintla",
   "lat": 15.3193,
   "lng": -92.6586,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10624
 },
 {
   "city": "Paimio",
   "lat": 60.4569,
   "lng": 22.6861,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 10620
 },
 {
   "city": "Benito Juárez",
   "lat": -37.6833,
   "lng": -59.8,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 10609
 },
 {
   "city": "Tubará",
   "lat": 10.8742,
   "lng": -74.9786,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 10602
 },
 {
   "city": "Tournon-sur-Rhône",
   "lat": 45.0672,
   "lng": 4.8328,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 10598
 },
 {
   "city": "Peschanokopskoye",
   "lat": 46.1961,
   "lng": 41.0775,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 10593
 },
 {
   "city": "Boekel",
   "lat": 51.6011,
   "lng": 5.6742,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 10588
 },
 {
   "city": "Murtosa",
   "lat": 40.7369,
   "lng": -8.6386,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 10585
 },
 {
   "city": "Jablanica",
   "lat": 43.6583,
   "lng": 17.7583,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 10580
 },
 {
   "city": "Vouzela",
   "lat": 40.7,
   "lng": -8.1167,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 10564
 },
 {
   "city": "Montalegre",
   "lat": 41.8167,
   "lng": -7.7833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 10537
 },
 {
   "city": "Ergani",
   "lat": 38.2692,
   "lng": 39.7617,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 10528
 },
 {
   "city": "Sotkamo",
   "lat": 64.1333,
   "lng": 28.3833,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 10523
 },
 {
   "city": "Simpelveld",
   "lat": 50.835,
   "lng": 5.9822,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 10516
 },
 {
   "city": "Sortland",
   "lat": 68.6958,
   "lng": 15.4131,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 10514
 },
 {
   "city": "Imst",
   "lat": 47.2394,
   "lng": 10.7381,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 10504
 },
 {
   "city": "Tierra Colorada",
   "lat": 17.1656,
   "lng": -99.5264,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10502
 },
 {
   "city": "Barcs",
   "lat": 45.96,
   "lng": 17.46,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 10501
 },
 {
   "city": "Regidor",
   "lat": 8.6664,
   "lng": -73.8222,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 10489
 },
 {
   "city": "Marum",
   "lat": 53.1333,
   "lng": 6.25,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 10488
 },
 {
   "city": "Coacoatzintla",
   "lat": 19.65,
   "lng": -96.9333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10482
 },
 {
   "city": "Leidschendam",
   "lat": 52.0883,
   "lng": 4.3944,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 10482
 },
 {
   "city": "Bedum",
   "lat": 53.3,
   "lng": 6.6,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 10475
 },
 {
   "city": "Huittinen",
   "lat": 61.1764,
   "lng": 22.6986,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 10473
 },
 {
   "city": "Kastav",
   "lat": 45.3726,
   "lng": 14.349,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 10472
 },
 {
   "city": "Serinhisar",
   "lat": 37.5779,
   "lng": 29.2639,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 10472
 },
 {
   "city": "Al Musayfirah",
   "lat": 32.6322,
   "lng": 36.3386,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 10466
 },
 {
   "city": "Lyngdal",
   "lat": 58.1333,
   "lng": 7.0833,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 10464
 },
 {
   "city": "Olevsk",
   "lat": 51.2278,
   "lng": 27.6481,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 10457
 },
 {
   "city": "Phai Sali",
   "lat": 15.6,
   "lng": 100.6494,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 10450
 },
 {
   "city": "El Chol",
   "lat": 14.9611,
   "lng": -90.4878,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 10445
 },
 {
   "city": "Çağlayancerit",
   "lat": 37.7508,
   "lng": 37.2922,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 10435
 },
 {
   "city": "Szigetvár",
   "lat": 46.0481,
   "lng": 17.8125,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 10421
 },
 {
   "city": "Kragerø",
   "lat": 58.8869,
   "lng": 9.3469,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 10416
 },
 {
   "city": "Prakhon Chai",
   "lat": 14.6092,
   "lng": 103.0818,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 10404
 },
 {
   "city": "Santiago Suchilquitongo",
   "lat": 17.25,
   "lng": -96.8833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10397
 },
 {
   "city": "Kolno",
   "lat": 53.4106,
   "lng": 21.9339,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 10396
 },
 {
   "city": "Cuatro Ciénegas de Carranza",
   "lat": 26.9861,
   "lng": -102.0664,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10395
 },
 {
   "city": "Midyat",
   "lat": 37.4167,
   "lng": 41.3531,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 10391
 },
 {
   "city": "Salanso",
   "lat": 12.1833,
   "lng": -4.0833,
   "country": "Burkina Faso",
   "iso2": "BF",
   "iso3": "BFA",
   "capital": "minor",
   "population": 10385
 },
 {
   "city": "Kapyl’",
   "lat": 53.15,
   "lng": 27.0917,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 10367
 },
 {
   "city": "Phon Charoen",
   "lat": 18.025,
   "lng": 103.706,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 10357
 },
 {
   "city": "Knezha",
   "lat": 43.4931,
   "lng": 24.0806,
   "country": "Bulgaria",
   "iso2": "BG",
   "iso3": "BGR",
   "capital": "minor",
   "population": 10348
 },
 {
   "city": "Coroneo",
   "lat": 20.1333,
   "lng": -100.3333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10347
 },
 {
   "city": "Canatlán",
   "lat": 24.52,
   "lng": -104.78,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10342
 },
 {
   "city": "Førde",
   "lat": 61.4519,
   "lng": 5.8569,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 10339
 },
 {
   "city": "Havza",
   "lat": 40.9667,
   "lng": 35.6667,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 10338
 },
 {
   "city": "Levanger",
   "lat": 63.7464,
   "lng": 11.2996,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 10333
 },
 {
   "city": "Teocuitatlán de Corona",
   "lat": 20.0918,
   "lng": -103.3785,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10317
 },
 {
   "city": "Monnickendam",
   "lat": 52.4547,
   "lng": 5.0353,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 10316
 },
 {
   "city": "Verkhnodniprovsk",
   "lat": 48.6561,
   "lng": 34.3283,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 10314
 },
 {
   "city": "El Realejo",
   "lat": 12.5431,
   "lng": -87.1647,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 10300
 },
 {
   "city": "Çumra",
   "lat": 37.575,
   "lng": 32.7747,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 10299
 },
 {
   "city": "Armanāz",
   "lat": 36.0833,
   "lng": 36.5,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 10296
 },
 {
   "city": "Hecelchakán",
   "lat": 20.1667,
   "lng": -90.1333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10285
 },
 {
   "city": "Yahyalı",
   "lat": 38.099,
   "lng": 35.359,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 10283
 },
 {
   "city": "Lenguazaque",
   "lat": 5.3069,
   "lng": -73.7117,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 10268
 },
 {
   "city": "Oliveira de Frades",
   "lat": 40.7333,
   "lng": -8.1667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 10261
 },
 {
   "city": "Kut Chap",
   "lat": 17.4262,
   "lng": 102.5646,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 10259
 },
 {
   "city": "Chavinda",
   "lat": 20.0167,
   "lng": -102.45,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10258
 },
 {
   "city": "Avranches",
   "lat": 48.6844,
   "lng": -1.3569,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 10246
 },
 {
   "city": "Parthenay",
   "lat": 46.6486,
   "lng": -0.2469,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 10235
 },
 {
   "city": "Selçuk",
   "lat": 37.95,
   "lng": 27.3667,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 10227
 },
 {
   "city": "Tha Muang",
   "lat": 13.9611,
   "lng": 99.6411,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 10219
 },
 {
   "city": "Moimenta da Beira",
   "lat": 40.9819,
   "lng": -7.6158,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 10212
 },
 {
   "city": "Nagyatád",
   "lat": 46.2294,
   "lng": 17.3575,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 10212
 },
 {
   "city": "Charalá",
   "lat": 6.2875,
   "lng": -73.1467,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 10211
 },
 {
   "city": "Slatina",
   "lat": 45.7,
   "lng": 17.7,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 10208
 },
 {
   "city": "Tlalixtac de Cabrera",
   "lat": 17.0667,
   "lng": -96.65,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10208
 },
 {
   "city": "Medina",
   "lat": 4.5092,
   "lng": -73.3494,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 10205
 },
 {
   "city": "Shyroke",
   "lat": 47.6882,
   "lng": 33.2654,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 10202
 },
 {
   "city": "Mstsislaw",
   "lat": 54.0196,
   "lng": 31.7247,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 10201
 },
 {
   "city": "Oudewater",
   "lat": 52.0267,
   "lng": 4.8686,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 10201
 },
 {
   "city": "Tetela del Volcán",
   "lat": 18.8931,
   "lng": -98.7297,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10199
 },
 {
   "city": "Tarashcha",
   "lat": 49.55,
   "lng": 30.5,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 10195
 },
 {
   "city": "Phra Pradaeng",
   "lat": 13.659,
   "lng": 100.5329,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 10190
 },
 {
   "city": "San Blas",
   "lat": 21.5397,
   "lng": -105.2856,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10187
 },
 {
   "city": "Clermont",
   "lat": 49.3789,
   "lng": 2.4125,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 10183
 },
 {
   "city": "San Juan La Laguna",
   "lat": 14.7,
   "lng": -91.2833,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 10177
 },
 {
   "city": "Kranuan",
   "lat": 16.7081,
   "lng": 103.0811,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 10169
 },
 {
   "city": "Kapuvár",
   "lat": 47.6,
   "lng": 17.0331,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 10161
 },
 {
   "city": "Mexicaltzingo",
   "lat": 19.2092,
   "lng": -99.5858,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10161
 },
 {
   "city": "Sobral de Monte Agraço",
   "lat": 39.0167,
   "lng": -9.15,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 10156
 },
 {
   "city": "San Pedro La Laguna",
   "lat": 14.6918,
   "lng": -91.273,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 10150
 },
 {
   "city": "Opochka",
   "lat": 56.7167,
   "lng": 28.65,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 10148
 },
 {
   "city": "Choele Choel",
   "lat": -39.2858,
   "lng": -65.6542,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 10146
 },
 {
   "city": "Kocaali",
   "lat": 41.0636,
   "lng": 30.8581,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 10131
 },
 {
   "city": "Doorn",
   "lat": 52.0333,
   "lng": 5.35,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 10124
 },
 {
   "city": "Chamusca",
   "lat": 39.35,
   "lng": -8.4833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 10120
 },
 {
   "city": "Altötting",
   "lat": 48.2264,
   "lng": 12.6759,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 10119
 },
 {
   "city": "Granada",
   "lat": 6.1442,
   "lng": -75.1853,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 10117
 },
 {
   "city": "Keuruu",
   "lat": 62.2597,
   "lng": 24.7069,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 10117
 },
 {
   "city": "Limoux",
   "lat": 43.0569,
   "lng": 2.2186,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 10112
 },
 {
   "city": "Cuapiaxtla de Madero",
   "lat": 18.9167,
   "lng": -97.8167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10101
 },
 {
   "city": "Banská Štiavnica",
   "lat": 48.4586,
   "lng": 18.8931,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 10097
 },
 {
   "city": "Bucak",
   "lat": 37.4592,
   "lng": 30.595,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 10094
 },
 {
   "city": "Vaals",
   "lat": 50.7694,
   "lng": 6.0181,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 10092
 },
 {
   "city": "Nong Ki",
   "lat": 14.6867,
   "lng": 102.5325,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 10089
 },
 {
   "city": "Chichihualco",
   "lat": 17.655,
   "lng": -99.674,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10079
 },
 {
   "city": "Hongliuwan",
   "lat": 39.6348,
   "lng": 94.3386,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 10079
 },
 {
   "city": "Keila",
   "lat": 59.3086,
   "lng": 24.4225,
   "country": "Estonia",
   "iso2": "EE",
   "iso3": "EST",
   "capital": "minor",
   "population": 10078
 },
 {
   "city": "Kaman",
   "lat": 39.3575,
   "lng": 33.7239,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 10067
 },
 {
   "city": "Sung Noen",
   "lat": 14.8992,
   "lng": 101.8208,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 10061
 },
 {
   "city": "Ciudad Tula",
   "lat": 23,
   "lng": -99.72,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10043
 },
 {
   "city": "Pajacuarán",
   "lat": 20.1178,
   "lng": -102.5667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10014
 },
 {
   "city": "San Pedro Huamelula",
   "lat": 16.0167,
   "lng": -95.6667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10014
 },
 {
   "city": "Valozhyn",
   "lat": 54.0833,
   "lng": 26.5167,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 10012
 },
 {
   "city": "Platón Sánchez",
   "lat": 21.2833,
   "lng": -98.3667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 10009
 },
 {
   "city": "Alajärvi",
   "lat": 63,
   "lng": 23.8167,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 10006
 },
 {
   "city": "Suaita",
   "lat": 6.1019,
   "lng": -73.4406,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 10006
 },
 {
   "city": "Amioûn",
   "lat": 34.2994,
   "lng": 35.8097,
   "country": "Lebanon",
   "iso2": "LB",
   "iso3": "LBN",
   "capital": "minor",
   "population": 10000
 },
 {
   "city": "Gar",
   "lat": 32.2004,
   "lng": 79.9833,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 10000
 },
 {
   "city": "Heves",
   "lat": 47.6,
   "lng": 20.2833,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 9999
 },
 {
   "city": "Pyetrykaw",
   "lat": 52.1333,
   "lng": 28.5,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 9986
 },
 {
   "city": "Lapinlahti",
   "lat": 63.3667,
   "lng": 27.3833,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 9982
 },
 {
   "city": "Ii",
   "lat": 65.3167,
   "lng": 25.3722,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 9966
 },
 {
   "city": "Judenburg",
   "lat": 47.1725,
   "lng": 14.6603,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 9960
 },
 {
   "city": "Makale",
   "lat": -3.086,
   "lng": 119.8469,
   "country": "Indonesia",
   "iso2": "ID",
   "iso3": "IDN",
   "capital": "minor",
   "population": 9960
 },
 {
   "city": "Bastak",
   "lat": 27.1992,
   "lng": 54.3667,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 9959
 },
 {
   "city": "Leppävirta",
   "lat": 62.4917,
   "lng": 27.7875,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 9953
 },
 {
   "city": "Bernay",
   "lat": 49.0886,
   "lng": 0.5983,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 9951
 },
 {
   "city": "Sorkheh",
   "lat": 35.4633,
   "lng": 53.2139,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 9951
 },
 {
   "city": "Kamalasai",
   "lat": 16.3383,
   "lng": 103.5756,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 9942
 },
 {
   "city": "Sniatyn",
   "lat": 48.45,
   "lng": 25.5667,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 9942
 },
 {
   "city": "Liminka",
   "lat": 64.8083,
   "lng": 25.4167,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 9937
 },
 {
   "city": "Jilotlán de los Dolores",
   "lat": 19.3708,
   "lng": -103.0197,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 9917
 },
 {
   "city": "Saarijärvi",
   "lat": 62.7056,
   "lng": 25.2569,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 9915
 },
 {
   "city": "Amatenango del Valle",
   "lat": 16.5333,
   "lng": -92.4333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 9913
 },
 {
   "city": "Byalynichy",
   "lat": 53.9956,
   "lng": 29.7096,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 9913
 },
 {
   "city": "Phak Hai",
   "lat": 14.4626,
   "lng": 100.3667,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 9905
 },
 {
   "city": "Sursee",
   "lat": 47.1742,
   "lng": 8.1081,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 9900
 },
 {
   "city": "Talachyn",
   "lat": 54.4167,
   "lng": 29.7,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 9899
 },
 {
   "city": "Trancoso",
   "lat": 40.7833,
   "lng": -7.35,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 9878
 },
 {
   "city": "Margarita",
   "lat": 9.1531,
   "lng": -74.2881,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 9876
 },
 {
   "city": "Teotitlán",
   "lat": 18.1333,
   "lng": -97.0833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 9876
 },
 {
   "city": "Scherpenzeel",
   "lat": 52.0792,
   "lng": 5.4894,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 9873
 },
 {
   "city": "Ruoqiang",
   "lat": 39.0181,
   "lng": 88.1681,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 9872
 },
 {
   "city": "Beypazarı",
   "lat": 40.1703,
   "lng": 31.9211,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 9860
 },
 {
   "city": "Bogandé",
   "lat": 12.9714,
   "lng": -0.1436,
   "country": "Burkina Faso",
   "iso2": "BF",
   "iso3": "BFA",
   "capital": "minor",
   "population": 9854
 },
 {
   "city": "Norosí",
   "lat": 8.5261,
   "lng": -74.0378,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 9850
 },
 {
   "city": "Berezivka",
   "lat": 47.2039,
   "lng": 30.9125,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 9845
 },
 {
   "city": "Jerez",
   "lat": 14.1,
   "lng": -89.75,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 9845
 },
 {
   "city": "Tha Mai",
   "lat": 12.6196,
   "lng": 102.0112,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 9843
 },
 {
   "city": "Kobeliaky",
   "lat": 49.1474,
   "lng": 34.1993,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 9841
 },
 {
   "city": "Etchojoa",
   "lat": 26.8667,
   "lng": -109.65,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 9831
 },
 {
   "city": "Nong Wua So",
   "lat": 17.2702,
   "lng": 102.5985,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 9816
 },
 {
   "city": "Daruvar",
   "lat": 45.6,
   "lng": 17.2167,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 9815
 },
 {
   "city": "Candelaria",
   "lat": 18.1844,
   "lng": -91.0461,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 9812
 },
 {
   "city": "Kiáto",
   "lat": 38.0117,
   "lng": 22.7467,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 9812
 },
 {
   "city": "Bergambacht",
   "lat": 51.9314,
   "lng": 4.756,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 9801
 },
 {
   "city": "Csorna",
   "lat": 47.6167,
   "lng": 17.25,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 9799
 },
 {
   "city": "Muurame",
   "lat": 62.1292,
   "lng": 25.6722,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 9791
 },
 {
   "city": "Ahmetli",
   "lat": 38.5289,
   "lng": 27.9447,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 9790
 },
 {
   "city": "Figeac",
   "lat": 44.6086,
   "lng": 2.0317,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 9778
 },
 {
   "city": "Bueng Khong Long",
   "lat": 17.9684,
   "lng": 104.0484,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 9777
 },
 {
   "city": "Chom Thong",
   "lat": 18.418,
   "lng": 98.6758,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 9777
 },
 {
   "city": "T’q’ibuli",
   "lat": 42.3503,
   "lng": 42.9983,
   "country": "Georgia",
   "iso2": "GE",
   "iso3": "GEO",
   "capital": "minor",
   "population": 9770
 },
 {
   "city": "Zell am See",
   "lat": 47.3233,
   "lng": 12.7981,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 9762
 },
 {
   "city": "Çay",
   "lat": 38.5926,
   "lng": 31.0274,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 9761
 },
 {
   "city": "Hostotipaquillo",
   "lat": 21.0603,
   "lng": -104.0509,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 9761
 },
 {
   "city": "Oostzaan",
   "lat": 52.4406,
   "lng": 4.8789,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 9757
 },
 {
   "city": "Argostóli",
   "lat": 38.1739,
   "lng": 20.4883,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 9748
 },
 {
   "city": "Puerto Nariño",
   "lat": -3.7703,
   "lng": -70.3831,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 9744
 },
 {
   "city": "Cosne sur Loire",
   "lat": 47.4103,
   "lng": 2.925,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 9741
 },
 {
   "city": "Fatsa",
   "lat": 41.0222,
   "lng": 37.4919,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 9738
 },
 {
   "city": "Non Sung",
   "lat": 15.1788,
   "lng": 102.2514,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 9730
 },
 {
   "city": "Chiang Klang",
   "lat": 19.293,
   "lng": 100.8739,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 9721
 },
 {
   "city": "Vesele",
   "lat": 47.016,
   "lng": 34.9124,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 9719
 },
 {
   "city": "Idanha-a-Nova",
   "lat": 39.9167,
   "lng": -7.2333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 9716
 },
 {
   "city": "Masku",
   "lat": 60.5708,
   "lng": 22.1,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 9706
 },
 {
   "city": "Imías",
   "lat": 20.0694,
   "lng": -74.6314,
   "country": "Cuba",
   "iso2": "CU",
   "iso3": "CUB",
   "capital": "minor",
   "population": 9699
 },
 {
   "city": "Mae Ai",
   "lat": 20.0296,
   "lng": 99.2847,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 9699
 },
 {
   "city": "Santo Tomás de los Plátanos",
   "lat": 19.1817,
   "lng": -100.2589,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 9682
 },
 {
   "city": "Bad Ems",
   "lat": 50.3381,
   "lng": 7.7106,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 9681
 },
 {
   "city": "Sarkad",
   "lat": 46.74,
   "lng": 21.3778,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 9677
 },
 {
   "city": "Thap Khlo",
   "lat": 16.16,
   "lng": 100.5967,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 9676
 },
 {
   "city": "San Gregorio Atzompa",
   "lat": 19.0224,
   "lng": -98.3445,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 9671
 },
 {
   "city": "Tepetlán",
   "lat": 19.6667,
   "lng": -96.8,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 9668
 },
 {
   "city": "Farsund",
   "lat": 58.0828,
   "lng": 6.7528,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 9645
 },
 {
   "city": "Fauske",
   "lat": 67.2596,
   "lng": 15.3941,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 9640
 },
 {
   "city": "Pinhel",
   "lat": 40.7833,
   "lng": -7.0667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 9627
 },
 {
   "city": "Uracoa",
   "lat": 8.9956,
   "lng": -62.3521,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 9625
 },
 {
   "city": "Krasnogvardeyskoye",
   "lat": 45.1167,
   "lng": 39.5667,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 9617
 },
 {
   "city": "Nogent-le-Rotrou",
   "lat": 48.3217,
   "lng": 0.8217,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 9610
 },
 {
   "city": "Izium",
   "lat": 49.2238,
   "lng": 37.2915,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 9609
 },
 {
   "city": "Mortágua",
   "lat": 40.3833,
   "lng": -8.2167,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 9607
 },
 {
   "city": "Yalagüina",
   "lat": 13.4833,
   "lng": -86.4833,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 9597
 },
 {
   "city": "Xicoténcatl",
   "lat": 22.9958,
   "lng": -98.9447,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 9593
 },
 {
   "city": "Kızıltepe",
   "lat": 37.1939,
   "lng": 40.5861,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 9589
 },
 {
   "city": "Wiang Sa",
   "lat": 8.6364,
   "lng": 99.3683,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 9587
 },
 {
   "city": "Photharam",
   "lat": 13.6918,
   "lng": 99.8531,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 9575
 },
 {
   "city": "Mae Rim",
   "lat": 18.9163,
   "lng": 98.9605,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 9567
 },
 {
   "city": "Mizhhiria",
   "lat": 48.5286,
   "lng": 23.5019,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 9567
 },
 {
   "city": "Bilozerka",
   "lat": 46.6333,
   "lng": 32.4333,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 9565
 },
 {
   "city": "Vareš",
   "lat": 44.1644,
   "lng": 18.3283,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 9556
 },
 {
   "city": "Ussel",
   "lat": 45.5481,
   "lng": 2.3092,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 9555
 },
 {
   "city": "Chita",
   "lat": 6.1878,
   "lng": -72.4725,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 9542
 },
 {
   "city": "Mogadouro",
   "lat": 41.3333,
   "lng": -6.7167,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 9542
 },
 {
   "city": "Saint-Amand-Montrond",
   "lat": 46.7228,
   "lng": 2.505,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 9531
 },
 {
   "city": "Pagqên",
   "lat": 33.9739,
   "lng": 99.9083,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 9530
 },
 {
   "city": "Psychikó",
   "lat": 38.018,
   "lng": 23.7804,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 9529
 },
 {
   "city": "Pohrebyshche",
   "lat": 49.4869,
   "lng": 29.2733,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 9525
 },
 {
   "city": "Tlahualilo de Zaragoza",
   "lat": 26.1167,
   "lng": -103.45,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 9517
 },
 {
   "city": "Čepin",
   "lat": 45.5236,
   "lng": 18.5633,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 9500
 },
 {
   "city": "Lwówek Śląski",
   "lat": 51.1167,
   "lng": 15.5833,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 9500
 },
 {
   "city": "Santa Clara La Laguna",
   "lat": 14.7167,
   "lng": -91.3,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 9500
 },
 {
   "city": "Kanchanadit",
   "lat": 9.1653,
   "lng": 99.4706,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 9492
 },
 {
   "city": "Kauniainen",
   "lat": 60.2097,
   "lng": 24.7264,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 9486
 },
 {
   "city": "Corella",
   "lat": 9.6833,
   "lng": 123.9167,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 9479
 },
 {
   "city": "Nyzhnohirskyi",
   "lat": 45.4464,
   "lng": 34.7344,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 9460
 },
 {
   "city": "Foix",
   "lat": 42.9653,
   "lng": 1.6069,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 9452
 },
 {
   "city": "Comala",
   "lat": 19.3208,
   "lng": -103.7603,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 9442
 },
 {
   "city": "Rorschach",
   "lat": 47.4786,
   "lng": 9.4936,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 9439
 },
 {
   "city": "Lüchow",
   "lat": 52.9667,
   "lng": 11.15,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 9437
 },
 {
   "city": "San Juanito de Escobedo",
   "lat": 20.8,
   "lng": -104,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 9433
 },
 {
   "city": "Castelli",
   "lat": -25.95,
   "lng": -60.6167,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 9421
 },
 {
   "city": "Boyabat",
   "lat": 41.4689,
   "lng": 34.7667,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 9418
 },
 {
   "city": "Halachó",
   "lat": 20.4764,
   "lng": -90.0819,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 9412
 },
 {
   "city": "Orivesi",
   "lat": 61.6778,
   "lng": 24.3569,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 9408
 },
 {
   "city": "Voitsberg",
   "lat": 47.0483,
   "lng": 15.1503,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 9403
 },
 {
   "city": "Braslaw",
   "lat": 55.6397,
   "lng": 27.0397,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 9390
 },
 {
   "city": "Närpes",
   "lat": 62.4736,
   "lng": 21.3375,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 9387
 },
 {
   "city": "Ecatzingo",
   "lat": 18.95,
   "lng": -98.75,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 9369
 },
 {
   "city": "Langnau",
   "lat": 46.9433,
   "lng": 7.7853,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 9366
 },
 {
   "city": "Miltenberg",
   "lat": 49.7039,
   "lng": 9.2644,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 9355
 },
 {
   "city": "Orlu",
   "lat": 5.7837,
   "lng": 7.0333,
   "country": "Nigeria",
   "iso2": "NG",
   "iso3": "NGA",
   "capital": "minor",
   "population": 9351
 },
 {
   "city": "Siteía",
   "lat": 35.2,
   "lng": 26.1,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 9348
 },
 {
   "city": "Bulancak",
   "lat": 40.9381,
   "lng": 38.2314,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 9343
 },
 {
   "city": "Néa Moudaniá",
   "lat": 40.2386,
   "lng": 23.2814,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 9342
 },
 {
   "city": "Molsheim",
   "lat": 48.5428,
   "lng": 7.4922,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 9334
 },
 {
   "city": "Kaleybar",
   "lat": 38.8667,
   "lng": 47.0333,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 9324
 },
 {
   "city": "Pesca",
   "lat": 5.5589,
   "lng": -73.0503,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 9322
 },
 {
   "city": "San Pablo Huixtepec",
   "lat": 16.8167,
   "lng": -96.7833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 9313
 },
 {
   "city": "Bang Khla",
   "lat": 13.7268,
   "lng": 101.2105,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 9311
 },
 {
   "city": "Choix",
   "lat": 26.7061,
   "lng": -108.3219,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 9306
 },
 {
   "city": "Fársala",
   "lat": 39.2833,
   "lng": 22.3833,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 9298
 },
 {
   "city": "Síndos",
   "lat": 40.6667,
   "lng": 22.8,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 9289
 },
 {
   "city": "Tysmenytsia",
   "lat": 48.9008,
   "lng": 24.8492,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 9287
 },
 {
   "city": "Nakhon Thai",
   "lat": 17.1011,
   "lng": 100.8296,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 9278
 },
 {
   "city": "Pozo Almonte",
   "lat": -20.2597,
   "lng": -69.7862,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 9277
 },
 {
   "city": "Irshava",
   "lat": 48.3172,
   "lng": 23.0375,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 9276
 },
 {
   "city": "Gebze",
   "lat": 40.8028,
   "lng": 29.4306,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 9269
 },
 {
   "city": "Didymóteicho",
   "lat": 41.35,
   "lng": 26.5,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 9263
 },
 {
   "city": "Khotyn",
   "lat": 48.5078,
   "lng": 26.486,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 9262
 },
 {
   "city": "Wunsiedel",
   "lat": 50.0374,
   "lng": 11.9994,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 9259
 },
 {
   "city": "Aljustrel",
   "lat": 37.8833,
   "lng": -8.1667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 9257
 },
 {
   "city": "Guararé",
   "lat": 7.7667,
   "lng": -80.2833,
   "country": "Panama",
   "iso2": "PA",
   "iso3": "PAN",
   "capital": "minor",
   "population": 9255
 },
 {
   "city": "Granada",
   "lat": 4.5186,
   "lng": -74.3514,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 9253
 },
 {
   "city": "Vila Nova de Cerveira",
   "lat": 41.9333,
   "lng": -8.7333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 9253
 },
 {
   "city": "Santa Isabel Cholula",
   "lat": 19,
   "lng": -98.3667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 9236
 },
 {
   "city": "Philippeville",
   "lat": 50.1958,
   "lng": 4.5431,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 9228
 },
 {
   "city": "Kalanchak",
   "lat": 46.255,
   "lng": 33.2906,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 9224
 },
 {
   "city": "Nagykálló",
   "lat": 47.8831,
   "lng": 21.85,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 9214
 },
 {
   "city": "Melgaço",
   "lat": 42.1167,
   "lng": -8.2667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 9213
 },
 {
   "city": "Nong Kung Si",
   "lat": 16.65,
   "lng": 103.3,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 9213
 },
 {
   "city": "Coapilla",
   "lat": 17.1333,
   "lng": -93.1667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 9210
 },
 {
   "city": "Pong Nam Ron",
   "lat": 12.9057,
   "lng": 102.2663,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 9210
 },
 {
   "city": "Edelény",
   "lat": 48.2967,
   "lng": 20.7442,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 9209
 },
 {
   "city": "Altamirano",
   "lat": 16.7361,
   "lng": -92.0389,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 9200
 },
 {
   "city": "Paredes de Coura",
   "lat": 41.9127,
   "lng": -8.5622,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 9198
 },
 {
   "city": "Spáta",
   "lat": 37.9667,
   "lng": 23.9167,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 9198
 },
 {
   "city": "Tvrdošín",
   "lat": 49.3369,
   "lng": 19.5503,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 9195
 },
 {
   "city": "Tibaná",
   "lat": 5.3172,
   "lng": -73.3969,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 9186
 },
 {
   "city": "Suwannaphum",
   "lat": 15.6078,
   "lng": 103.8,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 9183
 },
 {
   "city": "Yenice",
   "lat": 41.2,
   "lng": 32.3333,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 9170
 },
 {
   "city": "Palu",
   "lat": 38.6914,
   "lng": 39.9294,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 9165
 },
 {
   "city": "Divriği",
   "lat": 39.3711,
   "lng": 38.1136,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 9160
 },
 {
   "city": "Redon",
   "lat": 47.6514,
   "lng": -2.0847,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 9151
 },
 {
   "city": "Amatlán de los Reyes",
   "lat": 18.8457,
   "lng": -96.9149,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 9123
 },
 {
   "city": "Belley",
   "lat": 45.7592,
   "lng": 5.6881,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 9122
 },
 {
   "city": "Eemnes",
   "lat": 52.2539,
   "lng": 5.2572,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 9113
 },
 {
   "city": "Horodenka",
   "lat": 48.6675,
   "lng": 25.5003,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 9113
 },
 {
   "city": "San Zenón",
   "lat": 9.245,
   "lng": -74.4992,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 9107
 },
 {
   "city": "Saint-Claude",
   "lat": 46.3872,
   "lng": 5.8633,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 9103
 },
 {
   "city": "Pásztó",
   "lat": 47.9194,
   "lng": 19.6978,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 9099
 },
 {
   "city": "Somero",
   "lat": 60.6292,
   "lng": 23.5139,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 9093
 },
 {
   "city": "Akyazı",
   "lat": 40.6833,
   "lng": 30.6253,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 9090
 },
 {
   "city": "Tutrakan",
   "lat": 44.039,
   "lng": 26.6194,
   "country": "Bulgaria",
   "iso2": "BG",
   "iso3": "BGR",
   "capital": "minor",
   "population": 9076
 },
 {
   "city": "Canillá",
   "lat": 15.1671,
   "lng": -90.8481,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 9073
 },
 {
   "city": "Vinhais",
   "lat": 41.8167,
   "lng": -7,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 9066
 },
 {
   "city": "Muhos",
   "lat": 64.8,
   "lng": 26,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 9063
 },
 {
   "city": "Livno",
   "lat": 43.8269,
   "lng": 17.0081,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 9045
 },
 {
   "city": "Flekkefjord",
   "lat": 58.3272,
   "lng": 6.6667,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 9027
 },
 {
   "city": "Herzberg",
   "lat": 51.6831,
   "lng": 13.2331,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 9027
 },
 {
   "city": "Tiachiv",
   "lat": 48.0114,
   "lng": 23.5722,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 9019
 },
 {
   "city": "Akat Amnuai",
   "lat": 17.5898,
   "lng": 103.9859,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 9013
 },
 {
   "city": "Kaeng Khro",
   "lat": 16.1086,
   "lng": 102.2581,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 9012
 },
 {
   "city": "Tha Luang",
   "lat": 15.0697,
   "lng": 101.1182,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 9003
 },
 {
   "city": "Chamical",
   "lat": -30.3592,
   "lng": -66.3133,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 8989
 },
 {
   "city": "Kozova",
   "lat": 49.4318,
   "lng": 25.1544,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 8989
 },
 {
   "city": "Kosum Phisai",
   "lat": 16.243,
   "lng": 103.0627,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8984
 },
 {
   "city": "Tepechitlán",
   "lat": 21.6667,
   "lng": -103.3333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8972
 },
 {
   "city": "Thung Sai",
   "lat": 16.2955,
   "lng": 99.8089,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8971
 },
 {
   "city": "Karkkila",
   "lat": 60.5347,
   "lng": 24.2097,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 8969
 },
 {
   "city": "Bolnisi",
   "lat": 41.45,
   "lng": 44.5333,
   "country": "Georgia",
   "iso2": "GE",
   "iso3": "GEO",
   "capital": "minor",
   "population": 8967
 },
 {
   "city": "Tzitzio",
   "lat": 19.4449,
   "lng": -100.9085,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8966
 },
 {
   "city": "Nuquí",
   "lat": 5.7069,
   "lng": -77.2703,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 8958
 },
 {
   "city": "Çınarcık",
   "lat": 40.6422,
   "lng": 29.1203,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 8953
 },
 {
   "city": "Pithiviers",
   "lat": 48.1719,
   "lng": 2.2519,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 8935
 },
 {
   "city": "Thap Than",
   "lat": 15.457,
   "lng": 99.8961,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8931
 },
 {
   "city": "Abdurahmoni Jomí",
   "lat": 37.9794,
   "lng": 68.689,
   "country": "Tajikistan",
   "iso2": "TJ",
   "iso3": "TJK",
   "capital": "minor",
   "population": 8925
 },
 {
   "city": "Florø",
   "lat": 61.5986,
   "lng": 5.0172,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 8925
 },
 {
   "city": "Taxkorgan",
   "lat": 37.7729,
   "lng": 75.2272,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 8919
 },
 {
   "city": "Santa María del Tule",
   "lat": 17.0465,
   "lng": -96.6363,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8918
 },
 {
   "city": "Kui Buri",
   "lat": 12.0702,
   "lng": 99.8667,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8916
 },
 {
   "city": "Plön",
   "lat": 54.1622,
   "lng": 10.4214,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 8914
 },
 {
   "city": "Siklós",
   "lat": 45.8519,
   "lng": 18.2986,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 8912
 },
 {
   "city": "Santa Cruz Atizapán",
   "lat": 19.1756,
   "lng": -99.4886,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8909
 },
 {
   "city": "Kulu",
   "lat": 39.0901,
   "lng": 33.0807,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 8905
 },
 {
   "city": "Makhambet",
   "lat": 47.6714,
   "lng": 51.5798,
   "country": "Kazakhstan",
   "iso2": "KZ",
   "iso3": "KAZ",
   "capital": "minor",
   "population": 8905
 },
 {
   "city": "San José de Gracia",
   "lat": 22.15,
   "lng": -102.4167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8896
 },
 {
   "city": "Tlumach",
   "lat": 48.8669,
   "lng": 25.0012,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 8886
 },
 {
   "city": "Chrysoúpoli",
   "lat": 40.9833,
   "lng": 24.7,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 8885
 },
 {
   "city": "Cuencamé de Ceniceros",
   "lat": 24.8667,
   "lng": -103.7,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8876
 },
 {
   "city": "Alvarado",
   "lat": 4.5672,
   "lng": -74.9533,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 8873
 },
 {
   "city": "Tataltepec de Valdés",
   "lat": 16.3064,
   "lng": -97.5461,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8869
 },
 {
   "city": "Hanko",
   "lat": 59.8236,
   "lng": 22.9681,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 8864
 },
 {
   "city": "Szentgotthárd",
   "lat": 46.9525,
   "lng": 16.2736,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 8864
 },
 {
   "city": "Schleiz",
   "lat": 50.5833,
   "lng": 11.8167,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 8854
 },
 {
   "city": "Gilgit",
   "lat": 35.9208,
   "lng": 74.3144,
   "country": "Pakistan",
   "iso2": "PK",
   "iso3": "PAK",
   "capital": "minor",
   "population": 8851
 },
 {
   "city": "Buda-Kashalyova",
   "lat": 52.7167,
   "lng": 30.5667,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 8850
 },
 {
   "city": "Guatapé",
   "lat": 6.2325,
   "lng": -75.1586,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 8844
 },
 {
   "city": "Tuzluca",
   "lat": 40.0494,
   "lng": 43.6608,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 8827
 },
 {
   "city": "Ḩīsh",
   "lat": 35.5464,
   "lng": 36.6431,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 8817
 },
 {
   "city": "Takua Pa",
   "lat": 8.8658,
   "lng": 98.3413,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8815
 },
 {
   "city": "Kamień Pomorski",
   "lat": 53.9697,
   "lng": 14.7858,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 8807
 },
 {
   "city": "Kuhmo",
   "lat": 64.125,
   "lng": 29.5167,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 8806
 },
 {
   "city": "Santa María Xadani",
   "lat": 16.3667,
   "lng": -95.0167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8795
 },
 {
   "city": "Sarlat-la-Canéda",
   "lat": 44.89,
   "lng": 1.2167,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 8793
 },
 {
   "city": "Strijen",
   "lat": 51.7422,
   "lng": 4.5514,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 8793
 },
 {
   "city": "Kukrahill",
   "lat": 12.25,
   "lng": -83.75,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 8790
 },
 {
   "city": "Bojacá",
   "lat": 4.7336,
   "lng": -74.3422,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 8788
 },
 {
   "city": "Kryzhopil",
   "lat": 48.3842,
   "lng": 28.8625,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 8788
 },
 {
   "city": "Sodankylä",
   "lat": 67.4149,
   "lng": 26.5907,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 8782
 },
 {
   "city": "Zapatoca",
   "lat": 6.815,
   "lng": -73.2683,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 8762
 },
 {
   "city": "Pa Mok",
   "lat": 14.4921,
   "lng": 100.4448,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8758
 },
 {
   "city": "Lachen",
   "lat": 47.1911,
   "lng": 8.8567,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 8754
 },
 {
   "city": "Nam Som",
   "lat": 17.7694,
   "lng": 102.1435,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8742
 },
 {
   "city": "Kolbuszowa",
   "lat": 50.2441,
   "lng": 21.7761,
   "country": "Poland",
   "iso2": "PL",
   "iso3": "POL",
   "capital": "minor",
   "population": 8732
 },
 {
   "city": "Junín",
   "lat": 4.7903,
   "lng": -73.6633,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 8720
 },
 {
   "city": "Ogulin",
   "lat": 45.2669,
   "lng": 15.2248,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 8712
 },
 {
   "city": "Tirschenreuth",
   "lat": 49.8789,
   "lng": 12.3369,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 8707
 },
 {
   "city": "Iles",
   "lat": 0.9706,
   "lng": -77.5208,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 8701
 },
 {
   "city": "Phimai",
   "lat": 15.2167,
   "lng": 102.5,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8696
 },
 {
   "city": "Szeghalom",
   "lat": 47.0239,
   "lng": 21.1678,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 8680
 },
 {
   "city": "Yang Talat",
   "lat": 16.3997,
   "lng": 103.3678,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8666
 },
 {
   "city": "Tlanalapa",
   "lat": 19.8167,
   "lng": -98.6,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8662
 },
 {
   "city": "Chyhyryn",
   "lat": 49.0833,
   "lng": 32.6667,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 8658
 },
 {
   "city": "Rakitovo",
   "lat": 41.9906,
   "lng": 24.0902,
   "country": "Bulgaria",
   "iso2": "BG",
   "iso3": "BGR",
   "capital": "minor",
   "population": 8651
 },
 {
   "city": "Yeşilhisar",
   "lat": 38.35,
   "lng": 35.0867,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 8647
 },
 {
   "city": "La Libertad",
   "lat": 16.7804,
   "lng": -90.12,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 8646
 },
 {
   "city": "Pa Sang",
   "lat": 18.5261,
   "lng": 98.9394,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8645
 },
 {
   "city": "Balatonalmádi",
   "lat": 47.0292,
   "lng": 18.0219,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 8640
 },
 {
   "city": "Ferreira do Zêzere",
   "lat": 39.7,
   "lng": -8.2833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 8619
 },
 {
   "city": "Vásárosnamény",
   "lat": 48.1267,
   "lng": 22.3183,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 8618
 },
 {
   "city": "Tibro",
   "lat": 58.419,
   "lng": 14.158,
   "country": "Sweden",
   "iso2": "SE",
   "iso3": "SWE",
   "capital": "minor",
   "population": 8614
 },
 {
   "city": "Kiuruvesi",
   "lat": 63.6528,
   "lng": 26.6194,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 8600
 },
 {
   "city": "La Belleza",
   "lat": 5.8575,
   "lng": -73.9656,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 8596
 },
 {
   "city": "Rayón",
   "lat": 19.1481,
   "lng": -99.58,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8590
 },
 {
   "city": "Ahumada",
   "lat": 30.6186,
   "lng": -106.5122,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8575
 },
 {
   "city": "El Espinal",
   "lat": 16.4906,
   "lng": -95.0444,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8575
 },
 {
   "city": "Torre de Moncorvo",
   "lat": 41.2,
   "lng": -7.1333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 8572
 },
 {
   "city": "Na Yung",
   "lat": 17.9142,
   "lng": 102.2403,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8564
 },
 {
   "city": "Usiacurí",
   "lat": 10.7428,
   "lng": -74.9758,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 8561
 },
 {
   "city": "Ayotoxco de Guerrero",
   "lat": 20.1,
   "lng": -97.4,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8558
 },
 {
   "city": "Muzo",
   "lat": 5.5297,
   "lng": -74.1044,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 8548
 },
 {
   "city": "Dubovskoye",
   "lat": 47.4092,
   "lng": 42.7575,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 8544
 },
 {
   "city": "Krupki",
   "lat": 54.325,
   "lng": 29.1361,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 8540
 },
 {
   "city": "Taftanāz",
   "lat": 35.9981,
   "lng": 36.7847,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 8540
 },
 {
   "city": "Doğubayazıt",
   "lat": 39.55,
   "lng": 44.0833,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 8523
 },
 {
   "city": "Kosiv",
   "lat": 48.315,
   "lng": 25.0953,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 8522
 },
 {
   "city": "Laitila",
   "lat": 60.8792,
   "lng": 21.6931,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 8520
 },
 {
   "city": "Habo",
   "lat": 57.9066,
   "lng": 14.0856,
   "country": "Sweden",
   "iso2": "SE",
   "iso3": "SWE",
   "capital": "minor",
   "population": 8516
 },
 {
   "city": "Hueyotlipan",
   "lat": 18.9,
   "lng": -97.85,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8511
 },
 {
   "city": "Tepeojuma",
   "lat": 18.7167,
   "lng": -98.45,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8492
 },
 {
   "city": "Sawang Daen Din",
   "lat": 17.475,
   "lng": 103.4569,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8486
 },
 {
   "city": "Bad Zurzach",
   "lat": 47.5877,
   "lng": 8.2933,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 8476
 },
 {
   "city": "Szerencs",
   "lat": 48.1622,
   "lng": 21.205,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 8473
 },
 {
   "city": "Namsos",
   "lat": 64.467,
   "lng": 11.494,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 8471
 },
 {
   "city": "Bünyan",
   "lat": 38.8486,
   "lng": 35.8592,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 8467
 },
 {
   "city": "Sanluri",
   "lat": 39.5611,
   "lng": 8.9,
   "country": "Italy",
   "iso2": "IT",
   "iso3": "ITA",
   "capital": "minor",
   "population": 8464
 },
 {
   "city": "Lypovets",
   "lat": 49.2161,
   "lng": 29.0561,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 8463
 },
 {
   "city": "Orocué",
   "lat": 4.7897,
   "lng": -71.3392,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 8460
 },
 {
   "city": "Campo Maior",
   "lat": 39.0167,
   "lng": -7.0667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 8456
 },
 {
   "city": "Goundam",
   "lat": 16.4144,
   "lng": -3.6708,
   "country": "Mali",
   "iso2": "ML",
   "iso3": "MLI",
   "capital": "minor",
   "population": 8456
 },
 {
   "city": "Coutances",
   "lat": 49.0453,
   "lng": -1.4453,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 8454
 },
 {
   "city": "Zoeterwoude",
   "lat": 52.1136,
   "lng": 4.5058,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 8450
 },
 {
   "city": "Kemer",
   "lat": 36.6,
   "lng": 30.55,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 8449
 },
 {
   "city": "Non Sang",
   "lat": 16.8699,
   "lng": 102.564,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8449
 },
 {
   "city": "Bang Mun Nak",
   "lat": 16.0278,
   "lng": 100.3792,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8448
 },
 {
   "city": "Arteaga",
   "lat": 25.45,
   "lng": -100.8333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8446
 },
 {
   "city": "Altar",
   "lat": 30.7136,
   "lng": -111.8353,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8439
 },
 {
   "city": "San Ignacio Río Muerto",
   "lat": 27.415,
   "lng": -110.245,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8435
 },
 {
   "city": "Bang Len",
   "lat": 14.0219,
   "lng": 100.1719,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8429
 },
 {
   "city": "Vyetka",
   "lat": 52.5592,
   "lng": 31.1808,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 8426
 },
 {
   "city": "Magtymguly",
   "lat": 38.4333,
   "lng": 56.2833,
   "country": "Turkmenistan",
   "iso2": "TM",
   "iso3": "TKM",
   "capital": "minor",
   "population": 8412
 },
 {
   "city": "Tavas",
   "lat": 37.5729,
   "lng": 29.071,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 8408
 },
 {
   "city": "Derecske",
   "lat": 47.3537,
   "lng": 21.5718,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 8403
 },
 {
   "city": "Kadınhanı",
   "lat": 38.2397,
   "lng": 32.2114,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 8398
 },
 {
   "city": "Celestún",
   "lat": 20.8583,
   "lng": -90.4,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8389
 },
 {
   "city": "Keminmaa",
   "lat": 65.8014,
   "lng": 24.5444,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 8388
 },
 {
   "city": "Perg",
   "lat": 48.2503,
   "lng": 14.6336,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 8388
 },
 {
   "city": "Guabito",
   "lat": 9.4949,
   "lng": -82.6117,
   "country": "Panama",
   "iso2": "PA",
   "iso3": "PAN",
   "capital": "minor",
   "population": 8387
 },
 {
   "city": "Fethiye",
   "lat": 36.6206,
   "lng": 29.1142,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 8386
 },
 {
   "city": "Puerres",
   "lat": 0.8839,
   "lng": -77.5039,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 8384
 },
 {
   "city": "Seyé",
   "lat": 20.8372,
   "lng": -89.3719,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8369
 },
 {
   "city": "Narowlya",
   "lat": 51.8,
   "lng": 29.5,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 8364
 },
 {
   "city": "Privas",
   "lat": 44.735,
   "lng": 4.5992,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 8363
 },
 {
   "city": "San Miguel del Puerto",
   "lat": 15.9167,
   "lng": -96.1667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8362
 },
 {
   "city": "Kumphawapi",
   "lat": 17.1151,
   "lng": 103.0186,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8341
 },
 {
   "city": "Jánoshalma",
   "lat": 46.2967,
   "lng": 19.3228,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 8336
 },
 {
   "city": "Suomussalmi",
   "lat": 64.8833,
   "lng": 28.9167,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 8336
 },
 {
   "city": "Suluova",
   "lat": 40.8313,
   "lng": 35.6479,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 8332
 },
 {
   "city": "Kalampáka",
   "lat": 39.7044,
   "lng": 21.6269,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 8330
 },
 {
   "city": "Concordia",
   "lat": 23.2883,
   "lng": -106.0675,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8328
 },
 {
   "city": "Texmelucan",
   "lat": 16.5833,
   "lng": -97.2,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8323
 },
 {
   "city": "Vila Viçosa",
   "lat": 38.75,
   "lng": -7.4333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 8319
 },
 {
   "city": "Proença-a-Nova",
   "lat": 39.75,
   "lng": -7.9167,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 8314
 },
 {
   "city": "Phayakkhaphum Phisai",
   "lat": 15.5183,
   "lng": 103.1921,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8308
 },
 {
   "city": "San Francisco",
   "lat": 4.9711,
   "lng": -74.2892,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 8304
 },
 {
   "city": "Chaiwan",
   "lat": 17.285,
   "lng": 103.2281,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8297
 },
 {
   "city": "Akhalkalaki",
   "lat": 41.4056,
   "lng": 43.4861,
   "country": "Georgia",
   "iso2": "GE",
   "iso3": "GEO",
   "capital": "minor",
   "population": 8295
 },
 {
   "city": "Kitzbühel",
   "lat": 47.4464,
   "lng": 12.3919,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 8272
 },
 {
   "city": "Çine",
   "lat": 37.6127,
   "lng": 28.0591,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 8271
 },
 {
   "city": "Aratoca",
   "lat": 6.6956,
   "lng": -73.0175,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 8269
 },
 {
   "city": "Khanu Woralaksaburi",
   "lat": 16.074,
   "lng": 99.8574,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8264
 },
 {
   "city": "Pudasjärvi",
   "lat": 65.3583,
   "lng": 27,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 8257
 },
 {
   "city": "Ferreira do Alentejo",
   "lat": 38.0589,
   "lng": -8.1156,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 8255
 },
 {
   "city": "Ikata-chō",
   "lat": 33.4883,
   "lng": 132.3542,
   "country": "Japan",
   "iso2": "JP",
   "iso3": "JPN",
   "capital": "minor",
   "population": 8253
 },
 {
   "city": "Uramita",
   "lat": 6.8986,
   "lng": -76.1736,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 8253
 },
 {
   "city": "Kunszentmiklós",
   "lat": 47.0264,
   "lng": 19.1228,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 8248
 },
 {
   "city": "U Thong",
   "lat": 14.3761,
   "lng": 99.8922,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8237
 },
 {
   "city": "Neusiedl am See",
   "lat": 47.9486,
   "lng": 16.8431,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 8235
 },
 {
   "city": "Nakhon Chai Si",
   "lat": 13.8005,
   "lng": 100.1869,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8226
 },
 {
   "city": "Bohorodchany",
   "lat": 48.8,
   "lng": 24.5333,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 8222
 },
 {
   "city": "Rakkestad",
   "lat": 59.3731,
   "lng": 11.4203,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 8222
 },
 {
   "city": "Ouderkerk aan de Amstel",
   "lat": 52.2972,
   "lng": 4.9117,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 8200
 },
 {
   "city": "Septemvri",
   "lat": 42.2164,
   "lng": 24.125,
   "country": "Bulgaria",
   "iso2": "BG",
   "iso3": "BGR",
   "capital": "minor",
   "population": 8197
 },
 {
   "city": "Liezen",
   "lat": 47.5667,
   "lng": 14.2333,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 8191
 },
 {
   "city": "Nopaltepec",
   "lat": 19.7819,
   "lng": -98.7125,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8182
 },
 {
   "city": "Uribe",
   "lat": 3.2408,
   "lng": -74.3536,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 8180
 },
 {
   "city": "Novi Sanzhary",
   "lat": 49.3354,
   "lng": 34.3162,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 8179
 },
 {
   "city": "Kirawsk",
   "lat": 53.2686,
   "lng": 29.4736,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 8178
 },
 {
   "city": "Laprida",
   "lat": -37.5333,
   "lng": -60.8167,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 8178
 },
 {
   "city": "Loppi",
   "lat": 60.7181,
   "lng": 24.4417,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 8175
 },
 {
   "city": "Tidaholm",
   "lat": 58.1794,
   "lng": 13.9599,
   "country": "Sweden",
   "iso2": "SE",
   "iso3": "SWE",
   "capital": "minor",
   "population": 8146
 },
 {
   "city": "Chinon",
   "lat": 47.1669,
   "lng": 0.2428,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 8145
 },
 {
   "city": "Chonnabot",
   "lat": 16.084,
   "lng": 102.6193,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8145
 },
 {
   "city": "Hokksund",
   "lat": 59.7708,
   "lng": 9.9099,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 8138
 },
 {
   "city": "La Tour-du-Pin",
   "lat": 45.5658,
   "lng": 5.445,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 8137
 },
 {
   "city": "Sawang Wirawong",
   "lat": 15.2417,
   "lng": 105.0922,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8136
 },
 {
   "city": "Dong Luang",
   "lat": 16.8066,
   "lng": 104.5337,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8135
 },
 {
   "city": "Lure",
   "lat": 47.6831,
   "lng": 6.4967,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 8131
 },
 {
   "city": "Manhush",
   "lat": 47.05,
   "lng": 37.3,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 8127
 },
 {
   "city": "Hongwansi",
   "lat": 38.8384,
   "lng": 99.6159,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 8125
 },
 {
   "city": "Tarutyne",
   "lat": 46.1846,
   "lng": 29.1495,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 8125
 },
 {
   "city": "Gümüşhacıköy",
   "lat": 40.8667,
   "lng": 35.2167,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 8121
 },
 {
   "city": "Çamaş",
   "lat": 40.9026,
   "lng": 37.528,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 8118
 },
 {
   "city": "Almirante",
   "lat": 9.3,
   "lng": -82.4,
   "country": "Panama",
   "iso2": "PA",
   "iso3": "PAN",
   "capital": "minor",
   "population": 8114
 },
 {
   "city": "Huaniqueo de Morales",
   "lat": 19.8946,
   "lng": -101.5122,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8093
 },
 {
   "city": "Tha Maka",
   "lat": 13.9203,
   "lng": 99.7667,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8093
 },
 {
   "city": "Acacoyagua",
   "lat": 15.3408,
   "lng": -92.6747,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8092
 },
 {
   "city": "Les Andelys",
   "lat": 49.2456,
   "lng": 1.4117,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 8092
 },
 {
   "city": "San Martín Hidalgo",
   "lat": 20.435,
   "lng": -103.9286,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8092
 },
 {
   "city": "Laihia",
   "lat": 62.9764,
   "lng": 22.0111,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 8090
 },
 {
   "city": "Ron Phibun",
   "lat": 8.1722,
   "lng": 99.8533,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 8086
 },
 {
   "city": "Solosuchiapa",
   "lat": 17.4,
   "lng": -93.0167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8082
 },
 {
   "city": "Bedekovčina",
   "lat": 46.0333,
   "lng": 16,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 8079
 },
 {
   "city": "Hammerfest",
   "lat": 70.6634,
   "lng": 23.6821,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 8073
 },
 {
   "city": "Tacotalpa",
   "lat": 17.5931,
   "lng": -92.8258,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8071
 },
 {
   "city": "Beeskow",
   "lat": 52.1667,
   "lng": 14.25,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 8070
 },
 {
   "city": "Afşin",
   "lat": 38.25,
   "lng": 36.9167,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 8069
 },
 {
   "city": "Rafael Lucio",
   "lat": 19.5922,
   "lng": -96.9819,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 8068
 },
 {
   "city": "Motavita",
   "lat": 5.5772,
   "lng": -73.3672,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 8067
 },
 {
   "city": "Pedraza",
   "lat": 10.1886,
   "lng": -74.9156,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 8066
 },
 {
   "city": "Toijala",
   "lat": 61.1667,
   "lng": 23.8681,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 8060
 },
 {
   "city": "Semenivka",
   "lat": 52.1772,
   "lng": 32.5797,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 8052
 },
 {
   "city": "Tarouca",
   "lat": 41.0167,
   "lng": -7.7833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 8048
 },
 {
   "city": "Domat/Ems",
   "lat": 46.8198,
   "lng": 9.4545,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 8037
 },
 {
   "city": "Kunszentmárton",
   "lat": 46.84,
   "lng": 20.29,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 8034
 },
 {
   "city": "Gurjaani",
   "lat": 41.7444,
   "lng": 45.8,
   "country": "Georgia",
   "iso2": "GE",
   "iso3": "GEO",
   "capital": "minor",
   "population": 8024
 },
 {
   "city": "Puerto Parra",
   "lat": 6.6514,
   "lng": -74.0569,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 8011
 },
 {
   "city": "Chinique",
   "lat": 15.0411,
   "lng": -91.0269,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 8009
 },
 {
   "city": "Çukurca",
   "lat": 37.2469,
   "lng": 43.6124,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 8007
 },
 {
   "city": "Simav",
   "lat": 39.0833,
   "lng": 28.9833,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 8003
 },
 {
   "city": "Nurmes",
   "lat": 63.5444,
   "lng": 29.1333,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 7996
 },
 {
   "city": "Helvecia",
   "lat": -31.1,
   "lng": -60.0833,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 7994
 },
 {
   "city": "Tamási",
   "lat": 46.6167,
   "lng": 18.3,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 7986
 },
 {
   "city": "Fehérgyarmat",
   "lat": 47.985,
   "lng": 22.5169,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 7981
 },
 {
   "city": "Daun",
   "lat": 50.1986,
   "lng": 6.8319,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 7974
 },
 {
   "city": "Albarradas",
   "lat": 17.0667,
   "lng": -96.2,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 7965
 },
 {
   "city": "Penalva do Castelo",
   "lat": 40.6667,
   "lng": -7.6833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 7956
 },
 {
   "city": "Almyrós",
   "lat": 39.1803,
   "lng": 22.7606,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 7955
 },
 {
   "city": "Sibilia",
   "lat": 15,
   "lng": -91.6167,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 7954
 },
 {
   "city": "San Luis de Palenque",
   "lat": 5.4222,
   "lng": -71.7314,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 7951
 },
 {
   "city": "Simmern",
   "lat": 49.9833,
   "lng": 7.5167,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 7950
 },
 {
   "city": "Bosanski Petrovac",
   "lat": 44.55,
   "lng": 16.3667,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 7946
 },
 {
   "city": "San Diego de la Unión",
   "lat": 21.4656,
   "lng": -100.8736,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 7946
 },
 {
   "city": "Chumsaeng",
   "lat": 15.898,
   "lng": 100.311,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 7942
 },
 {
   "city": "Lillesand",
   "lat": 58.2494,
   "lng": 8.3773,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 7930
 },
 {
   "city": "Slawharad",
   "lat": 53.4453,
   "lng": 30.9964,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 7928
 },
 {
   "city": "Boğazlıyan",
   "lat": 39.1929,
   "lng": 35.2462,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 7925
 },
 {
   "city": "Tonila",
   "lat": 19.4261,
   "lng": -103.5319,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 7919
 },
 {
   "city": "Mrkonjić Grad",
   "lat": 44.4167,
   "lng": 17.0833,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 7915
 },
 {
   "city": "Cherykaw",
   "lat": 53.5667,
   "lng": 31.3667,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 7910
 },
 {
   "city": "Freistadt",
   "lat": 48.5117,
   "lng": 14.5061,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 7909
 },
 {
   "city": "Bahşılı",
   "lat": 39.8136,
   "lng": 33.4716,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 7907
 },
 {
   "city": "San Julián",
   "lat": -49.307,
   "lng": -67.7298,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 7894
 },
 {
   "city": "Krupina",
   "lat": 48.35,
   "lng": 19.0669,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 7890
 },
 {
   "city": "Našice",
   "lat": 45.4833,
   "lng": 18.1,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 7888
 },
 {
   "city": "Bruck an der Leitha",
   "lat": 48.0255,
   "lng": 16.779,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 7887
 },
 {
   "city": "Jalasjärvi",
   "lat": 62.4917,
   "lng": 22.7667,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 7885
 },
 {
   "city": "Námestovo",
   "lat": 49.41,
   "lng": 19.48,
   "country": "Slovakia",
   "iso2": "SK",
   "iso3": "SVK",
   "capital": "minor",
   "population": 7876
 },
 {
   "city": "São João da Pesqueira",
   "lat": 41.1333,
   "lng": -7.4,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 7874
 },
 {
   "city": "Mynämäki",
   "lat": 60.6833,
   "lng": 21.9833,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 7859
 },
 {
   "city": "Koufália",
   "lat": 40.7792,
   "lng": 22.5767,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 7850
 },
 {
   "city": "Myory",
   "lat": 55.6167,
   "lng": 27.6167,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 7845
 },
 {
   "city": "El Higo",
   "lat": 21.7667,
   "lng": -98.45,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 7844
 },
 {
   "city": "Paratebueno",
   "lat": 4.3753,
   "lng": -73.2131,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 7835
 },
 {
   "city": "Alaçam",
   "lat": 41.61,
   "lng": 35.595,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 7833
 },
 {
   "city": "Céret",
   "lat": 42.4881,
   "lng": 2.7514,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 7821
 },
 {
   "city": "Khondāb",
   "lat": 34.3928,
   "lng": 49.1839,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 7810
 },
 {
   "city": "Muri",
   "lat": 47.2747,
   "lng": 8.3417,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 7810
 },
 {
   "city": "Toprakkale",
   "lat": 37.0639,
   "lng": 36.1469,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 7803
 },
 {
   "city": "Kirchheimbolanden",
   "lat": 49.6664,
   "lng": 8.0117,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 7802
 },
 {
   "city": "Rohatyn",
   "lat": 49.4167,
   "lng": 24.6167,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 7797
 },
 {
   "city": "Santa Ana",
   "lat": 16.8069,
   "lng": -89.8272,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 7792
 },
 {
   "city": "Khon Buri",
   "lat": 14.5686,
   "lng": 102.1564,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 7781
 },
 {
   "city": "Kemijärvi",
   "lat": 66.715,
   "lng": 27.4306,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 7766
 },
 {
   "city": "Yerköy",
   "lat": 39.6381,
   "lng": 34.4672,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 7766
 },
 {
   "city": "Bremgarten",
   "lat": 47.3528,
   "lng": 8.34,
   "country": "Switzerland",
   "iso2": "CH",
   "iso3": "CHE",
   "capital": "minor",
   "population": 7765
 },
 {
   "city": "Lagkadás",
   "lat": 40.75,
   "lng": 23.0667,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 7764
 },
 {
   "city": "Santa Rosa de Río Primero",
   "lat": -31.15,
   "lng": -63.3833,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 7761
 },
 {
   "city": "Thung Saliam",
   "lat": 17.324,
   "lng": 99.5671,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 7760
 },
 {
   "city": "Soeng Sang",
   "lat": 14.4264,
   "lng": 102.4606,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 7756
 },
 {
   "city": "Guerrero",
   "lat": 28.5478,
   "lng": -107.4856,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 7751
 },
 {
   "city": "Ban Phue",
   "lat": 17.6874,
   "lng": 102.4756,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 7740
 },
 {
   "city": "Chaiya",
   "lat": 9.3778,
   "lng": 99.2728,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 7736
 },
 {
   "city": "San Diego",
   "lat": 14.7833,
   "lng": -89.7833,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 7732
 },
 {
   "city": "Landeck",
   "lat": 47.1333,
   "lng": 10.5667,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 7725
 },
 {
   "city": "Thann",
   "lat": 47.8067,
   "lng": 7.1044,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 7721
 },
 {
   "city": "Kınık",
   "lat": 39.0872,
   "lng": 27.3833,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 7718
 },
 {
   "city": "Kryve Ozero",
   "lat": 47.9333,
   "lng": 30.3333,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 7717
 },
 {
   "city": "Alpiarça",
   "lat": 39.2593,
   "lng": -8.585,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 7702
 },
 {
   "city": "Langres",
   "lat": 47.8625,
   "lng": 5.3331,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 7699
 },
 {
   "city": "Celorico da Beira",
   "lat": 40.6333,
   "lng": -7.4,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 7693
 },
 {
   "city": "Santana",
   "lat": 6.0572,
   "lng": -73.4811,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 7692
 },
 {
   "city": "Beloslav",
   "lat": 43.1937,
   "lng": 27.7067,
   "country": "Bulgaria",
   "iso2": "BG",
   "iso3": "BGR",
   "capital": "minor",
   "population": 7689
 },
 {
   "city": "Saint-Jean-de-Maurienne",
   "lat": 45.2767,
   "lng": 6.345,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 7683
 },
 {
   "city": "Neufchâteau",
   "lat": 49.8411,
   "lng": 5.4353,
   "country": "Belgium",
   "iso2": "BE",
   "iso3": "BEL",
   "capital": "minor",
   "population": 7679
 },
 {
   "city": "Nyíradony",
   "lat": 47.6833,
   "lng": 21.9167,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 7677
 },
 {
   "city": "Dykanka",
   "lat": 49.8222,
   "lng": 34.5341,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 7662
 },
 {
   "city": "Zara",
   "lat": 39.895,
   "lng": 37.7531,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 7661
 },
 {
   "city": "Coromoro",
   "lat": 6.295,
   "lng": -73.0406,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 7659
 },
 {
   "city": "Trostianets",
   "lat": 48.512,
   "lng": 29.2137,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 7655
 },
 {
   "city": "Chapultenango",
   "lat": 17.3333,
   "lng": -93.1333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 7644
 },
 {
   "city": "Lice",
   "lat": 38.4549,
   "lng": 40.6519,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 7643
 },
 {
   "city": "Heyin",
   "lat": 36.0451,
   "lng": 101.4242,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 7642
 },
 {
   "city": "Solone",
   "lat": 48.2054,
   "lng": 34.8686,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 7628
 },
 {
   "city": "Løten",
   "lat": 60.8253,
   "lng": 11.3908,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 7625
 },
 {
   "city": "Oulainen",
   "lat": 64.2667,
   "lng": 24.8167,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 7610
 },
 {
   "city": "Akçaabat",
   "lat": 41.0167,
   "lng": 39.5833,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 7600
 },
 {
   "city": "Tlacotalpan",
   "lat": 18.6167,
   "lng": -95.6667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 7600
 },
 {
   "city": "Sykkylven",
   "lat": 62.3896,
   "lng": 6.5782,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 7596
 },
 {
   "city": "Péronne",
   "lat": 49.9322,
   "lng": 2.9364,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 7595
 },
 {
   "city": "Kokemäki",
   "lat": 61.2556,
   "lng": 22.3486,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 7591
 },
 {
   "city": "Novoselytsia",
   "lat": 48.2167,
   "lng": 26.2667,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 7588
 },
 {
   "city": "Poreč",
   "lat": 45.2167,
   "lng": 13.5833,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 7585
 },
 {
   "city": "Nusaybin",
   "lat": 37.0833,
   "lng": 41.2167,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 7584
 },
 {
   "city": "Oberwart",
   "lat": 47.2878,
   "lng": 16.2031,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 7572
 },
 {
   "city": "Råde",
   "lat": 59.3489,
   "lng": 10.855,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 7568
 },
 {
   "city": "Nykarleby",
   "lat": 63.5167,
   "lng": 22.5333,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 7564
 },
 {
   "city": "Ambalema",
   "lat": 4.7817,
   "lng": -74.7639,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 7563
 },
 {
   "city": "Bereznehuvate",
   "lat": 47.3114,
   "lng": 32.8478,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 7552
 },
 {
   "city": "Al Mazra‘ah",
   "lat": 32.7828,
   "lng": 36.4833,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 7547
 },
 {
   "city": "San Pablo Villa de Mitla",
   "lat": 16.917,
   "lng": -96.4,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 7547
 },
 {
   "city": "Tenabo",
   "lat": 20.0333,
   "lng": -90.2167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 7543
 },
 {
   "city": "Tarso",
   "lat": 5.865,
   "lng": -75.8225,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 7542
 },
 {
   "city": "Kruhlaye",
   "lat": 54.2479,
   "lng": 29.7966,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 7530
 },
 {
   "city": "Omitlán de Juárez",
   "lat": 20.1697,
   "lng": -98.6478,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 7529
 },
 {
   "city": "Catarina",
   "lat": 11.9119,
   "lng": -86.0751,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 7524
 },
 {
   "city": "Rethel",
   "lat": 49.5097,
   "lng": 4.3675,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 7522
 },
 {
   "city": "Kunhegyes",
   "lat": 47.37,
   "lng": 20.6308,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 7521
 },
 {
   "city": "Roshtkhvār",
   "lat": 34.975,
   "lng": 59.6247,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 7514
 },
 {
   "city": "Cuauhtémoc",
   "lat": 19.3281,
   "lng": -103.6028,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 7513
 },
 {
   "city": "Drvar",
   "lat": 44.3739,
   "lng": 16.3808,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 7506
 },
 {
   "city": "Mondim de Basto",
   "lat": 41.4,
   "lng": -7.95,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 7493
 },
 {
   "city": "Phu Kradueng",
   "lat": 16.8842,
   "lng": 101.8847,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 7491
 },
 {
   "city": "Gediz",
   "lat": 38.9939,
   "lng": 29.3914,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 7486
 },
 {
   "city": "Miranda do Douro",
   "lat": 41.5,
   "lng": -6.2667,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 7482
 },
 {
   "city": "Nong Phai",
   "lat": 15.9972,
   "lng": 101.0652,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 7481
 },
 {
   "city": "Maripí",
   "lat": 5.5489,
   "lng": -74.0067,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 7480
 },
 {
   "city": "Strömstad",
   "lat": 58.9441,
   "lng": 11.1864,
   "country": "Sweden",
   "iso2": "SE",
   "iso3": "SWE",
   "capital": "minor",
   "population": 7466
 },
 {
   "city": "Gaoual",
   "lat": 11.754,
   "lng": -13.213,
   "country": "Guinea",
   "iso2": "GN",
   "iso3": "GIN",
   "capital": "minor",
   "population": 7461
 },
 {
   "city": "Lodève",
   "lat": 43.7317,
   "lng": 3.3194,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 7459
 },
 {
   "city": "Beyşehir",
   "lat": 37.6867,
   "lng": 31.7306,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 7456
 },
 {
   "city": "Krasnokutsk",
   "lat": 50.0567,
   "lng": 35.1492,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 7455
 },
 {
   "city": "Aybastı",
   "lat": 40.6867,
   "lng": 37.3992,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 7450
 },
 {
   "city": "Nisa",
   "lat": 39.5167,
   "lng": -7.65,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 7450
 },
 {
   "city": "Almodôvar",
   "lat": 37.5114,
   "lng": -8.0603,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 7449
 },
 {
   "city": "Sivrihisar",
   "lat": 39.451,
   "lng": 31.5367,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 7442
 },
 {
   "city": "Haapajärvi",
   "lat": 63.7486,
   "lng": 25.3181,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 7438
 },
 {
   "city": "Uthumphon Phisai",
   "lat": 15.097,
   "lng": 104.1643,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 7417
 },
 {
   "city": "Tsarychanka",
   "lat": 48.9432,
   "lng": 34.4748,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 7415
 },
 {
   "city": "San Miguel Sigüilá",
   "lat": 14.9,
   "lng": -91.6167,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 7411
 },
 {
   "city": "Križ",
   "lat": 45.65,
   "lng": 16.5167,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 7406
 },
 {
   "city": "Damnoen Saduak",
   "lat": 13.5177,
   "lng": 99.9545,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 7399
 },
 {
   "city": "Simacota",
   "lat": 6.4431,
   "lng": -73.3375,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 7393
 },
 {
   "city": "Suonenjoki",
   "lat": 62.625,
   "lng": 27.1222,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 7390
 },
 {
   "city": "Kuşadası",
   "lat": 37.8586,
   "lng": 27.2594,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 7388
 },
 {
   "city": "Anna Paulowna",
   "lat": 52.85,
   "lng": 4.8167,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 7380
 },
 {
   "city": "Bang Pa-in",
   "lat": 14.22,
   "lng": 100.5813,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 7380
 },
 {
   "city": "Langon",
   "lat": 44.5531,
   "lng": -0.2494,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 7374
 },
 {
   "city": "Bruzual",
   "lat": 8.0494,
   "lng": -69.3316,
   "country": "Venezuela",
   "iso2": "VE",
   "iso3": "VEN",
   "capital": "minor",
   "population": 7370
 },
 {
   "city": "Arraiolos",
   "lat": 38.7229,
   "lng": -7.9843,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 7363
 },
 {
   "city": "Komījān",
   "lat": 34.7192,
   "lng": 49.3267,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 7358
 },
 {
   "city": "Santa Marta de Penaguião",
   "lat": 41.2,
   "lng": -7.7833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 7356
 },
 {
   "city": "Mattersburg",
   "lat": 47.7381,
   "lng": 16.3969,
   "country": "Austria",
   "iso2": "AT",
   "iso3": "AUT",
   "capital": "minor",
   "population": 7349
 },
 {
   "city": "San Diego de Alejandría",
   "lat": 20.8667,
   "lng": -101.9,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 7349
 },
 {
   "city": "Lenti",
   "lat": 46.6236,
   "lng": 16.5458,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 7348
 },
 {
   "city": "Sa Bot",
   "lat": 15.2084,
   "lng": 100.834,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 7348
 },
 {
   "city": "Elassóna",
   "lat": 39.8947,
   "lng": 22.1886,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 7338
 },
 {
   "city": "Mação",
   "lat": 39.55,
   "lng": -8,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 7338
 },
 {
   "city": "Serik",
   "lat": 36.9167,
   "lng": 31.1,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 7336
 },
 {
   "city": "Borba",
   "lat": 38.8,
   "lng": -7.45,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 7333
 },
 {
   "city": "Vila Nova da Barquinha",
   "lat": 39.45,
   "lng": -8.4333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 7322
 },
 {
   "city": "La Concordia",
   "lat": 13.1833,
   "lng": -86.1667,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 7320
 },
 {
   "city": "Vila Nova de Foz Côa",
   "lat": 41.0833,
   "lng": -7.1333,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 7312
 },
 {
   "city": "Klichaw",
   "lat": 53.4828,
   "lng": 29.3411,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 7308
 },
 {
   "city": "Na Chaluai",
   "lat": 14.5309,
   "lng": 105.2431,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 7306
 },
 {
   "city": "San Antonino Monteverde",
   "lat": 17.5322,
   "lng": -97.7208,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 7305
 },
 {
   "city": "Harjavalta",
   "lat": 61.3139,
   "lng": 22.1417,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 7296
 },
 {
   "city": "Hopelchén",
   "lat": 19.7444,
   "lng": -89.8453,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 7295
 },
 {
   "city": "Ten Boer",
   "lat": 53.2833,
   "lng": 6.6833,
   "country": "Netherlands",
   "iso2": "NL",
   "iso3": "NLD",
   "capital": "minor",
   "population": 7292
 },
 {
   "city": "Hang Dong",
   "lat": 18.6886,
   "lng": 98.9193,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 7291
 },
 {
   "city": "Alvaiázere",
   "lat": 39.8333,
   "lng": -8.3833,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 7287
 },
 {
   "city": "Tall Tamr",
   "lat": 36.6606,
   "lng": 40.3714,
   "country": "Syria",
   "iso2": "SY",
   "iso3": "SYR",
   "capital": "minor",
   "population": 7285
 },
 {
   "city": "Poiares",
   "lat": 40.2167,
   "lng": -8.25,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 7281
 },
 {
   "city": "Castro Verde",
   "lat": 37.6976,
   "lng": -8.0819,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 7276
 },
 {
   "city": "Mértola",
   "lat": 37.6333,
   "lng": -7.65,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 7274
 },
 {
   "city": "Ra-ngae",
   "lat": 6.2967,
   "lng": 101.7283,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 7266
 },
 {
   "city": "Füzesabony",
   "lat": 47.751,
   "lng": 20.409,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 7265
 },
 {
   "city": "Thung Fon",
   "lat": 17.4722,
   "lng": 103.2626,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 7260
 },
 {
   "city": "Soatá",
   "lat": 6.3328,
   "lng": -72.6839,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 7255
 },
 {
   "city": "Terras de Bouro",
   "lat": 41.7167,
   "lng": -8.3,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 7253
 },
 {
   "city": "Yssingeaux",
   "lat": 45.1428,
   "lng": 4.1236,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 7245
 },
 {
   "city": "Almeida",
   "lat": 40.7259,
   "lng": -6.9056,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 7242
 },
 {
   "city": "Tona",
   "lat": 7.2019,
   "lng": -72.9664,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 7239
 },
 {
   "city": "Shyriaieve",
   "lat": 47.3878,
   "lng": 30.1911,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 7238
 },
 {
   "city": "Belene",
   "lat": 43.644,
   "lng": 25.1254,
   "country": "Bulgaria",
   "iso2": "BG",
   "iso3": "BGR",
   "capital": "minor",
   "population": 7227
 },
 {
   "city": "Huiloapan",
   "lat": 18.8167,
   "lng": -97.15,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 7221
 },
 {
   "city": "Čavle",
   "lat": 45.35,
   "lng": 14.48,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 7220
 },
 {
   "city": "Ikaalinen",
   "lat": 61.7694,
   "lng": 23.0681,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 7207
 },
 {
   "city": "Havran",
   "lat": 39.5583,
   "lng": 27.0983,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 7205
 },
 {
   "city": "Zacualpan",
   "lat": 20.4993,
   "lng": -98.3393,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 7194
 },
 {
   "city": "Carhué",
   "lat": -37.1667,
   "lng": -62.7333,
   "country": "Argentina",
   "iso2": "AR",
   "iso3": "ARG",
   "capital": "minor",
   "population": 7190
 },
 {
   "city": "Karpenísi",
   "lat": 38.9203,
   "lng": 21.7833,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 7183
 },
 {
   "city": "Conkal",
   "lat": 21.0733,
   "lng": -89.5208,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 7173
 },
 {
   "city": "Marathónas",
   "lat": 38.155,
   "lng": 23.9636,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 7170
 },
 {
   "city": "Ciudad Cerralvo",
   "lat": 26.0899,
   "lng": -99.6147,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 7169
 },
 {
   "city": "Haapavesi",
   "lat": 64.1375,
   "lng": 25.3667,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 7167
 },
 {
   "city": "Freyung",
   "lat": 48.8075,
   "lng": 13.5475,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 7166
 },
 {
   "city": "Hanga Roa",
   "lat": -27.1492,
   "lng": -109.4323,
   "country": "Chile",
   "iso2": "CL",
   "iso3": "CHL",
   "capital": "minor",
   "population": 7163
 },
 {
   "city": "San Vicente Pacaya",
   "lat": 14.4161,
   "lng": -90.6392,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 7162
 },
 {
   "city": "Koshekhabl",
   "lat": 44.9,
   "lng": 40.4833,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 7157
 },
 {
   "city": "Kantunilkín",
   "lat": 21.1,
   "lng": -87.4833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 7150
 },
 {
   "city": "Bamnet Narong",
   "lat": 15.5034,
   "lng": 101.681,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 7147
 },
 {
   "city": "Myadzyel",
   "lat": 54.8756,
   "lng": 26.9386,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 7146
 },
 {
   "city": "Yeşilyurt",
   "lat": 38.3048,
   "lng": 38.2512,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 7146
 },
 {
   "city": "Si Chiang Mai",
   "lat": 17.9564,
   "lng": 102.5867,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 7142
 },
 {
   "city": "Socha",
   "lat": 5.9978,
   "lng": -72.6922,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 7140
 },
 {
   "city": "Outokumpu",
   "lat": 62.725,
   "lng": 29.0181,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 7139
 },
 {
   "city": "Santa Eulalia",
   "lat": 28.5939,
   "lng": -105.8878,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 7135
 },
 {
   "city": "Slivnitsa",
   "lat": 42.8515,
   "lng": 23.0383,
   "country": "Bulgaria",
   "iso2": "BG",
   "iso3": "BGR",
   "capital": "minor",
   "population": 7131
 },
 {
   "city": "Stryn",
   "lat": 61.8386,
   "lng": 6.8628,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 7118
 },
 {
   "city": "Taşköprü",
   "lat": 41.5097,
   "lng": 34.2142,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 7113
 },
 {
   "city": "Akhmeta",
   "lat": 42.0333,
   "lng": 45.2,
   "country": "Georgia",
   "iso2": "GE",
   "iso3": "GEO",
   "capital": "minor",
   "population": 7105
 },
 {
   "city": "Bagnères-de-Bigorre",
   "lat": 43.0642,
   "lng": 0.1497,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 7103
 },
 {
   "city": "Salento",
   "lat": 4.6372,
   "lng": -75.5708,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 7103
 },
 {
   "city": "Bo Phloi",
   "lat": 14.3284,
   "lng": 99.5154,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 7095
 },
 {
   "city": "Saruhanlı",
   "lat": 38.7344,
   "lng": 27.5681,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 7095
 },
 {
   "city": "Nakhon Luang",
   "lat": 14.4628,
   "lng": 100.6083,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 7092
 },
 {
   "city": "Chuarrancho",
   "lat": 14.8167,
   "lng": -90.5167,
   "country": "Guatemala",
   "iso2": "GT",
   "iso3": "GTM",
   "capital": "minor",
   "population": 7091
 },
 {
   "city": "Okhansk",
   "lat": 57.7167,
   "lng": 55.3833,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 7087
 },
 {
   "city": "Chicomuselo",
   "lat": 15.7442,
   "lng": -92.2833,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 7083
 },
 {
   "city": "Boavita",
   "lat": 6.3308,
   "lng": -72.5842,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 7079
 },
 {
   "city": "Lávrio",
   "lat": 37.7144,
   "lng": 24.0565,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 7078
 },
 {
   "city": "San José de Cusmapa",
   "lat": 13.2833,
   "lng": -86.65,
   "country": "Nicaragua",
   "iso2": "NI",
   "iso3": "NIC",
   "capital": "minor",
   "population": 7072
 },
 {
   "city": "Säkylä",
   "lat": 61.05,
   "lng": 22.35,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 7070
 },
 {
   "city": "Isliam-Terek",
   "lat": 45.2256,
   "lng": 35.2033,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 7067
 },
 {
   "city": "Polýkastro",
   "lat": 40.9954,
   "lng": 22.5714,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 7064
 },
 {
   "city": "Suşehri",
   "lat": 40.1628,
   "lng": 38.0855,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 7063
 },
 {
   "city": "La Grandeza",
   "lat": 15.5333,
   "lng": -92.2333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 7057
 },
 {
   "city": "Aydıncık",
   "lat": 36.1667,
   "lng": 33.35,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 7040
 },
 {
   "city": "Chādegān",
   "lat": 32.7683,
   "lng": 50.6286,
   "country": "Iran",
   "iso2": "IR",
   "iso3": "IRN",
   "capital": "minor",
   "population": 7037
 },
 {
   "city": "Ko Pha-Ngan",
   "lat": 9.7176,
   "lng": 99.9949,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 7035
 },
 {
   "city": "Redondo",
   "lat": 38.6464,
   "lng": -7.5464,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 7031
 },
 {
   "city": "Sharhorod",
   "lat": 48.75,
   "lng": 28.0833,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 7029
 },
 {
   "city": "Novska",
   "lat": 45.3333,
   "lng": 16.9833,
   "country": "Croatia",
   "iso2": "HR",
   "iso3": "HRV",
   "capital": "minor",
   "population": 7028
 },
 {
   "city": "San Pablo Huitzo",
   "lat": 17.2764,
   "lng": -96.8825,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 7024
 },
 {
   "city": "Guingamp",
   "lat": 48.5625,
   "lng": -3.1511,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 7022
 },
 {
   "city": "Polessk",
   "lat": 54.8667,
   "lng": 21.1,
   "country": "Russia",
   "iso2": "RU",
   "iso3": "RUS",
   "capital": "minor",
   "population": 7011
 },
 {
   "city": "Chaek",
   "lat": 41.93,
   "lng": 74.51,
   "country": "Kyrgyzstan",
   "iso2": "KG",
   "iso3": "KGZ",
   "capital": "minor",
   "population": 7009
 },
 {
   "city": "Tenamaxtlán",
   "lat": 20.2167,
   "lng": -104.167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 7005
 },
 {
   "city": "Virrat",
   "lat": 62.2403,
   "lng": 23.7708,
   "country": "Finland",
   "iso2": "FI",
   "iso3": "FIN",
   "capital": "minor",
   "population": 7002
 },
 {
   "city": "Litóchoro",
   "lat": 40.1028,
   "lng": 22.5069,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 6995
 },
 {
   "city": "Çiftlikköy",
   "lat": 40.6603,
   "lng": 29.3236,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 6994
 },
 {
   "city": "Birkenfeld",
   "lat": 49.65,
   "lng": 7.1833,
   "country": "Germany",
   "iso2": "DE",
   "iso3": "DEU",
   "capital": "minor",
   "population": 6984
 },
 {
   "city": "Oppdal",
   "lat": 62.5667,
   "lng": 9.6,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 6981
 },
 {
   "city": "Tha Ruea",
   "lat": 14.5596,
   "lng": 100.7226,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 6979
 },
 {
   "city": "Kazanka",
   "lat": 47.8381,
   "lng": 32.8261,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 6972
 },
 {
   "city": "Turka",
   "lat": 49.1544,
   "lng": 23.03,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 6968
 },
 {
   "city": "Guatavita",
   "lat": 4.9344,
   "lng": -73.8344,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 6963
 },
 {
   "city": "Vestnes",
   "lat": 62.5844,
   "lng": 7.0183,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 6958
 },
 {
   "city": "San Buenaventura",
   "lat": 29.8333,
   "lng": -107.4667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 6957
 },
 {
   "city": "Tomakivka",
   "lat": 47.8163,
   "lng": 34.7471,
   "country": "Ukraine",
   "iso2": "UA",
   "iso3": "UKR",
   "capital": "minor",
   "population": 6957
 },
 {
   "city": "Sunndalsøra",
   "lat": 62.6128,
   "lng": 8.6342,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 6956
 },
 {
   "city": "Vyerkhnyadzvinsk",
   "lat": 55.7667,
   "lng": 27.9333,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 6956
 },
 {
   "city": "Dubrowna",
   "lat": 54.5667,
   "lng": 30.6833,
   "country": "Belarus",
   "iso2": "BY",
   "iso3": "BLR",
   "capital": "minor",
   "population": 6951
 },
 {
   "city": "Tumbiscatío de Ruiz",
   "lat": 18.5167,
   "lng": -102.383,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 6947
 },
 {
   "city": "Aşkale",
   "lat": 39.9211,
   "lng": 40.6947,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 6943
 },
 {
   "city": "Kubrat",
   "lat": 43.7965,
   "lng": 26.5001,
   "country": "Bulgaria",
   "iso2": "BG",
   "iso3": "BGR",
   "capital": "minor",
   "population": 6940
 },
 {
   "city": "Segré",
   "lat": 47.6864,
   "lng": -0.8725,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 6938
 },
 {
   "city": "Imuris",
   "lat": 30.7667,
   "lng": -110.8333,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 6924
 },
 {
   "city": "Valle de Guadalupe",
   "lat": 21,
   "lng": -102.6167,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 6924
 },
 {
   "city": "Kistelek",
   "lat": 46.4731,
   "lng": 19.98,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 6917
 },
 {
   "city": "Polgárdi",
   "lat": 47.0538,
   "lng": 18.3049,
   "country": "Hungary",
   "iso2": "HU",
   "iso3": "HUN",
   "capital": "minor",
   "population": 6917
 },
 {
   "city": "Sivaslı",
   "lat": 38.4996,
   "lng": 29.6808,
   "country": "Turkey",
   "iso2": "TR",
   "iso3": "TUR",
   "capital": "minor",
   "population": 6911
 },
 {
   "city": "Güicán",
   "lat": 6.4625,
   "lng": -72.4119,
   "country": "Colombia",
   "iso2": "CO",
   "iso3": "COL",
   "capital": "minor",
   "population": 6909
 },
 {
   "city": "Sêraitang",
   "lat": 32.9368,
   "lng": 100.7356,
   "country": "China",
   "iso2": "CN",
   "iso3": "CHN",
   "capital": "minor",
   "population": 6907
 },
 {
   "city": "Sikatuna",
   "lat": 9.6833,
   "lng": 123.9667,
   "country": "Philippines",
   "iso2": "PH",
   "iso3": "PHL",
   "capital": "minor",
   "population": 6906
 },
 {
   "city": "Velika Kladuša",
   "lat": 45.1667,
   "lng": 15.8,
   "country": "Bosnia And Herzegovina",
   "iso2": "BA",
   "iso3": "BIH",
   "capital": "minor",
   "population": 6902
 },
 {
   "city": "Zlatograd",
   "lat": 41.3805,
   "lng": 25.0947,
   "country": "Bulgaria",
   "iso2": "BG",
   "iso3": "BGR",
   "capital": "minor",
   "population": 6902
 },
 {
   "city": "Pinotepa de Don Luis",
   "lat": 16.4333,
   "lng": -97.9667,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 6893
 },
 {
   "city": "Saint-Jean-d’Angély",
   "lat": 45.9442,
   "lng": -0.5211,
   "country": "France",
   "iso2": "FR",
   "iso3": "FRA",
   "capital": "minor",
   "population": 6886
 },
 {
   "city": "Charoen Sin",
   "lat": 17.5837,
   "lng": 103.5422,
   "country": "Thailand",
   "iso2": "TH",
   "iso3": "THA",
   "capital": "minor",
   "population": 6869
 },
 {
   "city": "Tomatlán",
   "lat": 19.0203,
   "lng": -96.9956,
   "country": "Mexico",
   "iso2": "MX",
   "iso3": "MEX",
   "capital": "minor",
   "population": 6869
 },
 {
   "city": "Aígina",
   "lat": 37.7467,
   "lng": 23.4275,
   "country": "Greece",
   "iso2": "GR",
   "iso3": "GRC",
   "capital": "minor",
   "population": 6867
 },
 {
   "city": "Jevnaker",
   "lat": 60.2389,
   "lng": 10.3931,
   "country": "Norway",
   "iso2": "NO",
   "iso3": "NOR",
   "capital": "minor",
   "population": 6867
 },
 {
   "city": "Belmonte",
   "lat": 40.3667,
   "lng": -7.35,
   "country": "Portugal",
   "iso2": "PT",
   "iso3": "PRT",
   "capital": "minor",
   "population": 6859
 },
 {
   "city": "Nérac",
   "lat": 44.1361,
   "lng": 0.3394,
 },
 {
 },