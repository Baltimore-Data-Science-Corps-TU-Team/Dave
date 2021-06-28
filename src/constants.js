import CustomImg from './map-config-jpg/Default.jpeg';
import clusterImg from './map-config-jpg/Cluster.jpg';
import PointsImg from './map-config-jpg/Points.jpg';
import PointsByRegionImg from './map-config-jpg/Points-by-Region.jpg';
import PointsByDescriptionImg from './map-config-jpg/Points-by-Description.jpg';
import PointsByWeaponImg from './map-config-jpg/Points-by-Weapon.jpg';
import HeatmapImg from './map-config-jpg/Heatmap.jpeg';

//dataID must match datasetId for the configuration to take effect
const boundariesDataId = "6kbq7nrmc"
const crimeDataId = "ciaeceh0r"
const timeRangeValue = [
  1609459200000,
  1622932380000
]

const CARDPROPS = [
  {
    img: clusterImg,
    title: 'Cluster',
    tooltip: 'author',
    value: 'cluster'
  },
  {
    img: HeatmapImg,
    title: 'Heatmap ',
    tooltip: 'author',
    value: 'heatmap'
  },
  {
    img: PointsImg,
    title: 'Points Only',
    tooltip: 'author',
    value: 'points'
  },
  {
    img: PointsByRegionImg,
    title: 'Points by Region',
    tooltip: 'author',
    value: 'region'
  },
  {
    img: PointsByWeaponImg,
    title: 'Points by Weapon',
    tooltip: 'author',
    value: 'weapon'
  },
  {
    img: CustomImg,
    title: 'Custom',
    tooltip: 'author',
    value: 'custom'
  },
];

const CRIME_OPTIONS = [
  'Homicide',
  'Arson',
  'Auto Theft',
  'Robbery',
  'Shoplifting'
];

