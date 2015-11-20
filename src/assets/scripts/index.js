// require widgets
var Control = require('widgets/control');
var Popup = require('widgets/popup');
var Gallery = require('widgets/gallery');
var Carousel = require('widgets/carousel');
var MultiFold = require('widgets/multifold');

$('#features-list').widget(MultiFold, {
  scrollOffset: -80
});