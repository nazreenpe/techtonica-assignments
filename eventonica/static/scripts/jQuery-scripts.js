$(document).ready(() => {
    const eventRecommender = new EventRecommender();
    let displayUsersHtml = '';
    let displayEventsHtml = '';
    let displayEventsByDateHtml = '';

    $("#add-user").submit(function (e) {
        let fName = $("#add-first-name").val();
        let lName = $("#add-last-name").val();
        let password = $("#add-password").val();
        let user = new User(fName, lName, password);
        eventRecommender.addUser(user);
        displayUsersHtml += `<li id="${user.uId}">Name: ${user.name} Id: ${user.uId}</li>`;
        $("#all-users").html(displayUsersHtml);
        e.preventDefault();
        this.reset();
    });

    $("#delete-user").submit(function(e) {
        let id = $("#delete-user-id").val();
        let password = $("#delete-password").val();
        if (eventRecommender.deleteUser(id, password)) {
           $(`li#${id}`).remove();
           $("#error-message").remove();
        } else {
            $("#error-message").text("Please enter a valid userID and password");
        }
        e.preventDefault();
        this.reset();
    })

    $("#add-event").submit(function (e) { 
        let name = $("#add-event-name").val();
        let date = $("#add-event-date").val();
        let category = $("#add-category").val();
        let event = new Event(name, date, category);
        eventRecommender.addEvent(event);
        displayEventsHtml += `<li id="${event.eId}">Name: ${event.eventName}
            Date: ${event.date} Category: ${event.category} Id: ${event.eId}</li>`;
        $("#all-events").html(displayEventsHtml);
        e.preventDefault();
        this.reset();
    });

     $("#delete-event").submit(function(e) {
        let id = $("#delete-event-id").val();
        if (eventRecommender.deleteEvent(id)) {
           $(`li#${id}`).remove();
           $("#error-message").remove();
        } else {
            $("#delete-event-error").text("Please enter a valid eventID");
        }
        e.preventDefault();
        this.reset();
    })

    $("#date-search").submit(function (e) { 
        let date = $("$date-search-id").val();
        let events = eventRecommender.findEventsByDate(date);
        if ( events.length > 1) {
            for (const event of events) {
                displayEventsByDateHtml += `<li id="${event.eId}">
                Name: ${event.eventName}
                Date: ${event.date} 
                Category: ${event.category} 
                Id: ${event.eId}</li>`;
            }
            $("events-by-date").html(displayEventsByDateHtml);
        } 
        e.preventDefault();
        
    });
    
})