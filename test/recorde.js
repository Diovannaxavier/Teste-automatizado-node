var chai = require('chai');
var server = require('../index');
var chaiHttp = require('chai-http');
var Recorde = require('../models/recorde');
var should = chai.should();

chai.use(chaiHttp);

describe('Recorde', function(){

    var id;
    var token;

    before(function(next){
        Recorde.remove({}, function(err){
            next()
        });
    });

    // Realizar um post para criar um novo registro
    if('Novo Produto', function(done){
        var novoRecorde = {
            produto: "perfume",
            recorde: 1000
        };

        chai.request(server)
        .post('/recorde')
        .send(novoRecorde)
        .end(function(err, res){

            res.should.have.status(200);
            res.body.should.have.property('recorde');

            res.body.recorde.should.have.property('_id');
            res.body.recorde.should.have.property('token');
            res.body.recorde.should.have.property('produto');
            res.body.recorde.should.have.property('recorde');

            res.body.recorde.produto.should.be('perfume');
            res.body.recorde.recorde.should.be(1000);
            
            token = res.body.recorde.token;
            id = res.body.recorde._id;

            done();
        });
    });

    // Realiza uma busca do registro pelo id 
    if('Buscar pelo id', function(done){
        chai.request(server)
        .get('/recorde/id' +id)       
        .end(function(err, res){
            
            res.should.have.status(200);
            res.body.should.have.property('recorde');

            res.body.recorde.should.have.property('_id');
            res.body.recorde.should.have.property('produto');
            res.body.recorde.should.have.property('recorde');

            res.body.recorde.produto.should.be('perfume');
            res.body.recorde.recorde.should.be(1000);
        
             done();
        });
    });

    // Realiza a busca do resgistro pelo token
    if('Buscar pelo token', function(done){
        chai.request(server)
        .get('/recorde/token' +token)       
        .end(function(err, res){
            console.log(res.body);
            res.should.have.status(200);
            res.body.should.have.property('recorde');

            res.body.recorde.should.have.property('_id');
            res.body.recorde.should.have.property('produto');
            res.body.recorde.should.have.property('recorde');

            res.body.recorde.produto.should.be('perfume');
            res.body.recorde.recorde.should.be(1000);
        
             done();
        });
    });

    // Altera o recorde do registro para um valor menor
    if('Alterar recorde do produto para menor', function(done){
        var recordeAlterado = {
            token: token,
            recorde: 900
        }
        
        chai.request(server)
        .put('/recorde')       
        .end(function(err, res){
            
            res.should.have.status(200);
            res.body.should.have.property('recorde');

            res.body.recorde.should.have.property('_id');
            res.body.recorde.should.have.property('token');
            res.body.recorde.should.have.property('produto');
            res.body.recorde.should.have.property('recorde');

            res.body.recorde.produto.should.be('perfume');
            res.body.recorde.recorde.should.be(1000);

            done();
        });    
    });

    // Altera o recorde do registro para um valor maior
    if('Alterar recorde do produto para maior', function(done){
        var recordeAlterado = {
            token: token,
            recorde: 1200
        }
        
        chai.request(server)
        .put('/recorde')       
        .end(function(err, res){
            
            res.should.have.status(200);
            res.body.should.have.property('recorde');

            res.body.recorde.should.have.property('_id');
            res.body.recorde.should.have.property('token');
            res.body.recorde.should.have.property('produto');
            res.body.recorde.should.have.property('recorde');

            res.body.recorde.produto.should.be('perfume');
            res.body.recorde.recorde.should.be(1200);

            done();
        }); 
    });

})