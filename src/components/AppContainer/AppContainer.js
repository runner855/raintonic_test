import React from 'react';
import UserElement from '../UserElement/UserElement';

const AppContainer = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <ul>
            <UserElement item={item} />
          </ul>
        )
      })}
    </div>)
}

export default AppContainer;