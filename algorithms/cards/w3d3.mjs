import { suits, ranks, emojis } from './cards.mjs';

/* 
  Deck of Cards

  From the imported arrays, create a function that
  builds a deck of cards. The deck will be a one-
  dimensional array of objects, such that each object
  represents one card in the deck.

  Example card: { suit: 'hearts', rank: '2' };
  
  Bonus: Use the included emoji matrix array to add
  a third property to each card.

  Example card with emoji property:
  { suit: 'hearts', rank: '2', emoji: '🂲' };
*/

function buildDeck(suits, ranks, emojis) {
  const deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      deck.push({ suit: suits[i], rank: ranks[j], emoji: emojis[i][j] });
    }
  }
  return deck;
}

/* 
  Shuffle
  
  Using the built deck, create a shuffle function
  implementing the Fisher-Yates shuffle algorithm.
  Return the deck after the shuffle.
  see: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
  for i from n−1 downto 1 do
     j ← random integer such that 0 ≤ j ≤ i
     exchange a[j] and a[i]
*/

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = deck[i];
    deck[i] = deck[j]
    deck[j] = temp;
  }
  return deck;
}

const deck = buildDeck(suits, ranks, emojis)
const shuffled = shuffleDeck(deck)
console.log(shuffled);