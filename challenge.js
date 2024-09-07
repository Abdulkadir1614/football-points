// Good Luck! You got this 💪🏾
// Write your code here.

function calculatePoints (wins, draws, losses){
    const PerWin = 3;
    const PerDraw = 1;
    const PerLoss = 0;


    const totalPoints = (wins * PerWin)+(draws * PerDraw) + (losses * PerLoss);
    console.log(`The Total Points : ${totalPoints}`);
}
calculatePoints(5, 2 , 3);