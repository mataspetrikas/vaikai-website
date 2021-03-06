var Collapse = require('widgets/collapse');

var $body = $('body');

var Popup = module.exports = Collapse.extend({

  defaults: {
    classnames: {
      expanded: 'is-open'
    },
  },

  name: 'popup',

  // Operations
  expand: function() {
    if (this._expanded) return this;

    // update state
    $body.addClass('has-open-popup');

    // listen to descendant closing elements
    this.on('click', this.slct('close', 'backdrop'), function(ev) {
      ev.preventDefault();
      this.collapse();
    });

    return Popup.__super__.expand.call(this);
  },

  collapse: function() {
    if (!this._expanded) return this;

    // update state
    $body.removeClass('has-open-popup');

    // stop listenting to descendant closing elements
    this.off('click', this.slct('close', 'backdrop'));

    return Popup.__super__.collapse.call(this);
  },

  toggle: function() {
    this[ this._expanded ? 'expand' : 'collapse']();
  },

  // Aliases
  open: function() { this.expand(); },
  close: function() { this.collapse(); }

});

// auto-init widgets
$('[data-init~="popup"]').widget(Popup);
