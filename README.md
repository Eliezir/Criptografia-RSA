
<div align="center">
<h1>RSA Cryptography Project</h1>
<img style="height:240px" src="./src/assets/icon-rsa2.png" alt="project logo"/>
<p>
Welcome to our RSA cryptography project, developed as a part of our final project for the Discrete Mathematics course at the Federal University of Alagoas (UFAL). In this project, we employed technologies including C for the cryptography implementation and Vue.js with Vuetify for the frontend development.</p>
</div>

<div align="center">
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#Contributors">Contributors</a>
</div>
<br>
<img src="./Readme-IMGS/mockup_1.png" alt="Project Mockup"/>
<img src="./Readme-IMGS/mockup_2.png" alt="Project Mockup"/>

## What is RSA Cryptography?

RSA cryptography, named after its inventors Ron Rivest, Adi Shamir, and Leonard Adleman, is a widely used public-key encryption algorithm. It plays a crucial role in securing communications over the internet, protecting sensitive data, and ensuring the integrity of digital signatures.

### How RSA Works

RSA encryption relies on the mathematical properties of large prime numbers and their relationship with modular arithmetic. Here's a simplified explanation of how it works:

1. **Key Generation**:
   - Choose two large prime numbers, `p` and `q`.
   - Calculate their product `n = p * q`.
   - Compute Euler's totient function, `φ(n) = (p - 1) * (q - 1)`.
   - Choose a public exponent `e` such that `1 < e < φ(n)` and `e` is coprime to `φ(n)`.
   - Calculate the private exponent `d` such that `d * e ≡ 1 (mod φ(n))`.

2. **Encryption**:
   - To encrypt a message `M`, the sender uses the recipient's public key `(e, n)`.
   - The sender calculates the ciphertext `C` as `C ≡ M^e (mod n)`.

3. **Decryption**:
   - To decrypt the ciphertext `C`, the recipient uses their private key `(d, n)`.
   - The recipient calculates the original message `M` as `M ≡ C^d (mod n)`.

The security of RSA cryptography relies on the difficulty of factoring the product `n` (known as the RSA modulus) into its prime factors `p` and `q`. As long as this factorization remains computationally infeasible for sufficiently large numbers, RSA encryption remains secure.

Our project implements the RSA encryption and decryption processes in the C programming language, providing a secure and efficient way to protect your data.

Feel free to explore the code and documentation to understand how our project works and how you can use it.

<h1 id="technologies">Essentials</h1>

Make sure you have the following dependencies installed:

- [GMP (GNU Multiple Precision Arithmetic Library)](https://gmplib.org/)
- [Flask](https://flask.palletsprojects.com/en/2.1.x/)
- [Vue.js](https://vuejs.org/)
- [Vuetify](https://vuetifyjs.com/)

## Installation

1. Clone this repository to your local system:

   ```bash
   git clone https://github.com/Eliezir/Criptografia-RSA
   cd Criptografia-RSA


<h2 id="how-to-use"> 💻 How To Use</h2>

```
# yarn
yarn

# npm
npm install

# pnpm
pnpm install

# bun
bun install
```

### Compiles and hot-reloads for development

```
# yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm dev

# bun
bun run dev
```

### Compiles and minifies for production

```
# yarn
yarn build

# npm
npm run build

# pnpm
pnpm build

# bun
bun run build
```

### Lints and fixes files

```
# yarn
yarn lint

# npm
npm run lint

# pnpm
pnpm lint

# bun
bun run lint
```

<h2 id="Contributors" > 🫂 Contributors</h2>

- Eliezir Moreira (GitHub: [@Eliezir](https://github.com/Eliezir))
- Josué Medino (GitHub: [@Josué](https://github.com/JosueMedino01))
- Josenilton Ferreira (GitHub: [@Josenilton](https://github.com/914joseph))
- Lucas Maciel (GitHub: [@Lucas](https://github.com/Lucas7Maciel))
- Raphael Phillips (GitHub: [@Raphael](https://github.com/alicej))

We hope you find our RSA cryptography project both educational and useful. If you have any questions or encounter any issues, please don't hesitate to open an issue or reach out to one of the contributors.
