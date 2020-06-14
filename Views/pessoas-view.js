class PessoasView{
    constructor(){

    }

    novo(){
        document.getElementById("salvarForm").reset();
        $('#paciente-modal').modal('show');
    }

    editar(pessoa){
        document.querySelector("#id").value = pessoa.id;
        document.querySelector("#nome").value = pessoa.nome;
        document.querySelector("#peso").value = pessoa.peso;
        document.querySelector("#altura").value = pessoa.altura;
        document.querySelector("#celular").value = pessoa.celular;
        document.querySelector("#endereco").value = pessoa.endereco;
        document.querySelector("#problemas-saude").value = pessoa.problemasSaude;

        $('#paciente-modal').modal('show');
    }

    mostrarLista(pessoas){
        let trs = document.getElementById('pacientes-lista-view-o');
        let node = document.querySelector('#lista-pacientes-table');
                
        node.innerHTML = null;
        let hr = document.createElement("tr");
        
        hr.innerHTML = 
        `
        <tr>
            <th scope="col">Nome</th>
            <th scope="col">Celular</th>
            <th scope="col">Peso</th>
            <th scope="col">Altura</th>
            <!-- <th scope="col">#</th> -->
            <th scope="col">...</th>
        </tr>        
        `;
        node.appendChild(hr);

        _.forEach(pessoas, function(o) {
            let tr = document.createElement("tr");

            tr.innerHTML = 
            `
                <td>${o.nome}</td>
                <td>${o.celular}</td>
                <td>${o.peso}</td>
                <td>${o.altura}</td>
                <td><i class="fa fa-eye btn-act" onclick=ctrl.editar(${o.id}) aria-hidden="true"></i> &nbsp; <i class="fa fa-times btn-act" onclick=ctrl.remove(${o.id}) aria-hidden="true"></i></td>
            `;
            node.appendChild(tr);
        });
    }

    onSalvo(){
        document.getElementById("salvarForm").reset();
        $('#paciente-modal').modal('hide');
    }
}