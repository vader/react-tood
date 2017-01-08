var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoItem = require('TodoItem');

describe('TodoItem tests', () => {
  it('it should exist', () => {
    expect(TodoItem).toExist();
  })
});