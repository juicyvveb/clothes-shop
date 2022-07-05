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
        async login({dispatch, commit}, {email, password}){
        dispatch
        commit
            try {
                await signInWithEmailAndPassword(auth, email, password)
            }
            catch (e){ 
                throw new Error(e)
            }
        },
        change({dispatch, commit}){
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const uid = user.uid;
                    commit('stateUser', user);
                    dispatch('buildCard', uid)
                } else {
                    commit('stateUser', null);
                }
            });
        },
        register({dispatch, commit}, {email, password, name}){
            dispatch
            commit
            try {
                // await createUserWithEmailAndPassword(auth, email, password);
                // await updateProfile(auth.currentUser, {displayName: name})
                // let id = await dispatch('getUid');
                // writeUserData(id, {name, email})
                createUserWithEmailAndPassword(auth, email, password)
                .then(async userCredential => {
                    updateProfile(userCredential.user, {displayName: name});
                    let id = await dispatch('getUid');
                    writeUserData(id, {name, email})
                });                
            }
            catch (e){ 
                throw new Error(e)
            }
        },
        async logout({commit}){
            try {
                await signOut(auth);
                commit('stateUser', '');
            }
            catch(e){
                console.log('______' + e.message)
            }
        },
        getUid(){
            return auth.currentUser.uid ? auth.currentUser.uid : null
        }
    }
}