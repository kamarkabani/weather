/* Förklaringar till förkortningarna i parameterlistan som returneras från SMHI
spp         frozen precipitation, %                 int, 0-100, -9 om null
pcat        precipitation category                  int, 0-6
pmin        minimum precipitation intensity, mm/h   decimal, 1 decimal
pmean       mean precipitation intensity, mm/h      decimal, 1 decimal
pmax        maximum precipitation intensity, mm/h   decimal, 1 decimal
pmedian     median precipitation intensity, mm/h    decimal, 1 decimal
tcc_mean    total cloud cover, mean                 int, 0-8
lcc_mean    low level cloud cover, mean             int, 0-8
mcc_mean    medium level cloud cover, mean          int, 0-8
hcc_mean    high level cloud cover, mean            int, 0-8
msl         air pressure, hPa                       decimal, 1 decimal
t           temperature, C                          decimal, 1 decimal
vis         visibility, km                          decimal, 1 decimal
wd          wind direction, degree                  int
ws          wind speed, m/s                         decimal, 1 decimal
r           relative humidity, %                    int, 0-100
tstm        thunder probability, %                  int, 0-100
gust        wind gust speed, m/s                    decimal, 1 decimal
Wsymb2      weather symbol                          int, 1-27
 */

/* Givna konstanter, longitud och latitud för Malmö, url till SMHI,
  månadsnamn, namn på vädertyperna (med en tom typ först för att de ska
  ha ett index som motsvarar symbolernas nummer):
*/
const lonMalmo = 13.087616;
const latMalmo = 55.436559;
const url = `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${lonMalmo}/lat/${latMalmo}/data.json`;
const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'maj',
  'jun',
  'jul',
  'jun',
  'aug',
  'sep',
  'okt',
  'nov',
  'dec'
];
const vadertyp = [
  '',
  'Klart',
  'L&auml;tt molnighet',
  'Halvklart',
  'Molningt',
  'Mycket moln',
  'Mulet',
  'Dimma',
  'L&auml;tta regnskurar',
  'Regnskurar',
  'Kraftiga regnskurar',
  '&Aring;skskurar',
  'L&auml;tta byar med regn och sn&ouml;',
  'Byar av regn och sn&ouml;',
  'Kraftiga byar av regn och sn&ouml;',
  'L&auml;tta sn&ouml;byar',
  'Sn&ouml;byar',
  'Kraftiga sn&ouml;byar',
  'L&auml;tt regn',
  'Regn',
  'Kraftigt regn',
  '&Aring;ska',
  'L&auml;tt sn&ouml;blandat regn',
  'Sn&ouml;blandat regn',
  'Kraftigt sn&ouml;blandat regn',
  'L&auml;tt sn&ouml;fall',
  'M&aring;ttligt sn&ouml;fall',
  'Ymnigt sn&ouml;fall'
];
