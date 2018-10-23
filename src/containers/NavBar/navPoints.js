import React from 'react';
import Home from '../../components/Home/Home.js';
import Geography from '../../components/Geography/Geography.js';
import History from '../../components/History/History.js';
import Buildings from '../../components/Buildings/Buildings.js';
import Achievements from '../../components/Achievements/Achievements.js';
import Personalities from '../../components/Personalities/Personalities.js';
import PersonalInfo from "../../components/Personalities/PersonalInfo";
import PersonalTest from "../../components/Personalities/PersonalTest";
import Monuments from '../../components/Monuments/Monuments.js';
import Churches from '../../components/Churches/Churches.js';
import Schools from '../../components/Schools/Schools.js';
import Photos from '../../components/Photos/Photos.js';
import Authors from '../../components/Authors/Authors.js';

export default [
	{
		'id': 'navPointBut0',
		'forNavBar': true,
		'name': 'Главная',
		'icon': 'home',
		'route': '/',
		'component': () => <Home/>,
		'componentName': <Home/>
	},
	{
		'id': 'navPointBut100',
		'forNavBar': true,
		'name': 'География',
		'icon': 'compass',
		'route': '/geography',
		'component': () => <Geography/>,
		'componentName': <Geography/>
	},
	{
		'id': 'navPointBut200',
		'forNavBar': true,
		'name': 'Общая история',
		'icon': 'feather',
		'route': '/history',
		'component': () => <History/>,
		'componentName': <History/>
		// 'component': 'History'
	},
	{
		'id': 'navPointBut300',
		'forNavBar': true,
		'name': 'Здания',
		'icon': 'building',
		'route': '/buildings',
		'component': () => <Buildings/>,
		'componentName': <Buildings/>
		// 'component': 'Buildings'
	},
	{
		'id': 'navPointBut400',
		'forNavBar': true,
		'name': 'Достижения',
		'icon': 'trophy',
		'route': '/achievements',
		'component': () => <Achievements/>,
		'componentName': <Achievements/>
		// 'component': 'Achievements'
	},
	{
		'id': 'navPointBut500',
		'forNavBar': true,
		'name': 'Люди',
		'icon': 'user',
		'params': '/personalities',
		'route': '/personalities',
		'component': () => <Personalities/>,
		'componentName': <Personalities/>,
	},
	{
		'id': 'navPointBut510',
		'name': 'Люди',
		'params': '/:pers',
		'route': '/personalities/:pers',
		'component': () => <PersonalInfo/>,
		'componentName': <PersonalInfo/>,
	},
	{
		'id': 'navPointBut511',
		'name': 'Люди',
		'params': '/:test',
		'route': '/personalities/:pers/:test',
		'componentName': <PersonalTest/>
	},
	{
		'id': 'navPointBut600',
		'forNavBar': true,
		'name': 'Памятники ',
		'icon': 'gavel',
		'route': '/monuments',
		'component': () => <Monuments/>,
		'componentName': <Monuments/>
		// 'component': 'Monuments'
	},
	{
		'id': 'navPointBut700',
		'forNavBar': true,
		'name': 'Храмы',
		'icon': 'church',
		'route': '/churches',
		'component': () => <Churches/>,
		'componentName': <Churches/>
		// 'component': 'Churches'
	},
	{
		'id': 'navPointBut800',
		'forNavBar': true,
		'name': 'Школы и библиотеки',
		'icon': 'graduation-cap',
		'route': '/schools',
		'component': () => <Schools/>,
		'componentName': <Schools/>
		// 'component': 'Schools'
	},
	{
		'id': 'navPointBut900',
		'forNavBar': true,
		'name': 'Фотоархивы ',
		'icon': 'camera-retro',
		'route': '/photos',
		'component': () => <Photos/>,
		'componentName': <Photos/>
		// 'component': 'Photos'
	},
	{
		'id': 'navPointBut1000',
		'forNavBar': true,
		'name': 'Об авторах',
		'icon': 'pen',
		'route': '/authors',
		'component': () => <Authors/>,
		'componentName': <Authors/>
		// 'component': 'Authors'
	}
]
