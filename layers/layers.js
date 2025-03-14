ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32618").setExtent([386044.292765, 969585.232018, 388873.148296, 970937.924334]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Bebederos_1 = new ol.format.GeoJSON();
var features_Bebederos_1 = format_Bebederos_1.readFeatures(json_Bebederos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_Bebederos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bebederos_1.addFeatures(features_Bebederos_1);
cluster_Bebederos_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Bebederos_1
});
var lyr_Bebederos_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Bebederos_1, 
                style: style_Bebederos_1,
                popuplayertitle: 'Bebederos',
                interactive: true,
                title: '<img src="styles/legend/Bebederos_1.png" /> Bebederos'
            });
var format_Cercas_Electricas_2 = new ol.format.GeoJSON();
var features_Cercas_Electricas_2 = format_Cercas_Electricas_2.readFeatures(json_Cercas_Electricas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_Cercas_Electricas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cercas_Electricas_2.addFeatures(features_Cercas_Electricas_2);
cluster_Cercas_Electricas_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Cercas_Electricas_2
});
var lyr_Cercas_Electricas_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Cercas_Electricas_2, 
                style: style_Cercas_Electricas_2,
                popuplayertitle: 'Cercas_Electricas',
                interactive: true,
                title: '<img src="styles/legend/Cercas_Electricas_2.png" /> Cercas_Electricas'
            });
var format_Curvas_Gaviotas_3 = new ol.format.GeoJSON();
var features_Curvas_Gaviotas_3 = format_Curvas_Gaviotas_3.readFeatures(json_Curvas_Gaviotas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_Curvas_Gaviotas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvas_Gaviotas_3.addFeatures(features_Curvas_Gaviotas_3);
var lyr_Curvas_Gaviotas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Curvas_Gaviotas_3, 
                style: style_Curvas_Gaviotas_3,
                popuplayertitle: 'Curvas_Gaviotas',
                interactive: true,
    title: 'Curvas_Gaviotas<br />\
    <img src="styles/legend/Curvas_Gaviotas_3_0.png" /> 30,000000000000000<br />\
    <img src="styles/legend/Curvas_Gaviotas_3_1.png" /> 31,000000000000000<br />\
    <img src="styles/legend/Curvas_Gaviotas_3_2.png" /> 32,000000000000000<br />\
    <img src="styles/legend/Curvas_Gaviotas_3_3.png" /> 33,000000000000000<br />\
    <img src="styles/legend/Curvas_Gaviotas_3_4.png" /> 34,000000000000000<br />\
    <img src="styles/legend/Curvas_Gaviotas_3_5.png" /> 35,000000000000000<br />\
    <img src="styles/legend/Curvas_Gaviotas_3_6.png" /> 36,000000000000000<br />\
    <img src="styles/legend/Curvas_Gaviotas_3_7.png" /> 37,000000000000000<br />\
    <img src="styles/legend/Curvas_Gaviotas_3_8.png" /> 38,000000000000000<br />\
    <img src="styles/legend/Curvas_Gaviotas_3_9.png" /> 39,000000000000000<br />' });
var format_Fca_Las_Gaviotas_4 = new ol.format.GeoJSON();
var features_Fca_Las_Gaviotas_4 = format_Fca_Las_Gaviotas_4.readFeatures(json_Fca_Las_Gaviotas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_Fca_Las_Gaviotas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fca_Las_Gaviotas_4.addFeatures(features_Fca_Las_Gaviotas_4);
var lyr_Fca_Las_Gaviotas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fca_Las_Gaviotas_4, 
                style: style_Fca_Las_Gaviotas_4,
                popuplayertitle: 'Fca_Las_Gaviotas',
                interactive: true,
                title: '<img src="styles/legend/Fca_Las_Gaviotas_4.png" /> Fca_Las_Gaviotas'
            });
