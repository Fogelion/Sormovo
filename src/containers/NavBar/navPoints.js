import React from 'react';
import Home from '../../components/Pages/Home/Home.js';
import Geography from '../../components/Pages/Geography/Geography.js';
import History from '../../components/Pages/History/History.js';
import Buildings from '../../components/Pages/Buildings/Buildings.js';
import Achievements from '../../components/Pages/Achievements/Achievements.js';
import Personalities from '../../components/Pages/Personalities/Personalities.js';
import PersonalInfo from "../../components/Pages/Personalities/PersonalInfo";
import PersonalTest from "../../components/Pages/Personalities/PersonalTest";
import Monuments from '../../components/Pages/Monuments/Monuments.js';
import Churches from '../../components/Pages/Churches/Churches.js';
import Schools from '../../components/Pages/Schools/Schools.js';
import Photos from '../../components/Pages/Photos/Photos.js';
import Authors from '../../components/Pages/Authors/Authors.js';
import NotFound from '../../components/Pages/NotFound/NotFound.js';

export default [
	{
		'id': 'navPointBut0',
		'forNavBar': true,
		'name': 'Главная',
		'icon': 'home',
		'route': '/',
		'componentName': <Home/>
	},
	{
		'id': 'navPointBut100',
		'forNavBar': true,
		'name': 'География',
		'icon': 'compass',
		'route': '/geography',
		'componentName': <Geography/>
	},
	{
		'id': 'navPointBut200',
		'forNavBar': true,
		'name': 'Общая история',
		'icon': 'feather',
		'route': '/history',
		'componentName': <History/>
	},
	{
		'id': 'navPointBut300',
		'forNavBar': true,
		'name': 'Здания',
		'icon': 'building',
		'route': '/buildings',
		'componentName': <Buildings/>
	},
	{
		'id': 'navPointBut400',
		'forNavBar': true,
		'name': 'Достижения',
		'icon': 'trophy',
		'route': '/achievements',
		'componentName': <Achievements/>
	},
	{
		'id': 'navPointBut500',
		'forNavBar': true,
		'name': 'Люди',
		'icon': 'user',
		'params': '/personalities',
		'route': '/personalities',
		'componentName': <Personalities/>,
	},
	{
		'id': 'navPointBut510',
		'forNavBar': false,
		'name': 'Люди',
		'params': '/:pers',
		'route': '/personalities/:pers',
		'componentName': <PersonalInfo/>,
	},
	{
		'id': 'navPointBut511',
		'name': 'Люди',
		'forNavBar': false,
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
		'componentName': <Monuments/>
	},
	{
		'id': 'navPointBut700',
		'forNavBar': true,
		'name': 'Храмы',
		'icon': 'church',
		'route': '/churches',
		'componentName': <Churches/>
	},
	{
		'id': 'navPointBut800',
		'forNavBar': true,
		'name': 'Школы и библиотеки',
		'icon': 'graduation-cap',
		'route': '/schools',
		'componentName': <Schools/>
	},
	{
		'id': 'navPointBut900',
		'forNavBar': true,
		'name': 'Фотоархивы ',
		'icon': 'camera-retro',
		'route': '/photos',
		'componentName': <Photos/>
	},
	{
		'id': 'navPointBut1000',
		'forNavBar': true,
		'name': 'Об авторах',
		'icon': 'pen',
		'route': '/authors',
		'componentName': <Authors/>
	},
	{
		'id': 'navPointBut1100',
		'forNavBar': false,
		'name': '404',
		'route': '*',
		'componentName': <NotFound />
	}
]
