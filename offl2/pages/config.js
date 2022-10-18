

import PouchDB from 'pouchdb-react-native';
import PouchAuth from 'pouchdb-authentication';

const localDB = new PouchDB('docs');
//local divice sir helmy
//const remoteDB = new PouchDB('http://192.168.0.32:5984/docs', {skip_setup: true});
const remoteDB = new PouchDB('http://192.168.0.52:5984/docs', {skip_setup: true});
PouchDB.plugin(PouchAuth);

const syncStates = [
  'change',
  'paused',
  'active',
  'denied',
  'complete',
  'error',
];

remoteDB.login('admin', 'admin').then(function () {
  const sync = localDB.sync(remoteDB, {
    live: true,
    retry: true,
  });
  syncStates.forEach((state) => {
    sync.on(state, setCurrentState.bind(this, state));
    function setCurrentState(state) {
      console.log('[Sync:' + state + ']');
    }
  });
});

export default localDB;
