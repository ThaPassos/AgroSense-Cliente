// import { useState, useEffect } from 'react';

// interface GeolocationData {
//   latitude: number | null;
//   longitude: number | null;
//   error: string | null;
//   loading: boolean;
// }

// export const useGeolocation = () => {
//   const [location, setLocation] = useState<GeolocationData>({
//     latitude: null,
//     longitude: null,
//     error: null,
//     loading: true,
//   });

//   useEffect(() => {
//     if (!navigator.geolocation) {
//       setLocation(prev => ({
//         ...prev,
//         error: 'Geolocalização não é suportada pelo seu navegador',
//         loading: false,
//       }));
//       return;
//     }

//     const handleSuccess = (position: GeolocationPosition) => {
//       setLocation({
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude,
//         error: null,
//         loading: false,
//       });
//     };

//     const handleError = (error: GeolocationPositionError) => {
//       let errorMessage = 'Erro ao obter localização';
      
//       switch (error.code) {
//         case error.PERMISSION_DENIED:
//           errorMessage = 'Permissão de localização negada';
//           break;
//         case error.POSITION_UNAVAILABLE:
//           errorMessage = 'Localização indisponível';
//           break;
//         case error.TIMEOUT:
//           errorMessage = 'Tempo limite para obter localização';
//           break;
//       }

//       setLocation(prev => ({
//         ...prev,
//         error: errorMessage,
//         loading: false,
//       }));
//     };

//     navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
//       enableHighAccuracy: true,
//       timeout: 5000,
//       maximumAge: 0,
//     });
//   }, []);

//   return location;
// };