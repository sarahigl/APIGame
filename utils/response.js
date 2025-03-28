const response = (res, statusCode, data, message = "Success") => {
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: statusCode, message, data }));
};

module.exports = {response};
