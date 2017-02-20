// import store from './../../store';

// When the request succeeds
// const success = (account) => {
//   account = accountTransformer.fetch(account);

//   store.dispatch('getAccount', account);
// };


import Web3 from 'web3';
import contract from 'truffle-contract';
import dropNoticeArtifacts from './contracts/DropNotice.json';

const TESTRPC_HOST = 'localhost';
const TESTRPC_PORT = '8545';

const provider = new Web3.providers.HttpProvider(`http://${TESTRPC_HOST}:${TESTRPC_PORT}`);
const DropNotice = contract(dropNoticeArtifacts);
DropNotice.setProvider(provider);

export default () => {
  const self = this;

  return DropNotice.deployed().then((instance) => {
    console.log("Return");
    const meta = instance;
    // return 'start';
    return meta.getDropNotice.call();
  }).then((value) => {
    console.log(value);
    return value;
    // let balance_element = document.getElementById("balance");
    // balance_element.innerHTML = value.valueOf();
  }).catch((e) => {
    console.log(e);
    return e;
  });
};


/*
 * Normally you would perform an AJAX-request.
 * But to get the example working, the data is hardcoded.
 *
 * With the include REST-client Axios, you can do something like this:
 * Vue.$http.get('/account')
 *   .then((response) => {
 *     success(response);
 *   })
 *   .catch((error) => {
 *     failed(error);
 *   });
 */


// When the request fails
// const failed = () => {};

//   const succeeds = true;

//   if (succeeds) {
//     success({
//       first_name: 'John',
//       last_name: 'Doe',
//       email: 'john@doe.com',
//     });
//   } else {
//     failed();
//   }
// };
