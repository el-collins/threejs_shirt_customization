import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  isTextTexture: false,
  font: 'Arial',
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
  textDecal: './threejs.png',
});

export default state;