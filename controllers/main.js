const index = (req, res) => {
    res.render('index', { title: 'Online Auction System' });
    };
module.exports = {
        index
    };