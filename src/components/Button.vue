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
  pointer-events: none;
}

.btn > * {
  pointer-events: auto;
}

.btn-link::before,
.btn-link::after {
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

.btn-link::before {
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  z-index: -2;
}

.btn-link::after {
  background-color: var(--background-element-hover-color);
}

.btn-link:hover {
  color: var(--text-color);
}

.btn-link:hover::before {
  opacity: 0.8;
}

.btn-link:hover::after {
  left: 0;
  right: 0;
}

.btn-link {
  background: none;
  color: var(--text-color);
  display: block;
  font-size: 1rem;
  font-weight: 600;
  line-height: 30px;
  position: relative;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s;
  border: solid 1px var(--text-color);
  padding: 0.5rem 1rem;
  overflow: hidden;
  cursor: pointer;
  width: 100%;
  text-align: center;
}

.btn-link:hover {
  color: var(--text-subtitle-color);
}

@media screen and (min-width: 360px) and (max-width: 640px) {
  .btn-link {
    cursor: pointer;
    background-color: var(--text-color);
    color: var(--text-subtitle-color);
  }
}
</style>
