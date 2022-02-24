import { useState } from 'react';
import MapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib'

function Map({ searchResults }) {

  const cooordinates = searchResults.map(r => { return { latitude: r.lat, longitude: r.long } });

  const center = getCenter(cooordinates);

  const [viewport, setViewport] = useState(
    {
      latitude: center.latitude,
      longitude: center.longitude,
      zoom: 11
    }
  );

  return (
    <MapGL
      {...viewport}
      mapStyle={`mapbox://styles/david139/ckzzwjfns001r14pmxgfemytk`}
      mapboxAccessToken='pk.eyJ1IjoiZGF2aWQxMzkiLCJhIjoiY2t6endjcWVlMDR3YjNrbWU3c2oxc3hkNSJ9.3t878q9Hpxp5b4zHqsgObQ'
      onMove={(evt) => setViewport(evt.viewState)}
    >

      {/* {searchResults.map(result => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            anchor='bottom'
          >
            <p>📌</p>
          </Marker>
        </div>

      ))} */}

    </MapGL>

  )
}

export default Map