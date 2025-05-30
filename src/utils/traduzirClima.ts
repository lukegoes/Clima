const weatherTranslations: Record<string, string> = {
  "thunderstorm with light rain": "trovoada com chuva leve",
  "thunderstorm with rain": "trovoada com chuva",
  "thunderstorm with heavy rain": "trovoada com chuva forte",
  "light thunderstorm": "trovoada fraca",
  "thunderstorm": "trovoada",
  "heavy thunderstorm": "trovoada forte",
  "ragged thunderstorm": "trovoada irregular",
  "thunderstorm with light drizzle": "trovoada com garoa leve",
  "thunderstorm with drizzle": "trovoada com garoa",
  "thunderstorm with heavy drizzle": "trovoada com garoa forte",

  "light intensity drizzle": "garoa leve",
  "drizzle": "garoa",
  "heavy intensity drizzle": "garoa forte",
  "light intensity drizzle rain": "chuva com garoa leve",
  "drizzle rain": "chuva com garoa",
  "heavy intensity drizzle rain": "chuva com garoa forte",
  "shower rain and drizzle": "pancadas de chuva com garoa",
  "heavy shower rain and drizzle": "pancadas fortes de chuva com garoa",
  "shower drizzle": "pancadas de garoa",

  "light rain": "chuva leve",
  "moderate rain": "chuva moderada",
  "heavy intensity rain": "chuva forte",
  "very heavy rain": "chuva muito forte",
  "extreme rain": "chuva extrema",
  "freezing rain": "chuva congelante",
  "light intensity shower rain": "chuvisco leve",
  "shower rain": "pancadas de chuva",
  "heavy intensity shower rain": "pancadas de chuva fortes",
  "ragged shower rain": "pancadas de chuva irregulares",

  "light snow": "neve leve",
  "snow": "neve",
  "heavy snow": "neve intensa",
  "sleet": "granizo misturado com chuva",
  "light shower sleet": "chuvisco com granizo leve",
  "shower sleet": "chuvisco com granizo",
  "light rain and snow": "chuva fraca com neve",
  "rain and snow": "chuva com neve",
  "light shower snow": "pancadas leves de neve",
  "shower snow": "pancadas de neve",
  "heavy shower snow": "pancadas intensas de neve",

  "mist": "névoa",
  "smoke": "fumaça",
  "haze": "névoa seca",
  "sand/dust whirls": "redemoinhos de areia/poeira",
  "fog": "neblina",
  "sand": "areia",
  "dust": "poeira",
  "volcanic ash": "cinzas vulcânicas",
  "squalls": "rajadas de vento",
  "tornado": "tornado",

  "clear sky": "céu limpo",
  "few clouds": "poucas nuvens",
  "scattered clouds": "nuvens dispersas",
  "broken clouds": "nuvens fragmentadas",
  "overcast clouds": "céu encoberto"
};

export function traduzirClima(desc: string): string {
  if (!desc) return "";
  return weatherTranslations[desc?.toLowerCase()] || desc;
}
