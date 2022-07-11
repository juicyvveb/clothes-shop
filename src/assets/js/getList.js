let promise = new Promise((res) => {
    setTimeout(() => {
        let arr = [
            {type: 'men', img: 'product_3', id: 'warm', price: 3.5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sunt.', color: 'black', title: 'Consectetur adipisicing elit'},
            {type: 'men', img: 'product_4', id: 'bluse', price: 3.5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sunt.', color: 'white', title: 'Consectetur adipisicing elit'},
            {type: 'women', img: 'product_3', id: 'nugger', price: 3.5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sunt.', color: 'black', title: 'Consectetur adipisicing elit'},
            {type: 'women', img: 'product_1', id: 'pulover', price: 3.5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sunt.', color: 'white', title: 'Consectetur adipisicing elit'},
            {type: 'women', img: 'product_3', id: 'je', price: 3.5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sunt.', color: 'white', title: 'Consectetur adipisicing elit'},
            {type: 'kids', img: 'product_2', id: 'ddfdf', price: 3.5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sunt.', color: 'black', title: 'Consectetur adipisicing elit'},
            {type: 'kids', img: 'product_2', id: 'wsdsds', price: 3.5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sunt.', color: 'red', title: 'Consectetur adipisicing elit'},
            {type: 'home', img: 'product_1', id: '2122', price: 3.5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sunt.', color: 'black', title: 'Consectetur adipisicing elit'},
            {type: 'home', img: 'product_3', id: 'wqqwq', price: 3.5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sunt.', color: 'red', title: 'Consectetur adipisicing elit'},
            {type: 'home', img: 'product_2', id: '3342', price: 3.5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sunt.', color: 'red', title: 'Consectetur adipisicing elit'},
            {type: 'men', img: 'product_2', id: 'qwqwer', price: 3.5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sunt.', color: 'black', title: 'Consectetur adipisicing elit'},]
        res(arr)
    }, 1000)
  })
export default (promise)