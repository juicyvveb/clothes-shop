import {app} from './firebase';
import {getDatabase, ref, set, onValue} from 'firebase/database';

const db = getDatabase(app);

export async function writeUserData(userId, {name, email}){
    await set(ref(db, 'users/' + userId + '/info'), {
        username: name,
        email
    })
    set(ref(db, 'users/' + userId + '/card'), {
        card: ['caaaard']
    })
}


const module = {
    actions: {
        async buildCard(context,uid){
            const card = ref(db, 'users/' + uid + '/card')
            onValue(card, (snapshot) => {
                context.commit('stateCard', snapshot.val())
          });
        }
    }
}
export {db, module}