
// if (document.querySelector('#map')) {
// 	mapAdd();
// 	function mapAdd() {
// 		let tag = document.createElement('script');
// 		tag.src = "https://api-maps.yandex.ru/2.1/?apikey=0aa2f6b6-353d-4a10-bb62-97763a975ef4&lang=ru_RU";
// 		let firstScriptTag = document.getElementsByTagName('script')[0];
// 		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 	}
// 	setTimeout(function () {

// 		ymaps.ready(init);

// 		function init() {
// 			var myMap = new ymaps.Map("map", {
// 				center: [56.066525, 92.961439],
// 				zoom: 16,
// 				controls: ['zoomControl'],
// 			});
// 			let addresFirst = new ymaps.Placemark([56.066525, 92.961439], {}, {
// 				iconLayout: 'default#imageWithContent',
// 				iconImageHref: '@img/icons/map-marker.svg',
// 				iconImageSize: [92, 57],
// 				iconImageOffset: [-30, -60],
// 				iconContentOffset: [0, 0],
// 			});
// 			myMap.geoObjects.add(addresFirst);
// 			myMap.behaviors.disable('scrollZoom');
// 		}

// 	}, 1000);
// }


// let map;
// async function initMap() {
// 	const { Map, RenderingType } = (await google.maps.importLibrary('maps'));
// 	map = new Map(document.getElementById('map'), {
// 		center: { lat: -34.397, lng: 150.644 },
// 		zoom: 8,
// 		renderingType: RenderingType.VECTOR,
// 	});
// }
// initMap();

// let map;
// let center = { lat: 1.3521, lng: 103.8198 };

// async function initMap() {
// 	await google.maps.importLibrary("maps");
// 	await google.maps.importLibrary("marker");

// 	map = new google.maps.Map(document.getElementById("map"), {
// 		center,
// 		zoom: 13,
// 		mapId: "MAP",
// 	});

// 	addMarker();
// }

// async function addMarker() {
// 	const marker = new google.maps.marker.AdvancedMarkerElement({
// 		map,
// 		position: center,
// 	});
// }

// initMap();

function initMap() {
	const center = { lat: 55.751244, lng: 37.618423 };
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 10,
		center: center,
	});

	// Массив с данными о локациях
	const locations = [
		{ position: { lat: 55.751244, lng: 37.618423 }, title: "Москва, Кремль" },
		{ position: { lat: 55.728562, lng: 37.601387 }, title: "Парк Горького" },
		{ position: { lat: 55.782392, lng: 37.587454 }, title: "Московский зоопарк" }
	];

	// Добавляем маркеры для каждой локации
	locations.forEach((location, i) => {
		const marker = new google.maps.Marker({
			position: location.position,
			map: map,
			title: location.title,
			animation: google.maps.Animation.DROP,
			// Добавляем задержку для последовательного появления
			timeout: i * 200
		});
	});
}

const marker = new google.maps.Marker({
	position: location.position,
	map: map,
	title: location.title,
	// Простой вариант с URL
	icon: 'https://example.com/my-custom-pin.png',

	// Или более сложный вариант с настройкой размеров и привязки
	icon: {
		url: 'https://example.com/my-custom-pin.png',
		size: new google.maps.Size(32, 32),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(16, 32) // Точка, которой иконка "прикрепляется" к карте
	}
});


const parser = new DOMParser();
// A marker with a custom inline SVG.
const pinSvgString = '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none"><rect width="56" height="56" rx="28" fill="#7837FF"></rect><path d="M46.0675 22.1319L44.0601 22.7843" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.9402 33.2201L9.93262 33.8723" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.9999 47.0046V44.8933" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.9999 9V11.1113" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M39.1583 43.3597L37.9186 41.6532" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.8419 12.6442L18.0816 14.3506" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.93262 22.1319L11.9402 22.7843" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M46.0676 33.8724L44.0601 33.2201" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M39.1583 12.6442L37.9186 14.3506" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.8419 43.3597L18.0816 41.6532" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28 39L26.8725 37.9904C24.9292 36.226 23.325 34.7026 22.06 33.4202C20.795 32.1378 19.7867 30.9918 19.035 29.9823C18.2833 28.9727 17.7562 28.0587 17.4537 27.2401C17.1512 26.4216 17 25.5939 17 24.7572C17 23.1201 17.5546 21.7513 18.6638 20.6508C19.7729 19.5502 21.1433 19 22.775 19C23.82 19 24.7871 19.2456 25.6762 19.7367C26.5654 20.2278 27.34 20.9372 28 21.8649C28.77 20.8827 29.5858 20.1596 30.4475 19.6958C31.3092 19.2319 32.235 19 33.225 19C34.8567 19 36.2271 19.5502 37.3362 20.6508C38.4454 21.7513 39 23.1201 39 24.7572C39 25.5939 38.8488 26.4216 38.5463 27.2401C38.2438 28.0587 37.7167 28.9727 36.965 29.9823C36.2133 30.9918 35.205 32.1378 33.94 33.4202C32.675 34.7026 31.0708 36.226 29.1275 37.9904L28 39Z" fill="#FF7878"></path></svg>';
const pinSvg = parser.parseFromString(pinSvgString, 'image/svg+xml').documentElement;
const pinSvgMarker = new AdvancedMarkerElement({
	position: { lat: 37.42475, lng: -122.094 },
	title: 'A marker using a custom SVG image.',
	//@ts-ignore
	anchorLeft: '-50%',
	anchorTop: '-50%',
});
pinSvgMarker.append(pinSvg);
mapElement.append(pinSvgMarker);