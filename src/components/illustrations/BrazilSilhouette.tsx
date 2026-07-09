/**
 * Contorno estilizado do Brasil — simplificado propositalmente (não é uma
 * projeção cartográfica precisa). Serve como pano de fundo atmosférico
 * para a seção de rota animada, na mesma linguagem de "mapas de rede"
 * usada por produtos de logística/dados.
 */
export function BrazilSilhouette({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 620" className={className} fill="none" aria-hidden="true">
      <path
        d="M 210 20
           C 300 10, 380 40, 430 90
           C 470 130, 460 170, 500 200
           C 545 235, 555 280, 530 320
           C 560 340, 570 380, 545 415
           C 565 440, 555 475, 520 490
           C 500 530, 460 545, 430 530
           C 415 565, 375 585, 340 570
           C 320 600, 275 605, 250 580
           C 205 585, 170 555, 175 515
           C 130 505, 105 465, 120 425
           C 80 400, 70 350, 100 315
           C 70 285, 75 235, 115 210
           C 100 170, 120 125, 165 105
           C 155 65, 180 30, 210 20 Z"
        fill="currentColor"
        fillOpacity="0.05"
        stroke="currentColor"
        strokeOpacity="0.14"
        strokeWidth="1.5"
      />
    </svg>
  )
}
