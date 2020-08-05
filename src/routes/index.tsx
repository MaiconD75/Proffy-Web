import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Landing from '../pages/Landing/index';
import TeacherList from '../pages/TeacherList/index';
import TeacherForm from '../pages/TeacherForm/index';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing}/>
      <Route path="/study" component={TeacherList}/>
      <Route path="/give-classes" component={TeacherForm}/>
      <Route path="/*" component={() => <Redirect to="/"/>}/>
    </Switch>
  );
}

export default Routes;
