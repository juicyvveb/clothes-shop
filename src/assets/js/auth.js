import {app} from './firebase';

import {
    signInWithEmailAndPassword,
    onAuthStateChanged, 
    getAuth,
    signOut,
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth";


import { writeUserData } from './database';
const auth = getAuth(app);

export default{
    actions: {
        async login({commit}, {email, password}){
            try {
                await signInWithEmailAndPassword(auth, email, password)
            }
             catch (e){ 
                commit('stateError', e.code)
                throw e
            }
        },
        change({dispatch, commit}){
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const uid = user.uid;
                    commit('stateUser', user);
                    dispatch('buildCart', uid)
                } else {
                    commit('stateUser', null);
                    dispatch('buildCart', null)
                }
            });
        },
        register({dispatch, commit}, {email, password, name}){
            dispatch
            commit
                // await createUserWithEmailAndPassword(auth, email, password);
                // await updateProfile(auth.currentUser, {displayName: name})
                // let id = await dispatch('getUid');
                // writeUserData(id, {name, email})
                return createUserWithEmailAndPassword(auth, email, password)
                .then(async userCredential => {
                    updateProfile(userCredential.user, {displayName: name});
                    let id = await dispatch('getUid');
                    writeUserData(id, {name, email})
                },
                e => {
                    commit('stateError', e.code)
                    throw e
                });                
        },
        async logout({commit}){
            try {
                await signOut(auth);
                commit('stateError', 'logout')
            }
            catch(e){
                commit('stateError', e.code)
                throw e
            }
        },
        getUid(){
            return auth.currentUser ? auth.currentUser.uid : null
        }
    }
}