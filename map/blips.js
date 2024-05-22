/////////////////////////////////////////////////////////////////////////////
///////// FRVGS MAP /////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const center_x = 50;
const center_y = 100;

var SateliteStyle = L.tileLayer('https://cdn.frvgs.com/map/tiles-satellite/{z}/{x}/{y}.png', {
    minZoom: 2,
    maxZoom: 8,
    noWrap: true,
    continuousWorld: false,
    id: 'SateliteStyle map',
  }),
  AtlasStyle = L.tileLayer('https://cdn.frvgs.com/map//tiles-atlas/{z}/{x}/{y}.png', {
    minZoom: 2,
    maxZoom: 6,
    noWrap: true,
    continuousWorld: false,
    id: 'styleAtlas map',
  }),
  RoadStyle = L.tileLayer('https://cdn.frvgs.com/map//tiles-road/{z}/{x}/{y}.png', {
    minZoom: 2,
    maxZoom: 6,
    noWrap: true,
    continuousWorld: false,
    id: 'styleRoad map',
  }),
  Original = L.tileLayer('https://cdn.frvgs.com/map//tiles-original/{z}/{x}/{y}.png', {
    minZoom: 2,
    maxZoom: 6,
    noWrap: true,
    continuousWorld: false,
    id: 'styleOriginal map',
  });

/////////////////////////////////////////////////////////////////////////////

var BlipsGroups = L.layerGroup();
var BlipsPublic = L.layerGroup();

var BlipsServices = L.layerGroup();
var BlipsStore = L.layerGroup();
var BlipsIndustries = L.layerGroup();
var BlipsFactories = L.layerGroup();

var BlipsEntertainment = L.layerGroup();
var BlipsSports = L.layerGroup();
var BlipsEvents = L.layerGroup();

var Icons = {
  "🏴‍☠️ Groups": BlipsGroups,
  "🏛 Public Services": BlipsPublic,

  "🏢 Industries": BlipsIndustries,
  "🏭 Factories": BlipsFactories,

  "🤝 Services": BlipsServices,
  "🏬 Shopping": BlipsStore,

  "🎉 Entertainment": BlipsEntertainment,
  "🏃‍♀️ Sports": BlipsSports,
  "✨ Events": BlipsEvents,

};

/////////////////////////////////////////////////////////////////////////////

var map = L.map('map', {
  minZoom: 2,
  maxZoom: 6,
  Zoom: 6,
  maxNativeZoom: 6,
  preferCanvas: true,
  layers: [AtlasStyle],
  center: [50, -100],
  zoom: 2,
});

var layersControl = L.control.layers({
  "Satelite": SateliteStyle,
  "Atlas": AtlasStyle,
  "Road": RoadStyle,
  "Original": Original,
}, Icons).addTo(map);


function customIcon(icon, subfolder) {
  return L.icon({
    iconUrl: `/IconsLore/${subfolder}/${icon}.png`,
    iconSize: [24, 24],
    iconAnchor: [24, 24],
    popupAnchor: [-10, -27]
  });
}

// Mouse position for setting up blips
L.control.mousePosition().addTo(map);


/////////////////////////////////////////////////////////////////////////////
///////// BLIPS /////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////
///////// 🏛 Public Services /////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

///////// 🏛 Los Santos ////////////////////////////////////////////////////

