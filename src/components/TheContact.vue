<template>
  <section class="contact">
    <div id="envelope">
      <div class="left"></div>
      <div class="right"></div>
      <div class="sheet">
        <div class="form-container">
          <h1>Contact Us</h1>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" v-model="name" required />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="email" required />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="message" required></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Button from "./Button.vue";

const name = ref("");
const email = ref("");
const message = ref("");

const submitForm = () => {
  alert("Form submitted!");
};
</script>

<style>
  .contact {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .form-group {
    margin: 1rem 0;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  label {
    font-size: 1rem;
    color: #ffc576;
    font-weight: 600;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.5rem;
    border: none;
    border-radius: 0.5rem;
  }

  textarea {
    height: 6.5rem;
  }

@media screen and (min-width: 641px) {
  #envelope {
    width: 32rem;
    height: 20rem;
    background-color: #0d355f;
    position: relative;
    z-index: 2;
    top: 25%;
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;
    display: flex;
    align-self: end;
  }

  .right {
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    border-bottom: 20rem solid #1f6aa8;
    border-left: 32rem solid transparent;
    z-index: 1;
    right: 0;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  .left {
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    border-bottom: 20rem solid #297ccf;
    border-right: 32rem solid transparent;
    left: 0;
    border-radius: 0.5rem;
    z-index: 1;
  }

  #envelope::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 0;
    height: 0;
    border: 16rem solid transparent;
    border-bottom: 10rem solid #1f6aa8;
    z-index: -1;
  }

  @keyframes fadeSheet {
    0% {
      transform: translate(-50%, -50%);
    }
    100% {
      transform: translate(-50%, 0);
    }
  }

  .sheet {
    width: 88%;
    height: 30rem;
    background-color: whitesmoke;
    position: absolute;
    z-index: 0;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 0);
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    animation: fadeSheet 1s ease;
  }
}

@media screen and (max-width: 640px) {
  .contact {
    display: none;
  }
}
</style>
