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

    function refreshUserEvents(elementId) {
        let htmlInput = "";
        $.each(eventRecommender.userEvents, (userId) => {
            let eventIds = eventRecommender.userEvents[userId];
            eventIds.forEach(eventId => {
                htmlInput += `<li id=${userId}-${eventId}>User: ${eventRecommender.users[userId].name} Event: ${eventRecommender.events[eventId].eventName}`;
            });
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

    $("#delete-user").submit(function (e) {
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

    $("#delete-event").submit(function (e) {
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

    $("#tm-event-search").submit(function (e) {
        e.preventDefault();

        let keyword = $("#tm-event-search-keyword").val();
        $.ajax({
            type: "GET",
            url: `https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&keyword=${keyword}`,

            async: true,
            dataType: "json",
            success: function (json) {
                console.log(json);
                let tmEvent = json._embedded.events[0];
                let name = tmEvent.name;
                let category = tmEvent.classifications[0].genre.name;
                let date = moment(new Date(tmEvent.dates.start.dateTime)).format("MM/DD/YYYY");

                let event = new Event(name, date, category);
                eventRecommender.addEvent(event);

                refreshEvents("tm-events-by-keyword");
            },
            error: function (xhr, status, err) {
                console.log("Error fecthing data from Ticketmaster")
            }
        });

    });

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

    $("#save-user-event").submit(function (e) {
        let eventId = $("#save-event-id").val();
        let userId = $("#save-user-id").val();
        if (eventRecommender.saveUserEvent(userId, eventId)) {
            refreshUserEvents("event-signups");
        } else {
            console.log("Error: EventId/ userId doesn't exist");
        }
        e.preventDefault();
    });
})