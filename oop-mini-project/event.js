class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = [];
    }

    addAvailableTickets(ticketName, price) {
        let ticket = new TicketType(ticketName, price);
        this.availableTickets.push(ticket);
    }

    allTickets() {
        return this.toString(this.availableTickets, "All tickets");
    }

    searchTickets(lowerBound, upperBound) {
        let tickets = this.availableTickets.filter(ticket =>
            (ticket.price >= lowerBound) && (ticket.price <= upperBound));

        return (tickets.length < 1) ?
            "No tickets available" :
            this.toString(tickets, "Eligible Tickets");
    }

    toString(tickets, title) {
        let order = 1, displayTickets = `${title}: `;
        tickets.forEach((ticket) => {
            displayTickets += ` ${order}. ${ticket.name} $(${ticket.price})`;
            order++;
        });
        return displayTickets;
    }

}


class TicketType {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const eventObj1 = new Event("KLOS Golden Gala", "An evening with hollywood vampires");
const eventObj2 = new Event("Skillet & Sevendust", "Victorious war tour");
const eventObj3 = new Event("Jenny Lewis", "On the line tour 2019");
const eventArray = new Array();

eventArray.push(eventObj1, eventObj2, eventObj3);
console.log(eventArray);

eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);
console.log(eventObj1.availableTickets);

eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)

eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)

console.log(eventObj3.allTickets());

console.log(eventObj3.searchTickets(0, 250));
console.log(eventObj3.searchTickets(20, 50));
console.log(eventObj3.searchTickets(50, 50));



$(document).ready(function () {
    let html = "";
    $.each(eventArray, function (index, item) {
        html += `<li>${item.name} - ${item.description} - ${item.searchTickets(-20, 200)}`;
    });
    $("#event").html(html);
});

