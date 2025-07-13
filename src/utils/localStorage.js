

const getReadBooksFromLS = () => {
    const getBooks = localStorage.getItem('read')
    if(getBooks){
        return JSON.parse(getBooks)
    }
    return []
}

const getWishlistBooksFromLS = () => {
    const getBooks = localStorage.getItem('wishlist')
    if(getBooks){
        return JSON.parse(getBooks)
    }
    return []
}

const saveReadBooksToLS = id =>{
    const books = getReadBooksFromLS()
    const exist = books.find(bookId => bookId === id)
    if(!exist){
        books.push(id)
    }
    localStorage.setItem('read', JSON.stringify(books))
}
const saveWishlistsBooksToLS = id =>{
    const wishlist = getWishlistBooksFromLS()
    const exist = wishlist.find(bookId => bookId === id)
    if(!exist){
        wishlist.push(id)
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
}


export {getReadBooksFromLS, getWishlistBooksFromLS, saveReadBooksToLS, saveWishlistsBooksToLS}