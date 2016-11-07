//generated a random decimal number between 0 and 1
var randomNumber = Math.floor(Math.random());

function newQuote(){
  //quotes.legnth method always gets the current length of the array
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  var line = document.getElementById('line');
  var quoteDisplay = document.getElementById('quoteDisplay');
  quoteDisplay.innerHTML = quotes[randomNumber];
}

var quotes = [
  '"Love will come find you, just to remind you of who you are."<br><b>- Alicia Keys -</b>',
  '"And once the storm is over, you won’t remember how you made it through, how you managed to survive. You won’t even be sure, whether the storm is really over. But one thing is certain. When you come out of the storm, you won’t be the same person who walked in. That’s what this storm’s all about."<br><b>- Haruki Murakami -</b>',
  '"We can each define ambition and progress for ourselves. The goal is to work toward a world where expectations are not set by the stereotypes that hold us back, but by our personal passion, talents and interests."<br><b>- Sheryl Sandberg -</b>',
  '"Success is about dedication. You may not be where you want to be or do what you want to do when you\'re on the journey. But you\'ve got to be willing to have vision and foresight that leads you to an incredible end."<br><b>- Usher -</b>',
  '"If you put out 150 percent, then you can always expect 100 percent back. That\'s what I was always told as a kid, and It\'s worked for me so far!"<br><b>- Justin Timberlake -</b>',
  '"I find television very educating. Every time somebody turns on the set, I go into the other room and read a book."<br><b>- Groucho Marx -</b>',
  ' "People always ask me if I could live in any other era what would it be, and I tell them none! I feel so lucky to live in an age where technology has changed and continues to change and make life so much more exciting. It keeps everyone young and constantly learning new things." <br><b>- Nina Garcia -</b>',
  ' "A new journey to be started.<br>A new promise to be fulfilled.<br>A new page to be written.<br>Go forth unto this waiting world with pen in hand, all you young scribes, the open book awaits.<br>Be creative.<br>Be adventerous.<br>Be original.<br>And above all else, be young.<br>For youth is your greatest weapon, your greatest tool. Use it wisely." <br><b>- Wonder Woman -</b>',
  ' "I used to dream about escaping my ordinary life, but my life was never ordinary. I had simply failed to notice how extraordinary it was." <br><b>- Ransom Riggs, Miss Peregrine’s Home for Peculiar Children -</b>',
  ' "I am grateful for who I am and who I am not. I am grateful for the life I have been given and for all that I have and all that I don\'t. Every breath I take is a blessing and an opportunity to fully experience the sheer joy of being alive." <br><b>- Miranda Kerr -</b>',
  '"My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style." <br><b>- Maya Angelou -</b>'
];
