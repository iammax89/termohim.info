function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 50.413129, lng: 30.550944 }, zoom: 14,
    });
    const marker = new google.maps.Marker({
        position: { lat: 50.412891, lng: 30.550965 },
        map: map,
        title: 'вул. Михайла Бойчука, 17, Київ'
    });
    marker.addListener("click", () => {
        map.setZoom(18);
        map.setCenter(marker.getPosition());
    });
}