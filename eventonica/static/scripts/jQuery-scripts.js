$(document).ready(() => {
    const eventRecommender = new EventRecommender();

    function refreshAllUSers() {
        let htmlInput = "";
        input.users.forEach(user => {
            htmlInput += `<li id="${input.uId}">Name: ${input.name} Id: ${input.uId}</li>`;
            console.log("refresh function works");
            

            // if (input.constructor.name == "Event") {
            //     input.events.forEach(event => {
            //         htmlInput += `<li id="${input.eId}">Name: ${input.eventName} Date: ${input.date} Category: ${input.category} Id: ${input.eId}</li>`;
            //     })
            // }

            $(`#${all-users}`).append(htmlInput);
        });
    }

    $("#add-user").submit(function (e) {
            let fName = $("#add-first-name").val();
            let lName = $("#add-last-name").val();
            let password = $("#add-password").val();
            let user = new User(fName, lName, password);
            eventRecommender.addUser(user);
            refreshAllUSers()
            e.preventDefault();
            this.reset();
        });

        $("#delete-user").submit(function (e) {
            let id = $("#delete-user-id").val();
            let password = $("#delete-password").val();
            if (eventRecommender.deleteUser(id, password)) {
                $(`#${all - users}`).remove(`#${id}`);
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
            addHtmltoId(event, "all-events")
            e.preventDefault();
            this.reset();
        });

        $("#delete-event").submit(function (e) {
            let id = $("#delete-event-id").val();
            if (eventRecommender.deleteEvent(id)) {
                $(`#${all - users}`).empty(`#${id}`);
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
            if (events.length > 1) {
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