// PUBLIC - LS GOUV
var X = -112;
var Y = 24;
L.marker([Y, X], {
  icon: customIcon("lsgov", "city")
}).addTo(Icons["🏛 Public Services"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/city/lsgov.png' /><h2 style='text-align:center;'> LS GOV</h2><p>Los Santos Government</p>");

// PUBLIC - LSPD - Mission Row
var X = -100;
var Y = 18;
L.marker([Y, X], {
  icon: customIcon("lspd", "city")
}).addTo(Icons["🏛 Public Services"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/city/lspd.png' /><h2 style='text-align:center;'> LSPD </h2><p>Mission Row - Los Santos Police Department</p>");

// PUBLIC - LSPD - Vespucci
var X = -128.7;
var Y = 20.6;
L.marker([Y, X], {
  icon: customIcon("lspd", "city")
}).addTo(Icons["🏛 Public Services"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/city/lspd.png' /><h2 style='text-align:center;'> LSPD </h2><p>Vespucci - Los Santos Police Department</p>");

// PUBLIC - LSFD - FIRE STATION
var X = -87.5;
var Y = 9.6;
L.marker([Y, X], {
  icon: customIcon("lsfd", "city")
}).addTo(Icons["🏛 Public Services"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/city/lspd.png' /><h2 style='text-align:center;'> LSFD</h2><p>Los Santos Fire Department </p>");

// PUBLIC - Pillbox Hospital (LSMC)
var X = -103.8;
var Y = 24.5;
L.marker([Y, X], {
  icon: customIcon("lsmc", "city")
}).addTo(Icons["🏛 Public Services"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/city/lsmc.png' /><h2 style='text-align:center;'>LSMC</h2><p>Los Santos Medical Center</p>");

///////// 🏛 BLAINE COUNTY ////////////////////////////////////////////////////

// PUBLIC - BC GOUV
var X = -78.4;
var Y = 76;
L.marker([Y, X], {
  icon: customIcon("bcgov", "city")
}).addTo(Icons["🏛 Public Services"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/city/bcgov.png' /><h2 style='text-align:center;'>BC GOV</h2><p>Blaine County Government</p>");


// PUBLIC PALETO PD - BCSD - Sandy Shore Sheriff Dept.
var X = -75.8;
var Y = 70.7;
L.marker([Y, X], {
  icon: customIcon("bcsd", "city")
}).addTo(Icons["🏛 Public Services"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/city/bcsd.png' /><h2 style='text-align:center;'>BCSD</h2><p>Sandy Shore - Blaine County Sherrif Department</p>");

// PUBLIC - PALETO PD - BCSD - Paleto Sheriff Dept.
var X = -116.67;
var Y = 80.66;
L.marker([Y, X], {
  icon: customIcon("bcsd", "city")
}).addTo(Icons["🏛 Public Services"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/city/bcsd.png' /><h2 style='text-align:center;'>BCSD</h2><p>Paleto - Blaine County Sherrif Department</p>");

// BCFD - FIRE STATION #2 (LSFD)
var X = -62.8;
var Y = 75.6;
L.marker([Y, X], {
  icon: customIcon("bcfd", "city")
}).addTo(Icons["🏛 Public Services"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/city/bcfd.png' /><h2 style='text-align:center;'>BCFD</h2><p>Blaine County Fire Department</p>");

// PUBLIC - Sandy Hospital (BCMC)
var X = -76.2;
var Y = 70.6;
L.marker([Y, X], {
  icon: customIcon("bcmc", "city")
}).addTo(Icons["🏛 Public Services"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/city/bcmc.png' /><h2 style='text-align:center;'>BCMC</h2><p>Blaine County Medical Center </p>");

///////// 🏛 SAN ANDREAS ////////////////////////////////////////////////////

// PUBLIC - SA GOUV
var X = -118.4;
var Y = 30;
L.marker([Y, X], {
  icon: customIcon("sagov", "city")
}).addTo(Icons["🏛 Public Services"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/city/sagov.png' /><h2 style='text-align:center;'>SA GOV</h2><p>San Andreas Government</p>");

// PUBLIC - DOJ - Davis Court
var X = -102.9;
var Y = 6.3;
L.marker([Y, X], {
  icon: customIcon("doj", "city")
}).addTo(Icons["🏛 Public Services"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/city/doj.png' /><h2 style='text-align:center;'>DOJ</h2><p>San Andreas Departement of Justice</p>");

// PUBLIC - IAA
var X = -72.5;
var Y = 65.8;
L.marker([Y, X], {
  icon: customIcon("iaa", "city")
}).addTo(Icons["🏛 Public Services"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/city/iaa.png' /><h2 style='text-align:center;'>IAA</h2><p>International Affairs Agency</p>");

// PUBLIC - SAFD Militaire
var X = -153.17;
var Y = 68;
L.marker([Y, X], {
  icon: customIcon("sadf", "city")
}).addTo(Icons["🏛 Public Services"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/city/sadf.png' /><h2 style='text-align:center;'> SADF </h2><p>San Andreas Defense Force</p>");

// PUBLIC - NOOSE
var X = -62.4;
var Y = 29.5;
L.marker([Y, X], {
  icon: customIcon("noose", "city")
}).addTo(Icons["🏛 Public Services"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/city/noose.png' /><h2 style='text-align:center;'> NOOSE </h2><p>National Office of Security Enforcement</p>");

// PUBLIC - FIB Headquarters
var X = -107.6;
var Y = 22.4;
L.marker([Y, X], {
  icon: customIcon("fib", "city")
}).addTo(Icons["🏛 Public Services"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/city/fib.png' /><h2 style='text-align:center;'> FIB </h2><p>Federal Investigation Bureau</p>");

// PUBLIC - BBSP BOLINGBROKE PENITENTIARY
var X = -76;
var Y = 63.2;
L.marker([Y, X], {
  icon: customIcon("bbsp", "city")
}).addTo(Icons["🏛 Public Services"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/city/bbsp.png' /><h2 style='text-align:center;'> SABP </h2><p>San Andreas Bolingbroke Penitentiary</p>");

// PUBLIC - PARK RANGER (SAPR) San Andreas Parks Rangers
var X = -102.2;
var Y = 44.6;
L.marker([Y, X], {
  icon: customIcon("sapr", "city")
}).addTo(Icons["🏛 Public Services"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/city/sapr.png' /><h2 style='text-align:center;'> SASP </h2><p>San Andreas State Patrol</p>");

// PUBLIC - SA UNI - University
var X = -138.8;
var Y = 36.7;
L.marker([Y, X], {
  icon: customIcon("university", "city")
}).addTo(Icons["🏛 Public Services"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/city/university.png' /><h2 style='text-align:center;'> SA UNI </h2><p>San Andreas University</p>");

// PUBLIC - Weazel News
var X = -119.8;
var Y = 18.7;
L.marker([Y, X], {
  icon: customIcon("weazel", "city")
}).addTo(Icons["🏛 Public Services"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/city/weazel.png' /><h2 style='text-align:center;'> Weazel </h2><p>News & Entertainment</p>");

/////////////////////////////////////////////////////////////////////////////
///////// 🔳 GROUPS /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

///////// 🏴‍☠️ LS GANGS //////////////////////////////////////////////////////
// GANGS AZTECAS
var X = -100;
var Y = 8.1;
L.marker([Y, X], {
  icon: customIcon("gang-aztecas-icon", "groups")
}).addTo(Icons["🏴‍☠️ Groups"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/groups/gang-aztecas-icon.png' /><h2 style='text-align:center;'> HQ Aztecas </h2>");

// GANGS BALLAS
var X = -108.6;
var Y = 3.4;
L.marker([Y, X], {
  icon: customIcon("gang-ballas-icon", "groups")
}).addTo(Icons["🏴‍☠️ Groups"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/groups/gang-ballas-icon.png' /><h2 style='text-align:center;'> HQ Ballas </h2>");

// GANGS FAMILIES
var X = -112;
var Y = 6.7;
L.marker([Y, X], {
  icon: customIcon("gang-families-icon", "groups")
}).addTo(Icons["🏴‍☠️ Groups"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/groups/gang-families-icon.png' /><h2 style='text-align:center;'> HQ Families </h2>");

// GANGS MARABUNTA
var X = -86;
var Y = 7.2;
L.marker([Y, X], {
  icon: customIcon("gang-marabunta-icon", "groups")
}).addTo(Icons["🏴‍☠️ Groups"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/groups/gang-marabunta-icon.png' /><h2 style='text-align:center;'> HQ Marabunta </h2>");

// GANGS TRIADS
var X = -120.3;
var Y = 13.1;
L.marker([Y, X], {
  icon: customIcon("gang-triads-icon", "groups")
}).addTo(Icons["🏴‍☠️ Groups"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/groups/gang-triads-icon.png' /><h2 style='text-align:center;'> HQ Triads </h2>");

// GANGS VAGOS
var X = -103;
var Y = 0.35;
L.marker([Y, X], {
  icon: customIcon("gang-vagos-icon", "groups")
}).addTo(Icons["🏴‍☠️ Groups"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/groups/gang-vagos-icon.png' /><h2 style='text-align:center;'> HQ Vagos </h2>");

///////// 🏴‍☠️ BC GANGS /////////////////////////////////////////////////
// GANGS ALTRUIST
var X = -129;
var Y = 76.8;
L.marker([Y, X], {
  icon: customIcon("gang-altruist-icon", "groups")
}).addTo(Icons["🏴‍☠️ Groups"]).bindPopup("<img width='100px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/groups/gang-altruist-icon.png' /><h2 style='text-align:center;'> HQ Altruist </h2>");

// GANGS FOOLIGANZ
var X = -99.1;
var Y = 26.5;
L.marker([Y, X], {
  icon: customIcon("gang-fooliganz-icon", "groups")
}).addTo(Icons["🏴‍☠️ Groups"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/groups/gang-fooliganz-icon.png' /><h2 style='text-align:center;'> HQ Fooliganz </h2>");

// GANGS HIPPIES
var X = -65.7;
var Y = 71.2;
L.marker([Y, X], {
  icon: customIcon("gang-hippies-icon", "groups")
}).addTo(Icons["🏴‍☠️ Groups"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/groups/gang-hippies-icon.png' /><h2 style='text-align:center;'> HQ Hippies </h2>");

// GANGS O'NEIL
var X = -65.2;
var Y = 77;
L.marker([Y, X], {
  icon: customIcon("gang-oneil-icon", "groups")
}).addTo(Icons["🏴‍☠️ Groups"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/groups/gang-oneil-icon.png' /><h2 style='text-align:center;'> HQ O'Neil </h2>");

///////// 🏴‍☠️ SA MC /////////////////////////////////////////////////

// MC LOST MC
var X = -91.6;
var Y = 31.6;
L.marker([Y, X], {
  icon: customIcon("mc-lost-icon", "groups")
}).addTo(Icons["🏴‍☠️ Groups"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/groups/mc-lost-icon.png' /><h2 style='text-align:center;'> HQ LOST </h2>");

// MC MAYANS
var X = -107.9;
var Y = 70.8;
L.marker([Y, X], {
  icon: customIcon("mc-mayans-icon", "groups")
}).addTo(Icons["🏴‍☠️ Groups"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/groups/mc-mayans-icon.png' /><h2 style='text-align:center;'> HQ MAYANS </h2>");

// MC SOA
var X = -112.6;
var Y = 81.6;
L.marker([Y, X], {
  icon: customIcon("mc-soa-icon", "groups")
}).addTo(Icons["🏴‍☠️ Groups"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/groups/mc-soa-icon.png' /><h2 style='text-align:center;'> HQ SOA </h2>");

/////////////////////////////////////////////////////////////////////////////
///////// 🏢 Industries /////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// 🪓 Sawmill
var X = -123.4;
var Y = 78.7;
L.marker([Y, X], {
  icon: customIcon("sawmill", "business")
}).addTo(Icons["🏢 Industries"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/business/sawmill.png' /><h2 style='text-align:center;'>🪓 Sawmill </h2>");

// 🏰 Vineyard
var X = -142.4;
var Y = 58.3;
L.marker([Y, X], {
  icon: customIcon("vineyard", "business")
}).addTo(Icons["🏢 Industries"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/business/vineyard.png' /><h2 style='text-align:center;'>🏰 Vineyard </h2>");

// 🧑‍🌾 Farming
var X = -80.8;
var Y = 59.8;
L.marker([Y, X], {
  icon: customIcon("farm", "business")
}).addTo(Icons["🏢 Industries"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/business/farm.png' /><h2 style='text-align:center;'>🧑‍🌾 Farm </h2>");

// 🦊 Hunting
var X = -117.4;
var Y = 79;
L.marker([Y, X], {
  icon: customIcon("hunting", "business")
}).addTo(Icons["🏢 Industries"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/business/hunting.png' /><h2 style='text-align:center;'>🦊 Hunting Club </h2>");


// 🦊 Hunting
var X = -95.1;
var Y = 73.7;
L.marker([Y, X], {
  icon: customIcon("hunting", "business")
}).addTo(Icons["🏢 Industries"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/business/hunting.png' /><h2 style='text-align:center;'>🦊 Hunting Club </h2>");

// 🎣 Fishing
var X = -166.9;
var Y = 49.7;
L.marker([Y, X], {
  icon: customIcon("fishing", "business")
}).addTo(Icons["🏢 Industries"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/business/fishing.png' /><h2 style='text-align:center;'>🎣 Fishing Club </h2>");

// 🎣 Fishing
var X = -85.3;
var Y = 74.1;
L.marker([Y, X], {
  icon: customIcon("fishing", "business")
}).addTo(Icons["🏢 Industries"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/business/fishing.png' /><h2 style='text-align:center;'>🎣 Fishing Club </h2>");

// ⛏ Mining
var X = -62;
var Y = 65.5;
L.marker([Y, X], {
  icon: customIcon("mining", "business")
}).addTo(Icons["🏢 Industries"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/business/mining.png' /><h2 style='text-align:center;'>⛏ Mining </h2>");


/////////////////////////////////////////////////////////////////////////////
///////// 🏭 Factories //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// 🏭 food
var X = -109.7;
var Y = 81.3;
L.marker([Y, X], {
  icon: customIcon("food", "business")
}).addTo(Icons["🏭 Factories"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/business/food.png' /><h2 style='text-align:center;'>Food Factory </h2>");

// 🏭 drink
var X = -88.9;
var Y = -21.3;
L.marker([Y, X], {
  icon: customIcon("drink", "business")
}).addTo(Icons["🏭 Factories"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/business/drink.png' /><h2 style='text-align:center;'>Bottleneck </h2>");

// 🏭 brewing
var X = -94;
var Y = 61.5;
L.marker([Y, X], {
  icon: customIcon("brewing", "business")
}).addTo(Icons["🏭 Factories"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/business/brewing.png' /><h2 style='text-align:center;'>Brewing </h2>");

// 🏭 metal
var X = -60;
var Y = 53.4;
L.marker([Y, X], {
  icon: customIcon("metal", "business")
}).addTo(Icons["🏭 Factories"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/business/metal.png' /><h2 style='text-align:center;'>Black Smith </h2>");

// 🏭 electronics
var X = -150.1;
var Y = 39.2;
L.marker([Y, X], {
  icon: customIcon("electronics", "business")
}).addTo(Icons["🏭 Factories"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/business/electronics.png' /><h2 style='text-align:center;'>Kortz Electronics </h2>");

// 🏭 humane
var X = -46.9;
var Y = 71.2;
L.marker([Y, X], {
  icon: customIcon("humane", "business")
}).addTo(Icons["🏭 Factories"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/business/humane.png' /><h2 style='text-align:center;'>Humane Labs </h2>");

// 🏭 wood
var X = -118.5;
var Y = 78.2;
L.marker([Y, X], {
  icon: customIcon("wood", "business")
}).addTo(Icons["🏭 Factories"]).bindPopup("<img width='50px' style='display: block;width: 50%;margin-left:auto;margin-right:auto;min-width:150px;' src='/IconsLore/business/wood.png' /><h2 style='text-align:center;'>Sawmil</h2>");


/////////////////////////////////////////////////////////////////////////////
///////// Add your custom icons here  ///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////