const CONFIGURATION = {
  cluster: {
    "version": "v1",
    "config": {
      "visState": {
        "filters": [
          {
            "dataId": [
              crimeDataId
            ],
            "id": "94cen4zfp",
            "name": [
              "CrimeDateTime"
            ],
            "type": "timeRange",
            "value": timeRangeValue,
            "enlarged": true,
            "plotType": "histogram",
            "animationWindow": "free",
            "yAxis": null,
            "speed": 1
          }
        ],
        "layers": [
          {
            "id": "fx2ptif",
            "type": "cluster",
            "config": {
              "dataId": crimeDataId,
              "label": "Crime Location",
              "color": [
                130,
                154,
                227
              ],
              "columns": {
                "lat": "Latitude",
                "lng": "Longitude"
              },
              "isVisible": true,
              "visConfig": {
                "opacity": 0.8,
                "clusterRadius": 36.6,
                "colorRange": {
                  "name": "ColorBrewer OrRd-6",
                  "type": "sequential",
                  "category": "ColorBrewer",
                  "colors": [
                    "#fef0d9",
                    "#fdd49e",
                    "#fdbb84",
                    "#fc8d59",
                    "#e34a33",
                    "#b30000"
                  ]
                },
                "radiusRange": [
                  0,
                  50
                ],
                "colorAggregation": "count"
              },
              "hidden": false,
              "textLabel": [
                {
                  "field": null,
                  "color": [
                    255,
                    255,
                    255
                  ],
                  "size": 18,
                  "offset": [
                    0,
                    0
                  ],
                  "anchor": "start",
                  "alignment": "center"
                }
              ]
            },
            "visualChannels": {
              "colorField": null,
              "colorScale": "quantile"
            }
          },
          {
            "id": "c67zous",
            "type": "geojson",
            "config": {
              "dataId": boundariesDataId,
              "label": "Boundaries",
              "color": [
                255,
                203,
                153
              ],
              "columns": {
                "geojson": "_geojson"
              },
              "isVisible": true,
              "visConfig": {
                "opacity": 0.03,
                "strokeOpacity": 0.8,
                "thickness": 0.5,
                "strokeColor": [
                  53,
                  166,
                  204
                ],
                "colorRange": {
                  "name": "Uber Viz Qualitative 4",
                  "type": "qualitative",
                  "category": "Uber",
                  "colors": [
                    "#12939A",
                    "#DDB27C",
                    "#88572C",
                    "#FF991F",
                    "#F15C17",
                    "#223F9A",
                    "#DA70BF",
                    "#125C77",
                    "#4DC19C",
                    "#776E57",
                    "#17B8BE",
                    "#F6D18A",
                    "#B7885E",
                    "#FFCB99",
                    "#F89570",
                    "#829AE3",
                    "#E79FD5",
                    "#1E96BE",
                    "#89DAC1",
                    "#B3AD9E"
                  ]
                },
                "strokeColorRange": {
                  "name": "Global Warming",
                  "type": "sequential",
                  "category": "Uber",
                  "colors": [
                    "#5A1846",
                    "#900C3F",
                    "#C70039",
                    "#E3611C",
                    "#F1920E",
                    "#FFC300"
                  ]
                },
                "radius": 10,
                "sizeRange": [
                  0,
                  10
                ],
                "radiusRange": [
                  0,
                  50
                ],
                "heightRange": [
                  0,
                  500
                ],
                "elevationScale": 5,
                "enableElevationZoomFactor": true,
                "stroked": true,
                "filled": true,
                "enable3d": false,
                "wireframe": false
              },
              "hidden": false,
              "textLabel": [
                {
                  "field": null,
                  "color": [
                    255,
                    255,
                    255
                  ],
                  "size": 18,
                  "offset": [
                    0,
                    0
                  ],
                  "anchor": "start",
                  "alignment": "center"
                }
              ]
            },
            "visualChannels": {
              "colorField": {
                "name": "CSA2010",
                "type": "string"
              },
              "colorScale": "ordinal",
              "strokeColorField": null,
              "strokeColorScale": "quantile",
              "sizeField": null,
              "sizeScale": "linear",
              "heightField": null,
              "heightScale": "linear",
              "radiusField": null,
              "radiusScale": "linear"
            }
          }
        ],
        "interactionConfig": {
          "tooltip": {
            "fieldsToShow": {
              "6kbq7nrmc": [
                {
                  "name": "CSA2010",
                  "format": null
                }
              ],
              "ciaeceh0r": [
                {
                  "name": "CrimeDateTime",
                  "format": null
                },
                {
                  "name": "CrimeCode",
                  "format": null
                },
                {
                  "name": "Location",
                  "format": null
                },
                {
                  "name": "Description",
                  "format": null
                }
              ]
            },
            "compareMode": false,
            "compareType": "absolute",
            "enabled": true
          },
          "brush": {
            "size": 0.5,
            "enabled": false
          },
          "geocoder": {
            "enabled": true
          },
          "coordinate": {
            "enabled": false
          }
        },
        "layerBlending": "normal",
        "splitMaps": [],
        "animationConfig": {
          "currentTime": null,
          "speed": 1
        }
      },
      "mapState": {
        "bearing": 0,
        "dragRotate": false,
        "latitude": 39.2846245637697,
        "longitude": -76.6198537712843,
        "pitch": 0,
        "zoom": 11,
        "isSplit": false
      },
      "mapStyle": {
        "styleType": "dark",
        "topLayerGroups": {},
        "visibleLayerGroups": {
          "label": true,
          "road": true,
          "border": false,
          "building": true,
          "water": true,
          "land": true,
          "3d building": false
        },
        "threeDBuildingColor": [
          9.665468314072013,
          17.18305478057247,
          31.1442867897876
        ],
        "mapStyles": {}
      }
    }
  },
  points: {
    "version": "v1",
    "config": {
      "visState": {
        "filters": [
          {
            "dataId": [
              crimeDataId
            ],
            "id": "d4inpyjo",
            "name": [
              "CrimeDateTime"
            ],
            "type": "timeRange",
            "value": timeRangeValue,
            "enlarged": true,
            "plotType": "histogram",
            "animationWindow": "free",
            "yAxis": null,
            "speed": 0.5
          }
        ],
        "layers": [
          {
            "id": "u51y5dn",
            "type": "point",
            "config": {
              "dataId": crimeDataId,
              "label": "Crime Location",
              "color": [
                248,
                149,
                112
              ],
              "columns": {
                "lat": "Latitude",
                "lng": "Longitude",
                "altitude": null
              },
              "isVisible": true,
              "visConfig": {
                "radius": 3.5,
                "fixedRadius": false,
                "opacity": 0.8,
                "outline": false,
                "thickness": 0.5,
                "strokeColor": null,
                "colorRange": {
                  "name": "Global Warming",
                  "type": "sequential",
                  "category": "Uber",
                  "colors": [
                    "#5A1846",
                    "#900C3F",
                    "#C70039",
                    "#E3611C",
                    "#F1920E",
                    "#FFC300"
                  ]
                },
                "strokeColorRange": {
                  "name": "Global Warming",
                  "type": "sequential",
                  "category": "Uber",
                  "colors": [
                    "#5A1846",
                    "#900C3F",
                    "#C70039",
                    "#E3611C",
                    "#F1920E",
                    "#FFC300"
                  ]
                },
                "radiusRange": [
                  0,
                  50
                ],
                "filled": true
              },
              "hidden": false,
              "textLabel": [
                {
                  "field": null,
                  "color": [
                    255,
                    255,
                    255
                  ],
                  "size": 18,
                  "offset": [
                    0,
                    0
                  ],
                  "anchor": "start",
                  "alignment": "center"
                }
              ]
            },
            "visualChannels": {
              "colorField": null,
              "colorScale": "quantile",
              "strokeColorField": null,
              "strokeColorScale": "quantile",
              "sizeField": null,
              "sizeScale": "linear"
            }
          },
          {
            "id": "quknp8v",
            "type": "geojson",
            "config": {
              "dataId": boundariesDataId,
              "label": "Boundaries",
              "color": [
                231,
                159,
                213
              ],
              "columns": {
                "geojson": "_geojson"
              },
              "isVisible": true,
              "visConfig": {
                "opacity": 0.05,
                "strokeOpacity": 0.8,
                "thickness": 0.5,
                "strokeColor": [
                  30,
                  150,
                  190
                ],
                "colorRange": {
                  "name": "Global Warming",
                  "type": "sequential",
                  "category": "Uber",
                  "colors": [
                    "#5A1846",
                    "#900C3F",
                    "#C70039",
                    "#E3611C",
                    "#F1920E",
                    "#FFC300"
                  ]
                },
                "strokeColorRange": {
                  "name": "Global Warming",
                  "type": "sequential",
                  "category": "Uber",
                  "colors": [
                    "#5A1846",
                    "#900C3F",
                    "#C70039",
                    "#E3611C",
                    "#F1920E",
                    "#FFC300"
                  ]
                },
                "radius": 10,
                "sizeRange": [
                  0,
                  10
                ],
                "radiusRange": [
                  0,
                  50
                ],
                "heightRange": [
                  0,
                  500
                ],
                "elevationScale": 5,
                "enableElevationZoomFactor": true,
                "stroked": true,
                "filled": true,
                "enable3d": false,
                "wireframe": false
              },
              "hidden": false,
              "textLabel": [
                {
                  "field": null,
                  "color": [
                    255,
                    255,
                    255
                  ],
                  "size": 18,
                  "offset": [
                    0,
                    0
                  ],
                  "anchor": "start",
                  "alignment": "center"
                }
              ]
            },
            "visualChannels": {
              "colorField": null,
              "colorScale": "quantile",
              "strokeColorField": null,
              "strokeColorScale": "quantile",
              "sizeField": null,
              "sizeScale": "linear",
              "heightField": null,
              "heightScale": "linear",
              "radiusField": null,
              "radiusScale": "linear"
            }
          }
        ],
        "interactionConfig": {
          "tooltip": {
            "fieldsToShow": {
              "ciaeceh0r": [
                {
                  "name": "CrimeDateTime",
                  "format": null
                },
                {
                  "name": "CrimeCode",
                  "format": null
                },
                {
                  "name": "Location",
                  "format": null
                },
                {
                  "name": "Description",
                  "format": null
                }
              ],
              "6kbq7nrmc": [
                {
                  "name": "CSA2010",
                  "format": null
                },
                {
                  "name": "crime10",
                  "format": null
                },
                {
                  "name": "crime11",
                  "format": null
                },
                {
                  "name": "crime12",
                  "format": null
                },
                {
                  "name": "crime13",
                  "format": null
                },
                {
                  "name": "crime14",
                  "format": null
                },
                {
                  "name": "crime15",
                  "format": null
                },
                {
                  "name": "crime16",
                  "format": null
                },
                {
                  "name": "crime17",
                  "format": null
                },
                {
                  "name": "crime18",
                  "format": null
                },
                {
                  "name": "crime19",
                  "format": null
                },
                {
                  "name": "crime20",
                  "format": null
                }
              ]
            },
            "compareMode": false,
            "compareType": "absolute",
            "enabled": true
          },
          "brush": {
            "size": 0.5,
            "enabled": false
          },
          "geocoder": {
            "enabled": false
          },
          "coordinate": {
            "enabled": false
          }
        },
        "layerBlending": "normal",
        "splitMaps": [],
        "animationConfig": {
          "currentTime": null,
          "speed": 1
        }
      },
      "mapState": {
        "bearing": 0,
        "dragRotate": false,
        "latitude": 39.2846245637697,
        "longitude": -76.6198537712843,
        "pitch": 0,
        "zoom": 11,
        "isSplit": false
      },
      "mapStyle": {
        "styleType": "dark",
        "topLayerGroups": {},
        "visibleLayerGroups": {
          "label": true,
          "road": true,
          "border": false,
          "building": true,
          "water": true,
          "land": true,
          "3d building": false
        },
        "threeDBuildingColor": [
          9.665468314072013,
          17.18305478057247,
          31.1442867897876
        ],
        "mapStyles": {}
      }
    }
  },
  weapon: {
    "version": "v1",
    "config": {
      "visState": {
        "filters": [
          {
            "dataId": [
              crimeDataId
            ],
            "id": "meq1js9ys",
            "name": [
              "CrimeDateTime"
            ],
            "type": "timeRange",
            "value": timeRangeValue,
            "enlarged": true,
            "plotType": "histogram",
            "animationWindow": "free",
            "yAxis": null,
            "speed": 1
          }
        ],
        "layers": [
          {
            "id": "2ia8x7i",
            "type": "point",
            "config": {
              "dataId": crimeDataId,
              "label": "Point",
              "color": [
                130,
                154,
                227
              ],
              "columns": {
                "lat": "Latitude",
                "lng": "Longitude",
                "altitude": null
              },
              "isVisible": true,
              "visConfig": {
                "radius": 6,
                "fixedRadius": false,
                "opacity": 0.8,
                "outline": false,
                "thickness": 2,
                "strokeColor": null,
                "colorRange": {
                  "name": "Uber Viz Qualitative 1.2",
                  "type": "qualitative",
                  "category": "Uber",
                  "colors": [
                    "#12939A",
                    "#DDB27C",
                    "#88572C",
                    "#FF991F",
                    "#F15C17",
                    "#223F9A"
                  ]
                },
                "strokeColorRange": {
                  "name": "Global Warming",
                  "type": "sequential",
                  "category": "Uber",
                  "colors": [
                    "#5A1846",
                    "#900C3F",
                    "#C70039",
                    "#E3611C",
                    "#F1920E",
                    "#FFC300"
                  ]
                },
                "radiusRange": [
                  0,
                  50
                ],
                "filled": true
              },
              "hidden": false,
              "textLabel": [
                {
                  "field": null,
                  "color": [
                    255,
                    255,
                    255
                  ],
                  "size": 18,
                  "offset": [
                    0,
                    0
                  ],
                  "anchor": "start",
                  "alignment": "center"
                }
              ]
            },
            "visualChannels": {
              "colorField": {
                "name": "Weapon",
                "type": "string"
              },
              "colorScale": "ordinal",
              "strokeColorField": null,
              "strokeColorScale": "quantile",
              "sizeField": null,
              "sizeScale": "linear"
            }
          },
          {
            "id": "1r89ew",
            "type": "geojson",
            "config": {
              "dataId": boundariesDataId,
              "label": "Boundaries",
              "color": [
                180,
                167,
                235
              ],
              "columns": {
                "geojson": "_geojson"
              },
              "isVisible": true,
              "visConfig": {
                "opacity": 0.1,
                "strokeOpacity": 0.8,
                "thickness": 0.5,
                "strokeColor": [
                  130,
                  154,
                  227
                ],
                "colorRange": {
                  "name": "Global Warming",
                  "type": "sequential",
                  "category": "Uber",
                  "colors": [
                    "#5A1846",
                    "#900C3F",
                    "#C70039",
                    "#E3611C",
                    "#F1920E",
                    "#FFC300"
                  ]
                },
                "strokeColorRange": {
                  "name": "Global Warming",
                  "type": "sequential",
                  "category": "Uber",
                  "colors": [
                    "#5A1846",
                    "#900C3F",
                    "#C70039",
                    "#E3611C",
                    "#F1920E",
                    "#FFC300"
                  ]
                },
                "radius": 10,
                "sizeRange": [
                  0,
                  10
                ],
                "radiusRange": [
                  0,
                  50
                ],
                "heightRange": [
                  0,
                  500
                ],
                "elevationScale": 5,
                "enableElevationZoomFactor": true,
                "stroked": true,
                "filled": false,
                "enable3d": false,
                "wireframe": false
              },
              "hidden": false,
              "textLabel": [
                {
                  "field": null,
                  "color": [
                    255,
                    255,
                    255
                  ],
                  "size": 18,
                  "offset": [
                    0,
                    0
                  ],
                  "anchor": "start",
                  "alignment": "center"
                }
              ]
            },
            "visualChannels": {
              "colorField": null,
              "colorScale": "quantile",
              "strokeColorField": null,
              "strokeColorScale": "quantile",
              "sizeField": null,
              "sizeScale": "linear",
              "heightField": null,
              "heightScale": "linear",
              "radiusField": null,
              "radiusScale": "linear"
            }
          }
        ],
        "interactionConfig": {
          "tooltip": {
            "fieldsToShow": {
              "6kbq7nrmc": [
                {
                  "name": "CSA2010",
                  "format": null
                }
              ],
              "ciaeceh0r": [
                {
                  "name": "CrimeDateTime",
                  "format": null
                },
                {
                  "name": "CrimeCode",
                  "format": null
                },
                {
                  "name": "Location",
                  "format": null
                },
                {
                  "name": "Description",
                  "format": null
                },
                {
                  "name": "Weapon",
                  "format": null
                }
              ]
            },
            "compareMode": false,
            "compareType": "absolute",
            "enabled": true
          },
          "brush": {
            "size": 0.5,
            "enabled": false
          },
          "geocoder": {
            "enabled": true
          },
          "coordinate": {
            "enabled": false
          }
        },
        "layerBlending": "normal",
        "splitMaps": [],
        "animationConfig": {
          "currentTime": null,
          "speed": 1
        }
      },
      "mapState": {
        "bearing": 0,
        "dragRotate": false,
        "latitude": 39.2846245637697,
        "longitude": -76.6198537712843,
        "pitch": 0,
        "zoom": 11,
        "isSplit": false
      },
      "mapStyle": {
        "styleType": "dark",
        "topLayerGroups": {},
        "visibleLayerGroups": {
          "label": true,
          "road": true,
          "border": false,
          "building": true,
          "water": true,
          "land": true,
          "3d building": false
        },
        "threeDBuildingColor": [
          9.665468314072013,
          17.18305478057247,
          31.1442867897876
        ],
        "mapStyles": {}
      }
    }
  },
  heatmap: {
    "version": "v1",
    "config": {
      "visState": {
        "filters": [
          {
            "dataId": [
              crimeDataId
            ],
            "id": "thuu5o5am",
            "name": [
              "CrimeDateTime"
            ],
            "type": "timeRange",
            "value": timeRangeValue,
            "enlarged": true,
            "plotType": "histogram",
            "animationWindow": "free",
            "yAxis": null,
            "speed": 1
          }
        ],
        "layers": [
          {
            "id": "hlo3qya",
            "type": "heatmap",
            "config": {
              "dataId": crimeDataId,
              "label": "Crime Location",
              "color": [
                130,
                154,
                227
              ],
              "columns": {
                "lat": "Latitude",
                "lng": "Longitude"
              },
              "isVisible": true,
              "visConfig": {
                "opacity": 0.8,
                "colorRange": {
                  "name": "Uber Viz Diverging 1.5",
                  "type": "diverging",
                  "category": "Uber",
                  "colors": [
                    "#00939C",
                    "#5DBABF",
                    "#BAE1E2",
                    "#F8C0AA",
                    "#DD7755",
                    "#C22E00"
                  ]
                },
                "radius": 10
              },
              "hidden": false,
              "textLabel": [
                {
                  "field": null,
                  "color": [
                    255,
                    255,
                    255
                  ],
                  "size": 18,
                  "offset": [
                    0,
                    0
                  ],
                  "anchor": "start",
                  "alignment": "center"
                }
              ]
            },
            "visualChannels": {
              "weightField": null,
              "weightScale": "linear"
            }
          },
          {
            "id": "c1yk1ts",
            "type": "geojson",
            "config": {
              "dataId": boundariesDataId,
              "label": "Boundaries",
              "color": [
                255,
                203,
                153
              ],
              "columns": {
                "geojson": "_geojson"
              },
              "isVisible": true,
              "visConfig": {
                "opacity": 0.8,
                "strokeOpacity": 0.05,
                "thickness": 0.5,
                "strokeColor": [
                  30,
                  150,
                  190
                ],
                "colorRange": {
                  "name": "Global Warming",
                  "type": "sequential",
                  "category": "Uber",
                  "colors": [
                    "#5A1846",
                    "#900C3F",
                    "#C70039",
                    "#E3611C",
                    "#F1920E",
                    "#FFC300"
                  ]
                },
                "strokeColorRange": {
                  "name": "Global Warming",
                  "type": "sequential",
                  "category": "Uber",
                  "colors": [
                    "#5A1846",
                    "#900C3F",
                    "#C70039",
                    "#E3611C",
                    "#F1920E",
                    "#FFC300"
                  ]
                },
                "radius": 10,
                "sizeRange": [
                  0,
                  10
                ],
                "radiusRange": [
                  0,
                  50
                ],
                "heightRange": [
                  0,
                  500
                ],
                "elevationScale": 5,
                "enableElevationZoomFactor": true,
                "stroked": true,
                "filled": false,
                "enable3d": false,
                "wireframe": false
              },
              "hidden": false,
              "textLabel": [
                {
                  "field": null,
                  "color": [
                    255,
                    255,
                    255
                  ],
                  "size": 18,
                  "offset": [
                    0,
                    0
                  ],
                  "anchor": "start",
                  "alignment": "center"
                }
              ]
            },
            "visualChannels": {
              "colorField": null,
              "colorScale": "quantile",
              "strokeColorField": null,
              "strokeColorScale": "quantile",
              "sizeField": null,
              "sizeScale": "linear",
              "heightField": null,
              "heightScale": "linear",
              "radiusField": null,
              "radiusScale": "linear"
            }
          }
        ],
        "interactionConfig": {
          "tooltip": {
            "fieldsToShow": {
              "6kbq7nrmc": [
                {
                  "name": "CSA2010",
                  "format": null
                }
              ],
              "ciaeceh0r": [
                {
                  "name": "CrimeDateTime",
                  "format": null
                },
                {
                  "name": "CrimeCode",
                  "format": null
                },
                {
                  "name": "Location",
                  "format": null
                },
                {
                  "name": "Description",
                  "format": null
                }
              ]
            },
            "compareMode": false,
            "compareType": "absolute",
            "enabled": true
          },
          "brush": {
            "size": 0.5,
            "enabled": false
          },
          "geocoder": {
            "enabled": false
          },
          "coordinate": {
            "enabled": false
          }
        },
        "layerBlending": "normal",
        "splitMaps": [],
        "animationConfig": {
          "currentTime": null,
          "speed": 1
        }
      },
      "mapState": {
        "bearing": 0,
        "dragRotate": false,
        "latitude": 39.2846245637697,
        "longitude": -76.6202537712843,
        "pitch": 0,
        "zoom": 11,
        "isSplit": false
      },
      "mapStyle": {
        "styleType": "dark",
        "topLayerGroups": {},
        "visibleLayerGroups": {
          "label": true,
          "road": true,
          "border": false,
          "building": true,
          "water": true,
          "land": true,
          "3d building": false
        },
        "threeDBuildingColor": [
          9.665468314072013,
          17.18305478057247,
          31.1442867897876
        ],
        "mapStyles": {}
      }
    }
  },
  region: {
    "version": "v1",
    "config": {
      "visState": {
        "filters": [],
        "layers": [
          {
            "id": "xlytvmw",
            "type": "geojson",
            "config": {
              "dataId": boundariesDataId,
              "label": "Boundaries",
              "color": [
                255,
                203,
                153
              ],
              "columns": {
                "geojson": "_geojson"
              },
              "isVisible": true,
              "visConfig": {
                "opacity": 0.8,
                "strokeOpacity": 0.8,
                "thickness": 0.5,
                "strokeColor": [
                  30,
                  150,
                  190
                ],
                "colorRange": {
                  "name": "Ice And Fire 8",
                  "type": "diverging",
                  "category": "Uber",
                  "colors": [
                    "#007A99",
                    "#0198BD",
                    "#49E3CE",
                    "#E8FEB5",
                    "#FEEDB1",
                    "#FEAD54",
                    "#D50255",
                    "#7F1941"
                  ]
                },
                "strokeColorRange": {
                  "name": "Global Warming",
                  "type": "sequential",
                  "category": "Uber",
                  "colors": [
                    "#5A1846",
                    "#900C3F",
                    "#C70039",
                    "#E3611C",
                    "#F1920E",
                    "#FFC300"
                  ]
                },
                "radius": 10,
                "sizeRange": [
                  0,
                  10
                ],
                "radiusRange": [
                  0,
                  50
                ],
                "heightRange": [
                  0,
                  500
                ],
                "elevationScale": 5,
                "stroked": true,
                "filled": true,
                "enable3d": true,
                "wireframe": true
              },
              "hidden": false,
              "textLabel": [
                {
                  "field": null,
                  "color": [
                    255,
                    255,
                    255
                  ],
                  "size": 18,
                  "offset": [
                    0,
                    0
                  ],
                  "anchor": "start",
                  "alignment": "center"
                }
              ]
            },
            "visualChannels": {
              "colorField": {
                "name": "crime20",
                "type": "real"
              },
              "colorScale": "quantile",
              "strokeColorField": null,
              "strokeColorScale": "quantile",
              "sizeField": null,
              "sizeScale": "linear",
              "heightField": {
                "name": "crime20",
                "type": "real"
              },
              "heightScale": "linear",
              "radiusField": null,
              "radiusScale": "linear"
            }
          }
        ],
        "interactionConfig": {
          "tooltip": {
            "fieldsToShow": {
              "6kbq7nrmc": [
                {
                  "name": "CSA2010",
                  "format": null
                },
                {
                  "name": "crime10",
                  "format": null
                },
                {
                  "name": "crime11",
                  "format": null
                },
                {
                  "name": "crime12",
                  "format": null
                },
                {
                  "name": "crime13",
                  "format": null
                },
                {
                  "name": "crime14",
                  "format": null
                },
                {
                  "name": "crime15",
                  "format": null
                },
                {
                  "name": "crime16",
                  "format": null
                },
                {
                  "name": "crime17",
                  "format": null
                },
                {
                  "name": "crime18",
                  "format": null
                },
                {
                  "name": "crime19",
                  "format": null
                },
                {
                  "name": "crime20",
                  "format": null
                },
                {
                  "name": "Shape__Area",
                  "format": null
                }
              ]
            },
            "compareMode": false,
            "compareType": "absolute",
            "enabled": true
          },
          "brush": {
            "size": 0.5,
            "enabled": false
          },
          "geocoder": {
            "enabled": true
          },
          "coordinate": {
            "enabled": false
          }
        },
        "layerBlending": "normal",
        "splitMaps": [],
        "animationConfig": {
          "currentTime": null,
          "speed": 1
        }
      },
      "mapState": {
        "bearing": 24,
        "dragRotate": true,
        "latitude": 39.2846245637697,
        "longitude": -76.62054197164446,
        "pitch": 50,
        "zoom": 12,
        "isSplit": false
      },
      "mapStyle": {
        "styleType": "dark",
        "topLayerGroups": {},
        "visibleLayerGroups": {
          "label": true,
          "road": true,
          "border": false,
          "building": true,
          "water": true,
          "land": true,
          "3d building": false
        },
        "threeDBuildingColor": [
          9.665468314072013,
          17.18305478057247,
          31.1442867897876
        ],
        "mapStyles": {}
      }
    }
  },
  custom: {
    "version": "v1",
    "config": {
      "visState": {
        "filters": [],
        "layers": [
          {
            "id": "jidv2t",
            "type": "geojson",
            "config": {
              "dataId": boundariesDataId,
              "label": "Boundaries",
              "color": [
                255,
                203,
                153
              ],
              "columns": {
                "geojson": "_geojson"
              },
              "isVisible": true,
              "visConfig": {
                "opacity": 0.8,
                "strokeOpacity": 0.8,
                "thickness": 0.5,
                "strokeColor": [
                  30,
                  150,
                  190
                ],
                "colorRange": {
                  "name": "Global Warming",
                  "type": "sequential",
                  "category": "Uber",
                  "colors": [
                    "#5A1846",
                    "#900C3F",
                    "#C70039",
                    "#E3611C",
                    "#F1920E",
                    "#FFC300"
                  ]
                },
                "strokeColorRange": {
                  "name": "Global Warming",
                  "type": "sequential",
                  "category": "Uber",
                  "colors": [
                    "#5A1846",
                    "#900C3F",
                    "#C70039",
                    "#E3611C",
                    "#F1920E",
                    "#FFC300"
                  ]
                },
                "radius": 10,
                "sizeRange": [
                  0,
                  10
                ],
                "radiusRange": [
                  0,
                  50
                ],
                "heightRange": [
                  0,
                  500
                ],
                "elevationScale": 5,
                "enableElevationZoomFactor": true,
                "stroked": true,
                "filled": false,
                "enable3d": false,
                "wireframe": false
              },
              "hidden": false,
              "textLabel": [
                {
                  "field": null,
                  "color": [
                    255,
                    255,
                    255
                  ],
                  "size": 18,
                  "offset": [
                    0,
                    0
                  ],
                  "anchor": "start",
                  "alignment": "center"
                }
              ]
            },
            "visualChannels": {
              "colorField": null,
              "colorScale": "quantile",
              "strokeColorField": null,
              "strokeColorScale": "quantile",
              "sizeField": null,
              "sizeScale": "linear",
              "heightField": null,
              "heightScale": "linear",
              "radiusField": null,
              "radiusScale": "linear"
            }
          }
        ],
        "interactionConfig": {
          "tooltip": {
            "fieldsToShow": {
              "6kbq7nrmc": [
                {
                  "name": "CSA2010",
                  "format": null
                },
                {
                  "name": "crime10",
                  "format": null
                },
                {
                  "name": "crime11",
                  "format": null
                },
                {
                  "name": "crime12",
                  "format": null
                },
                {
                  "name": "crime13",
                  "format": null
                },
                {
                  "name": "crime14",
                  "format": null
                },
                {
                  "name": "crime15",
                  "format": null
                },
                {
                  "name": "crime16",
                  "format": null
                },
                {
                  "name": "crime17",
                  "format": null
                },
                {
                  "name": "crime18",
                  "format": null
                },
                {
                  "name": "crime19",
                  "format": null
                },
                {
                  "name": "crime20",
                  "format": null
                },
                {
                  "name": "Shape__Area",
                  "format": null
                }
              ]
            },
            "compareMode": false,
            "compareType": "absolute",
            "enabled": true
          },
          "brush": {
            "size": 0.5,
            "enabled": false
          },
          "geocoder": {
            "enabled": false
          },
          "coordinate": {
            "enabled": false
          }
        },
        "layerBlending": "normal",
        "splitMaps": [],
        "animationConfig": {
          "currentTime": null,
          "speed": 1
        }
      },
      "mapState": {
        "bearing": 0,
        "dragRotate": false,
        "latitude": 39.28683969865397,
        "longitude": -76.63653551394255,
        "pitch": 0,
        "zoom": 11.23499781938976,
        "isSplit": false
      },
      "mapStyle": {
        "styleType": "dark",
        "topLayerGroups": {},
        "visibleLayerGroups": {
          "label": true,
          "road": true,
          "border": false,
          "building": true,
          "water": true,
          "land": true,
          "3d building": false
        },
        "threeDBuildingColor": [
          9.665468314072013,
          17.18305478057247,
          31.1442867897876
        ],
        "mapStyles": {}
      }
    }
  }
}

export { CARDPROPS, CONFIGURATION, CRIME_OPTIONS }