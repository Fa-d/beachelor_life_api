function responsBodyFormatter(res, err) {
    return {
        message: res["0"] ? "Success" : "Error Occured",
        didError: res["0"] ? false : true,
        errorMessage: err ? err : "",
        model: res
    };
}

module.exports = responsBodyFormatter;

