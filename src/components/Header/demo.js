// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
// import FullNav from './FullNav';
// import { CSSTransition } from 'react-transition-group';

// const HeaderContent = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <div className='left'>
//         <NavLink to='/' onClick={() => {}}>
//           <FontAwesomeIcon icon={faHome} className='homeBTN' />
//         </NavLink>
//       </div>

//       <div className='right'>
//         <FontAwesomeIcon
//           icon={faBars}
//           style={{
//             fontSize: '30px',
//           }}
//           onClick={() => {
//             setIsOpen(true);
//             document.body.style.overflowY = 'hidden';
//           }}
//         />

//         <CSSTransition in={isOpen} unmountOnExit timeout={300} classNames='nav'>
//           <FullNav
//             open={isOpen}
//             close={() => {
//               setIsOpen(false);
//               document.body.style.overflowY = 'scroll';
//             }}
//           >
//             <ul className='nav_Links'>
//               <li>
//                 <NavLink
//                   to='/'
//                   onClick={() => {
//                     setIsOpen(false);
//                   }}
//                   className='homeLink'
//                 >
//                   Home
//                   <span></span>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to='/Work'
//                   onClick={() => {
//                     setIsOpen(false);
//                   }}
//                   className='workLink'
//                 >
//                   Work
//                   <span></span>
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink
//                   to='/about'
//                   onClick={() => {
//                     setIsOpen(false);
//                   }}
//                   className='aboutLink'
//                 >
//                   About
//                   <span></span>
//                 </NavLink>
//               </li>
//             </ul>
//           </FullNav>
//         </CSSTransition>
//       </div>
//     </>
//   );
// };

// export default HeaderContent;

// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
// const HeaderContent = () => {
//   const [work, setWork] = useState(true);
//   const [about, setAbout] = useState(true);
//   const [middleContent, setMiddleContent] = useState(false);
//   return (
//     <>
//       <div className='left'>
//         <NavLink
//           to='/'
//           onClick={() => {
//             setWork(true);
//             setAbout(true);
//             setMiddleContent(false);
//           }}
//         >
//           <FontAwesomeIcon icon={faHome} className='homeBTN' />
//           <div className='nameFlowDiv'>
//             <div className='nameFlow'>
//               <span>Bodhan</span> <span>Shrestha</span>
//             </div>
//           </div>
//         </NavLink>
//       </div>
//       <div className='middle'>
//         <ul
//           className={
//             middleContent ? 'activeMiddleContent' : 'hiddenMiddleContent'
//           }
//         >
//           {about ? (
//             <li>
//               <NavLink
//                 to='/Work'
//                 onClick={() => {
//                   setWork(false);
//                   setAbout(true);
//                   setMiddleContent(true);
//                 }}
//               >
//                 Work
//               </NavLink>
//             </li>
//           ) : null}
//         </ul>
//       </div>
//       <div className='right'>
//         <ul>
//           {work ? (
//             <li>
//               <NavLink
//                 to='/Work'
//                 onClick={() => {
//                   setWork(false);
//                   setAbout(true);
//                   setMiddleContent(true);
//                 }}
//               >
//                 Work
//                 <span></span>
//               </NavLink>
//             </li>
//           ) : null}
//           {about ? (
//             <li>
//               <NavLink
//                 to='/about'
//                 onClick={() => {
//                   setWork(true);
//                   setAbout(false);
//                   setMiddleContent(true);
//                 }}
//               >
//                 About
//                 <span></span>
//               </NavLink>
//             </li>
//           ) : null}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default HeaderContent;
