$(document).ready(() => {
    const eventRecommender = new EventRecommender();
 
    function refreshUsers(elementId) {
        let htmlInput = "";
        $.each(eventRecommender.users, (userId) => {
            let user = eventRecommender.users[userId];
            htmlInput += `<li id="${user.uId}">Name: ${user.name} Id: ${user.uId}</li>`;
        })
        $(`#${elementId}`).html(htmlInput);
    }

    function refreshEvents(elementId) {
        let htmlInput = "";
        $.each(eventRecommender.events, (eventID) => {
            let event = eventRecommender.events[eventID];
            htmlInput += `<li id="${event.eId}">Name: ${event.eventName} Date: ${event.date} Category: ${event.category} Id: ${event.eId}</li>`;
        })
        $(`#${elementId}`).html(htmlInput);
    }

    $("#add-user").submit(function (e) {
        let fName = $("#add-first-name").val();
        let lName = $("#add-last-name").val();
        let password = $("#add-password").val();
        let user = new User(fName, lName, password);
        eventRecommender.addUser(user);
        refreshUsers("all-users");
        e.preventDefault();
        this.reset();
    });

    $("#delete-user").submit(function(e) {
        let id = $("#delete-user-id").val();
        let password = $("#delete-password").val();
        if (eventRecommender.deleteUser(id, password)) {
          refreshUsers("all-users");
          $("#user-error-message").remove();
        } else {
            $("#user-error-message").text("Please enter a valid userID and password");
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
        refreshEvents("all-events")
        e.preventDefault();
        this.reset();
    });

     $("#delete-event").submit(function(e) {
        let id = $("#delete-event-id").val();
        if (eventRecommender.deleteEvent(id)) {
            refreshEvents("all-events")
           $("#delete-event-error").remove();
        } else {
            $("#delete-event-error").text("Please enter a valid eventID");
        }
        e.preventDefault();
        this.reset();
    })

    $("#date-search").submit(function (e) { 
        let date = $("#date-search-id").val();
        let events = eventRecommender.findEventsByDate(date);
        let displayEventsByDateHtml = "";
        for (const event of events) {
            displayEventsByDateHtml += `<li id="${event.eId}"> Name: ${event.eventName} Date: ${event.date} Category: ${event.category} Id: ${event.eId}</li>`;
        }
        $("#events-by-date").html(displayEventsByDateHtml);
        
        e.preventDefault();
    });
    
    $("#category-search").submit(function (e) { 
        let category = $("#category-search-id").val();
        let events = eventRecommender.findEventsByCategory(category);
        let displayEventsByDateHtml = "";
        for (const event of events) {
            displayEventsByDateHtml += `<li id="${event.eId}"> Name: ${event.eventName} Date: ${event.date} Category: ${event.category} Id: ${event.eId}</li>`;
        }
        $("#events-by-category").html(displayEventsByDateHtml);
        
        e.preventDefault();
    });
})