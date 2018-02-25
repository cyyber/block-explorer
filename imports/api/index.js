// Server side cache
import { Mongo } from 'meteor/mongo'

export const Addresses = new Mongo.Collection('a')
export const Transactions = new Mongo.Collection('tx')
export const Blocks = new Mongo.Collection('blocks')
export const lasttx = new Mongo.Collection('lasttx')
export const homechart = new Mongo.Collection('homechart')


if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('blocks', function blocksPublication() { // eslint-disable-line prefer-arrow-callback
    return Blocks.find()
  })
  Meteor.publish('lasttx', function lasttxPublication() { // eslint-disable-line prefer-arrow-callback
    return lasttx.find()
  })
  Meteor.publish('homechart', function homeChartPublication() { // eslint-disable-line prefer-arrow-callback
    return homechart.find()
  })
}
