import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import {
	faBriefcase,
	faPortrait,
	faUniversity,
} from '@fortawesome/free-solid-svg-icons';
const URL = 'http://bodhanshrestha.com.np';
const GITHUB = 'https://shrestha8050.github.io';
const TeamWorks = 'https://teammate-work.herokuapp.com/';
const expense = 'https://expense-tracker-44191.herokuapp.com/';
const ContentItems = [
	{
		type: 'react',
		title: 'Team Works',
		detail: {
			firstDetail: 'MERN Stack Application',
			secondDetail: null,
		},
		date: '2021',
		icon: faNodeJs,
		url: `${TeamWorks}`,
		align: 'left',
	},
	{
		type: 'react',
		title: 'Income Expense Tracker',
		detail: {
			firstDetail: 'MERN Stack Application',
			secondDetail: null,
		},
		date: '2020',
		icon: faNodeJs,
		url: `${expense}`,
		align: 'left',
	},
	{
		type: 'react',
		title: 'Calculator',
		detail: {
			firstDetail: 'React App',
			secondDetail: null,
		},
		date: '2020',
		icon: faReact,
		url: `${GITHUB}/calculator/`,
		align: 'right',
	},
	{
		type: 'react',
		title: 'Hangman Game',
		detail: {
			firstDetail: 'React App',
			secondDetail: null,
		},
		date: '2020',
		icon: faReact,
		url: `${GITHUB}/hangman/`,
		align: 'right',
	},
	{
		type: 'react',
		title: 'Movie App',
		detail: {
			firstDetail: 'React App',
			secondDetail: null,
		},
		date: '2020',
		icon: faReact,
		url: `${GITHUB}/Movie-Finder/#/`,
		align: 'right',
	},
	{
		type: 'react',
		title: 'Weather App',
		detail: {
			firstDetail: 'React App',
			secondDetail: null,
		},
		date: '2020',
		icon: faReact,
		url: `${GITHUB}/Weather/`,
		align: 'right',
	},
	{
		type: 'personal',
		title: 'Personal Website',
		detail: {
			firstDetail: 'Use of HTML , CSS , Javascript(React)',
			secondDetail: 'Creative Design, Visual Design, Project Management',
		},
		fontS: '30px',
		date: '2020 - present',
		icon: faPortrait,
		align: 'left',
		url: '/',
	},
	{
		type: 'header',
		title: 'Broadway projects',
		icon: faUniversity,
		spanTitle: 'Copyright Themes from themeforest',
		date: '2019 - 2020',
		align: 'right',
	},
	{
		type: 'work',
		title: 'E-Commerce',
		date: '2019 - 2020',
		icon: faUniversity,
		align: 'right',
		url: `${URL}/e-commerce`,
	},
	{
		type: 'work',
		title: 'Charity',
		date: '2019 - 2020',
		icon: faUniversity,
		align: 'right',
		url: `${URL}/charity`,
	},
	{
		type: 'work',
		title: 'NGO',
		date: '2019 - 2020',
		icon: faUniversity,
		align: 'right',
		url: `${URL}/ngo`,
	},
	{
		type: 'work',
		title: 'Corporate Site',
		date: '2019 - 2020',
		icon: faUniversity,
		align: 'right',
		url: `${URL}/travelo`,
	},
	{
		type: 'work',
		title: 'News',
		date: '2019 - 2020',
		icon: faUniversity,
		align: 'right',
		url: `${URL}/news`,
	},
	{
		type: 'work',
		title: 'Celebrity',
		date: '2019 - 2020',
		icon: faUniversity,
		align: 'right',
		url: `${URL}/burbank`,
	},
	{
		type: 'work',
		title: 'Travel Agency',
		date: '2019 - 2020',
		icon: faUniversity,
		align: 'right',
		url: `${URL}/travelo`,
	},
	{
		type: 'work',
		title: 'Corporate Site',
		date: '2019 - 2020',
		icon: faUniversity,
		align: 'right',
		url: `${URL}/trax`,
	},
	{
		type: 'personal',
		title: 'Personal Site',
		date: '2019 - 2020',
		icon: faPortrait,
		align: 'left',
		url: `${URL}/`,
	},
];

export default ContentItems;
