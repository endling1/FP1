import ActionTypes from './ActionTypes';
var baseUrl = 'http://ec2-35-154-248-81.ap-south-1.compute.amazonaws.com';
// var baseUrl = 'http://localhost:3000';
var Constants = {
    API: {
        [ActionTypes.GET_QUESTION_CATEGORIES]: baseUrl + '/categories',
        [ActionTypes.GET_QUESTIONS]: baseUrl + '/questions',
        [ActionTypes.REGISTER_USER]: baseUrl + '/signup',
        [ActionTypes.LOGIN_USER]: baseUrl + '/login'
    }
};

module.exports = Constants;