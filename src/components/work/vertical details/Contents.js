import React from 'react';
import WorkListVertical from './WorkListVertical';
import PersonalListVertical from './PersonalListVertical';
import ReactListVertical from './ReactListVertical';
import HeaderList from './HeaderList';
const Contents = (props) => {
  const Switching = () => {
    let templete = null;
    switch (props.type) {
      case 'work':
        templete = <WorkListVertical {...props} />;
        break;
      case 'personal':
        templete = <PersonalListVertical {...props} />;
        break;
      case 'react':
        templete = <ReactListVertical {...props} />;
        break;
      case 'header':
        templete = <HeaderList {...props} />;
        break;
      default:
        templete = null;
    }
    return templete;
  };
  return <Switching />;
};

export default Contents;
