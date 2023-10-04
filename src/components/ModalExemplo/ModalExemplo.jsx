import { useState, useEffect } from "react";
import "./ModalEditar.scss"; 

export default function ModalEditar(props) {
  document.title = "EDITAR PRODUTO";

  const { produto, setOpen } = props;

  const [editedProduto, setEditedProduto] = useState(produto);

  useEffect(() => {
    setEditedProduto(produto);
  }, [produto]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduto({ ...import { useState, useEffect } from "react";
import "./ModalEditar.scss"; // Você pode criar um arquivo CSS/SCSS separado se desejar

export default function ModalEditar(props) {
  document.title = "EDITAR PRODUTO";

  const { produto, setOpen } = props;

  const [editedProduto, setEditedProduto] = useState(produto);

  useEffect(() => {
    setEditedProduto(produto);
  }, [produto]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduto({ ...editedProduto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realize a chamada PUT para atualizar o produto com os dados em editedProduto
    fetch(`http://localhost:5000/produtos/${EditarProdutos.id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedProduto)
    })
      .then((response) => {
        console.log("Status da requisição HTTP: " + response.status);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // Atualize a lista de produtos ou faça outras ações necessárias
      })
      .catch((error) => console.log(error));

    setOpen(false);
  };

  return (
    <div className="container">
      <h1>Editar Produto</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Editar Produto</legend>
            <div>
              <label htmlFor="idProduto">Nome Produto:</label>
              <input
                type="text"
                name="nome"
                id="idProduto"
                value={editedProduto.nome}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idPreco">Preço Produto:</label>
              <input
                type="text"
                name="preco"
                id="idPreco"
                value={import { useState, useEffect } from "react";
import "./ModalEditar.scss"; // Você pode criar um arquivo CSS/SCSS separado se desejar

export default function ModalEditar(props) {
  document.title = "EDITAR PRODUTO";

  const { produto, setOpen } = props;

  const [editedProduto, setEditedProduto] = useState(produto);

  useEffect(() => {
    setEditedProduto(produto);
  }, [produto]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduto({ ...editedProduto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realize a chamada PUT para atualizar o produto com os dados em editedProduto
    fetch(`http://localhost:5000/produtos/${editedProduto.id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedProduto)
    })
      .then((response) => {
        console.log("Status da requisição HTTP: " + response.status);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // Atualize a lista de produtos ou faça outras ações necessárias
      })
      .catch((error) => console.log(error));

    setOpen(false);
  };

  return (
    <div className="container">
      <h1>Editar Produto</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Editar Produto</legend>
            <div>
              <label htmlFor="idProduto">Nome Produto:</label>
              <input
                type="text"
                name="nome"
                id="idProduto"
                value={editedProduto.nome}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idPreco">Preço Produto:</label>
              <input
                type="text"
                name="preco"
                id="idPreco"
                value={editedProduto.preco}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idDesc">Descrição Produto:</label>
              <input
                type="text"
                name="desc"
                id="idDesc"
                value={editedProduto.desc}
                onChange={handleChange}
              />
            </div>
            <div>
              <button>EDITAR</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
.preco}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idDesc">Descrição Produto:</label>
              <input
                type="text"
                name="desc"
                id="idDesc"
                value={editedProduto.desc}
                onChange={handleChange}
              />
            </div>
            <div>
              <button>EDITAR</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5173/produtos/${EditarProduto.id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedProduto)
    })
      .then((response) => {
        console.log("Status da requisição HTTP: " + response.status);
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));

    setOpen(false);
  };

  return (
    <div className="container">
      <h1>Editar Produto</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Editar Produto</legend>
            <div>
              <label htmlFor="idProduto">Nome Produto:</label>
              <input
                type="text"
                name="nome"
                id="idProduto"
                value={editedProduto.nome}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idPreco">Preço Produto:</label>
              <input
                type="text"
                name="preco"
                id="idPreco"
                value={editedProduto.preco}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idDesc">Descrição Produto:</label>
              <input
                type="text"
                name="desc"
                id="idDesc"
                value={editedProduto.desc}
                onChange={handleChange}
              />
            </div>
            <div>
              <button>EDITAR</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
