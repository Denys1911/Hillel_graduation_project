const compose = (...func) => data => {
    func.reduce((prevResult, f) => f(prevResult), data);
};