import React from 'react';
import Home from '../../components/Home/Home.js';
import Geography from '../../components/Geography/Geography.js';
import History from '../../components/History/History.js';
import Buildings from '../../components/Buildings/Buildings.js';
import Achievements from '../../components/Achievements/Achievements.js';
import Personalities from '../../components/Personalities/Personalities.js';
import Monuments from '../../components/Monuments/Monuments.js';
import Churches from '../../components/Churches/Churches.js';
import Schools from '../../components/Schools/Schools.js';
import Photos from '../../components/Photos/Photos.js';
import Authors from '../../components/Authors/Authors.js';

export default [
	{
		'id': 'navPointBut0',
		'name': 'Главная',
		'icon': 'home',
		'route': '',
		'component': () => <Home/>
	},
	{
		'id': 'navPointBut1',
		'name': 'География',
		'icon': 'compass',
		'route': 'geography',
		'component': () => <Geography/>
	},
	{
		'id': 'navPointBut2',
		'name': 'Общая история',
		'icon': 'feather',
		'route': 'history',
		'component': () => <History/>
		// 'component': 'History'
	},
	{
		'id': 'navPointBut3',
		'name': 'Здания',
		'icon': 'building',
		'route': 'buildings',
		'component': () => <Buildings/>
		// 'component': 'Buildings'
	},
	{
		'id': 'navPointBut4',
		'name': 'Достижения',
		'icon': 'trophy',
		'route': 'achievements',
		'component': () => <Achievements/>
		// 'component': 'Achievements'
	},
	{
		'id': 'navPointBut5',
		'name': 'Люди',
		'icon': 'user',
		'route': 'personalities',
		// 'route': 'personalities/:pers',
		'component': () => <Personalities/>
		// 'component': 'Personalities'
	},
	{
		'id': 'navPointBut6',
		'name': 'Памятники ',
		'icon': 'gavel',
		'route': 'monuments',
		'component': () => <Monuments/>
		// 'component': 'Monuments'
	},
	{
		'id': 'navPointBut7',
		'name': 'Храмы',
		'icon': 'church',
		'route': 'churches',
		'component': () => <Churches/>
		// 'component': 'Churches'
	},
	{
		'id': 'navPointBut8',
		'name': 'Школы и библиотеки',
		'icon': 'graduation-cap',
		'route': 'schools',
		'component': () => <Schools/>
		// 'component': 'Schools'
	},
	{
		'id': 'navPointBut9',
		'name': 'Фотоархивы ',
		'icon': 'camera-retro',
		'route': 'photos',
		'component': () => <Photos/>
		// 'component': 'Photos'
	},
	{
		'id': 'navPointBut10',
		'name': 'Об авторах',
		'icon': 'pen',
		'route': 'authors',
		'component': () => <Authors/>
		// 'component': 'Authors'
	}
]
