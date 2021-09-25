import React from 'react';
import WorkContents from '../../Widgets/WorkContentsMagnifier';
import expense from '../../assets/img/appImg/expenseTracker.png';
import workTrackerImg from '../../assets/img/appImg/team.png';
import ToTop from '../../Helper/ToTop';
const expenseTracker = 'https://expense-tracker-44191.herokuapp.com/';
const workTracker = 'https://teammate-work.herokuapp.com/';

const MernProject = () => {
	return (
		<div className='reactProject'>
			<h1>MERN STACK Projects</h1>
			<WorkContents
				title='Income Expense Tracker'
				bg={expense}
				url={`${expenseTracker}`}
				detail='This the Income Expense Tracker App Used to Track the income/ expense cost and calculate Total Cost'
				left={true}
				right={true}
			/>

			<WorkContents
				title='Team Works'
				bg={workTrackerImg}
				url={`${workTracker}`}
				detail='This the TeamWork Tracker App Used to Track the Work of the Teammate with different role view'
				left={false}
				right={false}
				margin={140}
			/>

			<ToTop />
		</div>
	);
};

export default MernProject;
