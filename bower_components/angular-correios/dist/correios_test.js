!function(e,a,o){describe("angular-correios",function(){var e,a;beforeEach(module("angular-correios")),beforeEach(inject(function(o,n){e=o,a=n})),afterEach(function(){a.verifyNoOutstandingExpectation(),a.verifyNoOutstandingRequest()}),it("should get a postal code",function(){a.expectGET("//viacep.com.br/ws/02011200/json").respond({cep:"02011-200",logradouro:"Rua Voluntários da Pátria",complemento:"de 1413 a 1541 - lado ímpar",bairro:"Santana",localidade:"São Paulo",uf:"SP",ibge:"3550308"}),e.get("02011200").then(function(e){assert.equal("02011-200",e.cep),assert.equal("SP",e.uf),assert.equal("3550308",e.ibge)}),a.flush()})})}(window,angular,void 0);