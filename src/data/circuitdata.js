const circuitlist = [
  {
    id: 1,
    name: "Silverstone Circuit",
    years: [1950, 1951, 1952, 1953, 1954, 1956, 1958, 1960, 1963, 1965, 1967, 1969, 1971, 1973, 1975, 1977, 1979, 1981, 1983, 1985, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    place: "Silverstone",
    country: "Great Britain",
    flag: "GBR"
  },
  {
    id: 2,
    name: "Circuit de Monaco",
    years: [1950, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    place: "Monte Carlo",
    country: "Monaco",
    flag: "MCO"
  },
  {
    id: 3,
    name: "Indianapolis Motor Speedway",
    years: [1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007],
    place: "Indianapolis",
    country: "USA",
    flag: "USA"
  },
  {
    id: 4,
    name: "Circuit Bremgarten",
    years: [1950, 1951, 1952, 1953, 1954],
    place: "Bremgarten",
    country: "Switzerland",
    flag: "CHE"
  },
  {
    id: 5,
    name: "Circuit de Spa-Francorchamps",
    years: [1950, 1951, 1952, 1953, 1954, 1955, 1956, 1958, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1970, 1983, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2004, 2005, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    place: "Spa",
    country: "Belgium",
    flag: "BEL"
  },
  {
    id: 6,
    name: "Reims-Gueux",
    years: [1950, 1951, 1953, 1954, 1956, 1958, 1959, 1960, 1961, 1963, 1966],
    place: "Reims",
    country: "France",
    flag: "FRA"
  },
  {
    id: 7,
    name: "Autodromo Nazionale Monza",
    years: [1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    place: "Monza",
    country: "Italy",
    flag: "ITA"
  },
  {
    id: 8,
    name: "Nürburgring",
    years: [1951, 1952, 1953, 1954, 1956, 1957, 1958, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1971, 1972, 1973, 1974, 1975, 1976, 1984, 1985, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2009, 2011, 2013],
    place: "Nürburg",
    country: "Germany",
    flag: "DEU"
  },
  {
    id: 9,
    name: "Pedralbes Circuit",
    years: [1951, 1954],
    place: "Barcelona",
    country: "Spain",
    flag: "ESP"
  },
  {
    id: 10,
    name: "Rouen-Les-Essarts",
    years: [1952, 1957, 1962, 1964, 1968],
    place: "Rouen",
    country: "France",
    flag: "FRA"
  },
  {
    id: 11,
    name: "Circuit Park Zandvoort",
    years: [1952, 1953, 1955, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985],
    place: "Zandvoort",
    country: "Netherlands",
    flag: "NLD"
  },
  {
    id: 12,
    name: "Autódromo Juan y Oscar Gálvez",
    years: [1953, 1954, 1955, 1956, 1957, 1958, 1960, 1972, 1973, 1974, 1975, 1977, 1978, 1979, 1980, 1981, 1995, 1996, 1997, 1998],
    place: "Buenos Aires",
    country: "Argentina",
    flag: "ARG"
  },
  {
    id: 14,
    name: "Aintree",
    years: [1955, 1957, 1959, 1961, 1962],
    place: "Liverpool",
    country: "Great Britain",
    flag: "GBR"
  },
  {
    id: 15,
    name: "Pescara Circuit",
    years: [1957],
    place: "Pescara",
    country: "Italy",
    flag: "ITA"
  },
  {
    id: 16,
    name: "Circuito da Boavista",
    years: [1958, 1960],
    place: "Porto",
    country: "Portugal",
    flag: "PRT"
  },
  {
    id: 17,
    name: "Ain-Diab Circuit",
    years: [1958],
    place: "Casablanca",
    country: "Morocco",
    flag: "MAR"
  },
  {
    id: 18,
    name: "AVUS",
    years: [1959],
    place: "Berlin",
    country: "Germany",
    flag: "DEU"
  },
  {
    id: 19,
    name: "Circuito de Monsanto",
    years: [1959],
    place: "Lisbon",
    country: "Portugal",
    flag: "PRT"
  },
  {
    id: 20,
    name: "Sebring International Raceway",
    years: [1959],
    place: "Sebring",
    country: "USA",
    flag: "USA"
  },
  {
    id: 21,
    name: "Riverside International Raceway",
    years: [1960],
    place: "Riverside",
    country: "USA",
    flag: "USA"
  },
  {
    id: 22,
    name: "Watkins Glen",
    years: [1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980],
    place: "Watkins Glen",
    country: "USA",
    flag: "USA"
  },
  {
    id: 23,
    name: "Prince George Circuit",
    years: [1962, 1963, 1965],
    place: "East London",
    country: "South Africa",
    flag: "ZAF"
  },
  {
    id: 24,
    name: "Autódromo Hermanos Rodríguez",
    years: [1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 2015, 2016],
    place: "Mexico City",
    country: "Mexico",
    flag: "MEX"
  },
  {
    id: 25,
    name: "Brands Hatch",
    years: [1964, 1966, 1968, 1970, 1972, 1974, 1976, 1978, 1980, 1982, 1983, 1984, 1985, 1986],
    place: "Kent",
    country: "Great Britain",
    flag: "GBR"
  },
  {
    id: 26,
    name: "Zeltweg Airfield",
    years: [1964],
    place: "Zeltweg",
    country: "Austria",
    flag: "AUT"
  },
  {
    id: 27,
    name: "Charade Circuit",
    years: [1965, 1969, 1970, 1972],
    place: "Clermont-Ferrand",
    country: "France",
    flag: "FRA"
  },
  {
    id: 28,
    name: "Mosport International Raceway",
    years: [1967, 1969, 1971, 1972, 1973, 1974, 1976, 1977],
    place: "Bowmanville",
    country: "Canada",
    flag: "CAN"
  },
  {
    id: 29,
    name: "Le Mans Bugatti",
    years: [1967],
    place: "Le Mans",
    country: "France",
    flag: "FRA"
  },
  {
    id: 30,
    name: "Kyalami",
    years: [1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1982, 1983, 1984, 1985, 1992, 1993],
    place: "Midrand",
    country: "South Africa",
    flag: "ZAF"
  },
  {
    id: 31,
    name: "Circuito del Jarama",
    years: [1968, 1970, 1972, 1974, 1976, 1977, 1978, 1979, 1981],
    place: "Jarama",
    country: "Spain",
    flag: "ESP"
  },
  {
    id: 32,
    name: "Circuit Mont-Tremblant",
    years: [1968, 1970],
    place: "Mont-Tremblant",
    country: "Canada",
    flag: "CAN"
  },
  {
    id: 33,
    name: "Montjuïc circuit",
    years: [1969, 1971, 1973, 1975],
    place: "Barcelona",
    country: "Spain",
    flag: "ESP"
  },
  {
    id: 34,
    name: "Hockenheimring",
    years: [1970, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2008, 2010, 2012, 2014, 2016],
    place: "Hockenheim",
    country: "Germany",
    flag: "DEU"
  },
  {
    id: 35,
    name: "Red Bull Ring",
    years: [1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2014, 2015, 2016],
    place: "Zeltweg",
    country: "Austria",
    flag: "AUT"
  },
  {
    id: 36,
    name: "Circuit Paul Ricard",
    years: [1971, 1973, 1975, 1976, 1978, 1980, 1982, 1983, 1985, 1986, 1987, 1988, 1989, 1990],
    place: "Castellet",
    country: "France",
    flag: "FRA"
  },
  {
    id: 37,
    name: "Nivelles-Baulers",
    years: [1972, 1974],
    place: "Nivelles",
    country: "Belgium",
    flag: "BEL"
  },
  {
    id: 38,
    name: "Autódromo José Carlos Pace",
    years: [1973, 1974, 1975, 1976, 1977, 1979, 1980, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    place: "Interlagos, São Paulo",
    country: "Brazil",
    flag: "BRA"
  },
  {
    id: 39,
    name: "Circuit Zolder",
    years: [1973, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1984],
    place: "Heusden-Zolder",
    country: "Belgium",
    flag: "BEL"
  },
  {
    id: 40,
    name: "Scandinavian Raceway",
    years: [1973, 1974, 1975, 1976, 1977, 1978],
    place: "Anderstorp",
    country: "Sweden",
    flag: "SWE"
  },
  {
    id: 41,
    name: "Dijon-Prenois",
    years: [1974, 1977, 1979, 1981, 1982, 1984],
    place: "Dijon",
    country: "France",
    flag: "FRA"
  },
  {
    id: 42,
    name: "Long Beach",
    years: [1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983],
    place: "Long Beach",
    country: "USA",
    flag: "USA"
  },
  {
    id: 43,
    name: "Fuji Speedway",
    years: [1976, 1977, 2007, 2008],
    place: "Shizuoka",
    country: "Japan",
    flag: "JPN"
  },
  {
    id: 44,
    name: "Autódromo Internacional Nelson Piquet",
    years: [1978, 1981, 1982, 1983, 1984, 1985, 1986, 1967, 1988, 1989],
    place: "Jacarepaguá, Rio de Janeiro",
    country: "Brazil",
    flag: "BRA"
  },
  {
    id: 45,
    name: "Circuit Gilles Villeneuve",
    years: [1978, 1979, 1980, 1981, 1982, 1993, 1984, 1985, 1986, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    place: "Montreal",
    country: "Canada",
    flag: "CAN"
  },
  {
    id: 46,
    name: "Autodromo Enzo e Dino Ferrari",
    years: [1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006],
    place: "Imola",
    country: "Italy",
    flag: "ITA"
  },
  {
    id: 47,
    name: "Caesars Palace",
    years: [1981, 1982],
    place: "Las Vegas",
    country: "USA",
    flag: "USA"
  },
  {
    id: 48,
    name: "Detroit street circuit",
    years: [1982, 1983, 1984, 1985, 1986, 1987, 1988],
    place: "Detroit",
    country: "USA",
    flag: "USA"
  },
  {
    id: 49,
    name: "Fair Park",
    years: [1984],
    place: "Dallas",
    country: "USA",
    flag: "USA"
  },
  {
    id: 50,
    name: "Autódromo do Estoril",
    years: [1984, 1996],
    place: "Estoril",
    country: "Portugal",
    flag: "PRT"
  },
  {
    id: 51,
    name: "Adelaide Street Circuit",
    years: [1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995],
    place: "Adelaide",
    country: "Australia",
    flag: "AUS"
  },
  {
    id: 52,
    name: "Hungaroring",
    years: [1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    place: "Budapest",
    country: "Hungary",
    flag: "HUN"
  },
  {
    id: 53,
    name: "Suzuka Circuit",
    years: [1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    place: "Suzuka",
    country: "Japan",
    flag: "JPN"
  },
  {
    id: 54,
    name: "Circuito de Jerez",
    years: [1986, 1987, 1988, 1989, 1990, 1994, 1997],
    place: "Jerez de la Frontera",
    country: "Spain",
    flag: "ESP"
  },
  {
    id: 55,
    name: "Phoenix Street Circuit",
    years: [1989, 1990, 1991],
    place: "Phoenix",
    country: "USA",
    flag: "USA"
  },
  {
    id: 56,
    name: "Circuit de Nevers Magny-Cours",
    years: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008],
    place: "Nevers",
    country: "France",
    flag: "FRA"
  },
  {
    id: 57,
    name: "Circuit de Barcelona-Catalunya",
    years: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    place: "Montmeló",
    country: "Spain",
    flag: "ESP"
  },
  {
    id: 58,
    name: "Donington Park",
    years: [1993],
    place: "Leicestershire",
    country: "Great Britain",
    flag: "GBR"
  },
  {
    id: 59,
    name: "Tanaka International Circuit",
    years: [1994, 1995],
    place: "Aida",
    country: "Japan",
    flag: "JPN"
  },
  {
    id: 60,
    name: "Albert Park",
    years: [1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    place: "Melbourne",
    country: "Australia",
    flag: "AUS"
  },
  {
    id: 61,
    name: "Sepang International Circuit",
    years: [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    place: "Kuala Lumpur",
    country: "Malaysia",
    flag: "MYS"
  },
  {
    id: 62,
    name: "Bahrain International Circuit",
    years: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2012, 2013, 2014, 2015, 2016],
    place: "Sakhir",
    country: "Bahrain",
    flag: "BHR"
  },
  {
    id: 63,
    name: "Shanghai International Circuit",
    years: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    place: "Shanghai",
    country: "China",
    flag: "CHN"
  },
  {
    id: 64,
    name: "Istanbul Park",
    years: [2005, 2006, 2007, 2008, 2009, 2010, 2011],
    place: "Istanbul",
    country: "Turkey",
    flag: "TUR"
  },
  {
    id: 65,
    name: "Valencia Street Circuit",
    years: [2008, 2009, 2010, 2011, 2012],
    place: "Valencia",
    country: "Spain",
    flag: "ESP"
  },
  {
    id: 66,
    name: "Marina Bay Street Circuit",
    years: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    place: "Marina Bay",
    country: "Singapore",
    flag: "SGP"
  },
  {
    id: 67,
    name: "Yas Marina Circuit",
    years: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    place: "Abu Dhabi",
    country: "United Arab Emirates",
    flag: "ARE"
  },
  {
    id: 68,
    name: "Korea International Circuit",
    years: [2010, 2011, 2012, 2013],
    place: "Yeongam",
    country: "Korea",
    flag: "KOR"
  },
  {
    id: 69,
    name: "Buddh International Circuit",
    years: [2011, 2012, 2013],
    place: "Greater Noida",
    country: "India",
    flag: "IND"
  },
  {
    id: 70,
    name: "Circuit of the Americas",
    years: [2012, 2013, 2014, 2015, 2016],
    place: "Austin",
    country: "USA",
    flag: "USA"
  },
  {
    id: 71,
    name: "Sochi Autodrom",
    years: [2014, 2015, 2016],
    place: "Sochi",
    country: "Russia",
    flag: "RUS"
  },
  {
    id: 72,
    name: "Baku City Circuit",
    years: [2016],
    place: "Baku",
    country: "Azerbaijan",
    flag: "AZE"
  },
];

export default circuitlist;
