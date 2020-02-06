describe("EventRecommender", () => {
  const { EventRecommender, User, Event } = require('../src/eventRecommender.js'); // Update with your class names and file name
  let er;

  beforeEach(() => {
    er = new EventRecommender();
    event = new Event("Indonasian Food festival", "March 27 2020", "Food");
    user = new User("Fathima", "Zariya");
  });

  describe("addEvent", () => {
    it("adds a new Event to the system", () => {
      er.addEvent(event);
      expect(er.events.length).toEqual(1);
      expect(er.events[0].eventName).toEqual("Indonasian Food festival");
      expect(er.events[0].date).toEqual("Mar 27 2020");
      expect(er.events[0].category).toEqual("Food");
    });
  });

  describe("addUser", () => {
    it("adds a new User to the system", () => {
      er.addUser(user);
      expect(er.users.length).toEqual(1);
      expect(er.users[0].fName).toEqual("Fathima");
      expect(er.users[0].lName).toEqual("Zariya");
      expect(er.users[0].name).toEqual("Fathima Zariya");
    });
  });

  describe("saveUserEvent", () => {
    it("adds an event to a user's personal event array", () => {
      er.addEvent(event);
      er.addUser(user);
      er.saveUserEvent(event.eId, user.uId); // change these to match your method signature
      expect(er.userEvents.length).toEqual(1);
      // expect(er.userEvents[0].user.name).isEqual("Fathima Zariya");
    });
  });

  // describe("deleteUser", () => {
  //   it("removes a User from the system", () => {
  //     er.addUser("Make a new user here that you will delete later");
  //     er.deleteUser("Change Me");
  //     expect(er.user.length).toEqual(0);
  //   });
  // });

  // describe("deleteEvent", () => {
  //   it("removes the event from the system", () => {
  //     er.addEvent("A new event that you will delete later");
  //     er.deleteEvent("Change Me");
  //     expect(er.events.length).toEqual(0);
  //   });
  // });
});