var format_Punto_Refe_5 = new ol.format.GeoJSON();
var features_Punto_Refe_5 = format_Punto_Refe_5.readFeatures(json_Punto_Refe_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_Punto_Refe_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punto_Refe_5.addFeatures(features_Punto_Refe_5);
cluster_Punto_Refe_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Punto_Refe_5
});
var lyr_Punto_Refe_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Punto_Refe_5, 
                style: style_Punto_Refe_5,
                popuplayertitle: 'Punto_Refe',
                interactive: true,
                title: '<img src="styles/legend/Punto_Refe_5.png" /> Punto_Refe'
            });
var format_Lineas_Riego_6 = new ol.format.GeoJSON();
var features_Lineas_Riego_6 = format_Lineas_Riego_6.readFeatures(json_Lineas_Riego_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_Lineas_Riego_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lineas_Riego_6.addFeatures(features_Lineas_Riego_6);
var lyr_Lineas_Riego_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lineas_Riego_6, 
                style: style_Lineas_Riego_6,
                popuplayertitle: 'Lineas_Riego',
                interactive: true,
                title: '<img src="styles/legend/Lineas_Riego_6.png" /> Lineas_Riego'
            });
var format_Plano_AvenzaCapa3_7 = new ol.format.GeoJSON();
var features_Plano_AvenzaCapa3_7 = format_Plano_AvenzaCapa3_7.readFeatures(json_Plano_AvenzaCapa3_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_Plano_AvenzaCapa3_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plano_AvenzaCapa3_7.addFeatures(features_Plano_AvenzaCapa3_7);
var lyr_Plano_AvenzaCapa3_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plano_AvenzaCapa3_7, 
                style: style_Plano_AvenzaCapa3_7,
                popuplayertitle: 'Plano_Avenza — Capa 3',
                interactive: true,
                title: 'Plano_Avenza — Capa 3'
            });
var format_Plano_AvenzaCapa3_8 = new ol.format.GeoJSON();
var features_Plano_AvenzaCapa3_8 = format_Plano_AvenzaCapa3_8.readFeatures(json_Plano_AvenzaCapa3_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_Plano_AvenzaCapa3_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plano_AvenzaCapa3_8.addFeatures(features_Plano_AvenzaCapa3_8);
cluster_Plano_AvenzaCapa3_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Plano_AvenzaCapa3_8
});
var lyr_Plano_AvenzaCapa3_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Plano_AvenzaCapa3_8, 
                style: style_Plano_AvenzaCapa3_8,
                popuplayertitle: 'Plano_Avenza — Capa 3',
                interactive: true,
                title: 'Plano_Avenza — Capa 3'
            });
var lyr_DEM_Gaviota_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM_Gaviota<br />\
    <img src="styles/legend/DEM_Gaviota_9_0.png" /> 30<br />\
    <img src="styles/legend/DEM_Gaviota_9_1.png" /> 31<br />\
    <img src="styles/legend/DEM_Gaviota_9_2.png" /> 32<br />\
    <img src="styles/legend/DEM_Gaviota_9_3.png" /> 34<br />\
    <img src="styles/legend/DEM_Gaviota_9_4.png" /> 35<br />\
    <img src="styles/legend/DEM_Gaviota_9_5.png" /> 36<br />\
    <img src="styles/legend/DEM_Gaviota_9_6.png" /> 37<br />\
    <img src="styles/legend/DEM_Gaviota_9_7.png" /> 38<br />\
    <img src="styles/legend/DEM_Gaviota_9_8.png" /> 39<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEM_Gaviota_9.png",
            attributions: ' ',
            projection: 'EPSG:32618',
            alwaysInRange: true,
            imageExtent: [386909.281250, 969741.375000, 387784.281250, 970766.375000]
        })
    });

