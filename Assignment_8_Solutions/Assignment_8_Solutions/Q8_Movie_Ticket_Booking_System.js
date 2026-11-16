// Q8. Movie Ticket Booking System (Inheritance + Prototype Chain)

class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

// Add printTicket() to MovieTicket.prototype.
// OnlineTicket objects can use it through the prototype chain.
MovieTicket.prototype.printTicket = function () {
    console.log("----- MOVIE TICKET -----");
    console.log("Movie:", this.movieName);
    console.log("Seat:", this.seatNo);
    console.log("Ticket price: Rs.", this.price);

    if (this.convenienceFee !== undefined) {
        console.log("Convenience fee: Rs.", this.convenienceFee);
        console.log("Total amount: Rs.", this.getTotalAmount());
    }

    console.log("------------------------");
}

const ticket1 = new OnlineTicket("The Adventure", "A12", 200, 25);
const ticket2 = new OnlineTicket("Space Journey", "B05", 250, 30);

ticket1.printTicket();
ticket2.printTicket();

console.log(
    "Prototype chain works:",
    MovieTicket.prototype.isPrototypeOf(ticket1)
);
