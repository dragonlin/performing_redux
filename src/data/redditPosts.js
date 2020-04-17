import moment from 'moment'

export default [
  {
    title: "My buddy's dog saw a moose",
    comments: 100,
    submitted: moment()
  },
  {
    title: "A cool cat!",
    comments: 5,
    submitted: moment().subtract(1, 'minute')
  },
  {
    title: "A cool Dog!",
    comments: 10,
    submitted: moment().subtract(5, 'minute')
  },
  {
    title: "A cool Snail!",
    comments: 7,
    submitted: moment().subtract(1, 'day')
  }
]
