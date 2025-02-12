'use client'
// Import required dependencies
import { useEffect } from 'react';

const Hero = () => {
  const getRandomOffset = () => (Math.random() * 4 - 2) + '%'; // Random value between -2% and 2%
  const getRandomOffset2 = () => (Math.random() * 2 - 1) + '%'; // Random value between -1% and 1%

  useEffect(() => {
    const polygons = document.querySelectorAll('.hero svg polygon');
    const groups = document.querySelectorAll('.hero svg path');
  
    const updatePositions = () => {
      polygons.forEach(polygon => {
        polygon.style.transform = `translate(${getRandomOffset2()}, ${getRandomOffset()})`;
      });
  
      groups.forEach(group => {
        group.style.transform = `translateY(${getRandomOffset()})`;
      });
    };
  
    updatePositions(); // Set initial positions
  
    const interval = setInterval(updatePositions, 100); // Change position every second
  
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  function print(){
    window.print();
  }
  

  return (
    <div className="hero">
      <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 793.65 460.12">

    <polygon points="70.27 18.36 46.62 18.36 46.62 25.65 40.55 25.65 40.55 35.72 76.28 35.72 76.28 25.65 70.27 25.65 70.27 18.36" />
    <polygon points="34.55 54.09 10.9 54.09 10.9 61.38 4.83 61.38 4.83 71.45 40.55 71.45 40.55 61.38 34.55 61.38 34.55 54.09" />
    <polygon points="105.99 54.09 82.34 54.09 82.34 61.38 76.28 61.38 76.28 71.45 112 71.45 112 61.38 105.99 61.38 105.99 54.09" />
    <polygon points="34.55 89.81 10.9 89.81 10.9 97.1 4.83 97.1 4.83 107.17 40.55 107.17 40.55 97.1 34.55 97.1 34.55 89.81" />
    <polygon points="70.27 89.81 46.62 89.81 46.62 97.1 40.55 97.1 40.55 107.17 76.28 107.17 76.28 97.1 70.27 97.1 70.27 89.81" />
    <polygon points="105.99 89.81 82.34 89.81 82.34 97.1 76.28 97.1 76.28 107.17 112 107.17 112 97.1 105.99 97.1 105.99 89.81" />
    <polygon points="34.55 125.53 10.9 125.53 10.9 132.82 4.83 132.82 4.83 142.89 40.55 142.89 40.55 132.82 34.55 132.82 34.55 125.53" />
    <polygon points="70.27 161.26 46.62 161.26 46.62 168.54 40.55 168.54 40.55 178.62 76.28 178.62 76.28 168.54 70.27 168.54 70.27 161.26" />
    <polygon points="105.99 161.26 82.34 161.26 82.34 168.54 76.28 168.54 76.28 178.62 112 178.62 112 168.54 105.99 168.54 105.99 161.26" />
    <polygon points="162.98 18.36 139.33 18.36 139.33 25.65 133.26 25.65 133.26 35.72 168.99 35.72 168.99 25.65 162.98 25.65 162.98 18.36" />
    <polygon points="198.7 18.36 175.05 18.36 175.05 25.65 168.99 25.65 168.99 35.72 204.71 35.72 204.71 25.65 198.7 25.65 198.7 18.36" />
    <polygon points="162.98 54.09 139.33 54.09 139.33 61.38 133.26 61.38 133.26 71.45 168.99 71.45 168.99 61.38 162.98 61.38 162.98 54.09" />
    <polygon points="234.43 54.09 210.77 54.09 210.77 61.38 204.71 61.38 204.71 71.45 240.43 71.45 240.43 61.38 234.43 61.38 234.43 54.09" />
    <polygon points="162.98 89.81 139.33 89.81 139.33 97.1 133.26 97.1 133.26 107.17 168.99 107.17 168.99 97.1 162.98 97.1 162.98 89.81" />
    <polygon points="234.43 89.81 210.77 89.81 210.77 97.1 204.71 97.1 204.71 107.17 240.43 107.17 240.43 97.1 234.43 97.1 234.43 89.81" />
    <polygon points="162.98 125.53 139.33 125.53 139.33 132.82 133.26 132.82 133.26 142.89 168.99 142.89 168.99 132.82 162.98 132.82 162.98 125.53" />
    <polygon points="234.43 125.53 210.77 125.53 210.77 132.82 204.71 132.82 204.71 142.89 240.43 142.89 240.43 132.82 234.43 132.82 234.43 125.53" />
    <polygon points="162.98 161.26 139.33 161.26 139.33 168.54 133.26 168.54 133.26 178.62 168.99 178.62 168.99 168.54 162.98 168.54 162.98 161.26" />
    <polygon points="234.43 161.26 210.77 161.26 210.77 168.54 204.71 168.54 204.71 178.62 240.43 178.62 240.43 168.54 234.43 168.54 234.43 161.26" />
    <polygon points="327.13 18.36 303.48 18.36 303.48 25.65 297.42 25.65 297.42 35.72 333.14 35.72 333.14 25.65 327.13 25.65 327.13 18.36" />
    <polygon points="291.41 54.09 267.76 54.09 267.76 61.38 261.69 61.38 261.69 71.45 297.42 71.45 297.42 61.38 291.41 61.38 291.41 54.09" />
    <polygon points="362.86 54.09 339.21 54.09 339.21 61.38 333.14 61.38 333.14 71.45 368.86 71.45 368.86 61.38 362.86 61.38 362.86 54.09" />
    <polygon points="291.41 89.81 267.76 89.81 267.76 97.1 261.69 97.1 261.69 107.17 297.42 107.17 297.42 97.1 291.41 97.1 291.41 89.81" />
    <polygon points="362.86 89.81 339.21 89.81 339.21 97.1 333.14 97.1 333.14 107.17 368.86 107.17 368.86 97.1 362.86 97.1 362.86 89.81" />
    <polygon points="327.13 125.53 303.48 125.53 303.48 132.82 297.42 132.82 297.42 142.89 333.14 142.89 333.14 132.82 327.13 132.82 327.13 125.53" />
    <polygon points="362.86 125.53 339.21 125.53 339.21 132.82 333.14 132.82 333.14 142.89 368.86 142.89 368.86 132.82 362.86 132.82 362.86 125.53" />
    <polygon points="362.86 161.26 339.21 161.26 339.21 168.54 333.14 168.54 333.14 178.62 368.86 178.62 368.86 168.54 362.86 168.54 362.86 161.26" />
    <polygon points="291.41 196.98 267.76 196.98 267.76 204.27 261.69 204.27 261.69 214.34 297.42 214.34 297.42 204.27 291.41 204.27 291.41 196.98" />
    <polygon points="327.13 196.98 303.48 196.98 303.48 204.27 297.42 204.27 297.42 214.34 333.14 214.34 333.14 204.27 327.13 204.27 327.13 196.98" />
    <polygon points="419.84 18.36 396.19 18.36 396.19 25.65 390.12 25.65 390.12 35.72 425.85 35.72 425.85 25.65 419.84 25.65 419.84 18.36" />
    <polygon points="455.56 18.36 431.91 18.36 431.91 25.65 425.85 25.65 425.85 35.72 461.57 35.72 461.57 25.65 455.56 25.65 455.56 18.36" />
    <polygon points="491.29 54.09 467.64 54.09 467.64 61.38 461.57 61.38 461.57 71.45 497.3 71.45 497.3 61.38 491.29 61.38 491.29 54.09" />
    <polygon points="419.84 89.81 396.19 89.81 396.19 97.1 390.12 97.1 390.12 107.17 425.85 107.17 425.85 97.1 419.84 97.1 419.84 89.81" />
    <polygon points="455.56 89.81 431.91 89.81 431.91 97.1 425.85 97.1 425.85 107.17 461.57 107.17 461.57 97.1 455.56 97.1 455.56 89.81" />
    <polygon points="491.29 89.81 467.64 89.81 467.64 97.1 461.57 97.1 461.57 107.17 497.3 107.17 497.3 97.1 491.29 97.1 491.29 89.81" />
    <polygon points="419.84 125.53 396.19 125.53 396.19 132.82 390.12 132.82 390.12 142.89 425.85 142.89 425.85 132.82 419.84 132.82 419.84 125.53" />
    <polygon points="491.29 125.53 467.64 125.53 467.64 132.82 461.57 132.82 461.57 142.89 497.3 142.89 497.3 132.82 491.29 132.82 491.29 125.53" />
    <polygon points="455.56 161.26 431.91 161.26 431.91 168.54 425.85 168.54 425.85 178.62 461.57 178.62 461.57 168.54 455.56 168.54 455.56 161.26" />
    <polygon points="491.29 161.26 467.64 161.26 467.64 168.54 461.57 168.54 461.57 178.62 497.3 178.62 497.3 168.54 491.29 168.54 491.29 161.26" />
    <polygon points="583.99 18.36 560.34 18.36 560.34 25.65 554.28 25.65 554.28 35.72 590 35.72 590 25.65 583.99 25.65 583.99 18.36" />
    <polygon points="548.27 54.09 524.62 54.09 524.62 61.38 518.56 61.38 518.56 71.45 554.28 71.45 554.28 61.38 548.27 61.38 548.27 54.09" />
    <polygon points="619.72 54.09 596.07 54.09 596.07 61.38 590 61.38 590 71.45 625.73 71.45 625.73 61.38 619.72 61.38 619.72 54.09" />
    <polygon points="548.27 89.81 524.62 89.81 524.62 97.1 518.56 97.1 518.56 107.17 554.28 107.17 554.28 97.1 548.27 97.1 548.27 89.81" />
    <polygon points="619.72 89.81 596.07 89.81 596.07 97.1 590 97.1 590 107.17 625.73 107.17 625.73 97.1 619.72 97.1 619.72 89.81" />
    <polygon points="583.99 125.53 560.34 125.53 560.34 132.82 554.28 132.82 554.28 142.89 590 142.89 590 132.82 583.99 132.82 583.99 125.53" />
    <polygon points="619.72 125.53 596.07 125.53 596.07 132.82 590 132.82 590 142.89 625.73 142.89 625.73 132.82 619.72 132.82 619.72 125.53" />
    <polygon points="619.72 161.26 596.07 161.26 596.07 168.54 590 168.54 590 178.62 625.73 178.62 625.73 168.54 619.72 168.54 619.72 161.26" />
    <polygon points="548.27 196.98 524.62 196.98 524.62 204.27 518.56 204.27 518.56 214.34 554.28 214.34 554.28 204.27 548.27 204.27 548.27 196.98" />
    <polygon points="583.99 196.98 560.34 196.98 560.34 204.27 554.28 204.27 554.28 214.34 590 214.34 590 204.27 583.99 204.27 583.99 196.98" />
    <polygon points="712.42 18.36 688.78 18.36 688.78 25.65 682.71 25.65 682.71 35.72 718.43 35.72 718.43 25.65 712.42 25.65 712.42 18.36" />
    <polygon points="676.7 54.09 653.05 54.09 653.05 61.38 646.99 61.38 646.99 71.45 682.71 71.45 682.71 61.38 676.7 61.38 676.7 54.09" />
    <polygon points="748.15 54.09 724.5 54.09 724.5 61.38 718.43 61.38 718.43 71.45 754.16 71.45 754.16 61.38 748.15 61.38 748.15 54.09" />
    <polygon points="676.7 89.81 653.05 89.81 653.05 97.1 646.99 97.1 646.99 107.17 682.71 107.17 682.71 97.1 676.7 97.1 676.7 89.81" />
    <polygon points="712.42 89.81 688.78 89.81 688.78 97.1 682.71 97.1 682.71 107.17 718.43 107.17 718.43 97.1 712.42 97.1 712.42 89.81" />
    <polygon points="748.15 89.81 724.5 89.81 724.5 97.1 718.43 97.1 718.43 107.17 754.16 107.17 754.16 97.1 748.15 97.1 748.15 89.81" />
    <polygon points="676.7 125.53 653.05 125.53 653.05 132.82 646.99 132.82 646.99 142.89 682.71 142.89 682.71 132.82 676.7 132.82 676.7 125.53" />
    <polygon points="712.42 161.26 688.78 161.26 688.78 168.54 682.71 168.54 682.71 178.62 718.43 178.62 718.43 168.54 712.42 168.54 712.42 161.26" />
    <polygon points="748.15 161.26 724.5 161.26 724.5 168.54 718.43 168.54 718.43 178.62 754.16 178.62 754.16 168.54 748.15 168.54 748.15 161.26" />
    <path d="m279.56,195.03c9.35,0,17.03-7.23,17.86-16.41h-35.72c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m315.28,195.03c9.35,0,17.03-7.23,17.86-16.41h-35.73c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m536.42,195.03c9.35,0,17.03-7.23,17.86-16.41h-35.72c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m572.14,195.03c9.35,0,17.03-7.23,17.86-16.41h-35.73c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m58.42,16.41c9.35,0,17.03-7.23,17.86-16.41h-35.73c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m151.13,16.41c9.35,0,17.03-7.23,17.86-16.41h-35.72c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m186.85,16.41c9.35,0,17.03-7.23,17.86-16.41h-35.73c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m315.28,16.41c9.35,0,17.03-7.23,17.86-16.41h-35.73c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m407.99,16.41c9.35,0,17.03-7.23,17.86-16.41h-35.72c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m443.71,16.41c9.35,0,17.03-7.23,17.86-16.41h-35.73c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m572.14,16.41c9.35,0,17.03-7.23,17.86-16.41h-35.73c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m700.57,16.41c9.35,0,17.03-7.23,17.86-16.41h-35.73c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m22.69,52.14c9.35,0,17.03-7.24,17.86-16.42H4.83c.84,9.18,8.51,16.42,17.86,16.42Z" />
    <path d="m94.14,52.14c9.35,0,17.03-7.24,17.86-16.42h-35.72c.83,9.18,8.51,16.42,17.86,16.42Z" />
    <path d="m151.13,52.14c9.35,0,17.03-7.24,17.86-16.42h-35.72c.84,9.18,8.51,16.42,17.86,16.42Z" />
    <path d="m222.57,52.14c9.35,0,17.03-7.24,17.86-16.42h-35.72c.83,9.18,8.51,16.42,17.86,16.42Z" />
    <path d="m279.56,52.14c9.35,0,17.03-7.24,17.86-16.42h-35.72c.84,9.18,8.51,16.42,17.86,16.42Z" />
    <path d="m351,52.14c9.35,0,17.03-7.24,17.86-16.42h-35.72c.83,9.18,8.51,16.42,17.86,16.42Z" />
    <path d="m479.43,52.14c9.35,0,17.03-7.24,17.86-16.42h-35.72c.83,9.18,8.51,16.42,17.86,16.42Z" />
    <path d="m536.42,52.14c9.35,0,17.03-7.24,17.86-16.42h-35.72c.84,9.18,8.51,16.42,17.86,16.42Z" />
    <path d="m607.86,52.14c9.35,0,17.03-7.24,17.86-16.42h-35.72c.83,9.18,8.51,16.42,17.86,16.42Z" />
    <path d="m664.85,52.14c9.35,0,17.03-7.24,17.86-16.42h-35.72c.84,9.18,8.51,16.42,17.86,16.42Z" />
    <path d="m736.29,52.14c9.35,0,17.03-7.24,17.86-16.42h-35.72c.83,9.18,8.51,16.42,17.86,16.42Z" />
    <path d="m22.69,87.86c9.35,0,17.03-7.23,17.86-16.41H4.83c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m58.42,87.86c9.35,0,17.03-7.23,17.86-16.41h-35.73c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m94.14,87.86c9.35,0,17.03-7.23,17.86-16.41h-35.72c.83,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m151.13,87.86c9.35,0,17.03-7.23,17.86-16.41h-35.72c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m222.57,87.86c9.35,0,17.03-7.23,17.86-16.41h-35.72c.83,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m279.56,87.86c9.35,0,17.03-7.23,17.86-16.41h-35.72c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m351,87.86c9.35,0,17.03-7.23,17.86-16.41h-35.72c.83,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m407.99,87.86c9.35,0,17.03-7.23,17.86-16.41h-35.72c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m443.71,87.86c9.35,0,17.03-7.23,17.86-16.41h-35.73c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m479.43,87.86c9.35,0,17.03-7.23,17.86-16.41h-35.72c.83,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m536.42,87.86c9.35,0,17.03-7.23,17.86-16.41h-35.72c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m607.86,87.86c9.35,0,17.03-7.23,17.86-16.41h-35.72c.83,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m664.85,87.86c9.35,0,17.03-7.23,17.86-16.41h-35.72c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m700.57,87.86c9.35,0,17.03-7.23,17.86-16.41h-35.73c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m736.29,87.86c9.35,0,17.03-7.23,17.86-16.41h-35.72c.83,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m22.69,123.59c9.35,0,17.03-7.23,17.86-16.41H4.83c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m151.13,123.59c9.35,0,17.03-7.23,17.86-16.41h-35.72c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m222.57,123.59c9.35,0,17.03-7.23,17.86-16.41h-35.72c.83,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m315.28,123.59c9.35,0,17.03-7.23,17.86-16.41h-35.73c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m351,123.59c9.35,0,17.03-7.23,17.86-16.41h-35.72c.83,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m407.99,123.59c9.35,0,17.03-7.23,17.86-16.41h-35.72c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m479.43,123.59c9.35,0,17.03-7.23,17.86-16.41h-35.72c.83,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m572.14,123.59c9.35,0,17.03-7.23,17.86-16.41h-35.73c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m607.86,123.59c9.35,0,17.03-7.23,17.86-16.41h-35.72c.83,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m664.85,123.59c9.35,0,17.03-7.23,17.86-16.41h-35.72c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m58.42,159.31c9.35,0,17.03-7.23,17.86-16.41h-35.73c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m94.14,159.31c9.35,0,17.03-7.23,17.86-16.41h-35.72c.83,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m151.13,159.31c9.35,0,17.03-7.23,17.86-16.41h-35.72c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m222.57,159.31c9.35,0,17.03-7.23,17.86-16.41h-35.72c.83,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m351,159.31c9.35,0,17.03-7.23,17.86-16.41h-35.72c.83,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m443.71,159.31c9.35,0,17.03-7.23,17.86-16.41h-35.73c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m479.43,159.31c9.35,0,17.03-7.23,17.86-16.41h-35.72c.83,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m607.86,159.31c9.35,0,17.03-7.23,17.86-16.41h-35.72c.83,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m700.57,159.31c9.35,0,17.03-7.23,17.86-16.41h-35.73c.84,9.18,8.51,16.41,17.86,16.41Z" />
    <path d="m736.29,159.31c9.35,0,17.03-7.23,17.86-16.41h-35.72c.83,9.18,8.51,16.41,17.86,16.41Z" />
    <polygon points="18.41 215.38 18.41 239.1 25.73 239.1 25.73 245.18 35.82 245.18 35.82 209.36 25.73 209.36 25.73 215.38 18.41 215.38" />
    <path d="m16.46,227.27c0-9.37-7.25-17.08-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="18.41 251.2 18.41 274.92 25.73 274.92 25.73 281 35.82 281 35.82 245.18 25.73 245.18 25.73 251.2 18.41 251.2" />
    <path d="m16.46,263.09c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="18.41 287.03 18.41 310.74 25.73 310.74 25.73 316.83 35.82 316.83 35.82 281 25.73 281 25.73 287.03 18.41 287.03" />
    <path d="m16.46,298.91c0-9.37-7.25-17.07-16.46-17.91v35.83c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="54.24 287.03 54.24 310.74 61.55 310.74 61.55 316.83 71.65 316.83 71.65 281 61.55 281 61.55 287.03 54.24 287.03" />
    <path d="m52.29,298.91c0-9.37-7.26-17.07-16.46-17.91v35.83c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="18.41 322.85 18.41 346.57 25.73 346.57 25.73 352.65 35.82 352.65 35.82 316.83 25.73 316.83 25.73 322.85 18.41 322.85" />
    <path d="m16.46,334.74c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="90.06 322.85 90.06 346.57 97.37 346.57 97.37 352.65 107.47 352.65 107.47 316.83 97.37 316.83 97.37 322.85 90.06 322.85" />
    <path d="m88.11,334.74c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="18.41 358.68 18.41 382.39 25.73 382.39 25.73 388.47 35.82 388.47 35.82 352.65 25.73 352.65 25.73 358.68 18.41 358.68" />
    <path d="m16.46,370.56c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="90.06 358.68 90.06 382.39 97.37 382.39 97.37 388.47 107.47 388.47 107.47 352.65 97.37 352.65 97.37 358.68 90.06 358.68" />
    <path d="m88.11,370.56c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="18.41 394.5 18.41 418.21 25.73 418.21 25.73 424.3 35.82 424.3 35.82 388.47 25.73 388.47 25.73 394.5 18.41 394.5" />
    <path d="m16.46,406.39c0-9.37-7.25-17.08-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="90.06 394.5 90.06 418.21 97.37 418.21 97.37 424.3 107.47 424.3 107.47 388.47 97.37 388.47 97.37 394.5 90.06 394.5" />
    <path d="m88.11,406.39c0-9.37-7.25-17.08-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="18.41 430.32 18.41 454.04 25.73 454.04 25.73 460.12 35.82 460.12 35.82 424.3 25.73 424.3 25.73 430.32 18.41 430.32" />
    <path d="m16.46,442.21c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="54.24 430.32 54.24 454.04 61.55 454.04 61.55 460.12 71.65 460.12 71.65 424.3 61.55 424.3 61.55 430.32 54.24 430.32" />
    <path d="m52.29,442.21c0-9.37-7.26-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="147.15 251.2 147.15 274.92 154.46 274.92 154.46 281 164.56 281 164.56 245.18 154.46 245.18 154.46 251.2 147.15 251.2" />
    <path d="m145.19,263.09c0-9.37-7.26-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="147.15 322.85 147.15 346.57 154.46 346.57 154.46 352.65 164.56 352.65 164.56 316.83 154.46 316.83 154.46 322.85 147.15 322.85" />
    <path d="m145.19,334.74c0-9.37-7.26-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="147.15 358.68 147.15 382.39 154.46 382.39 154.46 388.47 164.56 388.47 164.56 352.65 154.46 352.65 154.46 358.68 147.15 358.68" />
    <path d="m145.19,370.56c0-9.37-7.26-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="147.15 394.5 147.15 418.21 154.46 418.21 154.46 424.3 164.56 424.3 164.56 388.47 154.46 388.47 154.46 394.5 147.15 394.5" />
    <path d="m145.19,406.39c0-9.37-7.26-17.08-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="147.15 430.32 147.15 454.04 154.46 454.04 154.46 460.12 164.56 460.12 164.56 424.3 154.46 424.3 154.46 430.32 147.15 430.32" />
    <path d="m145.19,442.21c0-9.37-7.26-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="240.05 287.03 240.05 310.74 247.36 310.74 247.36 316.82 257.47 316.82 257.47 281 247.36 281 247.36 287.03 240.05 287.03" />
    <path d="m238.1,298.91c0-9.37-7.26-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="204.23 322.85 204.23 346.57 211.54 346.57 211.54 352.65 221.64 352.65 221.64 316.82 211.54 316.82 211.54 322.85 204.23 322.85" />
    <path d="m202.28,334.74c0-9.37-7.25-17.07-16.46-17.91v35.83c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="275.88 322.85 275.88 346.57 283.19 346.57 283.19 352.65 293.29 352.65 293.29 316.82 283.19 316.82 283.19 322.85 275.88 322.85" />
    <path d="m273.93,334.74c0-9.37-7.25-17.07-16.46-17.91v35.83c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="204.23 358.68 204.23 382.39 211.54 382.39 211.54 388.47 221.64 388.47 221.64 352.65 211.54 352.65 211.54 358.68 204.23 358.68" />
    <path d="m202.28,370.56c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="240.05 358.68 240.05 382.39 247.36 382.39 247.36 388.47 257.47 388.47 257.47 352.65 247.36 352.65 247.36 358.68 240.05 358.68" />
    <path d="m238.1,370.56c0-9.37-7.26-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="275.88 358.68 275.88 382.39 283.19 382.39 283.19 388.47 293.29 388.47 293.29 352.65 283.19 352.65 283.19 358.68 275.88 358.68" />
    <path d="m273.93,370.56c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="204.23 394.5 204.23 418.21 211.54 418.21 211.54 424.3 221.64 424.3 221.64 388.47 211.54 388.47 211.54 394.5 204.23 394.5" />
    <path d="m202.28,406.38c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="240.05 430.32 240.05 454.04 247.36 454.04 247.36 460.12 257.47 460.12 257.47 424.3 247.36 424.3 247.36 430.32 240.05 430.32" />
    <path d="m238.1,442.21c0-9.37-7.26-17.08-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="275.88 430.32 275.88 454.04 283.19 454.04 283.19 460.12 293.29 460.12 293.29 424.3 283.19 424.3 283.19 430.32 275.88 430.32" />
    <path d="m273.93,442.21c0-9.37-7.25-17.08-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="332.96 287.03 332.96 310.74 340.27 310.74 340.27 316.82 350.37 316.82 350.37 281 340.27 281 340.27 287.03 332.96 287.03" />
    <path d="m331.01,298.91c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="368.79 287.03 368.79 310.74 376.1 310.74 376.1 316.82 386.2 316.82 386.2 281 376.1 281 376.1 287.03 368.79 287.03" />
    <path d="m366.83,298.91c0-9.37-7.26-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="332.96 322.85 332.96 346.57 340.27 346.57 340.27 352.65 350.37 352.65 350.37 316.82 340.27 316.82 340.27 322.85 332.96 322.85" />
    <path d="m331.01,334.74c0-9.37-7.25-17.07-16.46-17.91v35.83c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="404.61 322.85 404.61 346.57 411.92 346.57 411.92 352.65 422.02 352.65 422.02 316.82 411.92 316.82 411.92 322.85 404.61 322.85" />
    <path d="m402.66,334.74c0-9.37-7.25-17.07-16.46-17.91v35.83c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="332.96 358.68 332.96 382.39 340.27 382.39 340.27 388.47 350.37 388.47 350.37 352.65 340.27 352.65 340.27 358.68 332.96 358.68" />
    <path d="m331.01,370.56c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="404.61 358.68 404.61 382.39 411.92 382.39 411.92 388.47 422.02 388.47 422.02 352.65 411.92 352.65 411.92 358.68 404.61 358.68" />
    <path d="m402.66,370.56c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="332.96 394.5 332.96 418.21 340.27 418.21 340.27 424.3 350.37 424.3 350.37 388.47 340.27 388.47 340.27 394.5 332.96 394.5" />
    <path d="m331.01,406.38c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="404.61 394.5 404.61 418.21 411.92 418.21 411.92 424.3 422.02 424.3 422.02 388.47 411.92 388.47 411.92 394.5 404.61 394.5" />
    <path d="m402.66,406.38c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="332.96 430.32 332.96 454.04 340.27 454.04 340.27 460.12 350.37 460.12 350.37 424.3 340.27 424.3 340.27 430.32 332.96 430.32" />
    <path d="m331.01,442.21c0-9.37-7.25-17.08-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="404.61 430.32 404.61 454.04 411.92 454.04 411.92 460.12 422.02 460.12 422.02 424.3 411.92 424.3 411.92 430.32 404.61 430.32" />
    <path d="m402.66,442.21c0-9.37-7.25-17.08-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="461.69 287.03 461.69 310.74 469 310.74 469 316.82 479.1 316.82 479.1 281 469 281 469 287.03 461.69 287.03" />
    <path d="m459.74,298.91c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="497.52 287.03 497.52 310.74 504.83 310.74 504.83 316.82 514.93 316.82 514.93 281 504.83 281 504.83 287.03 497.52 287.03" />
    <path d="m495.57,298.91c0-9.37-7.26-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="461.69 322.85 461.69 346.57 469 346.57 469 352.65 479.1 352.65 479.1 316.82 469 316.82 469 322.85 461.69 322.85" />
    <path d="m459.74,334.74c0-9.37-7.25-17.07-16.46-17.91v35.83c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="533.34 322.85 533.34 346.57 540.65 346.57 540.65 352.65 550.75 352.65 550.75 316.82 540.65 316.82 540.65 322.85 533.34 322.85" />
    <path d="m531.39,334.74c0-9.37-7.25-17.07-16.46-17.91v35.83c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="461.69 358.68 461.69 382.39 469 382.39 469 388.47 479.1 388.47 479.1 352.65 469 352.65 469 358.68 461.69 358.68" />
    <path d="m459.74,370.56c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="533.34 358.68 533.34 382.39 540.65 382.39 540.65 388.47 550.75 388.47 550.75 352.65 540.65 352.65 540.65 358.68 533.34 358.68" />
    <path d="m531.39,370.56c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="461.69 394.5 461.69 418.21 469 418.21 469 424.3 479.1 424.3 479.1 388.47 469 388.47 469 394.5 461.69 394.5" />
    <path d="m459.74,406.38c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="533.34 394.5 533.34 418.21 540.65 418.21 540.65 424.3 550.75 424.3 550.75 388.47 540.65 388.47 540.65 394.5 533.34 394.5" />
    <path d="m531.39,406.38c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="461.69 430.32 461.69 454.04 469 454.04 469 460.12 479.1 460.12 479.1 424.3 469 424.3 469 430.32 461.69 430.32" />
    <path d="m459.74,442.21c0-9.37-7.25-17.08-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="533.34 430.32 533.34 454.04 540.65 454.04 540.65 460.12 550.75 460.12 550.75 424.3 540.65 424.3 540.65 430.32 533.34 430.32" />
    <path d="m531.39,442.21c0-9.37-7.25-17.08-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="590.42 251.2 590.42 274.92 597.74 274.92 597.74 281 607.84 281 607.84 245.18 597.74 245.18 597.74 251.2 590.42 251.2" />
    <path d="m588.47,263.09c0-9.37-7.26-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="590.42 322.85 590.42 346.57 597.74 346.57 597.74 352.65 607.84 352.65 607.84 316.83 597.74 316.83 597.74 322.85 590.42 322.85" />
    <path d="m588.47,334.74c0-9.37-7.26-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="590.42 358.68 590.42 382.39 597.74 382.39 597.74 388.47 607.84 388.47 607.84 352.65 597.74 352.65 597.74 358.68 590.42 358.68" />
    <path d="m588.47,370.56c0-9.37-7.26-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="590.42 394.5 590.42 418.21 597.74 418.21 597.74 424.3 607.84 424.3 607.84 388.47 597.74 388.47 597.74 394.5 590.42 394.5" />
    <path d="m588.47,406.39c0-9.37-7.26-17.08-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="590.42 430.32 590.42 454.04 597.74 454.04 597.74 460.12 607.84 460.12 607.84 424.3 597.74 424.3 597.74 430.32 590.42 430.32" />
    <path d="m588.47,442.21c0-9.37-7.26-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="647.51 287.03 647.51 310.74 654.82 310.74 654.82 316.82 664.92 316.82 664.92 281 654.82 281 654.82 287.03 647.51 287.03" />
    <path d="m645.56,298.91c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="683.33 287.03 683.33 310.74 690.64 310.74 690.64 316.82 700.74 316.82 700.74 281 690.64 281 690.64 287.03 683.33 287.03" />
    <path d="m681.38,298.91c0-9.37-7.26-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="719.16 322.85 719.16 346.57 726.47 346.57 726.47 352.65 736.57 352.65 736.57 316.82 726.47 316.82 726.47 322.85 719.16 322.85" />
    <path d="m717.2,334.74c0-9.37-7.25-17.07-16.46-17.91v35.83c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="647.51 358.68 647.51 382.39 654.82 382.39 654.82 388.47 664.92 388.47 664.92 352.65 654.82 352.65 654.82 358.68 647.51 358.68" />
    <path d="m645.56,370.56c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="683.33 358.68 683.33 382.39 690.64 382.39 690.64 388.47 700.74 388.47 700.74 352.65 690.64 352.65 690.64 358.68 683.33 358.68" />
    <path d="m681.38,370.56c0-9.37-7.26-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="719.16 358.68 719.16 382.39 726.47 382.39 726.47 388.47 736.57 388.47 736.57 352.65 726.47 352.65 726.47 358.68 719.16 358.68" />
    <path d="m717.2,370.56c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="647.51 394.5 647.51 418.21 654.82 418.21 654.82 424.3 664.92 424.3 664.92 388.47 654.82 388.47 654.82 394.5 647.51 394.5" />
    <path d="m645.56,406.38c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="719.16 394.5 719.16 418.21 726.47 418.21 726.47 424.3 736.57 424.3 736.57 388.47 726.47 388.47 726.47 394.5 719.16 394.5" />
    <path d="m717.2,406.38c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="683.33 430.32 683.33 454.04 690.64 454.04 690.64 460.12 700.74 460.12 700.74 424.3 690.64 424.3 690.64 430.32 683.33 430.32" />
    <path d="m681.38,442.21c0-9.37-7.26-17.08-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="719.16 430.32 719.16 454.04 726.47 454.04 726.47 460.12 736.57 460.12 736.57 424.3 726.47 424.3 726.47 430.32 719.16 430.32" />
    <path d="m717.2,442.21c0-9.37-7.25-17.08-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="776.24 215.38 776.24 239.1 783.55 239.1 783.55 245.18 793.65 245.18 793.65 209.36 783.55 209.36 783.55 215.38 776.24 215.38" />
    <path d="m774.29,227.27c0-9.37-7.25-17.08-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="776.24 251.2 776.24 274.92 783.55 274.92 783.55 281 793.65 281 793.65 245.18 783.55 245.18 783.55 251.2 776.24 251.2" />
    <path d="m774.29,263.09c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="776.24 287.03 776.24 310.74 783.55 310.74 783.55 316.83 793.65 316.83 793.65 281 783.55 281 783.55 287.03 776.24 287.03" />
    <path d="m774.29,298.91c0-9.37-7.25-17.07-16.46-17.91v35.83c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="776.24 322.85 776.24 346.57 783.55 346.57 783.55 352.65 793.65 352.65 793.65 316.83 783.55 316.83 783.55 322.85 776.24 322.85" />
    <path d="m774.29,334.74c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="776.24 358.68 776.24 382.39 783.55 382.39 783.55 388.47 793.65 388.47 793.65 352.65 783.55 352.65 783.55 358.68 776.24 358.68" />
    <path d="m774.29,370.56c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="776.24 394.5 776.24 418.21 783.55 418.21 783.55 424.3 793.65 424.3 793.65 388.47 783.55 388.47 783.55 394.5 776.24 394.5" />
    <path d="m774.29,406.39c0-9.37-7.25-17.08-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />
    <polygon points="776.24 430.32 776.24 454.04 783.55 454.04 783.55 460.12 793.65 460.12 793.65 424.3 783.55 424.3 783.55 430.32 776.24 430.32" />
    <path d="m774.29,442.21c0-9.37-7.25-17.07-16.46-17.91v35.82c9.21-.84,16.46-8.54,16.46-17.91Z" />

      </svg>
      <div className='print' onClick={print}>Print</div>
    </div>

  );
};

export default Hero;
