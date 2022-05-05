import React from "react";
import {getRequests, getRequestsSync} from './Api';

const Requests = () => {
  console.log('Sync Request Data: ', getRequestsSync())
  return <div>Your code will go here</div>;
};

export default Requests;
