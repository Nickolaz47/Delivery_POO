class Pessoa {
    #id
    #nome
    #dataNasc    
    #cpf
    #email
    static counter = 1
    constructor(nome, dataNasc, cpf, email){
        this.#id = Pessoa.counter
        this.#nome = nome
        this.#dataNasc = dataNasc
        this.#cpf = cpf
        this.#email = email
        Pessoa.counter += 1
    }

    get id() { 
        return this.#id
    }

    get nome() { 
        return this.#nome
    }

    get dataNasc() { 
        return this.#dataNasc
    }

    get cpf() {
        return this.#cpf
    }

    get email() {
        return this.#email
    }

    set nome(nome) {
        this.#nome = nome
    }

    set dataNasc(dataNasc) {
        this.#dataNasc = dataNasc
    }

    set cpf(cpf) {
        this.#cpf = cpf
    }

    set email(email) {
        this.#email = email
    }

    imprimirDados() {
        console.log(`ID: ${this.#id}\nNome: ${this.#nome}\nDataNasc: ${this.#dataNasc}\nCPF: ${this.#cpf}\nEmail: ${this.#email}`)
    }
}

module.exports = Pessoa