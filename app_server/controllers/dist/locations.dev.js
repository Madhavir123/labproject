"use strict";

/* GET 'home' page */
var homelist = function homelist(req, res) {
  res.render('locations-list', {
    title: 'Online Auction System',
    pageHeader: {
      title: 'Online Auction System',
      strapline: '---Hassle Free Access To Products!---'
    },
    locations: [{
      name: 'Sports Auction Facility',
      address: 'Any Internet Facility Near You',
      rating: 3,
      facilities: ['Products', 'Premium wifi'],
      distance: '100m'
    }, {
      name: 'Cafe Hero',
      address: 'Any Internet Facility Near You',
      rating: 4,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '200m'
    }, {
      name: 'Burger Queen',
      address: 'Any Internet Facility Near You',
      rating: 2,
      facilities: ['Food', 'Premium wifi'],
      distance: '250m'
    }]
  });
};
/* GET 'Location info' page */


var locationInfo = function locationInfo(req, res) {
  res.render('location-info', {
    title: 'Location info'
  });
};
/* GET 'Add review' page */


var addReview = function addReview(req, res) {
  res.render('location-review-form', {
    title: 'Add review'
  });
};

module.exports = {
  homelist: homelist,
  locationInfo: locationInfo,
  addReview: addReview
};
//# sourceMappingURL=locations.dev.js.map
