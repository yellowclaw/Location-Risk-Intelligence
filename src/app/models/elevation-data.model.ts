export interface ElevationDataModel {
  results: ElevationDataResult[];
  paramName: string;
  dataType: string;
}

interface ElevationDataResult {
  value: ElevationDataResultValue;
}

interface ElevationDataResultValue {
  displayFieldName: string;
  geometryType: string;
  spatialReference: {
    wkid: string;
    latestWkid: string;
  },
  "fields": [string[]],
  features: ElevationDataResultFeatures[]
}

interface ElevationDataResultFeatures {
  attributes: {
    OBJECTID: number,
    DEMResolution: string;
    ProfileLength: string;
    Shape_Length: string;
  }
  geometry: {
    paths: number[][][]
  }
}
