class Validator {

    static empty(value) {

        return !value || value.trim() === "";

    }

}

module.exports = Validator;
