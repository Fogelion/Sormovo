import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import jsonp from "jsonp";
import {streets} from './Listing';
import './Buildings.css';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

export default class BuildingsStreet extends Component {
	state = {
		jsonResult: [],
		street: '',
		jsonFull: false,
		position: [],
		maps: [],
	};
	componentDidMount() {
		let streetId = this.props.match.url.split('/')[2];
		let url = 'https://kladr-api.ru/api.php' +
			'&streetId=' + streetId +
			'&contentType=building' +
			'&limit=100' +
			'&withParent=1';
		this.getBuildings(url);

	}
	getBuildings = (url) => {
		jsonp(url, null, (err, data) => {
			if (err) {
				console.error(err.message);
			} else {
				if (data.result.length >= 1) {
					this.setState({
						jsonResult: data.result,
						street: data.result[0].parents[2],
						jsonFull: true
					});
				} else {
					this.setState({
						jsonFull: false
					});
				}

			}
		});
	};
	getCord = (url, name, nameReverse) => {
		jsonp(url, null, (err, data) => {
			if (err) {
				console.error(err.message);
			} else {
				let search, serchFiltStreet, serchFiltCity, serchFiltName, serchFilt;
				search = data.response.GeoObjectCollection.featureMember;
				serchFiltStreet = search.filter(el => el.GeoObject.metaDataProperty.GeocoderMetaData.kind === 'street');
				serchFiltCity = serchFiltStreet.filter(el =>
					el.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components[4].name === 'Нижний Новгород');
				if (serchFiltCity.length >= 2) {
					serchFiltName = serchFiltCity.filter(el =>
						(el.GeoObject.name === name || el.GeoObject.name === nameReverse));
				} else serchFiltName = serchFiltCity;
				serchFilt = serchFiltName;
				if (serchFilt.length >= 1 && serchFilt !== this.state.maps) {
					this.setState({
						maps: serchFilt
					});
				}
			}
		});
	};
	replace = (arr) => {
		let cent = arr[0].GeoObject.Point.pos.split(' ');
		let pos = [+cent[1], +cent[0]];
		return pos;
	};
	remark = (arr) => {
		let cent = arr.split(' ');
		let pos = [+cent[1], +cent[0]];
		return pos;
	};



	render() {
		let Title, Houses;
		const StreetChosen = streets.find(el => el.id === this.props.match.url.split('/')[2]);
		if (typeof StreetChosen !== 'undefined') {
			Title = <h2 className="BuildingInfoPageTitle">
				{StreetChosen.name} {StreetChosen.type.toLowerCase()}
				</h2>;
		} else {
			Title = <Redirect from={this.props.match.url} to="/404" />;
		}
		if (this.state.jsonFull) {
			Houses = this.state.jsonResult.map((el, ind) => {
				return (<p key={el.id + ind}>{el.typeShort}. №{el.name}, инд.:{el.zip}</p>)
			});
		}

		let mapState = {
			center: [56.33, 44.01],
			zoom: 16,
			controls: ['zoomControl', 'fullscreenControl'],
		};
		let line = {
			start: [55.76, 37.64],
			end: [55.76, 37.64]
		};

		if (this.state.maps.length < 1) {
			let name = `${StreetChosen.name} ${StreetChosen.type.toLowerCase()}`;
			let nameReverse = `${StreetChosen.type.toLowerCase()} ${StreetChosen.name}`;
			let query = `Нижний Новгород Сормовский район ${name}`;
			let cor = 'https://geocode-maps.yandex.ru/1.x/?format=json&apikey=c1fbe8eb-9281-46ea-bc1d-90adb3800dc0&' +
				'geocode=' + query;
			this.getCord(cor, name, nameReverse);
		}
		if (this.state.maps.length === 1) {
			line.start = this.remark(this.state.maps[0].GeoObject.boundedBy.Envelope.lowerCorner);
			line.end = this.remark(this.state.maps[0].GeoObject.boundedBy.Envelope.upperCorner);
			mapState.center=this.replace(this.state.maps);
		} else if (this.state.maps.length >= 1) {
			console.log('ERROR');
			console.log(this.state.maps);
		}



		return (
			<div className="BuildingInfoPage">
				{Title}
				<section className="BuildingInfoPageMap">
					<YMaps><Map
						width={800}
						height={400}
						state={mapState}
						modules={[
							'control.ZoomControl',
							'control.FullscreenControl']}
						onClick={this.handleClick}
					>
						<Placemark geometry={mapState.center} />
					</Map></YMaps>
				</section>
				<section className="BuildingInfoPageHouses">
					{Houses}
				</section>
			</div>
		);
	}
}
