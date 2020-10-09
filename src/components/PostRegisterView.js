import { Box } from "@material-ui/core";
import React from "react";

// import Section from '../components/Section'

export default function PostRegisterView(props) {
  const { setFlow, store } = props;

  let apiKey = store.apiKey || "JUS0cbd35263ad84257bcd4c5c32bdbb8f1";
  let orgId = store.orgId || "JUS0cbd35263ad84257bcd4c5c32bdbb8f1";

  let codeStr = (key) => (`
  $ curl --location --request POST 'http://localhost:8081/v3/loan/triggerLoanAcceptanceRequest'
  --header 'Content-Type: application/json' 
  --header 'apiKey: ${key}' 
  --data-raw '{
     "metadata": {
         "version": "1.0",
         "timestamp": "2018-12-06T11:39:57.153Z",
         "traceId": "e8cc6822bd4bbb4eb1b9e1b4996fbff8acb",
         "orgId": "${orgId}"
     },
     "requestId": "t8cc6822bd4bbb4eb1b9e1b4996fbff8acb",
     "loanApplicationIds": [
         "e8cc6822bd4bbb4eb1b9e1b4996fbff8acb"
     ],
     "credBlock": {
         "type": "OTP",
         "data": {
             "appToken": "0aBCD7DMr7s"
         }
     }
  }
  '
  `);

  return <Box p={4}>
    <div class="jumbotron">
      <h3 class="display-6">Registration Successful!</h3>
      <h5 class="display-6">Your api key is : {apiKey}</h5>
      <hr class="my-4"></hr>
      <h4>Sample usecase</h4>
        <Box fontFamily="Monospace" whiteSpace="normal">
          {codeStr(apiKey)}
        </Box>
    </div>
    </Box>;
};
