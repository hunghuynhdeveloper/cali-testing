var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:8081");

// UNIT test begin

describe("Access users path",function(){

  // #1 should return home page

  it("should return users path",function(done){

    // calling users api
    server
    .get("/users")
    //.expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200     
      res.status.should.equal(200);
      // Error key should be false.
      //res.body.error.should.equal(false);
      done();
    });
  });

});