/* GET 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', {
    title: 'Online Auction System',
    pageHeader: {
    title: 'Online Auction System',
    strapline: '__Hassle Free Access To Products!__'
    },
    locations: [{
    name: 'Sports Auction Facility',
    //address: 'Any Internet Facility Near You',
    rating: 3,
    products: [ 'Cricket kit', 'Racket'],
    distance: '100m'
    },{
    name: 'Cafe Hero',
   // address: 'Any Internet Facility Near You',
    rating: 4,
    products: ['Hot drinks', 'Food', 'Premium wifi'],
    distance: '200m'
    },{
    name: 'Burger Queen',
    //address: 'Any Internet Facility Near You',
    rating: 2,
    products: ['Food', 'Premium wifi'],
    distance: '250m'
}]
});
};
    /* GET 'Location info' page */
    const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location info' });
    };
    /* GET 'Add review' page */
    const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add review' });
    };
module.exports = {
        homelist,
        locationInfo,
        addReview
    };    