'use strict'

class CreateChallenge {
    get rules() {
	    return {
	      username: 'required|string',
	      email: 'required|email|unique:users,email',
	      password: 'required',
	    }
	  }
	  get messages() {
	    return {
	      required: '{{ field }} is required',
	      string: '{{ field }} is not a valid string',
	      email: '{{ field }} is not a valid email',
	      unique: '{{ field }} is already exists',
	    }
	  }
	  get validateAll() {
	    return true
	  }
	  async fails(errorMessages) {
	    return this.ctx.response.status(400).json(errorMessages)
	  }
}

module.exports = CreateChallenge
