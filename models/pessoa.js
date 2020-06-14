class PessoaModel{
    constructor (){
        this.id;
        this.nome;
        this.endereco, 
        this.celular, 
        this.peso, 
        this.altura, 
        this.problemasSaude
    }

    Assign(source){
        this.id = source.id;
        this.nome = source.nome;
        this.endereco = source.endereco; 
        this.celular = source.celular; 
        this.peso = source.peso; 
        this.altura = source.altura; 
        this.problemasSaude = source.problemasSaude;
    }
}