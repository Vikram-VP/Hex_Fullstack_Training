/**
 * Create a function bookTickets(movieName,TicketCost)
 * console log " ticket booking for movieName in process, please wait for confirmation"
 * After 2 secs confirm tickets
 * define a callback to Confirm tickets
 * -- console log " bookking confirm for movieName",wait till me take you to payment screen
 * After 3 secs..
 * define callback to processTickets
 * console.log " payment confirm for ticketcost ,Enjoy the movie movieName"
 */

const booktickets=(movieName,payment,ticketCost,confirmation)=>
    {
        console.log(`ticket booking for ${movieName} in the process, pls wait for confirmation`);
        setTimeout(()=>confirmation(movieName,ticketCost,payment),2000);
    }
    const confirmTickets=(movieName,ticketCost,payment)=>{
        console.log(`booking is confirm for ${movieName}, wait till we take you to payment screen`);
        setTimeout(()=>payment(movieName,ticketCost),3000);
    }
    const payment=(movieName,ticketCost)=>
    {
        console.log(`payment confirm for ${ticketCost} , enjoy the movie ${movieName}`);
    }
    booktickets("SpiderMan",500,confirmTickets);