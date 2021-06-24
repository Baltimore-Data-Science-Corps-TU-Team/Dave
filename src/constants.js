import CustomImg from './map-config-jpg/Default.jpeg';
import clusterImg from './map-config-jpg/Cluster.jpg';
import PointsImg from './map-config-jpg/Points.jpg';
import PointsByRegionImg from './map-config-jpg/Points-by-Region.jpg';
import PointsByDescriptionImg from './map-config-jpg/Points-by-Description.jpg';
import PointsByWeaponImg from './map-config-jpg/Points-by-Weapon.jpg';

const CARDPROPS = [
  {
    img: clusterImg,
    title: 'Cluster',
    tooltip: 'author',
    value: 'cluster'
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
    img: PointsByDescriptionImg,
    title: 'Points by Description',
    tooltip: 'author',
    value: 'description'
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
  'Auto theft',
  'Robbery',
  'Shoplifting'
];

const CONFIGURATION = {
  cluster: {
    "visState": {
      "filters": [
        {
          "dataId": [
            "bcptxtw2c"
          ],
          "id": "94cen4zfp",
          "name": [
            "CrimeDateTime"
          ],
          "type": "timeRange",
          "value": [
            1409500093000,
            1431255219000
          ],
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
            "dataId": "bcptxtw2c",
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
            "dataId": "c2ua7y9ok",
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
            "c2ua7y9ok": [
              {
                "name": "CSA2010",
                "format": null
              }
            ],
            "bcptxtw2c": [
              {
                "name": "RowID",
                "format": null
              },
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
      "latitude": 39.27873293302129,
      "longitude": -76.62899332962172,
      "pitch": 0,
      "zoom": 11.370376996910236,
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
  },
  points: {
    "visState": {
      "filters": [
        {
          "dataId": [
            "ciaeceh0r"
          ],
          "id": "d4inpyjo",
          "name": [
            "CrimeDateTime"
          ],
          "type": "timeRange",
          "value": [
            1406403614000,
            1432509765000
          ],
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
            "dataId": "ciaeceh0r",
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
            "dataId": "0kw6qvbt",
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
            "0kw6qvbt": [
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
  },
  weapon: {
    "visState": {
      "filters": [
        {
          "dataId": [
            "ttztqotgi"
          ],
          "id": "meq1js9ys",
          "name": [
            "CrimeDateTime"
          ],
          "type": "timeRange",
          "value": [
            1405381123000,
            1433662786000
          ],
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
            "dataId": "ttztqotgi",
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
            "dataId": "nbnh9wwms",
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
            "nbnh9wwms": [
              {
                "name": "CSA2010",
                "format": null
              }
            ],
            "ttztqotgi": [
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
  },
  description: {
    "visState": {
      "filters": [
        {
          "dataId": [
            "ciaeceh0r"
          ],
          "id": "d4inpyjo",
          "name": [
            "CrimeDateTime"
          ],
          "type": "timeRange",
          "value": [
            1413165832250,
            1439271983250
          ],
          "enlarged": true,
          "plotType": "histogram",
          "animationWindow": "free",
          "yAxis": null,
          "speed": 0.5
        }
      ],
      "layers": [
        {
          "id": "eao0erc",
          "type": "hexagon",
          "config": {
            "dataId": "ciaeceh0r",
            "label": "Crime Location",
            "color": [
              248,
              149,
              112
            ],
            "columns": {
              "lat": "Latitude",
              "lng": "Longitude"
            },
            "isVisible": true,
            "visConfig": {
              "opacity": 0.8,
              "worldUnitSize": 0.02,
              "resolution": 8,
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
                ],
                "reversed": false
              },
              "coverage": 1,
              "sizeRange": [
                0,
                500
              ],
              "percentile": [
                0,
                100
              ],
              "elevationPercentile": [
                0,
                100
              ],
              "elevationScale": 5,
              "enableElevationZoomFactor": true,
              "colorAggregation": "mode",
              "sizeAggregation": "count",
              "enable3d": true
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
              "name": "Description",
              "type": "string"
            },
            "colorScale": "ordinal",
            "sizeField": null,
            "sizeScale": "linear"
          }
        },
        {
          "id": "quknp8v",
          "type": "geojson",
          "config": {
            "dataId": "0kw6qvbt",
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
              "opacity": 0.01,
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
            "0kw6qvbt": [
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
      "bearing": 12.947368421052632,
      "dragRotate": true,
      "latitude": 39.2846245637697,
      "longitude": -76.6198537712843,
      "pitch": 54.34782608695652,
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
  },
  region: {
    "visState": {
      "filters": [],
      "layers": [
        {
          "id": "xlytvmw",
          "type": "geojson",
          "config": {
            "dataId": "6kbq7nrmc",
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
              "enableElevationZoomFactor": true,
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
  },
  custom: {
    visState: {
      filters: [
        // {
        //   id: 'me',
        //   dataId: 'test_trip_data',
        //   name: 'tpep_pickup_datetime',
        //   type: 'timeRange',
        //   enlarged: true
        // }
      ]
    }
  },
  default: {
    "visState": {
      "filters": [],
      "layers": [
        {
          "id": "v8dpgfj",
          "type": "geojson",
          "config": {
            "dataId": "baltimore-boundaries",
            "label": "boundaries",
            "color": [
              137,
              218,
              193
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
                179,
                173,
                158
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
            "baltimore-boundaries": [
              {
                "name": "OBJECTID",
                "format": null
              },
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
      "longitude": -76.62054197164446,
      "pitch": 0,
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
}


export { CARDPROPS, CONFIGURATION, CRIME_OPTIONS }