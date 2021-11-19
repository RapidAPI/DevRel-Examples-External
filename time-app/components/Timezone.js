const Timezone = ({ onChange }) => {
  return (
    <select
      name="countries"
      onChange={(e) => onChange(e.target.value)}
      autoFocus={true}
      className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
    >
      <option value="Africa/Abidjan">Africa/Abidjan</option>
      <option value="Africa/Accra">Africa/Accra</option>
      <option value="Africa/Algiers">Africa/Algiers</option>
      <option value="Africa/Bissau">Africa/Bissau</option>
      <option value="Africa/Cairo">Africa/Cairo</option>
      <option value="Africa/Casablanca">Africa/Casablanca</option>
      <option value="Africa/Ceuta">Africa/Ceuta</option>
      <option value="Africa/El_Aaiun">Africa/El_Aaiun</option>
      <option value="Africa/Johannesburg">Africa/Johannesburg</option>
      <option value="Africa/Juba">Africa/Juba</option>
      <option value="Africa/Khartoum">Africa/Khartoum</option>
      <option value="Africa/Lagos">Africa/Lagos</option>
      <option value="Africa/Maputo">Africa/Maputo</option>
      <option value="Africa/Monrovia">Africa/Monrovia</option>
      <option value="Africa/Nairobi">Africa/Nairobi</option>
      <option value="Africa/Ndjamena">Africa/Ndjamena</option>
      <option value="Africa/Sao_Tome">Africa/Sao_Tome</option>
      <option value="Africa/Tripoli">Africa/Tripoli</option>
      <option value="Africa/Tunis">Africa/Tunis</option>
      <option value="Africa/Windhoek">Africa/Windhoek</option>
      <option value="Africa/Adak">Africa/Adak</option>
      <option value="Africa/Anchorage">Africa/Anchorage</option>
      <option value="Africa/Araguaina">Africa/Araguaina</option>
      <option value="America/Argentina/Catamarca">
        America/Argentina/Catamarca
      </option>
      <option value="America/Argentina/Cordoba">
        America/Argentina/Cordoba
      </option>
      <option value="America/Argentina/Jujuy">America/Argentina/Jujuy</option>
      <option value="America/Argentina/La_Rioja">
        America/Argentina/La_Rioja
      </option>
      <option value="America/Argentina/Mendoza">
        America/Argentina/Mendoza
      </option>
      <option value="America/Argentina/Rio_Gallegos">
        America/Argentina/Rio_Gallegos
      </option>
      <option value="America/Argentina/Salta">America/Argentina/Salta</option>
      <option value="America/Argentina/San_Juan">
        America/Argentina/San_Juan
      </option>
      <option value="America/Argentina/San_Luis">
        America/Argentina/San_Luis
      </option>
      <option value="America/Asuncion">America/Asuncio</option>
      <option value="America/Atikokan">America/Atikokan</option>
      <option value="America/Bahia">America/Bahia</option>
      <option value="America/Bahia_Banderas">America/Bahia_Banderas</option>
      <option value="America/Barbados">America/Barbados</option>
      <option value="America/Belem">America/Belem</option>
      <option value="America/Belize">America/Belize</option>
      <option value="America/Blanc-Sablon">America/Blanc-Sablon</option>
      <option value="America/Boa_Vista">America/Boa_Vista</option>
      <option value="America/Bogota">America/Bogota</option>
      <option value="America/Boise">America/Boise</option>
      <option value="America/Cambridge_Bay">America/Cambridge_Bay</option>
      <option value="America/Campo_Grande">America/Campo_Grande</option>
      <option value="America/Cancun">America/Cancun</option>
      <option value="America/Caracas">America/Caracas</option>
      <option value="America/Cayenne">America/Cayenne</option>
      <option value="America/Chicago">America/Chicago</option>
      <option value="America/Costa_Rica">America/Costa_Rica</option>
      <option value="America/Creston">America/Creston</option>
      <option value="America/Cuiaba">America/Cuiaba</option>
      <option value="America/Curacao">America/Curacao</option>
      <option value="America/Danmarkshavn">America/Danmarkshavn</option>
      <option value="America/Dawson">America/Dawson</option>
      <option value="America/Dawson_Creek">America/Dawson_Creek</option>
      <option value="America/Denver">America/Denver</option>
      <option value="America/Detroit">America/Detroit</option>
      <option value="America/Edmonton">America/Edmonton</option>
      <option value="America/Eirunepe">America/Eirunepe</option>
      <option value="America/El_Salvador">America/El_Salvador</option>
      <option value="America/Fort_Nelson">America/Fort_Nelson</option>
      <option value="America/Fortaleza">America/Fortaleza</option>
      <option value="America/Glace_Bay">America/Glace_Bay</option>
      <option value="America/Goose_Bay">America/Goose_Bay</option>
      <option value="America/Grand_Turk">America/Grand_Turk</option>
      <option value="America/Guatemala">America/Guatemala</option>
      <option value="America/Guayaquil">America/Guayaquil</option>
      <option value="America/Guyana">America/Guyana</option>
      <option value="America/Halifax">America/Halifax</option>
      <option value="America/Havana">America/Havana</option>
      <option value="America/Hermosillo">America/Hermosillo</option>
      <option value="America/Inuvik">America/Inuvik</option>
      <option value="America/Iqaluit">America/Iqaluit</option>
      <option value="America/Jamaica">America/Jamaica</option>
      <option value="America/Juneau">America/Juneau</option>
      <option value="America/La_Paz">America/La_Paz</option>
      <option value="America/Lima">America/Lima</option>
      <option value="America/Los_Angeles">America/Los_Angeles</option>
      <option value="America/Maceio">America/Maceio</option>
      <option value="America/Managua">America/Managua</option>
      <option value="America/Manaus">America/Manaus</option>
      <option value="America/Martinique">America/Martinique</option>
      <option value="America/Matamoros">America/Matamoros</option>
      <option value="America/Mazatlan">America/Mazatlan</option>
      <option value="America/Menominee">America/Menominee</option>
      <option value="America/Merida">America/Merida</option>
      <option value="America/Metlakatla">America/Metlakatla</option>
      <option value="America/Mexico_City">America/Mexico_City</option>
      <option value="Antarctica/Casey">Antarctica/Casey</option>
      <option value="Antarctica/Davis">Antarctica/Davis</option>
      <option value="Antarctica/DumontDUrville">
        Antarctica/DumontDUrville
      </option>
      <option value="Antarctica/Macquarie">Antarctica/Macquarie</option>
      <option value="Antarctica/Mawson">Antarctica/Mawson</option>
      <option value="Antarctica/Palmer">Antarctica/Palmer</option>
      <option value="Antarctica/Rothera">Antarctica/Rothera</option>
      <option value="Antarctica/Syowa">Antarctica/Syowa</option>
      <option value="Antarctica/Troll">Antarctica/Troll</option>
      <option value="Antarctica/Vostok">Antarctica/Vostok</option>
      <option value="Asia/Almaty">Asia/Almaty</option>
      <option value="Asia/Amman">Asia/Amman</option>
      <option value="Asia/Anadyr">Asia/Anadyr</option>
      <option value="Asia/Aqtau">Asia/Aqtau</option>
      <option value="Asia/Aqtobe">Asia/Aqtobe</option>
      <option value="Asia/Ashgabat">Asia/Ashgabat</option>
      <option value="Asia/Atyrau">Asia/Atyrau</option>
      <option value="Asia/Baghdad">Asia/Baghdad</option>
      <option value="Asia/Baku">Asia/Baku</option>
      <option value="Asia/Bangkok">Asia/Bangkok</option>
      <option value="Asia/Barnaul">Asia/Barnaul</option>
      <option value="Asia/Beirut">Asia/Beirut</option>
      <option value="Asia/Bishkek">Asia/Bishkek</option>
      <option value="Asia/Brunei">Asia/Brunei</option>
      <option value="Asia/Colombo">Asia/Colombo</option>
      <option value="Asia/Dhaka">Asia/Dhaka</option>
      <option value="Asia/Dili">Asia/Dili</option>
      <option value="Asia/Kabul">Asia/Kabul</option>
      <option value="Asia/Kamchatka">Asia/Kamchatka</option>
      <option value="Asia/Karachi">Asia/Karachi</option>
      <option value="Asia/Kathmandu">Asia/Kathmandu</option>
      <option value="Asia/Khandyga">Asia/Khandyga</option>
      <option value="Asia/Kolkata">Asia/Kolkata</option>
      <option value="Asia/Krasnoyarsk">Asia/Krasnoyarsk</option>
      <option value="Asia/Kuala_Lumpur">Asia/Kuala_Lumpur</option>
      <option value="Asia/Kuching">Asia/Kuching</option>
      <option value="Asia/Macau">Asia/Macau</option>
      <option value="Asia/Magadan">Asia/Magadan</option>
      <option value="Asia/Makassar">Asia/Makassar</option>
      <option value="Asia/Manila">Asia/Manila</option>
      <option value="Asia/Omsk">Asia/Omsk</option>
      <option value="Asia/Qatar">Asia/Qatar</option>
      <option value="Asia/Riyadh">Asia/Riyadh</option>
      <option value="Asia/Seoul">Asia/Seoul</option>
      <option value="Asia/Shanghai">Asia/Shanghai</option>
      <option value="Asia/Singapore">Asia/Singapore</option>
      <option value="Asia/Tehran">Asia/Tehran</option>
      <option value="Asia/Tokyo">Asia/Tokyo</option>
      <option value="Asia/Tomsk">Asia/Tomsk</option>
      <option value="Asia/Ulaanbaatar">Asia/Ulaanbaatar</option>
      <option value="Asia/Urumqi">Asia/Urumqi</option>
      <option value="Asia/Vladivostok">Asia/Vladivostok</option>
      <option value="Asia/Yangon">Asia/Yangon</option>
      <option value="Asia/Yekaterinburg">Asia/Yekaterinburg</option>
      <option value="Asia/Yerevan">Asia/Yerevan</option>
      <option value="Atlantic/Azores">Atlantic/Azores</option>
      <option value="Atlantic/Bermuda">Atlantic/Bermuda</option>
      <option value="Atlantic/Canary">Atlantic/Canary</option>
      <option value="Atlantic/Cape_Verde">Atlantic/Cape_Verde</option>
      <option value="Atlantic/Faroe">Atlantic/Faroe</option>
      <option value="Atlantic/Madeira">Atlantic/Madeira</option>
      <option value="Atlantic/South_Georgia">Atlantic/South_Georgia</option>
      <option value="Atlantic/Stanley">Atlantic/Stanley</option>
      <option value="Australia/Adelaide">Australia/Adelaide</option>
      <option value="Australia/Brisbane">Australia/Brisbane</option>
      <option value="Australia/Broken_Hill">Australia/Broken_Hill</option>
      <option value="Australia/Darwin">Australia/Darwin</option>
      <option value="Australia/Eucla">Australia/Eucla</option>
      <option value="Australia/Hobart">Australia/Hobart</option>
      <option value="Australia/Lindeman">Australia/Lindeman</option>
      <option value="Australia/Lord_Howe">Australia/Lord_Howe</option>
      <option value="Australia/Melbourne">Australia/Melbourne</option>
      <option value="Australia/Perth">Australia/Perth</option>
      <option value="Australia/Sydney">Australia/Sydney</option>
      <option value="Europe/Amsterdam">Europe/Amsterdam</option>
      <option value="Europe/Andorra">Europe/Andorra</option>
      <option value="Europe/Astrakhan">Europe/Astrakhan</option>
      <option value="Europe/Athens">Europe/Athens</option>
      <option value="Europe/Belgrade">Europe/Belgrade</option>
      <option value="Europe/Berlin">Europe/Berlin</option>
      <option value="Europe/Brussels">Europe/Brussels</option>
      <option value="Europe/Bucharest">Europe/Bucharest</option>
      <option value="Europe/Budapest">Europe/Budapest</option>
      <option value="Europe/Chisinau">Europe/Chisinau</option>
      <option value="Europe/Dublin">Europe/Dublin</option>
      <option value="Europe/Helsinki">Europe/Helsinki</option>
      <option value="Europe/Istanbul">Europe/Istanbul</option>
      <option value="Europe/Kaliningrad">Europe/Kaliningrad</option>
      <option value="Europe/Lisbon">Europe/Lisbon</option>
      <option value="Europe/London">Europe/London</option>
      <option value="Europe/Luxembourg">Europe/Luxembourg</option>
      <option value="Europe/Madrid">Europe/Madrid</option>
      <option value="Europe/Malta">Europe/Malta</option>
      <option value="Europe/Moscow">Europe/Moscow</option>
      <option value="Europe/Paris">Europe/Paris</option>
      <option value="Europe/Prague">Europe/Prague</option>
      <option value="Europe/Rome">Europe/Rome</option>
      <option value="Europe/Samara">Europe/Samara</option>
      <option value="Europe/Saratov">Europe/Saratov</option>
      <option value="Europe/Sofia">Europe/Sofia</option>
      <option value="Europe/Stockholm">Europe/Stockholm</option>
      <option value="Europe/Tallinn">Europe/Tallinn</option>
      <option value="Europe/Tirane">Europe/Tirane</option>
      <option value="Europe/Ulyanovsk">Europe/Ulyanovsk</option>
      <option value="Europe/Vienna">Europe/Vienna</option>
      <option value="Europe/Vilnius">Europe/Vilnius</option>
      <option value="Europe/Volgograd">Europe/Volgograd</option>
      <option value="Europe/Warsaw">Europe/Warsaw</option>
      <option value="Europe/Zurich">Europe/Zurich</option>
      <option value="Indian/Chagos">Indian/Chagos</option>
      <option value="Indian/Christmas">Indian/Christmas</option>
      <option value="Indian/Cocos">Indian/Cocos</option>
      <option value="Indian/Kerguelen">Indian/Kerguelen</option>
      <option value="Indian/Mahe">Indian/Mahe</option>
      <option value="Indian/Maldives">Indian/Maldives</option>
      <option value="Indian/Mauritius">Indian/Mauritius</option>
      <option value="Pacific/Apia">Pacific/Apia</option>
      <option value="Pacific/Auckland">Pacific/Auckland</option>
      <option value="Pacific/Bougainville">Pacific/Bougainville</option>
      <option value="Pacific/Chatham">Pacific/Chatham</option>
      <option value="Pacific/Chuuk">Pacific/Chuuk</option>
      <option value="Pacific/Easter">Pacific/Easter</option>
      <option value="Pacific/Enderbury">Pacific/Enderbury</option>
      <option value="Pacific/Fakaofo">Pacific/Fakaofo</option>
      <option value="Pacific/Funafuti">Pacific/Funafuti</option>
      <option value="Pacific/Galapagos">Pacific/Galapagos</option>
      <option value="Pacific/Honolulu">Pacific/Honolulu</option>
      <option value="Pacific/Kiritimati">Pacific/Kiritimati</option>
      <option value="Pacific/Kosrae">Pacific/Kosrae</option>
      <option value="Pacific/Majuro">Pacific/Majuro</option>
      <option value="Pacific/Marquesas">Pacific/Marquesas</option>
      <option value="Pacific/Nauru">Pacific/Nauru</option>
      <option value="Pacific/Norfolk">Pacific/Norfolk</option>
      <option value="Pacific/Pago_Pago">Pacific/Pago_Pago</option>
      <option value="Pacific/Palau">Pacific/Palau</option>
      <option value="Pacific/Pitcairn">Pacific/Pitcairn</option>
      <option value="Pacific/Pohnpei">Pacific/Pohnpei</option>
      <option value="Pacific/Port_Moresby">Pacific/Port_Moresby</option>
      <option value="Pacific/Rarotonga">Pacific/Rarotonga</option>
      <option value="Pacific/Tahiti">Pacific/Tahiti</option>
      <option value="Pacific/Tongatapu">Pacific/Tongatapu</option>
      <option value="Pacific/Wake">Pacific/Wake</option>
    </select>
  );
};

export default Timezone;
