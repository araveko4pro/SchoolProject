import { random } from 'https://deno.land/std@0.125.0/random/mod.ts';
const rand = (max) => Math.floor(Math.random() * max);
export const getRandomInt = () => {
  return rand(1000);
};