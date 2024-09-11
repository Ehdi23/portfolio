<template>
  <section class="contact-page">
    <div id="envelope">
      <div class="left"></div>
      <div class="right"></div>
      <div class="sheet">
        <div class="form-container">
          <form ref="form" @submit.prevent="sendEmail">
            <div class="form-group inputs">
              <label for="name">Name</label>
              <input type="text" id="name" v-model="name" required />
              <label for="email">Email</label>
              <input type="email" id="email" v-model="email" required />
            </div>
            <div class="form-group textarea">
              <label for="message">Message</label>
              <textarea id="message" v-model="message" required></textarea>
            </div>
            <div class="submit">
              <Button class="btn-link"><div>Obtenir un devis</div></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";
import Button from "./Button.vue";

const form = ref(null);
const name = ref("");
const email = ref("");
const message = ref("");
const publicKey = "BFAptp1DZ3ZruJwLm";

const sendEmail = () => {
  emailjs
    .send(
      "service_825wrxi",
      "template_l17roab",
      {
        to_name: "El Hadi",
        from_name: name.value,
        message: message.value,
        from_email: email.value,
      },
      publicKey
    )
    .then(
      (response) => {
        console.log("Email sent!", response.status, response.text);
        form.value.reset();
      },
      (error) => {
        console.log("Email failed to send!", error);
      }
    );
};
</script>

<style>
/* Styles pour les écrans supérieurs à 1025px */
@media screen and (min-width: 1025px) {
  .submit {
    cursor: pointer;
    z-index: 99;
  }

  .btn-link div {
    font-weight: 600;
    font-size: 1rem;
  }

  .container-contact {
    margin: 2rem auto 0;
    width: 80%;
    border-radius: 1rem;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 1rem;
  }

  .form-group,
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: start;
    justify-content: center;
  }

  label {
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    color: var(--text-subtitle-color);
    -webkit-text-stroke: var(--text-color) 0.2px;
    font-weight: 600;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    outline: none;
    resize: none;
  }

  input:focus,
  textarea:focus {
    border: 1px solid var(--text-color);
  }

  .textarea {
    width: 80%;
    margin-bottom: 0.5rem;
  }

  .textarea textarea {
    height: 6rem;
  }

  #envelope {
    width: 25rem;
    height: 20vh;
    background-color: #150d34;
    position: relative;
    z-index: 2;
    top: 20%;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    display: flex;
    align-self: center;
  }

  .right,
  .left {
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    border-bottom: 15rem solid;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    z-index: 1;
  }

  .right {
    border-bottom-color: var(--text-color);
    border-left: 25rem solid transparent;
    right: 0;
  }

  .left {
    border-bottom-color: #392c6a;
    border-right: 25rem solid transparent;
    left: 0;
  }

  #envelope::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 0;
    height: 0;
    border: 12.5rem solid transparent;
    border-bottom: 10rem solid var(--text-color);
    z-index: -1;
  }

  .sheet {
    width: 88%;
    padding: 1rem 0;
    height: 70vh;
    background-color: whitesmoke;
    position: absolute;
    z-index: 0;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, 0);
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    animation: fadeSheet 1s ease;
  }

  .contact-page {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inputs {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin-bottom: 0.5rem;
  }
}

/* Styles pour les écrans entre 641px et 1024px */
@media screen and (min-width: 641px) and (max-width: 1024px) {
  .submit {
    cursor: pointer;
    z-index: 99;
  }

  .btn-link div {
    font-weight: 600;
    font-size: 1rem;
  }

  .container-contact {
    margin: 10rem auto 0;
    width: 80%;
    border-radius: 1rem;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 1rem;
  }

  .form-group,
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: start;
    justify-content: center;
  }

  label {
    font-size: 1rem;
    color: var(--text-subtitle-color);
    font-weight: 600;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    outline: none;
    resize: none;
  }

  input:focus,
  textarea:focus {
    border: 1px solid var(--text-color);
  }

  .textarea {
    height: 10rem;
    width: 80%;
  }

  #envelope {
    width: 32rem;
    height: 20rem;
    background-color: #150d34;
    position: relative;
    z-index: 2;
    bottom: -50%;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    display: flex;
    align-self: end;
  }

  .right,
  .left {
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    border-bottom: 20rem solid;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    z-index: 1;
  }

  .right {
    border-bottom-color: var(--text-color);
    border-left: 32rem solid transparent;
    right: 0;
  }

  .left {
    border-bottom-color: #392c6a;
    border-right: 32rem solid transparent;
    left: 0;
  }

  #envelope::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 0;
    height: 0;
    border: 16rem solid transparent;
    border-bottom: 10rem solid var(--text-color);
    z-index: -1;
  }

  .sheet {
    width: 88%;
    padding: 1rem 0;
    height: 41.5rem;
    background-color: whitesmoke;
    position: absolute;
    z-index: 0;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, 0);
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    animation: fadeSheet 1s ease;
  }

  .contact-page {
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inputs {
    width: 50%;
  }
}

/* Styles pour les écrans inférieurs à 641px */
@media screen and (max-width: 640px) {
  .contact {
    display: none;
  }

  .submit {
    cursor: pointer;
    z-index: 99;
  }

  .btn-link div {
    font-weight: 600;
    font-size: 1rem;
  }

  .container-contact {
    margin: 10rem auto 0;
    width: 80%;
    border-radius: 1rem;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 1rem;
  }

  .form-group,
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: start;
    justify-content: center;
  }

  label {
    font-size: 1rem;
    color: var(--text-subtitle-color);
    font-weight: 600;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    outline: none;
    resize: none;
  }

  input:focus,
  textarea:focus {
    border: 1px solid var(--text-color);
  }

  .textarea {
    width: 100%;
  }
}
</style>
