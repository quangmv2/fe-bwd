const now = new Date()

export default [
  {
    id: 0,
    title: 'Quỳnh Nga',
    type: 'call video',
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1),

  },
  {
    id: 14,
    title: 'Today',
    type: 'chat',
    start: new Date(new Date().setHours(new Date().getHours() -1)),
    end: new Date(new Date().setHours(new Date().getHours())),
  },
  {
    id: 23,
    title: 'Quỳnh Nga',
    type: 'video call',
    start: new Date(new Date().setHours(new Date().getHours() )),
    end: new Date(new Date().setHours(new Date().getHours() + 1)),
  },
  {
    id: 23,
    title: 'Quỳnh Nga',
    type: 'video call',
    start: new Date(new Date().setHours(new Date().getHours() + 1)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },


]