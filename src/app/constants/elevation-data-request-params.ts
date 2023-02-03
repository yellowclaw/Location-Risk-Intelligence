export const ElevationDataRequestParams = {
  InputLineFeatures: JSON.stringify({
    fields: [
      {
        name: 'OID',
        type: 'esriFieldTypeObjectID',
        alias: 'OID'
      }
    ],
    geometryType: 'esriGeometryPolyline',
    features: [
      {
        geometry: {
          paths:
            [
              [
                [10.464200935945678, 45.51541916225363],
                [11.021070442780866, 45.881334972376145]
              ]
            ],
          spatialReference: { wkid: 4326 }
        },
        attributes: { OID: 1 }
      }
    ],
    sr: { wkid: 4326 }
  }),
  ProfileIDField: 'OID',
  DEMResolution: '90m',
  MaximumSampleDistance: 425.5644849862203,
  MaximumSampleDistanceUnits: 'Meters',
  returnZ: true,
  returnM: true,
  f: 'json'
};
