/*global kakao*/
import React, { useEffect } from 'react';
import './MapPage.scss';
import axios from 'axios';


const LoadMap = () => {
	useEffect(() => {
        axios.get('http://localhost:3005/api/travelArea/list')
        .then((response)=>{  
            let result = response.data.doc
            console.log(result);
        })
        .catch((err)=> (err, "요청 실패.") )
		const sampleLan = 37.3913538;
		const sampleLon = 126.9646325;
		const container = document.getElementById('map');
		const options = {
			center: new kakao.maps.LatLng(sampleLan, sampleLon),
			level: 3,
		};
		const map = new kakao.maps.Map(container, options);

        //add marker
        const markerPosition  = new kakao.maps.LatLng(37.3913538, 126.9646325);
        const marker = new kakao.maps.Marker({
            position: markerPosition
        }); 
        marker.setMap(map);

        // add marker-hover-event
        const iwContent = document.getElementById("markerContent");
        const infowindow = new kakao.maps.InfoWindow({
            content : iwContent
        });
        kakao.maps.event.addListener(marker, 'mouseover', function() {
            infowindow.open(map, marker);
        });
        kakao.maps.event.addListener(marker, 'click', function() {
            console.log("click-event");
        });
        kakao.maps.event.addListener(map, 'click', function() {
            infowindow.close();
        });

	}, []);

	return (
        <div>
            <section className="map-container">
                <h1 className="map-title">지도로 보기</h1>
                <div id="map" style={{ width: '70vw', height: '60vh' }}></div>
            </section>
            <div id="markerContent">detail-text-init</div>
        </div>
	);
};


export default LoadMap
