<template>
  <div class="btn-group">
    <li class="btn">
        <slot></slot>
    </li>
  </div>
</template>

<style>
li {
  list-style: none;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 2rem;
}

a::before,
a::after {
  content: "";
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 50%;
  right: 50%;
  z-index: -1;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

a::before {
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  z-index: -2;
}

a::after {
  background-color: #261F40;
}

a:hover {
  color: #1f2235;
}

a:hover::before {
  opacity: 0.8;
}

a:hover::after {
  left: 0;
  right: 0;
}

li a {
  background: none;
  color: #261F40;
  display: block;
  font-size: 1rem;
  font-weight: 600;
  line-height: 30px;
  position: relative;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s;
  border: solid 1px #261F40;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  overflow: hidden;
}

li a:hover {
  color: #ffc576;
}

@media screen and (min-width: 360px) and (max-width: 640px)  {
  li a {
    cursor: pointer;
    background-color: #261F40;
    color: #ffc576;
  }
}
</style>