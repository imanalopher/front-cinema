import React from 'react';

const Tab = ({ active, children, onClick }) => <li onClick={onClick}>
  <a className={active ? 'active' : ''}  href="javascript:void(0);">{children}</a>
</li>;

export default Tab;
