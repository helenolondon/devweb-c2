class PessoasController{
    constructor (){ }

    salvar(pessoa){
        repo.salvarPessoa(pessoa);
        view.onSalvo();
        view.mostrarLista(repo.listar());
    }

    novo(){
        view.novo();
    }

    editar(id){
        let pessoa = repo.obterPorId(id);
        view.editar(pessoa);
    }

    remove(id){
        repo.excluirPessoa(id);
        view.mostrarLista(repo.listar());
    }

    ordenar(){
        repo.ordenar();
        view.mostrarLista(repo.listar())
    }
}
