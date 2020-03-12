$(document).ready(() => {
    function refreshUsers(users, elementId) {
        let htmlInput = "";
        $.each(users, (userId) => {
            let user = users[userId];
            htmlInput += `<li id="${user.uId}">Name: ${user.fName} ${user.lName} Id: ${user.uId}</li>`;
        })
        $(`#${elementId}`).html(htmlInput);
    }

    function refreshEvents(events, elementId) {
        let htmlInput = "";
        $.each(events, (eventID) => {
            let event = events[eventID];
            htmlInput += `<li id="${event.eId}">Name: ${event.eventName} Date: ${event.date} Category: ${event.category} Id: ${event.eId}</li>`;
        })
        $(`#${elementId}`).html(htmlInput);
    }

    function refreshUserEvents(userEvents, elementId) {
        let htmlInput = "";
        $.each(userEvents, (userId) => {
            let signups = userEvents[userId];
            signups.forEach(signup => {
                htmlInput += `<li id=${userId}-${signup.eid}>User: ${signup.fname} ${signup.lname} Event: ${signup.eventname}`;
            });
        })
        $(`#${elementId}`).html(htmlInput);
    }

    $("#add-user").submit(function (e) {
        let fName = $("#add-first-name").val();
        let lName = $("#add-last-name").val();
        let password = $("#add-password").val();
        let user = {
            fName: fName, 
            lName: lName, 
            password: password
        };

        $.ajax({
            type: "POST",
            url: "/users",
            async: true,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(user),
            success: function (json) {
                $.ajax({
                    type: "GET",
                    url: "/users",
                    success: function (users) {
                        refreshUsers(users, "all-users");
                    }
                })
            }
        });
        e.preventDefault();
        this.reset();
    });

    $("#delete-user").submit(function (e) {
        let id = $("#delete-user-id").val();
        let password = $("#delete-password").val();

        $.ajax({
            type: "POST",
            url: "/users/delete",
            async: true,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({uId: id, password: password}),
            success: function (json) {
                $("#user-error-message").remove();
                $.ajax({
                    type: "GET",
                    url: "/users",
                    success: function (users) {
                        refreshUsers(users, "all-users");
                    }
                })
            },
            error: function(err) {
                $("#user-error-message").text("Please enter a valid userID and password");
            }
        });

        e.preventDefault();
        this.reset();
    })

    $("#add-event").submit(function (e) {
        let name = $("#add-event-name").val();
        let date = $("#add-event-date").val();
        let category = $("#add-category").val();
        let event = {
            eventName: name, 
            date: date, 
            category: category
        };
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "/events",
            async: true,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(event),
            success: function (json) {
                $.ajax({
                    type: "GET",
                    url: "/events",
                    success: function (events) {
                        refreshEvents(events, "all-events");
                    }
                })
            }
        });
        this.reset();
    });

    $("#delete-event").submit(function (e) {
        let id = $("#delete-event-id").val();

        $.ajax({
            type: "DELETE",
            url: `/events/${id}`,
            async: true,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (json) {
                $("#delete-event-error").remove();
                $.ajax({
                    type: "GET",
                    url: "/events",
                    success: function (events) {
                        refreshEvents(events, "all-events");
                    }
                })
            },
            error: function(err) {
                $("#delete-event-error").text("Please enter a valid eventID");
            }
        });
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
                let event = {
                    eventName: name, 
                    date: date, 
                    category: category
                };
                $.ajax({
                    type: "POST",
                    url: "/events",
                    async: true,
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(event),
                    success: function (json) {
                        $.ajax({
                            type: "GET",
                            url: "/events",
                            success: function (events) {
                                refreshEvents(events, "tm-events-by-keyword");
                            }
                        })
                    }
                });
            },
            error: function (xhr, status, err) {
                console.log("Error fectching data from Ticketmaster")
            }
        });

    });

    $("#date-search").submit(function (e) {
        let date = $("#date-search-id").val();

        $.ajax({
            type: "POST",
            url: "/events/search",
            async: true,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({date: date}),
            success: function (events) {
                let displayEventsByDateHtml = "";
                for (const event of events) {
                    displayEventsByDateHtml += `<li id="${event.eId}"> Name: ${event.eventName} Date: ${event.date} Category: ${event.category} Id: ${event.eId}</li>`;
                }
                $("#events-by-date").html(displayEventsByDateHtml);
            }
        });
        e.preventDefault();
        this.reset();
    });

    $("#category-search").submit(function (e) {
        let category = $("#category-search-id").val();

        $.ajax({
            type: "POST",
            url: "/events/search",
            async: true,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({category: category}),
            success: function (events) {
                let displayEventsByDateHtml = "";
                for (const event of events) {
                    displayEventsByDateHtml += `<li id="${event.eId}"> Name: ${event.eventName} Date: ${event.date} Category: ${event.category} Id: ${event.eId}</li>`;
                }
                $("#events-by-category").html(displayEventsByDateHtml);
            }
        });
        e.preventDefault();
        this.reset();
    });

    $("#save-user-event").submit(function (e) {
        let eventId = $("#save-event-id").val();
        let userId = $("#save-user-id").val();
        
        $.ajax({
            type: "POST",
            url: "/signups",
            async: true,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({eId: eventId, uId: userId}),
            success: function (signup) {
                $.ajax({
                    type: "GET",
                    url: "/signups",
                    success: function (signups) { 
                        refreshUserEvents(signups, "event-signups");
                    }
                })
            },
            error: function (err) {
                console.log("Error: EventId/ userId doesn't exist");
            }
        });
        e.preventDefault();
        this.reset();
    });
})