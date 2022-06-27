let promise = new Promise((res) => {
    setTimeout(() => {
        let arr = [
            {type: 'men', img: 'product_3', id: 'warm'},
            {type: 'men', img: 'product_4', id: 'bluse'},
            {type: 'women', img: 'product_5', id: 'nugger'},
            {type: 'women', img: 'product_1', id: 'pulover'},
            {type: 'women', img: 'product_3', id: 'je'},
            {type: 'kids', img: 'product_2', id: 'ddfdf'},
            {type: 'kids', img: 'product_2', id: 'wsdsds'},
            {type: 'home', img: 'product_1', id: '2122'},
            {type: 'home', img: 'product_3', id: 'wqqwq'},
            {type: 'home', img: 'product_2', id: '3342'},
            {type: 'men', img: 'product_2', id: 'qwqwer'},]
        res(arr)
    }, 1000)
  })
//   .then((arr) => this.items = arr)
export default (promise)