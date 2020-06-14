var _db = [];

class Repositorio{
    salvarPessoa(model){
        let r = null;
      
        if(model){
          if(model.id && model.id > 0){
              r = _.find(_db, function(o) { return o.id == model.id; });
      
              if(r){
                  r.Assign(model);
              }
          }
          else{
              r = new PessoaModel();
              debugger;
              model.id = _db.length == 0 ? 1 : _.maxBy(_db, 'id').id + 1;
              
              r.Assign(model);
              _db.push(r);
          }      
        }
      }
      
      excluirPessoa(id){
        if(id && id > 0){
            var i =  _.remove(_db, function(o) {
                  return o.id == id;
                });    
          }
      }
      
      obterPorId(id){
          if(id && id > 0){
              return _.find(_db, function(o) { return o.id == id; });
          }
          else{
              return null;
          }          
      }

      listar(){
        return _db;
     }

      ordenar(){
          _db = _.sortBy(_db, ['nome']);
      }
}
