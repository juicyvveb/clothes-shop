import {app} from './firebase';
import {getDatabase, ref, set, onValue, push, remove} from 'firebase/database';

const db = getDatabase(app);

export async function writeUserData(userId, {name, email}){
    await set(ref(db, 'users/' + userId + '/info'), {
        username: name,
        email
    })
    set(ref(db, 'users/' + userId + '/cart'), {
        cart: []
    })
}


const module = {
    actions: {
        async buildCart(context,uid){
            const cart = ref(db, 'users/' + uid + '/cart')
            onValue(cart, (snapshot) => {
                return uid ? context.commit('stateCart', snapshot.val()) : context.commit('stateCart', null) 
            })
        }
        
    }
}


export  function addProduct(uid, productId, size){
    if(!uid){
        return 
    }
    const cartRef = ref(db, 'users/' + uid + '/cart');
    const newProduct = push(cartRef);
    set(newProduct, {productId: productId, count: size.length ? size.length : 1, size: size})
    .then(res => console.log(res),
        e => console.log(`erorrrrrr^ ${e}`)
    )
}

export function deleteItem(uid, pid){
    const delRef = ref(db, 'users/' + uid + '/cart/' + pid);
    remove(delRef)
}

export function clearCart(uid){
    const delRef = ref(db, 'users/' + uid + '/cart');
    remove(delRef)
}

export function plusItem(uid, pid, id, newCount){
    const plusRef = ref(db, 'users/' + uid + '/cart/' + pid );
    set(plusRef, {productId: id, count: newCount})
}

export {db, module}