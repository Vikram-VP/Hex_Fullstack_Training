const dbConnect=require('./dbconfig');
const mongoose=require('mongoose');
const Book=require('./bookstore');

const addbook=async()=>{
    try{
        await dbConnect();
        let bookrec1={
            title:'Wings of Fire',
            author:'APJ Abdul Kalam',
            price:500
            }
        const bookObj= new Book(bookrec1);
        await bookObj.save();
        }
    catch(err){
        console.log(err);
    }
    finally{
        await mongoose.connection.close();
        console.log("DB connection closed")
    }
}

const fetchallbooks=async()=>{
    try{
    await dbConnect();
    const allbooksArray=await Book.find();
    allbooksArray.forEach((b)=>console.log(b));
    }
    catch(err){
        console.log(err);
    }
    finally{
        await mongoose.connection.close();
        console.log("DB connection closed")
    }
}

const fetchbookbytitle=async(title)=>{
    try{
        await dbConnect();
        const book=await Book.findOne({'title':title})
        if(!book)
            console.log("Book not found");
        else
            console.log(book);
    }
    catch(err){
        console.log(err);
    }
    finally{
        await mongoose.connection.close();
        console.log("DB connection closed")
    }
}

const fetchbookybyauthor=async(author)=>{
    try{
        await dbConnect();
        const book=await Book.findOne({'author':author})
        if(!book)
            console.log("Book of the author not found");
        else
            console.log(book);
    }
    catch(err){
        console.log(err);
    }
    finally{
        await mongoose.connection.close();
        console.log("DB connection closed")
    }

}

const deletebookbyid=async(bookid)=>{
    try{
        await dbConnect();
        const res=await Book.deleteOne({'_id':bookid})
        //console.log(res);
        if(res.deletedCount===0)
            console.log("Book not found");
        else
            console.log("Book deleted");
    }
    catch(err){
        console.log(err);
    }
    finally{
        await mongoose.connection.close();
        console.log("DB connection closed")
    }
}

const sortfiltermap = async () => {
    try {
        await dbConnect();
        //fetching all books
        let allbooksArray = await Book.find();
        // filtering the books with price > 300
        let filteredBooks = allbooksArray.filter(book => book.price > 300);
        // sorting the books by price(decending order)
        let sortedBooks = filteredBooks.sort((a, b) => b.price - a.price);
        // mapping the books to the title and author
        let mappedBooks = sortedBooks.map(book => ({
            title: book.title,
            author: book.author
        }));

        console.log(" Books with Price > ₹300 (Sorted by Price):");
        mappedBooks.forEach(book => console.log(`- ${book.title} by ${book.author}`));

    } catch (err) {
        console.log(err);
    } finally {
        await mongoose.connection.close();
        console.log("DB connection closed");
    }
};



//addbook();
//fetchallbooks();
//fetchbookbytitle('Alchemist');
//fetchbookybyauthor('Paulo Coelho');
//deletebookbyid('67b5c2054124caade3f06f90');
sortfiltermap();

