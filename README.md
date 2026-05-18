# 🤖 Projeto Agrinho: Espantalho Robótico Inteligente

Este repositório contém o código-fonte e a documentação para o desenvolvimento de um **Espantalho Robótico Inteligente**, um projeto de robótica educacional de baixo custo voltado para a sustentabilidade e inovação no campo.

## 🌾 Sobre o Projeto
O objetivo deste projeto é proteger pequenas hortas escolares ou comunitárias contra a invasão de aves e pequenos roedores de forma ética. Ao invés de usar armadilhas ou produtos químicos, utilizamos a tecnologia para criar um espantalho que ganha vida (emite sons e se move) apenas quando detecta a presença de um animal.

## 🛠️ Componentes Utilizados
* 1x Placa Arduino Uno
* 1x Sensor Ultrassônico HC-SR04 (Detecta a aproximação)
* 1x Micro Servo Motor 9g SG90 (Faz o movimento físico)
* 1x Buzzer Ativo 5V (Emite o alerta sonoro)
* Protoboard e Cabos Jumper
* Materiais recicláveis (Garrafas PET, retalhos de tecido e palha)

## 🔌 Circuito e Conexões
* **Sensor Ultrassônico:** VCC -> 5V | GND -> GND | Trig -> Pino 9 | Echo -> Pino 8
* **Servo Motor:** Vermelho -> 5V | Marrom -> GND | Laranja (Sinal) -> Pino 6
* **Buzzer:** Positivo (+) -> Pino 7 | Negativo (-) -> GND

## 🚀 Como Executar
1. Baixe e instale a [Arduino IDE](https://www.arduino.cc/en/software).
2. Baixe o arquivo `espantalho.ino` deste repositório.
3. Conecte seu Arduino ao computador via USB.
4. Abra o código na IDE, selecione a placa correta e clique em **Carregar (Upload)**.

---
*Projeto desenvolvido para a Feira do Agrinho. Contribuições e melhorias são sempre bem-vindas!*