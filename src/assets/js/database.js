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
                console.log('change cart')
                context.commit('stateCard', snapshot.val())
          });
        }
    }
}


export function addProduct(uid, productId){
    const cartRef = ref(db, 'users/' + uid + '/card');
    const newProduct = push(cartRef);
    set(newProduct, productId)
}

export function deleteItem(uid, pid){
    const delRef = ref(db, 'users/' + uid + '/card/' + pid);
    remove(delRef)
}

export function clearCart(uid){
    const delRef = ref(db, 'users/' + uid + '/card');
    remove(delRef)
}

export {db, module}