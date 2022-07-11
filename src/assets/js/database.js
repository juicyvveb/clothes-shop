import {app} from './firebase';
import {getDatabase, ref, set, onValue, push, remove} from 'firebase/database';

const db = getDatabase(app);

export async function writeUserData(userId, {name, email}){
    await set(ref(db, 'users/' + userId + '/info'), {
        username: name,
        email
    })
    set(ref(db, 'users/' + userId + '/card'), {
        card: []
    })
}


const module = {
    actions: {
        async buildCard(context,uid){
            const card = ref(db, 'users/' + uid + '/card')
            onValue(card, (snapshot) => {
                
                return uid ? context.commit('stateCard', snapshot.val()) : context.commit('stateCard', null) 
          });
        }
    }
}


export  function addProduct(uid, productId, size){
    if(!uid){
        return 
    }
    const cartRef = ref(db, 'users/' + uid + '/card');
    const newProduct = push(cartRef);
    set(newProduct, {productId: productId, count: size.length, size: size})
}

export function deleteItem(uid, pid){
    const delRef = ref(db, 'users/' + uid + '/card/' + pid);
    remove(delRef)
}

export function clearCart(uid){
    const delRef = ref(db, 'users/' + uid + '/card');
    remove(delRef)
}

export function plusItem(uid, pid, id, newCount){
    const plusRef = ref(db, 'users/' + uid + '/card/' + pid );
    set(plusRef, {productId: id, count: newCount})
}

export {db, module}