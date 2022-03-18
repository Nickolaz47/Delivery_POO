class Pessoa {
    #nome
    #dataNasc    
    #cpf
    #email
    constructor(nome, dataNasc, cpf, email) {
        this.#nome = nome
        this.#dataNasc = dataNasc
        this.#cpf = cpf
        this.#email = email
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
        console.log(`Nome: ${this.#nome}\nDataNasc: ${this.#dataNasc}\nCPF: ${this.#cpf}\nEmail: ${this.#email}`)
    }

}

module.exports = Pessoa