describe("EventRecommender", () => {
  const { EventRecommender, User, Event } = require('../src/eventRecommender.js'); // Update with your class names and file name
  let er, event, user;

  beforeEach(() => {
    er = new EventRecommender();
    event = new Event("Indonasian Food festival", "3 27 2020", "Food");
    user = new User("Fathima", "Zariya");
    foodEvent = new Event("Halal food fest", "3 4 2020", "Food");
  });

  describe("addEvent", () => {
    it("adds a new Event to the system", () => {
      er.addEvent(event);
      expect(Object.keys(er.events).length).toEqual(1);
      expect(er.events[event.eId].eventName).toEqual("Indonasian Food festival");
      expect(er.events[event.eId].date).toEqual("Mar 27 2020");
      expect(er.events[event.eId].category).toEqual("Food");
    });
  });

  describe("addUser", () => {
    it("adds a new User to the system", () => {
      er.addUser(user);
      expect(Object.keys(er.users).length).toEqual(1);
      expect(er.users[user.uId].fName).toEqual("Fathima");
      expect(er.users[user.uId].lName).toEqual("Zariya");
      expect(er.users[user.uId].name).toEqual("Fathima Zariya");
    });
  });

  describe("saveUserEvent", () => {
    it("adds an event to a user's personal event array", () => {
      er.addEvent(event);
      er.addUser(user);
      er.saveUserEvent(user.uId, event.eId);
      expect(er.userEvents[user.uId]).toBeDefined();
    });
  });

  describe("deleteUser", () => {
    it("removes a User from the system", () => {
      er.addUser(user);
      er.deleteUser(user.uId);
      expect(er.users[user.uId]).toBeUndefined();
    });
  });

  describe("deleteEvent", () => {
    it("removes the event from the system", () => {
      er.addEvent(event);
      er.deleteEvent(event.eId);
      expect(er.events[event.eId]).toBeUndefined();
    });
  });

  describe("findEventsByDate", () => {
    it("finds and returns events by date", () => {
      er.addEvent(event);
      er.addEvent(foodEvent);
      expect(er.findEventsByDate("March 4 2020")[0].eventName).toEqual("Halal food fest");
    })
  })

  describe("findEventsByCategory", () => {
    it("finds and returns events by category", () => {
      er.addEvent(event);
      er.addEvent(foodEvent);
      expect(er.findEventsbyCategory("Food").length).toEqual(2);
    })
  })
});
