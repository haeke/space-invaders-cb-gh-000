class Spaceship {
    constructor(name, crew, phasers, shields) {
        this.name = name;
        this.crew = crew;
        this.phasers = phasers;
        this.shields = shields;
        this.phasersCharge = 'uncharged';
        this.cloaked = false;
        this.warpDrive = 'disengaged';

        switch(crew.length <= 0) {
          case true:
            this.docked = true;
            break;
          case false:
            this.docked = false;
            break;
          default:
            break;
        }
        
        this.sendCrew();
    }
    
    sendCrew() {
      this.crew.forEach(crewMember => {
        crewMember.currentShip = this;
      });
    }
}
