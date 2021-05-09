function Instructions() {
   return (
     <div className='margin-div'>
       <h5>Welcome to my game</h5>
       <p>count letters game is self descriptive, count how many of the specified letter you can see in the matrix.</p>
       <p>In settings you can update whitespaces which is the space between rows and between columns. You can also modify the number of letters in the matrix and how many questions.</p>
       <p>In feedback you can see the global stats of the game. The score stats are filtered using the current settings (number of questions and letters). On the other hand, the stats for questions are not filtered.</p>
       <p>The 'Play' tab is... to play the game. That's it, hope you like it.</p>
      </div>
   );
 }
 
 export default Instructions;