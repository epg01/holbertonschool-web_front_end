function studentHogwarts(){
    let privateScore = 0;
    let name = 'default';

    function changeScoreBy (points) {
        privateScore += points;
    }
    return { 
        setName: function(newName) {
            name = newName;
        },
        rewardStudent: function() {
            changeScoreBy(1);
        },
        penalizeStudent: function() {
            changeScoreBy(-1);
        },
        getScore: function() {
            return name + ': ' + privateScore;
        }
    }
}
export default studentHogwarts;