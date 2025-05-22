import CurrentWeather from "@/components/CurrentWeather";
import WeatherSkeleton from "@/components/loading-skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useGeolocation } from "@/hooks/use-geolocation";
import { useForecastQuery, useReverseGeocodeQuery, useWeatherQuery } from "@/hooks/use-weather";
import { AlertTriangle, MapPin, RefreshCw } from "lucide-react";


const WeatherDashboard = () => {
  const {
    coordinates,
    error: locationError,
    isLoading: locationLoading,
    getLocation,
  } = useGeolocation();
  
  const weatherQuery = useWeatherQuery(coordinates);
  const forecastQuery = useForecastQuery(coordinates);
  const locationQuery = useReverseGeocodeQuery(coordinates);

  const handleRefresh = () => {
    getLocation();
    if (coordinates) {
      weatherQuery.refetch();
      forecastQuery.refetch();
      locationQuery.refetch();
    }
  };

  if (locationLoading) {
    return <WeatherSkeleton />;
  }

  if (locationError) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Erro na localização</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>{locationError}</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            Habilitar localização
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  if (!coordinates) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Localização desabilitada</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Por favor habilite sua localização, para obter o clima atual</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            Habilitar localização
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  const locationName = locationQuery.data?.[0];

  if (weatherQuery.error || forecastQuery.error) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Erro</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Falha ao obter os dados sobre o clima, por favor tente novamente</p>
          <Button onClick={handleRefresh} variant={"outline"} className="w-fit">
            <RefreshCw className="mr-2 h-4 w-4" />
            Tentar novamente
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  if(!weatherQuery.data || !forecastQuery.data) {
    return <WeatherSkeleton />;
  }

  return (
    <div className="space-y-4">
      {/*Cidades Favoritas*/}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">Minha localização</h1>
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={handleRefresh}
          disabled={weatherQuery.isFetching || forecastQuery.isFetching}
         className="cursor-pointer">
          <RefreshCw className={`h-4 w-4 ${weatherQuery.isFetching?"animate-spin":""}`} />
        </Button>
      </div>

      
      <div className="grid gap-6">
        <div>
          <CurrentWeather data={weatherQuery.data} locationName={locationName} />
          </div>
        <div>
          {/*details weather*/}
          </div>
      </div>
    </div>
  );
};
export default WeatherDashboard;
