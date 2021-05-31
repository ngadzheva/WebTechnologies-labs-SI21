const config = {
    host: 'localhost',
    port: 8080,
    connect: function() { console.log('Connecting...') }
};

config.connect();

const basketModule = (function() { 
    let basket = [];

    return {
        addItem: function(item) { basket.push(item); },
        getItems: function() { return basket; },
        getItemsCount: function() { return basket.length; }
    };
})();

basketModule.addItem('fruits');
basketModule.getItemsCount();
basketModule.getItems();