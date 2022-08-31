exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            messaage: 'Hello from Lambda! Ayush here!'
        }),
    };
    return response;
};