lyr_GoogleSatellite_0.setVisible(true);lyr_Bebederos_1.setVisible(true);lyr_Cercas_Electricas_2.setVisible(true);lyr_Curvas_Gaviotas_3.setVisible(true);lyr_Fca_Las_Gaviotas_4.setVisible(true);lyr_Punto_Refe_5.setVisible(true);lyr_Lineas_Riego_6.setVisible(true);lyr_Plano_AvenzaCapa3_7.setVisible(true);lyr_Plano_AvenzaCapa3_8.setVisible(true);lyr_DEM_Gaviota_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Bebederos_1,lyr_Cercas_Electricas_2,lyr_Curvas_Gaviotas_3,lyr_Fca_Las_Gaviotas_4,lyr_Punto_Refe_5,lyr_Lineas_Riego_6,lyr_Plano_AvenzaCapa3_7,lyr_Plano_AvenzaCapa3_8,lyr_DEM_Gaviota_9];
lyr_Bebederos_1.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'name': 'name', });
lyr_Cercas_Electricas_2.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_Curvas_Gaviotas_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Fca_Las_Gaviotas_4.set('fieldAliases', {'Área': 'Área', 'Potrero': 'Potrero', 'Pasto': 'Pasto', 'Malezas': 'Malezas', 'Carga_UGG': 'Carga_UGG', 'Ocupacion': 'Ocupacion', 'Aforo': 'Aforo', 'Foto_1': 'Foto_1', 'Foto_2': 'Foto_2', 'Foto_3': 'Foto_3', 'Foto_4': 'Foto_4', 'Foto_5': 'Foto_5', 'Foto_6': 'Foto_6', });
lyr_Punto_Refe_5.set('fieldAliases', {'id': 'id', 'X': 'X', 'Y': 'Y', });
lyr_Lineas_Riego_6.set('fieldAliases', {'id': 'id', 'Dist': 'Dist', });
lyr_Plano_AvenzaCapa3_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Plano_AvenzaCapa3_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Bebederos_1.set('fieldImages', {'ele': 'TextEdit', 'time': 'TextEdit', 'name': 'TextEdit', });
lyr_Cercas_Electricas_2.set('fieldImages', {'id': '', 'Nombre': '', });
lyr_Curvas_Gaviotas_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_Fca_Las_Gaviotas_4.set('fieldImages', {'Área': 'TextEdit', 'Potrero': 'TextEdit', 'Pasto': '', 'Malezas': '', 'Carga_UGG': '', 'Ocupacion': '', 'Aforo': '', 'Foto_1': '', 'Foto_2': '', 'Foto_3': '', 'Foto_4': '', 'Foto_5': '', 'Foto_6': '', });
lyr_Punto_Refe_5.set('fieldImages', {'id': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Lineas_Riego_6.set('fieldImages', {'id': 'TextEdit', 'Dist': 'TextEdit', });
lyr_Plano_AvenzaCapa3_7.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Plano_AvenzaCapa3_8.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Bebederos_1.set('fieldLabels', {'ele': 'inline label - always visible', 'time': 'hidden field', 'name': 'inline label - always visible', });
lyr_Cercas_Electricas_2.set('fieldLabels', {'id': 'hidden field', 'Nombre': 'inline label - always visible', });
lyr_Curvas_Gaviotas_3.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'ELEV': 'inline label - always visible', });
lyr_Fca_Las_Gaviotas_4.set('fieldLabels', {'Área': 'inline label - always visible', 'Potrero': 'inline label - always visible', 'Pasto': 'inline label - always visible', 'Malezas': 'inline label - always visible', 'Carga_UGG': 'inline label - always visible', 'Ocupacion': 'inline label - always visible', 'Aforo': 'inline label - always visible', 'Foto_1': 'inline label - always visible', 'Foto_2': 'inline label - always visible', 'Foto_3': 'inline label - always visible', 'Foto_4': 'inline label - visible with data', 'Foto_5': 'inline label - always visible', 'Foto_6': 'inline label - always visible', });
lyr_Punto_Refe_5.set('fieldLabels', {'id': 'hidden field', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', });
lyr_Lineas_Riego_6.set('fieldLabels', {'id': 'hidden field', 'Dist': 'inline label - always visible', });
lyr_Plano_AvenzaCapa3_7.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Plano_AvenzaCapa3_8.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Plano_AvenzaCapa3_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});